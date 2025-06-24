import {BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, Unique} from 'typeorm'
import {Activity } from './Activity'

@Entity()

export class User extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    password: string
    @OneToMany(() => Activity, activity => activity.user)
    activities: Activity[];
}
