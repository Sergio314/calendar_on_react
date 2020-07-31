import React from 'react';
import DayEvents from '../DayEvents';
import styles from './EventList.module.scss';
import moment from "moment";

export default function EventList(props) {

    const {items, selectedDay, end} = props;

    const sortList = items.sort((a, b) => {
        if (moment(a.date).isBefore(moment(b.date))) {
            return -1;
        }
        if (moment(a.date).isAfter(moment(b.date))) {
            return 1;
        }
        return 0
    });

    const itemsList = sortList.filter((item) => {
        return moment(item.date).isBetween(selectedDay - 1, end, 'minute')
    });

    return (
        <div className={styles.eventListContainer}>
            {
                itemsList.map((event,index) => (
                    <DayEvents key={event.date}
                               events={event.events}
                               date={event.date}
                    index={index}/>
                               ))
            }
        </div>
    )
}