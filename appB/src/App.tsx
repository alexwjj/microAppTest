import './App.css';

function App() {
  return (
    <>
      <h1>AppB 嵌套AppC</h1>
      <micro-app name='appC' url='http://localhost:9003/'></micro-app>
    </>
  );
}

export default App;
