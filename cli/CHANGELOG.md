# Change Logs

Notable releases...

### Version 0.2.6 - 2023-07-17
- Added support for DroidScript VS Code extension 0.2.6.
- Added project name checking when creating new app through `ds create` to avoid duplicate apps.
- Hide `.droidscript` folder into secret place.
- Save `dsconfig.json` file into secret place.
- Fixed `create` command to save folder data into the secret place and remove local `.droidscript` folder.
- Fixed `init` command to save folder data into the secret place and remove local `.droidscript` folder.
- Fixed `reload` command to get project info from the secret place.

### Version 0.2.5 - 2023-06-30
- Fixed error in downloading text files.

### Version 0.2.4 - 2023-06-20
- Fixed `ds reload` command.
- Implement app type option flags for creating apps. Types includes `native`, `mui`, `hybrid`, `html` and `node`.
- Added `-d, --debug` flag to `ds run` command to run app in debug mode.

### Version 0.2.3 - 2023-06-20
- Initial release.