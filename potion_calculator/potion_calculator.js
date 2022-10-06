//Potion Values

class ingredient{
	constructor(name, effect, rarity, stability, solubility);
	this.name = name;
	this.effect = effect;
	this.rarity = rarity;
	this.stability = stability;
	this.solubility = solubility;
}

class binder{
	constructor(name, type, special);
	this.name = name;
	this.type = type;
	this.special = special;
}


// Create arrays for the ingredients

const ingredients = [];
const binders = [];


// Add all ingredients to arrays, in the easiest way I could think of

function initIngredients(){
	var noIngredient = new ingredient('[None]', false, false, false, false);
		ingredients.push(noIngredient);

	var phoenixDown = new ingredient;
		phoenixDown.name = 		'Phoenix Down';
		phoenixDown.effect =  	'res';
		phoenixDown.rarity = 	'very rare';
		phoenixDown.stability =	'high';
		phoenixDown.solubility=	'water';
		ingredients.push(phoenixDown);
}

function initBinders(){
	var water = new Binder('Water', 'water', false);
		binders.push(water);

	var holyWater = new Binder;
		holyWater.name = 		'Holy Water';
		holyWater.type =		'water';
		holyWater.special = 	'holy';
		binders.push(holyWater);
}