import { Country } from '../types/flags'
import FlagPreview from './FlagPreview'
import { useFetchCountries } from '../service/flag.service'
import { Hourglass } from 'react-loader-spinner'

type Props = {}

export default function FlagsList({ }: Props) {
  const { isLoading, data, isError, error } = useFetchCountries()
  const countries = data?.data
  if (!data?.data.length) return <h2 className='text-center capitalize'>no result try again...</h2>
  if (isError) return <h2>There was an error...</h2>
  if (error) return <h2>There was an error...</h2>
  if (!data) return (
    <div className='loader'>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#306cce', '#72a1ed']}
      />
    </div>
  )

  return (
    <div className='container min-w-full mt-10'>
      <ul className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
        {countries?.map((country: Country, index: number) => <FlagPreview country={country} key={index} />)}
      </ul>
    </div>
  )
}