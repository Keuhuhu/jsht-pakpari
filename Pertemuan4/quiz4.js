//1
let transaksi = [
  { nama: "Keyboard", harga: 200000, qty: 2 },
  { nama: "Mouse", harga: 100000, qty: 3 },
  { nama: "Monitor", harga: 1500000, qty: 1 }
];

let total = 0
for (i = 0; i < transaksi.length; i++) {
    total = total + (transaksi[i].harga * transaksi[i].qty)
}
console.log(`Total Belanja : Rp${total}`)


//2.
let siswa = [
  { nama: "Budi", nilai: 85 },
  { nama: "Ani", nilai: 70 },
  { nama: "Siti", nilai: 90 },
  { nama: "Tono", nilai: 65 }
];

for(i = 0; i < siswa.length; i++) {
    if(siswa[i].nilai > 75) {
        siswa.sort((a, b) => b.nilai - a.nilai)     //neiga ado syntax sort cak ini ternyato biji
        console.log(`${siswa[i].nama} - ${siswa[i].nilai}`)
    }
}


//3.
let totalGaji = 0

let perusahaan = {
  nama: "PT Inovasi Teknologi",
  karyawan: [
    { nama: "Kenzo", gaji: 5000000 },
    { nama: "Oom", gaji: 4500000 },
    { nama: "Idris", gaji: 6000000 }
  ],
  hitungTotalGaji: function() {
    // tulis logika di sini
    //beat my meat mr.pari
    for(i=0; i < perusahaan.karyawan.length; i++) {
      totalGaji = totalGaji + perusahaan.karyawan[i].gaji
    }
    console.log(`Total gaji semua karyawan : ${totalGaji}`)
  }
};
perusahaan.hitungTotalGaji()


//4.  Gabungkan Dua Array of Object
let pelangganBaru = [
  { id: 1, nama: "Bintang" },
  { id: 2, nama: "Kalam" }
];

let pelangganLama = [
  { id: 3, nama: "Rudi" },
  { id: 4, nama: "Dewi" }
];

function gabungPelanggan(a, b) {
  return [...a, ...b]
}
console.log(gabungPelanggan(pelangganBaru, pelangganLama))


//5. Ranking Nilai Ujian
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

  } 
aray.sort((a,b) => 
 b.nilai - a.nilai
)

console.log(aray)
return totalNilai
}

rangking(nilaiUjian)



//6.
let sekolah = {
  nama: "SMK Negeri 2 Palembang",
  kelas: [
    {
      nama: "X RPL 1",
      siswa: [
        { nama: "Bintang", nilai: 85 },
        { nama: "Rafi", nilai: 90 },
        { nama: "Zahra", nilai: 78 }
      ]
    },
    {
      nama: "X RPL 2",
      siswa: [
        { nama: "Adit", nilai: 88 },
        { nama: "Lia", nilai: 95 },
        { nama: "Rina", nilai: 92 }
      ]
    }
  ]
}

function rataRataKelas(sekolah) {
  let totalKelas = 0
  let rataKelas = 0
  let rataSeluruh = 0
  let rataArray = []

  for(i = 0; i < sekolah.kelas.length; i++) {
    for(x = 0; x < sekolah.kelas[i].siswa.length; x++) {
      totalKelas = totalKelas + sekolah.kelas[i].siswa[x].nilai
    }

    rataKelas = totalKelas / sekolah.kelas[i].siswa.length
    rataSeluruh = rataSeluruh + rataKelas
    rataArray.push({Kelas: sekolah.kelas[i].nama, "Rata-rata" : rataKelas.toFixed(1)})
    totalKelas = 0
  }
rataSeluruh = rataSeluruh / sekolah.kelas.length
rataArray.push({"Rata-rata seluruh sekolah" : rataSeluruh})
console.log(rataArray)
}
rataRataKelas(sekolah)


//7. Data Perusahaan & Proyek (Array of Nested Object)
let perusahaan2 = [
  {
    nama: "PT Teknologi Nusantara",
    proyek: [
      { nama: "Sistem Absensi", status: "selesai", biaya: 50000000 },
      { nama: "Aplikasi Kasir", status: "proses", biaya: 30000000 }
    ]
  },
  {
    nama: "PT Inovasi Maju",
    proyek: [
      { nama: "Website E-Commerce", status: "selesai", biaya: 80000000 },
      { nama: "Mobile Banking", status: "selesai", biaya: 100000000 }
    ]
  }
]

function laporanProyek(data) {
  totalBiaya = 0

  for(p = 0; p < data.length; p++) {
    for(i = 0; i < data[p].proyek.length; i++) {
       if(data[p].proyek[i].status === "selesai") {
        console.log(`${data[p].nama} - ${data[p].proyek[i].nama} (Rp${data[p].proyek[i].biaya})`)
        totalBiaya = totalBiaya + data[p].proyek[i].biaya
       } else {
        null }
  }
}
  console.log(`Total Biaya proyek selesai: Rp${totalBiaya}`)
}

laporanProyek(perusahaan2)
