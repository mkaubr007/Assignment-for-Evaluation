import express, { IRouter } from 'express';
import adminController from '../controllers/admin.controller';
import userValidator from '../validators/user.validator';


class AdminRoutes {
  private AdminController = new adminController();
  private router = express.Router();
  private UserValidator = new userValidator();

  constructor() {
    this.routes();
  }

  private routes = () => {
    //route to get all users
    this.router.get('', this.AdminController.getAllUsers);

    //route to create a new user
    this.router.post(
      '/register',
      this.UserValidator.newUser,
      this.AdminController.newAdmin
    );

    // //route to update a single user
    this.router.put('/:_id', this.AdminController.updateUser);

    // //route to delete a single user
    this.router.delete('/:_id', this.AdminController.deleteUser);
  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default AdminRoutes;
