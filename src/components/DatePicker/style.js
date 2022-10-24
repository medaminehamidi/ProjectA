
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
  }
})
