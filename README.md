
<h1> Tugas 2</h1>

<h2> 1. Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step (bukan hanya sekadar mengikuti tutorial). </h2>
   Jawab :
   1. Saya membuat folder dengan virtual environment baru agar tidak mengganggu versi library di global pada local saya.
   2. Menggunakan CMD saya membuat project django baru dengan meng run "django-admin startproject suiseishop .", saya menggunakan titik agar folder tidak terbuat 2 kali.
   3. Pindah ke vs code saya langsung me run python manage.py runserver untuk membuat proyek dengan python manage.py startapp main untuk membuat aplikasi bernama main.
   4. Saya langsung melakukan setup host dan mengubah settings.py pada bagian installed apps dan menambahkan 'main'.
   5. Saya langsung membuat template html dan membuat html sedemikian rupa sehingga nanti value pada views.py bisa di terapkan di html.
   6. Kemudian saya menambahkan fungsi dari library berupa include di urls proyek utama dan menambahkan path baru tanpa url ("") agar mainpage langsung tertuju ke main.urls.
   7. Sama halnya dengan urls pada proyek utama, proyek pada main juga menggunakan url kosong agar fungsi pada views langsung ditampilkan.
   8. Views yang sudah dikaitkan ke html menggunakan fungsi show_att (atribut) akan mereturn hasil render yang berupa HttpsResponse yang berisi templates pada html.

<h2>2. Bagan dari client hingga html </h2>

                    Client (Browser)
                            |
                            |
    1. Client membuat HTTP request (misal, membuka URL)
                            |
                            v
                    Django URLs (urls.py)
                            |
                            |
    2. Django memeriksa `urls.py` untuk mencocokkan URL request 
            dengan pattern / aplikasi yang ada
                    contoh urls.py :

                    "app_name = 'main'

                    urlpatterns = [
                        path('', views.show_att)
                    ]"
                            |
                            |
        pada contoh ini apabila user hanya membuka link 
        awal (tanpa /"***" lain) maka fungsi show_att akan ter trigger
                            |
                            |
                            v
                Django Views (views.py)
                            |
                            |
    3. `views.py` menerima request dan memberikan response pada client 
       tergantung dari penggunaan fungsi yang telah ditentukan sesuai request yang masuk
       pada kasus ini views.py akan menyediakan fungsi show_att pada user:
                            |
                            |
       contoh views.py :
            def show_att(request):
            att = {
                'nama_apk' : 'Suisei Shop',
                'nama' : "Christian Yudistira Hermawan",
                'kelas' : "PBP F"
            }
            return render(request, 'att.html', att)
                            |
                            |
        fungsi ini akan menerima request dan memberikan render 
            berupa httpresponse dengan html
                            |   
                            v
                Django Models (models.py)
                            |
                            |
    4. Jika perlu, `views.py` mengambil/memodifikasi data dari/ke database menggunakan `models.py`
                            |
                            |
            contoh models.py:
            class ProductEntry(models.Model):
                name = models.CharField(max_length=255)
                price = models.IntegerField()
                stock = models.IntegerField()
                description = models.TextField()
                category = models.TextField()
                            |
                            v
                Django Templates (HTML)
                            |
                            |
    5. Data dari view atau model di-passing ke template HTML untuk dirender
                            |
                            v
                        Response
                            |
                            |
    6. Django mengirimkan HTML yang telah dirender sebagai HTTP response
                            |
                            v
                    Client (Browser)
                            |
                            v
    7. Client menerima dan menampilkan hasil response

<h2>3. Kegunaan git dalam pengembangan perangkat lunak ialah </h2>
Dalam pengembangan perangkat lunak pasti terdapat berbagai aspek yang harus diperhatikan dan disimpan pengembangannya. Dalam hal ini, git membantu user untuk mengontrol versi dalam pengembangan kode dan mampu melacak perkembangannya. Git juga mampu mengkolaborasikan berbagai branch sebagai sarana multideveloper untuk memperbaiki bug atau memperbanyak fitur secara terpisah tanpa mengganggu kode utamanya. Salah satu fungsi terpenting git juga ialah untuk me reverse versi kode apabila terjadi kesalahan. Secara keseluruhan git mempermudah akses user ke dalam versi pengembangan perangkat lunak.

<h2>4. Mengapa django menjadi permulaan pengembangan perangkat lunak? </h2>
Hal ini berkaitan dengan konsep MVT. Konsep MVT ini sangat berkaitan dengan framework dari Django itu sendiri, framework Django berbasis pada model view dan template yang memberikan pengguna kesempatan untuk mengalokasikan model, memberikan view sesuai dengan request dan memberikan response sesuai dengan yang dibutuhkan user, dan juga template sebagai sarana antarmuka pengguna yang dapat dikosutmisasi. Pembagian tugas ini terpidah dan user dapat memberikan kendali yang lebih spesifik pada bagian tertentu sejalan dengan MVT.

<h2>5. Mengapa model pada django disebut dengan ORM?</h2>
ORM(Object Relational Mapping) merupakan konsep yang berfungsi untuk menghubungkan objek python dengan tabel yang ada dalam database. Dengan ORM, pengembang software mammpu mengeksekusi operasa secara langsung pada database tanpa menulis ataupun mengakses SQL. Implementasi model pada django juga mewakili setiap jenis atribut tabel di database seperti charfield, integerfield, dll yang dalam kata lain mampu mempermudah interaksi dengan database dan mendukung jenis jenisnya secara abstrak.

<h1>Tugas 3</h1>

<h2>1. Mengapa kita memerlukan data delivery dalam pengimplementasian sebuah platform?</h2>
Data delivery diperlukan dalam pengimplementasian platform karena memungkinkan pertukaran informasi antara berbagai sistem atau komponen dalam arsitektur yang terdistribusi. Dengan data delivery, platform dapat mengirim dan menerima data secara efisien, baik antar server, klien, atau antar aplikasi. Hal ini sangat penting untuk memastikan integritas, efektivitas akses data. Tanpa adanya data delivery yang baik, mungkin aplikasi tidak mampu berfungsi dengan baik, terutama dalam hal real-time processing, dan sinkronisasi data.

<h2>2. Menurutmu, mana yang lebih baik antara XML dan JSON? Mengapa JSON lebih populer dibandingkan XML?</h2>
Menurut saya, JSON lebih baik dari XML dalam lingkup keterbacaan. Meskipun kedua format ini mendukung penyampaian informasi yang baik, JSON dalam hal ini dapat lebih mudah dibaca dengan penggunaan "label" : value apabila dibandingkan dengan XML yang menggunakan field dan bahasa penyampaian yang lebih teknis. Secara langsung JSON juga mempercepat proses distribusi karena kesederhanaannya dan meningkatkan performa pada database besar.

<h2>3. Jelaskan fungsi dari method is_valid() pada form Django dan mengapa kita membutuhkan method tersebut?</h2>
Method isvalid yang digunakan pada fungsi di views merupakan cara bagaimana django memvalidasi format data yang dimasukan ke dalam form/model. Dengan menggunakan is_valid(), django akan mengecek apakah input user sesuai dengan type yang ditentukan dengan yang telah di define pada spesifikasi database model. Hal ini penting untuk diterapkan karena format yang salah pada input data akan mengganggu proses distribusi data dan berpotensi untuk memberikan threat lebih lanjut pada sistem yang tidak di inginkan.

Bentuknya seperti berikut:

```bash
    def create_show_form(request):
    form = SuiseiMainForm(request.POST or None)
    
    if form.is_valid() and request.method == "POST":
        form.save()
        return redirect('main:show_att')
    
    context = {'form': form}
    return render(request, "create_show_form.html", context)
```

<h2>4. Mengapa kita membutuhkan csrf_token saat membuat form di Django? Apa yang dapat terjadi jika kita tidak menambahkan csrf_token pada form Django? Bagaimana hal tersebut dapat dimanfaatkan oleh penyerang?</h2>

`% csrf_token %`

csrf_token merupakan token unik yang di generalize oleh Django untuk melindungi aplikasi dari CSRF attack (Cross Site Request Forgery). Serangan ini terjadi ketika penyerang membuat permintaan yang terlihat sah dari pengguna yang telah terautentikasi pada aplikasi, hal ini terjadi melalui pengiriman formulir atau permintaan POST tanpa sepengetahuan pengguna.

Jika kita tidak menambahkan csrf_token pada form Django, aplikasi kita akan rentan terhadap serangan ini. Penyerang dapat memanfaatkan sesi pengguna yang valid untuk menjalankan aksi yang tidak diinginkan, seperti mengubah data pengguna, melakukan pembelian tanpa izin, atau menghapus data.

<h2>5. Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step (bukan hanya sekadar mengikuti tutorial).</h2>
Saya mengimplementasikan checklist dengan menambahkan beberapa hal pada aplikasi saya. Pertama-tama saya membuat base.html untuk mempermudah setup html dan menambahkan block untuk template lanjutannya. Setelah melakukan hal tersebut saya membuat html untuk menyesuaikan pembuatan form dan mengatur tinggi serta lebar tabel agar lebih estetik. 

`{% block meta %} {% endblock meta %}`

```bash
    table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        td {
            padding: 12px;
            vertical-align: top;
        }
        td:first-child {
            text-align: right;
            font-weight: bold;
            width: 30%;
            padding-right: 20px;
        }
```

Setelah sedikit adjust pada templates, saya mulai membuat forms.py yang berisikan class yang berbasis pada model utama, saya mengintegrasikan fields sesuai dengan kebutuhan input user. Setelah ini, saya juga meng-update models.py dan menambahkan id pada setiap submisi data untuk mempermudah identifikasi data.
```bash
    class SuiseiMainForm(ModelForm):
        class Meta:
            model = ProductEntry
            fields = ["name", "price", "stock", "description", "category"]
```
Kemudian untuk melakukan routing, saya menambahkan fungsi membuat form baru pada views.py yang juga menerima request user dan mengembalikan Https Response berupa render sesuai dengan html dan urls yang sudah saya sesuaikan kembali.

Contoh return value:

`return render(request, "create_show_form.html", context)`

Terakhir saya menambahkan fungsi untuk menampilkan data dalam format JSON atau XML, baik dengan id atau tanpa id untuk menampilkan data.
```bash
    path('xml/', views.show_xml, name='show_xml'),
    path('json/', views.show_json, name='show_json'),
    path('xml/<str:id>/', views.show_xml_by_id, name='show_xml_by_id'),
    path('json/<str:id>/', views.show_json_by_id, name='show_json_by_id')
```

![WhatsApp Image 2024-09-18 at 10 05 14_615cda77](https://github.com/user-attachments/assets/428d18cd-588b-42b2-94b1-84598ae35120)

![WhatsApp Image 2024-09-18 at 10 05 40_c5a367b6](https://github.com/user-attachments/assets/39b0a52b-768e-41ad-892b-fc2a2d7e8ddc)

![WhatsApp Image 2024-09-18 at 10 06 06_241e3d2b](https://github.com/user-attachments/assets/d954d0fd-e5ac-4b91-8041-cba30cd352be)

![WhatsApp Image 2024-09-18 at 10 06 52_5c9e580d](https://github.com/user-attachments/assets/d400296c-6467-4120-9f13-daed54db5c17)
