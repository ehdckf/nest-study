import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class DogId {
  @ApiProperty()
  readonly id: number;
}

export class Dog {
  @ApiProperty()
  readonly id: DogId;

  @ApiProperty()
  readonly name: string;
}

export class Dogs {
  @ApiProperty()
  readonly dogs: Dog[];
}
