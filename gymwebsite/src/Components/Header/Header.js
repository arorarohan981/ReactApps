import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import {Link} from 'react-scroll';

const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setmenuOpened] = React.useState(false);

    return (
        <div className="header" id="home">
            <img src={Logo} className="logo"></img>
            {(menuOpened === false && mobile === true) ? <div onClick={()=>setmenuOpened(true)}>
                <img src={Bars} alt="" style={{ width: "1.5rem", height: "1.5rem", backgroundColor: 'yellowgreen', padding: "1rem", borderRadius: "0.5rem" }}></img>
            </div> : <ul className="headermenu">
                <li onClick={() =>setmenuOpened(false)}>
                <Link to='home'
                   onClick={() =>setmenuOpened(false)}
                   span={true}
                   smooth={true}
                   >Home</Link>
                </li>
                <li>
                <Link to='programs'
                   onClick={() =>setmenuOpened(false)}
                   span={true}
                   smooth={true}
                   > Programs</Link>
                </li>
                <li >
                    <Link to='reasons'
                   onClick={() =>setmenuOpened(false)}
                   span={true}
                   smooth={true}
                   > Why Us</Link>
                </li>
                <li>
                <Link to='plans'
                   onClick={() =>setmenuOpened(false)}
                   span={true}
                   smooth={true}
                   > Plans</Link>
                </li>
                <li >
                   <Link to='testimonials'
                   onClick={() =>setmenuOpened(false)}
                   span={true}
                   smooth={true}
                   > Testimonials</Link>
                </li>
            </ul>
            }

        </div>
    )
}

export default Header