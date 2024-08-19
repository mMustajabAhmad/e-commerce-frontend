export function isTokenValid() {
  console.log("I'm here")
  const expirationTime = localStorage.getItem('expirationTime');
  const token = localStorage.getItem('token');
  console.log("token", token);
  console.log("expiration time", expirationTime)
  if (!expirationTime && !token) return false;
  return true;
}
