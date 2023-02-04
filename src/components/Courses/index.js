import { Grid } from '@mui/material'
import { categories } from '../../helpers'
import CourseCard from './CourseCard'

export const catalog = [
  [
    {
      title: 'Modern Software Architecture',
      category: categories.find(item => item.id === 'infra'),
      categoryId: 'infra',
      price: 30.00,
      users: 12,
      rating: 80,
      lengthOfCourse: 12315
    },
    {
      title: 'Modern Software Architecture',
      category: categories.find(item => item.id === 'infra'),
      categoryId: 'animation',
      price: 30.00,
      users: 12,
      rating: 80,
      lengthOfCourse: 12315
    },
    {
      title: 'Modern Software Architecture',
      category: categories.find(item => item.id === 'infra'),
      categoryId: 'technologie',
      price: 30.00,
      users: 12,
      rating: 80,
      lengthOfCourse: 12315
    }
  ], [
    {
      title: 'Modern Software Architecture',
      category: categories.find(item => item.id === 'infra'),
      categoryId: 'security',
      price: 30.00,
      users: 12,
      rating: 80,
      lengthOfCourse: 12315
    },
    {
      title: 'Modern Software Architecture',
      category: categories.find(item => item.id === 'infra'),
      categoryId: 'infra',
      price: 30.00,
      users: 12,
      rating: 80,
      lengthOfCourse: 12315
    },
    {
      title: 'Modern Software Architecture',
      category: categories.find(item => item.id === 'infra'),
      categoryId: 'technologie',
      price: 30.00,
      users: 12,
      rating: 80,
      lengthOfCourse: 12315
    }
  ], [
    {
      title: 'Modern Software Architecture',
      category: categories.find(item => item.id === 'infra'),
      categoryId: 'database',
      price: 30.00,
      users: 12,
      rating: 80,
      lengthOfCourse: 12315
    },
    {
      title: 'Modern Software Architecture',
      category: categories.find(item => item.id === 'infra'),
      categoryId: 'infra',
      price: 30.00,
      users: 12,
      rating: 80,
      lengthOfCourse: 12315
    },
    {
      title: 'Modern Software Architecture',
      category: categories.find(item => item.id === 'infra'),
      categoryId: 'security',
      price: 30.00,
      users: 12,
      rating: 80,
      lengthOfCourse: 12315
    }
  ]
]

export default () => {
  return (
    catalog.map((item, key) => {
      return (
        <Grid key={key} item xs={3}>
          {
            item.map((course, key) => <CourseCard users={course.users} lengthOfCourse={course.lengthOfCourse} rating={course.rating} title={course.title} categoryId={course.categoryId} key={key} price={course.price} />)
          }
        </Grid>
      )
    })
  )
}
