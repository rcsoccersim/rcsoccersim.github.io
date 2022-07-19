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

- [Log & Binary Archive](https://archive.robocup.info/Soccer/Simulation/2D/) (Please note this site is volunteered, not an official one.)

# Documentation

- [Users Manual](https://rcsoccersim.readthedocs.io/)


# Events

- Upcoming Events
  - [RoboCup 2023](https://2023.robocup.org/)

- Past Events
  - [RoboCup 2022](https://2022.robocup.org/)
    - [Information Board](https://docs.google.com/document/d/1mP4SHTXTgdkruqdR7llE3jNgcOpjlB1-N-zHoGmsx0I/edit?usp=sharing)
    - [Team Description Papers](./robocup2022/TDP/index.md)
    - [Logs](https://drive.google.com/drive/folders/109Vjif6GmYswQw3B9edYK-HELCigzKk8?usp=sharing)
    - [Binaries](https://drive.google.com/drive/folders/1DhqovuqXBKZ1YNFvkmXn4hfiIopj4DOe?usp=sharing)
    - [Call For Participation](https://docs.google.com/document/d/1y3QxyKUvmJw4V74TQga5wpFP2j41_VG-z16zb-jVg2E/edit?usp=sharing%20Introduction)
    - [List of Qualified Teams](https://ssim.robocup.org/2022/04/05/qualified-teams-robocup-2022-soccer-simulation-2d/)
    - [Rules](https://docs.google.com/document/d/1XPKRjVzhFiJk65EsZckMRZkdgvKcaRvxButGBzvjszE/edit?usp=sharing)
  - [IranOpen 2022](http://iranopenrobocup.ir/)
    - [Major League Information Board](https://docs.google.com/document/d/1maHc0JDC3UpwaHXjVX6OfWvQbx4CJlrzEz4uPr2zpjA/edit?usp=sharing)
    - [Starter League Information Board](https://docs.google.com/document/d/1nHRUk_lDFsd7pD4iyuubOKA_BuF31TPzqf6JR_G933o/edit?usp=sharing)
    - [Logs](https://drive.google.com/drive/folders/10rSIPsBaEkys9XbGQdS4x4I7vNOMcg0s?usp=sharing)
    - [Binaries](https://drive.google.com/drive/folders/1reupGqEzefktZJFgqSmoVTdJjnQ46Wpm?usp=sharing)
  - [RoboCup Asia Pacific 2021](https://2021.robocupap.org/eng/index.html) ([Information board](https://docs.google.com/document/d/1eJGe3B4d-nGcAER82PhEUQ0Jpg3JWbnE3nM0fwnDSL0/edit?usp=sharing))
  - [RoboCup2021 online](https://2021.robocup.org/) ([Information board](https://docs.google.com/document/d/18FbbsghP-4K5P_G2hUpANdibdUzqepqLAmdL2jZ_FMM/edit?usp=sharing)) ([Team Description Papers](./robocup2021/TDP/))
  - ~~[RoboCup2020](https://ssim.robocup.org/soccer-simulation-2d/2d-competition/2020-2/call-for-participation/)~~ postponed
  - [The Virtual RoboCup Brazil Open 2020 Competition](http://www.cbrobotica.org/)
  - [JapanOpen2020 online](https://docs.google.com/document/d/1lzh7coqRM1kHWJxnlr-tGMDMC5WFsxUDHPQoZS7m630/edit?usp=sharing)
  - [RoboCup2019](./robocup2019/) ([Information board](https://docs.google.com/document/d/1BNe1-sV_5-AZvmM9SAc4TQwgX4_jbwIenl0QnEGUOyY/edit?usp=sharing))

<!--
- Past Events
  - RoboCup2018
  - RoboCup2017
  - ...
-->

# Community

Please join 2D Soccer Simulation community where you can ask how to develop your teams, and also discuss the game rules and of course the future of the league!
You can also receive useful information that the organizers of the events (such as World Competition, RoboCup Asia-Pacific (RCAP), and other local events including Brazil, China, Iran,Japan and Portugal) and the latest update of the soccer simulator.

We reccomend to join our Discord server to stay up to date and to post doubts and ask for help from the community to start a new team.
The live announcement (such as game schedule and scores) of the official events are also provided in the discord server:

- **[RoboCup Soccer Simulation 2D Discord server](https://discord.gg/yFxkCcatGe)**

We also suggest that you subscribe to the mailing lists to stay up to date and to post doubts and ask for help from the community to start a new team:

- **[RoboCup Soccer Simulation mailing list](https://lists.robocup.org/listinfo/robocup-sim)**

Of course, the official web pages also help you keep up-to-date.
Please check the web pages periodically.

- **[RoboCup Soccer Simulation League](https://ssim.robocup.org/)**
- **[RoboCup Federation official web site](https://www.robocup.org/)**
