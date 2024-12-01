import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
    // TODO: make a POST request to the login route
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  const data = await response.json();
  return data.token; // Assuming the token is returned in the response body
}



export { login };
