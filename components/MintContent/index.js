import styles from './index.module.scss'
import { React, useState } from 'react'

export default function MintContent(){

    const [counter, setCounter] = useState(1);

    const decrementCounter = () => {
        if (counter <= 1)
            return;
        setCounter(counter - 1);
    };

    const incrementCounter = () => {
        if (counter >= 3)
            return;
        setCounter(counter + 1);
    };
    const maxCounter = () => setCounter(3);

    return (
        <div className={styles.container}>
            <img src='/images/productImg.png' style={{width:'624px'}}/>
            <div className={styles.rightContent}>
                <div className={styles.row}>
                    <div className={styles.left}>Total sold</div>
                    <div className={styles.right}>0 of 7,777</div>
                </div>
                <div className={styles.row} style={{padding: '21px 0'}}>
                    <div className={styles.left}>Amount</div>
                    <div className={styles.right}>
                        <div className={styles.num}>
                            <div className={styles.operateBtn}
                                 onClick={decrementCounter}
                            >-</div>
                            <div style={{
                                color:'#68F9DC',
                                fontSize:'32px',
                                margin: '0 37px'
                            }}>{counter}</div>
                            <div className={styles.operateBtn}
                                 onClick={incrementCounter}
                            >+</div>
                        </div>
                        <div className={styles.gradientBtn}
                             onClick={maxCounter}></div>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.left}>Total amount</div>
                    <div className={styles.right}>{0.02*counter}ETH</div>
                </div>
                <div className={styles.btn}>Coming soon</div>
            </div>
        </div>
    )
}