from .models import Task


def myresult(a,b):
    try:
        result = (b*100) / a
    except:
        result = 0    
    return int(result)


def progressTasks(request):
    # Access Our User
    user = request.user

    user_doneTasks = Task.objects.all().filter(creator=user).filter(complete=True).order_by("-id")
    doneTask_count = user_doneTasks.count()
    
    allMyTasks = Task.objects.all().filter(creator=user).count()
    return myresult(allMyTasks,doneTask_count)