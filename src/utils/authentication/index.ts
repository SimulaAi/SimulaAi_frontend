import { parseCookies, setCookie, destroyCookie } from 'nookies'

interface setUserTokenProps {
  maxAge: number
  value: any
}

export const setUserToken = (values: setUserTokenProps) => {
  const { maxAge, value } = values
  const token = (parseCookies()).t_user
  if (token) UserLogout()
  setCookie(null, 't_user', value, {
    maxAge,
    path: '/'
  })
  console.log('token salvo:', value)
}

export const isLogged = () => {
  const hasToken = (parseCookies()).t_user
  if (!hasToken) return false
  return true
}

export const UserLogout = () => {
  destroyCookie(null, 't_user')
}
