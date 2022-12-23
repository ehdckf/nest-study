import {
        INestApplication,
        INestApplicationContext,
        Logger,
} from '@nestjs/common';
import { validatePath } from '@nestjs/swagger/dist/utils/validate-path.util';
import { OpenrpcDocument } from './interfaces';
import { OpenRpcScanner } from './openrpo.scanner';

export class OpenRpcModule{
        private static readonly logger = new Logger(OpenRpcModule.name);

        public static createDocument(
                app:INestApplicationContext,
                // config:Omit<OpenrpcDocument, 'methods'>,
                options:Object  = {},
                ) {
                        const openRpcScanner = new OpenRpcScanner();
                        const document = openRpcScanner.scanApplication(app, options);

                        console.log(document)
                
                }
}
