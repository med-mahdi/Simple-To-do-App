
from django.shortcuts import render , redirect


# -------------- Decorator To Prevent The User That Has Authenticated To Acess The Login Page Again

def authenticated_user(view_func):
    def inside(request,*args,**kwargs):
        if request.user.is_authenticated:
            return redirect("homePage")
        else:
            return view_func(request,*args,**kwargs)    
    return inside
