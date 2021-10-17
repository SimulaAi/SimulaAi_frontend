import { Box } from '@mui/system'
import React from 'react'
import { SidebarItems } from '../sidebar-items'
import * as Styles from './styles'

interface SidebarProps {
  children: React.ReactNode
}

const Sidebar = ({ children }: SidebarProps) => {
  return (
    <Styles.Wrapper>
      <Styles.Drawer variant="permanent">
        <Styles.Toolbar />
        <Box>
          <SidebarItems />
        </Box>
      </Styles.Drawer>
      <Box>
        <Styles.Toolbar />
        {children}
      </Box>
    </Styles.Wrapper>
  )
}

export default Sidebar
