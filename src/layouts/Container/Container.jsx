import PropTypes from 'prop-types'
import Style from './Container.style'

const Container = function containerComponent({children, center}) {
  return (
    <Style.Container center={center}>
      {children}
    </Style.Container>
  )
}

Container.defaultProps = {
  center: false
}

Container.propTypes = {
  children: PropTypes.element.isRequired,
  center: PropTypes.bool.isRequired
}

export default Container