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

    @Column('varchar', { name: 'userId'})
    userId: string;

    @ManyToOne(type => User, user => user.articles)
    @JoinColumn({ name: 'userId' })
    user?: User;

    @Column('varchar', { name: 'title'})
    title: string;

    @Column('text', { name: 'content'})
    content: string;

    @CreateDateColumn({ name: 'created_at'})
    readonly createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at'})
    readonly updatedAt!: Date;

}