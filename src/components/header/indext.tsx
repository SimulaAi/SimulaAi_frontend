import { Avatar } from '../avatar/styles'
import { WalletIcon } from '../icons/styles'
import * as Styles from './styles'

export const Header = () => {
  return (
    <Styles.Toolbar>
      <Styles.Container>
        <Styles.Content>
          <Styles.UserInfo>
            <Avatar variant='square' src="https://avatars.githubusercontent.com/u/54569472?v=4"></Avatar>
            <Styles.UserDescription>
              <span>Fulano de Tal</span>
              <span>Moderador</span>
            </Styles.UserDescription>
          </Styles.UserInfo>
          <Styles.Credits>
            <WalletIcon />
          </Styles.Credits>
        </Styles.Content>
      </Styles.Container>
    </Styles.Toolbar>
  )
}
