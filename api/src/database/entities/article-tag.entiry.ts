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
    article_id: number;

    @ManyToOne(() => Article, (article) => article.id, {
        onDelete: 'CASCADE'
    })

    @JoinColumn({ name: 'article_id'})
    article!: Article;

    @PrimaryColumn()
    tag_id: number;

    @ManyToOne(() => Tag, (tag) => tag.id, {
        onDelete: 'CASCADE'
    })

    @JoinColumn({ name: 'tag_id'})
    tag!: Tag;

    @CreateDateColumn({ name: 'created_at'})
    readonly createdAt!: Date;

    @UpdateDateColumn({ name: 'created_at'})
    readonly updatedAt!: Date;
}