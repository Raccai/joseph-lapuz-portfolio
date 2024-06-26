import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { user, dispatch } = useAuthContext();

  const login = async (username, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("https://joseph-lapuz.onrender.com/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": `Bearer ${user.token}`,
      },
      body: JSON.stringify({ username, password })
    })


    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json)); // save user to local storage

      // update the auth context
      dispatch({ type: "LOGIN", payload: json});

      setIsLoading(false);
    }
  }

  return { login, isLoading, error }
}
