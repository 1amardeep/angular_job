export const alphabetSet: string =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const numberSet: string = '1234567890';
export const symbolSet: string = '!@#$%^&*()_+';

export interface PwdMethods {
  disabledBtn(): boolean;
  generatePwd(): void;
}
