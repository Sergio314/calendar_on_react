import React, {Component} from 'react';
import Week from '../Week';
import styles from './CalendarBody.module.scss';
import moment from 'moment';

export default class CalendarBody extends Component {

    dateCalc = () => {
        const weeks = [];
        const start = this.props.start;
        const startDate = start.clone().startOf('week');

        do {
            const weekDates = [];

            for (let i = 0; i < 7; i++) {
                weekDates.push(startDate.clone());
                startDate.add(1, 'day');
            }

            weeks.push((weekDates));
        } while (
            this.props.start.clone().endOf(this.props.appMode).isSameOrAfter(startDate,
            'date'));
        return weeks;
    };

    bodyRender = () => {
        const weeks = this.dateCalc();
        const weekComponents = [];

        for (let week of weeks) {
            weekComponents.push(
                <Week
                    {...this.props}
                    week={week}
                    key={week[0].format('w')}
                />
            );
        }
        return weekComponents;

    };

    render() {
        return (<table className={styles.calendarTable}>
            <CalendarHeader/>
            <tbody>
            {
                this.bodyRender()
            }
            </tbody>
        </table>);
    }
}

function CalendarHeader(props) {
    return (<thead className={styles.calendarHeader}>
    <tr>
        <th>S</th>
        <th>M</th>
        <th>T</th>
        <th>W</th>
        <th>T</th>
        <th>F</th>
        <th>S</th>
    </tr>
    </thead>);

}