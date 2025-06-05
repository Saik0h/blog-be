import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FaqService } from './faq.service';
import { Prisma } from 'generated/prisma';
import { isPublic } from 'src/common/decorators/is-public.decorator';

@Controller('faq')
export class FaqController {
  constructor(private readonly faqService: FaqService) {}
  
  @Post()
  create(@Body() createFaqPayload: Prisma.FAQCreateInput) {
    return this.faqService.create(createFaqPayload);
  }
  
  @isPublic()
  @Get()
  findAll() {
    return this.faqService.findAll();
  }
  
  @isPublic()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.faqService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFaqPayload: Prisma.FAQUpdateInput) {
    return this.faqService.update(+id, updateFaqPayload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.faqService.remove(+id);
  }
}
