import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'tags'})
export class Tag extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('varchar', { name: 'name'})
    name: string;

    @CreateDateColumn({ name: 'created_at'})
    readonly createdAt!: Date;

    @UpdateDateColumn({ name: 'created_at'})
    readonly updatedAt!: Date;

}