// Default export used by App routing: a route layout that renders an Outlet
import RouteLayout from './RouteLayout.tsx';
import PageLayout from './Layout.tsx';

export default RouteLayout;

// Also export the page-level Layout (accepts children) as a named export
export { PageLayout };

// Export other layout components
export { default as BookingSidebar } from './BookingSidebar';
export { default as ServiceSidebar } from './ServiceSidebar';
export { default as Footer } from './Footer';
export { default as ScrollToTop } from './ScrollToTop';
export { default as Navigation } from './Navigation';
export { default as ScrollToTop } from './ScrollToTop';
