import Account from "../Account/Account"
import SearchModal from "../SearchModal/SearchModal"
import { useStateContext } from '../../HBOProvider';
import Link from "next/link";

const Header = (props) => {
  const globalState = useStateContext();

  return(<header className={`top-header ${globalState.sideNavOpen || globalState.accountMenu ? 'header-active' : ''} `}>
    <div className="top-header__left-side">
      <div className="top-header__menu-btn"  onClick={()=> {globalState.setSideNavOpen(true); globalState.accountMenuOpen(false);}}>
        <i className="fas fa-bars"/>
      </div>
      <div className="top-header__search-btn" onClick={()=>{globalState.setSearchMenu(true); globalState.accountMenuOpen(false); globalState.setSideNavOpen(false); }}>
        <i className="fas fa-search"/>
      </div>
    </div>
    <Link href='/'>
    <div className="top-header__logo"></div>
    </Link>
    <div className="top-header__account" onClick={()=>{globalState.accountMenuOpen(!globalState.accountMenu); globalState.setSideNavOpen(false); }}>
      <img src="https://mighty.tools/mockmind-api/content/human/5.jpg" className="top-header__user-img"/>
      <div className="top-header__user-name">Bryant</div>
    </div>
    <Account />
    <SearchModal />
  </header>)
}

export default Header;