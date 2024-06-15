import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { PrinterService } from 'src/printer/printer.service';
import {
  getEmploymentLetterReport,
  getEmploymentLetterReportById,
  getHelloWorldReport,
} from 'src/reports';

@Injectable()
export class BasicReportsService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  constructor(private readonly printerService: PrinterService) {
    super();
  }

  hellow() {
    //return this.employees.findFirst();

    const docDefinitions: TDocumentDefinitions = getHelloWorldReport({
      name: 'Jhon Guacho',
    });
    const doc = this.printerService.createPdf(docDefinitions);
    return doc;
  }

  employmentLetter() {
    const docDefinitions: TDocumentDefinitions = getEmploymentLetterReport();
    const doc = this.printerService.createPdf(docDefinitions);
    return doc;
  }

  async employmentLetterById(employeeId: number) {
    const employee = await this.employees.findUnique({
      where: { id: employeeId },
    });

    if (!employee)
      throw new NotFoundException(`Employee whit id ${employeeId} not found`);

    const docDefinitions: TDocumentDefinitions = getEmploymentLetterReportById({
      employerName: 'Jhon Guacho',
      employerPosition: 'Gerente de RRHH',
      employeeName: employee.name,
      employeePosition: employee.position,
      employeeStartDate: employee.start_date,
      employeeHours: employee.hours_per_day,
      employeeWorkSchedule: employee.work_schedule,
      employerCompany: 'Fazt Tech',
    });
    const doc = this.printerService.createPdf(docDefinitions);
    return doc;
  }
}
