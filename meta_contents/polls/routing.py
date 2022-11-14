from django.urls import path , include
from polls.consumers import PollsConsumer
 
# Here, "" is routing to the URL ChatConsumer which
# will handle the chat functionality.
websocket_urlpatterns = [
    path("" , PollsConsumer.as_asgi()) ,
]