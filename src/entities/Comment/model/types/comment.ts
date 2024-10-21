import { IUser } from "entities";

export interface Comment {
    id: string;
    user: IUser;
    text: string;
}