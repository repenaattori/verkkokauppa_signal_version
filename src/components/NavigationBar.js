import {Link} from 'react-router-dom';
import { customerData } from './signals/CustomerSignal';


/**
 * This is just a simple example of navigation with bootstrap using router links
 */
export default function NavigationBar(){
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">{customerData.value ? customerData.value.lname : 'Home'}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto justify-content-center">
                    <li className="nav-item active">
                        <Link to={'/auth'} className='nav-link'>Authorization</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to={'/cart'} className='nav-link'>Shopping cart</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
    )
}