from django.shortcuts import render, redirect
from django.template import loader
from django.http import HttpResponse
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User

from django.contrib import messages

def index(request):
    if request.method == 'POST':
        username = request.POST['email']
        password = request.POST['pass']
        user = authenticate(request, username=username, password=password)
        if user:
            return redirect('/polls/'+username)
        else:
            messages.info(request, "Username OR password is incorrect")
    context = {}
    return render(request, 'login/signin.html', context)

def signup(request):
    if request.method == 'POST':
        username = request.POST['name']
        email = request.POST['email']
        password = request.POST['pass']

        print(username, email, password)

        user = User.objects.create_user(username, email, password)

        return redirect('/')

    template = loader.get_template('login/signup.html')
    context = {}
    return HttpResponse(template.render(context, request))