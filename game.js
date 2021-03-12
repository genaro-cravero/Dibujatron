var config = {
    type: Phaser.AUTO,
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'Dibujatron',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 650,
        height: 650
    },
     
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 700 },
            debug: false,
        }
    },
    
    scene: [Scene1]
};

var game = new Phaser.Game(config);

//globales
var Random_N;
var DrawChecker = 0;
var NameCount = 0;
var reset;
var Impostor_N = 0;
var Impostors = [];
var ImpostorChecker = 0;
var ImpostorReveal = [];
    //Normales
const drawings = ["Elefante","Lápiz","Guitarra","Parlante","Balde" /*5*/,"Manguera","Jeringa","Serpiente","Escalera","Auto" /*10*/,
"Moto","Barrilete","Diamante","Perro","Gato"/*15*/,"Bastón","Reloj","Rueda","Moto","Bicicleta"/*20*/,"Pato","Ratón","Flor","Sol","Ventilador"/*25*/,
"Molino","Fantasma","Pulpo","Muñeco de nieve","Oso"/*30*/,"Araña","Cangrejo","Maceta","Hongo","Paraguas"/*35*/,"Pizza","Reloj","Espada","Cruz","Bomba"/*35*/,"Cereza","altura",	"árbol",	
"almohada",	"araña",	"avión",
"alma",	"anuncio",	"automóvil",
"albóndiga",	"antorcha",
"alba",	"anteojo",	"autenticidad",
"alameda",	"antena",	"aula",
"ala",	"átomo",
"águila",		
"aguacate",	"ánimo",	
"agua",	"animal",
"admiración",	"anillo",	"arte",
"administración","arroyo",
"acompañamiento",	"ancla",
"academia",	"ananá",	"arena",
"abrelatas",	"amor",	"arcoiris",
"abeja",	"ambulancia",	"archivo","cambio",	"colmena",	"cumpleaños",
"camaleón",	"coliflor",	"culpa",
"calor",	"cola",	"cuidado",
	"ciudad",	"cuervo",
	"cielo",	"cuento",
"calendario",	"chocolate",	"cuello",
"cálculo",	"charco",	"cuchara",
		"cruce",
"calabaza",		"costra",
"cable",		"corazón",
"cabeza",	"campaña",	"compañía",
"caballero",	"camión",	"comida",
"cabello",	"campamento",	
"cadáver",	"carpeta",	
"caja",	"laberinto",	"lechuga",	"limpieza",
"labio",	"lectura",	
"laboratorio",		"lingote",
"ladrido",		"llama",
"ladrillo",		"llanto",
"lagarto",	"leña",	"llave",
"lágrima",	"Reina",	"lluvia",
"lámpara",	"letra",	"locomotora",
"lana",	"Rey",	"locura",
"lancha",		
"lanza",		"logro",
"lápiz",		"lucha",
	"libro",	
"lata",		"lujo",
		"luminosidad",
"lava",		"lunar",
	
		
];
    //Impostores
const drawings_Imp = ["Manguera","Jeringa","Aguacate","Caja","Maceta"/*5*/, "Elefante", "Lápiz", "Soga","Rayo","Moto"/*10*/,
"Auto","Diamante","Barrilete","Gato","Perro"/*15*/,"Serpiente","Rueda","Reloj","Bicicleta","Moto"/*20*/,"Ratón","Pato","Sol","Flor","Molino"/*25*/,
"Ventilador","Pulpo","Fantasma","Oso","Muñeco de nieve"/*30*/,"Cangrejo","Araña","Balde","Paraguas","Hongo"/*35*/,"Reloj","Pizza","Cruz","Espada","Cereza"/*35*/,"Bomba","abeja",	"ambulancia",	"archivo",
"abrelatas",	"amor",	"arcoiris",
"academia",	"ananá",	"arena",
"acompañamiento",	"ancla",
"administración","arroyo",
"admiración",	"anillo",	"arte",
"agua",	"animal",
"aguacate",	"ánimo",	
"águila",		
"ala",	"átomo",
"alameda",	"antena",	"aula",
"alba",	"anteojo",	"autenticidad",
"albóndiga",	"antorcha",	
"alma",	"anuncio",	"automóvil",
"almohada",	"araña",	"avión",
"altura",	"árbol","caballero",	"camión",	"comida",
"cabello",	"campamento",	
"cabeza",	"campaña",	"compañía",
"cable",		"corazón",
"cadáver",	"carpeta",	
"caja",		
"calabaza",		"costra",
		
		"cruce",
"cálculo",	"charco",	"cuchara",
"calendario",	"chocolate",	"cuello",
	"cielo",	"cuento",
	"ciudad",	"cuervo",
"calor",	"cola",	"cuidado",
"camaleón",	"coliflor",	"culpa",
"cambio",	"colmena",	"cumpleaños","lava",		"lunar",
"luminosidad",
"lata",		"lujo",
"lápiz",		"lucha",
"lanza",		"logro",
"lana",	"Rey",	"locura",
"lámpara",	"letra",	"locomotora",
"lágrima",	"Reina",	"lluvia",
"lagarto",	"leña",	"llave",
"ladrillo",		"llanto",
"ladrido",		"llama",
"laboratorio",		"lingote",
"laberinto",	"lechuga",	"limpieza",
"labio",	"lectura",	
"lancha",		
"libro",	

];