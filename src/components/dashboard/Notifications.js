import React from 'react'
import moment from 'moment'
import {Link} from 'react-router-dom'

const Notifications = (props) =>{
    const {notifications} = props;
    return (
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    <ul className="notifications">
                        {notifications && notifications.map( item =>{
                            //notification type
                            //new user
                            if(item.type == 'new_game'){
                                
                                return(
                                <Link to={'/game/'+item.game_id}  key={item.id}>
                                    <li>
                                        <p className="pink-text">{item.content}</p>
                                        <p>{item.result}</p>
                                        <div className="grey-text note-date">
                                            {moment(item.time.toDate()).fromNow()}
                                        </div>
                                    </li>
                                </Link>
                                )
                            }else if(item.type == 'new_user'){
                                return(
                                <Link to={'/history/'+item.user_id}  key={item.id}>
                                    <li>
                                        <p className="pink-text">{item.content}</p>
                                        <p>{item.result}</p>
                                        <div className="grey-text note-date">
                                            {moment(item.time.toDate()).fromNow()}
                                        </div>
                                    </li>
                                </Link>
                                )
                            }
                            //지정된 타입이 아닐 때
                            else{

                            }

                        })}

                    </ul>
                </div>
            </div>
        </div>
    )

}
export default Notifications;