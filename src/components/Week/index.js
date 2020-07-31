import React, {Component} from 'react';
import Day from '../Day';
import moment from "moment";

export default class Week extends Component {
    constructor(props) {
        super(props);
    }

    weekRender = () => {
        const {week,events} = this.props;

        const days = [];
        for (let day of week) {
            const dayEvents=[];
            events.forEach((item)=>{
                const {date,events}=item;
                if(moment(date).format('YYYY-MM-DD')===day.format('YYYY-MM-DD')){
                    dayEvents.push(events);
                }
            });

            days.push(<Day
                {...this.props}
                events={dayEvents}
                key={day.format('w-d')}
                day={day}
            />);
        }

        return days;
    };

    render() {
        return (<tr style={{height:'50px'}}>
                {this.weekRender()}
            </tr>
        );
    }

}