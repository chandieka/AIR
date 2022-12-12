from django.urls import path
from . import views

urlpatterns = [
    path('compounds/', views.getAll),
    path('postcode/', views.getByPostCode),
    path('date/', views.getByDate),
    path('getdata', views.getData)

]