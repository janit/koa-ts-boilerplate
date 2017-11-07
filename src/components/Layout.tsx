import * as React from 'react';

export default (props) => <html>
    <head>
        <title>{props.title}</title>
    </head>
    <body>
        {props.children}
    </body>
</html>