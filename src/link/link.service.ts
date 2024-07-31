import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Link } from './link.entity';
import { ConfigService } from '@nestjs/config';
import { CreateLinkDto } from './dto/create-link.dto';
import { LinkResponseDto } from './dto/link-response.dto';
import { ValueResponseDto } from './dto/value-response.dto';

@Injectable()
export class LinkService {
  private readonly linkBaseUrl: string;

  constructor(
    @InjectRepository(Link)
    private readonly linkRepository: Repository<Link>,

    private readonly configService: ConfigService,
  ) {
    this.linkBaseUrl = configService.getOrThrow<string>('LINK_BASE_URL');
  }

  async create({ value }: CreateLinkDto): Promise<LinkResponseDto> {
    const link = this.linkRepository.create({ value });
    const result = await this.linkRepository.save(link);

    return { link: `${this.linkBaseUrl}/${result.id}` };
  }

  async get(id: string): Promise<ValueResponseDto> {
    const link = await this.linkRepository.findOne({ where: { id } });
    if (!link) {
      throw new NotFoundException('Link not found or already used');
    }
    await this.linkRepository.remove(link);
    return { value: link.value };
  }
}
