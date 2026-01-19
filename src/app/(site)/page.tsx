import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Callout from '@/components/ui/Callout';
import Section from '@/components/ui/Section';
import { church } from '@/data/church';
import { homeContent } from '@/data/home';

export const metadata: Metadata = homeContent.metadata;

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
            {church.serviceTime}
          </p>
          <h1 className="mt-4 font-display text-4xl text-ink md:text-5xl">
            {homeContent.hero.headline}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink/80">
            {church.mission}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button as={Link} href="/services">
              {homeContent.hero.primaryCta}
            </Button>
            <Button as={Link} href="/connect" variant="outline">
              {homeContent.hero.secondaryCta}
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-6 -top-6 hidden h-full w-full rounded-[32px] border border-clay/50 md:block" />
          <Image
            src="/images/hero.svg"
            alt={homeContent.hero.imageAlt}
            width={600}
            height={520}
            className="relative h-auto w-full rounded-[32px] object-cover shadow-soft"
            priority
          />
        </div>
      </section>

      <Section
        eyebrow={homeContent.serviceTimeSection.eyebrow}
        title={homeContent.serviceTimeSection.title}
        description={homeContent.serviceTimeSection.description}
      >
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <Card className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-moss">
              {homeContent.serviceTimeSection.cardLabel}
            </p>
            <p className="text-2xl font-display text-ink">{church.serviceTime}</p>
            <div className="flex items-center gap-2 text-sm text-ink/70">
              <span>{church.location}</span>
              <a
                className="text-ink/60 transition hover:text-ink focus-ring"
                href={church.mapUrl}
                aria-label="View map location"
              >
                📍
              </a>
            </div>
            <Callout tone="neutral">
              {homeContent.serviceTimeSection.callout}
            </Callout>
          </Card>
          <div className="rounded-2xl border border-clay/60 bg-white/80 p-6 text-sm text-ink/70">
            <p className="font-semibold text-ink">
              {homeContent.serviceTimeSection.whatToExpectTitle}
            </p>
            <ul className="mt-4 space-y-3">
              {homeContent.serviceTimeSection.whatToExpectItems.map((item) => (
                <li key={item.title}>
                  <span className="font-semibold text-ink">{item.title}</span>{' '}
                  {item.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section
        eyebrow={homeContent.afterServiceSection.eyebrow}
        title={homeContent.afterServiceSection.title}
        description={homeContent.afterServiceSection.description}
      >
        <div className="grid gap-6 md:grid-cols-2">
          {homeContent.afterServiceSection.items.map((item) => (
            <Card key={item.title}>
              <h3 className="font-display text-xl text-ink">{item.title}</h3>
              <p className="mt-3 text-sm text-ink/70">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow={homeContent.communitySection.eyebrow}
        title={homeContent.communitySection.title}
        description={homeContent.communitySection.description}
      >
        <div className="grid gap-4 md:grid-cols-3">
          {homeContent.communitySection.items.map((item) => (
            <div key={item.src} className="space-y-3">
              <Image
                src={item.src}
                alt={item.alt}
                width={360}
                height={260}
                className="h-56 w-full rounded-2xl object-cover"
              />
              <p className="text-sm text-ink/70">{item.caption}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow={homeContent.whoWeAreSection.eyebrow}
        title={homeContent.whoWeAreSection.title}
        description={homeContent.whoWeAreSection.description}
      >
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-sm text-ink/70">
            {homeContent.whoWeAreSection.body}
          </p>
          <Button as={Link} href="/about" variant="secondary">
            {homeContent.whoWeAreSection.cta}
          </Button>
        </div>
      </Section>

      <Section
        eyebrow={homeContent.sermonSection.eyebrow}
        title={homeContent.sermonSection.title}
        description={homeContent.sermonSection.description}
      >
        <div className="aspect-video w-full overflow-hidden rounded-2xl border border-clay/60 bg-white shadow-soft">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${church.youtubeFeaturedVideoId}`}
            title={homeContent.sermonSection.iframeTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Section>
    </div>
  );
}
