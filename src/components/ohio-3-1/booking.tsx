"use client";

import { useState } from "react";
import { contact, services } from "./content";

export function Booking() {
  const [message, setMessage] = useState("");
  return (
    <form
      className="o31-booking"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setMessage(
          `Hello Mr. Detailer, I would like to discuss ${data.get("service")} for my ${String(data.get("vehicle")).trim()}. Please share availability and a quote.`,
        );
      }}
      onChange={() => setMessage("")}
    >
      <label htmlFor="o31-vehicle">Your vehicle</label>
      <input
        id="o31-vehicle"
        name="vehicle"
        required
        maxLength={100}
        pattern=".*\S.*"
        placeholder="Make & model"
      />
      <label htmlFor="o31-service">What can we help with?</label>
      <select name="service" id="o31-service">
        {services.map((service) => (
          <option key={service.id}>{service.title}</option>
        ))}
        <option>Help choosing a service</option>
      </select>
      <button className="o31-button" type="submit">
        Prepare my enquiry <span aria-hidden="true">↗</span>
      </button>
      <p className="o31-small">
        We’ll prepare a message for WhatsApp. Your appointment is confirmed only
        when the studio replies.
      </p>
      {message && (
        <div className="o31-enquiry" role="status">
          <p>{message}</p>
          <a
            className="o31-text-link"
            href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Continue to WhatsApp ↗
          </a>
        </div>
      )}
    </form>
  );
}
