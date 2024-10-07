var User = /** @class */ (function () {
    function User(_nome, _cognome) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.credito = 0;
        this.numeroChiamate = 0;
    }
    Object.defineProperty(User.prototype, "chiama404", {
        get: function () {
            return this.credito;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getNumeroChiamata", {
        get: function () {
            return this.numeroChiamate;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.ricarica = function (soldiRicarica) {
        this.credito = this.credito + soldiRicarica;
    };
    User.prototype.chiamata = function (minutiChiamata) {
        var costoChiamata = minutiChiamata * 0.2;
        if (costoChiamata > this.credito) {
            console.log('Errore! credito residuo insufficiente');
        }
        else {
            this.credito = this.credito - costoChiamata;
            this.numeroChiamate = this.numeroChiamate + minutiChiamata;
        }
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return User;
}());
var user = new User('Paolo', 'Rossi');
user.ricarica(10);
user.chiamata(6);
user.azzeraChiamate();
console.log(user);
