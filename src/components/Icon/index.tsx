import { FC } from "react"

interface IconProps {
  name: string // sl-${name}
}
const Icon: FC<IconProps> = ({ name }) => {
  return <i className={`sl sl-${name}`}></i>
}

export default Icon
