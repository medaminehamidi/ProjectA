export default (theme) => ({
  CatalogContainer: {
    padding: ({ active }) => active ? '16px 16px 16px 28px' : 16,
    border: ({ color }) => color === '#fff' ? '1px solid #000' : `1px solid ${color}`,
    borderRadius: 10,
    backgroundColor: ({ color }) => color === '#fff' ? '#000' : `${color}22`,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all .25s ease',
    '&:hover': {
      padding: '16px 16px 16px 28px'
    },
    margin: '12px 0'
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: ({ color }) => color === '#fff' ? '#fff' : color,
    borderRadius: 10,
    marginRight: 16,
    fonrSize: 12
  },
  textStyle: {
    fontFamily: '\'Mulish\', sans-serif !important',
    color: ({ color }) => color === '#fff' ? '#fff' : '#000'
  }
})
