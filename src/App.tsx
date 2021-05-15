import './App.css';
import UseStateComponent from './Component/UseStateComponent';
import UseEffectComponent from './Component/UseEffectComponent';
import UseContextComponent from './Component/UseContextComponent';
import UseReducerComponent from './Component/UseReducerComponent';
import UseRefComponent from './Component/UseRefComponent';
import CustomHookComponent from './Component/CustomHookComponent';
import CustomElementComponent from './Component/CustomElementComponent';

function App() {  

  return (
    <div className="App">
      <header className="App-header">        
        <h2>Use State</h2>
        <UseStateComponent />
        <h2>Use Effect</h2>
        <UseEffectComponent />
        <h2>Use UseContext</h2>
        <UseContextComponent />
        <h2>Use UseReducer</h2>
        <UseReducerComponent />
        <h2>Use UseRef</h2>
        <UseRefComponent />
        <h2>Use CustomHookComponent</h2>
        <CustomHookComponent />
        <h2>CustomElemenet</h2>
        <CustomElementComponent />
      </header>
    </div>
  );
}

export default App;
