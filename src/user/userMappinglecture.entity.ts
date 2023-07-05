import { Entity, Generated, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Lecture } from "./lecture.entity";

@Entity()
export class UserMappingLecture {
    @PrimaryGeneratedColumn()
    @Generated('increment')
    id: number;

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn()
    user: User;
    
    @ManyToOne(() => Lecture, (lecture) => lecture.id)
    @JoinColumn()
    lecture: Lecture;
    
}