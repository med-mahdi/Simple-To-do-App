
from django.http import HttpResponse
from django.contrib.auth.models import Group
from django.shortcuts import redirect




def clientOnly(view_func):
    def inside(request,*args,**kwargs):
        group = None

        if request.user.groups.exists():
            group = request.user.groups.all()[0].name

            if group == "client":
                return view_func(request,*args,**kwargs)
            
            else:
                return redirect("logoutPage")

    return inside