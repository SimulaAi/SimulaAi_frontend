import { Container } from '../../components/container'
import { Header } from '../../components/header/indext'
import Sidebar from '../../components/sidebar'

interface SidebarProps {
  children?: React.ReactNode
}

export const Layout = ({ children }: SidebarProps) => {
  return (
    <>
      <Header />
      <Sidebar>
        <Container>
          {children}
        </Container>
      </Sidebar>
    </>
  )
}
