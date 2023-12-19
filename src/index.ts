import AdView from "./adview";
import MediaPlayer from "./mediaplayer";
import BluetoothList from "./bluetoothlist";
import Button from "./button";
import BluetoothSerial from "./bluetoothserial";
import CameraView from "./cameraview";
import CodeEdit from "./codeedit";
import CheckBox from "./checkbox";
import CloudStore from "./cloudstore";
import Crypt from "./crypt";
import Dialog from "./dialog";
import Downloader from "./downloader";
import Email from "./email";
import File from "./file";
import Image from "./image";
import Layout from "./layout";
import ListDialog from "./listdialog";
import Locator from "./locator";
import List from "./list";
import MediaStore from "./mediastore";
import NetClient from "./netclient";
import Notification from "./notification";
import Overlay from "./overlay";
import PlayStore from "./playstore";
import Pst from "./phonestate";
import AudioRecorder from "./audiorecorder";
import Scroller from "./scroller";
import Seekbar from "./seekbar";
import SMS from "./sms";
import Sensor from "./sensor";
import Spinner from "./spinner";
import SpeechRec from "./speechrec";
import Service from "./service";
import Synth from "./synth";
import SysProc from "./sysproc";
import Theme from "./theme";
import Toggle from "./toggle";
import TextEdit from "./textedit";
import Text from "./text";
import USBSerial from "./usbserial";
import VideoView from "./videoview";
import WebServer from "./webserver";
import WebView from "./webview";
import Wallpaper from "./wallpaper";
import YesNoDialog from "./yesnodialog";
import ZipUtil from "./ziputil";
import DSObject from "./dsobject";
import Component from "./component";
import { sqlitePlugin } from "./sql";
import { Tabs } from "./tabs";
import { Wizard } from "./wizard";
import { CheckList } from "./checklist";
import { cordova } from "./cordova-plugin";

// Types
export type ActivityType = { labelName; packageName; className };
export type BTDeviceType = { name; address };
export type InstalledAppType = {
  packageName;
  className;
  uid;
  targetSdkVersion;
  dataDir;
  sourceDir;
  publicSourceDir;
  nativeLibraryDir;
};
export type IntentType = { action; type; data; flags; extras };
export type LayoutType = "Linear" | "Absolute" | "Frame" | "Card";
/** "TouchThrough" | "TouchSpy" | "Left" | "Top" | "Right" | "Bottom" | "Center" | "H/VCenter" | "Wrap" | "Horizontal" | "Vertical" | "FillX/Y" */
export type LayoutOptionsType = string;
export type MemoryInfoType = { avail; low; threshold; total };
export type RunningAppType = { user; pid; name; foreground };
export type SideType = "Left" | "Right";
export type Permissions =
  | "Camera"
  | "Storage"
  | "ExtSDcard"
  | "Network"
  | "Location"
  | "SMS"
  | "Calendar"
  | "Body"
  | "Contacts"
  | "Record"
  | "Phone"
  | "Accounts"
  | "License";
export type ContactType = "Phone" | "Email";
export type SensorType =
  | "Accelerometer"
  | "MagneticField"
  | "Orientation"
  | "Light"
  | "Proximity"
  | "Temperature"
  | "GameRotation"
  | "GeomagneticRotation"
  | "Gravity"
  | "Gyroscope"
  | "HeartRate"
  | "Acceleration"
  | "Pressure"
  | "Humidity"
  | "RotationMotion"
  | "StepCounter"
  | "StepDetector";
export type SensorOptionsType = "Fastest" | "Fast" | "Medium" | "Slow";

/** DroidScript commands. */
// eslint-disable-next-line
export namespace alt {
  /** Creates and adds an AdView to a Layout.
   * @requires Premium subscription.
   * @see {@link https://alex-symbroson.github.io/Docs/docs/app/CreateAdView.htm|Alex's Docs} for further information.
   */
  export const addAdView = function (
    layout: Layout,
    unitId: string,
    testId: string,
    width?: number,
    height?: number,
    options?: string
  ): AdView {
    const ret = prompt(
      layout ? layout.id : null,
      `App.AddAdView(\f${unitId}\f${testId}\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new AdView(ret);
    } else {
      return null;
    }
  };

  /** Creates and adds a Button to a Layout. */
  export const addButton = function (
    layout: Layout,
    text?: string,
    width?: number,
    height?: number,
    options?: string
  ): Button {
    const ret = prompt(
      layout ? layout.id : null,
      `App.AddButton(${text}\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Button(ret);
    } else {
      return null;
    }
  };

  /** Creates and adds a CameraView to a Layout. */
  export const addCameraView = function (
    layout: Layout,
    width?: number,
    height?: number,
    options?: string
  ): CameraView {
    const ret = prompt(
      layout ? layout.id : null,
      `App.AddCameraView(${width}\f${height}\f${options}`
    );
    if (ret) {
      return new CameraView(ret);
    } else {
      return null;
    }
  };

  /** Creates and adds a CheckBox to a Layout. */
  export const addCheckBox = function (
    layout: Layout,
    text?: string,
    width?: number,
    height?: number,
    options?: string
  ): CheckBox {
    const ret = prompt(
      layout ? layout.id : null,
      `App.AddCheckBox(${text}\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new CheckBox(ret);
    } else {
      return null;
    }
  };

  /** Creates and adds a CodeEdit to a Layout. */
  export const addCodeEdit = function (
    layout: Layout,
    text?: string,
    width?: number,
    height?: number,
    options?: string
  ): CodeEdit {
    const ret = prompt(
      layout ? layout.id : null,
      `App.AddCodeEdit(\f${text}\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new CodeEdit(ret);
    } else {
      return null;
    }
  };

  /** AddDrawer adds layout as drawer on a given side. */
  export const addDrawer = function (
    layout: Layout,
    side: SideType,
    width?: number,
    grabWidth?: number
  ): void {
    prompt(
      "#",
      `App.AddDrawer(\f${layout.id}\f${side}\f${width}\f${grabWidth}`
    );
  };

  /** Creates and adds a Image to a Layout. */
  export const addImage = function (
    layout: Layout,
    file?: string,
    width?: number,
    height?: number,
    options?: string,
    w?: number,
    h?: number
  ): Image {
    const ret = prompt(
      layout ? layout.id : null,
      `App.AddImage(${file}\f${width}\f${height}\f${options}\f${w}\f${h}`
    );
    if (ret) {
      return new Image(ret);
    } else {
      return null;
    }
  };

  /** AddLayout adds a layout to the screen so that it is visible (if not hidden with setVisibility) */
  export const addLayout = function (
    layout: Layout,
    type?: string,
    options?: string
  ): Layout {
    if (!type) {
      prompt("#", `App.AddLayout(${layout.id}`);
    } else {
      const ret = prompt(
        layout ? layout.id : null,
        `App.AddLayout(${type}\f${options}`
      );
      if (ret) {
        return new Layout(ret);
      } else {
        return null;
      }
    }
  };

  /** Creates and adds a List to a Layout. */
  export const addList = function (
    layout: Layout,
    list?: string,
    width?: number,
    height?: number,
    options?: number,
    delimiter?: string
  ): List {
    const ret = prompt(
      layout ? layout.id : null,
      `App.AddList(\f${list}\f${width}\f${height}\f${options}\f${delimiter}`
    );
    if (ret) {
      return new List(ret);
    } else {
      return null;
    }
  };

  /** Creates and adds a Scroller to a Layout. */
  export const addScroller = function (
    layout: Layout,
    width?: number,
    height?: number,
    options?: string
  ): Scroller {
    const ret = prompt(
      layout ? layout.id : null,
      `App.AddScroller(${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Scroller(ret);
    } else {
      return null;
    }
  };

  /** Creates and adds a SeekBar to a Layout. */
  export const addSeekBar = function (
    layout: Layout,
    width?: number,
    height?: number,
    options?: string
  ): Seekbar {
    const ret = prompt(
      layout ? layout.id : null,
      `App.AddSeekBar(${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Seekbar(ret);
    } else {
      return null;
    }
  };

  /** Creates and adds a Spinner to a Layout. */
  export const addSpinner = function (
    layout: Layout,
    list?: string,
    width?: number,
    height?: number,
    options?: string
  ): Spinner {
    const ret = prompt(
      layout ? layout.id : null,
      `App.AddSpinner(${list}\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Spinner(ret);
    } else {
      return null;
    }
  };

  /** Creates and adds a Text to a Layout. */
  export const addText = function (
    layout: Layout,
    text?: string,
    width?: number,
    height?: number,
    options?: string
  ): Text {
    const ret = prompt(
      layout ? layout.id : null,
      `App.AddText(${text}\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Text(ret);
    } else {
      return null;
    }
  };

  /** Creates and adds a TextEdit to a Layout. */
  export const addTextEdit = function (
    layout: Layout,
    text?: string,
    width?: number,
    height?: number,
    options?: string
  ): TextEdit {
    const ret = prompt(
      layout ? layout.id : null,
      `App.AddTextEdit(${text}\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new TextEdit(ret);
    } else {
      return null;
    }
  };

  /** Creates and adds a Toggle to a Layout. */
  export const addToggle = function (
    layout: Layout,
    text?: string,
    width?: number,
    height?: number,
    options?: string
  ): Toggle {
    const ret = prompt(
      layout ? layout.id : null,
      `App.AddToggle(${text}\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Toggle(ret);
    } else {
      return null;
    }
  };

  /** Creates and adds a VideoView to a Layout. */
  export const addVideoView = function (
    layout: Layout,
    width?: number,
    height?: number,
    options?: number
  ): VideoView {
    const ret = prompt(
      layout ? layout.id : null,
      `App.AddVideoView(\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new VideoView(ret);
    } else {
      return null;
    }
  };

  /** Creates and adds a WebView to a Layout. */
  export const addWebView = function (
    layout: Layout,
    width?: number,
    height?: number,
    options?: string,
    zoom?: number
  ): WebView {
    const ret = prompt(
      layout ? layout.id : null,
      `App.AddWeb(\f${width}\f${height}\f${options}\f${zoom}`
    );
    if (ret) {
      return new WebView(ret);
    } else {
      return null;
    }
  };

  /**
   * Shows a simple text dialog with a colored title and a 'Ok' button to exit.
   *
   * If title was not given the dialog looks like a normal alert box.
   *
   * Without the `NoDim` option the background behind the dialog will be darkened.
   */
  export const alert = function (
    message?: string,
    title?: string,
    options?: string,
    hue?: number
  ): void {
    prompt("#", `App.Alert(\f${message}\f${title}\f${options}\f${hue}`);
  };

  /** `animate` calls a function repeatedly like `setInterval()` but with the
   * current time (`Date.getTime()`) and the difference to the last call in
   * milliseconds as parameter. */
  export const animate = function (callback: Function, fps = 30): void {
    _cbAnimate = callback;
    // eslint-disable-next-line
    _anim_t = new Date().getTime();
    if (_isV8) {
      _fps = fps;
      if (_cbAnimate) {
        _tmAnimate = setInterval(_animatev8, 1000 / _fps);
      } else if (_tmAnimate) {
        clearInterval(_tmAnimate);
      }
    } else {
      window._fps = fps;
      requestAnimationFrame(_animate);
    }
  };

  /** Used for broadcasting messages between DroidScript apps. */
  export const broadcast = function (type: string, message: string): void {
    prompt("#", `App.Broadcast(${type}\f${message}`);
  };

  /**
   * Send a broadcasting intent with a custom action.
   * @param action The general action to be performed, such as ACTION_VIEW,
   * ACTION_EDIT, ACTION_MAIN, etc.
   * @param category Gives additional information about the action to execute.
   * For example, CATEGORY_LAUNCHER means it should appear in the Launcher as a
   * top-level application, while CATEGORY_ALTERNATIVE means it should be included
   * in a list of alternative actions the user can perform on a piece of data.
   * @param data The data to operate on, such as a person record in the contacts
   * database, expressed as a Uri.
   * @param type MIMETYPE of data
   * @param extras This is a Bundle of any additional information. This can be
   * used to provide extended information to the component. For example, if we
   * have a action to send an e-mail message, we could also include extra pieces
   * of data here to supply a subject, body, etc.
   * @param options Comma seperated list.
   */
  export const broadcastIntent = function (
    action: string,
    category: string,
    data: string,
    type: string,
    extras: string,
    options?: string
  ): void {
    prompt(
      "#",
      `App.BroadcastIntent(\f${action}\f${category}\f${data}\f${type}\f${extras}\f${options}`
    );
  };

  /** Call is used to call the given phone number. */
  export const call = function (number: string): void {
    prompt("#", `App.Call(\f${number}`);
  };

  /** Checks if the app is licensed with Google Play. */
  export const checkLicense = function (key: string): void {
    prompt("#", `App.CheckLicense(\f${key}`);
  };

  /** CheckPermission checks whether the permission of a particular component
   * has been granted. */
  export const checkPermission = function (type: Permissions): string {
    return prompt("#", `App.CheckPermission(\f${type}`);
  };

  /** Opens an Android dialog and allows the user to select one of his
   * registered Google/Gmail accounts or add one. */
  export const chooseAccount = function (callback: Function): void {
    prompt("#", `App.ChooseAccount(\f${_Cbm(callback)}`);
  };

  /** Opens the Contacts app so that the user can select the name and either the
   * phone number or email address of a user. */
  export const chooseContact = function (
    type: ContactType,
    callback: Function
  ): void {
    prompt("#", `App.ChooseContact(\f${type}\f${_Cbm(callback)}`);
  };

  /**
   * Opens a file picker for user to select a file.
   * @param message Message to display.
   * @param type Comma delimited list of mimetypes.
   * @param callback Function to call with resulting path.
   * @param folder Starting folder.
   */
  export const chooseFile = function (
    message?: string,
    type?: string,
    callback?: Function,
    folder?: string
  ): void {
    prompt(
      "#",
      `App.ChooseFile(\f${message}\f${type}\f${_Cbm(callback)}\f${folder}`
    );
  };

  /**
   * Opens the photo gallery for user to select an image.
   * @param options Comma "," separated: "" or "internal" or "external".
   * @param callback Function to call with resulting path.
   */
  export const chooseImage = function (
    options?: string,
    callback?: Function
  ): void {
    prompt("#", `App.ChooseImage(\f${options}\f${_Cbm(callback)}`);
  };

  export const chooseWifi = function (
    title1,
    title2,
    callback,
    options,
    extra
  ): void {
    const wifi = new _WifiScan(title1, title2, callback, options, extra);
    wifi.Select();
  };

  /** Clears the saved cookies for webviews or html apps. */
  export const clearCookies = function (session?: string): void {
    prompt("#", `App.ClearCookies(\f${session}`);
  };

  /**
   * Deletes variables saved via alt.save*().
   * @param file path to file or folder ( “/absolute/...” or “relative/...” )
   */
  export const clearData = function (file?: string): void {
    prompt("#", `App.ClearData(\f${file}`);
  };

  /**
   * Deletes a variable saved via app.Save*().
   * @param name value key
   * @param file path to file or folder ( “/absolute/...” or “relative/...” )
   * @see saveText, SaveNumber, SaveBoolean
   */
  export const clearValue = function (name: string, file?: string): void {
    prompt("#", `App.ClearValue(\f${name}\f${file}`);
  };

  /**
   * Closes the drawer layout on the given side with slide animation.
   * @param side "Left" or "Right"
   */
  export const closeDrawer = function (side: SideType): void {
    prompt("#", `App.CloseDrawer(\f${side}`);
  };

  /**
   * Copies a file to a given destination.
   * @param source path to file or folder ( “/absolute/...” or “relative/...” )
   * @param destination path to file or folder ( “/absolute/...” or “relative/...” )
   *
   * The target must locate to the actual target file, not the folder. An existing file will be overridden.
   */
  export const copyFile = function (source: string, destination: string): void {
    prompt("#", `App.CopyFile(${source}\f${destination}`);
  };

  /**
   * Copies a folder to a given destination.
   * @param source path to file or folder ( “/absolute/...” or “relative/...” )
   * @param destination path to file or folder ( “/absolute/...” or “relative/...” )
   * @param overwrite True to overwrite folder. If override is false and the folder already exists in the destination, it will not be copied.
   * @param filter “pattern”
   */
  export const copyFolder = function (
    source: string,
    destination: string,
    overwrite?: boolean,
    filter?: string
  ): void {
    prompt(
      "#",
      `App.CopyFolder(\f${source}\f${destination}\f${overwrite}\f${filter}`
    );
  };

  /** Creates an AdView.
   * @requires Premium subscription.
   * @see {@link https://alex-symbroson.github.io/Docs/docs/app/CreateAdView.htm|Alex's Docs} for further information.
   */
  export const createAdView = function (
    unitId: string,
    testId: string,
    width?: string,
    height?: string,
    options?: string
  ): AdView {
    const ret = prompt(
      "#",
      `App.CreateAdView(\f#${unitId}\f${testId}\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new AdView(ret);
    } else {
      return null;
    }
  };

  /**
   * Creates object that can be used to listen for sound and record it to a file.
   */
  export const createAudioRecorder = function (): AudioRecorder {
    if (_rec) {
      _rec.Release();
    }
    const ret = prompt("#", `App.CreateAudioRecorder(`);
    if (ret) {
      _rec = new AudioRecorder(ret);
    } else {
      _rec = null;
      return _rec;
    }
  };

  /**
   * Shows an Android dialog which allows the user to select a Bluetooth device from paired and discovered devices.
   * @param filter
   */
  export const createBluetoothList = function (filter?: string): BluetoothList {
    if (_btl) {
      _btl.Release();
    }
    const ret = prompt("#", `App.CreateBluetoothList(${filter}`);
    if (ret) {
      _btl = new BluetoothList(ret);
    } else {
      _btl = null;
      return _btl;
    }
  };

  /**
   * Creates object used for communicating with other Bluetooth devices.
   * @param mode  “Text” (default) or “Int” or “Hex”
   */
  export const createBluetoothSerial = function (
    mode = "Text"
  ): BluetoothSerial {
    const ret = prompt("#", `App.CreateBluetoothSerial(\f${mode}`);
    if (ret) {
      return new BluetoothSerial(ret);
    } else {
      return null;
    }
  };

  /**
   * Creates user interface button.
   * @param text Text to display on button.
   * @param width decimal (0..1)
   * @param height decimal (0..1)
   * @param options comma “,” separated: “FontAwesome”, “Html”, “Monospace”, “Normal” or “Aluminium” or “Gray” or “Lego”, “SingleLine”, “Custom”, “NoPad”, “FillX/Y”, “NoSound”
   */
  export const createButton = function (
    text?: string,
    width?: number,
    height?: number,
    options?: string
  ): Button {
    const ret = prompt(
      "#",
      `App.CreateButton(${text}\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Button(ret);
    } else {
      return null;
    }
  };

  /**
   * Used to access the device camera.
   * @param width decimal (0..1)
   * @param height decimal (0..1)
   * @param options comma “,” separated: “Front”, “UseBitmap”, “UseABGR”, “NoRotate”, “CIF” or “QVGA” or “SVGA” or “VGA” or “XGA” or “UXGA”
   */
  export const createCameraView = function (
    width?: number,
    height?: number,
    options?: string
  ): CameraView {
    const ret = prompt(
      "#",
      `App.CreateCameraView(${width}\f${height}\f${options}`
    );
    if (ret) {
      return new CameraView(ret);
    } else {
      return null;
    }
  };

  /**
   * Creates user interface checkbox.
   * @param text Text to display.
   * @param width decimal (0..1)
   * @param height decimal (0..1)
   * @param options comma “,” separated: “FillX/Y”, “NoSound”
   */
  export const createCheckBox = function (
    text?: string,
    width?: number,
    height?: number,
    options?: string
  ): CheckBox {
    const ret = prompt(
      "#",
      `App.CreateCheckBox(${text}\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new CheckBox(ret);
    } else {
      return null;
    }
  };

  /**
   * This component allows you to easily store and retrieve app data from the cloud.
   * @requires Premium subscription.
   * @see {@link https://alex-symbroson.github.io/Docs/docs/app/CreateCloudStore.htm|Alex's Docs} for further information.
   */
  export const createCloudStore = function (apiKey: string): CloudStore {
    const ret = prompt("#", `App.CreateCloudStore(\f${apiKey}`);
    if (ret) {
      return new CloudStore(ret);
    } else {
      return null;
    }
  };

  /**
   * Like TextEdit with premium features.
   * @requires Premium subscription.
   * @see TextEdit
   * @see {@link https://alex-symbroson.github.io/Docs/docs/app/CreateCodeEdit.htm|Alex's Docs} for further information.
   */
  export const createCodeEdit = function (
    text?: string,
    width?: number,
    height?: number,
    options?: string
  ): CodeEdit {
    const ret = prompt(
      "#",
      `App.CreateCodeEdit(\f${text}\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new CodeEdit(ret);
    } else {
      return null;
    }
  };

  /**
   * Used to encrypt or decrypt a string with a given key or to create a hash of it.
   * @param options @todo Add options.
   */
  export const createCrypt = function (options?: string): Crypt {
    if (_crp) {
      _crp.Release();
    }
    const ret = prompt("#", `App.CreateCrypt(\f${options}`);
    if (ret) {
      _crp = new Crypt(ret);
    } else {
      _crp = null;
    }
    return _crp;
  };

  /** Used to show the console as overlay above the app in order to see the debug logs. */
  export const createDebug = function (): void {
    prompt("#", `App.CreateDebug(`);
  };

  /**
   * Creates customizable dialog.
   * @param title Title to display.
   * @param options comma “,” separated: “AutoCancel” or “NoCancel”, “NoTitle”, “NoFocus”, “NoDim”, “NoKeys”, “TouchModal”, “NoTouch”, “Modal”, “Kiosk”, “Old”
   */
  export const createDialog = function (
    title?: string,
    options?: string
  ): Dialog {
    const ret = prompt("#", `App.CreateDialog(\f${title}\f${options}`);
    if (ret) {
      return new Dialog(ret);
    } else {
      return null;
    }
  };

  /**
   * Used to download a file straight from the internet to your phone or tablet's local storage.
   * @param options comma “,” separated: “NoDialog” or “Light”
   */
  export const createDownloader = function (options?: string): Downloader {
    const ret = prompt("#", `App.CreateDownloader(\f${options}`);
    if (ret) {
      return new Downloader(ret);
    } else {
      return null;
    }
  };

  /** Component to send and receive emails without user interaction. */
  export const createEmail = function (
    account: string,
    password: string
  ): Email {
    if (_eml) {
      _eml.Release();
    }
    const ret = prompt("#", `App.CreateEmail(${account}\f${password}`);
    if (ret) {
      _eml = new Email(ret);
    } else {
      _eml = null;
    }
    return _eml;
  };

  /**
   * Creates a File object.
   * @param file path to file or folder ( “/absolute/...” or “relative/...” )
   * @param mode “r” or “w” or “rw”
   */
  export const createFile = function (file?: string, mode?: string): File {
    const ret = prompt("#", `App.CreateFile(\f${file}\f${mode}`);
    if (ret) {
      return new File(ret);
    } else {
      return null;
    }
  };

  /*~~~~~X*/
  /*
			function createGLView(width, height, options) {
				var glv = null;
				if (options.toLowerCase().indexOf("fast2d") > -1) {
					//_LoadScriptSync("/Sys/cp.js");
					_LoadScriptSync("/Sys/gl.js");
					glv = new GLV(prompt("#", `App.CreateGLView(\f${width}\f${height}\f${options}`));
					glv.canvas = FastCanvas.create();
					glv.ctx = glv.canvas.getContext("2d`);
																														  glv.width = Math.round(getDisplayWidth() * width);
					glv.height = Math.round(getDisplayHeight() * height);
					glv.aspect = glv.width / glv.height;
					glv.GetType = function () { return "GLView"; }
				}
				return glv;
			}

			function createGame(file, orient) { return new _Game(file, orient) }

			function createGameView(width, height, options) {
				if (options) options = options.toLowerCase(); else options = "";
				if (options.indexOf("gles") > -1) {
					var obj = prompt("#", `App.CreateGameView(\f${width}\f${height}\f${options}`);
					if (obj) return new WGL(obj); else return null;
				}
				else {
					var obj = createWebView(width, height, "gameview");
					obj.GetType = function () { return "GameView"; }
					obj.SetFrameRate = function (fps) { }
					obj.SetFile = function (file) { obj.LoadHtml(_WglTemplate(file), "") }
					return obj;
				}
			}
		*/
  /*~~~~~X*/

  /**
   * Used to display images such like png, jpg or gif.
   * @param file path to file ( “/absolute/...” or “relative/...” ) or "null".
   * @param width Decimal (0..1)
   * @param height Decimal (0..1)
   * @param options comma “,” separated: “fix”, “alias”, “px”, “Button”, “ScaleCenter”, “async”, “FontAwesome”, “Resize”, “TouchThrough”, “Icon”, “wallpaper”, “NoPlay”
   * @param w Pixel width.
   * @param h Pixel height.
   * @see {@link https://alex-symbroson.github.io/Docs/docs/app/CreateImage.htm|Alex's Docs} for more information.
   */
  export const createImage = function (
    file?: string,
    width?: number,
    height?: number,
    options?: string,
    w?: string,
    h?: string
  ): Image {
    const ret = prompt(
      "#",
      `App.CreateImage(${file}\f${width}\f${height}\f${options}\f${w}\f${h}`
    );
    if (ret) {
      return new Image(ret);
    } else {
      return null;
    }
  };

  /**
   * Create container object used to visually organize graphical objects (controls).
   * @param type “Linear” or “Absolute” or “Frame” or “Card”
   * @param options comma “,” separated: “TouchThrough”, “TouchSpy”, “Left” or “Top” or “Right” or “Bottom” or “Center” or “H/VCenter”, “Wrap”, “Horizontal” or “Vertical”, “FillX/Y”
   */
  export const createLayout = function (
    type: LayoutType,
    options?: string
  ): Layout {
    const ret = prompt("#", `App.CreateLayout(${type}\f${options}`);
    if (ret) {
      return new Layout(ret);
    } else {
      return null;
    }
  };

  /**
   * Creates List control.
   * @param options comma “,” separated: “bold” or “Expand”, “Menu”, “Horiz”, “html”, “FontAwesome”, “monospace”, “Normal”, “WhiteGrad” or “BlackGrad” or “AlumButton” or “GreenButton” or “OrangeButton”, “NoSound”
   * @see {@link https://alex-symbroson.github.io/Docs/docs/app/CreateList.htm|Alex's Docs} for more information.
   */
  export const createList = function (
    list?: string,
    width?: number,
    height?: number,
    options?: string,
    delim?: string
  ): List {
    const ret = prompt(
      "#",
      `App.CreateList(\f${list}\f${width}\f${height}\f${options}\f${delim}`
    );
    if (ret) {
      return new List(ret);
    } else {
      return null;
    }
  };

  /**
   * Select one or more than one item from a dialog.
   * @param options comma “,” separated: “Multi” or “?”
   * @see {@link https://alex-symbroson.github.io/Docs/docs/app/CreateListDialog.htm|Alex's Docs} for more information.
   */
  export const createListDialog = function (
    title?: string,
    list?: string,
    options?: string
  ): ListDialog {
    if (_ldg) {
      _ldg.Release();
    }
    const ret = prompt(
      "#",
      `App.CreateListDialog(\f${title}\f${list}\f${options}`
    );
    if (ret) {
      _ldg = new ListDialog(ret);
    } else {
      _ldg = null;
    }
    return _ldg;
  };

  /**
   * Used to find your latitude and longitude using your device's GPS or information from your network.
   * @param type comma “,” separated: “GPS”, “Network”
   * @param options @todo look this up
   * @see {@link https://alex-symbroson.github.io/Docs/docs/app/CreateLocator.htm|Alex's Docs} for more information.
   */
  export const createLocator = function (
    type: string,
    options?: string
  ): Locator {
    const ret = prompt("#", `App.CreateLocator(${type}\f${options}`);
    if (ret) {
      return new Locator(ret);
    } else {
      return null;
    }
  };

  /**
   * Used to play sound files.
   * @see {@link https://alex-symbroson.github.io/Docs/docs/app/CreateMediaPlayer.htm|Alex's Docs} for more information.
   */
  export const createMediaPlayer = function (): MediaPlayer {
    const ret = prompt("#", `App.CreateMediaPlayer(`);
    if (ret) {
      return new MediaPlayer(ret);
    } else {
      return null;
    }
  };

  /**
   * Used to query audio information from the android provider or from the device in the “/sdcard/Music” folder.
   * @see {@link https://alex-symbroson.github.io/Docs/docs/app/CreateMediaStore.htm|Alex's Docs} for more information.
   */
  export const createMediaStore = function (): MediaStore {
    const ret = prompt("#", `App.CreateMediaStore(`);
    if (ret) {
      return new MediaStore(ret);
    } else {
      return null;
    }
  };

  /**
   * Used to communicate with servers on the web.
   * @param type  “UDP” or “TCP”, “Raw”
   * @see {@link https://alex-symbroson.github.io/Docs/docs/app/CreateNetClient.htm|Alex's Docs} for more information.
   */
  export const createNetClient = function (type: string): NetClient {
    const ret = prompt("#", `App.CreateNetClient(${type}`);
    if (ret) {
      return new NetClient(ret);
    } else {
      return null;
    }
  };

  /**
   * Used to put messages in the notification drawer.
   * @param options comma “,” separated: “Ongoing”, “AutoCancel”, “FullScreen”
   * @see {@link https://alex-symbroson.github.io/Docs/docs/app/CreateNotification.htm|Alex's Docs} for more information.
   */
  export const createNotification = function (options?: string): Notification {
    const ret = prompt("#", `App.CreateNotification(\f${options}`);
    if (ret) {
      return new Notification(ret);
    } else {
      return null;
    }
  };

  //	function createNxt() { var nxtHelp = new _NxtHelp(); return nxtHelp.nxt_CreateNxt(); }

  // function createNxtRemote() { var ret = prompt("#", `App.CreateNxtRemote(`); if (ret) return new Nxt(ret, null); else return null; }

  export const createObject = function (name: string, type: string): DSObject {
    if (!type) {
      try {
        return JSON.parse(`new ${name}()`);
      } catch (e) {
        return null;
      }
    } else {
      const ret = prompt("#", `_Obj(\f${type}\f${name}`);
      if (ret) {
        return new Component(ret);
      } else {
        return null;
      }
    }
  };

  /**
   * Overlays are displayed above everything on the screen - even on the home screen or above other applications.
   * @requires Premium Subscription
   * @see {@link https://alex-symbroson.github.io/Docs/docs/app/CreateOverlay.htm|Alex's Docs} for more information.
   */
  export const createOverlay = function (options?: string): Overlay {
    const ret = prompt("#", `App.CreateOverlay(\f${options}`);
    if (ret) {
      return new Overlay(ret);
    } else {
      return null;
    }
  };

  /**
   * Detect phone state changes.
   * @param types “CellLocation”, “DataConnection”, “DataActivity”, “CallState”, “ServiceState”, “SignalStrength”, “CallForwarding”, “MessageWaiting”
   * @see {@link https://alex-symbroson.github.io/Docs/docs/app/CreatePhoneState.htm|Alex's Doc} for more information.
   */
  export const createPhoneState = function (types: string): Pst {
    if (_pst) {
      _pst.Release();
    }
    const ret = prompt("#", `App.CreatePhoneState(\f${types}`);
    if (ret) {
      _pst = new Pst(ret);
    } else {
      _pst = null;
    }
    return _pst;
  };

  /**
   * Creates a new PlayStore instance for retreiving informations or purchasing items.
   * @requires Premium Subscription
   * @see {@link https://alex-symbroson.github.io/Docs/docs/app/CreatePlayStore.htm|Alex's Docs} for more information.
   */
  export const createPlayStore = function (): PlayStore {
    const ret = prompt("#", `App.CreatePlayStore(`);
    if (ret) {
      return new PlayStore(ret);
    } else {
      return null;
    }
  };

  /**
   * Object to send and retreive SMS messages.
   * @requires DS X-Version
   * @see {@link https://alex-symbroson.github.io/Docs/docs/app/CreateSMS.htm|Alex's Docs} for more information.
   */
  export const createSMS = function (): SMS {
    if (_sms) {
      _sms.Release();
    }
    const ret = prompt("#", `App.CreateSMS(`);
    if (ret) {
      _sms = new SMS(ret);
    } else {
      _sms = null;
    }
    return _sms;
  };

  /**
   * Creates scrollable layout container.
   * @param width Decimal (0..1)
   * @param height Decimal (0..1)
   * @param options comma “,” separated: “FillX” or “FillY” or “FillXY”, “Horizontal” or “Vertical”, “NoScrollBar”, “ScrollFade”
   */
  export const createScroller = function (
    width?: number,
    height?: number,
    options?: string
  ): Scroller {
    const ret = prompt(
      "#",
      `App.CreateScroller(${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Scroller(ret);
    } else {
      return null;
    }
  };

  /**
   * Create user input bars with a moveable pointer.
   * @param width Decimal (0..1)
   * @param height Decimal (0..1)
   * @param options comma “,” separated: “FillX/Y”
   * @see addSeekBar
   */
  export const createSeekBar = function (
    width?: number,
    height?: number,
    options?: string
  ): Seekbar {
    const ret = prompt(
      "#",
      `App.CreateSeekBar(${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Seekbar(ret);
    } else {
      return null;
    }
  };

  /**
   * Used to access numerous sensors of your device.
   * @param type “Accelerometer” or “MagneticField” or “Orientation” or “Light” or “Proximity” or “Temperature” or “GameRotation” or “GeomagneticRotation” or “Gravity” or “Gyroscope” or “HeartRate” or “Acceleration” or “Pressure” or “Humidity” or “RotationMotion” or “StepCounter” or “StepDetector”
   * @param options “Slow” or “Medium” or “Fast” or “Fastest”
   * @see {@link https://alex-symbroson.github.io/Docs/docs/app/CreateSensor.htm|Alex's Docs} for more information.
   */
  export const createSensor = function (
    type: SensorType,
    options: SensorOptionsType = "Slow"
  ): Sensor {
    const ret = prompt("#", `App.CreateSensor(${type}\f${options}`);
    if (ret) {
      return new Sensor(ret);
    } else {
      return null;
    }
  };

  /**
   * Services run in the background.
   * @param packageName “this” or “<package>”
   * @param className “this” or “<class>”
   * @param options “Persist”
   * @see {@link https://alex-symbroson.github.io/Docs/docs/app/CreateService.htm|Alex's Docs} for more information.
   */
  export const createService = function (
    packageName: string,
    className?: string,
    callback?: Function,
    options?: string
  ): Service {
    const ret = prompt(
      "#",
      `App.CreateService(\f${packageName}\f${className}\f${options}\f${_Cbm(
        callback
      )}`
    );
    if (ret) {
      return new Service(ret);
    } else {
      return null;
    }
  };

  /**
   * Creates a shortcut of an app on your home screen - referencing to a js file runnable with DS.
   * @param name Shortcut title.
   * @param iconFile path to file or folder ( “/absolute/...” or “relative/...” )
   * @param file path to file or folder ( “/absolute/...” or “relative/...” )
   * @param options comma “,” separated: “Portrait” or “Landscape”, “Transparent”, “NoDom”, “Debug”, “Game” or “remote”
   * @see {@link https://alex-symbroson.github.io/Docs/docs/app/CreateShortcut.htm|Alex's Docs} for more information.
   */
  export const createShortcut = function (
    name: string,
    iconFile: string,
    file: string,
    options?: string
  ): void {
    prompt(
      "#",
      `App.CreateShortcut(\f${name}\f${iconFile}\f${file}\f${options}`
    );
  };

  /*
	function createSmartWatch(type) {
    if (_smw) _smw.Release();
    const ret = prompt("#", `App.CreateSmartWatch(\f${type);
    if (ret) _smw = new SMW(ret);
    else _smw = null;
    return _smw;
  }
  */

  /**
   * Used to listen for and recognize speech.
   * @param options comma “,” separated: “NoBeep”, “Partial”
   * @see {@link https://alex-symbroson.github.io/Docs/docs/app/CreateSpeechRec.htm|Alex's Docs} for more information.
   */
  export const createSpeechRec = function (options?: string): SpeechRec {
    if (_spr) {
      _spr.Release();
    }
    const ret = prompt("#", `App.CreateSpeechRec(\f${options}`);
    if (ret) {
      _spr = new SpeechRec(ret);
    } else {
      _spr = null;
    }
    return _spr;
  };

  /**
   * Creates a spinner (similar to dropdown list.)
   * @param options comma “,” separated: “FillX/Y”, “NoSound”
   */
  export const createSpinner = function (
    list?: string,
    width?: number,
    height?: number,
    options?: string
  ): Spinner {
    const ret = prompt(
      "#",
      `App.CreateSpinner(${list}\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Spinner(ret);
    } else {
      return null;
    }
  };

  /**
   * Returns a Synth object which can produces a variety of sounds, sound effects and music.
   * @param type “Signal”, “VCA”, “VCF”
   * @see {@link https://alex-symbroson.github.io/Docs/docs/app/CreateSynth.htm|Alex's Docs} for more information.
   */
  export const createSynth = function (type: string): Synth {
    const ret = prompt("#", `App.CreateSynth(${type}`);
    if (ret) {
      return new Synth(ret);
    } else {
      return null;
    }
  };

  /**
   * Creates a SystemProcedure of a command shell (ie. “sh”, “su” if root or “busybox” if installed) which can be reused throughout the program.
   * @param cmd program name: “sh” or “su” or “busybox”
   * @param env
   * @param dir path to file or folder ( “/absolute/...” or “relative/...” )
   * @param options comma “,” separated: “combine” or “builder”
   * @see {@link https://alex-symbroson.github.io/Docs/docs/app/CreateSysProc.htm|Alex's Docs} for more information.
   */
  export const createSysProc = function (
    cmd: string,
    env?: string,
    dir?: string,
    options?: string
  ): SysProc {
    const ret = prompt(
      "#",
      `App.CreateSysProc(\f${cmd}\f${env}\f${dir}\f${options}`
    );
    if (ret) {
      return new SysProc(ret);
    } else {
      return null;
    }
  };

  export const createTabs = function (
    list: string,
    width = 1,
    height = -1,
    options?: string
  ): Tabs {
    return new Tabs(list, width, height, options);
  };

  export const createText = function (
    text?: string,
    width?: number,
    height?: number,
    options?: string
  ): Text {
    const ret = prompt(
      "#",
      `App.CreateText(${text}\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Text(ret);
    } else {
      return null;
    }
  };

  export const createTextEdit = function (
    text?: string,
    width?: number,
    height?: number,
    options?: string
  ): TextEdit {
    const ret = prompt(
      "#",
      `App.CreateTextEdit(${text}\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new TextEdit(ret);
    } else {
      return null;
    }
  };

  export const createTheme = function (baseTheme?: string): Theme {
    const ret = prompt("#", `App.CreateTheme(\f${baseTheme}`);
    if (ret) {
      return new Theme(ret);
    } else {
      return null;
    }
  };

  export const createToggle = function (
    text?: string,
    width?: number,
    height?: number,
    options?: string
  ): Toggle {
    const ret = prompt(
      "#",
      `App.CreateToggle(${text}\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Toggle(ret);
    } else {
      return null;
    }
  };

  export const createUSBSerial = function (
    baudRate: number,
    dataBits: number,
    stopBits: number,
    parity: string,
    device: string
  ): USBSerial {
    const ret = prompt(
      "#",
      `App.CreateUSBSerial(\f${baudRate}\f${dataBits}\f${stopBits}\f${parity}\f${device}`
    );
    if (ret) {
      return new USBSerial(ret);
    } else {
      return null;
    }
  };

  export const createVideoView = function (
    width?: number,
    height?: number,
    options?: string
  ): VideoView {
    const ret = prompt(
      "#",
      `App.CreateVideoView(\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new VideoView(ret);
    } else {
      return null;
    }
  };

  export const createWallpaper = function (options?: string): Wallpaper {
    if (_wpr) {
      _wpr.Release();
    }
    const ret = prompt("#", `App.CreateWallpaper(\f${options}`);
    if (ret) {
      _wpr = new Wallpaper(ret);
    } else {
      _wpr = null;
    }
    return _wpr;
  };

  export const createWebServer = function (
    port?: number,
    options?: number
  ): WebServer {
    const ret = prompt("#", `App.CreateWebServer(${port}\f${options}`);
    if (ret) {
      return new WebServer(ret);
    } else {
      return null;
    }
  };

  export const createWebSocket = function (
    id: string,
    ip: string,
    port: number,
    options: string
  ): DSObject {
    return new _WebSock(id, ip, port, options);
  };

  export const createWebView = function (
    width?: number,
    height?: number,
    options?: string,
    zoom?: number
  ): WebView {
    const ret = prompt(
      "#",
      `App.CreateWeb(\f${width}\f${height}\f${options}\f${zoom}`
    );
    if (ret) {
      return new WebView(ret);
    } else {
      return null;
    }
  };

  export const createWizard = function (
    title: string,
    width?: number,
    height?: number,
    callback?: Function,
    options?: string
  ): Wizard {
    return new Wizard(title, width, height, callback, options);
  };

  export const createYesNoDialog = function (
    message?: string,
    options?: string
  ): YesNoDialog {
    if (_ynd) {
      _ynd.Release();
    }
    const ret = prompt("#", `App.CreateYesNoDialog(\f${message}\f${options}`);
    if (ret) {
      _ynd = new YesNoDialog(ret);
    } else {
      _ynd = null;
    }
    return _ynd;
  };

  export const createZipUtil = function (mode?: string): ZipUtil {
    const ret = prompt("#", `App.CreateZipUtil(\f${mode}`);
    if (ret) {
      return new ZipUtil(ret);
    } else {
      return null;
    }
  };

  export const debug = function (message: string): void {
    prompt("#", `App.Debug(\f${message}`);
  };

  export const deleteDatabase = function (name: string): void {
    prompt("#", `App.DeleteDatabase(\f${name}`);
  };

  export const deleteFile = function (file: string): void {
    prompt("#", `App.DeleteFile(${file}`);
  };

  export const deleteFolder = function (folder: string): void {
    prompt("#", `App.DeleteFolder(${folder}`);
  };

  export const destroyLayout = function (layout: Layout): void {
    prompt("#", `App.DestroyLayout(${layout.id}`);
  };

  export const disableKeys = function (keyList: string): void {
    prompt("#", `App.DisableKeys(\f${keyList}`);
  };

  export const disableTouch = function (disable: boolean): void {
    prompt("#", `App.DisableTouch(\f${disable}`);
  };

  export const discoverBtDevices = function (
    filter: string,
    onFound: Function,
    onComplete: Function
  ): void {
    prompt(
      "#",
      `App.DiscoverBtDevices(\f${filter}\f${_Cbm(onFound)}\f${_Cbm(onComplete)}`
    );
  };

  export const downloadFile = function (
    src: string,
    dest: string,
    title?: string,
    desc?: string,
    options?: string
  ): void {
    prompt(
      "#",
      `App.DownloadFile(\f${src}\f${dest}\f${title}\f${desc}\f${options}`
    );
  };

  export const enableBackKey = function (enable: boolean): void {
    prompt("#", `App.EnableBackKey(${enable}`);
  };

  export const error = function (
    message: string,
    line: number,
    file: string,
    quit: boolean
  ): void {
    prompt("#", `App.Error(\f${message}\f${line}\f${file}\f${quit}`);
  };

  export const execute = function (js: string): void {
    prompt("#", `App.Execute(${js}`);
  };

  export const exit = function (kill: boolean): void {
    prompt("#", `App.Exit(${kill}`);
  };

  export const extExec = function (
    name: string,
    file: string,
    args: string,
    options?: string
  ): string | null {
    return prompt("#", `App.ExtExec(\f${name}\f${file}\f${args}\f${options}`);
  };

  export const extractAssets = function (
    src: string,
    dest: string,
    overwrite?: boolean,
    options?: string
  ): void {
    prompt(
      "#",
      `App.ExtractAssets(\f${src}\f${dest}\f${overwrite}\f${options}`
    );
  };

  export const extractPlugins = function (): void {
    prompt("#", `App.ExtractPlugins(\f`);
  };

  export const fileExists = function (file: string): boolean {
    return prompt("#", `App.FileExists(${file}`) === "true";
  };

  export const folderExists = function (folder: string): boolean {
    return prompt("#", `App.FolderExists(${folder}`) === "true";
  };

  /*X*/

  export const gA = function (cmd, ...args): void {
    try {
      const dbg = _dbg;
      _UseDbg(false);
      const ga = null;
      if (fileExists("/Sys/ga.js")) {
        if (cmd.toLowerCase() === "create") {
          _LoadScriptSync("/Sys/ga.js");
          window.ga =
            window.ga ||
            function (): void {
              (ga.q = ga.q || []).push(args);
            };
          ga.l = +new Date();
          ga("create", args[1], {
            storage: "none",
            clientId: alt.getDeviceId(),
          });
          ga("set", { checkProtocolTask: null, checkStorageTask: null });
        } else {
          ga.apply(this, args);
        }
      }
      _UseDbg(dbg);
    } catch (e) {
      // Do nothing.
    }
  };

  export const getAccounts = function (): string {
    return prompt("#", `App.GetAccounts(`);
  };

  export const getActivities = function (): ActivityType[] {
    return JSON.parse(prompt("#", `App.GetActivities(`));
  };

  export const getAppName = function (): string {
    return prompt("#", `App.GetAppName(`);
  };

  export const getAppPath = function (): string {
    return prompt("#", `App.GetAppPath(`);
  };

  export const getBatteryLevel = function (): number {
    return parseFloat(prompt("#", `App.GetBatteryLevel(\f`));
  };

  export const getBluetoothAddress = function (): string {
    return prompt("#", `App.GetBluetoothAddress(`);
  };

  export const getBluetoothName = function (): string {
    return prompt("#", `App.GetBluetoothName(`);
  };

  export const getBtProfileState = function (type: string): string {
    return prompt("#", `App.GetBtProfileState(\f${type}`);
  };

  export const getBuildNum = function (): number {
    return parseInt(prompt("#", `App.GetBuildNum(`));
  };

  export const getChargeType = function (): string {
    return prompt("#", `App.GetChargeType(\f`);
  };

  export const getClipboardText = function (): string {
    return prompt("#", `App.GetClipboardText(`);
  };

  export const getCountry = function (): string {
    return prompt("#", `App.GetCountry(`);
  };

  export const getCountryCode = function (): string {
    return prompt("#", `App.GetCountryCode(`);
  };

  export const getDSVersion = function (): number {
    return parseFloat(prompt("#", `App.GetDSVersion(`));
  };

  export const getData = function (name: string): string {
    return prompt("#", `App.GetData(\f${name}`);
  };

  export const getDatabaseFolder = function (): string {
    return prompt("#", `App.GetDatabaseFolder(`);
  };

  export const getDefaultOrientation = function (): string {
    return prompt("#", `App.GetDefaultOrientation(`);
  };

  export const getDeviceId = function (): string {
    return prompt("#", `App.GetDeviceId(`);
  };

  export const getDisplayHeight = function (): number {
    return parseFloat(prompt("#", `App.GetDisplayHeight(`));
  };

  export const getDisplayWidth = function (): number {
    return parseFloat(prompt("#", `App.GetDisplayWidth(`));
  };

  export const getDrawerState = function (side: SideType): string {
    return prompt("#", `App.GetDrawerState(\f${side}`);
  };

  export const getEnv = function (name: string): string {
    return prompt("#", `App.GetEnv(\f${name}`);
  };

  export const getExternalFolder = function (): string {
    return prompt("#", `App.GetExternalFolder(`);
  };

  export const getFileDate = function (file: string): Date {
    const d = parseInt(prompt("#", `App.GetFileDate(\f${file}`));
    if (d) {
      return new Date(d);
    } else {
      return null;
    }
  };

  export const getFileSize = function (file: string): number {
    return parseInt(prompt("#", `App.GetFileSize(\f${file}`));
  };

  export const getFreeSpace = function (mode: string): number {
    return parseFloat(prompt("#", `App.GetFreeSpace(\f${mode}`));
  };

  export const getIPAddress = function (): string {
    return prompt("#", `App.GetIPAddress(`);
  };

  export const getInstalledApps = function (): InstalledAppType[] {
    return JSON.parse(prompt("#", `App.GetInstalledApps(\f`));
  };

  export const getIntent = function (): IntentType {
    const s = prompt("#", `App.GetIntent(`);
    if (s.length) {
      return JSON.parse(s);
    } else {
      return null;
    }
  };

  export const getInternalFolder = function (): string {
    return prompt("#", `App.GetInternalFolder(`);
  };

  export const getJoystickName = function (id: string): string {
    return prompt("#", `App.GetJoyName(\f${id}`);
  };

  export const getJoystickState = function (id: string, key: string): number {
    return parseFloat(prompt("#", `App.GetJoyState(\f${id}\f${key}`));
  };

  export const getKeyboardHeight = function (): number {
    return parseInt(prompt("#", `App.GetKeyboardHeight(`));
  };

  export const getLanguage = function (): string {
    return prompt("#", `App.GetLanguage(`);
  };

  export const getLanguageCode = function (): string {
    return prompt("#", `App.GetLanguageCode(`);
  };

  export const getLastButton = function (): DSObject {
    const ret = prompt("#", `App.GetLastButton(`);
    if (ret) {
      return _map[ret];
    } else {
      return null;
    }
  };

  export const getLastCheckBox = function (): DSObject {
    const ret = prompt("#", `App.GetLastCheckBox(`);
    if (ret) {
      return _map[ret];
    } else {
      return null;
    }
  };

  export const getLastImage = function (): DSObject {
    const ret = prompt("#", `App.GetLastImage(`);
    if (ret) {
      return _map[ret];
    } else {
      return null;
    }
  };

  export const getLastToggle = function (): DSObject {
    const ret = prompt("#", `App.GetLastToggle(`);
    if (ret) {
      return _map[ret];
    } else {
      return null;
    }
  };

  export const getMacAddress = function (): string {
    return prompt("#", `App.GetMacAddress(`);
  };

  export const getMediaFile = function (appName: string, ext?: string): string {
    return prompt("#", `App.GetMediaFile(\f${appName}\f${ext}`);
  };

  export const getMemoryInfo = function (): MemoryInfoType {
    return JSON.parse(prompt("#", `App.GetMemoryInfo(\f`));
  };

  export const getMetadata = function (file: string, keys?: string): string {
    return prompt("#", `App.GetMetadata(\f${file}\f${keys}`);
  };

  export const getModel = function (): string {
    return prompt("#", `App.GetModel(`);
  };

  export const getName = function (): string {
    return prompt("#", `App.GetName(`);
  };

  export const getNotifyId = function (): string {
    return prompt("#", `App.GetNotifyId(`);
  };

  export const getOSVersion = function (): number {
    return parseInt(prompt("#", `App.GetBuildNum(`));
  };
  // eslint-disable-next-line
  export const getObjects = function (): any {
    return _map;
  };

  export const getOptions = function (): string {
    return prompt("#", `App.GetOptions(`);
  };

  export const getOrientation = function (): string {
    return prompt("#", `App.GetOrientation(`);
  };

  export const getPackageName = function (): string {
    return prompt("#", `App.GetPackageName(`);
  };

  export const getPairedBtDevices = function (): BTDeviceType[] {
    return JSON.parse(prompt("#", `App.GetPairedBTDevices(\f`));
  };

  export const getPath = function (): string {
    return prompt("#", `App.GetPath(`);
  };

  export const getPermission = function (
    type: string,
    callback: Function
  ): void {
    prompt("#", `App.GetPermission(\f${type}\f${_Cbm(callback)}`);
  };

  export const getPrivateFolder = function (name: string): string {
    return prompt("#", `App.GetPrivateFolder(\f${name}`);
  };

  export const getRSSI = function (): number {
    return parseInt(prompt("#", `App.GetRSSI(`));
  };

  export const getResourceId = function (
    name: string,
    options?: string
  ): number {
    return parseInt(prompt("#", `App.GetResourceId(\f${name}\f${options}`));
  };

  export const getRingerMode = function (): string {
    return prompt("#", `App.GetRingerMode(`);
  };

  export const getRotation = function (): number {
    return parseInt(prompt("#", `App.GetRotation(`));
  };

  export const getRunningApps = function (): RunningAppType[] {
    return JSON.parse(prompt("#", `App.GetRunningApps(\f`));
  };

  export const getRunningServices = function (): { user; pid; name }[] {
    return JSON.parse(prompt("#", `App.GetRunningServices(\f`));
  };

  export const getSSID = function (): string {
    return prompt("#", `App.GetSSID(`);
  };

  export const getScreenDensity = function (): number {
    return parseFloat(prompt("#", `App.GetScreenDensity(`));
  };

  export const getScreenHeight = function (options?: string): number {
    return parseFloat(prompt("#", `App.GetScreenHeight(\f${options}`));
  };

  export const getScreenWidth = function (options?: string): number {
    return parseFloat(prompt("#", `App.GetScreenWidth(\f${options}`));
  };

  export const getSharedFiles = function (): string[] {
    const s = prompt("#", `App.GetSharedFiles(`);
    if (s.length) {
      return s.split(", ");
    } else {
      return null;
    }
  };

  export const getSharedText = function (index: number): string {
    return prompt("#", `App.GetSharedText(${index}`);
  };

  export const getSpeakerPhone = function (): boolean {
    return prompt("#", `App.GetSpeakerPhone(`) === "true";
  };

  export const getSpecialFolder = function (name: string): string {
    return prompt("#", `App.GetSpecialFolder(\f${name}`);
  };

  export const getThumbnail = function (
    src: string,
    dest: string,
    width: number,
    height: number
  ): void {
    prompt("#", `App.GetThumbnail(\f${src}\f${dest}\f${width}\f${height}`);
  };

  export const getTop = function (): number {
    return parseFloat(prompt("#", `App.GetTop(`));
  };

  export const getType = function (): string {
    return "App";
  };

  export const getUser = function (): string {
    return prompt("#", `App.GetUser(`);
  };

  export const getVersion = function (): number {
    return parseFloat(prompt("#", `App.GetVersion(`));
  };

  export const getVolume = function (stream): number {
    return parseFloat(prompt("#", `App.GetVolume(\f${stream}`));
  };

  export const goToSleep = function (): void {
    prompt("#", `App.GoToSleep(`);
  };

  export const hasSoftNav = function (): boolean {
    return prompt("#", `App.HasSoftNav(`) === "true";
  };

  export const hideKeyboard = function (): void {
    prompt("#", `App.HideKeyboard(`);
  };

  export const hideProgress = function (): void {
    prompt("#", `App.HideProgress(`);
  };

  export const hideProgressBar = function (): void {
    prompt("#", `App.HideProgressBar(`);
  };

  export const httpRequest = function (
    type,
    baseUrl,
    path,
    params,
    callback,
    headers
  ): void {
    prompt(
      "#",
      `App.HttpRequest(\f${type}\f${baseUrl}\f${path}\f${params}\f${_Cbm(
        callback
      )}\f${headers}`
    );
  };

  export const inIDE = function (): boolean {
    return prompt("#", `App.InIDE(`) === "true";
  };

  export const installWallpaper = function (packageName, className): void {
    prompt("#", `App.InstallWallpaper\f${packageName}\f${className}`);
  };

  export const isAPK = function (): boolean {
    return prompt("#", `App.IsAPK(`) === "true";
  };

  export const isAppInstalled = function (packageName: string): boolean {
    return prompt("#", `App.IsAppInstalled(\f${packageName}`) === "true";
  };

  export const isBluetoothEnabled = function (): boolean {
    return prompt("#", `App.IsBluetoothEnabled(`) === "true";
  };

  export const isBluetoothOn = function (): boolean {
    return prompt("#", `App.IsBluetoothOn(`) === "true";
  };

  export const isBtDevicePaired = function (name: string): boolean {
    return prompt("#", `App.IsBtDevicePaired(\f${name}`) === "true";
  };

  export const isCharging = function (): boolean {
    return prompt("#", `App.IsCharging(`) === "true";
  };

  export const isChrome = function (): boolean {
    return prompt("#", `App.IsChrome(`) === "true";
  };

  export const isConnected = function (): boolean {
    return prompt("#", `App.IsConnected(`) === "true";
  };

  export const isDebugEnabled = function (): boolean {
    return _dbg ? true : false;
  };

  export const isDebugging = function (): boolean {
    return prompt("#", `App.IsDebugging(`) === "true";
  };

  export const isEngine = function (): boolean {
    return prompt("#", `App.IsEngine(`) === "true";
  };

  export const isFolder = function (folder: string): boolean {
    return prompt("#", `App.IsFolder(${folder}`) === "true";
  };

  export const isKeyboardShown = function (): boolean {
    return prompt("#", `App.IsKeyboardShown(`) === "true";
  };

  export const isLocationEnabled = function (types: string): boolean {
    return prompt("#", `App.IsLocationEnabled(\f${types}`) === "true";
  };

  export const isNavBarOnRight = function (): boolean {
    return prompt("#", `App.IsNavBarOnRight(`) === "true";
  };

  export const isNewVersion = function (): boolean {
    return prompt("#", `App.IsNewVersion(`) === "true";
  };

  export const isPortrait = function (): boolean {
    return prompt("#", `App.GetOrientation(`) === "Portrait";
  };

  export const isPremium = function (): boolean {
    return prompt("#", `App.IsPremium(`) === "true";
  };

  export const isScreenOn = function (): boolean {
    return prompt("#", `App.IsScreenOn(`) === "true";
  };

  export const isService = function (): boolean {
    return prompt("#", `App.IsService(`) === "true";
  };

  export const isStarted = function (): boolean {
    return _started;
  };

  export const isTablet = function (): boolean {
    return prompt("#", `App.IsTablet(`) === "true";
  };

  export const isThings = function (): boolean {
    return prompt("#", `App.IsThings(`) === "true";
  };

  export const isWifiApEnabled = function (): boolean {
    return prompt("#", `App.IsWifiApEnabled(`) === "true";
  };

  export const isWifiEnabled = function (): boolean {
    return prompt("#", `App.IsWifiEnabled(`) === "true";
  };

  export const killApp = function (procId: string): void {
    prompt("#", `App.KillApp(${procId}`);
  };

  export const language2Code = function (name: string): string {
    if (name) {
      return _languages.codes[name.toLowerCase()];
    } else {
      return _curLang;
    }
  };

  export const listFolder = function (
    path: string,
    filter?: string,
    limit?: number,
    options?: string
  ): string[] {
    return JSON.parse(
      prompt("#", `App.ListFolder(\f${path}\f${filter}\f${limit}\f${options}`)
    );
  };

  export const loadBoolean = function (
    name: string,
    dflt?: boolean,
    file?: string
  ): boolean {
    return prompt("#", `App.LoadBoolean(${name}\f${dflt}\f${file}`) === "true";
  };

  export const loadNumber = function (
    name: string,
    dflt?: number,
    file?: string
  ): number {
    return parseFloat(prompt("#", `App.LoadNumber(${name}\f${dflt}\f${file}`));
  };

  export const loadPlugin = function (url: string): void {
    _LoadPlugin(url);
  };

  export const loadScript = function (url: string, callback?: Function): void {
    _LoadScript(url, callback);
  };

  export const loadText = function (
    name: string,
    dflt?: string,
    file?: string
  ): string {
    return prompt("#", `App.LoadText(${name}\f${dflt}\f${file}`);
  };

  export const lock = function (): void {
    prompt("#", `App.Lock(`);
  };

  export const lockDrawer = function (side: SideType): void {
    prompt("#", `App.LockDrawer(\f${side}`);
  };

  export const makeFolder = function (folder): void {
    prompt("#", `App.MakeFolder(${folder}`);
  };

  // eslint-disable-next-line
  export const openDatabase = function (name): any {
    _CreateCP("sqliteplugin");
    const db = sqlitePlugin.openDatabase(name);
    db.name = name;

    db.GetType = function (): string {
      return "Database";
    };
    db.GetName = function (): string {
      return db.name;
    };
    db.ExecuteSql = function (sql, params, success, error): void {
      if (!success) {
        success = null;
      }
      if (!error) {
        error = _Err;
      }

      db.transaction(function (tx) {
        tx.executeSql(
          sql,
          params,
          function (tx, res) {
            if (success) {
              success.apply(db, [res]);
            }
          },
          function (t, e) {
            error.apply(db, [e.message]);
          }
        );
      }, error);
    };
    db.Close = function (): void {
      db.close(_Log, _Err);
    };
    db.Delete = function (): void {
      sqlitePlugin.deleteDatabase(db.name, _Log, _Err);
    };
    return db;
  };

  export const openDrawer = function (side: SideType): void {
    prompt("#", `App.OpenDrawer(\f${side}`);
  };

  export const openFile = function (
    file: string,
    type: string,
    choose: string
  ): void {
    prompt("#", `App.OpenFile(\f${file}\f${type}\f${choose}`);
  };

  export const openUrl = function (
    url: string,
    type: string,
    choose: string
  ): void {
    prompt("#", `App.OpenUrl(\f${url}\f${type}\f${choose}`);
  };

  export const pairBtDevice = function (
    address: string,
    callback: Function
  ): void {
    prompt("#", `App.PairBtDevice(\f${address}\f${_Cbm(callback)}`);
  };

  export const playRingtone = function (type: string): void {
    prompt("#", `App.PlayRingtone(\f${type}`);
  };

  export const playSound = function (file: string): void {
    _PlaySound(file);
  };

  export const preventScreenLock = function (mode: string): void {
    prompt("#", `App.PreventScreenLock(${mode}`);
  };

  export const preventWifiSleep = function (): void {
    prompt("#", `App.PreventWifiSleep(`);
  };

  export const queryContent = function (
    uri: string,
    columns: string,
    select: string,
    args: string,
    sort: string
    // eslint-disable-next-line
  ): any {
    return JSON.parse(
      prompt(
        "#",
        `App.QueryContent(\f${uri}\f${columns}\f${select}\f${args}\f${sort}`
      )
    );
  };

  export const quit = function (
    message?: string,
    title?: string,
    options?: string
  ): void {
    prompt("#", `App.Quit(\f${message}\f${title}\f${options}`);
  };

  export const readFile = function (file: string, encoding?: string): string {
    return prompt("#", `App.ReadFile(\f${file}\f${encoding}`);
  };

  export const redirectAssets = function (dir: string): void {
    prompt("#", `App.RedirectAssets(\f${dir}`);
  };

  export const removeDrawer = function (side: SideType): void {
    prompt("#", `App.RemoveDrawer(\f${side}`);
  };

  export const removeLayout = function (layout: Layout): void {
    prompt("#", `App.RemoveLayout(${layout.id}`);
  };

  export const renameFile = function (src: string, dest: string): void {
    prompt("#", `App.RenameFile(\f${src}\f${dest}`);
  };

  export const renameFolder = function (src: string, dest: string): void {
    prompt("#", `App.RenameFile(\f${src}\f${dest}`);
  };

  export const replaceInFile = function (
    file: string,
    text: string,
    replace: string,
    options?: string
  ): void {
    prompt("#", `App.ReplaceInFile(\f${file}\f${text}\f${replace}\f${options}`);
  };

  export const saveBoolean = function (
    name: string,
    value: boolean,
    file?: string
  ): void {
    prompt("#", `App.SaveBoolean(${name}\f${value}\f${file}`);
  };

  export const saveCookies = function (): void {
    prompt("#", `App.SaveCookies(`);
  };

  export const saveNumber = function (
    name: string,
    value: number,
    file?: string
  ): void {
    prompt("#", `App.SaveNumber(${name}\f${value}\f${file}`);
  };

  /**
   * Save a text value to remember variable values between multiple app starts.
   * @param name
   * @param value
   * @param file path to file or folder ( “/absolute/...” or “relative/...” )
   */
  export const saveText = function (
    name: string,
    value: string,
    file?: string
  ): void {
    prompt("#", `App.SaveText(${name}\f${value}\f${file}`);
  };

  export const scanFile = function (file: string): void {
    prompt("#", `App.ScanFile(\f${file}`);
  };

  export const screenShot = function (
    fileName: string,
    quality?: string
  ): void {
    prompt("#", `App.ScreenShot(\f${fileName}\f${quality}`);
  };

  export const script = function (file: string): void {
    _LoadScriptSync(file);
  };

  export const sendFile = function (
    file: string,
    subject?: string,
    text?: string,
    choose?: string
  ): void {
    prompt("#", `App.SendFile(\f${file}\f${subject}\f${text}\f${choose}`);
  };

  export const sendImage = function (file: string, choose: string): void {
    prompt("#", `App.SendImage(\f${file}\f${choose}`);
  };

  export const sendIntent = function (
    packageName?: string,
    className?: string,
    action?: string,
    category?: string,
    uri?: string,
    type?: string,
    extras?: string,
    options?: string,
    callback?: Function
  ): void {
    prompt(
      "#",
      `App.SendIntent(\f${packageName}\f${className}\f${action}\f${category}\f${uri}\f${type}\f${extras}\f${options}\f${_Cbm(
        callback
      )}`
    );
  };

  export const sendMail = function (
    address: string,
    subject?: string,
    body?: string,
    attach?: string,
    type?: string,
    options?: string
  ): void {
    prompt(
      "#",
      `App.SendMail(\f${address}\f${subject}\f${body}\f${attach}\f${type}\f${options}`
    );
  };

  export const sendMessage = function (message: string): void {
    prompt("#", `App.SendMessage(\f${message}`);
  };

  export const sendSMS = function (message: string, number: string): void {
    sendIntent(
      null,
      null,
      "android.intent.action.SENDTO",
      null,
      `smsto:${number}`,
      null,
      JSON.stringify([{ name: "sms_body", type: "string", value: message }])
    );
  };

  export const sendText = function (
    text: string,
    subject?: string,
    choose?: string
  ): void {
    prompt("#", `App.SendText(\f${text}\f${subject}\f${choose}`);
  };

  export const setAlarm = function (
    type: string,
    id: string,
    callback: Function,
    time: string,
    interval: string,
    options?: string
  ): string {
    return prompt(
      "#",
      `App.SetAlarm(\f${type}\f${id}\f${_Cbm(
        callback
      )}\f${time}\f${interval}\f${options}`
    );
  };

  export const setAutoBoot = function (auto: boolean): void {
    prompt("#", `App.SetAutoBoot(\f${auto}`);
  };

  export const setAutoStart = function (appName: string): void {
    prompt("#", `App.SetAutoStart(\f${appName}`);
  };

  export const setAutoWifi = function (auto: boolean): void {
    prompt("#", `App.SetAutoWifi(\f${auto}`);
  };

  export const setBackColor = function (color: string): void {
    prompt("#", `App.SetBackColor(\f${color}`);
  };

  export const setBluetoothEnabled = function (enable: boolean): void {
    prompt("#", `App.SetBluetoothEnabled(\f${enable}`);
  };

  export const setClipboardText = function (text: string): void {
    prompt("#", `App.SetClipboardText(${text}`);
  };

  export const setData = function (name: string, value: string): void {
    prompt("#", `App.SetData(\f${name}\f${value}`);
  };

  export const setDebug = function (switches: boolean): void {
    prompt("#", `_UseDbg(\f${switches}`);
    _dbg = switches;
  };

  export const setDebugEnabled = function (enable: boolean): void {
    prompt("#", `_UseDbg(\f${enable}`);
    _dbg = enable;
  };

  export const setDensity = function (dpi: number): void {
    prompt("#", `App.SetDensity(\f${dpi}`);
  };

  export const setInBackground = function (): void {
    prompt("#", `App.SetInBackground(\f`);
  };

  export const setInForeground = function (
    title: string,
    text: string,
    largeIcon: string,
    smallIcon: string,
    importance: string
  ): void {
    prompt(
      "#",
      `App.SetInForeground(\f${title}\f${text}\f${largeIcon}\f${smallIcon}\f${importance}`
    );
  };

  export const setJoystickOptions = function (options?: string): void {
    prompt("#", `App.SetJoystickOptions(\f${options}`);
  };

  export const setKioskMode = function (
    mode: string,
    enable: boolean,
    options?: string
  ): void {
    prompt("#", `App.SetKioskMode(\f${mode}\f${enable}\f${options}`);
  };

  export const setLanguage = function (name: string): void {
    const json = readFile("lang.json");
    _languages = JSON.parse(json);
    _curLang = _languages.codes[name.toLowerCase()];
  };

  export const setMenu = function (list: string, iconPath?: string): void {
    prompt("#", `App.SetMenu(${list}\f${iconPath}`);
  };

  export const setMockLocation = function (
    lat: string,
    lng: string,
    accuracy: number,
    speed: number
  ): void {
    prompt("#", `App.SetMockLocation(\f${lat}\f${lng}\f${accuracy}\f${speed}`);
  };

  export const setNavBarColor = function (color: string): void {
    prompt("#", `App.SetNavBarColor(\f${color}`);
  };

  export const setOnBroadcast = function (
    callback: Function,
    action: string
  ): void {
    prompt("#", `App.SetOnBroadcast(\f${_Cbm(callback)}\f${action}`);
  };

  export const setOnDebug = function (callback: Function): void {
    prompt("#", `App.SetOnDebug(\f${_Cbm(callback)}`);
  };

  export const setOnError = function (callback: Function): void {
    prompt("#", `App.SetOnError(\f${_Cbm(callback)}`);
  };

  export const setOnKey = function (callback: Function): void {
    prompt("#", `App.SetOnKey(\f${_Cbm(callback)}`);
  };

  export const setOnShowKeyboard = function (callback: Function): void {
    prompt("#", `App.SetOnShowKeyboard(\f${_Cbm(callback)}`);
  };

  export const setOnWifiChange = function (callback: Function): void {
    prompt("#", `App.SetOnWifiChange(\f${_Cbm(callback)}`);
  };

  export const setOptions = function (options: string): void {
    prompt("#", `App.SetOptions(\f${options}`);
  };

  export const setOrientation = function (
    orient: string,
    callback?: Function
  ): void {
    prompt("#", `App.SetOrientation(\f${orient}\f${_Cbm(callback)}`);
  };

  export const setPosition = function (
    left: number,
    top: number,
    width?: number,
    height?: number,
    options?: string
  ): void {
    prompt(
      "#",
      `App.SetPosition(\f${left}\f${top}\f${width}\f${height}\f${options}`
    );
  };

  export const setPriority = function (level: string): void {
    prompt("#", `App.SetPriority(\f${level}`);
  };

  export const setRingerMode = function (mode: string): void {
    prompt("#", `App.SetRingerMode(\f${mode}`);
  };

  export const setScreenBrightness = function (level: number): void {
    prompt("#", `App.SetScreenBrightness(\f${level}`);
  };

  export const setScreenMode = function (mode: string): void {
    prompt("#", `App.SetScreenMode(\f${mode}`);
  };

  export const setSharedApp = function (name: string): void {
    prompt("#", `App.SetSharedApp(${name}`);
  };

  export const setSpeakerPhone = function (on: boolean): void {
    prompt("#", `App.SetSpeakerPhone(\f${on}`);
  };

  export const setStatusBarColor = function (color: string): void {
    prompt("#", `App.SetStatusBarColor(\f${color}`);
  };

  export const setTheme = function (theme: Theme): void {
    prompt("#", `App.SetTheme(\f${theme ? theme.id : null}`);
  };

  export const setTitle = function (title: string): void {
    prompt("#", `App.SetTitle(${title}`);
  };

  export const setUserAgent = function (agent: string): void {
    prompt("#", `App.SetUserAgent(\f${agent}`);
  };

  export const setUserCreds = function (name: string, password: string): void {
    prompt("#", `App.SetUserCreds(\f${name}\f${password}`);
  };

  export const setVolume = function (
    stream: string,
    level: number,
    options?: string
  ): void {
    prompt("#", `App.SetVolume(\f${stream}\f${level}\f${options}`);
  };

  export const setWifiApEnabled = function (
    enable: boolean,
    ssid: string,
    key: string
  ): void {
    prompt("#", `App.SetWifiApEnabled(\f${enable}\f${ssid}\f${key}`);
  };

  export const setWifiEnabled = function (enable: boolean): void {
    prompt("#", `App.SetWifiEnabled(\f${enable}`);
  };

  export const showCheckList = function (
    title?: string,
    list?: string,
    callback?: Function,
    width?: number,
    height?: number,
    options?: string
  ): CheckList {
    return new CheckList(title, list, callback, width, height, options);
  };

  export const showDebug = function (show: string): void {
    prompt("#", `App.ShowDebug(${show}`);
  };

  export const showKeyboard = function (obj: DSObject): boolean {
    return prompt("#", `App.ShowKeyboard(\f${obj.id}`) === "true";
  };

  export const showMenu = function (): void {
    prompt("#", `App.ShowMenu(`);
  };

  export const showPopup = function (message: string, options?: string): void {
    prompt("#", `App.ShowPopup(${message}\f${options}`);
  };

  export const showProgress = function (msg: string, options?: string): void {
    prompt("#", `App.ShowProgress(\f${msg}\f${options}`);
  };

  export const showProgressBar = function (
    title: string,
    percent: number,
    options?: string
  ): void {
    prompt("#", `App.ShowProgressBar(\f${title}\f${percent}\f${options}`);
  };

  //Generic text input dialog function.
  export const showTextDialog = function (
    title: string,
    deflt: string,
    callback: Function
  ): void {
    const orientation = alt.getOrientation();
    const width = {
      text: orientation === "Portrait" ? 0.8 : 0.5,
      button: orientation === "Portrait" ? 0.4 : 0.25,
    };

    const textDialog = alt.createDialog(title);
    const background = alt
      .createLayout("Linear", "vertical,fillxy")
      .setPadding(0.04, 0.02, 0.04, 0);
    const text = alt.addTextEdit(background, deflt, width.text, -1, "Left");
    const buttons = alt
      .createLayout("Linear", "horizontal,fillxy,center")
      .setMargins(0, 0.02, 0, 0.01);
    alt.addButton(buttons, "Cancel", width.button).setOnTouch(function () {
      textDialog.dismiss();
    });
    alt.addButton(buttons, "OK", width.button).setOnTouch(function () {
      textDialog.dismiss();
      const txt = text.getText();
      if (txt) {
        callback(txt);
      }
    });
    background.addChild(buttons);
    textDialog.addLayout(background).show();
  };

  let _dlgTip: Dialog = null;
  export const showTip = function (
    message: string,
    left?: number,
    top?: number,
    timeOut?: number,
    options = ""
  ): void {
    // Remove old tip if still showing.
    if (_dlgTip) {
      _dlgTip.dismiss();
      window.clearTimeout(_dlgTip._tm);
    }

    // Create dialog window.
    _dlgTip = alt
      .createDialog(null, "AutoCancel,NoDim," + options)
      .setBackColor("#00000000")
      .setPosition(left, top);
    const tipLayout = alt.createLayout("Linear", "vertical,fillxy");
    //const tipText =
    alt
      .addText(tipLayout, message, -1, -1, "MultiLine,left,Html")
      .setTextSize(22, "ps")
      .setOnTouch(function () {
        _dlgTip.dismiss();
      })
      .setBackground(
        `/Res/drawable/tooltip_${/up/i.test(options) ? "up" : "down"}`
      );

    // Add dialog layout and show dialog.
    _dlgTip.addLayout(tipLayout).show();
    if (timeOut) {
      _dlgTip._tm = window.setTimeout(function () {
        if (_dlgTip) {
          _dlgTip.dismiss();
        }
        _dlgTip = null;
      }, timeOut);
    }
  };

  export const simulateDrag = function (
    obj: DSObject,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    step?: number,
    pause?: number
  ): void {
    prompt(
      "#",
      `App.SimulateDrag(\f${obj.id}\f${x1}\f${y1}\f${x2}\f${y2}\f${step}\f${pause}`
    );
  };

  export const simulateKey = function (
    obj: DSObject,
    keyName: string,
    modifiers?: string,
    pause?: number
  ): void {
    prompt(
      "#",
      `App.SimulateKey(\f${obj.id}\f${keyName}\f${modifiers}\f${pause}`
    );
  };

  export const simulateScroll = function (
    obj: DSObject,
    x: number,
    y: number,
    dx: number,
    dy: number,
    count?: number,
    fling?: boolean
  ): void {
    prompt(
      "#",
      `App.SimulateScroll(\f${obj.id}\f${x}\f${y}\f${dx}\f${dy}\f${count}\f${fling}`
    );
  };

  export const simulateTouch = function (
    obj: DSObject,
    x: number,
    y: number,
    dir?: string
  ): void {
    prompt("#", `App.SimulateTouch(\f${obj.id}\f${x}\f${y}\f${dir}`);
  };

  export const start = function (): void {
    if (typeof OnStart === "function") {
      OnStart();
      prompt("#", "_Start");
      _started = true;
    }
  };

  export const startApp = function (
    file: string,
    options?: string,
    intent?: string
  ): void {
    prompt("#", `App.StartApp(\f${file}\f${options}\f${intent}`);
  };

  export const startDebugServer = function (): void {
    prompt("#", `App.StartDebugServer(`);
  };

  export const startService = function (
    packageName: string,
    className?: string
  ): void {
    prompt("#", `App.StartService(\f${packageName}\f${className}`);
  };

  export const stopApp = function (name: string): void {
    prompt("#", `App.StopApp(${name}`);
  };

  export const stopDebugServer = function (): void {
    prompt("#", `App.StopDebugServer(`);
  };

  export const stopService = function (): void {
    prompt("#", `App.StopService(`);
  };

  export const sysExec = function (
    cmd: string,
    options?: string,
    maxRead?: number,
    timeout?: number
  ): string | null {
    return prompt(
      "#",
      `App.SysExec(\f${cmd}\f${options}\f${maxRead}\f${timeout}`
    );
  };

  export const textToSpeech = function (
    text?: string,
    pitch?: number,
    rate?: number,
    callback?: Function,
    stream?: string,
    locale?: string,
    engine?: string
  ): void {
    prompt(
      "#",
      `App.TextToSpeech(\f${text}\f${pitch}\f${rate}\f${_Cbm(
        callback
      )}\f${stream}\f${locale}\f${engine}`
    );
  };

  export const toBack = function (): void {
    prompt("#", `App.ToBack(`);
  };

  export const toFront = function (): void {
    prompt("#", `App.ToFront(`);
  };

  export const translate = function (cancel: string, ok: string): void {
    prompt("#", `App.Translate(\f${cancel}\f${ok}`);
  };

  export const unlock = function (): void {
    prompt("#", `App.Unlock(`);
  };

  export const unlockDrawer = function (side: SideType): void {
    prompt("#", `App.UnlockDrawer(\f${side}`);
  };

  export const unpairBtDevice = function (
    address: string,
    callback: Function
  ): void {
    prompt("#", `App.UnpairBtDevice(\f${address}\f${_Cbm(callback)}`);
  };

  export const unzipFile = function (src: string, dest: string): void {
    prompt("#", `App.UnzipFile(\f${src}\f${dest}`);
  };

  export const updateProgressBar = function (percent: number): void {
    prompt("#", `App.UpdateProgressBar(\f${percent}`);
  };

  export const uploadFile = function (
    url: string,
    file: string,
    name?: string,
    callback?: Function
  ): void {
    prompt("#", `App.UploadFile(\f${url}\f${file}\f${name}\f${_Cbm(callback)}`);
  };

  export const uri2Path = function (uri: string): string {
    return prompt("#", `App.Uri2Path(\f${uri}`);
  };

  export const vibrate = function (pattern: string): void {
    prompt("#", `App.Vibrate(${pattern}`);
  };

  export const wait = function (secs: number): void {
    prompt("#", `App.Wait(${secs}`);
  };

  export const wakeUp = function (): void {
    prompt("#", `App.WakeUp(`);
  };

  export const wifiConnect = function (ssid: string, key?: string): void {
    prompt("#", `App.WifiConnect(\f${ssid}\f${key}`);
  };

  export const wifiScan = function (
    callback: Function,
    options?: string
  ): void {
    prompt("#", `App.WifiScan(\f${_Cbm(callback)}\f${options}`);
  };

  export const writeFile = function (
    file: string,
    text: string,
    mode?: string,
    encoding?: string
  ): void {
    prompt("#", `App.WriteFile(\f${file}\f${text}\f${mode}\f${encoding}`);
  };

  export const zipFile = function (src: string, dest: string): void {
    prompt("#", `App.ZipFile(\f${src}\f${dest}`);
  };

  export const zipFolder = function (src: string, dest: string): void {
    prompt("#", `App.ZipFile(\f${src}\f${dest}`);
  };
}
