import logo from './logo.svg'
import './AppBak.css'

function AppBak() {
    let userRole = 'Dev'

    const styleCSS = {
        color: '#ea8',
    }

    return (
        <div className="AppBak">
            <header className="AppBak-header">
                <img src={logo} className="AppBak-logo" alt="logo" />

                <div className="text-box">
                    <p>{userRole}</p>
                    <p style={{ color: '#8eb' }}>#8eb</p>
                    <p style={styleCSS}>#ea8</p>
                </div>
            </header>
        </div>
    )
}

export default AppBak
