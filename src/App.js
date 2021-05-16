import ControlInputs from './components/ControlInputs';
import ShortCircuit from './components/ShortCircuit';
import ShowHide from './components/ShowHide';
import UseEffectCleanUpp from './components/UseEffectCleanUpp';
import UseEffectFetchData from './components/UseEffectFetchData';
import UseEffectsBasics from './components/UseEffectsBasic';
import UseStateArray from './components/UseStateArray';
import UseStateBasics from './components/UseStateBasics';
import UseStateCounter from './components/UseStateCounter';
import UseStateObjectExample from './components/UseStateObjectExample';

function App() {
  return ( 

    <>
    <div className="App">
     {/* <UseStateBasics />
     <UseStateArray /> 
     <UseStateObjectExample />
     <UseStateCounter />
     <UseEffectsBasics />
     <UseEffectCleanUpp />
     <UseEffectFetchData />
     <ShortCircuit />
    <ShowHide />
     */}
     <ControlInputs />

    </div>
  </>
    )
}

export default App;
