import { Link, useParams } from 'react-router-dom'
import Navbar from '../cmp/Navbar'
import { useFetchSingleCountry } from '../service/flag.service'
import { Hourglass } from 'react-loader-spinner';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FcGlobe } from "react-icons/fc";

type Props = {}

function isErrorWithMessage(error: unknown): error is { message: string } {
  return typeof error === 'object' && error !== null && 'message' in error;
}

export default function FlagDetail({ }: Props) {
  const { countryName } = useParams()
  const { isLoading, data, isError, error } = useFetchSingleCountry(countryName)
  const country = data?.data
  const singleCountry = country && country.length > 0 ? country[0] : null;
  console.log('singleCountry:', singleCountry)
  const countryImg = singleCountry?.flags?.png
  const countryCapital = singleCountry?.capital
  const countryPopulation = singleCountry?.population
  const countryRegion = singleCountry?.region
  const countryMap = singleCountry?.maps.googleMaps
  const countryLanguages = singleCountry?.languages
  let languagesArray = []
  for (const lng in countryLanguages) {
    languagesArray.push(countryLanguages[lng])
  }
  if (isLoading) {
    return (
      <div className="flex justify-center items-center mt-10">
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass="hourglass-wrapper"
          colors={['#4fa94d', '#a3e635',]}
        />
      </div>
    );
  }

  if (isError && isErrorWithMessage(error)) {
    return (
      <div className="flex justify-center items-center mt-10">
        <p className="text-red-500">Error: {error.message}</p>
      </div>
    )
  }


  return (
    <main>
      <Navbar />
      <section className='container min-w-full mt-10'>
        <Link to={'/'} className='btn capitalize gap-4'><FaLongArrowAltLeft />back</Link>
        <article className='my-5 gap-5 flex flex-col sm:flex-row sm:items-center sm:gap-14 font-mono'>
          <img className='h-72 rounded-md' src={countryImg} alt={countryName} />
          <div className='px-2'>
            <h1 className='text-4xl mt-4'>{countryName}</h1>
            <p className='text-2xl mt-2 capitalize'>capital: {countryCapital}</p>
            <p className='text-2xl mt-2 capitalize'>population: {new Intl.NumberFormat().format(countryPopulation)}</p>
            <p className='text-2xl mt-2 capitalize'>region: {countryRegion}</p>
            <p className='text-2xl mt-2'>languages:{languagesArray.map((lng, index) => index === languagesArray.length - 1 ? lng : lng + ', ')}</p>
          </div>
          <div>
            <Link className='underline underline-offset-8' to={countryMap} target='_blank'>
              <h1 className='capitalize text-lg flex items-center gap-3'>{countryName} on google maps <FcGlobe /></h1>
            </Link>
          </div>
        </article>
      </section>
    </main >
  )
}