import Head from 'next/head'
import { useStateContext } from '../components/HBOProvider';
import ls from 'local-storage'
import {v4} from 'uuid'
import { useRouter } from 'next/router'

export default function CreateUser() {
  const globalState = useStateContext();
  const router = useRouter();

  const saveUser = () => {
    let users = [],
    //array of users

    user;
    //declare current user

    if(ls('users') < 1) {
    //if array users is empty

    user = {
    id: v4(),
    user: globalState.user,
    myListID: []
    }
    //create user id with v4, user: name created by input, myList will be array of saved movies

    users.push(user)
    //push user object to array users

    ls('users', users)
    //save users array to local storage
    router.push('/login')
    }
    
    else {

    users = ls('users')
    //users will be local storage users

    user = {
    id: v4(), 
    user: globalState.user,
    myListID: []
    }
    //create user object

    users.push(user)
    //add user object to array users 

    ls('users', users)
    //save array users to local storage

    router.push('/login')
    //redirect to login page

    }

    //if array is empty then we push the single user object to the array
    //if there array has users previously, then we set the array to the local storage users array and add the object to that array

    }


  return (
    <div>
      <div className="create-user">
        <div className="create-user__top">
          <div className="create-user__logo"/>
          <span className="create-user__title">
            Who Is Watching?
          </span>
        </div>

        <div className="create-user__form">
          <img className="create-user__user-img" src={globalState.defaultUserImg}/>
            <div className="create-user__input-group">
              <label>Name</label>
              <input type="text" value={globalState.user} onChange={globalState.createUserAction} className="create-user__inputText"/>
              <div className="create-user__colors">
                <div className="create-user__color create-user__color--active" style={{
                  background: 'rgb(2,27,64)',
                  background: 'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(119,30,135,1) 100%)'
                }} />
                <div className="create-user__color " style={{
                  background: 'rgb(2,27,64)',
                  background: 'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(238,255,18,1) 100%)'
                }} />
                <div className="create-user__color " style={{
                  background: 'rgb(2,27,64)',
                  background: 'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(135,30,66,1) 100%)'
                }} />
                <div className="create-user__color " style={{
                  background: 'rgb(2,27,64)',
                  background: 'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(18,51,255,1) 100%)'
                }} />
                <div className="create-user__color " style={{
                  background: 'rgb(2,27,64)',
                  background: 'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(30,129,135,1) 100%)'
                }} />
              </div>
            </div>
        </div>
        <div className="create-user__buttons">
          <button className="create-user__cancel">Cancel</button>
          <button className="create-user__save" onClick={saveUser}>Save</button>
        </div>
      </div>
    </div>
  )
}
