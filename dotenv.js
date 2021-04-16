// REPLACE THIS WITH .ENV VARIABLE TO AUTOMATIC DEV/PROD SWITCH
// IT IS NOT GOOD FOR HACKATHON SHOWCASE

export const URL_SIGN = 'https://rezervace.flexibee.eu/login-logout/login.json';
export const URL_AUTH =
  'https://rezervace.flexibee.eu/v2/c/rezervace3/uzivatel/(id=me()).json?detail=custom:kod,jmeno,prijmeni,role';
export const URL_EVENTS = 'https://rezervace.flexibee.eu/v2/c/rezervace3/udalost';
export const URL_PARKING_SPOTS =
  'https://rezervace.flexibee.eu/v2/c/rezervace3/zakazka.json?detail=custom:kod,typZakazky,zodpPrac(id,kod,email)&includes=/zakazka/zodpPrac&limit=0';
