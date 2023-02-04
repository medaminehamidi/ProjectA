export default (theme) => ({
  eventDetailsContainer: {
    padding: 12,
    border: '1px solid #ddd',
    borderRadius: 10,
    margin: 12
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '4px 0',
    justifyContent: 'flex-start',
    color: ({ color }) => color,
    borderRadius: 10,
    fonrSize: 12
  },
  iconAndCount: {
    display: 'flex',
    fontSize: 14,
    color: '#6464f7',
    marginTop: 16,
    width: 'fit-content',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16
  },
  priceStyle: {
    display: 'flex',
    padding: '4px 12px',
    backgroundColor: '#02c58c',
    borderRadius: 4,
    alignItems: 'center'
  },
  statsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  statsSubContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  categoryLabelStyle: {
    marginLeft: '4px !important'
  },
  discoverIconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: '#6464f7',
    cursor: 'pointer'
  },
  discoverStyle: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
    borderTop: '1px solid #ddd',
    padding: '16px 16px 0 0',
    transition: 'all .35s ease',
    '&:hover': {
      padding: '16px 0 0 0'
    }
  },
  topSideContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16
  }
})
