import { DeleteResult } from "typeorm";
import { createTagRequestDto } from "../dto/create-tag.request.dto";
import { TagResponseDto } from "../dto/tag.response.dto";
import { TagsResponseDto } from "../dto/tags.response.dto";
import { updateTagRequestDto } from "../dto/update-tag.request.dto";

export interface ITagService {
    createTag(param: createTagRequestDto): Promise<TagResponseDto>;
    getTags(): Promise<TagsResponseDto>;
    findTag(tagId: number): Promise<TagResponseDto>;
    updateTag(
        tagId: number,
        param: updateTagRequestDto,
    ): Promise<TagResponseDto>;
    deleteTag(tagId: number): Promise<DeleteResult>;
}