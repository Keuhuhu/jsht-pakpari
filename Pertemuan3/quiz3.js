//1
let mahasiswa = [
  ["Budi", 80, 75, 90],
  ["Ani", 60, 70, 65],
  ["Siti", 85, 90, 95]
];

for (let i = 0; i < mahasiswa.length; i++) {
let nige = (((mahasiswa[i][1] + mahasiswa[i][2] + mahasiswa[i][3]) / 3)) 
    {
        console.log(`${mahasiswa[i][0]} - Rata-rata : ${nige}`)
        if (nige >= 75) {
            console.log(`${mahasiswa[i][0]} Lulus`)
        } else {
            console.log(`${mahasiswa[i][0]} Tidak Lulus`)
            }
    }

}


//2
let kalimat = "javascript adalah bahasa pemrograman";
let niga = (kalimat.split(' '))
let kataTerpanjang = ''
let panjangMaks = 0
console.log('') // Enter

for (let i = 0; niga.length > i ; i++) {
    console.log(`${niga[i]} - ${niga[i].length} huruf`)

    if (niga[i].length > panjangMaks)
        kataTerpanjang = niga[i]
        panjangMaks = kataTerpanjang.length
}
console.log(`Kata Terpanjang : ${kataTerpanjang} - ${panjangMaks}`)


//3
console.log('') //Enter 
let nilaiKelas = [
  [70, 80, 65, 90],
  [88, 76, 95, 100, 67],
  [60, 72, 85]
];
rataNilaiTertinggi = 0
indeksKelasTertinggi = 0

for (i = 0; nilaiKelas.length > i; i++) {

    let totalPerKelas = 0
    let rataKelas = 0

    for (x=0; nilaiKelas[i].length > x; x++) {
       totalPerKelas += nilaiKelas[i][x]
        rataKelas = totalPerKelas / nilaiKelas[i].length
    }

    if (rataKelas > rataNilaiTertinggi) {
        rataNilaiTertinggi = rataKelas
        indeksKelasTertinggi = i
    }
    console.log(`Rata rata untuk kelas ${i+1} : ${rataKelas}`)
}
console.log(`Rata-rata kelas tertinggi ialah kelas ${indeksKelasTertinggi+1}`)


