import { SetMetadata } from '@nestjs/common';

export const RestrictAccess = () => SetMetadata('access', 'restrict-access');
