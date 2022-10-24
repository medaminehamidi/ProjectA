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
    MuiPickersCalendarHeader: {
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
        backgroundColor: '#fa6c8414',
        padding: 12,
        borderRadius: 8,
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
