import {
  AppBar as MuiAppBar,
  Drawer as MuiDrawer,
  Toolbar as MuiToolBar
} from '@mui/material'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
`

export const AppBar = styled(MuiAppBar)`
  ${({ theme }) => css`
    background: ${theme.colors.primaryMedium};
    position: relative;
  `}
`

export const Toolbar = styled(MuiToolBar)``

export const Drawer = styled(MuiDrawer)`
  width: 150px;
  flex-shrink: 0;

  @media(max-width: 800px){
    width: 81px;
  }
`
