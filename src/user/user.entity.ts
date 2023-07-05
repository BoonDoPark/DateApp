import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserMappingLecture } from "./userMappinglecture.entity";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    userid: string;

    @Column()
    password: string;

    @Column({nullable: true})
    img: string;

    @Column()
    username: string;

    @Column()
    birth: Date;

    @Column()
    d_day: Date;

    @Column({
        type: 'text',
        nullable: true,
    })
    tag: string[];

    @Column({nullable: true})
    description: string;

    @OneToMany(() => UserMappingLecture, (userMappingLecture) => userMappingLecture.user)
    userMappingLectureList: UserMappingLecture[];
}