var vdom = require('virtual-dom')
var hyperx = require('hyperx');
var hx = hyperx(vdom.h);

function render(params){

    const template = hx`
    <div>
        <h1>Hello ${params.name}</h1>
        <a href="/">Landing page</a>
    </div>
    `;

    return template;
}

export default render;