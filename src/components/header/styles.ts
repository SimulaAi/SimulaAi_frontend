import {
  AppBar as MuiAppBar,
  Toolbar as MuiToolBar
} from '@mui/material'
import styled from 'styled-components'

export const AppBar = styled(MuiAppBar)`
  background-color: white;
  color: inherit;
`

export const Toolbar = styled(MuiToolBar)`
`

export const Container = styled.div`
  width: 100%;
  margin-left: 85px;
`

export const Content = styled.div`
  &&& {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const UserDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

export const Credits = styled.div`
  cursor: pointer;
`
