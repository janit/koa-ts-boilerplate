import { helloAction } from './controllers/hello'
import { landingAction } from './controllers/landing'

export const AppRoutes: Route[] = [
    {
        path: '/',
        method: 'get',
        action: landingAction,
    },
    {
        path: '/hello/:name',
        method: 'get',
        action: helloAction,
    }
]

interface Route {
    path: string;
    method: string;
    action: any;
}