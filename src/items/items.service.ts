import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IItem } from './interfaces/items.interface';
import { Item, ItemDocument } from './schemas/item.schema';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel(Item.name) private readonly itemModel: Model<ItemDocument>,
  ) {}
  async findAll(): Promise<IItem[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<IItem> {
    return await this.itemModel.findById(id);
  }

  async create(item: IItem): Promise<IItem> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }

  async delete(id: string): Promise<IItem> {
    return await this.itemModel.findByIdAndDelete(id);
  }

  async update(id: string, item: IItem): Promise<IItem> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
}
