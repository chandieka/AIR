from django.shortcuts import render
from django.conf import settings
from django.http import JsonResponse
import pandas as pd
import json
import os
from .models import AirQuality

def getDataOnDate():
    return render("")

def getAllData():
    return ""

def getData(request):
    return ""


def getAll(request):
    path = os.path.join(settings.BASE_DIR, 'air_pollution.csv')
    df = pd.read_csv(path)
    df_per_zipcode = dict(tuple(df.groupby('PC4')))
    
    data = {}
    data["postcode4"] = []
    data['start_date'] = df.date.min()
    data['end_date'] = df.date.max()
    data['data'] = {}

    for i in df_per_zipcode:
        df = df_per_zipcode[i][['date', 'pm10', 'pm2.5', 'no2', 'no', 'so2']]
        result = df.to_json(orient='table')
        result = json.loads(result)
        
        data["postcode4"] += [i]
        data['data'][i] = result['data']
        
    result = json.dumps(data)
    
    return JsonResponse(result, safe=False)

def getByPostCode(request):
    return ""

def getByDate(request):
    return ""