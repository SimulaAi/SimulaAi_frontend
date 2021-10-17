import * as Icons from '../icons/styles'
import * as Styles from './styles'

export const SidebarItems = () => {
  return (
    <Styles.Wrapper>
      <Styles.Content>
        {/* home icon */}
        <Styles.Item>
          <Icons.HomeIcon />
        </Styles.Item>

        {/* game icon */}
        <Styles.Item>
          <Icons.GameController />
        </Styles.Item>

        {/* add new game */}
        <Styles.Item>
          <Icons.AddNewGameIcon />
        </Styles.Item>

        {/* buy credits */}
        <Styles.Item>
          <Icons.ShoppingIcon />
        </Styles.Item>

        {/* logout */}
        <Styles.Item>
          <Icons.PowerDownIcon />
        </Styles.Item>

      </Styles.Content>
    </Styles.Wrapper>
  )
}
