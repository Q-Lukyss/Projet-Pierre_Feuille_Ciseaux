let tabChoice = ['pierre', 'feuille', 'ciseaux']
let iaChoice = '';
let myChoice = '';
let countV = 0;
let countD = 0;
let countE = 0;

//Fonction pour avoir le choix de l'ordi
const getComputerChoice = () => {
    let iaChoiceIndice = Math.floor(Math.random() * tabChoice.length)
    iaChoice = tabChoice[iaChoiceIndice]
    console.log(iaChoice)
    switch(iaChoice)
    {
        case 'pierre':
            document.querySelector('.choice_ia').innerHTML = '<div class="pierre"><img src="./img/rock.svg" alt="pierre"></div>'
            break;
        case 'feuille':
            document.querySelector('.choice_ia').innerHTML = '<div class="feuille"><img src="./img/leaf.svg" alt="feuille"></div>'
            break;
        case 'ciseaux':
            document.querySelector('.choice_ia').innerHTML =  '<div class="ciseaux" ><img src="./img/scissors.svg" alt="ciseaux"></div>'
            break;    
        default: break;
    }
}
//Fonction pour Definir les choix
const setChoices = (x) => {
    myChoice = x;
    getComputerChoice();
    compareChoice()
}
//Fonction pour comparer les choix
const compareChoice = () => {
    if(myChoice == iaChoice){
        //egalité
        handleTie()
    }
    if(myChoice == 'pierre'){
        if(iaChoice == 'feuille'){
            //defaite
            handleDefeat()
        }
        else if(iaChoice == 'ciseaux'){
            //victoire
            handleVictory()
        }
    }
    else if(myChoice == 'feuille'){
        if(iaChoice == 'ciseaux'){
            //defaite
            handleDefeat()
        }
        else if(iaChoice == 'pierre'){
            //victoire
            handleVictory()
        }
    }else {
        if(iaChoice == 'pierre'){
            //defaite
            handleDefeat()
        }
        else if(iaChoice == 'feuille'){
            //victoire
            handleVictory()
        }
    }
}
const handleTie = () => {
    countE += 1;
    document.querySelector('.main_info').innerHTML = `<h1>Pierre Feuille Ciseaux</h1><h2 class="info" style='color: blue;'>Egalité</h2><h2 class="count">Victoire du Joueur: ${countV}<br/>Victoire de l'ordi: ${countD}<br/>Egalités : ${countE}</h2>`
} 
const handleDefeat = () => {
    countD += 1;
    document.querySelector('.main_info').innerHTML = `<h1>Pierre Feuille Ciseaux</h1><h2 class="info" style='color: red;'>Défaite</h2><h2 class="count">Victoire du Joueur: ${countV}<br/>Victoire de l'ordi: ${countD}<br/>Egalités : ${countE}</h2>`
} 
const handleVictory = () => {
    countV += 1;
    document.querySelector('.main_info').innerHTML = `<h1>Pierre Feuille Ciseaux</h1><h2 class="info" style='color: lightgreen;'>Victoire</h2><h2 class="count">Victoire du Joueur: ${countV}<br/>Victoire de l'ordi: ${countD}<br/>Egalités : ${countE}</h2>`
} 
