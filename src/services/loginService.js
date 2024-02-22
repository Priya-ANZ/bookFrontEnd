import http from "./httpService";

const apiEndpoint =  "http://localhost:5000/login";

export function login({email, password}) {
  const token =  http.post(apiEndpoint, { email, password });
  return token
}

export function getJWT(){
    return localStorage.getItem("token")
}