function createRequest(url) {
    let token = localStorage.getItem('token')
    const instance = fetch(`http://localhost:3000${url}`, {
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
  const instance = fetch(`http://localhost:3000${url}`, {
      method: 'PATCH',
      headers: {  
        'Authorization': `Bearer ${token}`
      }
  })
  .then(response => response.json())
  return instance
}

export default createRequest;

// exemple to call the function
//createRequest("/categories.json")

