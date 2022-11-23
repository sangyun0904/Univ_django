from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse

def index(request):
    template = loader.get_template('login/signin.html')
    context = {}
    return HttpResponse(template.render(context, request))

def signup(request):
    template = loader.get_template('login/signup.html')
    context = {}
    return HttpResponse(template.render(context, request))