import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { URL_EVENTS, URL_EVENTS_FULL } from '../dotenv';
import useSWR from 'swr';
import { authorizedGet, authorizedPost, authorizedPut, authorizedDelete } from '../services/requestHelpers';

const useEvent = () => {
  const [isBusy, setBusy] = useState(false);
  const { data, error, revalidate } = useSWR(`${URL_EVENTS_FULL}&limit=0`, authorizedGet);

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
    return data.data.winstrom.udalost.filter((e) => {
      return (
        new Date(e.dokonceni) > new Date() && new Date(e.zahajeni) < new Date() && e['zodpPrac@showAs'] == userCode
      );
    })[0];
  };

  const getUpcomingEvents = () => {
    return data.data.winstrom.udalost.filter((e) => {
      return new Date(e.dokonceni) > new Date();
    });
  };

  const getUserReservations = (userCode) => {
    return data.data.winstrom.udalost.filter((e) => {
      return new Date(e.dokonceni).getDate() >= new Date().getDate() && e['zodpPrac@showAs'] == userCode;
    });
  };

  const userHasReservation = (userCode) => {
    return getUserReservations(userCode).length > 0;
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
    isError: !!error,
    events: data ? data.data.winstrom.udalost : null,
    revalidate
  };
};

export default useEvent;
