import { ApiProperty } from "@nestjs/swagger";

export class createArticleRequestDto {
    @ApiProperty()
    userId: number;

    @ApiProperty()
    title: string;

    @ApiProperty()
    content: string;
}