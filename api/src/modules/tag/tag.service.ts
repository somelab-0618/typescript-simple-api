import { Injectable, NotFoundException } from '@nestjs/common';
import { Tag } from 'src/database/entities/tag.entity';
import { ArticleTagRepository } from 'src/ripositories/article-tag.repository';
import { TagRepository } from 'src/ripositories/tag.repository';
import { DeleteResult } from 'typeorm';
import { createTagRequestDto } from './dto/create-tag.request.dto';
import { TagResponseDto } from './dto/tag.response.dto';
import { TagsResponseDto } from './dto/tags.response.dto';
import { updateTagRequestDto } from './dto/update-tag.request.dto';
import { ITagService } from './interface/tag.interface';

@Injectable()
export class TagService implements ITagService  {
  constructor(
    private readonly _tagRepository: TagRepository,
    private readonly _articleTagRepository: ArticleTagRepository,
  ) {}

  //tag作成処理
  async createTag(param: createTagRequestDto): Promise<TagResponseDto> {
    const newTag: Tag = new Tag();
    const newTagParam: Tag = this._tagRepository.create({
      ...newTag,
      ...param,
    });
    const tag: Tag = await this._tagRepository.save(newTagParam);
    return { tag };
  }

  //tag全件取得処理
  async getTags(): Promise<TagsResponseDto>  {
    const tags = await this._tagRepository.find();
    if (!tags) throw new NotFoundException();
    return { tags };
  }

  //tag取得処理
  async findTag(tagId: number): Promise<TagResponseDto> {
    const tag = await this._tagRepository.findOne(tagId);
    if (!tag) throw new NotFoundException();
    return { tag };
  }

  //tag更新処理
  async updateTag(tagId: number, param: updateTagRequestDto): Promise<TagResponseDto> {
    const origin = await this._tagRepository.findOne(tagId);
    if (!origin) throw new NotFoundException();
    const tag = await this._tagRepository.save({ ...origin, ...param });
    return { tag };
  }

  //tag削除処理
  async deleteTag(tagId: number): Promise<DeleteResult> {
    const deleteArticleTag: DeleteResult = await this._articleTagRepository.delete({ tagId: tagId });

    const result = await this._tagRepository.delete(tagId);

    return result;
  }
}
