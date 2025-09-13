import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { InstagramIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <div className={cn("min-h-svh p-6 gap-6 grid lg:grid-cols-2")}>
      <div className={cn("flex items-start justify-between flex-col gap-12")}>
        <Link href="/">
          <Image
            src="/logo/hos-studios.svg"
            alt="House of Singh Studios"
            width={148}
            height={148}
          />
        </Link>

        <div
          className={cn(
            "flex items-start self-stretch justify-start flex-col gap-12"
          )}
        >
          <div className={cn("flex flex-col gap-6")}>
            <h1 className="text-5xl font-normal">We’ll be launching soon</h1>

            <Button
              variant="link"
              className="text-base font-normal self-start px-0!"
              asChild
            >
              <Link
                href="https://instagram.com/houseofsingh.studios"
                target="_blank"
              >
                <InstagramIcon className="text-inherit" />
                <span>Follow us on Instagram</span>
              </Link>
            </Button>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          © Copyright {new Date().getFullYear()}, House of Singh Studios Inc.
        </div>
      </div>
      <div className="max-h-[calc(100svh_-_48px)] relative self-stretch">
        <img
          src="/coming-soon-banner-image.jpg"
          loading="lazy"
          alt="CN Tower"
          className="rounded-md size-full object-cover"
        />
      </div>
    </div>
  );
}
