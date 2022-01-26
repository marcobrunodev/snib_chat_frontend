import { useState } from "react"

function useLogin() {
  const [isLoading, setIsLoading] = useState(false)
  const [finishLoading, setFinishLoading] = useState(false)

  const loginWithTwitch = () => {
    setIsLoading(true);

    setTimeout(() => setFinishLoading(true), 3000)
  }

  return {isLoading, loginWithTwitch, finishLoading}
}

export default useLogin