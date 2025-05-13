/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect} from 'react';
import './App.css';

export default function TrafficLights () {
    const config = {
        red: {
          backgroundColor: "red",
          duration: 4000,
          next: "green"
        },
        yellow: {
          backgroundColor: "yellow",
          duration: 2000,
          next: "red"
        },
        green: {
          backgroundColor: "green",
          duration: 3000,
          next: "yellow"
        }
      };
    const [currentColor, setCurrentColor] = useState("green");

    useEffect(()=> {
        const { duration, next} = config[currentColor];
        const timerId = setTimeout(() => {
            setCurrentColor(next);
        }, duration);
        return() => {
            clearTimeout(timerId);
        };
    },[currentColor]);

    return (
        <div className="traffic-lights-container">
            {
                Object.keys(config).map((item) => (
                    <div className='traffic-lights' style={{backgroundColor: item === currentColor ? config[item].backgroundColor : undefined}}/>
                ))
            }
        </div>
    );
       
}