import React from 'react';
import "./table.css";
const Table = (props) => {
    const { headers, data } = props;
    return (
        <div className=' full'>
            <table className=''>
                <thead>
                    <tr className='center'>
                        {headers.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index} >
                            {Object.keys(row).map((key, index) => (
                                <td key={index}>{row[key]}</td>
                            ))}
                            <td>
                                <button className='rounded'> View <i className=' fa fa-eye ml-2'></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table