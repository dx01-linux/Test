class Element {
    constructor(type , className = undefined , idName = undefined){
        this.tag = document.createElement(type);
        this.class = className ;
        this.id = idName;
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
    constructor(){
        //atributes
        this.header = new Text('header');
        this.image = new Image();
        this.description = new Text('Product - Description');
        this.wrapper = new Wrapper('box')
    }

    setBox(box){
        let keys = [];
        let pos = 0 ;
        for(let x of box){
            keys[pos] = Object.keys(box);
            pos++ ;
        }
        //append all atributes.tag to wrapper by itinerating trought them
        for(let key of keys){
            if(key != 'wrapper'){
                this.wrapper.appendAChild(box[key].getTag());
            }
        }
    }
}

const box = new Box();
