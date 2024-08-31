import { CounterSchema } from "./Counter/model/types/counterSchema";
import { Counter } from "./Counter/ui/Counter";
import { counterReducer } from "./Counter/model/slice/counterSlice";
import { userReducer, userActions } from './User/model/slice/userSlice'
import { IUser, UserSchema } from './User/model/types/user'
import { getUserAuthData } from "./User/model/selectors/getUserAuthData";


export { CounterSchema, Counter, counterReducer, userReducer, userActions, IUser, UserSchema, getUserAuthData };