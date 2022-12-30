import {
        INestApplication,
        INestApplicationContext,
        Logger,
} from '@nestjs/common';
import { SwaggerDocumentOptions } from '@nestjs/swagger';
import { validatePath } from '@nestjs/swagger/dist/utils/validate-path.util';
import * as jsyaml from 'js-yaml';
import { openRpcJavascript, oprnRpcHtml } from './builder';
import { OpenrpcDocument } from './interfaces/openrpc-common.interfaces';
import { OpenRpcScanner } from './openrpc.scanner';


export interface OpenrpcDocumentOptions extends SwaggerDocumentOptions { }

export class OpenRpcModule {
        private static readonly logger = new Logger(OpenRpcModule.name);

        public static createDocument(
                app: INestApplicationContext,
                config?: Omit<OpenrpcDocument, 'methods'>,
                options: OpenrpcDocumentOptions = {},
        ): OpenrpcDocument {
                const openrpcScanner = new OpenRpcScanner();
                const document = openrpcScanner.scanApplication(app, options);
                document.components = {
                        ...(config.components || {}),
                        ...document.components,
                }

                return {
                        openrpc: '1.2.6',
                        info: undefined,
                        methods: [],
                        ...config,
                        ...document,
                }
        }

        public static async setup(
                path: string,
                app: INestApplication,
                document: OpenrpcDocument,
        ) {
                const httpAdapter = app.getHttpAdapter();
                const finalPath = validatePath(path);
                const yamlDocument = jsyaml.dump(document);
                const jsonDocument = JSON.stringify(document);
                const html = oprnRpcHtml();
                const js = openRpcJavascript();
                httpAdapter.get(finalPath, (req, res) => {
                        console.log(html)
                        res.type('text/html');
                        res.send(html);
                });

                httpAdapter.get(finalPath+'/main.js', (req, res) => {
                        console.log(html)
                        res.type('text/javascript');
                        res.send(js);
                });

                httpAdapter.get(finalPath + '-json', (req, res) => {
                        res.type('application/json');
                        res.send(jsonDocument);
                });

                httpAdapter.get(finalPath + '-yaml', (req, res) => {
                        res.type('text/yaml');
                        res.send(yamlDocument);
                });

        }
}