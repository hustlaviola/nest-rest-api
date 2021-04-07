import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDTO } from './dto/create-item.dto';
import { ItemsService } from '../items/items.service';
import { IItem } from './interfaces/items.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<IItem[]> {
    return await this.itemsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<IItem> {
    return await this.itemsService.findOne(id);
  }

  //   @Post()
  //   async createItem(@Body() createItemDto: CreateItemDTO): string {
  //     return await `Name ${createItemDto.name}`;
  //   }

  //   @Delete('id')
  //   async delete(@Param('id') id): string {
  //     return await `Delete ${id}`;
  //   }

  //   @Put(':id')
  //   async update(@Body() updateItemDto: CreateItemDTO, @Param('id') id): string {
  //     return await `Update ${id} - Name ${updateItemDto.name}`;
  //   }
}
