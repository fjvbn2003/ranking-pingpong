import React from 'react'
import moment from 'moment'
const Notifications = (props) =>{
    const {notifications} = props;
    return (
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    <ul className="notifications">
                        {notifications && notifications.map( item =>{
                            return(
                                <li key={item.id}>
                                    <p className="pink-text">{item.content}</p>
                                    <p>{item.result}</p>
                                    <div className="grey-text note-date">
                                        {moment(item.time.toDate()).fromNow()}
                                    </div>
                                </li>
                            )
                        })}

                    </ul>
                </div>
            </div>
        </div>
    )

}
export default Notifications;