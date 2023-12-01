
import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class FortyTwoStrategy extends PassportStrategy(Strategy) {
  constructor(){
      super();
  }
}