import { Edit } from '@mui/icons-material'
import { useState } from 'react'
import { TextField } from '@mui/material'
import { Button } from '../button/styles'
import * as Styles from './styles'

const inputProps = {
  endAdornment: (
    <Edit sx={{ color: '#747474' }} />
  ),
  sx: { background: '#FFFFFF', borderRadius: '10px' }
}

export const MyAccount = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  console.log(email, password, confirmPassword)
  return (
    <Styles.Wrapper>
      <Styles.Square>
        <Styles.Form>
          <Styles.Title>DADOS DO PERFIL</Styles.Title>

          <TextField
            onChange={({ target }) =>
              setEmail(target.value)}
            type="email"
            label='email'
            variant='outlined'
            value='email@mail.com'
            margin='normal'
            InputProps={inputProps}
            size='small'
          />

          <TextField
            onChange={({ target }) =>
              setPassword(target.value)}
            type="text"
            label='senha'
            variant='outlined'
            placeholder='***********'
            margin='normal'
            InputProps={inputProps}
            size='small'
          />

          <TextField
            onChange={({ target }) =>
              setConfirmPassword(target.value)}
            label='confirmar senha'
            type="text"
            variant='outlined'
            placeholder='***********'
            margin='normal'
            size='small'
            InputProps={{
              sx: { background: '#FFFFFF', borderRadius: '10px' }
            }}
          />

          <Button variant='contained'
            sx={{
              marginTop: '10px'
            }}>
            Salvar alterações
          </Button>
        </Styles.Form>
      </Styles.Square>
    </Styles.Wrapper>
  )
}
