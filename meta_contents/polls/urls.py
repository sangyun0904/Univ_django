from django.urls import path

from . import views

urlpatterns = [
    path('<str:room_name>/', views.index, name='polls-page'),
]