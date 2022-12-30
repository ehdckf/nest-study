import { DynamicModule, Inject, Module, OnModuleInit, Provider } from '@nestjs/common';
import { ApplicationConfig, HttpAdapterHost, ModuleRef, NestContainer, DiscoveryModule } from '@nestjs/core';
// import { JsonRpcServer } from './json-rpc-server';
// import { JsonRpcConfig, JsonRpcModuleAsyncOptions, JsonRpcOptionsFactory } from './index';
// import { RpcRoutesResolver } from './rpc-routes-resolver';
import { Injector } from '@nestjs/core/injector/injector';
import { validatePath } from '@nestjs/swagger/dist/utils/validate-path.util';
// import { JsonRpcExplorer } from './json-rpc-explorer';