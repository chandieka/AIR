from rest_framework import serializers
from .models import AirQuality


class AirQualitySerializer(serializers.ModelSerializer):
    class Meta:
        model = AirQuality
        fields = ['__all__']
        # fields = ["date", "PC4", "pm2.5", "pm10", "no2", "no", "so2"]