
/* Class Element :
    [Function]::
    - all boxes' elements  inherit from it
    [Atributes]::
    -tag : its the html tag itself 
    -class : class name 
    -id : id name
    [Methods]::
    -getTag() : return a reference of the tag_'Attribute'
    -setClass(className = this.class) : set Tag class 
    -setId(idName = this.id) : set id name
*/
class Elements {
    constructor(tagType) {
        this.tag = document.createElement(tagType);
        this.class = undefined ;
        this.id = undefined ;
    }

    setClass(className = this.class){
        this.class = className ;
        this.tag.setAttribute('class' , this.class);
    }
    setId(idName = this.id){
        this.id = idName ;
        this.tag.setAttribute('id' , this.id);
    }

    getTag() {
        return this.tag;
    }
}

/* Text:
    [Function]::
    - set all boxes' texts as descriptions and headers
    [Atributes]::
    -tag : inherit from 'Elements'
    -class : class name 
    -id : id name
    -text : a textNode DOM node with the text 
    [Methods]::
    -getTag() : inherit from 'Elements
    -setClass(className = this.class) : inherit from Elements
    -setId(idName = this.id) : inherit from Elements
    -setText(newText) : reset this text value
*/
class Text extends Elements {
    //class constructor
    constructor(text = '' , tagType = 'p') {
        // inherit's class constructor initialization
        super(tagType);

        //own atributes
        this.text = document.createTextNode(text);

        //seting up 
        this.tag.appendChild(this.text);
    }

    setText(text) {
        this.tag.innerHTML = '';
        this.text = document.createTextNode(text);
        this.tag.appendChild(this.text);
    }
}

/* Image:
    [Function]::
    - set all boxes' Image 
    [Atributes]::
    -tag : inherit from 'Elements'
    -class : class name 
    -id : id name
    -src: the value of the src attributes of any DOM image
    [Methods]::
    -getTag() : inherit from 'Elements
    -setClass(className = this.class) : inherit from Elements
    -setId(idName = this.id) : inherit from Elements
    -setSrc(src = this.src) : reset src attribute value
  
*/
class Image extends Elements{
    constructor(src = '#'){
        //inherit class constructor initialization
        super('img');

        //own attributes
        this.src = src ;

        //setting up 
        this.setSrc()
    }

    setSrc(src = this.src){
        this.src = src ;
        this.tag.setAttribute('src' , this.src);
        this.tag.setAttribute('alt' , 'image') ;
    }
}

/* class Wrapper:
        [Function]::
        - set all boxes' Image 
        [Atributes]::
        -tag : inherit from 'Elements'
        -class : class name 
        -id : id name
        [Methods]::
        -getTag() : inherit from 'Elements
        -setClass(className = this.class) : inherit from Elements
        -setId(idName = this.id) : inherit from Elements
        -appendingNode(node) : append a node to div tag
*/
class Wrapper extends Elements{
    //constructor 
    constructor(className){
         //inherit class constructor initialization
         super('div');

         //attributes

         //setting up
        this.setClass(className)
        
    }

    //methods
    appendingNode(node){
        this.tag.appendChild(node)
    }
}

/* class Box :
    [Attributes]::
        -header -> class Text
        -image -> class Image
        -desc -> class Text
        -wrapper -> class Wrapper
        [Methods]::
        -settingUp(): 
*/
class Box {
    constructor(className = 'box' , header = 'Header' , desc = "description" ){
        //atributes
        this.header = new Text(header , 'h6');
        this.image = new Image();
        this.desc = new Text(desc , 'p')
        this.wrapper = new Wrapper(className);
        //setting up
        this.settigUp();
    }
    
    settigUp() {
        let array = [this.header , this.image , this.desc]
        for (let n of array){
            this.wrapper.appendingNode(n.getTag());
        }   
    }
}
    
 


 
const boxContainer = document.querySelector('#boxContainer');

const bottonPanel = document.querySelector('#bottonPanel');

const button = bottonPanel.firstElementChild;

button.addEventListener('click' , e=>{
    console.log('event');
    let box = new Box() ;
    boxContainer.appendChild(box.wrapper.getTag());
      
})