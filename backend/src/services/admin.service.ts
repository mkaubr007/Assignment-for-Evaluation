import User from '../models/user.model';
import { IUser, IUserFilterParams, IUserPaginationResult } from '../interfaces/user.interface';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

class AdminService {

  //get all users
  public getAllUsers = async (params: IUserFilterParams): Promise<IUserPaginationResult> => {
    const { page = 1, limit = 10, name, email, role } = params;
    const filter: any = {};
    if (name) {
      filter.name = { $regex: name, $options: 'i' }; // Case-insensitive search for name
    }
    if (email) {
      filter.email = { $regex: email, $options: 'i' }; // Case-insensitive search for email
    }
    if (role) {
      filter.role = role; 
    }
    const skip = (page - 1) * limit;
    const users = await User.find(filter)
    .limit(limit)
    .skip(skip);
    const total = await User.countDocuments(filter);
    return { users, total };
  };

  //create new user
  public newAdmin = async (body: IUser): Promise<IUser> => {
    const existingUser = await User.findOne({ email: body.email });
    if(existingUser){
      throw new Error('Email already exists');
    }else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(body.password, salt);
      body.password = hashedPassword;
      body.role = body.role || 'admin';
      const data = await User.create(body);
      return data;
    }
  };


  //update a user
  public updateUser = async (_id: string, body: IUser): Promise<IUser> => {
    const data = await User.findByIdAndUpdate(
      {
        _id
      },
      body,
      {
        new: true
      }
    );
    return data;
  };

  //delete a user
  public deleteUser = async (_id: string): Promise<string> => {
    await User.findByIdAndDelete(_id);
    return '';
  };

}

export default AdminService;
