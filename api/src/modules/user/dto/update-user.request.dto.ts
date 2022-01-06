import { ApiProperty } from "@nestjs/swagger";

export class updateUserRequestDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    age: number;
}