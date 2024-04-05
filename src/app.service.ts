/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './user.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class AppService {
  constructor(@InjectModel('user') private readonly userModel: Model<UserDocument>) { }

  //Creating a user
  async createUser(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  //reading a user collection
  async readUser() {
    try {
      const response = await this.userModel.find({});
      return response
    } catch (error) {
      throw error;
    }

  }

  //getting user by id
  async getUserbyId(id){
    return await this.userModel.findById(id);
  }

  //updating the data
  async updateUser(id, data): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, data, { new: true });
  }

  //deleting the data
  async deleteUser(id) {
    return this.userModel.findByIdAndDelete(id);
  }
}
