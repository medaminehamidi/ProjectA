import Layout from 'components/Layout'
import { Grid } from '@mui/material'
import HomeHeader from 'components/HomeHeader'
import CategoryList from 'components/CategoryList'
import EventDetails from '../../components/ActionSection/EventDetails'

export default () => {
  return (
    <Layout>
      <HomeHeader title='Catalog' />
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <CategoryList />
        </Grid>
        <Grid item xs={3}>
          <EventDetails />
          <EventDetails />
          <EventDetails />
        </Grid>
        <Grid item xs={3}>
          <EventDetails />
          <EventDetails />
          <EventDetails />
        </Grid>
        <Grid item xs={3}>
          <EventDetails />
          <EventDetails />
          <EventDetails />
        </Grid>
      </Grid>
    </Layout>
  )
}
