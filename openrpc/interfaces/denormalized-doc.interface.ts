import { OpenrpcDocument, MethodObject } from "./index";
export interface DenormalizedDoc extends Partial<OpenrpcDocument> {
        root?: {name:string} & MethodObject;
}
