import { ApiProperty } from "@nestjs/swagger";

export class updateArticleRequestDto {
    @ApiProperty()
    userId: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    content: string;
}