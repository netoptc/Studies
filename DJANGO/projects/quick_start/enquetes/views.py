from django.urls import reverse
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from django.shortcuts import render, get_object_or_404
from django.http import Http404
from .models import Pergunta, Voto

def index(request):
    latest_question_list = Pergunta.objects.order_by('data_pub')[:5]
    #template = loader.get_template('enquetes/index.html')
    context = {
        'latest_question_list': latest_question_list,
    }
    #return HttpResponse(template.render(context, request))
    return render(request, 'enquetes/index.html', context)


def detalhe(request, pergunta_id):
    #try:
    #    pergunta = Pergunta.objects.get(pk=pergunta_id)
    #except Pergunta.DoesNotExist:
    #    raise Http404("Pergunta não existe")
    #return render(request, 'enquetes/detalhe.html', {'question': pergunta})
    pergunta = get_object_or_404(Pergunta, pk=pergunta_id)
    return render(request, 'enquetes/detalhe.html', {'question': pergunta})

def resultado(request, pergunta_id):
    pergunta = get_object_or_404(Pergunta, pk=pergunta_id)
    return render(request, 'enquetes/resultado.html', {'question': pergunta})

def voto(request, question_id): 
    question = get_object_or_404(Pergunta, pk=question_id)
    try:
        selected_choice = question.voto_set.get(pk=request.POST['voto'])
        
    except (KeyError, Voto.DoesNotExist):
        # Redisplay the question voting form.
        return render(request, 'enquetes/detalhe.html', {
            'question': question,
            'error_message': "You didn't select a choice.",
        })
    else:
        selected_choice.avaliacao += 1
        selected_choice.save()
        return HttpResponseRedirect(reverse('enquetes:resultado', args=(question.id,)))
    