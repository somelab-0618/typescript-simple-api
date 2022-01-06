import { ApiProperty } from "@nestjs/swagger";
import { Article } from "src/database/entities/article.entity";

export class ArticleResponseDto {
    @ApiProperty()
    article: Article;
}