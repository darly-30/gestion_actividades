import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import {Activity } from './activity.entity'


@Entity()

export class User extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column({unique: true})
    email: string

    @Column()
    password: string

    @OneToMany(() => Activity, activity => activity.user)
    activities: Activity[];
}
