import { SetMetadata } from '@nestjs/common';

export const isPublic = () => SetMetadata('isThisRoutePublic', 'true');
