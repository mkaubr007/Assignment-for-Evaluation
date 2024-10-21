import { Schema, model } from 'mongoose';
import { IUser } from '../interfaces/user.interface';
import { required } from '@hapi/joi';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum:['user', 'admin'],
      default: 'user'
    }
  },
  {
    timestamps: true
  }
);

export default model<IUser>('User', userSchema);
