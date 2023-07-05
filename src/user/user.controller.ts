import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create.dto';
import { User } from './user.entity';
import { ReadUserDTO } from './dto/read.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    // @Get('/fetchList/:userId')
    // async fetch(@Param('userId') userId: string): Promise<User[]> {
    //     return this.userService.fetchList(userId);
    // }

    // // @Get('/fetchObject/:userId')
    // // async fetch(@Param('userId') userId: string): Promise<ReadUserDTO> {
    // //     return this.userService.fetchObject(userId);
    // // }


    @Post()
    async createUser(@Body() req: CreateUserDTO) {
        console.log(req);
        await this.userService.create(req);
    }

    // @Delete('delete/:id')
    // async deleteUser(@Param('id')id: number): Promise<void> {
    //     await this.userService.drop(id);
    // }

}
