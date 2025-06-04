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

@Controller('inbox')
export class InboxController {
  constructor(private readonly inboxService: InboxService) {}

  @Get('search')
  search(@Query('q') query: string) {
    return this.inboxService.search(query);
  }

  @Post()
  create(@Body() createInboxDto: Prisma.InboxMessageCreateInput) {
    return this.inboxService.create(createInboxDto);
  }

  @Get()
  findAll() {
    return this.inboxService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inboxService.findOne(+id);
  }

  @Patch(':id')
  markAsRead(@Param('id') id: string) {
    return this.inboxService.markAsRead(+id)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inboxService.remove(+id);
  }
}
