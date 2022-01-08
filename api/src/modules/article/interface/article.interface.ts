import { DeleteResult } from "typeorm";
import { ArticleTagResponseDto } from "../dto/article-tag.response.dto";
import { ArticleResponseDto } from "../dto/article.response.dto";
import { ArticlesResponseDto } from "../dto/articles.response.dto";
import { createArticleTagRequestDto } from "../dto/create-article-tag.request.dto";
import { createArticleRequestDto } from "../dto/create-article.request.dto";
import { updateArticleRequestDto } from "../dto/update-article.request.dto";

export interface IArticleService {
    createArticle(param: createArticleRequestDto): Promise<ArticleResponseDto>;
    joinTag(param: createArticleTagRequestDto): Promise<ArticleTagResponseDto>;
    getArticles(): Promise<ArticlesResponseDto>;
    findArticle(articleId: number): Promise<ArticleResponseDto>;
    updateArticle(
        articleId: number,
        param: updateArticleRequestDto,
    ): Promise<ArticleResponseDto>;
    releaseTag(articleId: number, tagId: number): Promise<DeleteResult>;
    deleteArticle(articleId: number): Promise<DeleteResult>;
}