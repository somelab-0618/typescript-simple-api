import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class createArticleTagRequestDto {
    @IsNotEmpty()
    @ApiProperty()
    articleId: number;

    @IsNotEmpty()
    @ApiProperty()
    tagId: number;
}