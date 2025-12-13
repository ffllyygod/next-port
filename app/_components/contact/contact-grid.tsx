"use client";

import { contacts } from "./contact.data";
import { useReveal } from "../experience/useReveal";

export default function ContactGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contacts.map((c, i) => (
                <ContactCard key={c.title} contact={c} delay={i * 0.1} />
            ))}
        </div>
    );
}

function ContactCard({ contact, delay }: any) {
  const { ref, visible } = useReveal();
  const Icon = contact.icon;

  const isDownload = contact.title === "Download CV";
  const isExternal = contact.href.startsWith("http");

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}s` }}
      className={`slide-in ${visible ? "reveal" : ""}`}
    >
      <a
        href={contact.href}
        download={isDownload ? "Ayush_Abad_Resume.pdf" : undefined}
        target={!isDownload && isExternal ? "_blank" : undefined}
        rel={!isDownload && isExternal ? "noopener noreferrer" : undefined}
        className="contact-card"
      >
        <div className="flex items-center gap-4">
          <div className="contact-icon-wrapper">
            <Icon size={22} />
          </div>

          <div className="min-w-0">
            <h3 className="contact-title">{contact.title}</h3>
            <p className="contact-value">{contact.value}</p>
            <p className="contact-description">{contact.description}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
