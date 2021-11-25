//Maneja la parte grafica del html
//se hace un cast al objeto para que tenga las propiedades de un objeto html
const bAdd = document.querySelector('#bAdd') as HTMLButtonElement;
const inputTitle = document.querySelector('#title') as HTMLInputElement;
const inputCost     = <HTMLInputElement>document.querySelector('#costo');
const inputCurrency = <HTMLSelectElement>document.querySelector('#currency');

//instancia de la clase Expenses que implementa la interfaz IExpenses
const expenses = new Expenses('USD');

//el ? significa que es opcional y que puede ser null/ el ! significa que no va a ser null
bAdd!.addEventListener('click',e => {
    if(inputTitle.value != '' && inputCost.value != '' && !isNaN(parseFloat(inputCost.value))){
        const title = inputTitle!.value;
        const cost      = inputCost!.value;
        const currency  = <Currency>inputCurrency!.value;

        //se pasa como parametro una estructura como objeto para añadir un expense
        expenses.add({title:title,costo:{number:parseFloat(cost),currency:currency}});

        render();
    }else{
        alert('Completa los datos correctamente!!');
    }

});

function render(){
    let html = '';

    expenses.getItems().forEach(item => {
        //se asocia a la variable item la estructura ExpenseItem de expenses.ts
        const {id, title, costo} = item;

        html += `
        <div class="item">
            <div><span class="currency">${costo.currency}</span> ${costo.number}</div>
            <div>${title}</div>
            <div><button class="bEliminar" data-id="${id}">Eliminar</button></div>
        </div>
        `;
    });

    $('#items').innerHTML = html;
    $('#display').textContent = expenses.getTotal();
    //recorremos los botones que tengan la clase uno por uno
    $$('.bEliminar').forEach(bEliminar => {
        bEliminar.addEventListener('click',e => {
            //obtenemos el valor que tenga el atributo del boton
            const id = (e.target as HTMLButtonElement).getAttribute('data-id');
            expenses.remove(parseInt(id!));
            render();
        });
    });
}

function $(selector:string):HTMLElement{
    return document.querySelector(selector) as HTMLElement;
}
function $$(selector:string):NodeListOf<HTMLElement>{
    return document.querySelectorAll(selector) as NodeListOf<HTMLElement>;
}