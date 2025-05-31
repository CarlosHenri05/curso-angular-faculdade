export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  dependentes?: IDependentes[];
}

export interface IDependentes {
  name: string;
  age: number;
}
