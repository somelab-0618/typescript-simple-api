import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class createArticleRequestDto {
    @IsNotEmpty()
    @ApiProperty()
    userId: number;

    @IsNotEmpty()
    @ApiProperty()
    title: string;

    @IsNotEmpty()
    @ApiProperty()
    content: string;
}