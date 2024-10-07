interface Telefono {
    credito:number
    numeroChiamate:number
    get chiama404():number
    get getNumeroChiamata():number
    ricarica(soldiRicarica:number):void
    chiamata(minutiChiamata:number):void
    azzeraChiamate():void
}

class User implements Telefono{
    nome:string
    cognome:string
    credito:number
    numeroChiamate: number

    get chiama404(){
        return this.credito
    }
    get getNumeroChiamata(){
        return this.numeroChiamate
    }

    constructor(_nome:string, _cognome:string){
        this.nome = _nome
        this.cognome = _cognome
        this.credito = 0; 
        this.numeroChiamate = 0; 
    }

    ricarica (soldiRicarica:number){
        this.credito = this.credito + soldiRicarica;
    }
    chiamata (minutiChiamata:number){
        let costoChiamata = minutiChiamata * 0.2
        if(costoChiamata > this.credito){
            console.log('Errore! credito residuo insufficiente')
        }
        else{
            this.credito = this.credito - costoChiamata
            this.numeroChiamate = this.numeroChiamate + minutiChiamata
        }
    }
    azzeraChiamate(){
        this.numeroChiamate = 0
    }

}

let user = new User ('Paolo','Rossi');
user.ricarica(10);
user.chiamata(6);
user.azzeraChiamate();
console.log(user)