import { makeStyles } from '@material-ui/core'
import Layout from 'components/Layout'
import HomeHeader from 'components/HomeHeader'
import DateCalender from 'components/DateCalender'
import { Grid } from '@mui/material'
import TimeLine from 'components/TimeLine'
import style from './style'
import CategorieFilter from 'components/CategorieFilter'

const useStyle = makeStyles(style)

export default () => {
  const { dateCalenderContainer } = useStyle()
  return (
    <Layout>
      <HomeHeader />
      <Grid container spacing={2}>
        <Grid className={dateCalenderContainer} item xs={3}>
          <DateCalender />
          <CategorieFilter />
        </Grid>
        <Grid className={dateCalenderContainer} item xs={6}>
          <TimeLine />
        </Grid>
      </Grid>
    </Layout>
  )
}
