import router from 'next/router'
import * as Icons from '../icons/styles'
import * as Styles from './styles'

export const SidebarItems = () => {
  const goTo = async (route: string) => {
    return await router.push(route)
  }
  return (
    <Styles.Wrapper>
      <Styles.Content>
        {/* home icon */}
        <Styles.Item onClick={async () => await goTo('/')}>
          <Icons.HomeIcon />
        </Styles.Item>

        {/* game icon */}
        <Styles.Item onClick={async () => await goTo('/')}>
          <Icons.GameController />
        </Styles.Item>

        {/* add new game */}
        <Styles.Item onClick={async () => await goTo('/novo_jogo')}>
          <Icons.AddNewGameIcon />
        </Styles.Item>

        {/* buy credits */}
        <Styles.Item onClick={async () => await goTo('/')}>
          <Icons.ShoppingIcon />
        </Styles.Item>

        {/* logout */}
        <Styles.Item onClick={async () => await goTo('/')}>
          <Icons.PowerDownIcon />
        </Styles.Item>

      </Styles.Content>
    </Styles.Wrapper>
  )
}
