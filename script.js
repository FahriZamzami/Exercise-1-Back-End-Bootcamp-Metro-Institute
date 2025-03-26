console.log("==============================================\n");
console.log("Fahri Zamzami");
console.log("Back-End");
console.log("Bootcamp Metro Institute");
console.log("Tugas 1");
console.log("\n==============================================");


// Variabel dan Tipe Data
console.log("==============================================\n");
console.log("Varibel dan Tipe Data");
let nama  = "Fahri Zamzami";
let ipk = 3.5;
let kuliahDiUnand = true;

console.log("Nama : " + nama);
console.log("IPK : " + ipk);
console.log("Apakah " + "nama " + "Kuliah di Unand? : " + kuliahDiUnand);

console.log("\n==============================================");


// Pengkondisian (if-else)

console.log("==============================================\n");
console.log("\nPengkondisian");
let sks;

if(3.25 <= ipk <= 4){
    sks = 24;
    }

else if(2.75 <= ipk <= 3.24){
    sks = 21;
    }

else if(2 <= ipk <= 2.74){
    sks = 18;
    }

else if(1.5 <= ipk <= 1.99){
    sks = 15;
    }

else if(0 <= ipk <= 1.49){
    sks = 12;
    }

console.log("Nama : " + nama);
console.log("IPK : " + ipk);
console.log("SKS yang bisa diambil : " + sks);
console.log("\n==============================================");


// perulangan (for-loop)

console.log("==============================================\n");
console.log("\nPerulangan");
console.log("Bilangan Genap Dari 2-20");

for (let i = 2; i <= 20; i+=2){
    console.log(i);
    }
console.log("\n==============================================");


// fungsi

console.log("==============================================\n");
console.log("\nFungsi");
function hitungVolumeTabung (pi, r, t){
    let volumeTabung = 3.14 * (r ** 2) * t;

    console.log("pi : " + pi);
    console.log("r  : " + r);
    console.log("t  : " + t);
    console.log("Volume Tabung : " + volumeTabung);
    
    return volumeTabung;
    }

hitungVolumeTabung(3.14, 6, 13);
console.log("\n==============================================");


// Array

console.log("==============================================\n");
console.log("\nArray");
let array = [3, 6, 14, 11, 4];
let total  = array.reduce((sum, num) => sum + num, 0);
console.log(array);
console.log("Jumlah Angka dalam Array : " + total);
console.log("\n==============================================");
