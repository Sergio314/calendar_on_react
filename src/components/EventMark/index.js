import React, {Component} from 'react';
import styles from './EventMark.module.scss';

export default function EventMark(props) {
    const markRender = () => {
        if (props.isIn) {
            return (
                <span className={styles.event}>  </span>
            );
        } else {
            return (<span className={styles.missedEvent} > </span>)
        }
    };


    return markRender()
}