import React from 'react';

import imgAvatar from '../../assets/face.jpg'

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcon,
  SettingIcon
} from './styles';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar>
          <img src={imgAvatar} alt="Rockeseat" />
        </Avatar>
        <UserData>
          <strong> Mike Fernando</strong>
          <span>#2279</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingIcon />
      </Icons>
    </Container>
  )
}

export default UserInfo;