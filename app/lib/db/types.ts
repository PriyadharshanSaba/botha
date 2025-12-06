export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type UserWithOTP = User & {
  otp?: string;
  otpExpiry?: number;
};

/**
 * Data passed in when creating a user
 * (no id yet — DB driver assigns it)
 */
export type CreateUserInput = {
  firstName: string;
  lastName: string;
  email: string;
};

export interface DBDriver {
  createUser(data: CreateUserInput): Promise<User>;
  getUserByEmail(email: string): Promise<User | null>;
  saveOTP(email: string, otp: string, expiry: number): Promise<void>;
  verifyOTP(email: string, otp: string): Promise<boolean>;
}
