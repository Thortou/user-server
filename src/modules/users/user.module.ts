import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./entities/user.entity";
import { Connection_DB } from "src/config/typeorm.config";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { userModel } from ".";

@Module({
    imports: [TypeOrmModule.forFeature(userModel, Connection_DB.Main)],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {}