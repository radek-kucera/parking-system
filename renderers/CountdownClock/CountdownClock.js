import React from 'react';
import padStart from '../../helpers/padStart';
import cls from './CountdownClock.module.scss';

const CountdownClock = ({ hours, minutes, seconds }) => {
  return (
    <div className={cls['countdown-container']}>
      <span>{padStart(hours, 2) + ':'}</span>
      <span>{padStart(minutes, 2) + ':'}</span>
      <span>{padStart(seconds, 2)}</span>
    </div>
  );
};

export default CountdownClock;
