#!/usr/bin/env python3
import requests
from requests.auth import HTTPBasicAuth
import json

headers = {
    'Content-type': 'application/json',
    'Accept': 'application/json',
    }
url=' https://rezervace.flexibee.eu/'

r = requests.get(url+'v2/c/rezervace3/udalost.json?detail=custom:typAkt,zodpPrac(kod,jmeno,prijmeni,email),zahajeni,dokonceni,predmet,zakazka(kod,nazev,zodpPrac),volno&includes=/udalost/zakazka,/udalost/zodpPrac&limit=0', headers=headers, auth=HTTPBasicAuth('team3.manager3', 'team3.ZAtRi'))
#print(r.json())
counter = 0
for a in r.json()['winstrom']['udalost']:
    print('\n')
    c = "{:0>3d}".format(counter);
    print(c, a['id'], a['zodpPrac@showAs'], a['zahajeni'], a['dokonceni'], a['predmet'], a['zakazka@showAs'], a['volno'], a['zodpPrac'])
    counter += 1