import { Injectable } from '@nestjs/common';
import { User } from '../../entities/user.entity';
import { HttpError } from '../../exception';
import { UserRepository } from '../../repositories';
import { hash, makeId } from '../../utils';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async createUser(req: CreateUserDTO) {
    const { userId, password } = req;
    if (await this.findUser(userId))
      throw new HttpError(409, 'Already Exists User');
    const hashed = hash(password);
    const id = await makeId();
    const user = new User();
    user.id = id;
    user.userId = userId;
    user.password = hashed;
    await this.userRepository.save(user);
  }

  private async findUser(userId: string) {
    const user = await this.userRepository.findOneById(userId);
    if (user) return true;
    return false;
  }
}
