
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
        fungsi ini akan menerima request dan memberikan render berupa httpresponse dengan html
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