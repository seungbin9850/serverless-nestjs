import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/')
  async createUser(@Body() req: CreateUserDTO) {
    await this.userService.createUser(req);
  }
}
