import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactInfoService } from './contact-info.service';
import { Prisma } from 'generated/prisma';
import { Access } from 'src/common/decorators/access-level-decorator';

@Access('public')
@Controller('api/curriculum/contact')
export class ContactInfoController {
  constructor(private readonly contactInfoService: ContactInfoService) {}

   @Post()
   create(@Body() createContactInfoDto: Prisma.ContactInfoCreateInput) {
     return this.contactInfoService.createContactField(createContactInfoDto);
   }
 
   @Get()
   findField() {
     return this.contactInfoService.findField();
   }
 
   @Patch()
   updateField(@Body() body: Prisma.ContactInfoUpdateInput) {
     return this.contactInfoService.updateContactField(body);
   }
 
   @Delete()
   removeField() {
     return this.contactInfoService.deleteField();
   }
 
   @Post('item')
   createChild(@Body() body: Prisma.ContactInfoItemCreateInput) {
     return this.contactInfoService.createContactFieldItem(body);
   }
 
   @Patch(':id')
   updateChild(
     @Param('id') id: string,
     @Body() body: Prisma.ContactInfoItemUpdateInput,
   ) {
     return this.contactInfoService.updateContactFieldItem(+id, body);
   }
 
   @Delete(':id')
   removeChild(@Param('id') id: string) {
     return this.contactInfoService.deleteContactFieldItem(+id);
   }
}
