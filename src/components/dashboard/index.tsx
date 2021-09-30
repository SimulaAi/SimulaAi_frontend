import Router from 'next/router'
import { UserLogout } from '../../utils/authentication'
import { Container } from '../container'
import * as Styles from './styles'

const Dashboard = () => {
  const handleLogout = async () => {
    UserLogout()
    await Router.push('/')
  }
  return (
    <Styles.Wrapper>
      <Container>
        <Styles.Content>
        <h1 style={{ marginBottom: '80px' }}>ainda em desenvolvimento!</h1>
        <button onClick={handleLogout} className="btn btn-danger"><h1>sair</h1></button>
        </Styles.Content>
      </Container>
    </Styles.Wrapper>
  )
}

export default Dashboard
