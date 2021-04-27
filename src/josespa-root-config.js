import { registerApplication, start, mountRootParcel } from 'single-spa';

mountRootParcel(() => System.import('@josespa/navbar'), {
  domElement: document.getElementById('navbar')
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
