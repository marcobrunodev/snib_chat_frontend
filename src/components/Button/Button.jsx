import PropTypes from 'prop-types'
import Style from './Button.style'

const Button = function buttonComponent({ children, onClick, loading, finishLoading }) {
  return (
    <Style.Button
      onClick={onClick}
      disabled={loading}
      loading={loading}
      finishLoading={finishLoading}>
      <Style.Content>
        {loading ? 'Loading...' : children}
      </Style.Content>
    </Style.Button>
  )
}

Button.defaultProps = {
  onClick: () => { },
  loading: false,
  finishLoading: false
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  finishLoading: PropTypes.bool,
  onClick: PropTypes.func
}

export default Button