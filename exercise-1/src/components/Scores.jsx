import React from 'react';
import Statistic from './Statistic';
function Scores({ courseName , courseResults }) {
    const getScoreClassName = (score) => {
        if (score < 50 ) {
            return 'warning';
        }else {
            return '';
        }
    };
    const scores = courseResults.map((result) => result.score);
    return(
        <div className ="scores">
            <h1>{courseName}</h1>
            <table>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {courseResults.map((result,index) => (
                        <tr key={index}>
                            <td>{result.firstName}</td>
                            <td>{result.lastName}</td>
                            <td className={getScoreClassName(result.score)}>{result.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Statistic scores={scores} />
        </div>
    );

}
export default Scores;