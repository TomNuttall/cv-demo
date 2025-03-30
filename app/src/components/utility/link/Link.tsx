import { ExternalLink } from '../../../assets/icons'
import { IconLocation } from '../icon/IconDefs'
import Icon from '../icon'

import './Link.css'

const Link: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  href,
}) => {
  return (
    <div className="link">
      <Icon
        icon={<ExternalLink title="Opens in a new tab" />}
        iconLocation={IconLocation.RIGHT}
      >
        <a href={href} target="_blank">
          {children}
        </a>
      </Icon>
    </div>
  )
}

export default Link
