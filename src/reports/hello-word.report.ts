import { TDocumentDefinitions } from 'pdfmake/interfaces';

interface ReportOptions {
  name: string;
}

export const getHelloWorldReport = (
  options: ReportOptions,
): TDocumentDefinitions => {
  const { name } = options;
  const docDefinitions: TDocumentDefinitions = {
    content: [`Hola ${name}`],
  };
  return docDefinitions;
};
