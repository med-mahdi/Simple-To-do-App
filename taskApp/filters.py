

# Import Our Django Filters
import django_filters
from django_filters import CharFilter

# Import Our Model Task
from .models import Task



class DoneTasksFilters(django_filters.FilterSet):
    name = CharFilter(field_name="name",lookup_expr="icontains")
    class Meta:
        model = Task
        fields = ["name"]