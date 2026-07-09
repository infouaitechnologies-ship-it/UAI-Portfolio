"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { site } from "@/data/site";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", project: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `New project inquiry — ${form.project || "General"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject type: ${form.project}\n\n${form.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-muted">
            Name
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="mt-2 w-full rounded-md border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition-colors focus:border-accent"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-muted">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="mt-2 w-full rounded-md border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition-colors focus:border-accent"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="project" className="text-sm font-medium text-muted">
          Project type
        </label>
        <input
          id="project"
          value={form.project}
          onChange={(e) => setForm((f) => ({ ...f, project: e.target.value }))}
          className="mt-2 w-full rounded-md border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition-colors focus:border-accent"
          placeholder="e.g. Internal HR system, market platform, API work"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-muted">
          What are you trying to solve?
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className="mt-2 w-full resize-none rounded-md border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition-colors focus:border-accent"
          placeholder="Tell us about your current process and where it's breaking down."
        />
      </div>

      <button
        type="submit"
        className="group inline-flex items-center justify-center gap-2 rounded-md bg-[var(--color-invert-bg)] px-6 py-3 text-sm font-medium text-[var(--color-invert-text)] transition-opacity duration-250 hover:opacity-85"
      >
        Send message
        <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
      </button>

      {sent && (
        <p className="text-sm text-accent" role="status">
          Your email app should be opening now — if not, email {site.email} directly.
        </p>
      )}
    </form>
  );
}
