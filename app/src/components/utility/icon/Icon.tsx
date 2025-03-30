import { IconLocation } from './IconDefs'

import './Icon.css'

type IconProps = {
  icon: React.ReactNode
  iconLocation?: IconLocation
}

const Icon: React.FC<React.PropsWithChildren<IconProps>> = ({
  children,
  icon,
  iconLocation = IconLocation.LEFT,
}) => {
  return (
    <div className="icon">
      {icon && iconLocation === IconLocation.LEFT && icon}
      {children}
      {icon && iconLocation === IconLocation.RIGHT && icon}
    </div>
  )
}

export default Icon
