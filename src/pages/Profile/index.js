import { makeStyles } from '@material-ui/core'
import { Avatar, Paper } from '@mui/material'
import Layout from 'components/Layout'
import { atlImage } from 'helpers'
import style from './style'

const useStyle = makeStyles(style)

export default () => {
  const { generalInfo } = useStyle()
  return (
    <Layout>
      <Paper className={generalInfo} elevation={3}>
        <Avatar
          alt='Remy Sharp'
          src={atlImage}
          sx={{ width: 60, height: 60 }}
        />
      </Paper>
    </Layout>
  )
}
