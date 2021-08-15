import React from 'react'

function Tweet({item}) {
    return (
        <div className="d-flex bg-white text-dark border-bottom p-2 gap-1">
            <img src={`/images/items/${item.img}`} height="40" width="40" style={{borderRadius:'50%'}} className="mt-1"/>
            <div className="d-flex flex-column w-100">
                <div>
                    <span className="fw-bold">{item.name}</span>
                    <span className="text-muted small ps-1">@{item.user}</span>
                </div>
                <span className="small">{item.tweet}</span>
                <div className="d-flex justify-content-between mt-2 mb-1">
                    <div>
                        <img src="/images/icons/mention.svg"></img>
                        <span className="text-muted small ms-1">28</span>
                    </div>
                    <div>
                    <img src="/images/icons/rt.svg"></img>
                        <span className="text-muted small ms-1">5</span>
                    </div>
                    <div>
                    <img src="/images/icons/fav.svg"></img>
                        <span className="text-muted small ms-1">21</span>
                    </div>
                    <div>
                        <img src="/images/icons/share.svg" className="me-2"></img>
                    </div>                 
                    
                </div>
            </div>
        </div>
    )
}
export default Tweet