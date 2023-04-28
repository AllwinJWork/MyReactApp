import {useState} from 'react';

const MilesAhead = () => {
    const[step, setStep] = useState(0);

    const increment = () => {
        console.log(step)
        setStep(prev => prev+1);
    }
    return(
        <>
            <p>Today you have taken {step} steps!</p>
            <button onClick={increment}>I took another step</button>
        </>
    );
}

export default MilesAhead;