import { useParams } from "react-router-dom"

export default function NumberGrabber(){
    
    // const params = useParams();
    const {banana, id, potato} = useParams();
    return(
        <div>
            <h1>The number that this component grabbed is: {banana}</h1>
            <h1>and the id is: {id}</h1>
            <h1>and potatoes: {potato}</h1>
        </div>
    )
}