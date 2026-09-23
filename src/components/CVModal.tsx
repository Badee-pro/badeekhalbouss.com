import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Download, X } from "lucide-react";

interface CVModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CVModal = ({ open, onOpenChange }: CVModalProps) => {
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
        <div className="flex-1 overflow-auto bg-muted/20 p-4">
          <img
            src="/cv/page-1.png"
            alt="Badee Khalbouss resume"
            className="w-full h-auto mx-auto max-w-[800px]"
          />
        </div>

      </DialogContent>
    </Dialog>
  );
};

export default CVModal;
