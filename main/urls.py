from django.urls import path
from . import views
from main.views import register
from main.views import login_user
from main.views import logout_user
from main.views import edit_product
from main.views import delete_product

app_name = 'main'

urlpatterns = [
    path('', views.show_att, name = "show_att"),
    path('create-show-form/', views.create_show_form, name='create_show_form'),
    path('xml/', views.show_xml, name='show_xml'),
    path('json/', views.show_json, name='show_json'),
    path('xml/<str:id>/', views.show_xml_by_id, name='show_xml_by_id'),
    path('json/<str:id>/', views.show_json_by_id, name='show_json_by_id'),
    path('register/', register, name='register'),
    path('login/', login_user, name='login'),
    path('logout/', logout_user, name='logout'),
    path('edit-product/<uuid:id>', edit_product, name='edit_product'),
    path('delete/<uuid:id>', delete_product, name='delete_product')
]

