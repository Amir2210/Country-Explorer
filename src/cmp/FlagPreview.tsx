import { Country } from '../types/flags'

interface FlagPreview {
  flag: Country
}


export default function FlagPreview(props: FlagPreview) {
  const flagName = props.flag.name.common
  const flag = props.flag.flags.png
  return (
    <li>
      <img src={flag} alt={flagName} />
    </li>
  )
}