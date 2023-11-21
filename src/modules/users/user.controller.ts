import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dtos/user.dto";
import { UserEntity } from "./entities/user.entity";

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ){}

    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
        return this.userService.create(createUserDto)
    }

    @Get()
    findAll(): Promise<UserEntity[]> {
        return this.userService.findAll()
    }
}