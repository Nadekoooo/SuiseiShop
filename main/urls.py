from django.urls import path
from . import views

app_name = 'main'

urlpatterns = [
    path('', views.show_att, name = "show_att"),
    path('create-show-form/', views.create_show_form, name='create_show_form'),
    path('xml/', views.show_xml, name='show_xml'),
    path('json/', views.show_json, name='show_json'),
    path('xml/<str:id>/', views.show_xml_by_id, name='show_xml_by_id'),
    path('json/<str:id>/', views.show_json_by_id, name='show_json_by_id')
]
