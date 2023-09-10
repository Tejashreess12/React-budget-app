import React, { useEffect, useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle } from 'react-icons/fa';
import { FaPlusCircle } from 'react-icons/fa';
import { FaMinusCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense,
        });
    }

    return (
        <tr>
            {console.log(props)}
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><FaPlusCircle size='2.2em' color="green" onClick={event => increaseAllocation(props.name)}></FaPlusCircle></td>
		<td><FaMinusCircle size='2.2em' color="red" onClick={event => decreaseAllocation(props.name)}></FaMinusCircle></td>
		<td><FaTimesCircle size='1em' color="black" onClick={handleDeleteExpense}></FaTimesCircle></td>

        </tr>
    );
};

export default ExpenseItem;