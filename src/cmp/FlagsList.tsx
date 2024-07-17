import { useEffect, useState } from 'react'
import { fethFlags } from '../service/flag.service'
type Props = {}

export default function FlagsList({ }: Props) {
  const [flags, setFlags] = useState([])
  useEffect(() => {
    async function getFlags() {
      try {
        const fetchedFlags = await fethFlags()
        setFlags(fetchedFlags)
      } catch (error) {
        alert('error to get flags')
      }
    }
    getFlags()
  }, [])
  console.log('flags:', flags)
  return (
    <div className='container min-w-full'>FlagsList</div>
  )
}