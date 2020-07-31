import React from 'react';
import Icon from '@mdi/react';
import {mdiCheck, mdiCheckAll} from '@mdi/js';
import styles from './EventItem.module.scss';
import classNames from 'classnames';

export default class EventItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isIn: null,
        }
    }

    renderIn = () => {
        return (<>
                <Icon path={mdiCheckAll}
                      size={1}
                      color="white"/>
                <p>I am In</p>
            </>
        )
    };

    renderNotIn = () => {
        return (<>
                <Icon path={mdiCheck}
                      size={1}
                      color="white"/>
                <p>Join?</p>
            </>
        )
    };

    componentDidMount() {
        this.setState({
            isIn: this.props.event.isIn
        })
    }

    isInChange = () => {
        this.setState({
            isIn: !this.state.isIn
        })
    };

    render() {
        const {event} = this.props;
        const {isIn}= this.state;
        return (
            <div
                className={classNames({[styles.eventItemContainer]: isIn}, {[styles.eventNotIn]: !isIn})}>
                <div className={styles.eventNameAndTime}>
                    <p className={styles.eventName}>{event.name}</p>
                    <div>{event.time}</div>
                </div>
                <div className={styles.eventBody}>{
                    event.body
                }</div>
                <div className={styles.eventIsIn}
                     onClick={this.isInChange}>
                    {
                        isIn ? this.renderIn()
                            : this.renderNotIn()
                    }
                </div>
            </div>

        )
    }


}