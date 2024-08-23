import { usePathname } from "next/navigation";

export const matchCurrentPath = (path: string): boolean => {
  const pathname = usePathname();
  return pathname === path;
};
