import type { NextPage } from 'next'
import Dashboard from '../components/dashboard'
import { Login } from '../components/login'
import { isLogged } from '../utils/authentication'

const Home: NextPage = () => {
  const isAuthenticated = isLogged()
  console.log('isAuthenticated?:', isAuthenticated)
  return !isAuthenticated ? <Login /> : <Dashboard />
}

export default Home
