

# -----------Import Our Forms---------------
from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm


# ----------- Import Our Profile Model -----------
from LoginSystem.models import Profile
from django.contrib.auth.models import User


# ----------- Import Our Task Model -----------
from .models import Task






class EditProfile(ModelForm):
    class Meta:
        model = Profile
        fields = ["prfile_image"]


class EditUserName(ModelForm):
    class Meta:
        model = User
        fields = ["username","email"]



class AddTask(ModelForm):
    class Meta:
        model = Task
        fields = ["name"]
        



# User Creation Form Is Just Used For Creating User not For Updating User (Because Her Job is Like Password Hashing adn etc)
# And when you extend The ModelForm With User Creation Form ( He Extend The Functionality Of The User Model) 


