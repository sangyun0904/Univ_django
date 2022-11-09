from django.http import HttpResponse
from django.utils import timezone
from django.shortcuts import render

def index(request):
    return render(request, 'polls/index.html')



# Create your views here.
