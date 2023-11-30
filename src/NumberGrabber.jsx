import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"

export default function NumberGrabber(){
    
    // const params = useParams();
    const {banana, id, potato} = useParams();
    const navigate = useNavigate();

    function navigateToHome(){
        console.log("The logic that posts a message, sbumits a form or whatever")
        navigate('/');
    }

    useEffect(()=> {
        setTimeout(() => {
            console.log("Simulating we're doing something")
            navigate('/');
        }, 5000)
    })

    return(
        <div>
            <h1>The number that this component grabbed is: {banana}</h1>
            <h1>and the id is: {id}</h1>
            <h1>and potatoes: {potato}</h1>
            <button onClick={navigateToHome}>Home</button>
        </div>
    )
}
