// Buat Fungsi untuk materi event
function eventSatu() {
    alert("Hello World!");
}

function gantiGambar(img) {
    img.src = 'img/2.jpg';
}

function gantiGambarDua(img) {
    img.src = 'img/1.jpg';
}

// 2. Materi operator 
function cekLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == 'oxa' && password == '123') {
        alert('Login berhasil');
    } else {
        alert('Login Gagal')
    }
}

//3. Materi Operator 2
function cekNilai(param) {
    let nilai = param.value;
    let info = document.getElementById("info");
    info.style.fontSize = '24px';
    if (nilai > 60) {
        info.innerText = 'Anda Lulus';
        info.style.color = 'green';
    } else {
        info.innerText = 'Anda Tidak Lulus';
        info.style.color = 'red';
    }
    
}

//4. Materi operator 3
let day = new Date().getDate();
let namahari;
switch (parseInt(day)-1) {
    case 1:
        namahari = 'Minggu';
        break;
    case 2:
        namahari = 'Senin';
        break;
    case 3:
        namahari = 'Selasa';
        break;
    case 4:
        namahari = 'Rabu';
        break;
    case 5:
        namahari = 'Kamis';
        break;
    case 6:
        namahari = 'Jumat';
        break;
    default:
        namahari = 'gak enek';
        break;
}
document.getElementById('namahari').innerHTML = day + " " +namahari; 

// 5. Perulangan
let namaOrang = ['oxa','defrizal','khasay'];
let teks = '';
for (let index = 0; index < namaOrang.length; index++) {
    teks += "-"+namaOrang[index] + " <br>";  
}
document.getElementById('namaOrang').innerHTML = teks;