---
sidebar_position: 2
title: User Management
description: Create, manage, and organize users in ClaryNext
---

# User Management

User management allows administrators to create accounts, assign roles, manage permissions, and support users across the platform.

## User Overview

### Accessing User Management

1. Go to **Admin** dashboard
2. Click **Users**
3. View and manage all users

### User List

The user list shows:
- Name and email
- Role(s)
- Organization
- Status (active, inactive)
- Last login
- Created date

## Creating Users

### Single User Creation

1. Click **Add User** or **+**
2. Enter user details:
   - Email (required)
   - Name
   - Role(s)
   - Organization (if applicable)
   - Initial password or send invite
3. Click **Create User**

### Bulk User Import

For many users:

1. Click **Import Users**
2. Download template CSV
3. Fill in user data
4. Upload completed CSV
5. Review and confirm
6. Users created and invited

### CSV Format

```csv
email,first_name,last_name,role,organization
john@example.com,John,Doe,member,Acme Corp
jane@example.com,Jane,Smith,admin,Acme Corp
```

### Self-Registration

Configure self-registration:
- Enable/disable public sign-up
- Require email verification
- Auto-assign role and org
- Collect additional info

## User Roles

### Built-in Roles

| Role | Description | Permissions |
|------|-------------|-------------|
| **Member** | Standard user | Run activities, access workspace |
| **Author** | Activity creator | Member + design activities |
| **Expert** | Mentor/coach | Member + mentoring features |
| **Vendor** | Marketplace seller | Author + commerce features |
| **Org Admin** | Organization admin | Manage organization |
| **System Admin** | Platform admin | Full platform access |

### Assigning Roles

1. Open user profile
2. Go to **Roles** tab
3. Add or remove roles
4. Save changes

### Multiple Roles

Users can have multiple roles:
- Member + Expert
- Author + Vendor
- Org Admin + Expert

Permissions combine across roles.

### Custom Roles

If supported, create custom roles:
1. Go to **Admin > Roles**
2. Click **New Role**
3. Define permissions
4. Name and describe role
5. Assign to users

## Managing Users

### Searching Users

Find users by:
- Name or email search
- Filter by role
- Filter by organization
- Filter by status
- Sort by various fields

### Viewing User Details

Click on a user to see:
- Profile information
- Role assignments
- Organization membership
- Activity history
- Login history
- Admin notes

### Editing Users

Update user information:
1. Open user profile
2. Click **Edit**
3. Modify fields
4. Save changes

**Editable Fields:**
- Name
- Email
- Roles
- Organization
- Status
- Password reset

### Suspending Users

Temporarily disable access:
1. Open user profile
2. Click **Suspend**
3. Add reason (optional)
4. Confirm suspension

User cannot log in but account preserved.

### Reactivating Users

Restore suspended users:
1. Find user in suspended list
2. Click **Reactivate**
3. Confirm reactivation

Access restored immediately.

### Deleting Users

Permanently remove users:
1. Open user profile
2. Click **Delete**
3. Review data handling options
4. Confirm deletion

:::warning
Deletion may be permanent. Consider suspension first.
:::

## Password Management

### Password Reset

Reset user passwords:
1. Open user profile
2. Click **Reset Password**
3. Choose method:
   - Send reset email
   - Set temporary password
4. User updates on next login

### Password Policies

Configure password requirements:
- Minimum length
- Complexity requirements
- Expiration period
- History restrictions

### Two-Factor Authentication

Manage 2FA settings:
- Require for admins
- Encourage for all users
- Reset user 2FA
- View 2FA status

## Organizations & Teams

### Assigning to Organizations

Add users to organizations:
1. Open user profile
2. Go to **Organization** tab
3. Select organization
4. Choose role within org
5. Save

### Team Assignment

Assign to teams within orgs:
1. Open user profile
2. Go to **Teams** tab
3. Add to teams
4. Set team role
5. Save

### Organization Transfers

Move users between organizations:
1. Open user profile
2. Change organization
3. Handle data transfer options
4. Confirm transfer

## User Activity

### Login History

View authentication history:
- Login timestamps
- IP addresses
- Device/browser info
- Success/failure

### Activity Log

See user actions:
- Activities started/completed
- Content created
- Sessions conducted
- Settings changed

### Usage Statistics

Track engagement:
- Last active date
- Total activity runs
- Content created
- Time in platform

## Batch Operations

### Bulk Role Assignment

Assign roles to multiple users:
1. Select users (checkboxes)
2. Click **Bulk Actions**
3. Choose **Assign Role**
4. Select role
5. Confirm

### Bulk Organization Assignment

Move multiple users to an org:
1. Select users
2. Click **Bulk Actions**
3. Choose **Assign Organization**
4. Select organization
5. Confirm

### Bulk Email

Send communications:
1. Select users
2. Click **Bulk Actions**
3. Choose **Send Email**
4. Compose message
5. Send

## Reporting

### User Reports

Generate reports on:
- New users by period
- Active vs. inactive
- Role distribution
- Organization distribution
- Login activity

### Export Options

Export user data:
- CSV format
- Selected fields
- Filtered results
- Scheduled exports

## Best Practices

### Onboarding

- Clear onboarding process
- Welcome communications
- Initial training/tour
- Support resources

### Maintenance

- Regular access reviews
- Inactive user cleanup
- Permission audits
- Security reviews

### Support

- Clear escalation paths
- Quick response to issues
- Documentation access
- User feedback collection

## Troubleshooting

### User Can't Log In

Check:
- Account status (active?)
- Correct email
- Password reset needed?
- 2FA issues?

### Missing Permissions

Check:
- Role assignments
- Organization membership
- Team membership
- Permission inheritance

### Account Lockout

Resolve lockouts:
- Review login attempts
- Reset password
- Clear lockout status
- Adjust lockout policy if needed

## Next Steps

- **[Configure Organizations](./organizations)** — Org structure
- **[Set Permissions](/administration/admin-overview)** — Access control
- **[View Analytics](/selling/analytics)** — Usage insights
