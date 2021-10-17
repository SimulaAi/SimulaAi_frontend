import { useState } from 'react'
import Router from 'next/router'
import api from '../../services/api'
import { setUserToken } from '../../utils/authentication'
import { Container } from '../container'
import * as Styles from './styles'
import { Button } from '../button/styles'
import { Typography } from '../commom/Typography/styles'
import { Loading } from '../commom/Loading'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState<any>()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    try {
      setLoading(true)
      const { data } = await api.post('login', {
        email,
        senha: password
      })
      setUserToken({ maxAge: 36000, value: data.token })
      setLoading(false)
      await Router.push('/instrucoes')
    } catch (error: any) {
      setLoading(false)
      console.log(error)
      setLoginError('email ou senha inválida..')
    }
  }

  return (
    <Styles.Wrapper>
      <Styles.Header>
        <Container>
          <Typography variant='h3' >Login</Typography>
          <Typography>Entra com sua conta</Typography>
        </Container>
      </Styles.Header>
      <Container>
        <Styles.LoginForm>
          <Styles.LoginContent id="login-form">

            <Styles.Label>DIGITE SEU EMAIL:</Styles.Label>
            <Styles.Input onChange={({ target }) =>
              setEmail(target.value)} type="email"
              className="form-control"
              placeholder="example@mail.com"
              alt="campo de login"
            />

            <Styles.Label>DIGITE SUA SENHA:</Styles.Label>
            <Styles.Input onChange={({ target }) =>
              setPassword(target.value)} type="password"
              className="form-control"
              placeholder="*************"
              alt="campo da senha"
            />

            {loginError && <Styles.LoginError>{loginError}</Styles.LoginError>}

            <Button
              onClick={handleSubmit}
              variant='contained'
              style={{
                width: '100%',
                height: '50px',
                marginTop: '25px'
              }}>ENTRAR
            </Button>
            <Loading isOpen={loading} />
          </Styles.LoginContent>
        </Styles.LoginForm>
      </Container>
    </Styles.Wrapper>
  )
}
