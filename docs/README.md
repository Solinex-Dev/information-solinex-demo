# Solinex Documentation

This directory contains documentation for the Solinex website project.

## Available Documentation

### Current Setup

- **[EMAILJS_SETUP.md](EMAILJS_SETUP.md)** - Complete guide for setting up EmailJS for the contact form
  - How to create an EmailJS account
  - Configuring email services
  - Setting up email templates
  - Environment variable configuration
  - Troubleshooting tips

### Legacy Documentation

The following documents are kept for reference but are no longer actively used:

- **DASHBOARD_SETUP.md** - Legacy admin dashboard setup (removed in EmailJS migration)
- **WEB3FORMS_SETUP.md** - Legacy Web3Forms setup (replaced by EmailJS)

## Quick Start

To set up the contact form:

1. Follow the [EmailJS Setup Guide](EMAILJS_SETUP.md)
2. Copy `.env.example` to `.env` in the project root
3. Add your EmailJS credentials to `.env`
4. Restart the development server

## Project Changes

### Migration to EmailJS (October 2025)

The project has been migrated from a custom backend API to EmailJS for contact form submissions. This change includes:

**Removed:**
- `/server` directory (Node.js/Express backend)
- `/src/pages/AdminDashboard.jsx` (admin dashboard)
- React Router routing (now single-page app)
- Backend-related npm scripts

**Added:**
- EmailJS integration
- Environment variable configuration
- Simplified deployment (no backend needed)

**Benefits:**
- Simpler deployment (static site only)
- No backend server to maintain
- Reduced hosting costs
- Built-in spam protection with EmailJS

## Support

For questions or issues:
- Check the relevant documentation first
- Review the main [README.md](../README.md)
- Contact the development team

---

**Last Updated:** October 2025


