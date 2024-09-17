from django.urls import path
from . import views

app_name = 'main'

urlpatterns = [
    path('', views.show_att, name = "show_att"),
    path('create-show-form/', views.create_show_form, name='create_show_form')
]
