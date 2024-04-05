/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Post ,Get,Put, Param,Delete} from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.model';
import { UserUpdateDto } from './userUpdate.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  
  constructor(private readonly appService: AppService) {}

  @Post()
  async createUser(@Body() userDto:User)
  {
    return this.appService.createUser(userDto);
  }

  @Get()
  readuser()
  {
    return this.appService.readUser();
  }

  @Get(':id')
  getUserById(@Param ('id') id:string)
  {
    return this.appService.getUserbyId(id);
  }
  @Put(':id')
  async updateUser(@Param('id') id:string, @Body() updateData:UserUpdateDto
  ):Promise<User>
  {
    return this.appService.updateUser(id,updateData);
  }

  @Delete(':id')
  async deleteUser(@Param ('id') id:string)
  {
    return this.appService.deleteUser(id);
  }
}
