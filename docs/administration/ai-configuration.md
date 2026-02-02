---
sidebar_position: 5
title: AI Configuration
description: Configure AI features, prompts, and knowledge base for ClaryNext
---

# AI Configuration

ClaryNext's AI features power intelligent activity components, content generation, and personalized experiences. This guide covers AI configuration for administrators.

## AI Overview

### AI Capabilities

ClaryNext AI enables:
- Personalized activity feedback
- Content generation (Sketchbook)
- Intelligent analysis
- Dynamic recommendations
- Conversational interactions

### AI Components in Activities

Authors can use:
- AI Prompt (conversational)
- AI Analysis (pattern recognition)
- AI Content (dynamic generation)
- AI Feedback (response evaluation)

## Default AI Settings

### Accessing AI Configuration

1. Go to **Admin > AI Configuration**
2. View and modify AI settings

### Global Settings

**AI Enable/Disable**
- Turn AI features on/off platform-wide
- Emergency kill switch
- Maintenance mode

**Default Model**
- Select default AI model
- Configure fallback options
- Set quality/speed tradeoffs

**Rate Limits**
- Requests per user per hour
- Daily limits
- Burst allowances

**Credit System**
- Credit cost per AI call
- Free tier allowances
- Credit refresh rules

## Prompt Configuration

### System Prompts

Configure default system behavior:

**Base System Prompt**
```
You are a supportive coach helping users with personal
development. Be encouraging, practical, and concise.
Keep responses under 200 words unless asked for more.
```

**Context Variables**
Available variables in prompts:
- `{{user.name}}` — User's name
- `{{activity.title}}` — Current activity
- `{{organization.name}}` — User's organization
- `{{response.X}}` — Previous activity responses

### Prompt Templates

Create reusable templates:

1. Go to **AI > Prompt Templates**
2. Click **New Template**
3. Define template:
   - Name
   - Description
   - System prompt
   - User prompt template
   - Output format
4. Save for author use

### Example Templates

**Coaching Feedback**
```yaml
Name: Coaching Feedback
Description: Provides supportive coaching feedback

System: |
  You are a supportive coach. Provide brief, encouraging
  feedback that acknowledges the user's insight and
  suggests one actionable next step.

User Template: |
  The user shared: "{{input}}"
  Context: They're working on {{goal}}.

Output: 3-4 sentences, encouraging tone
```

**Reflection Prompt**
```yaml
Name: Deepen Reflection
Description: Helps users go deeper in reflection

System: |
  Ask one thoughtful question that helps the user
  explore their response more deeply. Be curious
  and non-judgmental.

User Template: |
  The user reflected: "{{input}}"

Output: Single question, open-ended
```

## Knowledge Base

### Purpose

The knowledge base provides:
- Context for AI responses
- Accurate information
- Consistency across interactions
- Domain-specific knowledge

### Managing Knowledge

1. Go to **AI > Knowledge Base**
2. View and edit knowledge entries

### Adding Knowledge

**Manual Entry**
1. Click **Add Entry**
2. Enter:
   - Topic/category
   - Content
   - Keywords
   - Priority
3. Save

**Import**
- Upload documents (PDF, MD, TXT)
- Bulk import via CSV
- API upload

### Knowledge Structure

Organize by:
- Categories (topics)
- Priority (importance)
- Scope (global, org, activity)
- Freshness (update frequency)

### Example Entries

```yaml
Topic: Boundary Setting
Category: Communication
Priority: High
Content: |
  Boundaries are limits we set to protect our wellbeing.
  The DEAR MAN technique is effective for boundary
  conversations:
  - Describe the situation objectively
  - Express your feelings using "I" statements
  - Assert your needs clearly
  - Reinforce the benefits
  - Stay Mindful of your goal
  - Appear confident
  - Negotiate if needed
```

## AI Examples

### Purpose

Examples guide AI behavior:
- Few-shot learning
- Consistent output style
- Quality benchmarks
- Edge case handling

### Creating Examples

1. Go to **AI > Examples**
2. Click **New Example**
3. Provide:
   - Input (what user said)
   - Ideal Output (desired response)
   - Context (when to use)
4. Save

### Example Entry

```yaml
Category: Goal Setting Feedback

Input: |
  I want to be more productive.

Bad Output: |
  That's great! You should try time blocking and
  setting priorities. [Too generic, not personalized]

Good Output: |
  That's a meaningful goal. To help you make it
  actionable: What does "productive" look like for
  you specifically? Is it about getting more done,
  feeling less stressed, or something else?
```

## AI Guardrails

### Safety Settings

Configure safety filters:
- Content appropriateness
- Sensitivity handling
- Topic restrictions
- Response limits

### Content Policies

Define what AI should not do:
- Medical/legal advice
- Personal predictions
- Controversial opinions
- Harmful suggestions

### Fallback Responses

When AI can't respond appropriately:
```
Default Fallback: |
  I appreciate you sharing that. This seems like
  something that might benefit from a conversation
  with a professional. Would you like to continue
  with the next step?
```

### Monitoring

Track AI behavior:
- Response quality scores
- Flagged responses
- User feedback
- Pattern detection

## Organization-Specific AI

### Per-Organization Settings

Organizations can have custom:
- System prompts
- Knowledge bases
- Examples
- Guardrails

### Inheritance

Settings cascade:
1. Global defaults
2. Organization overrides
3. Activity-specific overrides

### Enabling Customization

Allow orgs to customize:
1. Go to **Organizations > [Org] > AI**
2. Enable customization
3. Set bounds/limits
4. Org admins can modify

## AI Credits & Usage

### Credit Configuration

Set credit costs:
- Simple AI call: 1 credit
- Complex analysis: 2-3 credits
- Content generation: 3-5 credits

### Allocations

Define allocations:
- Free tier: 10 credits/month
- Basic plan: 50 credits/month
- Premium: 200 credits/month
- Unlimited options

### Usage Monitoring

Track usage:
- By user
- By organization
- By activity
- By feature type

### Alerts

Set usage alerts:
- Approaching limit
- Unusual patterns
- Cost thresholds

## Performance & Quality

### Quality Metrics

Track AI quality:
- User satisfaction ratings
- Completion rates
- Re-prompt rates
- Feedback scores

### A/B Testing

If supported:
- Test prompt variations
- Compare model performance
- Optimize over time

### Continuous Improvement

- Review flagged responses
- Update examples
- Refine prompts
- Expand knowledge base

## Troubleshooting

### AI Not Responding

Check:
- AI enabled globally?
- Credits available?
- Rate limits hit?
- Service status?

### Poor Quality Responses

Try:
- Review/update prompts
- Add relevant examples
- Expand knowledge base
- Adjust guardrails

### Slow Responses

Check:
- Model selection
- Response length limits
- Network issues
- Load status

## Best Practices

### Prompt Engineering

- Be specific and clear
- Provide good context
- Include constraints
- Test extensively

### Knowledge Management

- Keep current
- Verify accuracy
- Organize well
- Prune outdated content

### Safety First

- Conservative guardrails
- Regular audits
- User feedback loops
- Quick escalation paths

## Next Steps

- **[Manage Users](./user-management)** — User administration
- **[Configure Marketplace](./marketplace-config)** — Commerce settings
- **[View Analytics](/selling/analytics)** — Usage insights
