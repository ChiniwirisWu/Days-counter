from django.urls import path
from . import views

app_name = 'days_counter'

urlpatterns = [
    path('', views.view_index, name='index'),
]
