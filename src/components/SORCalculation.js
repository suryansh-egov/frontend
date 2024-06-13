// src/components/SORCalculation.js
import React, { useState } from 'react';
import '../App.css'; // Ensure you import the CSS

const SORCalculation = () => {
    const [rows, setRows] = useState([{ item: '', quantity: 0, rate: 0, amount: 0 }]);
    const [filter, setFilter] = useState('');

    const addRow = () => {
        setRows([...rows, { item: '', quantity: 0, rate: 0, amount: 0 }]);
    };

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const newRows = [...rows];
        newRows[index][name] = name === 'item' ? value : parseFloat(value);
        newRows[index].amount = newRows[index].quantity * newRows[index].rate;
        setRows(newRows);
    };

    const getTotal = () => {
        return rows.reduce((total, row) => total + row.amount, 0);
    };

    const handleSubmit = () => {
        console.log(JSON.stringify(rows));
    };

    const handleDeleteRow = (index) => {
        const newRows = rows.filter((row, i) => i !== index);
        setRows(newRows);
    };

    const filteredRows = rows.filter(row =>
        Object.values(row).some(value =>
            value.toString().toLowerCase().includes(filter.toLowerCase())
        )
    );

    return (
        <div>
            <h1>SOR Calculation Screen</h1>
            <input
                type="text"
                placeholder="Filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <table>
                <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Rate</th>
                        <th>Amount</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {filteredRows.map((row, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td><input type="text" name="item" value={row.item} onChange={(e) => handleInputChange(index, e)} /></td>
                            <td><input type="number" name="quantity" value={row.quantity} onChange={(e) => handleInputChange(index, e)} /></td>
                            <td><input type="number" name="rate" value={row.rate} onChange={(e) => handleInputChange(index, e)} /></td>
                            <td>{row.amount}</td>
                            <td>
                                <img
                                    src="/bin-icon.png"
                                    alt="Delete"
                                    className="bin-icon"
                                    onClick={() => handleDeleteRow(index)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={addRow}>Add Row</button>
            <div>Total: {getTotal()}</div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default SORCalculation;
