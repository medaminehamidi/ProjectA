import React, { useState } from 'react'
import MomentUtils from '@date-io/moment'
import { createTheme, ThemeProvider } from '@material-ui/core'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'

const materialTheme = createTheme({
  overrides: {
    MuiPickersDay: {
      daySelected: {
        backgroundColor: '#6464f7',
        '&:hover': {
          backgroundColor: '#7A7AFB'
        }
      },
      current: {
        backgroundColor: '#fa6c84',
        color: '#fff',
        '&:hover': {
          backgroundColor: '#f47c94'
        }
      }
    },
    MuiTypography: {
      body1: {
        fontFamily: '\'Mulish\', sans-serif !important'
      },
      body2: {
        fontFamily: '\'Mulish\', sans-serif !important'
      }
    },
    MuiPickersCalendarHeader: {
      dayLabel: {
        fontFamily: '\'Mulish\', sans-serif !important'
      },
      iconButton: {
        backgroundColor: '#6464f7',
        color: '#fff',
        borderRadius: 10,
        '&:hover': {
          backgroundColor: '#7A7AFB'
        }
      }
    },
    MuiPickersBasePicker: {
      pickerView: {
        backgroundColor: '#fff',
        padding: 12,
        border: '1px solid #ddd',
        borderRadius: 10,
        minWidth: 'auto'
      }
    }
  }
})

export default () => {
  const [date, changeDate] = useState(new Date())
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <ThemeProvider theme={materialTheme}>
        <DatePicker
          disableToolbar
          autoOk
          variant='static'
          value={date}
          onChange={changeDate}
        />
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  )
}
