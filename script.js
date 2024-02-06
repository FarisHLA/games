alert("Gim Tebak Angka \n Pilih angka 1-10 \n Kamu punya 3 kesempatan");

const angkaBenar = Math.floor(Math.random() * 10) + 1;

for (let nyawa = 3; nyawa => 1; nyawa--) {
   const tebakanUser = prompt("masukkan tebakan angka");

    if (tebakanUser == angkaBenar) { // validasi check input benar
        alert(`tebakan anda betul! \n angka yang benar adalah  ${angkaBenar}`);
        break;
    } else if (tebakanUser > angkaBenar) { // validasi check input besar
        alert(`tebakan anda ketinggian \n anda masih punya ${nyawa - 1} kesempatan`);
    } else if (tebakanUser < angkaBenar) { // validasi check input kecil
        alert(`tebakan anda kerendahan \n anda masih punya ${nyawa - 1} kesempatan`);     
    }

    if (nyawa == 1) {
        alert(`anda gagal! \n angka yang benar adalah ${angkaBenar}`);
    }
}