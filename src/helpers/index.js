
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard'
import AssessmentIcon from '@material-ui/icons/Assessment'
import AccountTreeIcon from '@material-ui/icons/AccountTree'
import SecurityIcon from '@material-ui/icons/Security'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import AllInclusiveIcon from '@material-ui/icons/AllInclusive'
import moment from 'moment'

export const categories = [
  {
    id: 'all',
    icon: AllInclusiveIcon,
    label: 'All Categories',
    color: '#fff'
  },
  {
    id: 'animation',
    icon: DeveloperBoardIcon,
    label: 'Animation',
    color: '#3709d8'
  },
  {
    id: 'technologie',
    icon: AssessmentIcon,
    label: 'Technologie',
    color: '#fa6400'
  },
  {
    id: 'security',
    icon: AccountTreeIcon,
    label: 'Security',
    color: '#02c58c'
  },
  {
    id: 'database',
    icon: SecurityIcon,
    label: 'Database',
    color: '#f7b500'
  },
  {
    id: 'infra',
    icon: WhatshotIcon,
    label: 'Infrastucture',
    color: '#ff71ac'
  }
]
export const atlImage = 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1615295972i/30985332._SY540_.jpg'

export const formatSecondsDuration = durationInSeconds => {
  const duration = moment.duration(durationInSeconds, 'seconds')
  const hours = duration.days() * 24 + duration.hours()
  const minutes = duration.minutes()
  return `${hours}h${minutes}min`
}

export const textColorMap = {
  error: '#ff71ac',
  success: '#02c58c',
  alert: '#f7b500',
  text: '#D3DDE2'
}

export const InputColors = {
  inputext: '#183B56',
  inputlabel: '#183B56',
  inputborder: '#D3DDE2',
  inputsuccess: '#02C58C',
  inputerror: '#E91B4B',
  inputalert: '#FFD05C',
  inputhidden: '#99ACBF',
  inputshown: '#3767da',
  inputDisabledBackground: '#E8EEF1',
  inputDisabledBorder: '#D3DDE2',
  inputplaceholder: '#D3DDE2',
  inputfocus: '#D3DDE2',
  inputHoverBorder: '#577592'
}

export const Status = {
  error: 'error',
  success: 'success',
  alert: 'alert',
  info: 'info',
  regular: 'regular',
  text: 'text'
}
