import React from 'react';

// import avatar from '../../assets/face.jpg';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''}>
        {/* <img src={avatar} alt="Mike Fernando" /> */}
      </Avatar>

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User >
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Mike Fernando" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Othoniel Eduardo" isBot />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
    </Container>
  )
}

export default UserList;