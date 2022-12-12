import pandas as pd
from .models import AirQuality

def getAllData():
    filePath = r"backend/air_backend/air_pollution.csv"
    tempDF = pd.read_csv(filePath)
    headFile = tempDF.head(10)
    convertToJson = headFile.to_json()
    return convertToJson
