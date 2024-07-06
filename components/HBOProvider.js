import React, { useContext, useState} from 'react';
export const StateContext = React.createContext();

export function useStateContext() {
return useContext(StateContext)
}

export function HBOProvider({children}){
    //set global variables here

    const defaultImg ="https://mighty.tools/mockmind-api/content/human/5.jpg";

    const [user, setUser] = useState('')
    const createUserAction = (e) => {
    setUser(e.target.value)
    console.log(user);
    }

    const [sideNavOpen, setSideNavOpen] = useState(false)
    const [accountMenu, accountMenuOpen] = useState(false)
    const [searchMenu, setSearchMenu] = useState(false)

    const thumbTypes = ['large-v', 'small-v', 'large-h', 'small-h']

return(
<StateContext.Provider
value={{
    //pass down variables here
    user,
    createUserAction,
    defaultImg,
    sideNavOpen,
    setSideNavOpen,
    accountMenu,
    accountMenuOpen,
    searchMenu,
    setSearchMenu,
    thumbTypes

}}>
{children} 
</StateContext.Provider>
)
}