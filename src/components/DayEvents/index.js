import React from 'react';
import EventItem from "../EventItem";
import moment from "moment";
import styles from './DayEvents.module.scss';

export default function DayEvents(props) {

    const {events, date} = props;
    const classname = props.index === 0 ? styles.nearestEvent :styles.day;
    return (<div className={styles.dayEventsContainer}>
            <div className={classname}>
                {
                    moment(date).format('ddd, D MMMM')
                }
            </div>
            {
                events.map((event) => (
                    <EventItem key={date + event.time} event={event}/>))
            }
        </div>
    )
}