import { Module, Logger } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';
import mongoose from 'mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://das1998lipun:W7i5dhYTAL2Nkz8H@cluster0.xnjvt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    TodoModule,
  ],
})
export class AppModule {
  private readonly logger = new Logger(AppModule.name);

  constructor() {
    mongoose.connection.on('connected', () => {
      this.logger.log('MongoDB connected');
    });

    mongoose.connection.on('error', (err) => {
      this.logger.error('MongoDB connection error:', err);
    });
  }
}
