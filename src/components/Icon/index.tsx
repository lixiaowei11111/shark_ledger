import { FC, PropsWithChildren, SyntheticEvent } from "react"

interface IconProps {
  name: string // sl-${name}
  className?: string
  onClick?: (event: SyntheticEvent) => void
}
const Icon: FC<PropsWithChildren<IconProps>> = ({ name, className, ...props }) => {
  return <i className={`sl sl-${name} ${className}`} {...props} />
}

export default Icon
