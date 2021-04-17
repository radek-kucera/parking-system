#!/usr/bin/env python3
import requests
from requests.auth import HTTPBasicAuth
import json


headers = {
    'Content-type': 'application/json',
    'Accept': 'application/json',
    }

headers2 = {
    'Content-type': 'application/json',
    'Accept': 'application/json',
    'username':'team3.manager3',
    'password':'team3.ZAtRi'
    }

url='https://rezervace.flexibee.eu/'

login = {
    'username':'team3.manager3',
    'password':'team3.ZAtRi'
}

print('1')
#login -> get session id
#r = requests.post(url+'login-logout/login.json',json=login, headers=headers)
#get role
r = requests.get(url+'v2/c/rezervace3/uzivatel/(id=me()).json?detail=custom:kod,jmeno,prijmeni,role', headers=headers2, auth=HTTPBasicAuth('team3.manager3', 'team3.ZAtRi'))
#get all udalost
#r = requests.get(url+'v2/c/rezervace3/udalost.json?limit=0', headers=headers2, auth=HTTPBasicAuth('team3.manager3', 'team3.ZAtRi'))
#get udalost id x
#r = requests.get(url+'v2/c/rezervace3/udalost/40.json', headers=headers2, auth=HTTPBasicAuth('team3.manager3', 'team3.ZAtRi'))
print('2')
print(r.status_code)
print(r.json)
print(r.text)