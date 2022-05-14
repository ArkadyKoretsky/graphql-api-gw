import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'GW_COMMUNICATION', // name should be hidden in config file
        transport: Transport.TCP,
      },
    ]),
  ],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
