import { faker } from '@faker-js/faker';

export interface ServiceModel {
  serviceName: string;
  serviceDescription: string;
}

export function createServiceModel(
  overrides?: Partial<ServiceModel>
): ServiceModel {
  const serviceName =overrides?.serviceName ?? faker.company.name();

  const serviceDescription =overrides?.serviceDescription ?? faker.lorem.sentence();

  return {
    serviceName,
    serviceDescription,
    ...overrides,
  };
}

export function createServiceModels(
  count: number,
  overrides?: Partial<ServiceModel>
): ServiceModel[] {
  return Array.from({ length: count }, () =>
    createServiceModel(overrides)
  );
}