import './App.scss';
import {Header} from "./components/Header";
import UserHeader from "./components/UserHeader";
import {SalesOverview} from "./components/SalesOverview";
import InfoTip from "./components/InfoTip";
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import {OrdersChat} from "./components/OrdersChat";
import AvatarTip from "./components/AvatarTip";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
        <UserHeader/>
        <div className={'app-cont'}>
            <div className={'app-cont-f'}>
                <SalesOverview/>
            </div>
            <div className={'app-cont-sec'}>
                <InfoTip
                    bg={'linear-gradient(135deg, rgb(56, 184, 242), rgb(132, 60, 246))'}
                    num={286}
                    desc={'Docs'}
                    icon={<FolderOpenOutlinedIcon/>}
                />
                <OrdersChat/>
                <InfoTip
                    bg={'linear-gradient(135deg, rgb(251, 199, 154), rgb(215, 62, 104))'}
                    num={286}
                    desc={'Docs'}
                    icon={<EmojiObjectsOutlinedIcon/>}
                />
                <AvatarTip/>
            </div>
        </div>
    </div>
  );
}

export default App;
