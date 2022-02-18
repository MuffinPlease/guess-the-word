import setWord from "@utils/setWord.utils";

class GameBox{
    constructor(category,words){
        this._category = category;
        this._words = words;
        this._word = null;
        this._level = 1;
        this._count = 0;
        this._disableFunction = () => console.log('Hello disable');
        this._timerFunction = () => console.log('Hello timer');
    }

    //Methods---------------------------------------
    newLevel(){
        this._level ++;
    }
    newWord(){
        const index = this._words.indexOf(this._word);
        this._words.splice(index, 1);
        this._count ++;
        
        this._word = setWord(this._words);
    }
    disableInput(){
        this._disableFunction();
    }
    disableTimer(){
        this._timerFunction();
    }
    //Get--------------------------------------
    get category(){
        return this._category;
    }
    get words(){
        return this._words;
    }
    get word(){
        return this._word;
    }
    get level(){
        return this._level;
    }
    get count(){
        return this._count;
    }
    //Set------------------------------
    set category(cat){
        this._category = cat;
    }
    set words(array){
        this._words = array;
    }
    set toDisableInput(disable){
        this._disableFunction = disable;
    }
    set toDisableTimer(disable){
        this._timerFunction = disable;
    }
    

}

export default GameBox;