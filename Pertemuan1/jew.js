let suku = "yahudi";
suku = "jew";

let populasi = "2060"

console.log(`Silence ${suku}.`);
console.log(`The jews popuelation is now quartered, ${populasi/4} were perished`);

populasi = "1545";
console.log(`Current jew alive is ${populasi}`);

const modusYahudi = populasi % 2;
const samaDenganSatuGaGes = modusYahudi === 1;
console.log(samaDenganSatuGaGes);

if (populasi < 0) {
    console.log("The jews are extinct, Praise the lord");
} else  {
    console.log("The disease continues to roam on this cursed land");
}





