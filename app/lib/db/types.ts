export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  verified: boolean;
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
  checkRateLimit(email: string): Promise<{ allowed: boolean; attemptsLeft: number }>;
  recordOtpAttempt(email: string): Promise<void>;
  markUserVerified(email: string): Promise<void>;
  markChapterViewed(userId: string, moduleId: string, chapterNumber: number): Promise<void>;
  hasCompletedChapter(userId: string, moduleId: string, chapterNumber: number): Promise<boolean>;
  getLastCompletedChapter(userId: string): Promise<{moduleId: string | null; chapterNumber: number;}>;
  getAllProgress(userId: string): Promise<Record<string, number>>;
}
