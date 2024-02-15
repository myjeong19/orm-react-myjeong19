import logo from './logo.svg'
import './App.css'

function App() {
    console.log('App.js 화면 렌더링!')
    console.error('강제로 발생시킨 에러!?')
    console.log('App.js 화면 렌더링!')
    console.log('App.js 화면 렌더링!')
    console.log('App.js 화면 렌더링!')

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App
