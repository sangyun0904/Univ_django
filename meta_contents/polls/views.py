from django.http import HttpResponse
from django.utils import timezone

def index(request):
    return HttpResponse(timezone.now().strftime("%H:%M %p"))



# Create your views here.
