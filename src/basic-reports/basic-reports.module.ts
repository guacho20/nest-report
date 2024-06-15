import { Module } from '@nestjs/common';
import { PrinterModule } from 'src/printer/printer.module';
import { BasicReportsController } from './basic-reports.controller';
import { BasicReportsService } from './basic-reports.service';

@Module({
  imports: [PrinterModule],
  controllers: [BasicReportsController],
  providers: [BasicReportsService],
})
export class BasicReportsModule {}
