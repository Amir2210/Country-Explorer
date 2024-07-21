import { Country } from '../types/flags'
import FlagPreview from './FlagPreview'
import { useFetchCountries } from '../service/flag.service'
import { Hourglass } from 'react-loader-spinner'

type Props = {}

function isErrorWithMessage(error: unknown): error is { message: string } {
  return typeof error === 'object' && error !== null && 'message' in error;
}

export default function FlagsList({ }: Props) {
  const { isLoading, data, isError, error } = useFetchCountries()
  const countries = data?.data


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
    <div className='container min-w-full mt-10'>
      <ul className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
        {countries?.map((country: Country, index: number) => <FlagPreview country={country} key={index} />)}
      </ul>
    </div>
  )
}