function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type);
    
    domElement.innerHTML = reactElement.childern;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', '_blank');
    container.appendChild(domElement);
    */
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.childern;
    for (const prop in reactElement.props) {
       if(prop==='children'){
           continue;
       }
         domElement.setAttribute(prop,reactElement.props[prop]);
    }
    container.appendChild(domElement);
}
const reactElement = {
    type:'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    }
    ,
    childern:'click me'
}

const root=document.querySelector('#root');
customRender(reactElement,root);