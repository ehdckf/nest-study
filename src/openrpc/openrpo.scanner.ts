import { INestApplicationContext, Type } from '@nestjs/common';
import { MODULE_PATH } from '@nestjs/common/constants';
import { Injectable } from '@nestjs/common/interfaces';
import { NestContainer } from '@nestjs/core/injector/container';
import { InstanceWrapper } from '@nestjs/core/injector/instance-wrapper';
import { InstanceToken, Module } from '@nestjs/core/injector/module';
import { SchemaObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';
import { ModelPropertiesAccessor } from '@nestjs/swagger/dist/services/model-properties-accessor';
import { SchemaObjectFactory } from '@nestjs/swagger/dist/services/schema-object-factory';
import { SwaggerTypesMapper } from '@nestjs/swagger/dist/services/swagger-types-mapper';
import { stripLastSlash } from '@nestjs/swagger/dist/utils/strip-last-slash.util';
import { flatten, isEmpty } from 'lodash';
import { OpenRpcModule } from './openrpc.module';
import { OpenrpcDocument } from './interfaces';
import { OpenRpcExplorer } from './openrpc.explorer';
import {OpenRpcTransformer} from './openrpc.transformer'

export class OpenRpcScanner {
        private readonly transformer = new OpenRpcTransformer();
        private readonly explorer = new OpenRpcExplorer();
        private readonly modelPropertiesAccessor = new ModelPropertiesAccessor();
        private readonly swaggerTypesMapper = new SwaggerTypesMapper();
        private readonly schemaObjectFactory = new SchemaObjectFactory(
          this.modelPropertiesAccessor,
          this.swaggerTypesMapper,
        );
        scanApplication(app:INestApplicationContext) {
                
        }       
}