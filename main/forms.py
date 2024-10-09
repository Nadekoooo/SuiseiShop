from django import forms
from django.utils.html import strip_tags
from main.models import ProductEntry

class SuiseiMainForm(forms.ModelForm):
    class Meta:
        model = ProductEntry
        fields = ["name", "price", "stock", "description", "category"]
        
    # Set up the category field with a smaller textarea
    category = forms.CharField(
        widget=forms.Textarea(attrs={'rows': 2, 'cols': 30})  # Adjust rows and cols as needed
    )
    
    description = forms.CharField(
        widget=forms.Textarea(attrs={'rows': 2, 'cols': 30})  # Adjust rows and cols as needed
    )
        
    def clean_name(self):
        return strip_tags(self.cleaned_data["name"])

    def clean_price(self):
        return strip_tags(self.cleaned_data["price"])
    
    def clean_stock(self):
        return strip_tags(self.cleaned_data["stock"])
    
    def clean_description(self):
        return strip_tags(self.cleaned_data["description"])
    
    def clean_category(self):
        return strip_tags(self.cleaned_data["category"])
