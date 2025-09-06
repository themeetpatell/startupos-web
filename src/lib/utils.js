import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Google Analytics utility functions
export const gtag = (...args) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(...args);
  }
};

// Track page views
export const trackPageView = (page_title, page_location) => {
  gtag('config', 'G-K26FQJM4GZ', {
    page_title,
    page_location,
  });
};

// Track custom events
export const trackEvent = (event_name, parameters = {}) => {
  gtag('event', event_name, parameters);
};

// Track button clicks
export const trackButtonClick = (button_name, location = '') => {
  trackEvent('button_click', {
    button_name,
    location,
  });
};

// Track form submissions
export const trackFormSubmission = (form_name, form_type = '') => {
  trackEvent('form_submit', {
    form_name,
    form_type,
  });
};

// Track navigation
export const trackNavigation = (destination, method = 'click') => {
  trackEvent('navigation', {
    destination,
    method,
  });
};

// Track waitlist signups
export const trackWaitlistSignup = (source = '') => {
  trackEvent('waitlist_signup', {
    source,
    timestamp: new Date().toISOString(),
  });
};

// Track blog interactions
export const trackBlogInteraction = (action, blog_title = '') => {
  trackEvent('blog_interaction', {
    action,
    blog_title,
  });
};
