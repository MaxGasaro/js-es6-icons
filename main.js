const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const container = document.getElementById('icons-container');

//con questo disegno tutte le icone dell'array
//drawIcons(container, icons);

/*let content = "";

icons.forEach((element) => {
    content += `
                <div class="icon">
                    <i class="${element.family} ${element.prefix}${element.name}"></i>
                    <div class="icon-text">${element.name}</div>
                </div>
                `;
});*/


//ora proviamo ad inserire ciclo foreach dentro una funzione

function drawIcons(container, icons) {
    //inseriamo qua dentro quello che abbiamo sviluppato sopra per disegnare le icone
    let content = "";
    
    //forEach serve per ciclare più semplicemente gli elementi di un array
    //dove abbiamo messo element serve per richiamare l'elemento di un array, in quest caso è un oggetto
    //quindi noi con element ci riferiamo all'oggetto
    //e infatti nell'iniettare il codice nel dom richiamiamo l'oggetto al suo rispettivo nome\valore che vogliamo inserire

    icons.forEach((element) => {
        content += `
        <div class="icon">
        <i style="color:${element.color}" class="${element.family} ${element.prefix}${element.name}"></i>
        <div class="icon-text">${element.name}</div>
        </div>
        `;
    });

    /* nel caso avessimo solo element tra i parametri possiamo scrivere anche così:
    icons.forEach(element => {
        content += `
        <div class="icon">
        <i style="color:${element.color}" class="${element.family} ${element.prefix}${element.name}"></i>
        <div class="icon-text">${element.name}</div>
        </div>
        `;
    }); */


    container.innerHTML = content;
}

//ora dobbiamo creare un ascoltatore di eventi che ci mostrerà solo le icone del TIPO selezionato

const selector = document.getElementById('type-filter');

selector.addEventListener('change', function() {

    let selection = this.value //possiamo esprimere il this con selector

    //aggiungiamo questo if nel caso volessimo tutte le icone con la selezione all
    if (selection == 'all') {
        drawIcons(container, icons);
    } else {

        const filtered = icons.filter((icon) => {
    
            return icon['type'] == selection;
    
        });

        /* un'altra sintassi per usare filter è:
        const filtered = icons.filter(icon => {
            if (icon.type == selection) {
                return = true;
            }

            return false;
        }); */

        drawIcons(container, filtered);

    }

});

