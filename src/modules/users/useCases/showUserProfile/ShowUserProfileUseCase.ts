import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userValidate = this.usersRepository.findById(user_id);

    if (!userValidate) {
      throw new Error("User not exist");
    }
    const user = this.usersRepository.findById(user_id);
    return user;
  }
}

export { ShowUserProfileUseCase };
