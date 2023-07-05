import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import { Any, Equal, In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO } from './dto/create.dto';
import { ReadUserDTO } from './dto/read.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}
    
    // async fetchList(userId: string): Promise<User[]> {
    //     return this.userRepository.findBy({coupleid: userId});
    // }

    // async fetchObject(userId: string): Promise<ReadUserDTO> {
    //     const now: Date = new Date();
    //     const coupleList = await this.userRepository.findOneBy({userid: userId});
    //     if (coupleList === undefined)
    //         throw new NotFoundException(`Not found userId : ${userId}`);
    //     const n: number = now.getTime() - coupleList.d_day.getTime();
    //     let result: number = Math.ceil(n / (1000*60 * 60 * 24));
        
    //     return {
    //         userId: coupleList.coupleid,
    //         coupleId: coupleList.coupleid,
    //         img: coupleList.img,
    //         userName: coupleList.username,
    //         d_day: result,
    //         tag: coupleList.tag,
    //         description: coupleList.description
    //     }
    // }


    async create(req: CreateUserDTO) {
        const newUser: User = this.userRepository.create({
            userid: req.userId,
            password: req.password,
            username: req.userName,
            birth: req.birth,
            d_day: req.d_day,
            tag: req.tag,
            description: req.description,
        })
        await this.userRepository.insert(newUser);
    }

    // async drop(id: number): Promise<void> {
    //     await this.userRepository.delete(id);
    // }

}
