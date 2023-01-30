from django.shortcuts import render , redirect
from django.http import HttpResponse


# ____________ Import Our Decorators _______________
from django.contrib.auth.decorators import login_required
from .decorators import clientOnly

# ____________ Import Our Quotes _______________
from .models import Quotes , Task 

# ____________ Import Our Functions _______________
from .calcFunction import progressTasks

# ____________ Import Our Form _______________
from .forms import EditProfile , EditUserName , AddTask

#____________ Import Our Filters _______________
from .filters import DoneTasksFilters








#----------- Create your views here.-----------------
@login_required(login_url="loginPage")
@clientOnly
def homePage(request):
    user = request.user
    quote = Quotes.objects.all().order_by("id")[0]

    tasks = Task.objects.all().filter(complete=False).order_by("-id")
    myTasks = tasks.filter(creator=user)

    result = progressTasks(request)

    context = {'user':user,'quote':quote,'tasks':myTasks,'result':result}
    return render(request,"dashboard.html",context)






@login_required(login_url="loginPage")
@clientOnly
def complete_task(request,pk):
    task = Task.objects.get(id=pk)
    task.complete = True
    task.save()
    return redirect("homePage")




@login_required(login_url="loginPage")
@clientOnly
def deleteTask(request,pk):
    task = Task.objects.get(id=pk)
    task.delete()
    return redirect("homePage")





def addTasks(request):
    user = request.user
    addTaskForm = AddTask()

    if request.method == "POST":
        form = AddTask(request.POST)

        if form.is_valid():
            instance = form.save(commit=False)
            instance.creator = user
            instance.save()
            return redirect("homePage")


    context = {'form':addTaskForm}
    return render(request,'addTask.html',context)





@login_required(login_url="loginPage")
@clientOnly
def editProfile(request):
    user = request.user
    userprofile_instance = user.profile

    myForm = EditProfile()
    myNameForm = EditUserName(instance=user)
    ourFilter = DoneTasksFilters()

    if request.method == "POST":
        myForm = EditProfile(request.POST,request.FILES,instance=userprofile_instance)
        myNameForm = EditUserName(request.POST,instance=user)

        if myNameForm.is_valid() and myForm.is_valid():
            myNameForm.save()
            myForm.save()

            return redirect("homePage")


    # list of My Done Tasks
    user_doneTasks = Task.objects.all().filter(creator=user).filter(complete=True).order_by("-id")
    result = progressTasks(request)

    # The Job of Our Filter 
    if request.method == "GET":
        ourFilter = DoneTasksFilters(request.GET,queryset=user_doneTasks)
        user_doneTasks = ourFilter.qs

    context = {'form':myForm,'nameForm':myNameForm,'imgForm':myForm,'doneTasks':user_doneTasks,'result':result,'filter':ourFilter}
    return render(request,'editProfile.html',context)






