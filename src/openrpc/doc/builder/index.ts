import {JSDOM} from 'jsdom';
import * as fs from 'fs';
const dom = (new JSDOM(`<!DOCTYPE html>
<html lang="en">

<head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://unpkg.com/monaco-editor@latest/min/vs/loader.js"></script>
        <title>Document</title>
        <link rel="stylesheet" href="docs/index.css">
</head>

<body id="main">

</body>
<script src="http://localhost:3000/doc/main.js"></script>





</html>`)).window.document.documentElement.innerHTML;

export function oprnRpcHtml(){
        return dom
}
export function openRpcJavascript(){
        const js = fs.readFileSync(process.cwd()+'/src/openrpc/doc/builder/main.js').toString();
        return js
}





