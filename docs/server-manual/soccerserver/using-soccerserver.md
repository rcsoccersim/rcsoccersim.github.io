# Using Soccerserver
To start the server either type:

```
./rcssserver
```

from the directory containing the executable or:

```
rcssserver
```

if you installed the executables in your PATH.

## Configuration Files

rcssserver will look in your home directory for the configuration files:

- .rcssserver/server.conf
- .rcssserver/player.conf
- .rcssserver/CSVSaver.conf
- .rcssserver-landmark.xml

If .conf files do not exist, they will be created and populated with
default values.

You can include additional configuration files by using the `include=FILE`
option to `rcssserver`.

**TODO**

- \[8.01\] landmark reader
- \[13.0.0\] RCSS_CONF_DIR

## Recording Command Log

**TODO: description about .rcl file**

## Automatic Mode

**TODO: \[9.0.2\]**

## Anonyous Mode

Anonymous Mode,which was introduced in server version 16.0.0 allows the server
to hide team names from opponents. There are two parameters inside server.conf, which
allow each side's name to be set to a fixed string. If the parameter is empty, the
real name of the team will be reported to the opponent.

| Parameter                | Description                                                  |
|--------------------------|--------------------------------------------------------------|
| server::fixed_teamname_l | Fixed name of the left team, which is sent to the right team. |
|                          | Leave empty for real name.                                   |
| server::fixed_teamname_r | Fixed name of the right team, which is sent to the left team. |
|                          | Leave empty for real name.                                   |


## Synchronous Mode

**TODO: \[7.11\] in ChangeLog**

## Result Saver

**TODO**

- \[9.4.0\] StdOutSaver, MySQLSaver
- \[9.4.3\] CSVSaver

## The Soccerserver Parameters

| Name                        | Current Value in `server.conf` | Description                                                                                     |
|-----------------------------|-------------------------------|-------------------------------------------------------------------------------------------------|
| version                     | VERSION                       | soccer server version                                                                           |
| catch_ban_cycle             | 5                             | goalies cannot execute the next catch until this cycle has passed after the successful catch.    |
| clang_win_size              | 300                           | time window which controls how many messages can be sent (coach language)                        |
| clang_advice_win            | 1                             | number of advice messages per window                                                             |
| clang_define_win            | 1                             | number of define messages per window                                                             |
| clang_del_win               | 1                             | number of del messages per window                                                                |
| clang_info_win              | 1                             | number of info messages per window                                                               |
| clang_mess_delay            | 50                            | delay between receipt of message and send to players                                             |
| clang_mess_per_cycle        | 1                             | maximum number of coach messages sent per cycle                                                  |
| clang_meta_win              | 1                             | number of meta messages per window                                                               |
| clang_rule_win              | 1                             | number of rule messages per window                                                               |
| clang_win_size              | 1                             | The length of clang message window                                                               |
| coach_port                  | 6001                          | (offline) coach port                                                                             |
| connect_wait                | 300                           | maximum cycle to wait for client connections in automatic mode                                   |
| drop_ball_time              | 100                           | number of cycles to wait until dropping the ball automatically                                   |
| extra_half_time             | 100                           | length of a half time of extra halves in seconds                                                 |
| foul_cycles                 | 5                             | idle cycles of foul charged players                                                              |
| freeform_send_period        | 20                            | online coaches can send a freeform message during this period after the waiting period           |
| freeform_wait_period        | 600                           | online coaches can send a freeform message after waiting this period                             |
| game_log_compression        | 0                             | compression level of game log file                                                               |
| game_log_version            | 5                             | version of game log format                                                                       |
| game_over_wait              | 100                           | maximum cycle to wait for server termination in automatic mode                                   |
| goalie_max_moves            | 2                             | goalie max. moves after a catch                                                                  |
| half_time                   | 300                           | length of a half time in seconds                                                                 |
| hear_decay                  | 1                             | value that reduces the auditory capacity when receiving an auditory message                      |
| hear_inc                    | 1                             | value that increases the auditory capacity when the game cycle is updated                        |
| hear_max                    | 1                             | maximum value of auditory capacity                                                               |
| illegal_defense_duration    | 20                            | threshold count to detect illegal defense behavior                                               |
| illegal_defense_number      | 0                             | number of players judged to be illegal in illegal defense behavior                               |
| keepaway_start              | -1                            | automatic referee changes playmode to play_on after this seconds elapsed                         |
| kick_off_wait               | 100                           | maximum cycle to wait for kick-off in automatic mode                                             |
| max_goal_kicks              | 3                             | (actually no effect)                                                                             |
| max_monitors                | -1                            | max number of monitor connections                                                                |
| nr_extra_halfs              | 2                             | number of extra halves in a game                                                                 |
| nr_normal_halfs             | 2                             | number of normal halves in a game                                                                |
| olcoach_port                | 6002                          | online coach port                                                                                |
| pen_before_setup_wait       | 10                            | max waiting cycles in penalty_miss_[lr] or penalty_score_[lr]                                    |
| pen_max_extra_kicks         | 5                             | max extra kick trials in penalty shootouts                                                       |
| pen_nr_kicks                | 5                             | number of normal kick trials in penalty shootouts                                                |
| pen_ready_wait              | 10                            | max waiting cycles in penalty_ready_[lr]                                                         |
| pen_setup_wait              | 70                            | max waiting cycles in penalty_setup_[lr]                                                         |
| pen_taken_wait              | 150                           | max cycles in penalty_taken_[lr]                                                                 |
| point_to_ban                | 5                             | players cannot execute the next pointto until this cycle has passed                              |
| point_to_duration           | 20                            | point to continues automatically for up to this cycle                                            |
| port                        | 6000                          | player port number                                                                               |
| recv_step                   | 10                            | time step of acception of commands [unit: msec]                                                  |
| say_coach_cnt_max           | 128                           | upper limit of the number of online coach's message                                              |
| say_coach_msg_size          | 128                           | upper limit of length of online coach's message                                                  |
| say_msg_size                | 10                            | string size of say message [unit: byte]                                                          |
| send_step                   | 150                           | time step of visual information [unit: msec]                                                     |
| send_vi_step                | 100                           | interval of online coach's look                                                                  |
| sense_body_step             | 100                           | time step of player's body information [unit: msec]                                              |
| simulator_step              | 100                           | time step of simulation [unit: msec]                                                             |
| slow_down_factor            | 1                             | coefficient that slows down simulation time                                                      |
| start_goal_l                | 0                             | initial score of the left team                                                                   |
| start_goal_r                | 0                             | initial score of the right team                                                                  |
| synch_micro_sleep           | 1                             | sleep time to wait clients in synch mode [unit: msec]                                            |
| synch_offset                | 60                            | offset time from the beginning of the cycle to send *think* message [unit: msec]                 |
| synch_see_offset            | 0                             | offset time from the beginning of the cycle to send *see* message if players uses *synch_see* mode [unit: msec] |
| tackle_cycles               | 10                            | idle cycles of the players that executed *tackle*                                                |
| text_log_compression        | 0                             | compression level of text log file                                                               |
| auto_mode                   | false                         | enable auto start of the match                                                                   |
| back_passes                 | true                          | enable back pass rule                                                                            |
| coach                       | false                         |                                                                                                  |
| coach_w_referee             | false                         | allows trainer with automatic referee                                                            |
| forbid_kick_off_offside     | true                          | forbid kick off offside                                                                          |
| free_kick_faults            | true                          | enable free kick fault rule                                                                      |
| fullstate_l                 | false                         | enable full state information for left team                                                      |
| fullstate_r                 | false                         | enable full state information for right team                                                     |
| game_log_dated              | true                          | flag to write date in game log name                                                              |
| game_log_fixed              | false                         | enable fixed name in game log                                                                    |
| game_logging                | true                          | flag for game logging                                                                            |
| golden_goal                 | false                         | flag for the golden goal rule                                                                    |
| keepaway                    | false                         | flag for keepaway mode                                                                           |
| keepaway_log_dated          | true                          | flag to write date in keep away log name                                                         |
| keepaway_log_fixed          | false                         | enable fixed name in keep away log                                                               |
| keepaway_logging            | true                          | enable logging in keep away mode                                                                 |
| log_times                   | false                         |                                                                                                  |
| old_coach_hear              | false                         |                                                                                                  |
| pen_allow_mult_kicks        | true                          | Turn on to allow dribbling in penalty shootouts                                                  |
| pen_coach_moves_players     | true                          | Turn on to have the server automatically position players for penalty shootouts                  |
| pen_random_winner           | false                         | enable random winner in penalties                                                                |
| penalty_shootouts           | true                          | Set to true to enable penalty shootouts after normal time and extra time if the game is drawn.   |
| profile                     | false                         |                                                                                                  |
| proper_goal_kicks           | false                         |                                                                                                  |
| record_messages             | false                         | enables recording message to game log file                                                       |
| send_comms                  | false                         | enables sending message to monitors                                                              |
| synch_mode                  | false                         | enables synchronous mode                                                                         |
| team_actuator_noise         | false                         | flag whether to use team specific actuator noise                                                 |
| text_log_dated              | true                          | flag to write date in text log name                                                              |
| text_log_fixed              | false                         | enable fixed name in text log                                                                    |
| text_logging                | true                          | flag for recording client command log                                                            |
| use_offside                 | true                          | flag for using offside rule                                                                      |
| verbose                     | false                         | flag for verbose mode                                                                            |
| wind_none                   | false                         | wind factor is none                                                                              |
| wind_random                 | false                         | wind factor is random                                                                            |
| audio_cut_dist              | 50.0                          | audio cut off distance                                                                           |
| back_dash_rate              | 0.6                           | dash power date for the backward dash                                                            |
| ball_accel_max              | 2.7                           | max. ball acceleration                                                                           |
| ball_decay                  | 0.94                          | ball decay                                                                                       |
| ball_rand                   | 0.05                          | noise parameter for the ball movement                                                            |
| ball_size                   | 0.085                         | ball size                                                                                        |
| ball_speed_max              | 3.0                           | max. speed of ball                                                                               |
| ball_stuck_area             | 3.0                           | players closer to the ball than this area can be stuck                                           |
| ball_weight                 | 0.2                           | ball weight                                                                                      |


| Name                            | Current Value in `player.conf` | Description                                                                      |
|---------------------------------|--------------------------------|----------------------------------------------------------------------------------|
| version                         |                                | soccer server version                                                            |
| player_types                    | 18                             | number of random player types generated at match startup                         |
| pt_max                          | 1                              | number of times that online coach can substitute a player of the same type      |
| random_seed                     | -1                             | seed to generate heterogeneous player parameters of a match if it is non-zero   |
| subs_max                        | 3                              | maximum number of substitutions in a match                                       |
| allow_mult_default_type         | false                          |                                                                                  |
| catchable_area_l_stretch_max    | 1.3                            | defines the upper bound of player's catchable_area_l_stretch                    |
| catchable_area_l_stretch_min    | 1                              | defines the lower bound of player's catchable_area_l_stretch                    |
| dash_power_rate_delta_max      | 0                              | defines the upper bound of player's dash power rate                              |
| dash_power_rate_delta_min      | 0                              | defines the lower bound of player's dash power rate                              |
| effort_max_delta_factor        | -0.004                         | controls the upper bound of player's effort amount                               |
| effort_min_delta_factor        | -0.004                         | controls the lower bound of player's effort amount                               |
| extra_stamina_delta_max        | 50                             | defines the upper bound of player's extra stamina                                |
| extra_stamina_delta_min        | 0                              | defines the lower bound of player's extra stamina                                |
| foul_detect_probability_delta_factor | 0                       | defines the range of heterogeneous player's foul detect probability              |
| inertia_moment_delta_factor     | 25                             | factor to control the length of inertia moment delta interval                    |
| kick_power_rate_delta_max      | 0                              | defines the upper bound of player's kick power rate                              |
| kick_power_rate_delta_min      | 0                              | defines the lower bound of player's kick power rate                              |
| kick_rand_delta_factor         | 1                              |                                                                                  |
| kickable_margin_delta_max      | 0.1                            | defines the upper bound of player's kickable margin                              |
| kickable_margin_delta_min      | -0.1                           | defines the lower bound of player's kickable margin                              |
| new_dash_power_rate_delta_max  | 0.0008                         |                                                                                  |
| new_dash_power_rate_delta_min  | -0.0012                        |                                                                                  |
| new_stamina_inc_max_delta_factor| -6000                         |                                                                                  |
| player_decay_delta_max         | 0.1                            | defines the upper bound of inertia moment delta                                  |
| player_decay_delta_min         | -0.1                           | defines the lower bound of inertia moment delta                                  |
| player_size_delta_factor       | -100                           | controls the range of heterogeneous player's size                                |
| player_speed_max_delta_max     | 0                              | defines the upper bound of player's maximum speed                                 |
| player_speed_max_delta_min     | 0                              | defines the lower bound of player's maximum speed                                 |
| stamina_inc_max_delta_factor    | 0                              |                                                                                  |

| Name     | Current Value in `CSVSaver.conf` | Description                                                                                      |
|----------|----------------------------------|--------------------------------------------------------------------------------------------------|
| version  |                                  | soccer server version                                                                            |
| save     | false                            | flag to save matches result in a file                                                            |
| filename | 'rcssserver.csv'                 | file to save the results to. If this file does not exist, it will be created. Otherwise, the results will be appended to the end. |
