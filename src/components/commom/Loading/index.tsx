import { CircularProgress } from '@mui/material'
import * as Styles from './styles'

interface LoadingProps {
  isOpen: boolean
}

export const Loading = ({ isOpen }: LoadingProps) => {
  return (
    <Styles.Backdrop open={isOpen}>
      <CircularProgress color='primary'/>
    </Styles.Backdrop>
  )
}
