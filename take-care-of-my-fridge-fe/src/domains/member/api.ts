// MyInfoResponse.java와 필드·enum을 맞춘다.
export interface MyInfoResponse {
  memberId: number;
  email: string;
  nickname: string;
  role: 'USER' | 'ADMIN';
  status: 'ACTIVE' | 'SUSPENDED';
  tastes: Array<'SALTY' | 'SWEET' | 'SPICY' | 'UMAMI' | 'MILD'>;
  createdAt: string;
}
