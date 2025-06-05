import { SetMetadata } from '@nestjs/common';

export const CurrentUser = () => SetMetadata('isTheTargetUserTheCurrentUser', 'true');
