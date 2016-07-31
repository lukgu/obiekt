function Telefon(marka, kolor, cena) {
	this.marka = marka; 
	this.cena = cena;
	this.kolor = kolor;


}
Telefon.prototype.calculateWarrantyCost = function() {
	return (this.cena / 12).toFixed(2);
}
Telefon.prototype.printInfo = function() {
		console.log('Marka telefonu to ' + this.marka + ', kolor to ' + this.kolor + ', a cena to ' + this.cena + '. Koszt gwarancji to ' + this.calculateWarrantyCost() + '.');
}
var iPhone6S = new Telefon('Apple', 'srebrny', 2250);
var galaxy = new Telefon('Samsung', 'czarny', 3150);
var onePlus = new Telefon('One', 'biały', 1450);


iPhone6S.printInfo();
galaxy.printInfo();
onePlus.printInfo();



console.log(iPhone6S);


