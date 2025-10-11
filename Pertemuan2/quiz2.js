let str1 = "Prabowo"
let str2 = 'Lengser'
const strLength = str1.length + str2.length
console.log(`${str1} ${str2}, Panjang str = ${strLength}`)

//Tes 1
let sausNobeta = 567683;
sausNobeta = String(sausNobeta)
sausLength = sausNobeta.length
console.log(`\nangka = ${sausNobeta}, Panjang string = ${sausLength}`)
sausNobeta = Number (sausNobeta)
console.log(`Hasil = ${sausNobeta + 2}`)

//Tes 2
let lapanganPekerjaan = 19
pekerjaanString = String(lapanganPekerjaan)
lpLength = pekerjaanString.length
console.log(`angka = ${pekerjaanString}, Panjang string = ${lpLength},`)
console.log(`Hasil = ${lapanganPekerjaan + 1}`)

//
let angka = 0;
if (angka > 0 && angka%2 === 0) {
    console.log(`Angka ${angka} positif dan genap`)
} else if (angka > 0 && angka%2 === 1) {
    console.log(`Angka ${angka} positif dan ganjil`)
} else if (angka < 0) {
    console.log(`Angka ${angka} negatif`)
} else if (angka === 0) {
    console.log(`Angka ${angka} adalah nol`)
} else {
    console.log(`Stupid ass bitch`)
}
