import { ApiProperty } from "@nestjs/swagger";
import { Article } from "src/database/entities/article.entity";

export class ArticlesResponseDto {
    @ApiProperty()
    articles: Article[];
}