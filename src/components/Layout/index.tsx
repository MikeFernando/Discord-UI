import React from 'react'

import { Grid } from './styles'

import ServerList from '../ServerList/index'
import ServerName from '../ServerName/index'
import ChannelInfo from '../ChannelInfo/index'
import ChannelList from '../ChannelList/index'
import UserInfo from '../UserInfo/index'
import UserList from '../UserList/index'
import ChannelData from '../ChannelData/index'

const Layout: React.FC = () => {
  return (
    <>
      <Grid>
        <ServerList />
        <ServerName />
        <ChannelInfo />
        <ChannelList />
        <UserInfo />
        <ChannelData />
        <UserList />
      </Grid>
    </>
  );
}

export default Layout