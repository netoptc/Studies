from django.urls import path

from . import views

app_name = 'enquetes'

urlpatterns = [
    path('', views.index, name='index'),
    path('<int:pergunta_id>/', views.detalhe, name='detalhe'),
    path('<int:pergunta_id>/resultado', views.resultado, name='resultado'),
    path('<int:question_id>/voto', views.voto, name='voto'),
]