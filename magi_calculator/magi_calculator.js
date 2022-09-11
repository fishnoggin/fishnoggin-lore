var baseDC_disp = document.getElementById('baseDC');
var spellDC_disp = document.getElementById('spellDC');
var newDC_disp = document.getElementById('newDC');
var spellLevelInput = document.getElementById('spellLevel')
var lastSpellLevelInput = document.getElementById('lastSpell')

var basedc = 12;
var spelldc = 13;
var spellLevel = Number(spellLevelInput.value);
var prevSpellLevel = Number(lastSpellLevelInput.value);

var newBaseDC = 12;


function cast(){
    update();
    basedc = newBaseDC;
    lastSpellLevelInput.value = spellLevel;
    update();
}

function manual(input){
    basedc += input;
    if(basedc < 12){
        basedc = 12;
    }
    update();
}

function reset(){
    basedc = 12;
    update();
}

function update(){

    spellLevel = Number(spellLevelInput.value);
    prevSpellLevel = Number(lastSpellLevelInput.value);

    spelldc = basedc + spellLevel;
    console.log('spell DC set to ' + spelldc);

    var dcAdjust = 0;
    var sign = '+';
    if(spellLevel == 0){
        dcAdjust = -2;
        sign = ' ';
    }else if(spellLevel >= prevSpellLevel){
        dcAdjust = 3;
    }else{
        dcAdjust = 1;
    }

    if((document.getElementById('masterySpell').checked)&&(dcAdjust > 0)){
        dcAdjust = 1;
    }
    newBaseDC = basedc + dcAdjust;
    if(newBaseDC < 12){
        newBaseDC = 12;
    }

    newDC_disp.innerHTML =  sign + dcAdjust + " &nbsp; &nbsp; (" + newBaseDC + ")";

    var backlash = '1d4';
    switch(spellLevel){
        case 2:
            backlash = '2d4';
            break;
        case 3:
            backlash = '3d4';
            break;
        case 4:
            backlash = '4d8';
            break;
        case 5:
            backlash = '5d8';
            break;
        case 6:
            backlash = '6d8';
            break;
        case 7:
            backlash = '7d12';
            break;
        case 8:
            backlash = '8d12';
            break;
        case 9:
            backlash = '9d12';
            break;
        default:
            backlash = '1d4';
            break;
    }
    document.getElementById('backlash').innerHTML = backlash;

    baseDC_disp.innerHTML = basedc;
    spellDC_disp.innerHTML = spelldc;
}


document.addEventListener("keydown", function(event) {
    if (event.key == "ArrowUp" && (Number(spellLevelInput.value) < 9)){
        spellLevelInput.value = Number(spellLevelInput.value) + 1;
    } else if (event.key == "ArrowDown" && (Number(spellLevelInput.value) > 0)){
        spellLevelInput.value = Number(spellLevelInput.value) - 1;
    }else if (event.key == "Enter"){
        cast();
    }else if (event.key == "r"){
        reset();
    }
    update();
});