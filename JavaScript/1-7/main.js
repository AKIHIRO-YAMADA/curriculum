class Taiyaki {
    constructor(nakami) {
        this.nakami = nakami;
    }
    eat() {
        console.log(`中身は${this.nakami}です`);
    }
}
let anko = new Taiyaki('あんこ');
let cream = new Taiyaki('クリーム');
let cheese = new Taiyaki('チーズ');

anko.eat();
cream.eat();
cheese.eat();

