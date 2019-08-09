from django.db import models
from django.contrib.auth.models import User
from apps.objetivos.models import Objetivo

# Create your models here.

class Area_user(User):
	area = models.CharField(max_length=50)
	usuario_id = models.ForeignKey(User,related_name='+', null=True, blank=True,on_delete=models.CASCADE)
	objetivo_id = models.OneToOneField(Objetivo, null=True, blank=True,on_delete=models.CASCADE)