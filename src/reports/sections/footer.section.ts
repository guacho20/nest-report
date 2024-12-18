import { Content } from 'pdfmake/interfaces';

export const footerSection = (
  currentPage: number,
  pageCount: number,
): Content => {
  return {
    text: `Page ${currentPage} de ${pageCount}`,
    alignment: 'right',
    fontSize: 12,
    margin: [0, 10, 35, 0],
    bold: true,
  };
};
