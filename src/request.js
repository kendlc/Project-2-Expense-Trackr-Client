function createRequest(url) {
  let token = localStorage.getItem('token')
  const instance = fetch(`${process.env.REACT_APP_BACKEND_SERVER_PATH}${url}`, {
      method: 'GET',
      headers: {  
        'Authorization': `Bearer ${token}`
      }
  })
  .then(response => response.json())
  return instance
}

function postRequest(url) {
  let token = localStorage.getItem('token')
  const instance = fetch(`${process.env.REACT_APP_BACKEND_SERVER_PATH}${url}`, {
      method: 'PATCH',
      headers: {  
        'Authorization': `Bearer ${token}`
      }
  })
  .then(response => response.json())
  return instance
}

export default {createRequest, postRequest};
