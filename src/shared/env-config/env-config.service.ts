import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import dotenv from 'dotenv';
import { join } from 'path';
import { IEnvConfig } from './env-config.interface';

dotenv.config({
  path: join(__dirname, '..', '..', '..', `.env.${process.env.NODE_ENV}`),
});

@Injectable()
export class EnvConfigService implements IEnvConfig {
  constructor(private readonly configService: ConfigService) {}
  getPort(): number {
    return Number(this.configService.get<number>('PORT'));
  }
  getNodeEnv(): string {
    return this.configService.get<string>('NODE_ENV');
  }
}
