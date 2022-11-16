from django.http import HttpResponse
from django.utils import timezone
from django.shortcuts import render, redirect
from django.template import loader

def index(request, room_name):
    now = timezone.now().strftime("%H : %M %p")
    context = {
        'time_now': now,
        'room_name':room_name
    }
    return render(request, 'polls/index.html', context)



# Create your views here.
