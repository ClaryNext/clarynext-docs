---
sidebar_position: 3
title: AI Prompts
description: Add AI-powered features to activities
---

# AI Prompts

AI components bring intelligent, personalized feedback to activities.

## Available AI Components

| Component | Purpose |
|-----------|---------|
| **AI Prompt** | Conversational AI interaction |
| **AI Analysis** | Pattern recognition and insights |
| **AI Feedback** | Personalized response to inputs |

## AI Prompt Component

Interactive AI conversation within activities.

### Configuration

**System Prompt** — Define the AI's role:
```
You are a supportive career coach helping users
explore their professional goals.
```

**Context Variables** — Include user data:
```
The user described their challenge as: {{step2.challenge}}
```

### Settings

- Maximum response length
- Follow-up question behavior
- Output format preferences

## AI Analysis Component

Analyze user inputs and identify patterns.

- Summarize multiple responses
- Identify themes across answers
- Generate insights
- Suggest next steps

## AI Feedback Component

Immediate personalized feedback on user responses.

- Coaching on user input
- Expanding on ideas
- Suggesting improvements

## Credit Usage

AI features consume credits:
- Included with subscriptions
- Additional credits purchasable
- Usage tracked per activity

## Next Steps

- [Action Components](./action-components)
- [Activity Settings](/authoring/activity-settings)
