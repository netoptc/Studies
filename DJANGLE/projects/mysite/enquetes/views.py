from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, world. Você esta nas enquetes.")


# Create your views here.
