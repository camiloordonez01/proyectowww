from django.shortcuts import render
from django.views.generic import TemplateView
# Create your views here.

class login(TemplateView):
	template_name = 'usuario/login.html'

class reset_password(TemplateView):
	template_name = 'usuario/reset_password.html'

class registry(TemplateView):
	template_name = 'usuario/registry.html'