import { Typography, Rating } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import style from './style'
import PeopleIcon from '@material-ui/icons/People'
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder'
import { categories } from 'helpers'
import { formatSecondsDuration } from '../../../helpers'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

const useStyle = makeStyles(style)
export default ({ title, categoryId, price, rating, users, lengthOfCourse, noPrice }) => {
  const category = categories.find(item => item.id === categoryId)
  const { eventDetailsContainer, iconContainer, iconAndCount, priceStyle, categoryLabelStyle, topSideContainer, statsContainer, statsSubContainer, discoverStyle, discoverIconContainer } = useStyle({ color: category.color })
  const Component = category.icon
  return (
    <div className={eventDetailsContainer}>
      <div className={topSideContainer}>
        <div className={iconContainer}>
          <Component fontSize='small' />
          <Typography className={categoryLabelStyle} fontSize='14px'>{category.label}</Typography>
        </div>
        {!noPrice
          ? (
            <div className={priceStyle}>
              <Typography fontSize='14px' color='#fff'>{price} $</Typography>
            </div>)
          : null}
      </div>
      <Typography>{title}</Typography>
      <div className={statsContainer}>
        <div className={statsSubContainer}>
          <div className={iconAndCount}>
            <PeopleIcon fontSize='inherit' />
            <Typography className={categoryLabelStyle} fontSize='12px' color='#929eb9'>{users}</Typography>
          </div>
          <div className={iconAndCount}>
            <QueryBuilderIcon fontSize='inherit' />
            <Typography className={categoryLabelStyle} fontSize='12px' color='#929eb9'>{formatSecondsDuration(lengthOfCourse)}</Typography>
          </div>
        </div>
        <div className={iconAndCount}>
          <Rating size='small' value={rating * 5 / 100} readOnly />
        </div>
      </div>
      <div className={discoverStyle}>
        <Typography color='#6464f7'>Discover</Typography>
        <div className={discoverIconContainer}>
          <ArrowForwardIcon fontSize='small' />
        </div>
      </div>
    </div>
  )
}
