from django.shortcuts import render , redirect
from django.http import HttpResponse

# Import our Model Here
from django.contrib.auth.models import Group

# Import your Form Here
from .forms import RegisterUser

# Import Login Stuff
from django.contrib.auth import authenticate , login , logout

# Import Our Decorators Here
from LoginSystem.decorators import authenticated_user
from django.contrib.auth.decorators import login_required






#----------- Create your views here.-----------------
def HeroPage(request):
    return render(request,'index.html')



@authenticated_user
def loginPage(request):
    if request.method == "POST":
        username = request.POST["uname"]
        userpass = request.POST["upassword"]

        user = authenticate(request , username=username , password=userpass)

        if user is not None:
            login(request , user)
            return redirect("homePage")

        print("Fail Login")

    return render(request,'login.html')







@authenticated_user
def registerPage(request):
    form = RegisterUser()
    group = Group.objects.get(name="client")

    if request.method == "POST":
        form = RegisterUser(request.POST)
        if form.is_valid():
            user = form.save()
            user.groups.add(group)
            user.save()
            
            return redirect("loginPage")

    context = {'form':form}
    return render(request,'register.html',context)




@login_required(login_url="loginPage")
def logoutPage(request):
    logout(request)
    return redirect("loginPage")






