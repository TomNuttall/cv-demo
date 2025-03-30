import { Email, GitHubLogo } from '../../assets/icons'
import Icon from '../utility/icon'

import { Profile as ProfileProps } from '../../__generated__/graphql'

import './Profile.css'

const Profile: React.FC<ProfileProps> = ({ email, github, about }) => {
  return (
    <div className="profile">
      <div className="profile__links">
        <Icon icon={<GitHubLogo title="GitHub logo" />}>
          <a href={github}>{github}</a>
        </Icon>
        <Icon icon={<Email title="Email logo" />}>
          <a href={`mailto:${email}`}>{email}</a>
        </Icon>
      </div>
      <p>{about}</p>
    </div>
  )
}

export default Profile
