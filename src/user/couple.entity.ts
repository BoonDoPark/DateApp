import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserId } from "./userid.entity";

@Entity()
export class Couple {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    coupleid: string;

    @OneToOne(() => UserId, userId => userId.couple)
    @JoinColumn()
    userId: UserId
}