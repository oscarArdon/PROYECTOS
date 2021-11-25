//clase de la logica de la app
//*********************Las interfaces siguientes son utilizadas como tipos de datos */
//Definiendo los dos tipos de moneda utilizada en la app
type Currency = 'JPY' | 'USD'

//Interfaz para definir el valor numerico y tipo de moneda del precio
interface Price{
    //atributos..
    number:number,//valor numerico del precio
    currency:Currency//tipo de moneda utilizada (yen o dolar)
}

//Interfaz para definir un nuevo item
interface ExpenseItem{
    //atributos..
    id?:number,
    title:string,
    costo:Price//crearemos otra interface para definir este tipo de dato
}

//Interface Expenses (IExpenses)
interface IExpenses{
    //arraylist implementando el tipo de dato de la interfaz
    expenses:ArrayList<ExpenseItem>,//se declara abajo una clase para aceptar arralist de tipo ExpenseItem
    finalCurrency:Currency,
    //metodos que se utilizaran al implementar esta interfaz
    add(item:ExpenseItem):boolean,
    get(index:number):ExpenseItem|null,//el metodo retorna un valor de tipo ExpenseItem o un valor null
    getTotal():string,
    remove(id:number):boolean
}

//declarando la clase arraylist con tipos genericos (T)
class ArrayList<T>{
    private items:T[];//items es un arreglo de tipo T
    //constructor para inicializar atributo items
    constructor(){
        this.items = [];
    }

    //Definiendo los metodos del arraylist
    //agregando item al arraylist
    add(item:T):void{
        this.items.push(item);
    }
    //buscando y retornando item
    get(index:number):T|null{
        //x: elemento; i: indice
        const item:T[] = this.items.filter((x:T, i:number) => {
            return i === index;//retornando elementos con indice igual a indice
        });

        if(item.length === 0){
            return null;
        }else{
            return item[0];
        }
    }

    createFrom(value:T[]):void{
        this.items = [...value];
    }

    //retornando todos los items del arraylist
    getAll():T[]{
        return this.items;
    }

}

//clase que servira como controlador para manejar la aplicacion
class Expenses implements IExpenses{
    //al implementar la interfaz IExpenses tenemos que hacer uso de 
    //todos los atributos y metodos definidos en dicha interfaz
    expenses: ArrayList<ExpenseItem>;
    finalCurrency: Currency;

    private count = 0;//para los id's, se maneja unicamente desde la clase
    
    //Constructor necesario para inicializar los atributos de arriba
    constructor(currency:Currency){
        //se definen los tipos de datos iguales a los de la interfaz
        this.finalCurrency = currency;
        this.expenses = new ArrayList<ExpenseItem>();        
    }    

    add(item: ExpenseItem): boolean {
        item.id = this.count;
        this.count++;
        this.expenses.add(item);
        return true;
    }

    get(index:number): ExpenseItem | null {
        return this.expenses.get(index);
    }

    //retorna todos los datos del arraylist
    getItems():ExpenseItem[]{
        return this.expenses.getAll();
    }

    getTotal(): string {
        //sumando los totales de expenses
        const total = this.getItems().reduce((acc, item) => {
            return acc += this.convertCurrency(item, this.finalCurrency);
        }, 0);//retorna arreglo

        return  `${this.finalCurrency} $${total.toFixed(2).toString()}`;
    }

    remove(id: number): boolean {
        throw new Error("Method not implemented.");
    }

    //funcion para convertir monedas de yen a dolar o viceversa
    private convertCurrency(item:ExpenseItem, currency:Currency):number{
        switch(item.costo.currency){
            case 'USD'://si la moneda es dolar..
                switch(currency){
                    case 'JPY'://se realiza conversion a yen
                        return item.costo.number*22;
                        break;
                    default:
                        return item.costo.number;
                }
                break;

            case 'JPY'://si la moneda es yen
                switch(currency){
                    case 'USD'://se realiza conversion a dolar
                        return item.costo.number/22;
                        break;
                    default:
                        return item.costo.number;
                }
                break;

            default:
                return 0;
        }
    }

}