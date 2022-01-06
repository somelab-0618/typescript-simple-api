import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';

import { Article } from './article.entity';
import { Tag } from './tag.entity';

@Entity({ name: 'article-tag'})
export class ArticleTag extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @PrimaryColumn()
    articleId: number;

    @ManyToOne(() => Article, (article) => article.id, {
        onDelete: 'CASCADE'
    })

    @JoinColumn({ name: 'articleId'})
    article!: Article;

    @PrimaryColumn()
    tagId: number;

    @ManyToOne(() => Tag, (tag) => tag.id, {
        onDelete: 'CASCADE'
    })

    @JoinColumn({ name: 'tagId'})
    tag!: Tag;

    @CreateDateColumn({ name: 'created_at'})
    readonly createdAt!: Date;

    @UpdateDateColumn({ name: 'created_at'})
    readonly updatedAt!: Date;
}
