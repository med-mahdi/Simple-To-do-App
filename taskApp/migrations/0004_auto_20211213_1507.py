# Generated by Django 3.2.6 on 2021-12-13 15:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('taskApp', '0003_quotes'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='date_completed',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.DeleteModel(
            name='DoneTask',
        ),
    ]
