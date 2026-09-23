import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Download } from "lucide-react";

interface CVModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CVModal = ({ open, onOpenChange }: CVModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-[90vw] w-[900px] h-[85vh] max-h-[85vh] p-0 border-dashed border-border gap-0 rounded-sm overflow-hidden"
      >
        <DialogTitle className="sr-only">Badee Khalbouss CV</DialogTitle>
        <div className="flex items-center justify-between px-4 py-2 border-b border-dashed border-border bg-background/95">
          <span className="text-xs tracking-widest uppercase text-muted-foreground">
            Badee Khalbouss — CV
          </span>
          <a
            href="/Badee_Khalbouss_Resume.pdf"
            download="Badee_Khalbouss_Resume.pdf"
            className="flex items-center gap-1.5 text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
          >
            <Download className="w-3 h-3" />
            Download
          </a>
        </div>
        <object
          data="/Badee_Khalbouss_Resume.pdf"
          type="application/pdf"
          className="flex-1 w-full"
          style={{ height: "calc(85vh - 40px)" }}
          aria-label="Badee Khalbouss Resume PDF"
        >
          <p className="p-6 text-foreground text-sm">
            Could not display the PDF inline.{" "}
            <a
              href="/Badee_Khalbouss_Resume.pdf"
              className="text-primary underline"
              download
            >
              Download the CV here
            </a>
            .
          </p>
        </object>
      </DialogContent>
    </Dialog>
  );
};

export default CVModal;
