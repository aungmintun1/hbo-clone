import Head from 'next/head'
import { useStateContext } from '../../HBOProvider';


export default function Login() {
  const globalState = useStateContext();
  return (
 
      <div className="login-user">
        <div className="login-user__top">
          <div className="login-user__logo"/>
          <span className="login-user__title">
            Who Is Watching?
          </span>
        </div>

        <div className="login-user__form">
          <div className="login-user__user-box">
            <img className="login-user__user-img" src="https://mighty.tools/mockmind-api/content/human/5.jpg" />
            <div className="login-user__user-name">Bryant and {globalState.test}</div>
          </div>
        </div>
        <div className="login-user__buttons">
          <button className="login-user__adult">Add Adult</button>
          <button className="login-user__kid">Add Kid</button>
        </div>
      </div>
   
  )
}
