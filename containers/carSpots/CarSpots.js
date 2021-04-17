import cls from './CarSpots.module.scss';
import SpotInfo from '../../components/SpotInfo/SpotInfo';
import useEvent from '../../hooks/useEvent';
import useUser from '../../hooks/useUser';

const CarSpots = ({ userReservations, className = '', isBusy, ...props }) => {
  const { getCurrentReservation, events } = useEvent();
  const { user } = useUser();
  const currentReservation = events && user ? getCurrentReservation(user.kod) : null;

  const spotInfos =
    userReservations && currentReservation
      ? userReservations.filter((res) => res.id !== currentReservation.id)
      : userReservations;

  const spotInfoElements = spotInfos
    ? spotInfos.map((res) => <SpotInfo hasReservation={true} reservationInfo={res} />)
    : null;

  return (
    <div className={cls['topWrapper']}>
      <div className={cls['parkingSpots']}>
        <SpotInfo />
        {currentReservation ? (
          <SpotInfo hasReservation={true} reservationInfo={currentReservation} isCurrent={true} />
        ) : null}
      </div>
      <h2> Upcoming reservations </h2>
      <div className={cls['parkingSpots']}>{spotInfoElements}</div>
    </div>
  );
};

export default CarSpots;
