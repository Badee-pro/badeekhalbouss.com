import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Download, X } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

interface CVModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CVModal = ({ open, onOpenChange }: CVModalProps) => {
  const [numPages, setNumPages] = useState(0);
  const [width, setWidth] = useState(800);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const measure = () => {
      if (containerRef.current) setWidth(containerRef.current.clientWidth - 32);
    };
    const t = setTimeout(measure, 50);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", measure);
    };
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-[90vw] w-[900px] h-[85vh] max-h-[85vh] p-0 border-dashed border-border gap-0 rounded-sm overflow-hidden flex flex-col [&>button:last-child]:hidden"
      >
        <DialogTitle className="sr-only">Badee Khalbouss CV</DialogTitle>
        <div className="flex items-center justify-between px-4 py-2 border-b border-dashed border-border bg-background/95">
          <span className="text-xs tracking-widest uppercase text-muted-foreground">
            Badee Khalbouss — CV
          </span>
          <div className="flex items-center gap-4">
            <a
              href="/Badee_Khalbouss_Resume.pdf"
              download="Badee_Khalbouss_Resume.pdf"
              className="flex items-center gap-1.5 text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              <Download className="w-3 h-3" />
              Download
            </a>
            <button
              onClick={() => onOpenChange(false)}
              aria-label="Close"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div ref={containerRef} className="flex-1 overflow-auto bg-muted/20 p-4">
          <Document
            file="/Badee_Khalbouss_Resume.pdf"
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            loading={<p className="text-xs text-muted-foreground text-center py-8">Loading CV…</p>}
            error={<p className="text-xs text-muted-foreground text-center py-8">Couldn't load the CV — use Download.</p>}
            className="flex flex-col items-center gap-4"
          >
            {Array.from({ length: numPages }, (_, i) => (
              <Page key={i} pageNumber={i + 1} width={Math.min(width, 820)} />
            ))}
          </Document>
        </div>

      </DialogContent>
    </Dialog>
  );
};

export default CVModal;
