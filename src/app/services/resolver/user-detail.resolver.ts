import { ResolveFn } from '@angular/router';
import {IUser} from "../../interfaces";
import {inject} from "@angular/core";
import {UserServiceService} from "../user-service.service";

export const userDetailResolver: ResolveFn<IUser> = (route, state) => {
  const userService = inject(UserServiceService)
  const {id} = route.params
  return userService.getById(id)
};
