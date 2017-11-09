import { helloAction } from './controllers/hello'
import { landingAction } from './controllers/landing'
import { contentAction } from './controllers/content'

export const AppRoutes: [Route] = [
    {
        path: '/',
        method: 'get',
        action: landingAction,
    },
    {
        path: '/hello/:name',
        method: 'get',
        action: helloAction,
    },
    {
        path: '/content',
        method: 'get',
        action: contentAction
    }
]

interface Route {
    path: string;
    method: string;
    action: any;
}