import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';

import { User } from './user.entity'

@Entity({ name: 'articles'})
export class Article extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(type => User, user => user.articles)

    @JoinColumn({ name: 'user_id' })
    user?: User;

    @Column('varchar', { name: 'title'})
    title: string;

    @Column('text', { name: 'content'})
    content: string;

    @CreateDateColumn({ name: 'created_at'})
    readonly createdAt!: Date;

    @UpdateDateColumn({ name: 'created_at'})
    readonly updatedAt!: Date;

}