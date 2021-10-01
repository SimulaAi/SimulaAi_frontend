import { DashboardTemplate } from '../templates/dashboard-template'
import { LoginTemplate } from '../templates/login-template'
import { isLogged } from '../utils/authentication'
import NoSSR from 'react-no-ssr'

export default function Home () {
  const isAuthenticated = isLogged()
  return <NoSSR>{!isAuthenticated ? <LoginTemplate /> : <DashboardTemplate />}</NoSSR>
}
