export default (theme) => ({
  generalInfo: {
    width: '100%',
    height: 200,
    marginTop: 21
  },
  titleStyle: {
    fontFamily: '\'Mulish\', sans-serif !important'
  },
  profilePicture: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: 13,
    justifyContent: 'center',
    width: 20,
    height: 20,
    cursor: 'pointer',
    color: '#6464f7',
    backgroundColor: '#fff',
    padding: 10,
    border: '1px solid #6464f7',
    margin: '0 0 0 18px',
    transition: 'all .15s ease',
    '&:hover': {
      backgroundColor: '#6464f722'
    }
  },
  deleteIconContainer: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: 13,
    justifyContent: 'center',
    width: 20,
    height: 20,
    cursor: 'pointer',
    color: '#a8a8a8',
    backgroundColor: '#fff',
    padding: 10,
    border: '1px solid #a8a8a8',
    margin: '0 0 0 18px',
    transition: 'all .15s ease',
    '&:hover': {
      color: '#ff3232',
      border: '1px solid #ff3232',
      backgroundColor: '#ff323222'
    }
  },
  actionButtonsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 8
  },
  inputSubContainer: {
    marginTop: '24px !important'
  },
  submitStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius: 13,
    padding: 10,
    color: '#fff',
    transition: 'all .15s ease',
    backgroundColor: '#6464f7',
    '&:hover': {
      color: '#e1dede',
      backgroundColor: '#5f5fe3',
      boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
    }
  },
  logoutStyle: {
    display: 'flex',
    alignItems: 'center',
    width: 'fit-content',
    justifyContent: 'flex-start',
    cursor: 'pointer',
    borderRadius: 13,
    padding: 10,
    color: '#6464f7',
    transition: 'all .15s ease',
    backgroundColor: '#fff',
    marginTop: 21,
    '&:hover': {
      color: '#5050c4'
    }
  },
  titleSectionStyle: {
    marginTop: '56px !important'
  }
})
