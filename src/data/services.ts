import { ServiceItem } from "@/types";

/**
 * DeveloperBano - Services Catalog Data Source
 * Foundational data structure for development services.
 */
export const servicesData: ServiceItem[] = [];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.find((service) => service.slug === slug);
}
