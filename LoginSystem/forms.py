
# --------- Import OUR User Model ----------------
from django.contrib.auth.models import User


# ------------------ Import Model Form Class ---------------
from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm


class RegisterUser(UserCreationForm):
    class Meta:
        model = User
        fields = ["username","password1","password2"]





