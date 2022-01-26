import PropTypes from 'prop-types'
import Style from './Button.style'

const Button = function buttonComponent({ children }) {
  return (
    <Style.Button>{children}</Style.Button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired
}

export default Button