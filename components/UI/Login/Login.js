import Head from 'next/head'
import { useStateContext } from '../../HBOProvider';
import React, { useContext, useState, useEffect} from 'react';
import { useRouter } from 'next/router'
import ls from 'local-storage'
import { useMounted } from '../useMounted';

export default function Login() {
  const globalState = useStateContext();
  const router = useRouter();
const [loadingUsers, setLoadingUsers] = useState(false);
//boolean for users in array

let users = ls('users') !== null ? ls('users') : [];
//get users array from local storage

let{hasMounted}=useMounted();

useEffect(() => {
if(users < 1) {
setLoadingUsers(false)
}
}, [])


const selectUser = (id) => {
ls('activeUID', id)
router.push('/')
} 

const showUsers = () => {
  if(!loadingUsers) {
  return users.map((user) => {
    return(
      <div className="login-user__user-box" key={user.id} onClick={()=> selectUser(user.id)}>
      <img className="login-user__user-img" src={globalState.defaultUserImg} />
      <div className="login-user__user-name">{user.user}</div>
    </div>
    )
  })
  }
  }

  const createUser = () =>{
    router.push('/')
  }

  return (
 
      <div className="login-user">
        <div className="login-user__top">
          <div className="login-user__logo"/>
          <span className="login-user__title">
            Who Is Watching?
          </span>
        </div>

        <div className="login-user__form">
          {/* <div className="login-user__user-box">
            <img className="login-user__user-img" src={globalState.defaultImg} />
            <div className="login-user__user-name">Bryant and {globalState.user}</div>
          </div> */}

          {hasMounted ? showUsers() : ''}
        </div>
        <div className="login-user__buttons">
          <button className="login-user__adult" onClick={createUser}>Create User</button>
       
        </div>
      </div>
   
  )
}
