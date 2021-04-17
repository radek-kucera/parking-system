#!/usr/bin/env python3
import requests
from requests.auth import HTTPBasicAuth
import json

headers = {
    'Content-type': 'application/json',
    'Accept': 'application/json',
    }
url=' https://rezervace.flexibee.eu/'

r = requests.get(url+'v2/c/rezervace3/udalost.json?limit=0', headers=headers, auth=HTTPBasicAuth('team3.manager3', 'team3.ZAtRi'))
ids = []
for a in r.json()['winstrom']['udalost']:
    ids.append(a['id'])
print(ids)

data = {
 "winstrom": {
    "@atomic": "false",
    "udalost": [],
    }
}

for id in ids:
    data['winstrom']['udalost'].append({
            "id": id,
            "@action": "delete"
        })
print('debug')
r = requests.post(url+'v2/c/rezervace3/udalost.json', json=data, headers=headers, auth=HTTPBasicAuth('team3.manager3', 'team3.ZAtRi'))

print(r.status_code)
print(r.json())
print(r.text)