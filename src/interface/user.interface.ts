export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
  refreshToken:string,
  createdAt: string;
  updatedAt: string;
}