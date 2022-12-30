import { Type } from '@nestjs/common';
import { InstanceWrapper } from '@nestjs/core/injector/instance-wrapper';
import { Observable } from 'rxjs';


export interface RpcMethodHandler {
        methodName: string;
        callback: (...args:any[]) => Observable<any> | Promise<any> | any;
}
