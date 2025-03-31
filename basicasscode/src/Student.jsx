import React, { useState, useEffect } from 'react';

function Student(props) {
    const [value, setValue] = useState(1);  
    const [valuee, setValuee] = useState(0); 

    const handleClick = () => {
        setValue(value + 1);  
    };



    const fruits = ["j", "g", "j"];
    const list = fruits.map(fruit => <li key={fruit}>{fruit}</li>);

    return (
        <div>
            <ul>
                {list}
            </ul>
            <p>Current Value: {value}</p>
            <button onClick={handleClick}>Increment</button>
            
           
        </div>
    );
}

export default Student;

