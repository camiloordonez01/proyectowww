from django.contrib import admin
from django.urls import path, include
from apps.usuario.views import login, reset_password, registry, panel,modelo

urlpatterns = [
	path('',login.as_view()),
	path('user/reset_password',reset_password.as_view()),
	path('user/registry',registry.as_view()),
	path('panel',panel.as_view()),
	path('panel/modelo',modelo.as_view()),
]