import {ErrorHandler} from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
  handleError(error) {
    alert('An unexpected errors occured.');
    console.log(error);
  }
}
