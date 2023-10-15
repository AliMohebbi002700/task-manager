export interface IAuthContainerProps {
  header: string;
  children: React.ReactNode;
}

export interface ILoginFormData {
  email: string;
  password: string;
}

export interface IRegisterFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  guidelines: boolean;
}

export interface IForgotPassFormData {
  email: string;
}

export interface IResetPassFormData {
  password: string;
  confirmPassword: string;
}
export interface IUserInfoFormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export interface IProfileSideBarProps {
  children: React.ReactNode;
  selectedPage: (data: "userinfo" | "accountinfo" | "accountsetting") => void;
}
