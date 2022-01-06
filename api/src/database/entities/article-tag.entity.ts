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

@Entity({ name: 'articles-tags'})
export class ArticleTag extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Article, (article) => article.id, {
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: "articleId" })
    @PrimaryColumn()
    articleId: number;

    @ManyToOne(() => Tag, (tag) => tag.id, {
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: "tagId" })
    @PrimaryColumn()
    tagId: number;

    @JoinColumn()
    article!: Article;
    @JoinColumn()
    tag!: Tag;

    @CreateDateColumn({ name: 'created_at'})
    readonly createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at'})
    readonly updatedAt!: Date;
}
