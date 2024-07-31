import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { LinkService } from './link.service';
import { ConfigService } from '@nestjs/config';
import { CreateLinkDto } from './dto/create-link.dto';
import { LinkResponseDto } from './dto/link-response.dto';
import { ValueResponseDto } from './dto/value-response.dto';

@Controller('link')
export class LinkController {
  constructor(private readonly linkService: LinkService) {}

  @Post('create')
  create(@Body() createLinkDto: CreateLinkDto): Promise<LinkResponseDto> {
    return this.linkService.create(createLinkDto);
  }

  @Get(':id')
  get(@Param('id', new ParseUUIDPipe()) id: string): Promise<ValueResponseDto> {
    return this.linkService.get(id);
  }
}
