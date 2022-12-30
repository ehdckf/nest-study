import { INestApplicationContext} from '@nestjs/common'
import { OpenRpcDocumentBuilder, OpenRpcModule, ServerObject } from './openrpc/doc'

export async function makeOpenRpcDocument(app:INestApplicationContext) {
        const openrpcServer: ServerObject = {
                url: `http://localhost:3000`,
                name:"catdog server",
                description:"this is catdog server"
        }

        const openrpcOptions = new OpenRpcDocumentBuilder()
                .setTitle('Catdog')
                .setDescription('캣독')
                .setVersion('1.0.0')
                .addServer(openrpcServer)
                .build();
        return OpenRpcModule.createDocument(app,openrpcOptions);

}
