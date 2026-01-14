// Default export used by App routing: a route layout that renders an Outlet
import RouteLayout from './RouteLayout.tsx';
import PageLayout from './Layout.tsx';

export default RouteLayout;
// Also export the page-level Layout (accepts children) as a named export
export { PageLayout };
