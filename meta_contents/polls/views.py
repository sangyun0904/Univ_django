from django.http import HttpResponse
from django.utils import timezone
from django.shortcuts import render
from django.template import loader

def index(request):
    now = timezone.now().strftime("%H : %M %p")
    template = loader.get_template('polls/index.html')
    context = {
        'time_now': now
    }
    return HttpResponse(template.render(context, request))



# Create your views here.
