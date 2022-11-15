import os 

from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application 
import polls.routing

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "meta_contents.settings")

application = ProtocolTypeRouter(
    {
        "http": get_asgi_application(),
        "websocket": AuthMiddlewareStack(
            URLRouter(
                polls.routing.websocket_urlpatterns
            )
        ),
    }
)