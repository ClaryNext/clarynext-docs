---
sidebar_position: 3
title: Organizations
description: Set up and manage multi-tenant organizations in ClaryNext
---

# Organizations

Organizations enable multi-tenant deployments where companies, schools, or groups can have their own spaces within ClaryNext. This guide covers organization setup and management.

## Organization Overview

### What Are Organizations?

Organizations provide:
- Isolated user groups
- Custom branding
- Private content
- Centralized management
- Team structures
- Shared billing

### Organization Types

**Company/Corporate**
- Employee training
- Internal programs
- Department structure

**Educational**
- Schools/universities
- Student cohorts
- Course delivery

**Professional Services**
- Client organizations
- Coaching practices
- Consulting firms

**Community**
- Membership groups
- Non-profits
- Associations

## Creating Organizations

### New Organization

1. Go to **Admin > Organizations**
2. Click **New Organization**
3. Enter organization details:
   - Name
   - Type/category
   - Contact info
   - Billing setup
4. Configure settings
5. Create organization

### Organization Details

**Basic Info**
- Organization name
- Description
- Industry/type
- Website

**Contact**
- Primary contact name
- Email
- Phone
- Address

**Billing**
- Billing contact
- Payment method
- Plan/subscription
- Invoice settings

## Organization Structure

### Hierarchy

Typical structure:
```
Organization
├── Departments/Divisions
│   ├── Teams
│   │   └── Members
│   └── Teams
└── Departments/Divisions
    └── Teams
```

### Teams

Create teams within organizations:
1. Open organization
2. Go to **Teams**
3. Click **New Team**
4. Name and describe
5. Add members

### Departments

If using departments:
1. Go to **Structure**
2. Create department hierarchy
3. Assign teams to departments
4. Set department leaders

## Organization Settings

### General Settings

**Visibility**
- Public (discoverable)
- Private (invite only)
- Hidden (URL only)

**Membership**
- Open (anyone can join)
- Approval required
- Invite only

**Self-Registration**
- Allow with org domain
- Require approval
- Disabled

### Branding

Customize appearance:
- Organization logo
- Brand colors
- Custom CSS (if enabled)
- Email templates

### Features

Enable/disable features:
- Activity authoring
- Marketplace access
- AI features
- External sharing
- Integrations

### Policies

Set organization policies:
- Password requirements
- Session timeouts
- Data retention
- Privacy settings

## Member Management

### Adding Members

**Invite by Email**
1. Go to **Members**
2. Click **Invite**
3. Enter emails
4. Set role
5. Send invitations

**Domain Auto-Join**
Allow users with organization email domain to join automatically.

**Import Members**
Bulk import from CSV or directory integration.

### Member Roles

**Member**
- Access org content
- Run activities
- Basic features

**Team Leader**
- Member permissions
- Manage team
- View team progress

**Department Admin**
- Manage department
- Multiple teams

**Organization Admin**
- Full org management
- User management
- Settings access

**Owner**
- Complete control
- Billing management
- Delete organization

### Managing Members

- View all members
- Filter by team/role
- Search by name/email
- Export member list
- Bulk operations

### Removing Members

1. Find member
2. Click **Remove**
3. Choose data handling
4. Confirm removal

## Content Management

### Organization Content

**Private Activities**
- Created within org
- Only members can access
- Assigned by admins

**Licensed Content**
- Purchased from marketplace
- Assigned to members
- Org-wide license

### Content Assignment

Assign to members:
1. Select activity
2. Choose recipients (individual, team, all)
3. Set due date (optional)
4. Assign

### Content Library

Manage organization library:
- Add/remove content
- Organize by category
- Track usage
- Manage licenses

## Reporting & Analytics

### Organization Dashboard

Overview metrics:
- Active users
- Activity completion
- Engagement trends
- Top content

### User Progress

Track member progress:
- Completion rates
- Activity engagement
- Time spent
- Scores/outcomes

### Team Reports

Compare team performance:
- By team
- By department
- Over time
- Benchmark comparisons

### Export & Integration

Export data:
- CSV reports
- API access
- LMS integration (if available)
- BI tool connection

## Billing & Subscriptions

### Organization Plans

Plans may include:
- User seat count
- Feature access
- Storage limits
- Support level

### Managing Subscription

1. Go to **Billing**
2. View current plan
3. Upgrade/downgrade
4. Manage payment

### Adding Seats

Add more users:
1. Go to **Billing > Seats**
2. Enter additional count
3. Review prorated cost
4. Confirm purchase

### Invoicing

For enterprise:
- Invoice billing
- PO support
- Custom terms
- Centralized billing

## Security & Compliance

### Access Control

- SSO integration
- Role-based access
- IP restrictions
- Session management

### Data Privacy

- Data isolation
- Export controls
- Retention policies
- GDPR tools (if applicable)

### Audit Logging

Track actions:
- Who did what
- When it happened
- Data accessed
- Changes made

## Integrations

### SSO Integration

Single Sign-On options:
- SAML 2.0
- OAuth/OIDC
- Active Directory

### Directory Sync

Sync users from:
- Azure AD
- Okta
- Other directories

### API Access

Organization API:
- User management
- Content assignment
- Progress retrieval
- Reporting

## Best Practices

### Setup

- Plan structure before creating
- Start with pilot group
- Gather requirements
- Document configurations

### Ongoing Management

- Regular access reviews
- Content curation
- Usage monitoring
- Member feedback

### Growth

- Scale structure as needed
- Add features progressively
- Train new admins
- Document processes

## Troubleshooting

### Members Can't Access Content

Check:
- Content is assigned
- Member has correct role
- Org membership is active

### SSO Issues

Check:
- Configuration correct
- Certificates valid
- User mapping correct

### Billing Problems

Check:
- Payment method valid
- Plan limits not exceeded
- Invoices paid

## Next Steps

- **[Manage Users](./user-management)** — Add members
- **[Configure Marketplace](./marketplace-config)** — Commerce settings
- **[Set Up AI](./ai-configuration)** — AI features
