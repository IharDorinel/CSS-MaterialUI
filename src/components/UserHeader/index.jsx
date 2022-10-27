import './style.scss'
import Messages from "./Messages";
import Notifications from "./Notifications";
import Account from "./Account";
import SearchInput from "../SearchInput";

const UserHeader = () => {

    return (
        <div className={'user-header'}>
            <div className={'search-block'}>
                <SearchInput placeholder={'Search anything'}/>
            </div>

            <div className={'menus'}>
                <Messages/>
                <Notifications/>
                <Account/>
            </div>
        </div>
    )
}

export default UserHeader