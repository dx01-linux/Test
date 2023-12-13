
class htmlElement {
    constructor(tag){
        this.tag = document.createElement(tag)
        this.attr = this.tag.attributes ;   
        this.events = [] ;
    }
}

class Wrapper extends htmlElement{
    constructor(className){
        super('div');

        //setting properties
        this.tag.setAttributes('class' , className)
    }
}

class Img extends htmlElement{
    constructor(src = '#' ){
        super('img');

        //setting properties
        this.tag.setAttributes('src' , src)
        this.tag.setAttributes('alt' , image)
    }
}

class Text extends htmlElement {
    constructor(text){
        super('p');

        //attributes
        this.tag.appendChild(document.createTextNode(text));
    }
}

class Box{
    constructor(){
        this.wrapper = new Wrapper('box');
        this.img = new Img();
        this.header = new Text('header');
        this.description = new Text('bla-bla-bla');

        //setting up :
        for(let x of Object.keys(this)){
                if(x != 'wrapper'){
                    this.wrapper.tag.appendChild(x.tag);
                }
        }
    }
}

const container = {
    'tag' : document.querySelector('#container') ,
    'boxes' : [] ,
    'addBoxes' : function(number){
        for(let i = 0 ; i < number - 1 ; i++){
            this.boxes.push(new Box()); // keep track of max boxes
            this.tag.appendChild(this.boxes[i].wrapper.tag); // attach added box to container 
        }
    } ,
}
