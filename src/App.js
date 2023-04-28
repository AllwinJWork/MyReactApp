
import './App.css';
import Login from './components/Login';
import MilesAhead from './components/Steps';
import Car from './components/Car';
import Button from './components/Button';
import Calculator from './components/Calculator';
import trainers from "./Trainers.json"
import Trainer from './Trainer';




function App() {

  return (
    <>

      {trainers.map(({ id, name, age }) => <Trainer key={id} name={name} age={age} />)}


      <Login />
      <MilesAhead />
      <Car />
      <Button />
      <Calculator />



    </>

  );
}

export default App;
