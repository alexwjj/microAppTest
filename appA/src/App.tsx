import './App.css';

function App() {
  return (
    <>
      <div>
        <h1>AppA 嵌套AppB</h1>
        <micro-app-sub name='appB' url='http://localhost:9002/'></micro-app-sub>
      </div>
    </>
  );
}

export default App;
