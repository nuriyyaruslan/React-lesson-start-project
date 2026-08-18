import { use, useState } from 'react';
import styles from './Subscriber.module.css';

function Subscriber() {

    const [username, setUsername] = useState(""); //string

    const [isActive, setActive] = useState(false); //boolean

    const [number, setNumber] = useState(0);   //number

    const toggleActive = () => {
        setActive(!isActive);
    }

    return ( 
        <div className={styles.wrapper}>
            <h1 className={styles.title}>
                What is Hook?
            </h1>

            <input type="text" className={styles.input} onChange={(e) => setUsername(e.target.value)} />
            <button type='button' className={styles.button}>Click me</button>
            <br />
            {
                username.length ? <p className={styles.text}>{username}</p> : null
            }
    
            <br />

            <button type='button' onClick={toggleActive}>Show Div</button>

            <br />

            {
                isActive ? <div>This is just div</div> : null
            }


            <strong>{number}</strong>
             <button type='button' onClick={() => setNumber(number+1)}>Increase number</button>

        </div>
     );
}

export default Subscriber;