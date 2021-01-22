import React from 'react'
import Sidebar from "../Shared/SideBar"
import TopBar from '../Shared/TopBar'
import style from "./styles/AdminLayout.module.css"

export default function AdminPageLayout(props) {
    return (
        <div className={style.page}>
            <Sidebar />
            <div className={style.pageContent}>
                <TopBar />
                {props.children}
            </div>
        </div>
    )
}