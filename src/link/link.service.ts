import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class LinkService {
  private readonly links = new Map<string, string>();

  create(value: string): string {
    const id = uuidv4();
    this.links.set(id, value);
    return id;
  }

  get(id: string): string {
    const value = this.links.get(id);
    if (!value) {
      throw new NotFoundException('Link not found or already used');
    }
    this.links.delete(id);
    return value;
  }
}
