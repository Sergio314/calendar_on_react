import React, {Component} from 'react';
import moment from 'moment';
import styles from './Day.module.scss';
import EventMark from "../EventMark";
import classNames from 'classnames'

export default class Day extends Component {

    selectDay = () => {
        this.props.selectDayHandler(this.props.day.clone())
    };

    eventMarkRender = () => {
        const {events} = this.props;
        const arrayOfEvents = events[0];
        const eventMarks = [];

        if (Array.isArray(arrayOfEvents) && arrayOfEvents.length > 0) {

            for (let i = 0; i < arrayOfEvents.length && i <= 3; i++) {
                eventMarks.push(<EventMark key={i}
                                           isIn={arrayOfEvents[i].isIn}/>
                )
            }
        }
        return eventMarks
    };

    render() {
        const {start, end, selectedDay, day, currentDay} = this.props;

        const classNamesList = classNames(styles.day,
            {[styles.selectedDay]: selectedDay.isSame(day, 'day')},
            {[styles.hiddenDay]: day.isBefore(start.clone(), 'date') || day.isAfter(end.clone(), 'date')},
            {[styles.currentDay]: day.isSame(currentDay, 'day')});


        return (<td className={classNamesList}
                    onClick={this.selectDay}>
                <p>
                    {
                        day.date()
                    }
                </p>
                <div className={styles.eventsContainer}>
                    {
                        this.eventMarkRender()
                    }
                </div>
            </td>
        );
    }
}