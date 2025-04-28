import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  welcome(): string {
    return "Welcome to our API, you're actually not welcome";
  }
}
