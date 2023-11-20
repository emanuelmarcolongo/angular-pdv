export type UserEntity = {
  id: number;
  email: string;
  password: string;
  type: string;
};

export type UserDto = Omit<UserEntity, 'id'>;
