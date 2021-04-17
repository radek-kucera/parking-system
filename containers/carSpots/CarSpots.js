import cls from './CarSpots.module.scss';
import SpotInfo from '../../components/SpotInfo/SpotInfo';
import useEvent from '../../hooks/useEvent';
import useUser from '../../hooks/useUser';
import { authorizedPost } from '../../services/requestHelpers';
import { URL_EMAIL_CANCEL } from '../../dotenv';

const CarSpots = ({ userReservations, className = '', isBusy, ...props }) => {
  const { getCurrentReservation, events, remove, revalidate } = useEvent();
  const { user } = useUser();
  const currentReservation = events && user ? getCurrentReservation(user.kod) : null;

  const spotInfos =
    userReservations && currentReservation
      ? userReservations.filter((res) => res.id !== currentReservation.id)
      : userReservations;

  const handleCancel = async (event) => {
    await remove(event.id);

    const body = { spot: event.zakazka[0].kod, dateFrom: event.zahajeni, dateTo: event.dokonceni };

    authorizedPost(URL_EMAIL_CANCEL, body);

    revalidate();
  };

  const spotInfoElements = spotInfos
    ? spotInfos.map((res) => (
        <SpotInfo hasReservation={true} reservationInfo={res} onCancel={() => handleCancel(res)} key={res.id} />
      ))
    : null;

  return (
    <div className={cls['top-wrapper']}>
      <div className={cls['parking-spots']}>
        <SpotInfo />
        {currentReservation ? (
          <SpotInfo hasReservation={true} reservationInfo={currentReservation} isCurrent={true} />
        ) : null}
      </div>
      <h2> Upcoming reservations </h2>
      <div className={cls['parkingpots']}>{spotInfoElements}</div>
    </div>
  );
};

export default CarSpots;
