import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Couple } from "./couple.entity";

@Entity()
export class UserId {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userid: string;

    @OneToOne(() => Couple, couple => couple.userId)
    @JoinColumn()
    couple: Couple;
}