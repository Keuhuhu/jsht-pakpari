let nama = 'epstein'

//Loop maju
for (let i = 0; i < nama.length; i++) {
    console.log(nama[i])
}
//Loop mundur
for (let i = nama.length - 1; i >= 0; i--) {
    console.log(nama[i])
}

let suku = ["jew", 'black', 'batak']
console.log(suku[0])

let mybini = [['Kanade', 'Nene'], ['Saber', 'Elaina'], ['Red Hood', 'Jeanne', 'Mabel', 'Alice', 'Pricket']]
console.log(mybini[1][0], mybini[2][0])

//Looping Nest
for (let x = 0; mybini.length > x; x++) {
    console.log('Array ke : ', x, mybini[x])
    for (let i = 0; i < mybini[x].length; i++) {
        console.log('Array(i) ke : ', i, mybini[x][i])
    }
}

//While
let angka = 3
while (angka <= 5) {
    console.log(`Hitungan ke : ${angka}`)
    angka++
}

//Manipulasi Array
suku.push('chinese')
console.log(suku)

suku.pop()
console.log(suku)
console.log(suku.join(' + ')) //Gabung jadi string

//Manipulasi String Array
console.log(nama.split(''))
console.log(nama.split('e'))







for (let i = 0; i < mahasiswa.length; i++) {
    console.log(`${mahasiswa[i][0]} - Rata-rata : ${(mahasiswa[i][1] + mahasiswa[i][2] + mahasiswa[i][3]) / 3}
    - ${(((mahasiswa[i][1] + mahasiswa[i][2] + mahasiswa[i][3]) / 3) >= 75)}`)
}