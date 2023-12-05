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

class Text {
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