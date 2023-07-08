import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PwdService {
  constructor() {}

  passwordGenerator(pwdLength: number, includedChar: string) {
    let generatedPwd = '';
    for (let i = 0; i < pwdLength; i++) {
      generatedPwd +=
        includedChar[Math.floor(Math.random() * includedChar.length)];
    }
    return generatedPwd;
  }
}
