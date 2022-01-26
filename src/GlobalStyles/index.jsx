import Base from "./Elements/Base"
import Generic from "./Generic"
import Settings from "./Settings"

const GlobalStyles = function globalStylesComponent() {
  return (
    <>
      <Settings />
      <Generic />
      <Base />
    </>
  )
}

export default GlobalStyles