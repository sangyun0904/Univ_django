from django.shortcuts import render, redirect
from django.template import loader
from django.http import HttpResponse
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User

from verify_email.email_handler import send_verification_email

from django.contrib import messages
from .forms import SignupForm

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
    form = SignupForm()
    print(form)
    if form.is_valid():
        print(form)
        inactive_user = send_verification_email(request, form)

        return redirect('/')

    template = loader.get_template('login/signup.html')
    context = {
        'form_name': form['name'],
        'form_email': form['email'],
        'form_pass': form['password']
    }
    return render(request, 'login/signup.html', context)