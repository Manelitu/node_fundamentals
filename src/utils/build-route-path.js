export function buildRoutePath(path) {
  const parameteresRouteRegex = /:([a-zA-Z]+)/g;
  const pathWithParams = path.replaceAll(parameteresRouteRegex, '(?<$1>[a-z0-9\-_]+)');

  const pathRegex = new RegExp(`^${pathWithParams}`);
  return pathRegex;
}