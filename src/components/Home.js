
import {Link} from 'react-router-dom'
import {
    Button
} from 'reactstrap'
import './Home.css'

const Home = () => {
    return(
    <div className='main'>
        <h2 className="header">National Parkopedia</h2>
        <br />
        <br />
        <div className='info'>
        Welcome!
        <br />
        <br />
        You may use this website to search for information about your favorite parks in the "Parks" tab. 
        <br />
        Or
        <br />
        You may post about your recent trips in our open forum in the "Forum" tab!
        </div>
    </div>
    )
}

export default Home


