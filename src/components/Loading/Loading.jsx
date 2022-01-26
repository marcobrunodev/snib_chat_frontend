import PropTypes from 'prop-types'
import Style from './Loading.style'

const Loading = function loadingComponent({active}) {
  return (
    <Style.Loading active={active}>
      <Style.Image />
      <Style.Figcaption>Loading...</Style.Figcaption>
    </Style.Loading>
  )
}

Loading.defaultProps = {
  active: false
}

Loading.propTypes = {
  active: PropTypes.bool
}

export default Loading