import React from 'react'
import {Link} from 'react-router-dom'
import './TotalRanking.css'
// Dashboard에서 전달된 rankings 데이터를 받아온다.
const TotalRankings = () =>{
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
                <tr>
                    <th>1</th>
                    <td>김영주</td>
                    <td>한국항공대</td>
                    <td>2500</td>
                </tr>
                <tr>
                    <th>2</th>
                    <td>김영주</td>
                    <td>한국항공대</td>
                    <td>2500</td>
                </tr>
                <tr>
                    <th>3</th>
                    <td>김영주</td>
                    <td>한국항공대</td>
                    <td>2500</td>
                </tr>
                <tr>
                    <th>4</th>
                    <td>김영주</td>
                    <td>한국항공대</td>
                    <td>2500</td>
                </tr>

            </tbody>
      </table>
            
    )

}

export default TotalRankings;