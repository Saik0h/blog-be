import { SetMetadata } from '@nestjs/common';

export const AuthenticatedAccess = () => SetMetadata('isAuthenticated', 'true');
