
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
