import { SetMetadata } from '@nestjs/common';

export const AllowPublicAccess = () => SetMetadata('access', 'allow-public-access');
