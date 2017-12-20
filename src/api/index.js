
const url = "http://localhost:3001/api/v1/";

export function login(user_params){
  return fetch(`${url}auth`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(user_params)
  }).then(res => res.json())
}

export function fetchUser(){
  return fetch(`${url}current_user`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({ token: localStorage.token })
  }).then(res => res.json())
  }


export function fetchUserData(user_id){
  return fetch(`${url}users/${user_id}`)
  .then(res => res.json())

}
