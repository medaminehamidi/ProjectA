import { makeStyles } from '@material-ui/core'
import { Avatar, Typography, Grid } from '@mui/material'
import { atlImage } from 'helpers'
import style from './style'
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import TextInput from './TextInput'
import { useState } from 'react'

const useStyle = makeStyles(style)

export default () => {
  const [firstName, setFirstName] = useState('')
  const { generalInfo, titleStyle, profilePicture, iconContainer, inputSubContainer, deleteIconContainer, actionButtonsContainer, submitStyle, titleSectionStyle, logoutStyle } = useStyle()
  return (
    <div className={generalInfo}>
      <Typography fontSize={29} gutterBottom className={titleStyle}>
        Hello, Tell us about yourself !
      </Typography>
      <div className={profilePicture}>
        <Avatar
          alt='Remy Sharp'
          src={atlImage}
          sx={{ width: 124, height: 124 }}
        />
        <div className={actionButtonsContainer}>
          <div className={deleteIconContainer}>
            <HighlightOffOutlinedIcon />
          </div>
          <div className={iconContainer}>
            <EditOutlinedIcon />
          </div>
        </div>
      </div>
      <Grid className={inputSubContainer} container spacing={2}>
        <Grid item xs={12}>
          <TextInput
            label='User Name'
            placeholder='Enter User Name'
            handleChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            name='firstName'
            gutterBottom={16}
          />
        </Grid>
        <Grid item xs={6}>
          <TextInput
            margin='0 12px 0 0'
            label='First Name'
            placeholder='Enter First Name'
            handleChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            name='firstName'
            gutterBottom={16}
          />
        </Grid>
        <Grid item xs={6}>
          <TextInput
            margin='0 12px 0 0'
            label='Last Name'
            placeholder='Enter Last Name'
            handleChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            name='firstName'
            gutterBottom={16}
          />
        </Grid>
        <Grid item xs={6}>
          <TextInput
            margin='0 12px 0 0'
            label='Email'
            placeholder='Enter Email'
            handleChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            name='firstName'
            gutterBottom={16}
          />
        </Grid>
        <Grid item xs={6}>
          <TextInput
            margin='0 12px 0 0'
            label='Contact Number'
            placeholder='Enter Contact Number'
            handleChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            name='firstName'
            gutterBottom={16}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid item xs={3}>
            <div className={submitStyle}>Save Changes</div>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography fontSize={21} gutterBottom className={titleSectionStyle}>
            Change Your Password
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextInput
            margin='0px 12px 0 0'
            label='Password'
            type='password'
            placeholder='Enter Password'
            handleChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            name='firstName'
            gutterBottom={16}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid item xs={3}>
            <div className={submitStyle}>Change Password</div>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid item xs={3}>
            <div className={logoutStyle}>Logout</div>
          </Grid>
        </Grid>
      </Grid>

    </div>
  )
}
