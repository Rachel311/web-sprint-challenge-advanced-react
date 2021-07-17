// write your custom hook here to control your checkout form
import { useState } from "react";

const useForm = (key, initialValue) => {
    const [state, setState] = useState(key, initialValue);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleChanges = (e) => {
        setState({ ...state, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
    };

    return [state, handleChanges, handleSubmit, showSuccessMessage]
}

export default useForm