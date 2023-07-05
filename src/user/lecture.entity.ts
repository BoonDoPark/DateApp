import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserMappingLecture } from "./userMappinglecture.entity";

@Entity()
export class Lecture {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    lectureName: string;

    @Column()
    professorName: string;
    
    @OneToMany(() => UserMappingLecture, (userMappingLecture) => userMappingLecture.lecture)
    userMappingLectureList: UserMappingLecture[];
}