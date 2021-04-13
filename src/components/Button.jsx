import {Button} from 'reactstrap'

const MyButton = (props) => {
    console.log(props)
    return(
        <Button onClick={props.click} color='danger'>
            My reactStrap Button
        </Button>
    )
}
export default MyButton