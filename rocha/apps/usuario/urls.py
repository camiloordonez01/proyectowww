from django.contrib import admin
from django.urls import path, include
from apps.usuario.views import login

urlpatterns = [
	path('',login.as_view()),
]