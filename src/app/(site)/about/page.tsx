import Image from 'next/image';
import type { Metadata } from 'next';

import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';
import { church } from '@/data/church';
import { aboutContent } from '@/data/about';

export const metadata: Metadata = aboutContent.metadata;

export default function AboutPage() {
  return (
    <div>
      <Section
        eyebrow={aboutContent.missionVisionSection.eyebrow}
        title={aboutContent.missionVisionSection.title}
        description={church.mission}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="font-display text-xl text-ink">
              {aboutContent.missionVisionSection.missionTitle}
            </h3>
            <p className="mt-3 text-sm text-ink/70">
              {aboutContent.missionVisionSection.missionBody}
            </p>
          </Card>
          <Card>
            <h3 className="font-display text-xl text-ink">
              {aboutContent.missionVisionSection.visionTitle}
            </h3>
            <p className="mt-3 text-sm text-ink/70">
              {aboutContent.missionVisionSection.visionBody}
            </p>
          </Card>
        </div>
      </Section>

      <Section
        eyebrow={aboutContent.valuesSection.eyebrow}
        title={aboutContent.valuesSection.title}
        description={aboutContent.valuesSection.description}
      >
        <div className="grid gap-6 md:grid-cols-3">
          {aboutContent.valuesSection.items.map((value) => (
            <Card key={value.title}>
              <h3 className="font-display text-lg text-ink">{value.title}</h3>
              <p className="mt-3 text-sm text-ink/70">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow={aboutContent.faithSection.eyebrow}
        title={aboutContent.faithSection.title}
        description={aboutContent.faithSection.description}
      >
        <ul className="grid gap-4 md:grid-cols-2">
          {aboutContent.faithSection.statements.map((statement) => (
            <li
              key={statement}
              className="rounded-2xl border border-clay/60 bg-white/80 p-5 text-sm text-ink/70"
            >
              {statement}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        eyebrow={aboutContent.leadershipSection.eyebrow}
        title={aboutContent.leadershipSection.title}
        description={aboutContent.leadershipSection.description}
      >
        <div className="grid gap-6 md:grid-cols-2">
          {church.leadership.map((leader, index) => (
            <Card key={leader.name} className="flex gap-4">
              <Image
                src={`/images/leader-${index + 1}.svg`}
                alt={leader.name}
                width={120}
                height={120}
                className="h-24 w-24 rounded-2xl object-cover"
              />
              <div>
                <h3 className="font-display text-lg text-ink">{leader.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
                  {leader.role}
                </p>
                <p className="mt-2 text-sm text-ink/70">{leader.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow={aboutContent.storySection.eyebrow}
        title={aboutContent.storySection.title}
        description={aboutContent.storySection.description}
      >
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <p className="text-sm leading-relaxed text-ink/70">
            {aboutContent.storySection.body}
          </p>
          <Card>
            <h3 className="font-display text-lg text-ink">
              {aboutContent.storySection.serveTitle}
            </h3>
            <p className="mt-3 text-sm text-ink/70">
              {aboutContent.storySection.serveBody}
            </p>
          </Card>
        </div>
      </Section>
    </div>
  );
}
