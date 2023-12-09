class Attributes{
        constructor(tag){
            //objetive tag
            this.tag = tag;
            //array of atributes 
            this.atributes = this.tag.attributes ;
        }
        
        setNewAtribute(attribute , value){
            this.tag.setAttributes(attribute , value)
        }

        delAttribute(name){
            this.tag.attributes.removeNamedItem(name)   
        }
}

class Event{
    constructor(tag , type , instruction){
            tag.addEventListener(
                type , 
                //this.instructions.bind()
                // arrow f not use this passed as an argument of anonimus func
                e=>{
                //instructions
                }
            )
    }
}
class Element {
    constructor(type){
        //tag
        this.tag.bind() = document.createElement(type);
        //atributes
        this.tagAttributes = new Attributes(this.tag);
        //arr of events added
        this.events = {};
    }

    addEvent(name , type , instruction){
        this.events[name] = new Event(this.tag , type , instruction);
    }
    delEvent(name){
        delete this.events[name] ;
    }
    cleanEvents(){
        for(let key of this.events){
            delete key ;
        }
    }
}

class Wrapper extends Element {
    constructor(className){
        super('div');
        //setting atributes
        super.tagAttributes.setNewAtribute('class' , className);
        //setting event listeners
    }
}