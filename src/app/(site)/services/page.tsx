import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Callout from '@/components/ui/Callout';
import Section from '@/components/ui/Section';
import { church } from '@/data/church';
import { servicesContent } from '@/data/services';

export const metadata: Metadata = servicesContent.metadata;

export default function ServicesPage() {
  return (
    <div>
      <Section
        eyebrow={servicesContent.sundayServiceSection.eyebrow}
        title={servicesContent.sundayServiceSection.title}
        description={servicesContent.sundayServiceSection.description}
      >
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <Card className="space-y-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
                {servicesContent.sundayServiceSection.serviceTimeLabel}
              </p>
              <p className="mt-2 text-2xl font-display text-ink">{church.serviceTime}</p>
              <div className="mt-2 flex items-center gap-2 text-sm text-ink/70">
                <span>{church.location}</span>
                <a
                  className="text-ink/60 transition hover:text-ink focus-ring"
                  href={church.mapUrl}
                  aria-label="View map location"
                >
                  📍
                </a>
              </div>
            </div>
            <div className="space-y-2 text-sm text-ink/70">
              <p>
                <span className="font-semibold text-ink">Parking:</span>{' '}
                {servicesContent.sundayServiceSection.parkingText}{' '}
                <a
                  className="text-ink/60 transition hover:text-ink focus-ring"
                  href={servicesContent.sundayServiceSection.parkingMapUrl}
                  aria-label="View map location"
                >
                  📍
                </a>
              </p>
              <p>
                <span className="font-semibold text-ink">Entrance:</span>{' '}
                {servicesContent.sundayServiceSection.entranceText}
              </p>
              <p>
                <span className="font-semibold text-ink">Accessibility:</span>{' '}
                {servicesContent.sundayServiceSection.accessibilityText}
              </p>
            </div>
            <Callout tone="warm">
              {servicesContent.sundayServiceSection.callout}
            </Callout>
          </Card>
          <div className="space-y-4">
            <Image
              src="/images/service.svg"
              alt={servicesContent.sundayServiceSection.imageAlt}
              width={520}
              height={420}
              className="h-64 w-full rounded-2xl object-cover"
            />
            <Button as="a" href={church.zoomJoinUrl} variant="secondary">
              {servicesContent.sundayServiceSection.zoomCta}
            </Button>
          </div>
        </div>
      </Section>

      <Section
        eyebrow={servicesContent.afterServiceSection.eyebrow}
        title={servicesContent.afterServiceSection.title}
        description={servicesContent.afterServiceSection.description}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="font-display text-lg text-ink">
              {servicesContent.afterServiceSection.sundaySchoolTitle}
            </h3>
            <p className="mt-3 text-sm text-ink/70">{church.afterServiceInfo.sundaySchool}</p>
          </Card>
          <Card>
            <h3 className="font-display text-lg text-ink">
              {servicesContent.afterServiceSection.quietTimeTitle}
            </h3>
            <p className="mt-3 text-sm text-ink/70">{church.afterServiceInfo.quietTime}</p>
          </Card>
        </div>
      </Section>

      <Section
        eyebrow={servicesContent.cellGroupsSection.eyebrow}
        title={servicesContent.cellGroupsSection.title}
        description={servicesContent.cellGroupsSection.description}
      >
        <div className="grid gap-4 md:grid-cols-2">
          {church.cellGroups.map((group) => (
            <Card key={group.name} className="space-y-2">
              <p className="font-display text-lg text-ink">{group.name}</p>
              <p className="text-sm text-ink/70">{group.time}</p>
              <p className="text-sm text-ink/70">{group.location}</p>
              <p className="text-sm text-ink/70">Leader: {group.leader}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <Button as={Link} href="/connect" variant="outline">
            {servicesContent.cellGroupsSection.cta}
          </Button>
        </div>
      </Section>

      <Section
        eyebrow={servicesContent.mediaSection.eyebrow}
        title={servicesContent.mediaSection.title}
        description={servicesContent.mediaSection.description}
      >
        <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
          <Card className="space-y-4">
            <p className="text-sm text-ink/70">
              {servicesContent.mediaSection.cardText}
            </p>
            <Button as="a" href={church.youtubeChannelUrl} variant="secondary">
              {servicesContent.mediaSection.buttonLabel}
            </Button>
          </Card>
          <div className="aspect-video w-full overflow-hidden rounded-2xl border border-clay/60 bg-white shadow-soft">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${church.youtubeFeaturedVideoId}`}
              title={servicesContent.mediaSection.iframeTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
