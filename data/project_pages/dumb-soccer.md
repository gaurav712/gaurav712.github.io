# Dumb Soccer

**Status:** In progress · **Started:** Jun, 2026

---

<!-- screenshots -->

## Overview

_Dumb Soccer_ is a simple 2D multiplayer soccer game written in **C** using
**raylib**. The idea is intentionally small: two teams, one ball, a couple of
goals, and just enough physics to make scoring feel satisfying. No accounts,
no sign ups. Just boot it up and play with friends.

It's called _Dumb Soccer_ because it doesn't try to be a simulation. It's
simple, fast, and easy to pick up.

---

## Gameplay

- Top-down 2D pitch with two goals.
- Kick, chase, and body-check the ball toward the opponent's net.
- Lightweight ball physics; Friction, bounces off the walls, and a bit of
  momentum when you strike it.

---

## Multiplayer

Dumb Soccer is built around playing _with_ someone, in one of two ways:

- **Couch:** two players share the same machine. Plug in gamepads and
  go head-to-head on the same screen.
- **Remote:** play against a friend over the network, with game state kept in
  sync between the two clients.

---

## Tech

- **Language:** C
- **Framework:** [raylib](https://www.raylib.com/) for rendering, input, and
  audio.
- Small, dependency-light codebase that builds and runs on Linux, Windows and Mac.

---

## In progress

Project is still in progress. Current focus areas:

- Refining the ball physics and collisions.
- Backend latency and minimal back and forth requests.
- Configurable controls.

