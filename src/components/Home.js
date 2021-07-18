
import {Link} from 'react-router-dom'
import {
    Button
} from 'reactstrap'

const Home = () => {
    return(
    <div className='main'>
        <h1>Home page</h1>
        <br /> 
        Welcome to [Our Project Name!]
        <br />
        {/* Change buttons to links once we have the components ready */}
        <br />
        <br />
        <Button>Look up National Parks!</Button>
        <Button>Go to the National Park forum!</Button>
    </div>
    )
}

export default Home


