import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './temp.css';


const Temp = () => {


    const [temp, setcount] = useState(7)
    const [color, updateimage] = useState('cold')


    const increment = () => {

        setcount(temp + 1)
        if(temp >= 0){
            updateimage('cold');
        }
        if (temp >= 10) {
            updateimage('hot');
        }
       
    }

    const decrement = () => {

        setcount(temp - 1)

        if (temp <= 10) {
            updateimage('cold')
        } 
        if(temp <= 0){
            updateimage('night')
        }
       
    }




    return (
        <>
            <div className='new'>
                <div className={`main  ${color} `}>
                    <h3> Temperature </h3>
                    <div className='circle'> {temp} &#176; C </div>
                    <div className='buttoncenter'>
                        
                        <Button className='button' onClick={decrement} variant="info">-</Button>
                        <Button className='button' onClick={increment} variant="info">+</Button>
                      
                    </div>
                </div>
            </div>
        </>
    )
}



export default Temp