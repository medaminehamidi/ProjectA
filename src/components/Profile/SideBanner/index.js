import { Typography } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import style from './style'
import { catalog } from '../../Courses'
import CourseCard from '../../Courses/CourseCard'
import SubscriptionCard from '../../Courses/SubscriptionCard'

const useStyle = makeStyles(style)
export default () => {
  const { eventDetailsContainer } = useStyle()
  return (
    <>
      <div className={eventDetailsContainer}>
        <Typography> Active Subsciption : </Typography>
        <SubscriptionCard title='Premium Personnel' price={10} daysRemaining={36} />
      </div>
      <div className={eventDetailsContainer}>
        <Typography> Completed Courses : </Typography>
        {
          catalog[0].map((course, key) => <CourseCard noPrice users={course.users} lengthOfCourse={course.lengthOfCourse} rating={course.rating} title={course.title} categoryId={course.categoryId} key={key} price={course.price} />)
        }
      </div>
    </>
  )
}
