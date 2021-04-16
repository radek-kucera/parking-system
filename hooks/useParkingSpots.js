import { useEffect, useState } from 'react';
import { URL_PARKING_SPOTS } from '../dotenv';
import useSWR from 'swr';
import { authorizedGet } from '../services/requestHelpers';

const useParkingSpots = () => {
  const parkings = useSWR(URL_PARKING_SPOTS, authorizedGet);

  return {
    isError: !!parkings.error,
    parkingSpots: parkings.data ? parkings.data.data.winstrom.zakazka : null,
    revalidate: parkings.revalidate
  };
};

export default useParkingSpots;
