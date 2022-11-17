import Layout from 'components/Layout'
import HomeHeader from 'components/HomeHeader'
import DateCalender from 'components/DateCalender'
import { Grid } from '@mui/material'
import TimeLine from 'components/TimeLine'

export default () => {
  return (
    <Layout>
      <HomeHeader />
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <DateCalender />
        </Grid>
        <Grid item xs={4}>
          <TimeLine />
        </Grid>
      </Grid>
    </Layout>
  )
}
