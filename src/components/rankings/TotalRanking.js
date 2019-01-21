import React from 'react'
import {Link} from 'react-router-dom'
import './TotalRanking.css'
// Dashboard에서 전달된 rankings 데이터를 받아온다.
const TotalRankings = (props) =>{
    const {users} = props;
    console.log(users);
    return(
        <table className="highlight centered">
            <thead>
            <tr>
                <th>순위</th>
                <th>이름</th>
                <th>구장</th>
                <th>레이팅</th>
                
            </tr>
            </thead>

            <tbody>
                {users && users.map((item, index) =>{
                    return(
                    <tr key={item.id}>
                        <th>{index+1}</th>
                        <td>{item.name}</td>
                        <td>{item.club}</td>
                        <td>{item.rating}</td>
                    </tr>
                    )
                })}

            </tbody>
      </table>
            
    )

}

export default TotalRankings;