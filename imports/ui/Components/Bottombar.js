import React from 'react'
import './style.css'
function Bottombar() {
    return (
        <div className="d-flex justify-content-between px-5 py-3 border-top align-items-center">
            <a href="/"><img src="/images/icons/home.svg" className="activeIcon"/></a>
            <a><img src="/images/icons/search.svg"/></a>
            <a><img src="/images/icons/bell.svg"/></a>
            <a><img src="/images/icons/msg.svg"/></a>
        </div>
    )
}
export default Bottombar