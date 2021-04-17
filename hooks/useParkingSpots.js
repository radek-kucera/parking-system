import { useEffect, useState } from 'react';
import { URL_PARKING_SPOTS, URL_SENSORS } from '../dotenv';
import useSWR from 'swr';
import { authorizedGet, unauthorizedGet } from '../services/requestHelpers';

const useParkingSpots = () => {
  const parkings = useSWR(URL_PARKING_SPOTS, authorizedGet);
  const sensors = useSWR(URL_SENSORS, unauthorizedGet);

  const getFreeSpot = () => {
    return '101';
  };

  return {
    getFreeSpot,
    isErrorParkings: !!parkings.error,
    isErrorSensors: !!sensors.error,
    parkingSpots: parkings.data ? parkings.data.data.winstrom.zakazka : null,
    sensorsData: sensors.data ? sensors.data.data : null,
    revalidateParkings: parkings.revalidate,
    revalidateSensors: sensors.revalidate
  };
};

export default useParkingSpots;
