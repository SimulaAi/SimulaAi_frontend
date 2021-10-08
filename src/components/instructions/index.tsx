import router from 'next/router'
import { Button } from '../button/styles'
import { Container } from '../container'
import * as Styles from './styles'

export const Instructions = () => {
  return (
    <Styles.Wrapper>
      <Styles.Content>
        <Container>
          <h1>INSTRUÇÕES DO JOGO</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla nesciunt eligendi rem alias accusamus error itaque totam. Minima ex magni voluptatum provident et obcaecati assumenda molestiae voluptas similique, aut impedit.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit similique, enim unde soluta veniam a nesciunt, exercitationem natus quis molestias minima architecto temporibus suscipit reiciendis consequatur impedit. Iste, deleniti voluptate.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas expedita omnis in animi architecto ipsa, deleniti doloribus soluta maiores sapiente consequuntur eveniet. Harum molestias laborum, dolorem quod ut eum fugit?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit quos aliquam, est temporibus nesciunt et adipisci architecto aut deleniti perspiciatis maxime quod odit dignissimos sint autem eligendi non minima pariatur.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere nemo debitis esse placeat, ipsa iure facilis ab dolores maiores aut neque corporis maxime omnis ipsum, aliquid consectetur at mollitia quo!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quis minus ad eos pariatur fugiat, ullam sequi numquam voluptas sint consectetur itaque explicabo. Unde doloribus provident veniam labore exercitationem reiciendis!</p>
          <Styles.Confirm>
            <Button variant='contained' onClick={async () => await router.push('/')}>
              Continuar
            </Button>
          </Styles.Confirm>
        </Container>
      </Styles.Content>
    </Styles.Wrapper>
  )
}
