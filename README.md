# AWS Troubleshooting Hub

A comprehensive React-based troubleshooting platform for AWS services, providing organized access to troubleshooting guides across multiple service categories including DMS, Networking, Analytics, and more.

## Overview

Built to streamline AWS support workflows, this application provides a centralized hub for accessing troubleshooting documentation across various AWS service categories. The platform features an intuitive service selection interface with detailed troubleshooting guides for each category.

## Key Features

- **Multi-Service Support**: Covers 11+ AWS service categories
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices  
- **Interactive Navigation**: Intuitive service selection with visual cards
- **Search Functionality**: Advanced search with external AWS resource integration
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Modern UI**: Clean, professional interface with smooth animations

## Service Categories

### Available Services
- **DMS Troubleshooting** - Database Migration Service guides
- **Networking** - VPC, Load Balancer, and networking solutions
- **Database** - RDS, Aurora, and database service guides
- **Analytics** - Data analytics and processing services
- **Big Data** - Large-scale data processing solutions
- **Deployment** - CI/CD and deployment automation
- **Security** - IAM, encryption, and security services
- **Linux** - Linux system administration and troubleshooting
- **Windows** - Windows Server and enterprise solutions
- **SCD** - Storage and content delivery services
- **Unified Operations** - Monitoring and operations tools

### Specialized Sections
- **SVLS (Serverless)**: Lambda, API Gateway, Step Functions
- **DMI (Developer Mobile, Messaging & IoT)**: IoT, messaging, and mobile services
- **ELB**: Comprehensive load balancer troubleshooting

## Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd aws-troubleshooting-hub

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Development Setup

### Prerequisites
- Node.js 14+ 
- npm or yarn package manager

### Local Development
```bash
# Install dependencies
npm install

# Start development server (opens http://localhost:3000)
npm start

# Run tests
npm test

# Build production bundle
npm run build
```

## Project Architecture

```
src/
├── components/           # Reusable UI components
│   ├── EnhancedPageLayout.js  # Main layout wrapper
│   ├── Header.js             # Page headers
│   ├── SearchBox.js          # Search functionality
│   ├── NavigationBar.js      # Top navigation
│   └── Node.js              # Content tree nodes
├── pages/               # Route components
│   ├── HomePage.js      # Service selection hub
│   ├── DMSPage.js       # DMS service categories
│   ├── NetworkingPage.js # Networking categories
│   └── [ServicePages]   # Individual service pages
├── data/               # Content and configuration
│   ├── svlsTroubleshootingData.js
│   ├── elbTroubleshootingData.js
│   └── troubleshootingData.js
└── App.js              # Main routing and app structure
```

## Usage

1. **Service Selection**: Choose from available service categories on the homepage
2. **Category Navigation**: Browse subcategories within each service area
3. **Troubleshooting Guides**: Access detailed troubleshooting content with search functionality
4. **External Resources**: Integrated links to AWS documentation and community resources

## Contributing

### Code Style
- Follow existing component patterns
- Use functional components with hooks
- Maintain consistent naming conventions
- Include proper PropTypes or TypeScript definitions

### Adding New Services
1. Create service page component in `src/pages/`
2. Add route in `App.js`
3. Update homepage service list
4. Create data file if needed

## Technology Stack

- **React 18** - UI framework
- **React Router** - Client-side routing
- **CSS3** - Styling with custom properties and flexbox/grid
- **Jest & React Testing Library** - Testing framework

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- Optimized bundle size with code splitting
- Lazy loading for route components
- Efficient CSS with minimal unused rules
- Responsive images and assets

---

*Built for AWS support teams and system administrators*

## Developer

**Developed by [@imujjwal](https://github.com/imujjwal)**
CSE1 - SVLS

This project was created to streamline AWS troubleshooting workflows and provide centralized access to comprehensive troubleshooting documentation across multiple AWS service categories.