import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
//import { AuthModule } from './auth/auth.module';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ProductsModule } from './products/products.module';
@Module({
  imports: [ProductsModule,MongooseModule.forRoot('mongodb://localhost/nest')],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
