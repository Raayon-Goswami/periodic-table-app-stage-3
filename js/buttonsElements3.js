class buttonElements3{

    constructor(x,y,elementName,){
       var button=createButton(elementName)
       this.elementName = elementName
        button.position(x,y)
        button.size(40,40)
        button.style('background-color',"#8CE9FF")
        button.mousePressed(()=>{
            
            var infoObj = new info(elementName)
            console.log(infoObj)
            let h5 = createElement('h5'); h5.style('color', '#green'); h5.position(45,550);
            var ElementsName = "name : " + infoObj.name
            h5.html(ElementsName)
            console.log(ElementsName)
            let h6 = createElement('h5'); h6.style('color', '#green'); h6.position(200,550);
            h6.html('Atomic Mass : '+infoObj.atomicMass)
    
            let h7 = createElement('h5'); h7.style('color', '#green'); h7.position(380,550);
            h7.html('Number : '+infoObj.number)
    
            let h8 = createElement('h5'); h8.style('color', '#green'); h8.position(45,600);
            h8.html('description : '+infoObj.summary)
            h8.size (720)
            
       
        
        })
     
    }
    
    }