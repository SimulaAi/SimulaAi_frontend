import { useState } from 'react'
import api from '../../services/api'
import { Container } from '../container'
import * as Styles from './styles'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState()

  const handleSubmit = async () => {
    const { data } = await api.post('login', {
      email: email,
      senha: password
    })

    if (data.error) {
      setLoginError(data.error)
    }

    console.log(data)
  }

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
              <Styles.Input onChange={({ target }) => setEmail(target.value)} type="email" className="form-control" placeholder="example@mail.com" alt="campo de login"/>

            <Styles.Label>DIGITE SUA SENHA:</Styles.Label>
              <Styles.Input onChange={({ target }) => setPassword(target.value)} type="password" className="form-control" placeholder="*************" alt="campo da senha"/>

             {loginError && <Styles.LoginError>{loginError}</Styles.LoginError>}

            <Styles.Button onClick={handleSubmit} className="btn btn-warning"><b>ENTRAR</b></Styles.Button>
          </Styles.LoginContent>
        </Styles.LoginForm>
      </Container>
    </Styles.Wrapper>
  )
}
