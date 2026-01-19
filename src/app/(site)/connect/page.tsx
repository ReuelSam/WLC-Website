import type { Metadata } from 'next';

import ContactForm from '@/components/forms/ContactForm';
import Accordion from '@/components/ui/Accordion';
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';
import { church } from '@/data/church';
import { connectContent } from '@/data/connect';

export const metadata: Metadata = connectContent.metadata;

export default function ConnectPage() {
  return (
    <div>
      <Section
        eyebrow={connectContent.introSection.eyebrow}
        title={connectContent.introSection.title}
        description={connectContent.introSection.description}
      >
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <ContactForm />
          <Card className="space-y-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
                {connectContent.contactCard.contactLabel}
              </p>
              <p className="mt-2 text-sm text-ink/70">{church.contact.email}</p>
              <p className="text-sm text-ink/70">{church.contact.phone}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
                {connectContent.contactCard.addressLabel}
              </p>
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
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
                {connectContent.contactCard.officeHoursLabel}
              </p>
              <p className="mt-2 text-sm text-ink/70">
                {connectContent.contactCard.officeHours}
              </p>
            </div>
          </Card>
        </div>
      </Section>

      <Section
        eyebrow={connectContent.faqSection.eyebrow}
        title={connectContent.faqSection.title}
        description={connectContent.faqSection.description}
      >
        <Accordion items={connectContent.faqSection.items} className="max-w-3xl" />
      </Section>
    </div>
  );
}
