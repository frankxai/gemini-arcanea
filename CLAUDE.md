# Gemini Arcanea Integration

> *"Through the Gates we rise. With the Guardians we create."*

## Overview

This repository provides **Google Gemini integration** for the Arcanea Intelligence OS - enabling Guardian agents, Gate-based skills, and multi-modal AI capabilities through Gemini.

## Guardian: Alera (Voice Gate - 741 Hz) + Lyria (Sight Gate - 852 Hz)

Alera oversees AI integrations while Lyria brings visual intelligence for Gemini's multi-modal capabilities.

## Repository Purpose

- Gemini API integration
- Multi-modal Guardian agents (text + vision)
- Gemini-specific prompts and skills
- Vision-enhanced workflows

## Structure

```
gemini-arcanea/
├── src/
│   ├── client.ts         # Gemini API client
│   ├── guardians/        # Guardian implementations
│   ├── multimodal/       # Vision capabilities
│   ├── skills/           # Gemini-specific skills
│   └── workflows/        # Workflow definitions
├── agents/               # Agent department definitions
├── skills/               # Skill files
├── package.json
└── CLAUDE.md
```

## Agent Department

**Department:** Multi-Modal Intelligence
**Lead Guardians:** Alera + Lyria
**Support:** Aiyami (Crown), Shinkami (Orchestration)

**Responsibilities:**
- Gemini API integration
- Vision processing
- Multi-modal skill development
- Image analysis workflows

## Unique Capabilities

### Vision Guardian
Gemini enables visual understanding:
- Image analysis with Guardian context
- Design critique (Lyria)
- Security scan of screenshots (Lyssandria)
- UI/UX review (Maylinn)

### Multi-Turn Conversations
Extended context for complex tasks with Guardian routing.

## Development

```bash
# Install dependencies
pnpm install

# Set up Gemini API key
export GEMINI_API_KEY=your_key

# Build
pnpm build

# Test
pnpm test
```

## Integration with Arcanea Hub

This repo is part of the Arcanea Workspace Hub at `C:\Users\frank\arcanea-hub\gemini-arcanea`.

---

*Guardians Alera (Voice) and Lyria (Sight) unite for multi-modal intelligence*
