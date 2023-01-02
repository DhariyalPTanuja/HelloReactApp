import {useNavigate} from "react-router-dom";

const NextPage = () => {
    let navigate = useNavigate();

    const backToPage = () => {
        console.log("next page button is clicked");
        navigate("/")

    }
    return (
        <>
            <h1>new web page routing successfully done</h1>
            <button onClick={ backToPage }>  BackToPage</button>
        </>
    );
}
export default NextPage;