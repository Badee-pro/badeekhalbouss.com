import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DemoModal = ({ open, onOpenChange }: DemoModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-[90vw] w-[900px] p-0 border-dashed border-border gap-0 rounded-sm overflow-hidden flex flex-col [&>button:last-child]:hidden"
      >
        <DialogTitle className="sr-only">Co-op Tracker Demo</DialogTitle>
        <div className="flex items-center justify-between px-4 py-2 border-b border-dashed border-border bg-background/95">
          <span className="text-xs tracking-widest uppercase text-muted-foreground">
            Co-op Tracker — Demo
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onOpenChange(false)}
            aria-label="Close"
            className="h-7 w-7 text-muted-foreground hover:text-primary transition-colors"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
        <div className="bg-muted/20 p-4 flex items-center justify-center">
          <video
            poster="/coop-tracker-demo-poster.png"
            controls
            autoPlay
            playsInline
            preload="metadata"
            className="w-full max-h-[75vh] border border-dashed border-border/50 bg-background"
          >
            <source src="/media/coop-tracker-demo.mp4" type="video/mp4" />
            <source src="/coop-tracker-demo.webm" type="video/webm" />
            Your browser can&apos;t play this video.
          </video>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;
