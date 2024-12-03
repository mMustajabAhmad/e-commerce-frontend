import { jwtDecode } from 'jwt-decode';

export function getCurrentUserId(){
    const token = localStorage.getItem('token');
    if (token){
        const decoded_token = jwtDecode(token); 
        const user_id = decoded_token.user_id;
        return user_id;
    }
    return null;
}

export function getToken(){
    const token = localStorage.getItem('token');
    return token;
}