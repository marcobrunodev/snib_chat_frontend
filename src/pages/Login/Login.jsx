import Button from "../../components/Button"
import Loading from "../../components/Loading/Loading"
import Container from "../../layouts/Container"
import useLogin from "./useLogin"

const Login = function loginPage() {
  const { isLoading, finishLoading,loginWithTwitch } = useLogin()

  return (
    <Container center={true}>
      <Button 
        onClick={loginWithTwitch} 
        loading={isLoading}
        finishLoading={finishLoading} >
        Twitch Login
      </Button>

      <Loading active={isLoading}/>
    </Container>
  )
}

export default Login
