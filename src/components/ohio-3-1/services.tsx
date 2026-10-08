import Image from "next/image";
import { photo, quoteUrl, services } from "./content";

export function Services() {
  return (
    <section
      className="o31-section o31-paper"
      id="o31-services"
      aria-labelledby="o31-services-title"
    >
      <div className="o31-section-heading">
        <p className="o31-eyebrow">02 / Our services</p>
        <h2 id="o31-services-title">
          One obsession.
          <br />
          Every surface.
        </h2>
        <p>
          Protection, refinement and individuality.
          <br />
          Find the right care for your car.
        </p>
      </div>
      <div className="o31-service-list">
        {services.map((service, index) => (
          <details
            key={service.id}
            id={`o31-${service.id}`}
            name="o31-services"
            open={index === 0}
          >
            <summary>
              <span className="o31-mini">0{index + 1}</span>
              <h3>{service.title}</h3>
              <span className="o31-service-short">{service.short}</span>
              <span className="o31-toggle" aria-hidden="true">
                +
              </span>
            </summary>
            <div
              className={`o31-service-body${service.image ? "" : " o31-service-no-image"}`}
            >
              <div>
                <p>{service.text}</p>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a
                  className="o31-text-link"
                  href={quoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discuss your vehicle ↗
                </a>
              </div>
              {service.image && (
                <div className="o31-service-image">
                  <Image
                    src={photo(service.image)}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 640px) 85vw, 35vw"
                  />
                </div>
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
