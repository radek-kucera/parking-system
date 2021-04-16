import cls from './ReservationPopup.module.scss';
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Button from '../Button/Button';
import useEvent from '../../hooks/useEvent';
import useUser from '../../hooks/useUser';
import { useState } from 'react';

const ReservationPopup = () => {
  const [isBusy, setBusy] = useState(false);
  const [isError, setError] = useState(false);
  const [fromTime, setFromTime] = useState('');
  const [toTime, setToTime] = useState('');
  const [date, setDate] = useState('');

  const events = useEvent();
  const { user } = useUser();

  const submitEvent = () => {
    const fromTimeSplited = fromTime.split(':');
    const toTimeSplited = toTime.split(':');
    const selectedDate = new Date(date);

    const fromDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate(),
      fromTimeSplited[0],
      fromTimeSplited[1],
      0
    );

    const toDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate(),
      toTimeSplited[0],
      toTimeSplited[1],
      0
    );

    const res = events.create({
      winstrom: {
        udalost: [
          {
            typAkt: 'code:UDÁLOST',
            zodpPrac: 'code:admin',
            zahajeni: fromDate,
            dokonceni: toDate,
            predmet: 'idk zatim neresim lmao',
            zakazka: 'code:101',
            volno: false
          }
        ]
      }
    });
  };

  return (
    <Popup trigger={<Button>Book</Button>} modal>
      {(close) => {
        if (!isBusy) {
          return (
            <div className={cls['modal']}>
              <button className={cls['close']} onClick={close}>
                &times;
              </button>
              <div className={cls['header']}> New reservation </div>
              <div className={cls['content']}>
                <p>
                  Date:
                  <input
                    type="date"
                    min="2018-01-01"
                    max="2018-12-31"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  ></input>
                </p>
                <p>
                  From:<input type="time" value={fromTime} onChange={(e) => setFromTime(e.target.value)}></input>
                </p>
                <p>
                  To:<input type="time" value={toTime} onChange={(e) => setToTime(e.target.value)}></input>
                </p>
              </div>
              <div className={cls['actions']}>
                <Button
                  onClick={() => {
                    submitEvent();
                  }}
                >
                  Book
                </Button>
              </div>
            </div>
          );
        } else {
          return <div></div>;
        }
      }}
    </Popup>
  );
};

export default ReservationPopup;
