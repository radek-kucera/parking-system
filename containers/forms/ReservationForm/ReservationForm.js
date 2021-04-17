import React, { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';

import cls from './ReservationForm.module.scss';
import Button from '../../../components/Button/Button';
import useEvent from '../../../hooks/useEvent';
import useParkingSpots from '../../../hooks/useParkingSpots';
import useUser from '../../../hooks/useUser';

const ReservationForm = ({ onReserve }) => {
  const events = useEvent();
  const user = useUser();
  const [isBusy, setBusy] = useState(false);
  const [isReserver, setReserved] = useState(false);
  const [isError, setError] = useState(null);
  const [values, setValues] = useState({
    date: new Date(),
    timeFrom: new Date(new Date().setMinutes(0)),
    timeTo: new Date(new Date(new Date().setMinutes(0)).setHours(new Date().getHours() + 1))
  });

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: new Date(value) });
  };

  const handleReserve = async (value) => {
    const freeSpot = events.getFreeSpot(new Date(value.timeFrom), new Date(value.timeTo));

    console.log(freeSpot);

    await events.create({
      winstrom: {
        udalost: [
          {
            typAkt: 'code:UDÁLOST',
            zodpPrac: `code:${user.user.kod}`,
            zahajeni: new Date(value.timeFrom.setHours(value.timeFrom.getHours() + 2)),
            dokonceni: new Date(value.timeTo.setHours(value.timeTo.getHours() + 2)),
            predmet: '',
            zakazka: `code:${freeSpot}`,
            volno: false
          }
        ]
      }
    });

    events.revalidate();

    onReserve(value);
  };

  const handleSubmit = async () => {
    setBusy(true);
    const isDayInPast = values.date.getDate() < new Date().getDate();
    const isFromEarlierThanTo = values.timeFrom.getHours() < values.timeTo.getHours();
    const isDifferenceToLarge = values.timeTo.getHours() - values.timeFrom.getHours() > 8;

    if (isDayInPast || !isFromEarlierThanTo) return setError('Are you a time traveler?');

    if (isDifferenceToLarge) return setError("Can't park longer than 8 hours!");

    const result = {
      ...values,
      timeFrom: new Date(
        new Date(values.date.setMinutes(values.timeFrom.getMinutes())).setHours(values.timeFrom.getHours())
      ),
      timeTo: new Date(new Date(values.date.setMinutes(values.timeTo.getMinutes())).setHours(values.timeTo.getHours()))
    };

    setError(null);

    await handleReserve(result);
    setBusy(false);
  };

  return (
    <form className={cls['reservation-form']} onSubmit={(e) => e.preventDefault()}>
      <div className={cls['reservation-form-container']}>
        <div className={cls['reservation-form-group']}>
          <DayPicker defaultSelected={values.date} mode="single" onSelect={(value) => handleChange('date', value)} />
        </div>
        <div className={cls['reservation-form-group']}>
          <div className={cls['reservation-form-item']}>
            <label>From: </label>

            <TimePicker
              defaultValue={moment(values.timeFrom.toJSON())}
              showSecond={false}
              minuteStep={15}
              onChange={(value) => handleChange('timeFrom', value)}
            />
          </div>
          <div className={cls['reservation-form-item']}>
            <label>To:</label>

            <TimePicker
              defaultValue={moment(values.timeTo.toJSON())}
              showSecond={false}
              minuteStep={15}
              onChange={(value) => handleChange('timeTo', value.toDate())}
            />
          </div>
        </div>
      </div>

      {isError ? <p>{isError}</p> : null}

      <Button onClick={handleSubmit} isBusy={isBusy}>
        Submit
      </Button>
    </form>
  );
};

export default ReservationForm;
