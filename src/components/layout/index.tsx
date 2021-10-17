import { Container } from '../container'
import { Header } from '../header/indext'
import Sidebar from '../sidebar'

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
