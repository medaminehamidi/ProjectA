export default (theme) => ({
  CatalogContainer: {
    padding: '16px 16px 16px 16px',
    border: '1px solid #ddd',
    borderRadius: 10,
    backgroundColor: '#ff71ac66',
    display: 'flex',
    alignItems: 'center',
    transition: 'all .15s ease',
    '&:hover': {
      padding: '16px 16px 16px 24px'
    },
    margin: 12
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: '#ff71ac',
    borderRadius: 10,
    marginRight: 16,
    fonrSize: 12
  },
  textStyle: {
    fontFamily: '\'Mulish\', sans-serif !important'
  }
})
