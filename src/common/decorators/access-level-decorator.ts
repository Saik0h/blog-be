import { SetMetadata } from '@nestjs/common';

export type AccessLevel = 'public' | 'authorizedOnly' | 'restrict';

export const ACCESS_KEY = 'access';
export const Access = (level: AccessLevel) => SetMetadata(ACCESS_KEY, level);