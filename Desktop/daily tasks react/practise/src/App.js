import logo from './logo.svg';
import './App.css';
import ButtonComponent from './2-04-2024/functional layer';
import CounterExample from './2-04-2024/counter';
import ShowTable from './mar28/table';
import ListComponent from './mar28/list';
import TableComponent from './mar29/table';
import ControlButton from './mar29/button';
import Condition from './mar29/conditional';
import ExampleFilter from './mar29/efilter';

function App() {
  return (
    <div>
      <ButtonComponent/> 
      {/* <CounterExample/>   */}
      {/* 28th march */}
      <ShowTable/>
      <ListComponent/>
      {/* 29th  */}
      <TableComponent/>
     
      {/* <ControlButton  text ={"login"}/>
      <ControlButton  text = {"register"}/> */}
      {/* children */}
      <ControlButton>
        {/* Signup
         */}
         <button>signup</button>
      </ControlButton>
      <Condition/>
      <ExampleFilter/>
    </div>
  );
}

export default App;
