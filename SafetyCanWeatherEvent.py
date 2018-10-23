
#!/usr/bin/env python3

import requests
import json
import pandas as pd
from collections import Counter
from pprint import pprint


x = 'https://freegeoip.app/json/' 
r = requests.get(x) #makes api call and reutrns ip address and coordinates
x = json.loads(r.text)
state = str(x['region_code'])
longitude = str(x['longitude'])
latitude = str(x['latitude'])
url = 'https://api.weather.gov/alerts?active=1&severity=severe&point='+latitude+','+longitude
call = requests.get(url)
coordinate_info = json.loads(call.text)

# Create updated data for the most common disasters

url_past = 'https://www.fema.gov/api/open/v1/FemaWebDisasterDeclarations'
call = requests.get(url_past)
past_disasters = json.loads(call.text)

incidents = []
for i in range(len(past_disasters['FemaWebDisasterDeclarations'])):
    incidents.append(past_disasters['FemaWebDisasterDeclarations'][i]['incidentType'])
    
states = []
for i in range(len(past_disasters['FemaWebDisasterDeclarations'])):
    states.append(past_disasters['FemaWebDisasterDeclarations'][i]['stateCode'])

dates = []
for i in range(1000):
    abc = past_disasters['FemaWebDisasterDeclarations'][i]['incidentBeginDate']
    cde = abc[:10]
    dates.append(cde)

final = []
for i in range(len(dates)):
    final.append([states[i],incidents[i],dates[i]])
df = pd.DataFrame(final)
df.index +=1
df.columns = ['State','Incident','Date']    #includes commonwealth territories

d_list={}
states = set(states)
for i in states:
    df1 = df.loc[lambda df: df['State'] == i]
    df1 = df1.sort_values(by=['Incident'], ascending=False)
    x = list(df1['Incident'])
    d_list[i]=Counter(x).most_common()[0][0]
pprint(d_list)

try:
    print(coordinate_info['features'][0]['properties']['event'])
except IndexError: 
    print(d_list[state])

