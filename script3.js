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
        this.tag.appendElement(tag);
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
        super('div');

        //setting properties
        this.setAttr('src' , src);
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
    }
}

