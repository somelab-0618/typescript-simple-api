import { createUserRequestDto } from "../dto/create-user.request.dto";
import { UserResponseDto } from "../dto/user.response.dto";
import { UsersResponseDto } from "../dto/users.response.dto";
import { updateUserRequestDto } from "../dto/update-user.request.dto";

export interface IUserService {
    createUser(param: createUserRequestDto): Promise<UserResponseDto>;
    getUsers(): Promise<UsersResponseDto>;
    findUser(userId: string): Promise<UserResponseDto>;
    updateUser(
        userId: string,
        param: updateUserRequestDto,
    ): Promise<UserResponseDto>;
}