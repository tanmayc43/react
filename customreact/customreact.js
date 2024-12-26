function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    // container.appendChild(domElement)
    // not the best method, looping would be better for generalisation of setting attributes

    for (const prop in reactElement.props) {
       if(prop === 'children') continue;
       domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://youtube.com',
        target: '_blank',
    },
    children: 'Wanna watch pewdiepie?'
}

const mainContainer = document.querySelector('#root')
customRender(reactElement, mainContainer)
