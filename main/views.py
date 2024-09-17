from django.shortcuts import render, redirect
from django.http import HttpResponse
from main.forms import SuiseiMainForm
from main.models import ProductEntry

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