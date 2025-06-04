import { SetMetadata } from '@nestjs/common';

export const AuthenticatedAccess = () => SetMetadata('access', 'authenticated-access');
