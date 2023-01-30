from django.urls import path , include
from .views import homePage , complete_task ,deleteTask ,editProfile, addTasks

urlpatterns = [
    path('',homePage, name="homePage"),
    path('home/',homePage, name="homePage"),
    path('complete/<int:pk>/',complete_task, name="complete_task"),
    path('deleteTask/<int:pk>/',deleteTask, name="deleteTask"),
    path('editprofile/',editProfile, name="editUser"),
    path('addTask/',addTasks, name="addTask"),
]