class tagEvent{
    constructor(name , tag , type , instruction){
        this.name = name ;
        this.targetTag = tag ;
        this.type = type ;
        this.instruction = instruction ;
    }
    setEvent(){
        this.targetTag.addEventListener(
            this.type , (function(){ this.instruction })()
        );
    }

}
class EventHandler{
    constructor(){
        this.tagEventArray = [];

        //setting up:
    }
    delEvent(name){
        let pos = 0 ;
        for(let x of this.tagEventArray){
            if(x.name == name){
                // delete x's elemetn in array 
            }
            pos++ ; 
        }
    }
    createEvent(name , tag , type , instruction){
        const newEvent = new tagEvent(name , tag , type , instruction);
        this.tagEventArray.push(newEvent);
    }
    listen(){
        for(let e of this.tagEventArray){
            e.setEvent();
        }
    }
}
class Element {
    constructor(type , className = undefined , idName = undefined){
        this.tag = document.createElement(type);
        this.class = className ;
        this.id = idName;
        //Event listeners
        this.eventHandler = new EventHandler();
    }
    getTag(){
        return this.tag;
    }
    setClass(className = this.class){   
        if(className !== undefined){
            this.tag.className = className;
        }
    }
    setId(idName = this.id){
        if(idName !== undefined){
            this.tag.id = idName;
        }
    }

}

class Text extends Element {
    constructor(text , type = 'p'){
        //inheried class const
        super(type);

        //own atributes
        this.textNode = document.createTextNode(text);
    }
    setTextNode(text = '') {
        this.textNode.innerHTML = '';
        this.textNode.appendChild(document.createTextNode(text));
    }
}

class Image extends Element {
    constructor(src = '#' , width = 20 , height = 20){
        super('img');

        //attributes:
        this.src = src;
        this.dimensions = [width = width , height = height];

        //setting up:
        this.setSrc();
        this.setDimensions();
    }

    setSrc(newSrc = this.src){
        this.tag.src = newSrc ;
        this.tag.setAttribute('alt' , 'image');
    }
    setDimensions(w = this.dimensions[0] , h = this.dimensions[1]){
        this.dimensions = [];
        this.dimensions.push(w);
        this.dimensions.push(h);

        this.tag.width = this.dimensions[0] ;
        this.tag.height = this.dimensions[1];
    }
}

class Wrapper extends Element{
    constructor(className){
        super('div' , className);

        //setting up
        this.setClass(className);
    }

    appendAChild(tag){
        this.getTag().appendChild(tag);
    }
}

class Box {
    constructor(
        header = 'header' , text = 'some text' , src = '#' ,className ='box'
        ){
        //atributes
        this.header = new Text(header);
        this.image = new Image(src);
        this.description = new Text(text);
        this.wrapper = new Wrapper(className)
        
        //Setting Up :::
            //get new object reference
            let reference = this ;
            //pass it to call back function
            (function setBox(reference){
                //get  objects's Attributes's key 
                let keys = [];
                keys = Object.keys(box)
                //append all atributes's tag to wrapper by itinerating trought them
                for(let key of keys){
                    //wrapper can't append itself
                    if(key != 'wrapper'){
                        box.wrapper.appendAChild(box[key].getTag());
                    }
                }
            })(reference);
    }

}

const boxManager = {
    'containerTag' : document.querySelector('#container') ,
    'boxContainer' : [] ,
    'eventListener' : function(){
        this.containerTag.addEventListener()
    },
    
    'addBox' : function(number = 1){
        for(let i = 0 ; i <= number - 1 ; i ++ ){
            let newBox = new Box() ; 
            this.boxContainer.push(newBox);
            this.containerTag.appendChild(this.boxContainer[i]);
        }
    },
    'delBox' : function(number = 1){
        for(let i = 0 ; i <= number -1 ; i ++ ){
            this.boxContainer.pop();
            this.containerTag.lastElementChild.remove()
        }
    }
};

