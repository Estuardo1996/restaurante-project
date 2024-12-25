import { Button } from '@/components/ui/button';
import { Download, FileText, Table } from 'lucide-react';

export function ReportExport() {
  const handleExport = (format) => {
    // Implementar lógica de exportación
    console.log(`Exportando en formato ${format}`);
  };

  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        onClick={() => handleExport('pdf')}
        className="flex items-center gap-1"
      >
        <FileText className="w-4 h-4" />
        PDF
      </Button>
      <Button
        variant="outline"
        onClick={() => handleExport('excel')}
        className="flex items-center gap-1"
      >
        <Table className="w-4 h-4" />
        Excel
      </Button>
      <Button
        variant="outline"
        onClick={() => handleExport('csv')}
        className="flex items-center gap-1"
      >
        <Download className="w-4 h-4" />
        CSV
      </Button>
    </div>
  );
}