import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User | void {
    const usersAlreadyExists = this.usersRepository.findByEmail(email);

    if (usersAlreadyExists) {
      throw new Error("Users already exists");
    }

     return this.usersRepository.create({ email, name });
  }
}

export { CreateUserUseCase };
