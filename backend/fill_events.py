#!/usr/bin/env python3
import requests
from requests.auth import HTTPBasicAuth
import json

headers = {
    'Content-type': 'application/json',
    'Accept': 'application/json',
    }
url=' https://rezervace.flexibee.eu/'
data = {
        "winstrom": {
           "udalost": []
        }
}
for i in range(101,121):
    for j in range(10):
        str_j = "{:0>2d}".format(j);
        data["winstrom"]["udalost"].append(
               {
               "typAkt": "code:UDÁLOST",
               "zodpPrac": "code:admin",
               "zahajeni": "2021-04-18T"+str_j+":00:00",
               "dokonceni": "2021-04-18T"+str_j+":30:00",
               "predmet": "Admin 10:00 - 10:30",
               "zakazka": "code:"+str(i),
               "volno": "false"
               })

r = requests.put(url+'v2/c/rezervace3/udalost.json?limit=0', json=data, headers=headers, auth=HTTPBasicAuth('team3.manager3', 'team3.ZAtRi'))

print(r.status_code)
print(r.json())
print(r.text)