from django.forms import ModelForm
from main.models import ProductEntry

class SuiseiMainForm(ModelForm):
    class Meta:
        model = ProductEntry
        fields = ["name", "price", "stock", "description", "category"]