import Account from "../Account/Account";
import SearchModal from "../SearchModal/SearchModal";
import { useStateContext } from "../../HBOProvider";
import Link from 'next/link'
import ls from "local-storage";

const Header = (props) => {
	const globalState = useStateContext();

	const users = ls('users');
	//gets all users from local storage

	
	const name = users && users.length > 0 ? users[0].user : 'user';
	// Get the first user's name
	//if no user string is no user

	return (
		<header className={`top-header ${globalState.accountModalOpen || globalState.sideNavOpen ? 'top-header--menu-open' : ''}`}>
			<div className="top-header__left-side">
				<div
					className="top-header__menu-btn"
					onClick={() => globalState.setSideNavOpenAction(true)}>
					<i className="fas fa-bars" />
				</div>
				<div className="top-header__search-btn"
        onClick={() => globalState.setSearchOpenAction(true)}>
					<i className="fas fa-search" />
				</div>
			</div>
			<Link href="/">
				<div className="top-header__logo"></div>
			</Link>
			
			<div
				className="top-header__account"
				onClick={() => globalState.setAccountModalOpenAction(!globalState.accountModalOpen)}>
				<img
					src={globalState.defaultUserImg}
					className="top-header__user-img"
				/>
				<div className="top-header__user-name">{name}</div>
			</div>
			<Account />
			<SearchModal />
		</header>
	);
};

export default Header;