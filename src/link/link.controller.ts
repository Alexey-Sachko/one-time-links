import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { LinkService } from './link.service';
import { ConfigService } from '@nestjs/config';

@Controller('link')
export class LinkController {
  private readonly linkBaseUrl: string;

  constructor(
    private readonly linkService: LinkService,
    private readonly configService: ConfigService,
  ) {
    this.linkBaseUrl = configService.getOrThrow<string>('LINK_BASE_URL');
  }

  @Post('create')
  create(@Body('value') value: string) {
    if (!value) {
      return { error: 'Value is required' };
    }
    const id = this.linkService.create(value);
    return { link: `${this.linkBaseUrl}/${id}` };
  }

  @Get(':id')
  get(@Param('id') id: string) {
    const value = this.linkService.get(id);
    return { value };
  }
}
