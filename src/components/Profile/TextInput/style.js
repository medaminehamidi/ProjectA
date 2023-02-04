import { InputColors, Status, textColorMap } from '../../../helpers'

export default (theme) => ({
  textInputContainer: {
    width: '100%',
    height: 'auto',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    margin: ({ margin }) => margin && `${margin}px`
  },
  textInputStyle: {
    height: ({ height }) => height || 45,
    borderRadius: 13,
    border: 'solid 1px',
    borderColor: ({ status }) => status ? textColorMap[status] : InputColors.inputborder,
    borderBottom: ({ searchInputResult }) => searchInputResult && 'none',
    borderBottomRightRadius: ({ searchInputResult }) => searchInputResult && '0px',
    borderBottomLeftRadius: ({ searchInputResult }) => searchInputResult && '0px',
    padding: ({ inputPadding, status }) => inputPadding || status ? '0 42px 0 16px' : '0 16px',
    outline: 'none',
    color: ({ status, message }) => status || message ? textColorMap[status] : InputColors.inputext,
    transition: 'all .2s linear',
    background: ({ background }) => background || '#fff',
    font: {
      family: '\'Mulish\', sans-serif !important',
      size: 13
    },
    '&::placeholder': {
      font: {
        family: '\'Mulish\', sans-serif !important',
        size: 13
      },
      color: ({ placeholderColor }) => placeholderColor || '#D3DDE2'
    },
    '&:disabled': {
      background: ({ disabledBackground }) => disabledBackground || '#fff',
      borderColor: ({ status }) => status ? textColorMap[status] : InputColors.inputDisabledBorder
    },
    '&:hover': {
      borderColor: ({ status }) => status ? textColorMap[status] : InputColors.inputHoverBorder
    },
    '&:focus::placeholder': {
      transform: 'translateX(-100%)',
      opacity: 0,
      transition: 'transform .25s linear,opacity .25s linear'
    },
    transform: ({ status }) => status === Status.error ? 'translateX(10px)' : 'translateX(0px)',
    animation: ({ status }) => status === Status.error ? '$input-error-shake .25s ease forwards' : 'none'
  },
  labelStyle: {
    marginLeft: '12px !important'
  }
})
