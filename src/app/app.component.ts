import { Component } from '@angular/core';
import { PwdMethods, alphabetSet, numberSet, symbolSet } from './modal/const';
import { PwdService } from './service/pwd.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements PwdMethods {
  passwordLength = 0;
  includedChar = '';
  generatedPwd = '';
  alphabetChecked = false;
  numberChecked = false;
  symbolChecked = false;

  constructor(public service: PwdService) {}

  disabledBtn(): boolean {
    return !(
      this.passwordLength &&
      (this.alphabetChecked || this.numberChecked || this.symbolChecked)
    );
  }

  generatePwd(): void {
    this.includedChar = '';
    if (this.alphabetChecked) {
      this.includedChar += alphabetSet;
    }
    if (this.numberChecked) {
      this.includedChar += numberSet;
    }
    if (this.symbolChecked) {
      this.includedChar += symbolSet;
    }
    this.generatedPwd = this.service.passwordGenerator(
      this.passwordLength,
      this.includedChar
    );
  }
}
