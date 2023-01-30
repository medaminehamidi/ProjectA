export default _ => ({
  headerContainer: {
    height: 55,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  profileChipContainer: {
    height: '80%',
    display: 'flex',
    width: 377,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatarStyle: {
    marginRight: 21,
    border: '2px solid #fff',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset'
  },
  containerClass: {
    marginRight: 55,
    borderRadius: 13,
    backgroundColor: '#6464f7',
    padding: 13,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 15,
    height: 15,
    cursor: 'pointer',
    color: '#fff',
    margin: '10px 0',
    '&:hover': {
      boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
    }
  },
  dividerStyle: {
    width: '99%',
    marginTop: 21,
    height: 1,
    backgroundColor: '#00000056'
  },
  textStyle: {
    fontFamily: '\'Mulish\', sans-serif !important'
  },
  searchInputStyle: {
    width: '60%',
    marginTop: '12px !important'
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: 10
  }
})
