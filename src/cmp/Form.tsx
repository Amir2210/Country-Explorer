import { useEffect, useState } from 'react'
import useDebounce from '../customHook/debounce'
import { useGlobalContext } from '../AppContext/AppContext'
type Props = {}

export default function Form({ }: Props) {
  const { onSearchFlags } = useGlobalContext()
  const [country, setCountry] = useState<string>('')
  const debouncedCountry = useDebounce<string>(country, 500);

  useEffect(() => {
    onSearchFlags(debouncedCountry);
  }, [debouncedCountry, onSearchFlags]);

  function handleInputChange(country: string) {
    setCountry(country)
  }
  return (
    <form className='container  mt-10'>
      <label className="input input-bordered flex items-center gap-2">
        <input value={country} name='country' type="text" className="grow" placeholder="Search" onChange={(e) => handleInputChange(e.target.value)} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70">
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd" />
        </svg>
      </label>
    </form>
  )
}