from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse

class Post(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True) #unique: valor nãp pode ser repetir na tabela
    author = models.ForeignKey(User, on_delete=models.CASCADE) 
    body = models.TextField()
    create = models.DateTimeField(auto_now_add=True) #Obtem a data da criacao
    update = models.DateTimeField(auto_now = True) #Obtem a data de atualizacao

    #Estou dizendo para exibir o nome do titulo na painel do administrador 
    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("blog:detail", kwargs={"slug": self.slug})