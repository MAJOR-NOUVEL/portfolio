/**
 * Vercel Web Analytics Initialization
 * This script initializes Vercel Web Analytics for tracking page views and user interactions.
 */

// Initialize Vercel Analytics using the inject method
import { inject } from './node_modules/@vercel/analytics/dist/index.mjs';

inject();
