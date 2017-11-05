var vdom = require('virtual-dom')
var hyperx = require('hyperx');
var hx = hyperx(vdom.h);

function render(params){

    let name = params.name;

    const template = hx`
        <div>
            <h1>Landing</h1>
            <a href="/hello/Jorma">Parameter route</a>
        </div>
    `;

    return template;
}

export default render;