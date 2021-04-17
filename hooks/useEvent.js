import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { URL_EVENTS, URL_EVENTS_FULL } from '../dotenv';
import useSWR from 'swr';
import { authorizedGet, authorizedPost, authorizedPut, authorizedDelete } from '../services/requestHelpers';

const useEvent = () => {
  const [isBusy, setBusy] = useState(false);
  const fullEvents = useSWR(`${URL_EVENTS_FULL}&limit=0`, authorizedGet);

  const create = async (event) => {
    try {
      setBusy(true);
      const result = await authorizedPut(`${URL_EVENTS}.json`, event);
      return result.data.winstrom;
    } catch (err) {
      console.error(err);
      setBusy(false);
    } finally {
      setBusy(false);
    }
  };

  const update = async (event) => {
    try {
      setBusy(true);
      const result = await authorizedPost(`${URL_EVENTS}.json`, event);
      return result.data.winstrom;
    } catch (err) {
      console.error(err);
      setBusy(false);
    } finally {
      setBusy(false);
    }
  };

  const remove = async (eventId) => {
    try {
      setBusy(true);
      const result = await authorizedDelete(`${URL_EVENTS}/${eventId}.json`);
      return result.data.winstrom;
    } catch (err) {
      console.error(err);
      setBusy(false);
    } finally {
      setBusy(false);
    }
  };

  const getCurrentReservation = (userCode) => {
    return fullEvents.data.data.winstrom.udalost.filter((e) => {
      return (
        new Date(e.dokonceni) > new Date() && new Date(e.zahajeni) < new Date() && e['zodpPrac@showAs'] == userCode
      );
    })[0];
  };

  const getUpcomingEvents = () => {
    return fullEvents.data.data.winstrom.udalost.filter((e) => {
      return new Date(e.dokonceni) > new Date();
    });
  };

  const getUserReservations = (userCode) => {
    return fullEvents.data.data.winstrom.udalost.filter((e) => {
      return new Date(e.dokonceni).getDate() >= new Date().getDate() && e['zodpPrac@showAs'] == userCode;
    });
  };

  const userHasReservation = (userCode) => {
    return getUserReservations(userCode).length > 0;
  };

  const getFreeSpot = (from, to) => {
    // try {
    //   setBusy(true);
    //   const result = await authorizedGet(
    //     `${URL_EVENTS}/(("zahajeni">="${from.toISOString()}"and"dokonceni">="${to.toISOString()}")or("zahajeni"<="${from.toISOString()}"and"dokonceni"<="${to.toISOString()}")).json?detail=custom:typAkt,zodpPrac(kod,jmeno,prijmeni,email),zahajeni,dokonceni,predmet,zakazka(kod,nazev,zodpPrac),volno&includes=/udalost/zakazka,/udalost/zodpPrac&limit=0`
    //   );
    //   console.log(result);
    //   return result.data.winstrom.udalost[0].zakazka.kod;
    // } catch (err) {
    //   console.error(err);
    //   setBusy(false);
    // } finally {
    //   setBusy(false);
    // }
    return '101';
  };

  return {
    isBusy,
    create,
    update,
    remove,
    getUpcomingEvents,
    getUserReservations,
    userHasReservation,
    getCurrentReservation,
    getFreeSpot,
    isError: !!fullEvents.error,
    events: fullEvents.data ? fullEvents.data.data.winstrom.udalost : null,
    revalidate: fullEvents.revalidate
  };
};

export default useEvent;
