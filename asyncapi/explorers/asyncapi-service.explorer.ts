import { Type } from '@nestjs/common';
import { DECORATORS } from '..';

export const exploreAsyncapiServiceMetadata = (metatype: Type<unknown>) => {
  console.log(metatype)
  console.log(Reflect.getMetadata(DECORATORS.ASYNCAPI_SERVICE, metatype))
  return Reflect.getMetadata(DECORATORS.ASYNCAPI_SERVICE, metatype);
};
