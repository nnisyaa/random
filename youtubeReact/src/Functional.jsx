//presentation 12 functional component
// export default function Functional({text}){
//     const OnClick = ()=>{
//         console.log('click');
//     }

//     return(
//         <>
//             <button onClick={OnClick}>
//                 {text}
//             </button>
//         </>
//     )
// } 


//task random-number
// import React, { useState } from 'react';
// import './index.css' 
// export default function Functional(){
//     const [randomNumber, setRandomNumber] = useState(null);
//     const generateRandomNumber = () => {
//         const random = Math.random();
//         setRandomNumber(random);
//     };
//     return(
//         <>
//         <button className="random-number-btn" onClick={generateRandomNumber}>
//         Получить число    
//         </button>  
//         <h2>Случайное число: {randomNumber}</h2>
//         </>
//     )
// }


//task - + buttons and stock 
import { useState } from "react"
export default function Functional(){
    const [count, setCount] = useState(0)
    const [stock, setStock] = useState(10) 
    const decrement = ()=>{
        if(stock < 10){
            setStock(stock +1) 
            setCount(count -1) 
        }   
    }
    const increment = ()=>{
        if(stock > 0){
            setStock(stock -1)
            setCount(count +1) 
        }
    }
    return(
        <>
        <div>
            <p>{stock} items left</p>
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
        </div>
        </>
    )
} 