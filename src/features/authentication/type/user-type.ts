interface ILoginUser {
  email: string;
  password: string;
}

interface IRegisterUser extends ILoginUser {
  name: string;

  confirmPassword: string;
}

export type { ILoginUser, IRegisterUser };
