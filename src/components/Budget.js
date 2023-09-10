import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, budget, expenses, currency} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleChangeBudget = (newBudget) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget
        });
        console.log(budget);
    }

    const validateInput = (event) => {
        const inputElement = event.target;
        const value = inputElement.value;

        if (value < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending:" +currency + totalExpenses);
            handleChangeBudget(totalExpenses);
            return;

        } else if ( value > 20000) {
            alert("The budget value cannot exceed 20000");
            handleChangeBudget("20000");
            return;
            
        }
        else{
            handleChangeBudget(event.target.value)
            return
        }
        
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                    type='number' 
                    step='10' 
                    min={totalExpenses} 
                    max='20000' 
                    value={budget} 
                    onChange={(event) => handleChangeBudget(event.target.value)}
                    onBlur={(event) => validateInput(event)}
                >
                </input>
            </span>
        </div>
    );
}

export default Budget;
