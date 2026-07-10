# Design and Content Plan for Service Pages

## Global Design Consistency
- **Colors**: Use the theme defined in `globals.css` (`#031427` background, `#2563EB` cobalt electric, `#0B0F19` obsidian deep, `#d3e4fe` on-surface).
- **Typography**: `Plus Jakarta Sans` for headlines, `Inter` for body text.
- **Layout**: 
    - Hero section with a dark overlay and title.
    - Breadcrumbs for navigation.
    - Content sections using a mix of text blocks and visual elements (icons/placeholders).
    - Consistent spacing and border styles (using `border-surface-border`).
- **Icons**: Use Google Material Symbols (as seen in `page.js`).

## Page 1: Guard Division (`/services/guard`)
- **Note**: The folder is currently named `gurad`. I will rename it to `guard` for professionalism unless I find a reason not to.
- **Hero**: "Guard Division: Systematic & Quality-Driven Protection".
- **Section 1: Core Philosophy**: Systematic and slow growth, focus on character and competence.
- **Section 2: Operational Hierarchy**: 2 layers of ground supervision, HQ oversight (daily/weekly/monthly).
- **Section 3: Quality Assurance**: Selection process, training, 6-month assessment cycle, police verification.
- **Section 4: Employee Welfare**: Motivation through salary, promotion, and management access.

## Page 2: Logistics Division (`/services/logistics`)
- **Hero**: "Logistics Division: Integrated Support Services".
- **Section 1: Service Overview**: Supporting clients through facility management.
- **Section 2: Specialized Cleaning**: 
    - Industrial Cleaning.
    - Hospital Cleaning.
    - Corporate House/Office Cleaning.
- **Section 3: Upcoming Services**: Lift servicing, power sub-station servicing, bill deposition.

## Page 3: Risk Management Division (`/services/risk-management`)
- **Hero**: "Risk Management Division: Strategic Security Consulting".
- **Section 1: The Concept**: Moving beyond just guarding to risk assessment and integrated design.
- **Section 2: Our Approach**: Threat analysis based on area and exposure, security surveys/audits.
- **Section 3: Expert Consulting**: Team with 30+ years of experience, certified professionals.
- **Section 4: Service Matrix**: Risk assessment, physical security design, technology planning, executive protection.

## Navbar Update
- Change "Services" to a dropdown.
- Dropdown items:
    - Guard Division
    - Logistics Division
    - Risk Management Division
- Maintain the current styling of the header.

## Implementation Steps
1. Rename `app/services/gurad` to `app/services/guard`.
2. Create `page.js` for each service page.
3. Update `app/components/header.js` for the dropdown.
4. Verify links and mobile responsiveness.
