import {BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne,JoinColumn, UpdateDateColumn } from 'typeorm'
import {User} from './User'

@Entity()

export class Activity extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tittle: string;

    @Column()
    description: string;

    @Column()
    state: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
    @ManyToOne(() => User, user => user.activities)
    @JoinColumn({ name: 'userId' }) //  Define explícitamente el nombre de la columna de la clave foránea
    user: User;

}
