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
    "@atomic": "false",
    "udalost": [
        {
            "id": "42",
            "@action": "delete"
        }
    ],
    }
}

r = requests.post(url+'v2/c/rezervace3/udalost.json', json=data, headers=headers, auth=HTTPBasicAuth('team3.manager3', 'team3.ZAtRi'))

print(r.status_code)
print(r.json())
print(r.text)