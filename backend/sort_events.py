#!/usr/bin/env python3
import requests
from requests.auth import HTTPBasicAuth
import json
import datetime
from sort import sort

###
# API params
###

headers = {
    'Content-type': 'application/json',
    'Accept': 'application/json',
    }
url=' https://rezervace.flexibee.eu/v2/c/rezervace3/'

###
# getting all events to sort
###

events = requests.get(url+'udalost.json?detail=custom:typAkt,zodpPrac(kod,jmeno,prijmeni,email),zahajeni,dokonceni,predmet,zakazka(kod,nazev,zodpPrac),volno&includes=/udalost/zakazka,/udalost/zodpPrac&limit=0',
    headers=headers, auth=HTTPBasicAuth('team3.manager3', 'team3.ZAtRi'))

###
# erase old dated events
###

utc_time = datetime.datetime.now() 
actual_time = utc_time.strftime("%Y-%m-%dT%H:%M:%S")

old_dated_ids = []
events_to_sort = {}


for a in events.json()['winstrom']['udalost']:
    if (a['zahajeni'] < actual_time):
        old_dated_ids.append(a['id'])
    else:
        ## smazat not!
        if not a['volno']:
            events_to_sort[a['id']] = {}
            events_to_sort[a['id']]['zahajeni'] = a['zahajeni']
            events_to_sort[a['id']]['dokonceni'] = a['dokonceni']
            events_to_sort[a['id']]['kod'] = a['zakazka'][0]['kod']
            
if old_dated_ids:
    data = {
     "winstrom": {
        "@atomic": "false",
        "udalost": [],
        }
    }

    for ids in old_dated_ids:
        data['winstrom']['udalost'].append({
                "id": ids,
                "@action": "delete"
            })


    r = requests.post(url+'udalost.json', json=data, headers=headers, auth=HTTPBasicAuth('team3.manager3', 'team3.ZAtRi'))

    print(r.json())
else:
    print('no olddated events')

print(events_to_sort)
sorted_events = sort(events_to_sort)
if sorted_events == 'error':
    print(sorted_events)
    sorted_events = events_to_sort
    # 12600: {'zahajeni': '2021-04-18T00:00:00+02:00', 'dokonceni': '2021-04-18T00:30:00+02:00', 'kod': '120'}}
data = {
    "winstrom": {
    "udalost": []
    }
}

for a in sorted_events:
    print(sorted_events[a]['zahajeni']) #index
    data["winstrom"]["udalost"].append(
        {
            "id": a,
            "zodpPrac": "code:uzivatel2",
            "zahajeni": sorted_events[a]['zahajeni'],
            "dokonceni": sorted_events[a]['dokonceni'],
            "predmet": "",
            "zakazka": "code:"+sorted_events[a]['kod']
        }
    )


