import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { HttpError } from 'src/exception';
import { UserRepository } from 'src/repositories';
import { hash, makeId } from 'src/utils';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async createUser(req: CreateUserDTO) {
    const { userId, password } = req;
    if (this.userRepository.findOne(userId))
      throw new HttpError(409, 'Already Exist User ID');
    const hashed = hash(password);
    const id = await makeId();
    const user = new User();
    user.id = id;
    user.userId = userId;
    user.password = hashed;
    await this.userRepository.save(user);
  }
}
