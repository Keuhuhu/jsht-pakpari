
let nilaiUjian = [
  { nama: "Kenzo", nilai: [80, 85, 90] },
  { nama: "Oom", nilai: [60, 70, 65] },
  { nama: "Idris", nilai: [88, 90, 92] }
];

function rangking(nilaiUjian) {
  let totalNilai = 0
  let rataAkhir = 0
  let aray = []

  for(i = 0; i < nilaiUjian.length; i++) {
    for(x = 0; x < nilaiUjian[i].nilai.length; x++) {
      totalNilai = totalNilai + nilaiUjian[i].nilai[x]
    }

    rataAkhir = totalNilai / nilaiUjian[i].nilai.length
    aray.push({nama : nilaiUjian[i].nama, nilai : rataAkhir})
    totalNilai = 0
    //console.log(`${nilaiUjian[i].nama} - Rata-rata: ${rataAkhir}`)

  } 
aray.sort((a,b) => 
 b.nilai - a.nilai
)
console.log("yessir")
console.log(aray)

}


rangking(nilaiUjian)

