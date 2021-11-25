"use strict";
//Maneja la parte grafica del html
//se hace un cast al objeto para que tenga las propiedades de un objeto html
var bAdd = document.querySelector('#bAdd');
var inputTitle = document.querySelector('#title');
var inputCost = document.querySelector('#costo');
var inputCurrency = document.querySelector('#currency');
//instancia de la clase Expenses que implementa la interfaz IExpenses
var expenses = new Expenses('USD');
//el ? significa que es opcional y que puede ser null/ el ! significa que no va a ser null
bAdd.addEventListener('click', function (e) {
    if (inputTitle.value != '' && inputCost.value != '' && !isNaN(parseFloat(inputCost.value))) {
        var title = inputTitle.value;
        var cost = inputCost.value;
        var currency = inputCurrency.value;
        //se pasa como parametro una estructura como objeto para añadir un expense
        expenses.add({ title: title, costo: { number: parseFloat(cost), currency: currency } });
        render();
    }
    else {
        alert('Completa los datos correctamente!!');
    }
});
function render() {
    var html = '';
    expenses.getItems().forEach(function (item) {
        //se asocia a la variable item la estructura ExpenseItem de expenses.ts
        var id = item.id, title = item.title, costo = item.costo;
        html += "\n        <div class=\"item\">\n            <div><span class=\"currency\">" + costo.currency + "</span> " + costo.number + "</div>\n            <div>" + title + "</div>\n            <div><button class=\"bEliminar\" data-id=\"" + id + "\">Eliminar</button></div>\n        </div>\n        ";
    });
    $('#items').innerHTML = html;
    $('#display').textContent = expenses.getTotal();
    //recorremos los botones que tengan la clase uno por uno
    $$('.bEliminar').forEach(function (bEliminar) {
        bEliminar.addEventListener('click', function (e) {
            //obtenemos el valor que tenga el atributo del boton
            var id = e.target.getAttribute('data-id');
            expenses.remove(parseInt(id));
            render();
        });
    });
}
function $(selector) {
    return document.querySelector(selector);
}
function $$(selector) {
    return document.querySelectorAll(selector);
}
