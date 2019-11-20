export const matchBrumb = (pathname, route) => {
  let routes = [];

  route.map(
    v => (routes = v.children ? [...routes, v, ...v.children] : [...routes, v])
  );

  let breadCrumbs = pathname.indexOf("index") === -1 ? [routes[0]] : [];

  routes.map(v => {
    if (
      (pathname.indexOf(v.path) !== -1 && v.children) ||
      v.path === pathname
    ) {
      breadCrumbs.push(v);
    }
  });
  return breadCrumbs;
};
