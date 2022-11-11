from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse

def index(request):
#    template = loader.get_template('login/index.html')
    return HttpResponse("login page")

# Create your views here.
