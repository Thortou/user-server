import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { typeOrmConfigModule } from './config/config.module';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [
    typeOrmConfigModule,
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: '.env'
    }),
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
