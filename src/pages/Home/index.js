import Layout from 'components/Layout'
import HomeHeader from 'components/HomeHeader'
import DateCalender from 'components/DateCalender'
import { Grid } from '@mui/material'

export default () => {
  return (
    <Layout>
      <HomeHeader />
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <DateCalender />
        </Grid>
      </Grid>
    </Layout>
  )
}
