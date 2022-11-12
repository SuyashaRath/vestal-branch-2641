import React from 'react';
import "../css/start.css"
const GetStartBtn = ({setGets}) => {
    return (
        <button className='startBtn'onClick={()=>setGets(1)} >
            <h2 className='get2'>Get Started</h2>
                <span className='spn2'>→</span>
        </button >
    );
}


export default GetStartBtn;

