// 路由守卫
import React from 'react'
import {Navigate} from 'react-router-dom'
function Hoc_login(Com) {
  return ()=>{
    let token=localStorage.getItem('token');
    if(token){
        return <Com></Com>
    }else{
        return <Navigate to='/login'></Navigate>
    }
  }
}

export default Hoc_login
