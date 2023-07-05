import { IsString } from "class-validator";

export class CreateUserDTO {
    userId: string;
    password: string;
    img: string;
    userName: string;
    birth: Date;
    d_day: Date;
    tag: string[];
    description: string;
    coupleId: string;
}