import { Typography } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import style from './style'
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { useDispatch } from 'react-redux'
import { PricingPath } from 'routes'
import { push } from 'connected-react-router'

const useStyle = makeStyles(style)
export default ({ title, price, daysRemaining }) => {
  const dispatch = useDispatch()
  const { eventDetailsContainer, iconAndCount, priceStyle, categoryLabelStyle, topSideContainer, statsContainer, statsSubContainer, discoverStyle, discoverIconContainer } = useStyle({ daysRemaining })
  return (
    <div className={eventDetailsContainer}>
      <div className={topSideContainer}>
        <Typography>{title}</Typography>
        <div className={priceStyle}>
          <Typography fontSize='14px' color='#fff'>${price}/month</Typography>
        </div>
      </div>
      <div className={statsContainer}>
        <div className={statsSubContainer}>
          <div className={iconAndCount}>
            <QueryBuilderIcon fontSize='inherit' />
            <Typography className={categoryLabelStyle} fontSize='12px' color={daysRemaining < 10 ? '#f50057' : '#929eb9'}>{daysRemaining} days remaining</Typography>
          </div>
        </div>

      </div>
      <div className={discoverStyle} onClick={() => dispatch(push(PricingPath))}>
        <Typography color='#6464f7'>Discover Other Plans</Typography>
        <div className={discoverIconContainer}>
          <ArrowForwardIcon fontSize='small' />
        </div>
      </div>
    </div>
  )
}
