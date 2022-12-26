import { MethodObject, OpenrpcDocument } from "./openrpc-common.interfaces";
export interface DenormalizedDoc extends Partial<OpenrpcDocument>{
        root?: {name:string};
        methods?: MethodObject[];
}