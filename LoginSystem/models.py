from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import Group

# --------- Import Signlas ----------------
from django.db.models.signals import post_save
from django.dispatch import receiver




# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User , on_delete=models.CASCADE)
    name = models.CharField(max_length=20 , null=True , blank=True)
    prfile_image = models.ImageField(null=True,blank=True, upload_to="profile_images")

    def __str__(self):
        return self.name

    

    @receiver(post_save , sender=User)
    def createProfile(sender , instance , created , **kwargs):
        if created:
            Profile.objects.create(user=instance,name=instance.username)
            print("Profile Was Created")


    @receiver(post_save , sender=User)
    def updateProfile(sender , instance , created , **kwargs):
        if created == False:
            instance.profile.save()
            print('Profile Was Updated')        


