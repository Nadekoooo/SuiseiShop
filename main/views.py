from django.shortcuts import render, redirect
from django.http import HttpResponse
from main.forms import SuiseiMainForm
from main.models import ProductEntry
from django.core import serializers

# Create your views here.
def show_att(request):
    item = ProductEntry.objects.all()
    
    att = {
        'nama_apk' : 'Suisei Shop',
        'nama' : "Christian Yudistira Hermawan",
        'kelas' : "PBP F",
        'item' : item
    }
    return render(request, 'att.html', att)

def create_show_form(request):
    form = SuiseiMainForm(request.POST or None)
    
    if form.is_valid() and request.method == "POST":
        form.save()
        return redirect('main:show_att')
    
    context = {'form': form}
    return render(request, "create_show_form.html", context)

def show_xml(request):
    data = ProductEntry.objects.all()
    return HttpResponse(serializers.serialize("xml", data), content_type="application/xml")

def show_json(request):
    data = ProductEntry.objects.all()
    return HttpResponse(serializers.serialize("json", data), content_type="application/json")

def show_xml_by_id(request, id):
    data = ProductEntry.objects.filter(pk=id)
    return HttpResponse(serializers.serialize("xml", data), content_type="application/xml")

def show_json_by_id(request, id):
    data = ProductEntry.objects.filter(pk=id)
    return HttpResponse(serializers.serialize("json", data), content_type="application/json")