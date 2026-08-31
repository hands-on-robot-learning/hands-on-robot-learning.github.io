---
title: SO-101 and course tooling setup
description: Bring a robot, camera, and software environment to a reliable baseline state.
---

## Target state

Before collecting data, your team should be able to show that:

- The follower arm connects, calibrates, and reaches a safe home pose repeatably.
- Motor IDs, calibration files, and robot identifiers are recorded in team documentation.
- Cables move freely through the full workspace without snagging or entering pinch points.
- The fixed camera is stable, in focus, and visible to the recording environment.
- A short teleoperated episode can be recorded, replayed, and inspected end to end.

## Hardware bring-up

1. Inventory the motors, printed parts, fasteners, controller, power supply, and USB cables.
2. Assemble the arm with consistent cable routing and conservative joint motion.
3. Configure motor IDs one joint at a time before connecting the full chain.
4. Calibrate the leader and follower arms, then save the resulting calibration files.
5. Establish a safe home pose and confirm that the arm can return to it repeatedly.

Follow the current [SO-101 guide in the LeRobot documentation](https://huggingface.co/docs/lerobot/so101) for the authoritative assembly and motor-configuration sequence. Course-specific port names, IDs, and storage paths will be announced with the lab machines.

## Software smoke test

- Confirm that the course Python environment starts without dependency conflicts.
- Verify the serial ports for the leader and follower arms.
- Connect to the camera and inspect resolution, frame rate, exposure, and orientation.
- Teleoperate slowly while another team member watches cables, joint limits, and the emergency-stop path.
- Record a short test episode and confirm that video, robot state, and actions are synchronized.

## Record before moving on

Add the following to your team log:

- Robot and teleoperator IDs
- Calibration-file locations and date
- Camera device, resolution, frame rate, and mounting notes
- Known mechanical limits or cable-routing concerns
- A link to the first successful test episode

Do not begin a long data-collection session until the setup is repeatable and the test episode has been reviewed by the whole team.
