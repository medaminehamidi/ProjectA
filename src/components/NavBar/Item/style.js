import { tooltipClasses } from '@mui/material'

export default (theme) => ({
  containerClass: {
    borderRadius: 10,
    backgroundColor: ({ active }) => active && '#000',
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    cursor: 'pointer',
    color: ({ active }) => active && '#fff',
    margin: '10px 0',
    '&:hover': {
      boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
    }
  },
  toolTip: {
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      height: 12,
      padding: 12,
      fontFamily: '\'Mulish\', sans-serif !important',
      fontSize: 11,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }
})
