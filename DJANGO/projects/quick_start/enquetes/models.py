from datetime import datetime

from django.db import models
from django.utils import timezone

class Pergunta(models.Model):
    
    texto_pergunta = models.CharField(max_length=200)
    data_pub = models.DateTimeField('data de publicacao')
    
    def was_published_recently(self):
        return self.data_pub >= timezone.now() - datetime.timedelta(days=1)

    def __str__(self):
        return self.texto_pergunta




class Voto(models.Model):
    pergunta = models.ForeignKey(Pergunta, on_delete=models.CASCADE)
    texto_voto = models.CharField(max_length=200)
    avaliacao = models.IntegerField(default=0)

    def __str__(self):
        return self.texto_voto