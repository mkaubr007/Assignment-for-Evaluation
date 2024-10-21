import { Document } from 'mongoose';

export interface IUser extends Document {
  _id: string | number;
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
}

export interface IUserFilterParams {
  page?: number;
  limit?: number;
  name?: string;
  email?: string;
  role?: 'user' | 'admin';
}

export interface IUserPaginationResult {
  users: IUser[];
  total: number;
}