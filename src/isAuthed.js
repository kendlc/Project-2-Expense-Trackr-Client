function isAuthed() {
    return localStorage.getItem('token') ? true : false
}

export default isAuthed;