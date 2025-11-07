//Funtion 1
function jewtler(a, b) {
    return a+b
}
let hasil = jewtler(2, 3)
console.log(hasil)

//Function 2 (Variabel)
const kalijew = function (a,b) {
    return a * b
}
console.log(kalijew(2,3))

//Function 3 (Arrow)
const kurjew = (a , b) => a - b
console.log(kurjew(6 , 2))

console.log()
//2.Object
//nigga ngp ado kenzo
let mybini = {
    nama: "Red Hood",
    umur: 19,
    likes: ["dogsemen", "knife", "grimm", "fairypoison"],
    punch: function() {
        console.log(`The green bitch fairy has been punched by : ${this.nama}`)
    }
}
console.log(mybini.nama)        //Cara 1
console.log(mybini["umur"])     //Cara 2
console.log(mybini.likes[0])    //Array dk bisa pake cara 2?  
mybini.punch()

//Modifikasi Object
mybini.nama = "Mabel"
mybini.umur = 9999
mybini["species"] = "Outer God"
console.log(mybini)

//3. Looping Object
console.log
for(let key in mybini) {
    console.log(`${key} : ${mybini[key]}`)
} 

//4. Object dalam array
console.log()
let somejews = [
    {nama: "Epstein", victim: 250},
    {nama: "Bin Laden", victim: 2977},
    {nama: "Jewtler", victim: 85}
]
for(let i = 0; i < somejews.length; i++) {
    console.log(`The total "count" of ${somejews[i].nama} are ${somejews[i].victim}`)
}

//5.Nested Object
let ohim = {
    nama : "Muchammad Abdurohim",
    alamat : {
        jalan : "Kedung Badak No. 16",
        desa : "Kedung Badak",
        kecamatan : "Tanah Sareal"
    },
    kontak : {
        fb : "Pangerann Oliver Sanchez",
        nik : 3271063010020008  
    }
}
console.log(ohim.alamat.kecamatan)  //cara1
console.log(ohim["kontak"]["nik"])  //cara2

//6. Menghapus Object
console.log()
delete ohim.alamat
console.log(ohim)

//7.Menyalin Object
//let salinan = {...ohim}
//salinan.kontak.fb = "rudal balistik ohim"   
//console.log(ohim.kontak.fb)
//console.log(salinan.kontak.fb)  //Tidak bisa dipakai dalam nested?

let produk = {nama: "Horse Dildo", harga: 500000}
let salinan = {...produk}
salinan.nama = "Fart Spray"     //String dan Integer works
console.log(produk.nama)        
console.log(salinan.nama)

//8.luxu