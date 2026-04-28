---
title: Data collection hygiene
description: How to collect teleop data that trains.
---

## Rules that save you time

- Keep the camera fixed and document its pose.
- Keep resets consistent (same start state distribution).
- Log everything needed to reproduce: code version, config, operator, lighting notes.

## Minimum dataset metadata (suggested)

- task name + version
- robot calibration version
- camera intrinsics/extrinsics (or “fixed” with diagram)
- number of episodes + total steps
- known failure modes
