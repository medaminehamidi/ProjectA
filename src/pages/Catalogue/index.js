import Layout from 'components/Layout'
import { Grid } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import HomeHeader from 'components/HomeHeader'
import CategoryList from 'components/CategoryList'
import style from './style'
import Courses from '../../components/Courses'

const useStyle = makeStyles(style)
export default () => {
  const { containerStyle } = useStyle()
  return (
    <Layout>
      <HomeHeader title='Catalog' />
      <Grid className={containerStyle} container spacing={2}>
        <Grid item xs={3}>
          <CategoryList />
        </Grid>
        <Courses />
      </Grid>
    </Layout>
  )
}
