import Layout from 'components/Layout'
import { Grid } from '@mui/material'
import HomeHeader from 'components/HomeHeader'
import Profile from 'components/Profile'
import SideBanner from 'components/Profile/SideBanner'

export default () => {
  return (
    <Layout>
      <HomeHeader title='My Profile' />
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Profile />
        </Grid>
        <Grid item xs={5}>
          <SideBanner />
        </Grid>
      </Grid>
    </Layout>
  )
}
