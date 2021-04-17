#!/usr/bin/env python3
import requests
import json

data = {'spot': '101', 'dateFrom': '2021-04-19T10:00:00+02:00', 'dateTo': '2021-04-19T13:30:00+02:00'}
headers = {'Content-type': 'application/json', 'Accept': 'application/json'}
url='http://85.163.88.64:3000/api/v420/'

r = requests.post(url+'send_canceled', json=data, headers=headers)
print(r.status_code)
