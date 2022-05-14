import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('GW_COMMUNICATION') private readonly client: ClientProxy, // should be hidden in config file
  ) {}

  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  getAllUsers(): Observable<User[]> {
    return this.client.send({ sentFrom: 'ApiGw', cmd: 'get-users' }, {});
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
