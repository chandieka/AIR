import csv
import importlib
import json
import sqlite3

csvFilePath = r"../air_pollution.csv"
jsonFilePath = r"../airQualityRef.json"

# def csv_to_sqlDB():
#     sqlite3.connect(importlib.import_module())

def csv_to_json():
    jsonArray = []

    #read csv file
    with open(csvFilePath, encoding='utf-8') as csvf:
        #load csv file data using csv library's dictionary reader
        csvReader = csv.DictReader(csvf)

        #convert each csv row into python dict
        for row in csvReader:
            #add this python dict to json array
            jsonArray.append(row)

    #convert python jsonArray to JSON String and write to file
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
        jsonString = json.dumps(jsonArray, indent=4)
        jsonf.write(jsonString)

csvcsvFilePath = r'../air_pollution.csv'
jsoncsvFilePath = r'../airQualityRef.json'
csv_to_json()
