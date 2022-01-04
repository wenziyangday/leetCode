namespace Utility {
  export function log(msg) {
    console.log(msg)
  }

  export function error(err) {
    console.log(err);
  }
}

Utility.error('klk');

interface StringValidator {
  isAcceptable(s: string): boolean
}

class LettersOnlyValidator implements StringValidator {
  isAcceptable(s: string): boolean {
    console.log(s, 'implement');
    return false;
  }
}

const lettersOnlyValidator = new LettersOnlyValidator();
lettersOnlyValidator.isAcceptable('kk');

namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean
  }

  export class LettersOnlyValidator implements StringValidator{
    isAcceptable(s: string): boolean {
      console.log(s);
      return false;
    }
  }
}

const validation = new Validation.LettersOnlyValidator();
validation.isAcceptable('命名空间处理')
