"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [sentName, setSentName] = useState("");

  const reset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setStatus("idle");
    setError("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus("error");
      setError("Please fill in your name, email and message.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      setError(
        "Our email service is not configured yet. Please call us on 07830676674 and we will help right away.",
      );
      return;
    }

    setStatus("sending");
    setError("");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: trimmedName,
          user_name: trimmedName,
          reply_to: trimmedEmail,
          user_email: trimmedEmail,
          message: trimmedMessage,
          to_name: "PipeMedic UK",
        },
        { publicKey: PUBLIC_KEY },
      );

      setSentName(trimmedName);
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setError(
        "Something went wrong while sending your message. Please try again or call us on 07830676674.",
      );
    }
  };

  if (status === "success") {
    return (
      <div className="mt-10 rounded-[2rem] bg-white p-8 text-forest-950 shadow-soft sm:p-10">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald/10 text-emerald">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">
          Message sent
        </h3>
        <p className="mt-2 max-w-md leading-relaxed text-stone">
          Thanks{sentName ? `, ${sentName}` : ""} — your message is on its way.
          We’ll be in touch shortly.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-forest-950 px-6 py-3.5 text-sm font-bold text-cream transition hover:bg-emerald-deep"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mt-10 rounded-[2rem] bg-white p-6 text-forest-950 shadow-soft sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="field-label">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="field"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="field-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="field"
            required
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="field-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us how we can help…"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="field resize-none"
          required
        />
      </div>

      {status === "error" && error ? (
        <div
          role="alert"
          className="mt-5 flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest-950 px-6 py-4 text-sm font-bold text-cream transition hover:bg-emerald-deep disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Submit
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </>
        )}
      </button>

      <p className="mt-4 text-center text-xs leading-relaxed text-stone">
        We’ll only use your details to respond to your enquiry.
      </p>
    </form>
  );
}
