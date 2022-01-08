import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class createTagRequestDto {
    @IsNotEmpty()
    @ApiProperty()
    name: string;
}