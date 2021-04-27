import { registerApplication, start } from 'single-spa';

registerApplication({
  name: '@josespa/navbar',
  app: () => System.import('@josespa/navbar'),
  activeWhen: ['/']
});

registerApplication({
  name: '@josespa/auth',
  app: () => System.import('@josespa/auth'),
  activeWhen: ['/auth']
});

registerApplication({
  name: '@josespa/employees',
  app: () => System.import('@josespa/employees'),
  activeWhen: ['/employees']
});

registerApplication({
  name: '@josespa/departments',
  app: () => System.import('@josespa/departments'),
  activeWhen: ['/departments']
});

start({
  urlRerouteOnly: true,
});
