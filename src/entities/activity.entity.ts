import {BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne,JoinColumn, UpdateDateColumn } from 'typeorm'
import {User} from './user.entity'

@Entity()

export class Activity extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    state: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
    @ManyToOne(() => User, user => user.activities)
    @JoinColumn({ name: 'userId' }) 
    user: User;

}
