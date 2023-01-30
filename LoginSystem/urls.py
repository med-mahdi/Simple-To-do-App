from django.urls import path , include
from .views import loginPage , registerPage , logoutPage , HeroPage

urlpatterns = [
    path('',HeroPage, name="heroPage"),
    path('home/',HeroPage, name="heroPage"),
    path('login/',loginPage, name="loginPage"),
    path('register/',registerPage, name="registerPage"),
    path('logout/',logoutPage, name="logoutPage")
]