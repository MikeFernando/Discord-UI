import React from 'react';

import { Container, HastagIcon, InviteIcon, SettingIcons } from './styles';

export interface Props {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({
  channelName,
  selected
}) => {
  return (
    <Container className={selected ? 'active' : ''}>
      <div>
        <HastagIcon />
        <span>{channelName}</span>
      </div>

      <div>
        <InviteIcon />
        <SettingIcons />
      </div>
    </Container>
  )
}

export default ChannelButton;