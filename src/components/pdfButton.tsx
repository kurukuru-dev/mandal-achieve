'use client';

import { FileText } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useToast } from '@/components/ui/toast';
import { Button } from '@/components/ui/button';

export default function PdfButton() {
  const { toast } = useToast();

  const handleDownloadPdf = () => {
    const target = document.getElementById('mandalrtWrap');
    if (!target) return null;

    html2canvas(target as HTMLElement)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');

        // PDFの幅と高さ
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        // キャンバスの幅と高さ
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;

        // アスペクト比を保つために高さと幅を計算
        const ratio = Math.min(pdfWidth / canvasWidth, pdfHeight / canvasHeight);
        const imgWidth = canvasWidth * ratio;
        const imgHeight = canvasHeight * ratio;

        // 縦中央に配置するための位置計算
        const marginTop = (pdfHeight - imgHeight) / 2;

        pdf.addImage(imgData, 'PNG', 0, marginTop, imgWidth, imgHeight);
        pdf.save('mandalart.pdf');
      })
      .then(() => {
        toast({ title: 'PDFを保存しました' });
      })
      .catch((e) => {
        toast({ title: 'PDFの保存に失敗しました', variant: 'failed' });
        console.error(e);
      });
  };

  return (
    <Button variant="accent" size="icon" onClick={handleDownloadPdf}>
      <FileText />
    </Button>
  );
}
