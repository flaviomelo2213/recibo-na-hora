import type { CurriculumData } from '../ferramentas/curriculo-profissional/_components/types';

/** Draw document data, never the editor/preview DOM. Text remains searchable. */
export async function buildCurriculumPdf(data: CurriculumData) {
  const { jsPDF } = await import('jspdf');
  const pdf = new jsPDF('p', 'mm', 'a4');
  const margin = 18;
  const width = pdf.internal.pageSize.getWidth() - margin * 2;
  const bottom = pdf.internal.pageSize.getHeight() - 20;
  let y = 22;

  const space = (height: number) => {
    if (y + height > bottom) { pdf.addPage(); y = 22; }
  };
  const text = (value: string, size = 11, bold = false, lineWidth = width) => {
    if (!value.trim()) return;
    pdf.setFont('helvetica', bold ? 'bold' : 'normal');
    pdf.setFontSize(size);
    const lineHeight = size * 0.3528 * 1.4;
    const lines: string[] = pdf.splitTextToSize(value.trim(), lineWidth);
    for (const line of lines) {
      space(lineHeight);
      pdf.text(line, margin, y);
      y += lineHeight;
    }
  };
  const heading = (value: string) => {
    space(20);
    y += 5;
    text(value, 13, true);
    pdf.setDrawColor(190, 200, 215);
    pdf.line(margin, y - 2, margin + width, y - 2);
    y += 3;
  };
  const image = (src: string, x: number, top: number, maxWidth: number, maxHeight: number) => {
    const props = pdf.getImageProperties(src);
    const ratio = Math.min(maxWidth / props.width, maxHeight / props.height);
    const w = props.width * ratio;
    const h = props.height * ratio;
    pdf.addImage(src, props.fileType, x, top, w, h);
    return h;
  };

  const personal = data.dadosPessoais;
  const headerWidth = data.fotoDataUrl ? width - 40 : width;
  if (data.fotoDataUrl) image(data.fotoDataUrl, margin + width - 32, 18, 32, 38);
  text(personal.nome || 'Currículo', 21, true, headerWidth);
  text(personal.cargo, 13, false, headerWidth);
  y += 3;
  for (const item of [personal.email, personal.telefone, personal.cidade, personal.linkedin, personal.portfolio])
    text(item, 10, false, headerWidth);
  if (data.fotoDataUrl && pdf.getNumberOfPages() === 1) y = Math.max(y, 60);

  if (data.resumo.trim()) { heading('Resumo Profissional'); text(data.resumo); }
  const experiences = data.experiencia.filter(e => [e.cargo, e.empresa, e.inicio, e.fim, e.atividades].some(v => v.trim()));
  if (experiences.length) {
    heading('Experiência Profissional');
    for (const entry of experiences) {
      space(22);
      text(entry.cargo, 12, true);
      text([entry.empresa, [entry.inicio, entry.fim].filter(Boolean).join(' - ')].filter(Boolean).join(' | '), 10);
      text(entry.atividades);
      y += 3;
    }
  }
  const education = data.educacao.filter(e => [e.curso, e.instituicao, e.ano].some(v => v.trim()));
  if (education.length) {
    heading('Educação');
    for (const entry of education) {
      space(16);
      text(entry.curso, 12, true);
      text([entry.instituicao, entry.ano].filter(Boolean).join(' | '), 10);
      y += 3;
    }
  }
  if (data.habilidades.trim()) { heading('Habilidades'); text(data.habilidades); }
  if (data.idiomas.trim()) { heading('Idiomas'); text(data.idiomas); }
  if (data.assinaturaDataUrl) {
    space(32);
    y += 5;
    image(data.assinaturaDataUrl, margin, y, 55, 18);
    y += 23;
    text('Assinatura', 9);
  }
  const pages = pdf.getNumberOfPages();
  for (let page = 1; page <= pages; page++) {
    pdf.setPage(page);
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(9);
    pdf.setTextColor(90);
    pdf.text(`${page} / ${pages}`, 192, 287, { align: 'right' });
  }
  pdf.setProperties({ title: `Currículo - ${personal.nome || 'Profissional'}`, creator: 'ReciboNaHora' });
  return pdf;
}
