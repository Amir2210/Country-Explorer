import { useEffect, useState } from 'react'
import { fetchFlags } from '../service/flag.service'
import { Country } from '../types/flags'
import FlagPreview from './FlagPreview'
type Props = {}

export default function FlagsList({ }: Props) {
  const [flags, setFlags] = useState<Country[]>([])
  useEffect(() => {
    async function getFlags() {
      try {
        const fetchedFlags = await fetchFlags()
        setFlags(fetchedFlags)
      } catch (error) {
        alert('error to get flags')
      }
    }
    getFlags()
  }, [])
  console.log('flags:', flags)
  return (
    <div className='container min-w-full mt-10'>
      <ul className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
        {flags?.map((flag, index) => <FlagPreview flag={flag} key={index} />)}
      </ul>
    </div>
  )
}