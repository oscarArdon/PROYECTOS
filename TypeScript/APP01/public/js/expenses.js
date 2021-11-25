"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
//declarando la clase arraylist con tipos genericos (T)
var ArrayList = /** @class */ (function () {
    //constructor para inicializar atributo items
    function ArrayList() {
        this.items = [];
    }
    //Definiendo los metodos del arraylist
    //agregando item al arraylist
    ArrayList.prototype.add = function (item) {
        this.items.push(item);
    };
    //buscando y retornando item
    ArrayList.prototype.get = function (index) {
        //x: elemento; i: indice
        var item = this.items.filter(function (x, i) {
            return i === index; //retornando elementos con indice igual a indice
        });
        if (item.length === 0) {
            return null;
        }
        else {
            return item[0];
        }
    };
    ArrayList.prototype.createFrom = function (value) {
        this.items = __spreadArray([], value);
    };
    //retornando todos los items del arraylist
    ArrayList.prototype.getAll = function () {
        return this.items;
    };
    return ArrayList;
}());
//clase que servira como controlador para manejar la aplicacion
var Expenses = /** @class */ (function () {
    //Constructor necesario para inicializar los atributos de arriba
    function Expenses(currency) {
        this.count = 0; //para los id's, se maneja unicamente desde la clase
        //se definen los tipos de datos iguales a los de la interfaz
        this.finalCurrency = currency;
        this.expenses = new ArrayList();
    }
    Expenses.prototype.add = function (item) {
        item.id = this.count;
        this.count++;
        this.expenses.add(item);
        return true;
    };
    Expenses.prototype.get = function (index) {
        return this.expenses.get(index);
    };
    //retorna todos los datos del arraylist
    Expenses.prototype.getItems = function () {
        return this.expenses.getAll();
    };
    Expenses.prototype.getTotal = function () {
        var _this = this;
        //sumando los totales de expenses
        var total = this.getItems().reduce(function (acc, item) {
            return acc += _this.convertCurrency(item, _this.finalCurrency);
        }, 0); //retorna arreglo
        return this.finalCurrency + " $" + total.toFixed(2).toString();
    };
    Expenses.prototype.remove = function (id) {
        throw new Error("Method not implemented.");
    };
    //funcion para convertir monedas de yen a dolar o viceversa
    Expenses.prototype.convertCurrency = function (item, currency) {
        switch (item.costo.currency) {
            case 'USD': //si la moneda es dolar..
                switch (currency) {
                    case 'JPY': //se realiza conversion a yen
                        return item.costo.number * 22;
                        break;
                    default:
                        return item.costo.number;
                }
                break;
            case 'JPY': //si la moneda es yen
                switch (currency) {
                    case 'USD': //se realiza conversion a dolar
                        return item.costo.number / 22;
                        break;
                    default:
                        return item.costo.number;
                }
                break;
            default:
                return 0;
        }
    };
    return Expenses;
}());
