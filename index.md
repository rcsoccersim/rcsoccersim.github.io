---
title: The RoboCup Soccer Simulator
---

# About the RoboCup Soccer Simulator

The RoboCup Soccer Simulator is a research and educational tool for
multiagent systems and artificial intelligence. It enables for two
teams of 11 simulated autonomous robotic players to play soccer
(football).


# League Overview

Without the neccessity to maintain any robot hardware, the RoboCup
Simulation League's focus comprises artificial intelligence and team
strategy.

In the 2D Simulation League, two teams of eleven autonomous software
programs (called agents) each play soccer in a two-dimensional virtual
soccer stadium represented by a central server, called
SoccerServer. This server knows everything about the game, i.e. the
current position of all players and the ball, the physics and so
on. The game further relies on the communication between the server
and each agent. On the one hand each player receives relative and
noisy input of his virtual sensors (visual, acustic and physical) and
may on the other hand perform some basic commands (like dashing,
turning or kicking) in order to influence its environment.

The big challenge in the Simulation League is to conclude from all
possible world states (derived from the sensor input by calculating a
sight on the world as absolute and noise-free as possible) to the best
possible action to execute. As a game is divided into 6000 cycles this
task has to be accomplished in time slot of 100 ms (the length of each
cycle). Further information and the SoccerServer software can be
accessed via [https://github.com/rcsoccersim/](https://github.com/rcsoccersim/).


# Download

- [Server](https://github.com/rcsoccersim/rcssserver/releases)
- [Monitor](https://github.com/rcsoccersim/rcssmonitor/releases)

- [Log & Binary Archive](https://archive.robocup.info/Soccer/Simulation/2D/)

# Documentation

- [Users Manual](./manual/) (Now, migrating from the old manual)
- [Old Users Manual](./rcssserver-manual-20030211.pdf)


# Events

- Upcoming Events
  - [RoboCup 2022](https://2022.robocup.org/)
    - [Call For Participation](https://docs.google.com/document/d/1y3QxyKUvmJw4V74TQga5wpFP2j41_VG-z16zb-jVg2E/edit?usp=sharing%20Introduction)
    - [Pre-Registration](https://forms.gle/tKyVA2YXQGLZgt1T7)
    - [Submitting Qualification Materials](https://forms.gle/s3JmVW8JwuVV4pDx9)
  - [RoboCup Asia Pacific 2021](https://2021.robocupap.org/eng/index.html)

- Past Events
  - [RoboCup2021 online](https://2021.robocup.org/)
    - [Information board](https://docs.google.com/document/d/18FbbsghP-4K5P_G2hUpANdibdUzqepqLAmdL2jZ_FMM/edit?usp=sharing)
    - [Team Description Papers](./robocup2021/TDP/)
    - [Logs and Binaries](https://drive.google.com/drive/folders/1QoR0ELzM_NCP26jiwIxdfciPhruUUgiL)
  - postponed: [RoboCup2020](https://ssim.robocup.org/soccer-simulation-2d/2d-competition/2020-2/call-for-participation/)
  - [The Virtual RoboCup Brazil Open 2020 Competition](http://www.cbrobotica.org/)
  - [JapanOpen2020 online](https://docs.google.com/document/d/1lzh7coqRM1kHWJxnlr-tGMDMC5WFsxUDHPQoZS7m630/edit?usp=sharing)
  - [RoboCup2019](./robocup2019/)
    - [Information board](https://docs.google.com/document/d/1BNe1-sV_5-AZvmM9SAc4TQwgX4_jbwIenl0QnEGUOyY/edit?usp=sharing)

<!--
- Past Events
  - RoboCup2018
  - RoboCup2017
  - ...
-->

# Community

- [Forum](https://ssim.forum.robocup.org/)
- [Mailing List](https://lists.robocup.org/options/robocup-sim)
- [RoboCup Soccer Simulation League](https://ssim.robocup.org/)
- [RoboCup Official Site](https://www.robocup.org/)
- [Discord Server](https://discord.gg/yFxkCcatGe)
