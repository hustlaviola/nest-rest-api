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
  findAll(): Promise<IItem[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<IItem> {
    return this.itemsService.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDTO): Promise<IItem> {
    return this.itemsService.create(createItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<IItem> {
    return this.itemsService.delete(id);
  }

  @Put(':id')
  update(
    @Body() updateItemDto: CreateItemDTO,
    @Param('id') id,
  ): Promise<IItem> {
    return this.itemsService.update(id, updateItemDto);
  }
}
