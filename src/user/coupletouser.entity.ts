import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CoupleToUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}