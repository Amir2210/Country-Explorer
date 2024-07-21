import axios from 'axios';
import { useGlobalContext } from '../AppContext/AppContext';
import { useQuery } from 'react-query';


export function useFetchCountries() {
  const { searchInput, regionInput } = useGlobalContext()
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['flags', searchInput, regionInput],
    queryFn: async function fetchCountries() {
      try {
        if (!searchInput && !regionInput) {
          const res = await axios.get('https://restcountries.com/v3.1/all')
          return res
        } else if (searchInput) {
          const res = await axios.get(`https://restcountries.com/v3.1/name/${searchInput}`)
          return res
        } else {
          const res = await axios.get(`https://restcountries.com/v3.1/region/${regionInput}`)
          return res
        }
      } catch (error) {
        throw new Error('failed to get flags')
      }
    }
  })
  return { isLoading, data, isError, error }
}

export function useFetchSingleCountry(countryName: string = 'usa') {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['flag', countryName],
    queryFn: async function fetchSingleCountry() {
      try {
        const res = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
        return res
      } catch (error) {
        throw new Error('failed to get country')
      }
    }
  })
  return { isLoading, data, isError, error }
}