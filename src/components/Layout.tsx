import * as React from 'react';

export default (props) => <html>
    <head>
        <meta charSet='utf-8' />
        <title>{props.title}</title>
    </head>
    <body>
        {props.children}
    </body>
</html>