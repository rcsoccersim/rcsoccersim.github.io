---
sidebar_position: 12
---

# Attentionto Model

Version 8 and above players can send `attentionto` commands to focus their attention on a particular player.
The command has the form:

> (attentionto \<TEAM> \<UNUM>) | (attentionto off)

Where `<TEAM>` is

> `opp` | `our` | `l` | `r` | `left` | `right` | \<TEAM_NAME>

and `<UNUM>` is integer identifying a member of the team specified.
Players can only focus on one player at a time (each attentionto command
overrides the previous) and cannot focus on themselves.

See [Section Sensor Model](./../sensor-models.md) in detail about the aural sensor.
