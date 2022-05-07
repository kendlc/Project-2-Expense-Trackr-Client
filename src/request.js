function createRequest(url, method) {
    let token = localStorage.getItem('token')
    const instance = fetch(`${process.env.REACT_APP_BACKEND_SERVER_PATH}${url}`, {
        method: method,
        headers: {  
          'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    return instance
}

export default createRequest;


