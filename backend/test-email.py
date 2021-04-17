#!/usr/bin/env python3
import requests
import json

data = {'name':'test',
        'emailto': ['vojtechpetrasek@gmail.com','admin@rethy.cz']}
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
url='http://localhost:3000/confirm-reservation'

print('1')
r = requests.post(url, json=data, headers=headers)
print('2')
print(r.status_code)
print(r.json)
print(r.text)