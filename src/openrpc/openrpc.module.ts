import {
        INestApplication,
        INestApplicationContext,
        Logger,
} from '@nestjs/common';
import { SwaggerDocumentOptions } from '@nestjs/swagger';
import { validatePath } from '@nestjs/swagger/dist/utils/validate-path.util';
import jsyaml from 'js-yaml';
import { OpenrpcDocument } from './interfaces/openrpc-common.interfaces';
import { OpenRpcScanner } from './openrpc.scanner';

export class OpenRpcModule{
        private static readonly logger = new Logger(OpenRpcModule.name);

        public static createDocument(
                app:INestApplicationContext,
                config?: Omit<OpenrpcDocument,'methods'>,
                ){
                        const openrpcScanner = new OpenRpcScanner();
                        const document = openrpcScanner.scanApplication(app);
                        console.log('document:: ');
                        console.log(document)
                }
        

}