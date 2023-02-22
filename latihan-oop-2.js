/**
 * Nama : Ikhlash Mulyanurahman
 * NIM  : 217200012
 **/

//membuat class
class Komputer {
    
    //mendeklarasikan variabel dengan membuat constructor function
    constructor(memory, storage, proci) {
        this.memory = memory;
        this.storage = storage;
        this.proci = proci;
        this.isActive = false;
    }
    
    //membuat method
    getInfoKomputer() {
        console.log(`Spesifikasi Komputer
memory    : ${this.memory}
storage   : ${this.storage}
processor : ${this.proci}`);
    }

    turnOnKomputer() {
        this.isActive = true;
        console.log(`this computer is on`);
    }

}

//instansiasi objek
let comp1 = new Komputer(8, 256, "Intel core i3");
//memanggil method
comp1.turnOnKomputer();
comp1.getInfoKomputer();