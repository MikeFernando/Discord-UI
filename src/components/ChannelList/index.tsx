import React from 'react'

import ChannelButton from '../ChannelButton/index'

import { Container, Category, AddCategoryIcon } from './styles'

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="lolzinho" />
      <ChannelButton channelName="free-fire" />
      <ChannelButton channelName="dotinha" />
      <ChannelButton channelName="valorant" />
      <ChannelButton channelName="cs-go" />
      <ChannelButton channelName="among us" />
    </Container>
  )
}

export default ChannelList