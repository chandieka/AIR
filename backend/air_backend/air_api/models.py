from django.db import models
from django.conf import settings

# "date","PC4","pm10","pm2.5","no2","no","so2"
# Create your models here.
# DATE = "date"
# PC4 = "PC4"
# PM10 = "PM10"
# PM25 = "PM25"
# NO2 = "NO2"
# NO = "NO"
# SO2 = "SO2"


class AirQuality(models.Model):
    date = models.DateField(("date"), auto_now=True)
    pc4 = models.CharField(("pc4"), max_length=35)
    pm10 = models.FloatField(("pm10"), max_length=35)
    pm2_5 = models.FloatField(("pm2.5"), max_length=35)
    no2 = models.FloatField(("no2"), max_length=35)
    no = models.FloatField(("no"), max_length=35)
    so2 = models.FloatField(("so2"), max_length=35)

    def __init__(self, *args, **kwargs):
        super(AirQuality, self).__init__(*args, **kwargs)
