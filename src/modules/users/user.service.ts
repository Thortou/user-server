import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectDataSource } from "@nestjs/typeorm";
import { Connection_DB } from "src/config/typeorm.config";
import { DataSource } from "typeorm";
import { CreateUserDto } from "./dtos/user.dto";
import { UserEntity } from "./entities/user.entity";
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
    constructor(
        @InjectDataSource(Connection_DB.Main)
        private _dataSource: DataSource
    ) { }

    async create(createUserDto: CreateUserDto): Promise<any> {
        const user = new UserEntity();
        user.username = createUserDto.username;
        user.password = await bcrypt.hash(createUserDto.password, 10);
        user.tel = createUserDto.tel;

        if (createUserDto.password !== createUserDto.comfirm_pass) throw new NotFoundException('comfirm wrong!!!')

        return await this._dataSource.getRepository(UserEntity).save(user)
    }

    async findAll(): Promise<UserEntity[]> {
        const result = await this._dataSource.getRepository(UserEntity)
            .find()
        return result
    }
}