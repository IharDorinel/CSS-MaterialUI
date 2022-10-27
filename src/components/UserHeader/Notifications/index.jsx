import {useState} from "react";
import {
    Button,
    Divider,
    IconButton,
    Menu, MenuItem,
} from "@mui/material";
import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined';
import CircleIcon from "@mui/icons-material/Circle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {notifications} from "./constants";


const Notifications = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl)

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = (e) => {
        if(e.currentTarget.id !== 'notification-menu') {
            setAnchorEl(null)
        }
    }

    const Notification = ({info: {name, action, icon, time}}) => {

        return (
            <MenuItem disableRipple={true} className={'not'}>
            <CircleIcon className={'not-avatar'} sx={{ fontSize: 40 }} color={'disabled'} />
        <div>
            <span className={'not-text'}>
                <span className={'not-name'}>{name}</span>
                {action}
            </span>
            <div className={'not-icon-block'}>
                {icon}
            </div>
        </div>
            </MenuItem>
        )
    }

    return (
        <div>
            <IconButton
                size={'large'}
                onClick={handleClick}
                className={'notification-icon'}
                >
                <NotificationImportantOutlinedIcon />
            </IconButton>
            <Menu
                className={'notification-menu'}
                anchorEl={anchorEl}
                id='notification-menu'
                open={open}
                onClose={handleClose}
                onClick={handleClick}
                transformOrigin={{ horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                >
                <div className={'menu-list'}>
                    <div className={'header'}>Notifications</div>
                    <IconButton>
                        <MoreHorizIcon/>
                    </IconButton>
                </div>
                {notifications.map(el => (
                    <Notification key={el.key} info={el} />
                ))}
                <Divider/>
                <div className={'btn-block'}>
                    <Button color="secondary">View All <ArrowForwardIcon sx={ { fontSize: 10} }/></Button>
                </div>
            </Menu>
        </div>
    )
}

export default Notifications