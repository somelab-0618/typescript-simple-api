import { ApiProperty } from "@nestjs/swagger";
import { ArticleTag } from "src/database/entities/article-tag.entity";

export class ArticleTagResponseDto {
    @ApiProperty()
    articleTag: ArticleTag;
}