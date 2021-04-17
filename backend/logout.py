#!/usr/bin/env python3
import requests
import json


headers = {
    'Content-type': 'application/json',
    'Accept': 'application/json',
    }

headers2 = {
    'Content-type': 'application/json',
    'Accept': 'application/json',
    '
    }

user = 'manager6'

url=' https://rezervace.flexibee.eu/'

login = {
    'username':'team3.manager6',
    'password':'team3.ZAtRi'
}

print('1')
r = requests.post(url+'status/user/manager6/logout',json=login, headers=headers)
print('2')
print(r.status_code)
print(r.json)
print(r.text)