from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse
from django.contrib.auth import authenticate, login

def index(request):
    print(request.method)
    if request.method == 'POST':
        username = request.POST['email']
        password = request.POST['pass']
        user = authenticate(request, username=username, password=password)
        if user:
            return HttpResponse(content_type="/polls/"+username)
    else:
        template = loader.get_template('login/signin.html')
        context = {}
        return HttpResponse(template.render(context, request))

def signup(request):
    template = loader.get_template('login/signup.html')
    context = {}
    return HttpResponse(template.render(context, request))