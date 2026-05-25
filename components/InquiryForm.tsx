"use client";

import { useState } from "react";

type InquiryFormProps = {
  title?: string;
  description?: string;
  compact?: boolean;
};

export function InquiryForm({
  title = "Start Your Textile Inquiry",
  description = "Share your product interest, expected quantity, and business details so we can continue the conversation professionally.",
  compact = false,
}: InquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");

    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSuccess("Inquiry sent successfully!");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        product: "",
        quantity: "",
        message: "",
      });
    } else {
      setSuccess("Failed to send inquiry.");
    }

    setLoading(false);
  };

  return (
    <div className="rounded-[32px] border border-ink/8 bg-white p-6 shadow-soft sm:p-8">
      <div className="max-w-2xl">
        <h3 className="font-display text-3xl text-ink">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slateText/80">
          {description}
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-8 grid gap-5 md:grid-cols-2"
      >
        <label className="grid gap-2 text-sm font-medium text-ink">
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="h-12 rounded-2xl border border-ink/10 bg-cloud/50 px-4"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-ink">
          Company Name
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="h-12 rounded-2xl border border-ink/10 bg-cloud/50 px-4"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-ink">
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="h-12 rounded-2xl border border-ink/10 bg-cloud/50 px-4"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-ink">
          Phone
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="h-12 rounded-2xl border border-ink/10 bg-cloud/50 px-4"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-ink">
          Product Interest
          <input
            type="text"
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="h-12 rounded-2xl border border-ink/10 bg-cloud/50 px-4"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-ink">
          Quantity
          <input
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="h-12 rounded-2xl border border-ink/10 bg-cloud/50 px-4"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-ink md:col-span-2">
          Message
          <textarea
            rows={compact ? 5 : 7}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="rounded-[24px] border border-ink/10 bg-cloud/50 px-4 py-3"
          />
        </label>

        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white"
          >
            {loading ? "Sending..." : "Send Inquiry"}
          </button>

          {success && (
            <p className="mt-4 text-sm text-green-600">{success}</p>
          )}
        </div>
      </form>
    </div>
  );
}