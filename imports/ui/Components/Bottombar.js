import React from 'react'
import './style.css'
function Bottombar() {
    return (
        <div className="d-flex justify-content-between px-5 py-3 border-top align-items-center">
            <span><img src="/images/icons/home.svg" className="activeIcon"/></span>
            <span><img src="/images/icons/search.svg"/></span>
            <span><img src="/images/icons/bell.svg"/></span>
            <span><img src="/images/icons/msg.svg"/></span>
        </div>
    )
}
export default Bottombar