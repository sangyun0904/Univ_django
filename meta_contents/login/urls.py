from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='login-user'),
    path('signup', views.signup, name="signup-user")
]