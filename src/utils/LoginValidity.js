export function isTokenValid() {
  const expirationTime = localStorage.getItem('expirationTime');
  const token = localStorage.getItem('token');
  if (!expirationTime && !token) return false;
  return true;
}
