import { styled } from '@mui/system'

export const Wrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
})

export const Square = styled('div')({
  background: '#ECECEC',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '600px',
  height: '400px',
  borderRadius: '25px',
  border: '#686465 solid 1px',
  boxShadow: '0 7px 3px #686465'
})

export const Form = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center'
})

export const Title = styled('h2')({
  color: '#747474',
  marginBottom: '15px',
  textShadow: '0.1em 0.1em 0.3em rgba(0,0,0,0.2)'
})
