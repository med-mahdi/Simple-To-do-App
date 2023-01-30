from django.contrib import admin

# Import Our (Task-DoneTask) Models 
from .models import Task , Quotes



# Register your models here.
admin.site.register(Task)
admin.site.register(Quotes)