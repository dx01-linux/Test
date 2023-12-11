class htmlElement {
    constructor(tag){
        this.tag = document.createElement(tag)
        this.attr = this.tag.attributes ;   
        this.events = [] ;
    }
    getTag(){
        return this.tag ;
    }
    
    setAttr(type , value){
        this.tag.setAttribute(type , value)
    }
    delAttr(name) {
        this.attr.removeNamedItem(name)
    }
    appendElement(tag){
        this.tag.appendChild(tag);
    }
}

class Wrapper extends htmlElement{
    constructor(className){
        super('div');

        //setting properties
        this.setAttr('class' , className);
    }
}

class Img extends htmlElement{
    constructor(src = '#' ){
        super('img');

        //setting properties
        this.setAttr('src' , src);
        this.setAttr('alt' , 'image');
    }
}

class Text extends htmlElement {
    constructor(text){
        super('p');

        //attributes
        this.appendElement(document.createTextNode(text));
    }
}

class Box{
    constructor(){
        this.wrapper = new Wrapper('box');
        this.img = new Img();
        this.header = new Text('header');
        this.description = new Text('bla-bla-bla');

        //setting up :
        this.wrapper.appendElement(this.header.getTag())
		this.wrapper.appendElement(this.img.getTag())
		this.wrapper.appendElement(this.description.getTag())
    }
}

const container = {
    'tag' : document.querySelector('#container') ,
    'boxes' : [] ,
    'addBoxes' : function(number){
        
        for(let i = 0 ; i < number - 1 ; i++){
            let aBox = new Box();
            this.boxes.push(aBox);
        }
    } ,
    'delBoxes' : function(number){
        for(let i = 0 ; x < number - 1 ; i++){
            this.boxes.pop();
        }
    }
}

