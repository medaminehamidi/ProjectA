export default (theme) => ({
  root: {
    maxWidth: '1600px',
    padding: 0,
    display: 'flex',
    flexDirection: 'row'
  },
  containerClass: {
    marginTop: 28,
    padding: 12,
    width: '100%',
    overflow: 'auto',
    overflowX: 'hidden',
    backgroundColor: 'white',
    '&::-webkit-scrollbar': {
      width: '0.6em'
    },
    '&::-webkit-scrollbar-track': {
      borderRadius: '0.3em',
      backgroundColor: theme.palette.primary.light
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '0.3em',
      backgroundColor: theme.palette.primary.main
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: theme.palette.primary.dark
    }
  }
})
