import { CounterSchema } from "./Counter/model/types/counterSchema";
import { Counter } from "./Counter/ui/Counter";
import { counterReducer } from "./Counter/model/slice/counterSlice";
import { userReducer, userActions } from './User/model/slice/userSlice'
import { IUser, UserSchema } from './User/model/types/user'
import { getUserAuthData } from "./User/model/selectors/getUserAuthData";
import { profileActions, profileReducer } from "./Profile/model/slice/profileSlice";
import { IProfile, ProfileSchema } from "./Profile/model/types/profile";
import { fetchProfileData } from "./Profile/model/services/fetchProfileData/fetchProfileData";
import { ProfileCard } from './Profile/ui/ProfileCard/ProfileCard';

export { 
    CounterSchema, 
    Counter, 
    counterReducer, 
    userReducer, 
    userActions, 
    IUser, 
    UserSchema, 
    getUserAuthData,
    IProfile, 
    ProfileSchema, 
    profileActions, 
    profileReducer,
    fetchProfileData,
    ProfileCard
};