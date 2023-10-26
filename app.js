import React from 'react';
import  ReactDOM  from 'react-dom/client';


const parent=React.createElement('div',
{id:"parent"},
[React.createElement('div',{id:"child"},
[React.createElement('h2',{},"I'm an h2 tag"),
React.createElement('h3',{},'Im an h3 tag')]),

React.createElement('div',{id:"child2"},
[React.createElement('h2',{},"I'm an h2 tag"),
React.createElement('h3',{},'Im an h3 tag')])],




)

const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(parent)