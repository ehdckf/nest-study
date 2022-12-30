import { SchemaObject } from "@nestjs/swagger/dist/interfaces/open-api-spec.interface";
import { ModelPropertiesAccessor } from "@nestjs/swagger/dist/services/model-properties-accessor";
import { SchemaObjectFactory } from "@nestjs/swagger/dist/services/schema-object-factory";
import { SwaggerTypesMapper } from "@nestjs/swagger/dist/services/swagger-types-mapper";
import { getSchemaPath } from "@nestjs/swagger";
import { MethodObject } from "../interfaces";
import { OpenRpcMethodOptions } from "../../decorators";

export class MethodObjectFactory{
        private readonly modelPropertiesAccessor = new ModelPropertiesAccessor();
        private readonly swaggerTypesMapper = new SwaggerTypesMapper();
        private readonly schemaObjectFactory = new SchemaObjectFactory(
                        this.modelPropertiesAccessor,
                        this.swaggerTypesMapper,
                )
        
                create(
                        method: OpenRpcMethodOptions,
                        produces: string[],
                        schemas: Record<string, SchemaObject>,
                        ) {

                                let params;
                                let result;

                                if(method.params){        
                                        const methodParamsType = method.params as Function;
                                        const paramsRef = this.schemaObjectFactory.exploreModelSchema(methodParamsType, schemas)
                                        params = { $ref:getSchemaPath(paramsRef)}
                                }

                                if(method.result){
                                        const methodResultType = method.result as Function;
                                        const resultRef = this.schemaObjectFactory.exploreModelSchema(methodResultType,schemas);
                                        result = { $ref: getSchemaPath(resultRef)}
                                }
                                
                                const methodObject = {...method};
                                if(method.params) methodObject.params = params;
                                if(method.result) methodObject.result = result;

                                return methodObject
                        }
}