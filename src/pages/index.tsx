import { LoginTemplate } from '../templates/login-template'
import { DashboardTemplate } from '../templates/dashboard-template'
import { isLogged } from '../utils/authentication'

const isServerRendering = () => typeof window === 'undefined'

export default function Home () {
  const isAuthenticated = isLogged()
  return !isServerRendering() && !isAuthenticated ? <LoginTemplate /> : <DashboardTemplate />
}
