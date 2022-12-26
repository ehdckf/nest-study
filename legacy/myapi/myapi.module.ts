import { Injectable } from "@nestjs/common/interfaces";
import { NestContainer } from "@nestjs/core";
import { InstanceWrapper } from "@nestjs/core/injector/instance-wrapper";
import { InstanceToken, Module } from '@nestjs/core/injector/module';
import { MyapiExplorer } from "./myapi.explorer";

export class MyApiModule{
        private readonly explorer = new MyapiExplorer();

         test(app){
                const container:NestContainer = app.container;
                const modules:Module[] = [...container.getModules().values()];
                const denormalizedHandler = modules.reduce((handlers,{components,metatype,relatedModules,routes})=>{
                        let allComponents = new Map([...components,...routes]);
                        const scanModule = this.scanModuleComponents(
                                allComponents
                                );
                        return [...handlers,...scanModule]
                },[])
                                
                        

                return app;
        }

        scanModuleComponents(components:Map<InstanceToken,InstanceWrapper<Injectable>>){

               const denormalizedArray = [...components.values()].reduce(
                        (denormalized, comp) => {

                                const object = this.explorer.explorerMyApiServices(
                                                comp
                                        );
                                        return [...denormalized, ...object];
                        },
                        []
                )

               return '1'
        }

}