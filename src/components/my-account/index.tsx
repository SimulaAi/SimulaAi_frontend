import { Edit } from '@mui/icons-material'
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
  return (
    <Styles.Wrapper>
      <Styles.Square>
        <Styles.Form>
          <Styles.Title>DADOS DO PERFIL</Styles.Title>

          <TextField
            label=' '
            variant='outlined'
            value='email@mail.com'
            margin='normal'
            InputProps={inputProps}
            size='small'
          />

          <TextField label=' '
            variant='outlined'
            value='***********'
            margin='normal'
            InputProps={inputProps}
            size='small'
          />

          <TextField label=' '
            variant='outlined'
            value='***********'
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
