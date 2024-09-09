from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def show_att(request):
    att = {
        'nama_apk' : 'Suisei Shop',
        'nama' : "Christian Yudistira Hermawan",
        'kelas' : "PBP F"
    }
    return render(request, 'att.html', att)