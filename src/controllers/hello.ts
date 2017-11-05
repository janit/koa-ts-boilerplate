import { Context } from 'koa';
import render from '../views/hello';

var vdom = require('virtual-dom')

export async function helloAction(context: Context){

    const template = render({
        name: context.params.name
    });

    context.body = vdom.create(template).toString();
}
