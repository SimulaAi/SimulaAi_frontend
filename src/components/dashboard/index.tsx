import { Container } from '../container'
import * as Styles from './styles'

const Dashboard = () => {
  return (
    <Styles.Wrapper>
      <Container>
        <Styles.Content>
        <h1 style={{ marginBottom: '80px' }}>HOME PAGE</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In unde beatae laboriosam reprehenderit iure amet aliquam vero reiciendis. Praesentium repellat, aut suscipit saepe numquam blanditiis quas nihil atque autem expedita?</p>
        </Styles.Content>
      </Container>
    </Styles.Wrapper>
  )
}

export default Dashboard
