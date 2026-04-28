---
title: Training an ACT-style policy
description: A minimal, reproducible training loop outline.
---

## Starter workflow

1. Start with a tiny dataset slice and overfit it on purpose.
2. Confirm action scaling and timing are correct.
3. Expand data volume and add mild augmentations.
4. Track failure cases with videos, not just loss curves.

This guide is intentionally compact while the Fall 2026 training stack stabilizes. Treat it as the first pass of a reproducible workflow: verify the data path, prove the model can learn a tiny subset, then scale only after the robot evidence and logs make sense.
