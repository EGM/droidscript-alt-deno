## Command-Line Interface for DroidScript

### Download DroidScript app from [Google Play](https://play.google.com/store/apps/details?id=com.smartphoneremote.androidscriptfree)

### What is DroidScript

DroidScript is an easy to use, portable coding tool which simplifies android app development. It dramatically improves productivity by speeding up development by as much as 10x compared with using the standard development tools.

## About DroidScript CLI

A command line interface that allows you to manage and do simple proccesses on DroidScript app using your favorite terminal.

## Example Usage

> To use CLI for DroidScript, run first DroidScript app and turn on WiFi IDE. Please take note of the IP Address shown in the popup.

#### Connect to DroidScript.
```
ds connect
```
> This will ask for the IP Address and password if needed and will save them for future sessions.

#### Creating DroidScript apps.
```
ds create <appname> [--type]
```
New native app. (Default)
```
ds create "MyNewApp"
```
New html app.
```
ds create "MyNewApp" --html
```
New hybrid app.
```
ds create "MyNewApp" --hybrid
```
New native app with MUI library.
```
ds create "MyNewApp" --mui
```
New node app.
```
ds create "MyNewApp" --node
```

#### Running DroidScript app.
```
ds run <appname> [--debug]
```
Example
```
ds run MyNewApp
```
Running an app in debug mode.
```
ds run MyNewApp -d
```
> Press `escape` or `q` key to exit debug mode.

#### Stop a running DroidScript app.
```
ds stop
```

#### Initializing a folder as a DroidScript project.
```
ds init
```
> This will let you choose a DroidScript app to associate with the current working directory. Make sure you are in the right folder.

#### Reloading and updating local files.
```
ds reload
```
> This will fetch all the files from DroidScript app and update the local files. Make sure you are in the right folder.

#### List all DroidScript apps.
```
ds ls
```

#### Delete a DroidScript app.
```
ds delete <appname>
```
Example
```
ds delete MyNewApp
```

### Complete DS options and commands

#### Options:
- `-V, --version` - output the version number
- `-h, --help` - display help for command

#### Commands:
- `ds connect` - Connect to DroidScript server. Server information will be saved for future sessions.
- `ds create <appname>` - Create a new DroidScript app.
- `ds init` - Initialize a folder as DroidScript project.
- `ds reload`- Reload the current folder if it is a DroidScript project. This will fetch all the files from its corresponding DroidScript project.
- `ds run <appname>` - Run the current app associated with the folder or specify a project name.
- `ds stop` - Stop the currently running app.
- `ds delete <appname>` - Delete an app.
- `ds ls` - List all DroidScript projects.
- `ds help [command]` - display help for command.

### Best Practices

- Everytime you start editing your project, it is a good idea to run `ds reload` command to fetch any changes from DroidScript app.

### Known Issues

- None so far.

<br>

##### Author
- **GineersLife:** Jumar Hamac - *hamacjumar@gmail.com*
