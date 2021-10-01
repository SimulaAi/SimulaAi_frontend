import type { NextPage } from 'next'
import { LoginTemplate } from '../templates/login-template'
import { DashboardTemplate } from '../templates/login-template/dashboard-template'
import { isLogged } from '../utils/authentication'

const Home: NextPage = () => {
  const isAuthenticated = isLogged()
  return !isAuthenticated ? <LoginTemplate /> : <DashboardTemplate />
}

export default Home
