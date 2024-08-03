//now we need to inject the element in container

//THIS IS LITTLE LENGTHY APPROACH

 function customRender(reactElement,container)
 {
//     const domElement =document.createElement(reactElement.type)
//     domElement.innerHTML=reactElement.children
//     domElement.setAttribute('href',reactElement.props.href)
//     domElement.setAttribute('target',reactElement.props.target)
//     container.appendChild(domElement)
// }


//USING LOOP

const domElement=document.createElement(reactElement.type)
domElement.innerHTML=reactElement.children
for (const prop in reactElement.props){
    if (prop==='children') continue;
    domElement.setAttribute(prop,reactElement.props[prop])

   }
 container.appendChild(domElement)   

}

const reactElement = {
    type:'a',
   //props is an object
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}

const mainContainer=document.querySelector('#root')

//kya inject krna h nd kha inject krna h
customRender(reactElement,mainContainer)
