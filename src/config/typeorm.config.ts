import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import { IEnv } from "./env.interface";
import { ConfigService } from "@nestjs/config";
import { module } from "./model";

export enum Connection_DB {
    Main = 'main-connection'
}
export const typeOrmOption = (): TypeOrmModuleAsyncOptions => ({
    name: Connection_DB.Main,
    useFactory: (config: ConfigService<IEnv>) => ({
        type: 'postgres',
        host: config.get('DB_HOST'),
        port: config.get('DB_PORT'),
        username: config.get('DB_USERNAME'),
        database: config.get('DB_DATABASE'),
        password: config.get('DB_PASSWORD'),
        synchronize: true,
        entities: module
        
    }),
    inject: [ConfigService]
})