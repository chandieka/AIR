from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import AirQuality
from .serializers import AirQualitySerializer
import json
import pandas as pd
# Create your views here.
tempDF = pd.read_csv(r"C:\Users\evald\Documents\GitHub\AIR\backend\air_backend\air_pollution.csv")


def getDataOnDate():
    start_date_month = '2021-10-01'
    end_date_month = '2021-11-01'
    dfMon = tempDF[(tempDF['date'] > start_date_month) & (tempDF['date'] <= end_date_month)]
    # dfMon = dfMon[(dfMon['PC4'] == zipCode)]
    convertToJson = dfMon.to_json(orient="table")
    convertToJson = json.loads(convertToJson)
    json.dumps(convertToJson, indent=4)

    return dfMon

def getAllData():
    headFile = tempDF.head(10)
    convertToJson = headFile.to_json(orient="table")
    convertToJson = json.loads(convertToJson)
    json.dumps(convertToJson, indent=4)
    return convertToJson


@api_view(['GET'])
def getData(request):
    # need to get ann array of jason and respond to it
    airqualityJson = {
                         "date": "2021-09-25 00:00:00",
                         "PC4": "5611",
                         "pm10": "7.86494874954224",
                         "pm2.5": "4.53152179718018",
                         "no2": "26.5669228363037",
                         "no": "17.381550579071",
                         "so2": "2.3094926917553"
                     }
    return Response(airqualityJson)

@api_view(['GET'])
def getAll(request):
    airQualityPostCodeJson = getAllData()
    return Response(airQualityPostCodeJson)

@api_view(['GET'])
def getByPostCode(request):
    Quality = AirQuality.objects.all()
    serializer = AirQualitySerializer(Quality,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getByDate(request):
    airQualityPostCodeJson = getDataOnDate()
    return Response(airQualityPostCodeJson)


# Example how to set up with passing a getter with an additional propperty
# def lock_artwork(request, id):
#     pprint.pprint(Artwork)
#     try:
#         art = Artwork.objects.get(pk=id)
#     except ObjectDoesNotExist:
#         raise Http404()