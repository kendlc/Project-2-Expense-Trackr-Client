import React from 'react'

function AnimatedRoutes() {
  return (
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='signup' element={<SignUp signUp={signUp} errors={signupErrors}/>} />
    <Route path='categories' element={<Category />} />
    <Route path='profile' element={<Profile />} />
    <Route path='profile/edit' element={<ProfileUpdate />} />
    <Route path='profile/changepassword' element={<Changepassword />} />
    <Route path="transactions" element={<TransactionsDisplay/>} />
    <Route path="newtransaction" element={<NewTransaction/>} />
  </Routes>
  )
}

export default AnimatedRoutes