import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InboxService } from './inbox.service';
import { CreateInboxDto } from './dto/create-inbox.dto';
import { UpdateInboxDto } from './dto/update-inbox.dto';
import { Prisma } from 'generated/prisma';
import { Access } from 'src/common/decorators/access-level-decorator';

@Controller('api/inbox')
export class InboxController {
  constructor(private readonly inboxService: InboxService) {}

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

  @Delete(':id')
  @Access('restrict')
  remove(@Param('id') id: string) {
    return this.inboxService.remove(+id);
  }
}
