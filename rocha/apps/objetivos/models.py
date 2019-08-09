from django.db import models

# Create your models here.

class Objetivo(models.Model):
	objetivo = models.TextField()
	indicador = models.TextField()
	meta = models.TextField()
	iniciativa = models.TextField()