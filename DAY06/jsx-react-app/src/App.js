import logo from './logo.svg'
import './App.css'
import { FunctionChild } from './FunctionChild'
import ClassChild from './ClassChild'
import { Profile } from './Profile'

export const App = () => {
    const users = [
        { name: '정민영', age: '27', mail: 'myjeong19@naver.com' },
        {
            name: '정민일',
            age: '28',
            mail: 'miniljeong@naver.com',
        },
    ]

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} alt="logo" className="App-logo" />
                <h1>Hello World!</h1>

                <FunctionChild />
                <ClassChild />
            </header>
            <Profile users={users} number={1}></Profile>
            <Profile users={users} number={2}></Profile>
        </div>
    )
}
