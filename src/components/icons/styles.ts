import { AccountBalanceWallet, AddCircle, Home, PowerSettingsNew, ShoppingCart, SportsEsports } from '@mui/icons-material'
import { Avatar as MuiAvatar } from '@mui/material'
import styled, { css } from 'styled-components'

export const WalletIcon = styled(AccountBalanceWallet)`
 ${({ theme }) => css`
    &&& {
      color: ${theme.colors.primary_light};
      font-size: ${theme.font.icon_font};
    }
 `}
`

export const Avatar = styled(MuiAvatar)`
${({ theme }) => css`
    &&& {
      color: ${theme.colors.primary_light};
      font-size: ${theme.font.icon_font};
    }
 `}
`

export const HomeIcon = styled(Home)`
${({ theme }) => css`
    &&& {
      color: ${theme.colors.primary_light};
      font-size: ${theme.font.icon_font};
    }
 `}
`

export const ShoppingIcon = styled(ShoppingCart)`
${({ theme }) => css`
    &&& {
      color: ${theme.colors.primary_light};
      font-size: ${theme.font.icon_font};
    }
 `}
`

export const GameController = styled(SportsEsports)`
${({ theme }) => css`
    &&& {
      color: ${theme.colors.primary_light};
      font-size: ${theme.font.icon_font};
    }
 `}
`

export const PowerDownIcon = styled(PowerSettingsNew)`
${({ theme }) => css`
    &&& {
      color: ${theme.colors.primary_light};
      font-size: ${theme.font.icon_font};
    }
 `}
`

export const AddNewGameIcon = styled(AddCircle)`
${({ theme }) => css`
    &&& {
      color: ${theme.colors.primary_light};
      font-size: ${theme.font.icon_font};
    }
 `}
`
