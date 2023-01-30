from django.db import models

# ---------------- Import Our User Model ------------
from django.contrib.auth.models import User

# ----------- Import Our Signals ------------
from django.db.models.signals import post_save
from django.dispatch import receiver





# Create your models here.
class Task(models.Model):
    creator = models.ForeignKey(User , on_delete=models.CASCADE , blank=True , null=True)
    name = models.CharField(max_length=50 , blank=False, null=False)
    complete = models.BooleanField(default=False)
    date_created = models.DateTimeField(auto_now_add=True)
    date_completed = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


    






class Quotes(models.Model):
    quote = models.CharField(max_length=100, null=True , blank=True)

    def __str__(self):
        return self.quote


