import { Country } from '../types/flags'

interface FlagPreview {
  country: Country
}


export default function FlagPreview(props: FlagPreview) {
  const countryName = props.country.name.common
  const countryImg = props.country.flags.png
  const countryPopulation = props.country.population
  const countryRegion = props.country.region
  const countryCapital = props.country.capital
  return (
    <li className='card glass  bg-base-100 shadow-xl'>
      <figure className=''>
        <img className='w-full max-h-48' src={countryImg} alt={countryName} />
      </figure>
      <div className="card-body p-6">
        <h2 className="card-title capitalize font-bold">{countryName}</h2>
        <p><span className='font-bold capitalize'>population:</span> {new Intl.NumberFormat().format(countryPopulation)}</p>
        <p><span className='font-bold capitalize'>region:</span> {countryRegion}</p>
        <p><span className='font-bold capitalize'>capital:</span> {countryCapital}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary capitalize">more detail</button>
        </div>
      </div>
    </li>
  )
}