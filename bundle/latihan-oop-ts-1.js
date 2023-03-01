"use strict";
class Mobil {
    constructor(merek, tahun, warna) {
        this.merek = merek;
        this.tahun = tahun;
        this.warna = warna;
    }
    getInfoMobil() {
        console.log(`Mobil merek ${this.merek} tahun ${this.tahun} dengan warna ${this.warna}.`);
    }
}
const Mobil1 = new Mobil("Avanza", 2013, "merah");
Mobil1.getInfoMobil();
