import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(probs) {
    const { Componant } = probs;
    const navigate = useNavigate()
    const login = localStorage.getItem('appToken')
    useEffect(() => {
        if (!login && login !=="userLogin") {
            navigate("/")
        }

    },[]);

    return (
        Componant
    )
}
export default Protected;