import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/constants";

export function Logo({ className, withName = true }: { className?: string; withName?: boolean }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)}>
      <Image
        src="/images/logo.png"
        alt={`${siteConfig.name} logo`}
        width={40}
        height={47}
        className="h-9 w-auto"
        priority
      />
      {withName && (
        <span className="font-heading text-lg leading-none tracking-wide">
          {siteConfig.name}
        </span>
      )}
    </Link>
  );
}
