import React from "react"
import {Input, Badge} from "antd"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons'
import style from "./styles/TopBar.module.css"
// import Avatar from "../../assets/people.png"

export default function TopBar() {
    return (
        <div className={style.header}>
            <Input placeholder="Search" className={style.searchInput} 
                prefix={<FontAwesomeIcon className={style.searchIcon} icon={faSearch} />}
            />
            <div>
                <Badge count={0}>
                    <FontAwesomeIcon className={style.notificationIcon} icon={faBell} />
                </Badge>
                {/* <img src={Avatar} className={style.avatar} alt="Profile Pic" /> */}

            </div>
        </div>
    )
}