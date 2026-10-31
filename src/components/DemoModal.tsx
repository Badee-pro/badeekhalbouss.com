import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface DemoVideo {
  title: string;
  poster: string;
  sources: { src: string; type: string }[];
}

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  video: DemoVideo;
}

const DemoModal = ({ open, onOpenChange, video }: DemoModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-[90vw] w-[900px] p-0 border-dashed border-border gap-0 rounded-sm overflow-hidden flex flex-col [&>button:last-child]:hidden"
      >
        <DialogTitle className="sr-only">{video.title}</DialogTitle>
        <div className="flex items-center justify-between px-4 py-2 border-b border-dashed border-border bg-background/95">
          <span className="text-xs tracking-widest uppercase text-muted-foreground">
            {video.title}
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
            key={video.title}
            poster={video.poster}
            controls
            autoPlay
            playsInline
            preload="metadata"
            className="w-full max-h-[75vh] border border-dashed border-border/50 bg-background"
          >
            {video.sources.map((source) => (
              <source key={source.src} src={source.src} type={source.type} />
            ))}
            Your browser can&apos;t play this video.
          </video>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;
