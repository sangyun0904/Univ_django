import os 

from channels.routing import ProtocolTypeRouter
from django.core.asgi import get_asgi_application 

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "meta_contents.settings")

application = ProtocolTypeRouter(
    {
        "http": get_asgi_application(),
    }
)