import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Patch,
} from '@nestjs/common';
import { InboxService } from './inbox.service';
import { Prisma } from 'generated/prisma';
import { Access } from 'src/common/decorators/access-level-decorator';

@Controller('api/inbox')
export class InboxController {
  constructor(private readonly inboxService: InboxService) {}

  @Get('search')
  @Access('restrict')
  search(@Query('q') query: string) {
    return this.inboxService.search(query);
  }

  @Post()
  @Access('public')
  create(@Body() createInboxDto: Prisma.InboxMessageCreateInput) {
    return this.inboxService.create(createInboxDto);
  }

  @Get()
  @Access('restrict')
  findAll() {
    return this.inboxService.findAll();
  }

  @Get(':id')
  @Access('restrict')
  findOne(@Param('id') id: string) {
    return this.inboxService.findOne(+id);
  }

  @Patch(':id')
  @Access('restrict')
  markAsRead(@Param('id') id: string) {
    return this.inboxService.markAsRead(+id)
  }

  @Delete(':id')
  @Access('restrict')
  remove(@Param('id') id: string) {
    return this.inboxService.remove(+id);
  }
}
