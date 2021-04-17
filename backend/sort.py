#!/usr/bin/env python3

#events = {
#    '1': {'zahajeni': '2021-04-18T10:00:00+02:00', 'dokonceni': '2021-04-18T12:30:00+02:00', 'kod': '119'},
#    '2': {'zahajeni': '2021-04-18T15:40:00+02:00', 'dokonceni': '2021-04-18T17:20:00+02:00', 'kod': '119'},
#    '3': {'zahajeni': '2021-04-18T08:00:00+02:00', 'dokonceni': '2021-04-18T09:45:00+02:00', 'kod': '112'},
#    '4': {'zahajeni': '2021-04-18T15:00:00+02:00', 'dokonceni': '2021-04-18T16:00:00+02:00', 'kod': '112'},
#}
def sort(events):
    ###
    # copy enets dict
    ###

    help_event = {}
    for i in events:
        help_event[i] = {}
        for j in events[i]:
            help_event[i] = j


    spots = {}
    ids = []
    #print("unsorted")
    for index in events:
        spots[events[index]['kod']] = []
        ids.append(index)
        #print(events[index])


    for index in range(len(ids)):
        for x in range(1, len(ids)-index):
            first = events[ids[x-1]]['zahajeni']
            second = events[ids[x]]['zahajeni']
            if first > second:
                ids[x-1], ids[x] = ids[x], ids[x-1]

    #print('\nsorted')
    for index in ids:
        #print(events[index])
        is_sorted = False
        for spot in spots:
            if is_sorted:
                break
            if not spots[spot]:
                events[index]['kod'] = spot
                spots[spot].append(events[index])
                is_sorted = True

            elif spots[spot][len(spots[spot])-1]['dokonceni'] < events[index]['zahajeni']:
                events[index]['kod'] = spot
                spots[spot].append(events[index])
                is_sorted = True
        if not is_sorted:
            return 'error'

    return(events)