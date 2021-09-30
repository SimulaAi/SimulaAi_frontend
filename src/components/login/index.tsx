import { Container } from '../container'
import * as Styles from './styles'

export const Login = () => {
  return (
    <Styles.Wrapper>
      <Styles.Header>
        <Container>
            <h1>Login</h1>
            <p>Entra com sua conta</p>
        </Container>
      </Styles.Header>

      <Container>
        <Styles.LoginForm id="login">
          <Styles.LoginContent id="login-form">

            <Styles.Label>DIGITE SEU EMAIL:</Styles.Label>
              <Styles.Input type="email" className="form-control" placeholder="example@mail.com" alt="campo de login"/>

            <Styles.Label>DIGITE SUA SENHA:</Styles.Label>
              <Styles.Input type="password" className="form-control" placeholder="*************" alt="campo da senha"/>

            <Styles.Button className="btn btn-warning"><b>ENTRAR</b></Styles.Button>
          </Styles.LoginContent>
        </Styles.LoginForm>
      </Container>
    </Styles.Wrapper>
  )
}
