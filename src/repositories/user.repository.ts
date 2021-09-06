import { User } from '../entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findOneById(userId: string) {
    return await this.createQueryBuilder()
      .where('user_id = :userId', {
        userId,
      })
      .getOne();
  }
}
