import type { NextPage } from 'next'
import { LoginTemplate } from '../templates/login-template'
import { DashboardTempalte } from '../templates/login-template/dashboard-template'
import { isLogged } from '../utils/authentication'

const Home: NextPage = () => {
  const isAuthenticated = isLogged()
  console.log(isAuthenticated)
  return isAuthenticated ? <DashboardTempalte /> : <LoginTemplate />
}

export default Home
