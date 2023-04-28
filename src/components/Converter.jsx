import { use } from 'chai';
import{useState} from 'react';

const Converter =()=>{
    const [miles,setMiles]=useState(0);
    const [kms,setKms]=useState(0);

    const changeMiles=(e)=>{
        const newMiles=e.target.value;
        setMiles(newMiles);
        setKms(newMiles*1.6);

    }


    return (<>
    <label>Miles:</label>
    <input value={miles} onChange={changeMiles}/>
    <label>kms:</label>
    <input value={kms}/>
    </>
    );
    }
export default Converter;
    
    

