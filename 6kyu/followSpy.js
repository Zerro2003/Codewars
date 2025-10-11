function findRoutes(routes) {
  let starts = [];
  let dests = [];
  let rout = {};
  for (path of routes) {
    let from = path[0];
    let to = path[1];
    starts.push(from);
    dests.push(to);
    rout[from] = to;
  }
  let routeMap = starts.filter((a) => !dests.includes(a));
  for (let ke in rout) {
    let theLast = routeMap[routeMap.length - 1];
    let addLast = routes.find((finder) => finder[0] === theLast);
    routeMap.push(addLast[1]);
  }
  return routeMap.join(", ");
}
