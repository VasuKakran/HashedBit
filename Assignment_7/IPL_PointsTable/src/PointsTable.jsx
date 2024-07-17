import React, { useEffect, useState } from 'react';
import { fetchIPLData } from './Api';

function PointsTable() {
    const [pointsData, setPointsData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await fetchIPLData();
            if (data) {
                setPointsData(data);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>IPL 2022 Points Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>Team</th>
                        <th>Matches Played</th>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>Ties</th>
                        <th>Points</th>
                        <th>Net Run Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {pointsData.map((team) => (
                        <tr key={team.No}>
                            <td>{team.Team}</td>
                            <td>{team.Matches}</td>
                            <td>{team.Won}</td>
                            <td>{team.Lost}</td>
                            <td>{team.Tied}</td>
                            <td>{team.Points}</td>
                            <td>{team.NRR}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PointsTable;
