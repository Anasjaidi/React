import classes from './Checkout.module.css';
import {useRef} from "react";

const Checkout = (props) => {
    const nameInputRef = useRef()
    const streetInputRef = useRef()
    const postalCodeInputRef = useRef()
    const cityInputRef = useRef()
    const confirmHandler = (event) => {
        event.preventDefault();
        const entredName = nameInputRef.current.value
        const entredStreet = streetInputRef.current.value
        const entredPostalCode = postalCodeInputRef.current.value
        const entredCity = cityInputRef.current.value
    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={classes.control}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name'/>
            </div>
            <div className={classes.control}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street'/>
            </div>
            <div className={classes.control}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal'/>
            </div>
            <div className={classes.control}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city'/>
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;