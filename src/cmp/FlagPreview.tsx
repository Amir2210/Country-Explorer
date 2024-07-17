import { Country } from '../types/flags'

interface FlagPreview {
  flag: Country
}


export default function FlagPreview(props: FlagPreview) {
  const flagName = props.flag.name.common
  const flagImg = props.flag.flags.png
  const flagPopulation = props.flag.population
  const flagRegion = props.flag.region
  const flagCapital = props.flag.capital
  return (
    <li className='card glass  bg-base-100 shadow-xl'>
      <figure className=''>
        <img className='w-full max-h-48' src={flagImg} alt={flagName} />
      </figure>
      <div className="card-body p-6">
        <h2 className="card-title capitalize font-bold">{flagName}</h2>
        <p><span className='font-bold capitalize'>population:</span> {new Intl.NumberFormat().format(flagPopulation)}</p>
        <p><span className='font-bold capitalize'>region:</span> {flagRegion}</p>
        <p><span className='font-bold capitalize'>capital:</span> {flagCapital}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary capitalize">more detail</button>
        </div>
      </div>
    </li>
  )
}