from django.contrib import admin

# Register your models here.
from .models import Post;

#Adicionando o Post a tela de admin
admin.site.register(Post) #mesma função @admin.register(Post)

