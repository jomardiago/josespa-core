import { registerApplication, start, mountRootParcel } from "single-spa";

// registerApplication({
//   name: "@josespa/navbar",
//   app: () => System.import("@josespa/navbar"),
//   activeWhen: ["/"]
// });

registerApplication({
  name: "@josespa/employees",
  app: () => System.import("@josespa/employees"),
  activeWhen: ["/employees"]
});

registerApplication({
  name: "@josespa/departments",
  app: () => System.import("@josespa/departments"),
  activeWhen: ["/departments"]
});

start({
  urlRerouteOnly: true,
});

const navbar = mountRootParcel(System.import('@josespa/navbar'), {
  author: 'Jose Mari A. Diago',
  domElement: document.getElementById('navbar')
});

navbar.mountPromise.then(() => {
  // what do you want to do here after mounting?
});
