import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';

import { Article } from './article.entity';

@Entity({ name: 'users'})
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: string;

    @Column('varchar', { name: 'name'})
    name: string;

    @Column('varchar', { name: 'age'})
    age: string;

    @CreateDateColumn({ name: 'created_at'})
    readonly createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at'})
    readonly updatedAt!: Date;

    @OneToMany(type => Article, article => article.user)
    articles?: Article[]
}