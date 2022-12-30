/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createInfo)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


function createInfo(info) {
      
        const info_div = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.ce)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.div);

        const info_title = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createTitle)(info.title);

        info_div.push(info_title);

        const info_description = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.cewt)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.div, info.description);
        info_div.push(info_description)

        return info_div;
}

/***/ }),
/* 2 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ce": () => (/* binding */ ce),
/* harmony export */   "cewt": () => (/* binding */ cewt),
/* harmony export */   "checkEmptyObj": () => (/* binding */ checkEmptyObj),
/* harmony export */   "createTitle": () => (/* binding */ createTitle),
/* harmony export */   "findAllRefs": () => (/* binding */ findAllRefs),
/* harmony export */   "findFirstRef": () => (/* binding */ findFirstRef),
/* harmony export */   "getRefName": () => (/* binding */ getRefName),
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });
  //ref찾기
  function findFirstRef(obj) {
        if(obj==undefined) return null
        
        if (obj.hasOwnProperty("$ref")) {
                return getRefName(obj["$ref"])
        } else {
                for (const key in obj) {
                        if (typeof obj[key] == 'object') {
                                const childKey = findFirstRef(obj[key]);
                                if (childKey) return childKey;
                        }
                }
        }
        return null;
}

function findAllRefs(obj){
        let refArray = [];

        for (const key in  obj){
                if(key=='$ref'){
                        refArray.push(getRefName(obj[key]))
                        continue;
                }else{        
                        if (typeof obj[key] == 'object'){
                                const childRef = findAllRefs(obj[key]);
                                if (childRef.length > 0) {
                                        refArray = [...refArray,...childRef];
                                }
                        }
                }
         }
        return refArray;
}







function getRefName(str) {
        return str.split('/').pop();
}

function checkEmptyObj(obj){
        return (obj==undefined || Object.keys(obj).length == 0) ? true : false;
}


//createElement 귀찮아서

function ce(tagName){
        const element = document.createElement(tagName);
        element.push = (item) => {
                element.appendChild(item);
        }
        return element;
}

function cewt(tagName, text) {
        const element = document.createElement(tagName);
        element.innerText = text ?? "";
        element.push = (item) => {
                element.appendChild(item);
        }
        return element;
}

function createTitle(text){
        const element = document.createElement('h1');
        element.innerText = text;
        return element;
}

async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                        'Content-Type': 'application/json'
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: data // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
}



/***/ }),
/* 3 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ a),
/* harmony export */   "button": () => (/* binding */ button),
/* harmony export */   "div": () => (/* binding */ div),
/* harmony export */   "h1": () => (/* binding */ h1),
/* harmony export */   "h2": () => (/* binding */ h2),
/* harmony export */   "h3": () => (/* binding */ h3),
/* harmony export */   "h4": () => (/* binding */ h4),
/* harmony export */   "h5": () => (/* binding */ h5),
/* harmony export */   "h6": () => (/* binding */ h6),
/* harmony export */   "li": () => (/* binding */ li),
/* harmony export */   "span": () => (/* binding */ span),
/* harmony export */   "ul": () => (/* binding */ ul)
/* harmony export */ });
const h1 = 'h1';
const h2 = 'h2';
const h3 = 'h3';
const h4 = 'h4';
const h5 = 'h5';
const h6 = 'h6';
const div = 'div';
const ul = 'ul';
const li = 'li';
const span = 'span';
const a = 'a';
const button = 'button';

/***/ }),
/* 4 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createServers)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


function createServers(servers) {
      
        const servers_div = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.ce)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.div);

        const servers_title = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createTitle)('Servers');

        
        const servers_ul = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.ce)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.ul);
        
        servers.forEach(server => {
                const server_li = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.cewt)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.li,server.url);
                servers_ul.push(server_li);
        });

        
        
        servers_div.push(servers_title);
        servers_div.push(servers_ul);

        return {
                serversHTML :servers_div,
                serverURL: servers[0].url
        }
        
}

/***/ }),
/* 5 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MethodsMaker)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);




class MethodsMaker{

        constructor(methods,server){
                this.methods = methods;
                this.server = server;
                this.methods_div = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.ce)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.div);
                this.init();
        }

        init(){
                const methods_title = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createTitle)("Methods");
        
                const methods_ul = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.ce)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.ul);
                require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor@latest/min/vs' } });
                window.MonacoEnvironment = { getWorkerUrl: () => proxy };

                let proxy = URL.createObjectURL(new Blob([`
	        self.MonacoEnvironment = {
		        baseUrl: 'https://unpkg.com/monaco-editor@latest/min/'
	        };
	        importScripts('https://unpkg.com/monaco-editor@latest/min/vs/base/worker/workerMain.js');
                `], { type: 'text/javascript' }));
                this.methods.forEach(method => {
                        const method_li = this.createMethodItem(method)
                        methods_ul.push(method_li);
        
                });
                //result
                this.methods_div.push(methods_title);
                this.methods_div.push(methods_ul);
        }

        createMethodItem(method) {
                const method_li = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.ce)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.li);
        
                const method_head = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.ce)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.div);
                method_li.push(method_head);
        
                
                //======= Name, Summury
                const method_name = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.cewt)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.span, method.name);
                const method_summary = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.cewt)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.span, method.summary);
                method_head.push(method_name);
                method_head.push(method_summary);
        
                
                //======= Description
                const method_description = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.cewt)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.div, method.description);
                method_li.push(method_description);
                
                //======= Params
                const params_div = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.ce)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.div);
                method_li.push(params_div);
        
                const params_title = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.cewt)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.h4, "Params");
                params_div.push(params_title);
        
                const parmas_ul = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.ce)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.ul);
                params_div.push(parmas_ul);
        
                method.params.forEach(param => {
                        const param_li = this.createParam(param);
                        parmas_ul.push(param_li);
                })

                //======= Result



                //======= Test

                const test_div = this.createMethodTest(method);

                method_li.push(test_div);

                return method_li;
        }

         createParam(param) {
                const param_li = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.ce)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.li);
        
                const param_head = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.ce)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.div);
        
                const param_name = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.cewt)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.span, param.name);
                const param_required = param.required ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.cewt)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.span, 'required') : (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.cewt)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.span, 'option');
                param_required.style.padding = '0px 7px';
                param_required.style.color = param.required ? `red` : `#bbb`;
                const param_summary = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.cewt)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.span, param.summary);
                param_summary.style.padding = '0px 7px';
                param_head.push(param_name)
                param_head.push(param_required);
                param_head.push(param_summary);
                param_li.push(param_head);
        
                const param_description = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.cewt)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.div, param.description);
                param_li.push(param_description);
        
                const param_schema = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.ce)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.div);
                param_li.push(param_schema);
        
                const param_schema_head = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.cewt)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.div, 'schema');
                const param_schema_body = this.createParamSchema(param.schema);
                param_schema.push(param_schema_head);
                param_schema.push(param_schema_body);
        
        
                return param_li;
        }

         createParamSchema(schema){
                const params_schema_body = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.ce)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.div);
                if(schema.hasOwnProperty("$ref")){
                        const schema_a = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.cewt)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.a, (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRefName)(schema.$ref));
                        schema_a.href = schema.$ref;
                        params_schema_body.push(schema_a)
                }else if(schema.type=='array'){
        
                        if(schema.items.hasOwnProperty("$ref")){
                                const schema_a = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.cewt)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.a, `${(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRefName)(schema.items.$ref)}[]`);
                                schema_a.href = schema.items.$ref;
                                params_schema_body.push(schema_a);
                        } else {
                                const schema_span = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.cewt)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.span,schema.items.type);
                                params_schema_body.push(schema_span);
                        }
        
                }else if(schema.type=='object'){
                        
                }else{
                        const schema_span = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.cewt)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.span,schema.type);
                        params_schema_body.push(schema_span);
                }
                return params_schema_body;
        }
        

        createMethodTest(method){

                const test_div = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.ce)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.div);

                const test_title = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.cewt)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.h3,"Test");
                test_div.push(test_title);

                const test_monaco = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.ce)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.div);
                test_monaco.style="display:flex; flex-direction: row;  justify-content:space-around; overflow:hidden;"
                test_div.push(test_monaco);



                const test_input = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.cewt)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.div,"Input");
                
                test_input.id=`${method.name}_input`;
                const input = {
                        "id": 1,
                        "jsonrpc": "2.0",
                        "method": `${method.name}`,
                        "params": method.example ?? {}
                      }

                require(["vs/editor/editor.main"], function () {
                        let editor= monaco.editor.create(test_input, {
                                value: JSON.stringify(input,null,2),
                                language: 'json',
                                // readOnly:true,
                                // theme: 'vs-dark'
                        });
                        test_input.getValue = ()=> {
                                return editor.getValue()
                        }

                        test_input.clear = ()=> {
                                return editor.getModel().setValue(JSON.stringify(input,null,2));
                        }
                });

                test_input.style = "width: 500px;  height: 300px; border: 1px solid grey"

                test_monaco.push(test_input);

                const test_output = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.cewt)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.div,"Output");

                require(["vs/editor/editor.main"], function () {
                        let editor= monaco.editor.create(test_output, {
                                value: JSON.stringify({},null,2),
                                language: 'json',
                                readOnly:true,
                        });
                        
                        test_output.setValue = (data)=> {
                                return editor.getModel().setValue(JSON.stringify(data,null,2));
                        }

                        test_output.clear = ()=> {
                                return editor.getModel().setValue(JSON.stringify({},null,2));
                        }
                });

                test_output.style = "width: 500px;  height: 300px; border: 1px solid grey"

                test_monaco.push(test_output);

                const test_button_set = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.ce)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.div);
                
        
                const test_button = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.cewt)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.button,'Test');

                test_button.addEventListener('click', async () => {
                        const editor = test_input;
                        const data =  editor.getValue();

                        const result = await (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.postData)(this.server,data);

                        test_output.setValue(result)
                })

                test_button_set.push(test_button)

                const clear_button = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.cewt)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.button,"Clear");
                clear_button.addEventListener('click', () => {
                        test_input.clear();
                        test_output.clear();
                })

                test_button_set.push(clear_button)
                
                test_div.push(test_button_set);

                return test_div
        }


}















/***/ }),
/* 6 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createComponents)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);




function createComponents(components) {
        const {contentDescriptors, schemas, examples,links,errors,examplePairingObjects,tags} = components;



        const components_div = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.ce)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.div);

        const components_title = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createTitle)("Components");
        components_div.push(components_title);

        const components_ul = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.ce)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.ul);
        components_div.push(components_ul);

        const {schemaSet, schemaHTML} = new _schema_js__WEBPACK_IMPORTED_MODULE_2__["default"](schemas);
        const components_schema_li = schemaHTML;
        const components_examples_li = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.ce)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.li);
        const components_errors_li = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.ce)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.li);
        const components_tags_li = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.ce)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.li);
        
        components_ul.push(components_schema_li)
        components_ul.push(components_examples_li)
        components_ul.push(components_errors_li)
        components_ul.push(components_tags_li)
        

        
        

        return components_div;
}



/***/ }),
/* 7 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SchemaMaker)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



class SchemaMaker {

        constructor(schemas) {
                this.schemaSet = {};
                this.schemaHTML = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.ce)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.li);
                this.schemas = schemas;
                this.createSchemaSet();
                this.createSchemaHTML();
        }


        createSchemaSet() {

                const schemaEntries = Object.entries(this.schemas);
                const schemaQueue = schemaEntries.map(v => {
                        return { name: v[0], ...v[1] }
                });
                

                while (schemaQueue.length > 0) {
                        const schema = schemaQueue.shift();
                        const schemaRefs = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.findAllRefs)(schema);

                        if(schemaRefs.length>0){
                                if(this.isExistRef(schemaRefs)){
                                        this.schemaSet[schema.name] = schema;
                                
                                }else{
                                        schemaQueue.push(schema);
                                }
                        }else{        
                                
                                this.schemaSet[schema.name] =  schema;
                        }
                }

        }

        isExistRef(refs) {
                for (let i = 0; i < refs.length; i++) {
                        const ref = refs[i];
                        if (!this.schemaSet.hasOwnProperty(ref)) {
                                return false;
                        }
                }
                return true;
        }

        createSchemaHTML() {
                const schemas_title = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.cewt)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.h3, "Schema");
                this.schemaHTML.push(schemas_title);

                const schemas_ul = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.ce)(_constant_js__WEBPACK_IMPORTED_MODULE_1__.ul)
                this.schemaHTML.push(schemas_ul);

        }

}

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createDocs)
/* harmony export */ });
/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _servers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _methods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _components_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);





async function createDocs() {
        const jsonRequest = await fetch('http://localhost:3000/doc-json');
        const openrpc = await jsonRequest.json();
        console.log(openrpc)
        window.editor = {};
        const { info, servers, methods, components } = openrpc;

        const main_div = document.querySelector('#main');
        main_div.push = (item) => {
                main_div.appendChild(item)
        }

        


        const info_div = (0,_info_js__WEBPACK_IMPORTED_MODULE_0__["default"])(info);
        const {serversHTML, serverURL} = (0,_servers_js__WEBPACK_IMPORTED_MODULE_1__["default"])(servers); 
        const servers_div = serversHTML;
        const methods_div = new _methods_js__WEBPACK_IMPORTED_MODULE_2__["default"](methods, serverURL).methods_div;
        const components_div = (0,_components_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(components);

        main_div.push(info_div);
        main_div.push(servers_div);
        main_div.push(methods_div);
        main_div.push(components_div);
}

createDocs();
})();

/******/ })()
;