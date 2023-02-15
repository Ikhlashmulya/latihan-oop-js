class Mobil {
    constructor(merek, tahun, warna) {
        this.merek = merek;
        this.tahun = tahun;
        this.warna = warna;
        this.kecepatan = 0;
        this.mesinHidup = false;
    }
    
    startMesin() {
        this.mesinHidup = true;
        console.log(`Mesin mobil merek ${this.merek} telah dinyalakan`);
    }

    stopMobil() {
        this.kecepatan = 0;
        console.log(`Mobil merek ${this.merek} telah dihentikan`)
    }

    getInfoMobil() {
        console.log(`Mobil merek ${this.merek} tahun ${this.tahun} dengan warna ${this.warna}, kecepatan saat ini ${this.kecepatan} km/jam. Mesin hidup: ${this.mesinHidup ? 'Ya' : 'Tidak'}`);
    }
}

let mobil1 = new Mobil('Toyota Avanza', 2021, 'Putih');

mobil1.startMesin();

mobil1.kecepatan = 20;
mobil1.getInfoMobil();

mobil1.stopMobil();
mobil1.getInfoMobil();

