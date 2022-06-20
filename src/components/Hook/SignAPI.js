import { useNavigate } from "react-router-dom";

const SignAPI = async (api) => {
  const navigate = useNavigate();

  try {
    const response = await fetch(api.url, {
      method: "POST",
      body: JSON.stringify({
        email: api.email,
        password: api.pass,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data.idToken, data.expiresIn);
      navigate(api.navigate);
    } else {
      const data = await response.json();
      throw new Error(data.error.message);
    }
  } catch (error) {
    console.log(error.message);
  }

  return;
};

export default SignAPI;
