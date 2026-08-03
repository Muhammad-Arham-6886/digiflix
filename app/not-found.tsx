import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/shared/icon";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-display text-7xl font-bold text-gradient md:text-8xl">404</p>
      <h1 className="font-display text-3xl font-bold text-ink md:text-4xl">This page left the build.</h1>
      <p className="max-w-md text-ink-muted">
        The route you're looking for doesn't exist, or it moved during a deploy. Let's get you somewhere that works.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <ButtonLink href="/" variant="primary">
          Back to Home
          <Icon name="ArrowRight" className="h-4 w-4" />
        </ButtonLink>
        <ButtonLink href="/services" variant="outline">
          Explore Services
        </ButtonLink>
      </div>
    </div>
  );
}
