import { Home, FolderKanban, FileText, Mail } from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

const navItems = [
  { label: "Home", href: "#hero", icon: Home },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Resume", href: "#resume", icon: FileText },
  { label: "Contact", href: "#contact", icon: Mail },
];

interface NavigationContextMenuProps {
  children: React.ReactNode;
}

const NavigationContextMenu = ({ children }: NavigationContextMenuProps) => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
      <ContextMenuContent className="w-48 font-mono border-2 border-retro-navy dark:border-retro-amber bg-[#f5f0e1] dark:bg-[#2a2a2a] shadow-lg z-50">
        <ContextMenuLabel className="font-display text-retro-navy dark:text-retro-amber">
          &gt; Navigate_
        </ContextMenuLabel>
        <ContextMenuSeparator className="bg-retro-navy/20 dark:bg-retro-amber/20" />
        {navItems.map((item) => (
          <ContextMenuItem
            key={item.href}
            onClick={() => scrollToSection(item.href)}
            className="cursor-pointer gap-2 text-retro-navy dark:text-retro-cream hover:bg-retro-navy/10 dark:hover:bg-retro-amber/20 focus:bg-retro-navy/10 dark:focus:bg-retro-amber/20"
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </ContextMenuItem>
        ))}
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default NavigationContextMenu;
