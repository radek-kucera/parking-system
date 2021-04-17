#!/usr/bin/env python3
import requests
from requests.auth import HTTPBasicAuth
import json
import threading

headers = {
    'Content-type': 'application/json',
    'Accept': 'application/json',
    }
url=' https://rezervace.flexibee.eu/'

data = {
    "winstrom": {
       "udalost": [
           {
           "typAkt": "code:UDÁLOST",
           "zodpPrac": "code:admin",
           "zahajeni": "2020-04-17T10:00:00",
           "dokonceni": "2020-04-17T10:30:00",
           "predmet": "Admin 10:00 - 10:30",
           "zakazka": "code:101",
           "volno": "false"
           },
           {
           "typAkt": "code:UDÁLOST",
           "zodpPrac": "code:admin",
           "zahajeni": "2020-04-17T11:00:00",
           "dokonceni": "2020-04-17T11:30:00",
           "predmet": "Admin 10:00 - 10:30",
           "zakazka": "code:101",
           "volno": "false"
           },
           {
           "typAkt": "code:UDÁLOST",
           "zodpPrac": "code:admin",
           "zahajeni": "2020-04-17T12:00:00",
           "dokonceni": "2020-04-17T12:30:00",
           "predmet": "Admin 10:00 - 10:30",
           "zakazka": "code:101",
           "volno": "false"
           },
           {
           "typAkt": "code:UDÁLOST",
           "zodpPrac": "code:admin",
           "zahajeni": "2020-04-17T14:00:00",
           "dokonceni": "2020-04-17T14:30:00",
           "predmet": "Admin 10:00 - 10:30",
           "zakazka": "code:101",
           "volno": "false"
           },
           {
           "typAkt": "code:UDÁLOST",
           "zodpPrac": "code:admin",
           "zahajeni": "2020-04-17T15:00:00",
           "dokonceni": "2020-04-17T15:30:00",
           "predmet": "Admin 10:00 - 10:30",
           "zakazka": "code:101",
           "volno": "false"
           },
       ]
    }
}

def do_req():
    while(True):
        r = requests.put(url+'v2/c/rezervace3/udalost.json?limit=0', json=data, headers=headers, auth=HTTPBasicAuth('team3.manager3', 'team3.ZAtRi'))

threads = []

for i in range(100):
    threads.append(threading.Thread(target=do_req))
for i in range(100):
    threads[i].start()
for i in range(100):
    threads[i].join()