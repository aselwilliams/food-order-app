import classes from './Checkout.module.css';
import {useRef, useState} from 'react';

const isEmpty = (value) => value.trim() === '';
const isFiveChars=(value)=> value.trim().length===5;

const Checkout = (props)=> {
    const [formValidity, setFormValidity] = useState({
        name: true,
        street: true,
        city: true,
        postal:true
    })

    const nameRef = useRef();
    const streetRef = useRef();
    const postalRef = useRef();
    const cityRef = useRef();
    const confirmHandler = (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const street = streetRef.current.value;
        const postal = postalRef.current.value;
        const city = postalRef.current.value;

        const nameIsValid = !isEmpty(name);
        const streetIsValid = !isEmpty(street);
        const cityIsValid = !isEmpty(city);
        const postalIsValid= isFiveChars(postal);

        setFormValidity({
            name:nameIsValid,
            street:streetIsValid,
            postal: postalIsValid,
            city:cityIsValid
        })

        const formIsValid = nameIsValid && streetIsValid && postalIsValid && cityIsValid;

        if(!formIsValid){
           return; 
        }
    }

    const nameValidityClasses = `${classes.control} ${formValidity.name ? '' : classes.invalid}`
    const streetValidityClasses = `${classes.control} ${formValidity.street ? '' : classes.invalid}`
    const postalValidityClasses = `${classes.control} ${formValidity.postal ? '' : classes.invalid}`
    const cityValidityClasses = `${classes.control} ${formValidity.city ? '' : classes.invalid}`
    return (
        <form onSubmit={confirmHandler}>
            <div className={nameValidityClasses}>
                <label htmlFor="name" >Your Name</label>
                <input type="text" id='name' ref={nameRef}/>
                {!formValidity.name && <p>Please enter a valid name!</p>}
            </div>
            <div className={streetValidityClasses}>
                <label htmlFor="street">Street</label>
                <input type="text" id='street' ref={streetRef} />
                {!formValidity.street && <p>Please enter a valid street!</p>}
            </div>
            <div className={postalValidityClasses}>
                <label htmlFor="postal">Postal Code</label>
                <input type="text" id='postal' ref={postalRef} />
                {!formValidity.postal && <p>Please enter a valid postal code (5 character long).</p>}
            </div>
            <div className={cityValidityClasses}>
                <label htmlFor="city">City</label>
                <input type="text" id='city' ref={cityRef} />
                {!formValidity.city && <p>Please enter a valid city!</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit' className={classes.submit}>Confirm</button>
            </div>
        </form>
    )
}
export default Checkout;