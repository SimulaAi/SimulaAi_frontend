import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Header = styled.div`
${({ theme }) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
  color: white;
  height: 200px;
  text-align: center;
  background-color: ${theme.colors.primary};
`}
  
`
export const LoginForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginContent = styled.div`
  width: 400px;
`
export const Label = styled.div`
  padding-left: 15px;
  letter-spacing: .08rem;
  color: rgb(145, 143, 143);
`

export const Input = styled.input`
margin-bottom: 15px;
`

export const LoginError = styled.div`
  text-align: center;
  color: orangered;
  font-weight: 600;
`
