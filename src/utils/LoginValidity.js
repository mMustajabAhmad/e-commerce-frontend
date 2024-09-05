export function isTokenValid() {
  const expirationTime = localStorage.getItem('expirationTime');
  const token = localStorage.getItem('token');
  console.log("token", token)
  if (!token || typeof token !== 'string') return false;
  if (!expirationTime && !token) return false;
  return true;
}
