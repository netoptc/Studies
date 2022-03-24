from django.contrib import admin

# Register your models here.
from .models import Pergunta, Voto

#Habilitando pergunta e votos no painel do admistrador
admin.site.register(Pergunta)
admin.site.register(Voto)