import React, { Component } from 'react';
import styles from './NavMenu.module.scss';
import moment from 'moment';
import { mdiAppleKeyboardControl } from '@mdi/js';
import Icon from '@mdi/react';

export default class NavMenu extends Component {
  setNextDateHandler = () => {
    const isNext = true;
    this.props.setDateHandler(isNext);
  };

  setPrevDateHandler = () => {
    const isNext = false;
    this.props.setDateHandler(isNext);
  };

  iconRender = () => {
    const { isOpen } = this.props;

    const rotateAngle = isOpen
                        ? 0
                        : 180;
    const classToggle = isOpen
                        ? styles.iconOpened
                        : styles.iconClosed;
    return (
      <Icon path={mdiAppleKeyboardControl}
            size={1}
            rotate={rotateAngle}
            color={'white'}
            className={classToggle}
      />
    );
  };

  monthRender = () => {
    const {start: prevMonth, end: NextMonth } = this.props;

    return (<>
      {
        //сделать 1 компонент кнопки (button?)
      }
      <div className={styles.selectButton}
           onClick={this.setPrevDateHandler}>
        {
          prevMonth.clone().subtract(1, 'month').format('MMM')
        }
      </div>
      <div className={styles.currentState}
           onClick={this.props.handler}>
        <p>
          {
            prevMonth.subtract(0, 'month').format('MMMM')
          }
        </p>
        {
          this.iconRender()
        }

      </div>
      <div className={styles.selectButton}
           onClick={this.setNextDateHandler}>
        {
          NextMonth.clone().subtract(-1, 'month').format('MMM')
        }
      </div>
    </>);
  };

  weekDisplaying = () => {
    const { start, end } = this.props;
    const monthName = start.format('MMMM');

    if (end.isSame(start, 'month')) {
      return `${monthName} ${start.date()}-${end.date()}`;
    } else {
      return `${monthName} ${start.date()} - ${end.format(
        'MMMM')} ${end.date()}`;
    }
  };

  weekRender = () => {
    return (<>
        <div className={styles.selectButton}
             onClick={this.setPrevDateHandler}>Prev
        </div>
        <div className={styles.currentState}
             onClick={this.props.handler}>
          {
            this.weekDisplaying()
          }
        </div>
        <div className={styles.selectButton}
             onClick={this.setNextDateHandler}>Next
        </div>
      </>
    );

  };

  render () {
    return (<div className={styles.navContainer}>
        {
          this.props.appMode === 'month'
          ? this.monthRender()
          : this.weekRender()
        }
      </div>
    );

  }
}