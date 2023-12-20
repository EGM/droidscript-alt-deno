
function _GetObjects() {
  throw new Error("Function not implemented.");
}
interface DSObject {
  id: string|null;
}
class Lay {
  constructor(_id: string) {
    throw new Error("Function not implemented.");
  }
}
class App {
  Debug(s: string) {}
  SendIntent(
    p1: string | null,
    p2: string | null,
    p3: string | null,
    p4: string | null,
    p5: string | null,
    p6: string | null,
    p7: string | null,
  ) {}
}
const app = new App();

export default class Alt {
  data: object;

  constructor() {
    this.data = {};
  }
  addDrawer(layout: DSObject, side: string, width: string, grabWidth: string) {
    prompt(
      "#",
      "App.AddDrawer(\f" + layout.id + "\f" + side + "\f" + width + "\f" +
        grabWidth,
    );
  }
  addLayout(layout: DSObject, type: string, options: string) {
    if (!type) prompt("#", "App.AddLayout(" + layout.id);
    else {
      const ret = prompt(
        layout ? layout.id : null,
        "App.AddLayout(" + type + "\f" + options,
      );
      if (ret) return new Lay(ret);
      else return null;
    }
  }

  alert(msg: string, title: string, options: string, hue: string) {
    if (title) {
      prompt(
        "#",
        "App.Alert(\f" + msg + "\f" + title + "\f" + options + "\f" + hue,
      );
    } else alert(msg);
  }
  broadcast(type: string, msg: string) {
    prompt("#", "App.Broadcast(" + type + "\f" + msg);
  }
  broadcastIntent(
    action: string,
    category: string,
    data: string,
    type: string,
    extras: string,
    options: string,
  ) {
    prompt(
      "#",
      "App.BroadcastIntent(\f" + action + "\f" + category + "\f" + data + "\f" +
        type + "\f" + extras + "\f" + options,
    );
  }
  call(number: string) {
    prompt("#", "App.Call(\f" + number);
  }
  cancelJob() {
    prompt("#", "App.CancelJob(");
  }
  checkLicense(key: string) {
    prompt("#", "App.CheckLicense(\f" + key);
  }
  checkPermission(name: string) {
    return prompt("#", "App.CheckPermission(\f" + name);
  }
  chooseAccount(callback: Function) {
    prompt("#", "App.ChooseAccount(\f" + _Cbm(callback));
  }
  chooseContact(type: string, callback: Function) {
    prompt("#", "App.ChooseContact(\f" + type + "\f" + _Cbm(callback));
  }
  chooseFile(
    msg: string,
    type: string,
    callback: Function,
    fldr: string,
    options: string,
  ) {
    prompt(
      "#",
      "App.ChooseFile(\f" + msg + "\f" + type + "\f" + _Cbm(callback) + "\f" +
        fldr + "\f" + options,
    );
  }
  chooseImage(options: string, callback: Function) {
    prompt("#", "App.ChooseImage(\f" + options + "\f" + _Cbm(callback));
  }
  clearCookies() {
    prompt("#", "App.ClearCookies(");
  }
  clearData(file: string) {
    prompt("#", "App.ClearData(\f" + file);
  }
  clearValue(name: string, file: string) {
    prompt("#", "App.ClearValue(\f" + name + "\f" + file);
  }
  closeDrawer(side: string) {
    prompt("#", "App.CloseDrawer(\f" + side);
  }
  copyFile(src: string, dest: string) {
    prompt("#", "App.CopyFile(" + src + "\f" + dest);
  }
  copyFolder(src: string, dest: string, overwrite: string, filter: string) {
    prompt(
      "#",
      "App.CopyFolder(\f" + src + "\f" + dest + "\f" + overwrite + "\f" +
        filter,
    );
  }
  createDebug(options: string) {
    prompt("#", "App.CreateDebug(\f" + options);
  }
  createShortcut(
    name: string,
    iconFile: string,
    file: string,
    options: string,
  ) {
    prompt(
      "#",
      "App.CreateShortcut(\f" + name + "\f" + iconFile + "\f" + file + "\f" +
        options,
    );
  }
  debug(msg: string | object) {
    prompt(
      "#",
      "App.Debug(\f" + (typeof msg == "object" ? JSON.stringify(msg) : msg),
    );
  }
  deleteDatabase(name: string) {
    prompt("#", "App.DeleteDatabase(\f" + name);
  }
  deleteFile(file: string) {
    prompt("#", "App.DeleteFile(" + file);
  }
  deleteFolder(fldr: string) {
    prompt("#", "App.DeleteFolder(" + fldr);
  }
  destroyLayout(layout: DSObject) {
    prompt("#", "App.DestroyLayout(" + layout.id);
  }
  disableKeys(keyList: string) {
    prompt("#", "App.DisableKeys(\f" + keyList);
  }
  disableTouch(disable: boolean) {
    prompt("#", "App.DisableTouch(\f" + disable);
  }
  discoverBtDevices(filter: string, onFound: Function, onComplete: Function) {
    prompt(
      "#",
      "App.DiscoverBtDevices(\f" + filter + "\f" + _Cbm(onFound) + "\f" +
        _Cbm(onComplete),
    );
  }
  downloadFile(
    src: string,
    dest: string,
    title: string,
    desc: string,
    options: string,
  ) {
    prompt(
      "#",
      "App.DownloadFile(\f" + src + "\f" + dest + "\f" + title + "\f" + desc +
        "\f" + options,
    );
  }
  enableBackKey(enable: boolean) {
    prompt("#", "App.EnableBackKey(" + enable);
  }
  error(msg: string, line: string, file: string, quit: string) {
    prompt("#", "App.Error(\f" + msg + "\f" + line + "\f" + file + "\f" + quit);
  }
  execute(js: string) {
    prompt("#", "App.Execute(" + js);
  }
  exit(kill: string) {
    prompt("#", "App.Exit(" + kill);
  }
  extExec(name: string, file: string, args: string, options: string) {
    return prompt(
      "#",
      "App.ExtExec(\f" + name + "\f" + file + "\f" + args + "\f" + options,
    );
  }
  extractAssets(
    src: string,
    dest: string,
    overwrite: string,
    options: string,
    filter: string,
  ) {
    prompt(
      "#",
      "App.ExtractAssets(\f" + src + "\f" + dest + "\f" + overwrite + "\f" +
        options + "\f" + filter,
    );
  }
  extractPlugins() {
    prompt("#", "App.ExtractPlugins(\f");
  }
  fileExists(file: string) {
    return prompt("#", "App.FileExists(" + file) == "true";
  }
  folderExists(fldr: string) {
    return prompt("#", "App.FolderExists(" + fldr) == "true";
  }
  getAccessibility() {
    const p = prompt("#", "App.GetAccessibility(");
    return JSON.parse(p === null ? "" : p);
  }
  getAccounts() {
    return prompt("#", "App.GetAccounts(");
  }
  getActivities() {
    const p = prompt("#", "App.GetActivities(");
    return JSON.parse(p === null ? "" : p);
  }
  getAppName() {
    return prompt("#", "App.GetAppName(");
  }
  getAppPath() {
    return prompt("#", "App.GetAppPath(");
  }
  getBatteryLevel() {
    const p = prompt("#", "App.GetBatteryLevel(\f");
    return parseFloat(p === null ? "" : p);
  }
  getBluetoothAddress() {
    return prompt("#", "App.GetBluetoothAddress(");
  }
  getBluetoothName() {
    return prompt("#", "App.GetBluetoothName(");
  }
  getBtProfileState(type: string) {
    return prompt("#", "App.GetBtProfileState(\f" + type);
  }
  getBuildNum() {
    const p = prompt("#", "App.GetBuildNum(");
    return parseInt(p === null ? "" : p);
  }
  getChargeType() {
    return prompt("#", "App.GetChargeType(\f");
  }
  getClipboardText() {
    return prompt("#", "App.GetClipboardText(");
  }
  getCountry() {
    return prompt("#", "App.GetCountry(");
  }
  getCountryCode() {
    return prompt("#", "App.GetCountryCode(");
  }
  getDSBuild() {
    return parseInt(prompt("#", "App.GetDSBuild("));
  }
  getDSVersion() {
    return parseFloat(prompt("#", "App.GetDSVersion("));
  }
  getData(name: string) {
    return prompt("#", "App.GetData(\f" + name);
  }
  getDatabaseFolder() {
    return prompt("#", "App.GetDatabaseFolder(");
  }
  getDebug() {
    return prompt("#", "_GetDbg(\f");
  }
  getDefaultOrientation() {
    return prompt("#", "App.GetDefaultOrientation(");
  }
  getDeviceId() {
    return prompt("#", "App.GetDeviceId(");
  }
  getDisplayHeight() {
    return parseFloat(prompt("#", "App.GetDisplayHeight("));
  }
  getDisplayWidth() {
    return parseFloat(prompt("#", "App.GetDisplayWidth("));
  }
  getDrawerState(side: string) {
    return prompt("#", "App.GetDrawerState(\f" + side);
  }
  getEnv(name: string) {
    return prompt("#", "App.GetEnv(\f" + name);
  }
  getExternalFolder() {
    return prompt("#", "App.GetExternalFolder(");
  }
  getFileDate(file: string) {
    const d = parseInt(prompt("#", "App.GetFileDate(\f" + file));
    if (d) return new Date(d);
    else return null;
  }
  getFileSize(file: string) {
    return parseInt(prompt("#", "App.GetFileSize(\f" + file));
  }
  getFreeSpace(mode: string) {
    return parseFloat(prompt("#", "App.GetFreeSpace(\f" + mode));
  }
  getIPAddress() {
    return prompt("#", "App.GetIPAddress(");
  }
  getInstalledApps() {
    return eval(prompt("#", "App.GetInstalledApps(\f"));
  }
  getIntent() {
    const s = prompt("#", "App.GetIntent(");
    if (s.length) return JSON.parse(s);
    else return null;
  }
  getInternalFolder() {
    return prompt("#", "App.GetInternalFolder(");
  }
  getJoystickName(id: string) {
    return prompt("#", "App.GetJoyName(\f" + id);
  }
  getJoystickState(id: string, key: string) {
    return parseFloat(prompt("#", "App.GetJoyState(\f" + id + "\f" + key));
  }
  getJoystickStates(id: string) {
    return eval(prompt("#", "App.GetJoyStates(\f" + id));
  }
  getKeyboardHeight() {
    return parseInt(prompt("#", "App.GetKeyboardHeight("));
  }
  getLanguage() {
    return prompt("#", "App.GetLanguage(");
  }
  getLanguageCode() {
    return prompt("#", "App.GetLanguageCode(");
  }
  getLastButton() {
    const ret = prompt("#", "App.GetLastButton(");
    if (ret) return (_map[ret]);
    else return null;
  }
  getLastCheckBox() {
    const ret = prompt("#", "App.GetLastCheckBox(");
    if (ret) return (_map[ret]);
    else return null;
  }
  getLastImage() {
    const ret = prompt("#", "App.GetLastImage(");
    if (ret) return (_map[ret]);
    else return null;
  }
  getLastToggle() {
    const ret = prompt("#", "App.GetLastToggle(");
    if (ret) return (_map[ret]);
    else return null;
  }
  getMacAddress() {
    return prompt("#", "App.GetMacAddress(");
  }
  getMediaFile(appName: string, ext: string) {
    return prompt("#", "App.GetMediaFile(\f" + appName + "\f" + ext);
  }
  getMemoryInfo() {
    return eval(prompt("#", "App.GetMemoryInfo(\f"));
  }
  getMetadata(file: string, keys: string) {
    return prompt("#", "App.GetMetadata(\f" + file + "\f" + keys);
  }
  getModel() {
    return prompt("#", "App.GetModel(");
  }
  getName() {
    return prompt("#", "App.GetName(");
  }
  getNotifyId() {
    return prompt("#", "App.GetNotifyId(");
  }
  getOSVersion() {
    return parseInt(prompt("#", "App.GetBuildNum("));
  }
  getObjects() {
    return _GetObjects();
  }
  getOptions() {
    return prompt("#", "App.GetOptions(");
  }
  getOrientation() {
    return prompt("#", "App.GetOrientation(");
  }
  getPackageName() {
    return prompt("#", "App.GetPackageName(");
  }
  getPairedBtDevices() {
    return eval(prompt("#", "App.GetPairedBTDevices(\f"));
  }
  getPath() {
    return prompt("#", "App.GetPath(");
  }
  getPermission(name: string, callback: Function) {
    prompt("#", "App.GetPermission(\f" + name + "\f" + _Cbm(callback));
  }
  getPrivateFolder(name: string, options: string) {
    return prompt("#", "App.GetPrivateFolder(\f" + name + "\f" + options);
  }
  getPublicFolder() {
    return prompt("#", "App.GetPublicFolder(");
  }
  getRSSI() {
    return parseInt(prompt("#", "App.GetRSSI("));
  }
  getResourceId(name: string, options: string) {
    return parseInt(
      prompt("#", "App.GetResourceId(\f" + name + "\f" + options),
    );
  }
  getRingerMode() {
    return prompt("#", "App.GetRingerMode(");
  }
  getRotation() {
    return parseInt(prompt("#", "App.GetRotation("));
  }
  getRouterAddress() {
    return prompt("#", "App.GetRouterAddress(");
  }
  getRunningApps() {
    return eval(prompt("#", "App.GetRunningApps(\f"));
  }
  getRunningServices() {
    return eval(prompt("#", "App.GetRunningServices(\f"));
  }
  getSSID() {
    return prompt("#", "App.GetSSID(");
  }
  getScreenDensity() {
    return parseFloat(prompt("#", "App.GetScreenDensity("));
  }
  getScreenHeight(options: string) {
    return parseFloat(prompt("#", "App.GetScreenHeight(\f" + options));
  }
  getScreenWidth(options: string) {
    return parseFloat(prompt("#", "App.GetScreenWidth(\f" + options));
  }
  getSharedFiles() {
    const s = prompt("#", "App.GetSharedFiles(");
    if (s.length) return s.split(",");
    else return null;
  }
  getSharedText(index: string) {
    return prompt("#", "App.GetSharedText(" + index);
  }
  getShortcuts() {
    const s = prompt("#", "App.GetShortcuts(");
    if (s.length) return JSON.parse(s);
    else return null;
  }
  getSpeakerPhone() {
    return prompt("#", "App.GetSpeakerPhone(") == "true";
  }
  getSpecialFolder(name: string) {
    return prompt("#", "App.GetSpecialFolder(\f" + name);
  }
  getSpeechEngines() {
    return JSON.parse(prompt("#", "App.GetSpeechEngines("));
  }
  getTempFolder() {
    return prompt("#", "App.GetTempFolder(");
  }
  getTextBounds(txt: string, size: string, width: string, obj: any) {
    return eval(
      prompt(
        "#",
        "App.GetTextBounds(\f" + txt + "\f" + size + "\f" + width + "\f" +
          (obj ? obj.id : null),
      ),
    );
  }
  getThemeInfo() {
    return eval(prompt("#", "App.GetThemeInfo("));
  }
  getThumbnail(src: string, dest: string, width: string, height: string) {
    prompt(
      "#",
      "App.GetThumbnail(\f" + src + "\f" + dest + "\f" + width + "\f" + height,
    );
  }
  getTop() {
    return parseFloat(prompt("#", "App.GetTop("));
  }
  getType() {
    return this.constructor.name;
  }
  getUser = function () {
    return prompt("#", "App.GetUser(");
  };
  getVersion = function () {
    return parseFloat(prompt("#", "App.GetVersion("));
  };
  getVolume = function (stream: string) {
    return parseFloat(prompt("#", "App.GetVolume(\f" + stream));
  };
  goToSleep() {
    prompt("#", "App.GoToSleep(");
  }
  hasSoftNav() {
    return prompt("#", "App.HasSoftNav(") == "true";
  }
  hide() {
    prompt("#", "App.Hide(");
  }
  hideKeyboard() {
    prompt("#", "App.HideKeyboard(");
  }
  hideProgress() {
    prompt("#", "App.HideProgress(");
  }
  hideProgressBar() {
    prompt("#", "App.HideProgressBar(");
  }
  httpRequest(
    type: string,
    baseUrl: string,
    path: string,
    params: string,
    callback: Function,
    headers: string,
  ) {
    prompt(
      "#",
      "App.HttpRequest(\f" + type + "\f" + baseUrl + "\f" + path + "\f" +
        params + "\f" + _Cbm(callback) + "\f" + headers,
    );
  }
  inIDE() {
    return prompt("#", "App.InIDE(") == "true";
  }
  installApp(apkFile: string, callback: Function, options: string) {
    prompt(
      "#",
      "App.InstallApp(\f" + apkFile + "\f" + _Cbm(callback) + "\f" + options,
    );
  }
  installWallpaper(packageName: string, className: string) {
    prompt("#", "App.InstallWallpaper\f" + packageName + "\f" + className);
  }
  isAPK() {
    return prompt("#", "App.IsAPK(") == "true";
  }
  isAppInstalled(packageName: string) {
    return prompt("#", "App.IsAppInstalled(\f" + packageName) == "true";
  }
  isBatteryOptimized() {
    return prompt("#", "App.IsBatteryOptimized(") == "true";
  }
  isBluetoothEnabled() {
    return prompt("#", "App.IsBluetoothEnabled(") == "true";
  }
  isBluetoothOn() {
    return prompt("#", "App.IsBluetoothOn(") == "true";
  }
  isBtDevicePaired(name: string) {
    return prompt("#", "App.IsBtDevicePaired(\f" + name) == "true";
  }
  isCharging() {
    return prompt("#", "App.IsCharging(") == "true";
  }
  isChrome() {
    return prompt("#", "App.IsChrome(") == "true";
  }
  isConnected() {
    return prompt("#", "App.IsConnected(") == "true";
  }
  isDebugEnabled() {
    return _dbg ? true : false;
  }
  isDebugVisible() {
    return prompt("#", "App.IsDebugVisible(") == "true";
  }
  isDebugging() {
    return prompt("#", "App.IsDebugging(") == "true";
  }
  isEngine() {
    return prompt("#", "App.IsEngine(") == "true";
  }
  isFolder(fldr: string) {
    return prompt("#", "App.IsFolder(" + fldr) == "true";
  }
  isKeyboardShown() {
    return prompt("#", "App.IsKeyboardShown(") == "true";
  }
  isLocationEnabled(types: string) {
    return prompt("#", "App.IsLocationEnabled(\f" + types) == "true";
  }
  isNavBarOnRight() {
    return prompt("#", "App.IsNavBarOnRight(") == "true";
  }
  isNewVersion() {
    return prompt("#", "App.IsNewVersion(") == "true";
  }
  isPortrait() {
    return prompt("#", "App.GetOrientation(") == "Portrait";
  }
  isPremium() {
    return prompt("#", "App.IsPremium(") == "true";
  }
  isScoped() {
    return prompt("#", "App.IsScoped(") == "true";
  }
  isScreenOn() {
    return prompt("#", "App.IsScreenOn(") == "true";
  }
  isService() {
    return prompt("#", "App.IsService(") == "true";
  }
  isStarted() {
    return prompt("#", "App.IsStarted(") == "true";
  }
  isTV() {
    return prompt("#", "App.IsTV(") == "true";
  }
  isTablet() {
    return prompt("#", "App.IsTablet(") == "true";
  }
  isWifiApEnabled() {
    return prompt("#", "App.IsWifiApEnabled(") == "true";
  }
  isWifiEnabled() {
    return prompt("#", "App.IsWifiEnabled(") == "true";
  }
  killApp(procId: string) {
    prompt("#", "App.KillApp(" + procId);
  }
  launchApp(packageName: string, noPlay: string) {
    prompt("#", "App.LaunchApp(\f" + packageName + "\f" + noPlay);
  }
  listFolder(path: string, filter: string, limit: string, options: string) {
    return eval(
      prompt(
        "#",
        "App.ListFolder(\f" + path + "\f" + filter + "\f" + limit + "\f" +
          options,
      ),
    );
  }
  listPermissions(type: string) {
    return prompt("#", "App.ListPermissions(\f" + type);
  }
  loadBoolean(name: string, dflt: string, file: string) {
    return (prompt(
      "#",
      "App.LoadBoolean(" + name + "\f" + dflt + "\f" + file,
    ) == "true");
  }
  loadJson(name: string, dflt: string, file: string) {
    try {
      return JSON.parse(
        prompt("#", "App.LoadText(" + name + "\f" + dflt + "\f" + file),
      );
    } catch (e) {
      app.Debug("WARNING: app.LoadJson Failed: " + e);
    }
  }
  loadNumber(name: string, dflt: string, file: string) {
    return parseFloat(
      prompt("#", "App.LoadNumber(" + name + "\f" + dflt + "\f" + file),
    );
  }
  loadPlugin(url: string) {
    _LoadPlugin(url);
  }
  loadScript(url: string, callback: Function) {
    _LoadScript(url, callback);
  }
  loadText(name: string, dflt: string, file: string) {
    return prompt("#", "App.LoadText(" + name + "\f" + dflt + "\f" + file);
  }
  lock() {
    prompt("#", "App.Lock(");
  }
  lockDrawer(side: string) {
    prompt("#", "App.LockDrawer(\f" + side);
  }
  makeFolder(fldr: string) {
    prompt("#", "App.MakeFolder(" + fldr);
  }
  openDrawer(side: string) {
    prompt("#", "App.OpenDrawer(\f" + side);
  }
  openFile(file: string, type: string, choose: string) {
    prompt("#", "App.OpenFile(\f" + file + "\f" + type + "\f" + choose);
  }
  openUrl(url: string, type: string, choose: string) {
    prompt("#", "App.OpenUrl(\f" + url + "\f" + type + "\f" + choose);
  }
  pairBtDevice(address: string, callback: Function) {
    prompt("#", "App.PairBtDevice(\f" + address + "\f" + _Cbm(callback));
  }
  path2Uri(path: string) {
    return prompt("#", "App.Path2Uri(\f" + path);
  }
  pinScreen(enable: boolean) {
    prompt("#", "App.PinScreen(\f" + enable);
  }
  playRingtone(type: string) {
    prompt("#", "App.PlayRingtone(\f" + type);
  }
  preventScreenLock(mode: string) {
    prompt("#", "App.PreventScreenLock(" + mode);
  }
  preventWifiSleep() {
    prompt("#", "App.PreventWifiSleep(");
  }
  queryContent(
    uri: string,
    columns: string,
    select: string,
    args: string,
    sort: string,
  ) {
    return eval(
      prompt(
        "#",
        "App.QueryContent(\f" + uri + "\f" + columns + "\f" + select + "\f" +
          args + "\f" + sort,
      ),
    );
  }
  quit(msg: string, title: string, options: string) {
    prompt("#", "App.Quit(\f" + msg + "\f" + title + "\f" + options);
  }
  readFile(file: string, encoding: string) {
    return prompt("#", "App.ReadFile(\f" + file + "\f" + encoding);
  }
  readFileData(file: string, mode: string) {
    return JSON.parse(prompt("#", "App.ReadFileData(\f" + file + "\f" + mode));
  }
  realPath(path: string) {
    return prompt("#", "App.RealPath(\f" + path);
  }
  redirectAssets(dir: string) {
    prompt("#", "App.RedirectAssets(\f" + dir);
  }
  removeDrawer(side: string) {
    prompt("#", "App.RemoveDrawer(\f" + side);
  }
  removeLayout(layout: DSObject) {
    prompt("#", "App.RemoveLayout(" + layout.id);
  }
  removePermission(uri: string) {
    return prompt("#", "App.RemovePermission(\f" + uri);
  }
  renameFile(src: string, dest: string) {
    prompt("#", "App.RenameFile(\f" + src + "\f" + dest);
  }
  renameFolder(src: string, dest: string) {
    prompt("#", "App.RenameFile(\f" + src + "\f" + dest);
  }
  replaceInFile(file: string, txt: string, rep: string, options: string) {
    prompt(
      "#",
      "App.ReplaceInFile(\f" + file + "\f" + txt + "\f" + rep + "\f" + options,
    );
  }
  saveBoolean(name: string, value: string, file: string) {
    prompt("#", "App.SaveBoolean(" + name + "\f" + value + "\f" + file);
  }
  saveCookies() {
    prompt("#", "App.SaveCookies(");
  }
  saveJson(name: string, data: string, file: string) {
    try {
      prompt(
        "#",
        "App.SaveText(" + name + "\f" + JSON.stringify(data) + "\f" + file,
      );
    } catch (e) {
      app.Debug("WARNING: app.SaveJson Failed: " + e);
    }
  }
  saveNumber(name: string, value: string, file: string) {
    prompt("#", "App.SaveNumber(" + name + "\f" + value + "\f" + file);
  }
  saveText(name: string, value: string, file: string) {
    prompt("#", "App.SaveText(" + name + "\f" + value + "\f" + file);
  }
  scanFile(file: string) {
    prompt("#", "App.ScanFile(\f" + file);
  }
  scheduleJob(delay: string, options: string) {
    prompt("#", "App.ScheduleJob(\f" + delay + "\f" + options);
  }
  screenShot(fileName: string, quality: string) {
    prompt("#", "App.ScreenShot(\f" + fileName + "\f" + quality);
  }
  //script( file:string, noDefer:boolean ) { _LoadScriptSync( file, noDefer?false:true ); }
  sendFile(file: string, subject: string, text: string, choose: string) {
    prompt(
      "#",
      "App.SendFile(\f" + file + "\f" + subject + "\f" + text + "\f" + choose,
    );
  }
  sendImage(file: string, choose: string) {
    prompt("#", "App.SendImage(\f" + file + "\f" + choose);
  }
  sendIntent(
    packageName: string,
    className: string,
    action: string,
    category: string,
    uri: string,
    type: string,
    extras: string,
    options: string,
    callback: Function,
  ) {
    prompt(
      "#",
      "App.SendIntent(\f" + packageName + "\f" + className + "\f" + action +
        "\f" + category + "\f" + uri + "\f" + type + "\f" + extras + "\f" +
        options + "\f" + _Cbm(callback),
    );
  }
  sendMail(
    address: string,
    subject: string,
    body: string,
    attach: string,
    type: string,
    options: string,
  ) {
    prompt(
      "#",
      "App.SendMail(\f" + address + "\f" + subject + "\f" + body + "\f" +
        attach + "\f" + type + "\f" + options,
    );
  }
  sendMessage(msg: string) {
    prompt("#", "App.SendMessage(\f" + msg);
  }
  sendSMS(msg: string, number: string) {
    app.SendIntent(
      null,
      null,
      "android.intent.action.SENDTO",
      null,
      "smsto:" + number,
      null,
      JSON.stringify([{ name: "sms_body", type: "string", value: msg }]),
    );
  }
  sendText(text: string, subject: string, choose: string) {
    prompt("#", "App.SendText(\f" + text + "\f" + subject + "\f" + choose);
  }
  setAlarm(
    type: string,
    id: string,
    callback: Function,
    time: string,
    interval: string,
    options: string,
  ) {
    return prompt(
      "#",
      "App.SetAlarm(\f" + type + "\f" + id + "\f" + _Cbm(callback) + "\f" +
        time + "\f" + interval + "\f" + options,
    );
  }
  setAutoBoot(auto: string) {
    prompt("#", "App.SetAutoBoot(\f" + auto);
  }
  setBackColor(clr: string) {
    prompt("#", "App.SetBackColor(\f" + clr);
  }
  setBluetoothEnabled(enable: boolean) {
    prompt("#", "App.SetBluetoothEnabled(\f" + enable);
  }
  setClipboardText(txt: string) {
    prompt("#", "App.SetClipboardText(" + txt);
  }
  setData(name: string, value: string) {
    prompt("#", "App.SetData(\f" + name + "\f" + value);
  }
  setDebug(switches: boolean) {
    prompt("#", "_UseDbg(\f" + switches);
    _dbg = switches;
  }
  setDebugEnabled(enable: boolean) {
    prompt("#", "_UseDbg(\f" + enable);
    _dbg = enable;
  }
  setDensity(dpi: string) {
    prompt("#", "App.SetDensity(\f" + dpi);
  }
  setErrorFilter(filter: string) {
    prompt("#", "App.SetErrorFilter(\f" + filter);
  }
  setInBackground() {
    prompt("#", "App.SetInBackground(\f");
  }
  setInForeground(
    title: string,
    text: string,
    largeIcon: string,
    smallIcon: string,
    importance: string,
  ) {
    prompt(
      "#",
      "App.SetInForeground(\f" + title + "\f" + text + "\f" + largeIcon + "\f" +
        smallIcon + "\f" + importance,
    );
  }
  setJoystickOptions(options: string) {
    prompt("#", "App.SetJoystickOptions(\f" + options);
  }
  setKioskMode(
    mode: string,
    enable: string,
    options: string,
    packages: string,
  ) {
    prompt(
      "#",
      "App.SetKioskMode(\f" + mode + "\f" + enable + "\f" + options + "\f" +
        packages,
    );
  }
  setMenu(list: string, iconPath: string) {
    prompt("#", "App.SetMenu(" + list + "\f" + iconPath);
  }
  setMockLocation(lat: string, lng: string, accuracy: string, speed: string) {
    prompt(
      "#",
      "App.SetMockLocation(\f" + lat + "\f" + lng + "\f" + accuracy + "\f" +
        speed,
    );
  }
  setNavBarColor(clr: string) {
    prompt("#", "App.SetNavBarColor(\f" + clr);
  }
  setOnBroadcast(callback: Function, action: string) {
    prompt("#", "App.SetOnBroadcast(\f" + _Cbm(callback) + "\f" + action);
  }
  setOnDebug(callback: Function) {
    prompt("#", "App.SetOnDebug(\f" + _Cbm(callback));
  }
  setOnError(callback: Function) {
    prompt("#", "App.SetOnError(\f" + _Cbm(callback));
  }
  setOnKey(callback: Function) {
    prompt("#", "App.SetOnKey(\f" + _Cbm(callback));
  }
  setOnShowKeyboard(callback: Function) {
    prompt("#", "App.SetOnShowKeyboard(\f" + _Cbm(callback));
  }
  setOnWifiChange(callback: Function) {
    prompt("#", "App.SetOnWifiChange(\f" + _Cbm(callback));
  }
  setOptions(options: string) {
    prompt("#", "App.SetOptions(\f" + options);
  }
  setOrientation(orient: string, callback: Function) {
    prompt("#", "App.SetOrientation(\f" + orient + "\f" + _Cbm(callback));
  }
  setPosition(
    left: number,
    top: string,
    width: string,
    height: string,
    options: string,
  ) {
    prompt(
      "#",
      "App.SetPosition(\f" + left + "\f" + top + "\f" + width + "\f" + height +
        "\f" + options,
    );
  }
  setPriority(level: number) {
    prompt("#", "App.SetPriority(\f" + level);
  }
  setRingerMode(mode: string) {
    prompt("#", "App.SetRingerMode(\f" + mode);
  }
  setScreenBrightness(level: string) {
    prompt("#", "App.SetScreenBrightness(\f" + level);
  }
  setScreenMode(mode: string) {
    prompt("#", "App.SetScreenMode(\f" + mode);
  }
  setSharedApp(name: string) {
    prompt("#", "App.SetSharedApp(" + name);
  }
  setSpeakerPhone(on: boolean) {
    prompt("#", "App.SetSpeakerPhone(\f" + on);
  }
  setStatusBarColor(clr: string) {
    prompt("#", "App.SetStatusBarColor(\f" + clr);
  }
  setTheme(theme: DSObject) {
    prompt("#", "App.SetTheme(\f" + (theme ? theme.id : null));
  }
  setTitle(title: DSObject) {
    prompt("#", "App.SetTitle(" + title);
  }
  setUserAgent(agent: string, options: string) {
    prompt("#", "App.SetUserAgent(\f" + agent + "\f" + options);
  }
  setUserCreds(name: string, password: string) {
    prompt("#", "App.SetUserCreds(\f" + name + "\f" + password);
  }
  setVolume(stream: string, level: string, options: string) {
    prompt("#", "App.SetVolume(\f" + stream + "\f" + level + "\f" + options);
  }
  setWifiApEnabled(enable: string, ssid: string, key: string) {
    prompt("#", "App.SetWifiApEnabled(\f" + enable + "\f" + ssid + "\f" + key);
  }
  setWifiEnabled(enable: boolean) {
    prompt("#", "App.SetWifiEnabled(\f" + enable);
  }
  show() {
    prompt("#", "App.Show(");
  }
  showBatterySettings() {
    prompt("#", "App.ShowBatterySettings(");
  }
  showDebug(show: string, options: string) {
    prompt("#", "App.ShowDebug(\f" + show + "\f" + options);
  }
  showKeyboard(obj: DSObject) {
    return prompt("#", "App.ShowKeyboard(\f" + obj.id) == "true";
  }
  showMenu() {
    prompt("#", "App.ShowMenu(");
  }
  showPopup(msg: string, options: string) {
    prompt("#", "App.ShowPopup(" + msg + "\f" + options);
  }
  showProgress(msg: string, options: string) {
    prompt("#", "App.ShowProgress(\f" + msg + "\f" + options);
  }
  showProgressBar(title: string, percent: string, options: string) {
    prompt(
      "#",
      "App.ShowProgressBar(\f" + title + "\f" + percent + "\f" + options,
    );
  }
  simulateDrag(
    obj: DSObject,
    x1: string,
    y1: string,
    x2: string,
    y2: string,
    step: string,
    pause: string,
  ) {
    prompt(
      "#",
      "App.SimulateDrag(\f" + obj.id + "\f" + x1 + "\f" + y1 + "\f" + x2 +
        "\f" + y2 + "\f" + step + "\f" + pause,
    );
  }
  simulateKey(
    obj: DSObject,
    keyName: string,
    modifiers: string,
    pause: string,
  ) {
    prompt(
      "#",
      "App.SimulateKey(\f" + obj.id + "\f" + keyName + "\f" + modifiers + "\f" +
        pause,
    );
  }
  simulateScroll(
    obj: DSObject,
    x: string,
    y: string,
    dx: string,
    dy: string,
    count: string,
    fling: string,
  ) {
    prompt(
      "#",
      "App.SimulateScroll(\f" + obj.id + "\f" + x + "\f" + y + "\f" + dx +
        "\f" + dy + "\f" + count + "\f" + fling,
    );
  }
  simulateTouch(obj: DSObject, x: string, y: string, dir: string) {
    prompt(
      "#",
      "App.SimulateTouch(\f" + obj.id + "\f" + x + "\f" + y + "\f" + dir,
    );
  }
  startApp(file: string, options: string, intent: string) {
    prompt("#", "App.StartApp(\f" + file + "\f" + options + "\f" + intent);
  }
  startDebugServer() {
    prompt("#", "App.StartDebugServer(");
  }
  startService(packageName: string, className: string) {
    prompt("#", "App.StartService(\f" + packageName + "\f" + className);
  }
  stopApp(name: string) {
    prompt("#", "App.StopApp(" + name);
  }
  stopDebugServer() {
    prompt("#", "App.StopDebugServer(");
  }
  stopService() {
    prompt("#", "App.StopService(");
  }
  sysExec(cmd: string, options: string, maxRead: string, timeout: string) {
    return prompt(
      "#",
      "App.SysExec(\f" + cmd + "\f" + options + "\f" + maxRead + "\f" + timeout,
    );
  }
  textToSpeech(
    text: string,
    pitch: string,
    rate: string,
    callback: Function,
    stream: string,
    locale: string,
    engine: string,
  ) {
    prompt(
      "#",
      "App.TextToSpeech(\f" + text + "\f" + pitch + "\f" + rate + "\f" +
        _Cbm(callback) + "\f" + stream + "\f" + locale + "\f" + engine,
    );
  }
  toBack() {
    prompt("#", "App.ToBack(");
  }
  toFront() {
    prompt("#", "App.ToFront(");
  }
  translate(cancel: string, ok: string) {
    prompt("#", "App.Translate(\f" + cancel + "\f" + ok);
  }
  unlock() {
    prompt("#", "App.Unlock(");
  }
  unlockDrawer(side: string) {
    prompt("#", "App.UnlockDrawer(\f" + side);
  }
  unpairBtDevice(address: string, callback: Function) {
    prompt("#", "App.UnpairBtDevice(\f" + address + "\f" + _Cbm(callback));
  }
  unzipFile(src: string, dest: string, options: string) {
    prompt("#", "App.UnzipFile(\f" + src + "\f" + dest + "\f" + options);
  }
  updateProgressBar(percent: string, options: string) {
    prompt("#", "App.UpdateProgressBar(\f" + percent + "\f" + options);
  }
  updateUI(ms: number) {
    prompt("#", "_DoEvents(\f" + ms);
  }
  uploadFile(url: string, file: string, name: string, callback: Function) {
    prompt(
      "#",
      "App.UploadFile(\f" + url + "\f" + file + "\f" + name + "\f" +
        _Cbm(callback),
    );
  }
  uri2Path(uri: string, options: string) {
    return prompt("#", "App.Uri2Path(\f" + uri + "\f" + options);
  }
  vibrate(pattern: string) {
    prompt("#", "App.Vibrate(" + pattern);
  }
  wait(secs: number, doEvents: string) {
    prompt("#", "App.Wait(\f" + secs + "\f" + doEvents);
  }
  wakeUp() {
    prompt("#", "App.WakeUp(");
  }
  walkFolder(
    path: string,
    filter: string,
    depth: number,
    limit: number,
    options: string,
  ) {
    return JSON.parse(
      prompt(
        "#",
        "App.WalkFolder(\f" + path + "\f" + filter + "\f" + depth + "\f" +
          limit + "\f" + options,
      ),
    );
  }
  wifiConnect(ssid: string, key: string) {
    prompt("#", "App.WifiConnect(\f" + ssid + "\f" + key);
  }
  wifiScan(callback: Function, options: string) {
    prompt("#", "App.WifiScan(\f" + _Cbm(callback) + "\f" + options);
  }
  writeFile(file: string, text: string, mode: string, encoding: string) {
    prompt(
      "#",
      "App.WriteFile(\f" + file + "\f" + text + "\f" + mode + "\f" + encoding,
    );
  }
  zipFile(src: string, dest: string, options: string) {
    prompt("#", "App.ZipFile(\f" + src + "\f" + dest + "\f" + options);
  }
  zipFolder(src: string, dest: string, options: string) {
    prompt("#", "App.ZipFile(\f" + src + "\f" + dest + "\f" + options);
  }
}

/*
function DsApp()
{
	this.data = {};
	this.typeId = "DsApp"

  GetAccessibility = function() { return JSON.parse(prompt( "#", "App.GetAccessibility(" )); }
  GetAccounts = function() { return prompt( "#", "App.GetAccounts(" ); }
  GetActivities = function() { return eval(prompt( "#", "App.GetActivities(" )); }
  GetAppName = function() { return prompt( "#", "App.GetAppName(" ); }
  GetAppPath = function() { return prompt( "#", "App.GetAppPath(" ); }
  GetBatteryLevel = function() { return parseFloat(prompt( "#", "App.GetBatteryLevel(\f" )); }
  GetBluetoothAddress = function() { return prompt( "#", "App.GetBluetoothAddress(" ); }
  GetBluetoothName = function() { return prompt( "#", "App.GetBluetoothName(" ); }
  GetBtProfileState = function( type ) { return prompt( "#", "App.GetBtProfileState(\f"+type ); }
  GetBuildNum = function() { return parseInt( prompt( "#", "App.GetBuildNum(" )); }

  GetChargeType = function() { return prompt( "#", "App.GetChargeType(\f" ); }
  GetClipboardText = function() { return prompt( "#", "App.GetClipboardText(" ); }
  GetCountry = function() { return prompt( "#", "App.GetCountry(" ); }
  GetCountryCode = function() { return prompt( "#", "App.GetCountryCode(" ); }
  GetDSBuild = function() { return parseInt(prompt( "#", "App.GetDSBuild(" )); }
  GetDSVersion = function() { return parseFloat(prompt( "#", "App.GetDSVersion(" )); }
  GetData = function( name ) { return prompt( "#", "App.GetData(\f"+name ); }
  GetDatabaseFolder = function() { return prompt( "#", "App.GetDatabaseFolder(" ); }
  GetDebug = function() { return prompt( "#", "_GetDbg(\f" ); }
  GetDefaultOrientation = function() { return prompt( "#", "App.GetDefaultOrientation(" ); }
  GetDeviceId = function() { return prompt( "#", "App.GetDeviceId(" ); }
  GetDisplayHeight = function() { return parseFloat(prompt( "#", "App.GetDisplayHeight(" )); }
  GetDisplayWidth = function() { return parseFloat(prompt( "#", "App.GetDisplayWidth(" )); }
  GetDrawerState = function( side ) { return prompt( "#", "App.GetDrawerState(\f"+side ); }
  GetEnv = function( name ) { return prompt( "#", "App.GetEnv(\f"+name ); }
  GetExternalFolder = function() { return prompt( "#", "App.GetExternalFolder(" ); }
  GetFileDate = function( file ) { var d = parseInt(prompt( "#", "App.GetFileDate(\f"+file)); if( d ) r... 38 more characters,
  GetFileSize = function( file ) { return parseInt(prompt( "#", "App.GetFileSize(\f"+file)); }
  GetFreeSpace = function( mode ) { return parseFloat(prompt( "#", "App.GetFreeSpace(\f"+mode)); }
  GetIPAddress = function() { return prompt( "#", "App.GetIPAddress(" ); }
  GetInstalledApps = function() { return eval(prompt( "#", "App.GetInstalledApps(\f" )); }
  GetIntent = function() { var s = prompt( "#", "App.GetIntent(" ); if(s.length) return JSON.parse(s);... 20 more characters,
  GetInternalFolder = function() { return prompt( "#", "App.GetInternalFolder(" ); }
  GetJoystickName = function( id ) { return prompt( "#", "App.GetJoyName(\f"+id); }
  GetJoystickState = function( id,key ) { return parseFloat(prompt( "#", "App.GetJoyState(\f"+id+"\f"+ke... 6 more characters,
  GetJoystickStates = function( id ) { return eval(prompt( "#", "App.GetJoyStates(\f"+id)); }
  GetKeyboardHeight = function() { return parseInt(prompt( "#", "App.GetKeyboardHeight(" )); }
  GetLanguage = function() { return prompt( "#", "App.GetLanguage(" ); }
  GetLanguageCode = function() { return prompt( "#", "App.GetLanguageCode(" ); }
  GetLastButton = function() { var ret = prompt( "#", "App.GetLastButton(" ); if( ret ) return (_map[r... 25 more characters,
  GetLastCheckBox = function() { var ret = prompt( "#", "App.GetLastCheckBox(" ); if( ret ) return (_m... 29 more characters,
  GetLastImage = function() { var ret = prompt( "#", "App.GetLastImage(" ); if( ret ) return (_map[ret... 23 more characters,
  GetLastToggle = function() { var ret = prompt( "#", "App.GetLastToggle(" ); if( ret ) return (_map[r... 25 more characters,
  GetMacAddress = function() { return prompt( "#", "App.GetMacAddress(" ); }
  GetMediaFile = function( appName,ext ) { return prompt( "#", "App.GetMediaFile(\f"+appName+"\f"+ext );... 2 more characters,
  GetMemoryInfo = function() { return eval(prompt( "#", "App.GetMemoryInfo(\f" )); }
  GetMetadata = function( file,keys ) { return prompt( "#", "App.GetMetadata(\f"+file+"\f"+keys); }
  GetModel = function() { return prompt( "#", "App.GetModel(" ); }
  GetName = function() { return prompt( "#", "App.GetName(" ); }
  GetNotifyId = function() { return prompt( "#", "App.GetNotifyId(" ); }
  GetOSVersion = function() { return parseInt( prompt( "#", "App.GetBuildNum(" )); }
  "GetObjects = function() { return _GetObjects(); }",
  GetOptions = function() { return prompt( "#", "App.GetOptions(" ); }
  GetOrientation = function() { return prompt( "#", "App.GetOrientation(" ); }
  GetPackageName = function() { return prompt( "#", "App.GetPackageName(" ); }
  GetPairedBtDevices = function() { return eval(prompt( "#", "App.GetPairedBTDevices(\f" )); }
  GetPath = function() { return prompt( "#", "App.GetPath(" ); }
  GetPermission = function( name,callback ) { prompt( "#", "App.GetPermission(\f"+name+"\f"+_Cbm(callbac... 7 more characters,
  GetPrivateFolder = function( name,options ) { return prompt( "#", "App.GetPrivateFolder(\f"+name+"\f"+... 12 more characters,
  GetPublicFolder = function() { return prompt( "#", "App.GetPublicFolder(" ); }
  GetRSSI = function() { return parseInt(prompt( "#", "App.GetRSSI(" )); }
  GetResourceId = function( name,options ) { return parseInt(prompt( "#", "App.GetResourceId(\f"+name+"... 16 more characters,
  GetRingerMode = function() { return prompt( "#", "App.GetRingerMode(" ); }
  GetRotation = function() { return parseInt(prompt( "#", "App.GetRotation(" )); }
  GetRouterAddress = function() { return prompt( "#", "App.GetRouterAddress(" ); }
  GetRunningApps = function() { return eval(prompt( "#", "App.GetRunningApps(\f" )); }
  GetRunningServices = function() { return eval(prompt( "#", "App.GetRunningServices(\f" )); }
  GetSSID = function() { return prompt( "#", "App.GetSSID(" ); }
  GetScreenDensity = function() { return parseFloat(prompt( "#", "App.GetScreenDensity(" )); }
  GetScreenHeight = function( options ) { return parseFloat(prompt( "#", "App.GetScreenHeight(\f"+optio... 8 more characters,
  GetScreenWidth = function( options ) { return parseFloat(prompt( "#", "App.GetScreenWidth(\f"+options... 6 more characters,
  GetSharedFiles = function() { var s = prompt( "#", "App.GetSharedFiles(" ); if(s.length) return s.sp... 29 more characters,
  GetSharedText = function( index ) { return prompt( "#", "App.GetSharedText("+index ); }
  GetShortcuts = function() { var s = prompt( "#", "App.GetShortcuts(" ); if(s.length) return JSON.par... 26 more characters,
  GetSpeakerPhone = function() { return prompt( "#", "App.GetSpeakerPhone(" )=="true"; }
  GetSpecialFolder = function( name ) { return prompt( "#", "App.GetSpecialFolder(\f"+name ); }
  GetSpeechEngines = function() { return JSON.parse(prompt( "#", "App.GetSpeechEngines(" )); }
  GetTempFolder = function() { return prompt( "#", "App.GetTempFolder(" ); }
  GetTextBounds  = function( txt,size,width,obj ) { return eval(prompt( "#", "App.GetTextBounds(\f"+txt... 47 more characters,
  GetThemeInfo = function() { return eval(prompt( "#", "App.GetThemeInfo(" )); }
  GetThumbnail = function( src,dest,width,height ) { prompt( "#", "App.GetThumbnail(\f"+src+"\f"+dest+"\f... 22 more characters,
  GetTop = function() { return parseFloat(prompt( "#", "App.GetTop(" )); }
  GetType = function() { return "DsApp"; }
  GetUser = function() { return prompt( "#", "App.GetUser(" ); }
  GetVersion = function() { return parseFloat(prompt( "#", "App.GetVersion(" )); }
  GetVolume = function( stream ) { return parseFloat(prompt( "#", "App.GetVolume(\f"+stream )); }


	  this.IsStarted = function() { return prompt( "#", "App.IsStarted(" )=="true"; }
	  this.Exit = function( kill ) { prompt( "#", "App.Exit("+kill ); }
	  this.Quit = function( msg,title,options ) { prompt( "#", "App.Quit(\f"+msg+"\f"+title+"\f"+options ); }
	  this.ToBack = function() { prompt( "#", "App.ToBack(" ); }
	  this.ToFront = function() { prompt( "#", "App.ToFront(" ); }
	  this.Hide = function() { prompt( "#", "App.Hide(" ); }
	  this.Show = function() { prompt( "#", "App.Show(" ); }
	  this.UpdateUI = function( ms ) { prompt( "#", "_DoEvents(\f"+ms ); }
	  this.Execute = function( js ) { prompt( "#", "App.Execute("+js ); }
	  this.StartApp = function( file,options,intent ) { prompt( "#", "App.StartApp(\f"+file+"\f"+options+"\f"+intent ); }
	  this.StopApp = function( name ) { prompt( "#", "App.StopApp("+name ); }
	  this.LaunchApp = function( packageName,noPlay ) { prompt( "#", "App.LaunchApp(\f"+packageName+"\f"+noPlay ); }
	  this.SetScreenMode = function( mode ) { prompt( "#", "App.SetScreenMode(\f"+mode ); }
	  this.SetOptions = function( options ) { prompt( "#", "App.SetOptions(\f"+options ); }
	  this.SetTheme = function( theme ) { prompt( "#", "App.SetTheme(\f"+(theme?theme.id:null) ); }
	  this.SetDensity = function( dpi ) { prompt( "#", "App.SetDensity(\f"+dpi ); }
	  this.SetPosition = function( left,top,width,height,options ) { prompt( "#", "App.SetPosition(\f"+left+"\f"+top+"\f"+width+"\f"+height+"\f"+options ); }
	  this.SetBackColor = function( clr ) { prompt( "#", "App.SetBackColor(\f"+clr ); }
	  this.SetNavBarColor = function( clr ) { prompt( "#", "App.SetNavBarColor(\f"+clr ); }
	  this.SetStatusBarColor = function( clr ) { prompt( "#", "App.SetStatusBarColor(\f"+clr ); }
	  this.StartService = function( packageName,className ) { prompt( "#", "App.StartService(\f"+packageName+"\f"+className ); }
	  this.StopService = function() { prompt( "#", "App.StopService(" ); }
	  this.ScheduleJob = function( delay,options ) { prompt( "#", "App.ScheduleJob(\f"+delay+"\f"+options ); }
	  this.CancelJob = function() { prompt( "#", "App.CancelJob(" ); }
	  this.StartDebugServer = function() { prompt( "#", "App.StartDebugServer(" ); }
	  this.StopDebugServer = function() { prompt( "#", "App.StopDebugServer(" ); }
	  this.SendIntent = function( packageName,className,action,category,uri,type,extras,options,callback ) { prompt( "#", "App.SendIntent(\f"+packageName+"\f"+className+"\f"+action+"\f"+category+"\f"+uri+"\f"+type+"\f"+extras+"\f"+options+"\f"+_Cbm(callback) ); }
	  this.BroadcastIntent = function( action,category,data,type,extras,options ) { prompt( "#", "App.BroadcastIntent(\f"+action+"\f"+category+"\f"+data+"\f"+type+"\f"+extras+"\f"+options ); }
	  this.SendMessage = function( msg ) { prompt( "#", "App.SendMessage(\f"+msg ); }
	  this.SetInForeground = function( title,text,largeIcon,smallIcon,importance ) { prompt( "#", "App.SetInForeground(\f"+title+"\f"+text+"\f"+largeIcon+"\f"+smallIcon+"\f"+importance ); }
	  this.SetInBackground = function() { prompt( "#", "App.SetInBackground(\f" ); }
	  this.Script = function( file, noDefer ) { _LoadScriptSync( file, noDefer?false:true ); }
	  this.LoadScript = function( url, callback ) { _LoadScript( url, callback ); }
	  this.LoadPlugin = function( url ) { _LoadPlugin( url ); }
	  this.SysExec = function( cmd,options,maxRead,timeout ) { return prompt( "#", "App.SysExec(\f"+cmd+"\f"+options+"\f"+maxRead+"\f"+timeout ); }
	  this.ExtExec = function( name,file,args,options ) { return prompt( "#", "App.ExtExec(\f"+name+"\f"+file+"\f"+args+"\f"+options ); }
	  this.SetPriority = function( level ) { prompt( "#", "App.SetPriority(\f"+level ); }
	  //this.Odroid = function( p1,p2,p3 ) { return prompt( "#", "App.Odroid(\f"+p1+"\f"+p2+"\f"+p3 ); }
	  this.IsNewVersion = function() { return prompt( "#", "App.IsNewVersion(" )=="true"; }
	  this.InIDE = function() { return prompt( "#", "App.InIDE(" )=="true"; }
	  this.IsAPK = function() { return prompt( "#", "App.IsAPK(" )=="true"; }
	  this.IsService = function() { return prompt( "#", "App.IsService(" )=="true"; }
	  this.IsPremium = function() { return prompt( "#", "App.IsPremium(" )=="true"; }
	  this.IsEngine = function() { return prompt( "#", "App.IsEngine(" )=="true"; }
	  this.IsScoped = function() { return prompt( "#", "App.IsScoped(" )=="true"; }
	  this.CheckLicense = function( key ) { prompt( "#", "App.CheckLicense(\f"+key ); }
	  this.IsAppInstalled = function( packageName ) { return prompt( "#", "App.IsAppInstalled(\f"+packageName )=="true"; }
	  this.SetSharedApp = function( name ) { prompt( "#", "App.SetSharedApp("+name ); }
	  this.KillApp = function( procId ) { prompt( "#", "App.KillApp("+procId ); }
	  this.CreateShortcut = function( name,iconFile,file,options ) { prompt( "#", "App.CreateShortcut(\f"+name+"\f"+iconFile+"\f"+file+"\f"+options ); }
	  this.IsTablet = function() { return prompt( "#", "App.IsTablet(" )=="true"; }
	  this.IsChrome = function() { return prompt( "#", "App.IsChrome(" )=="true"; }
	  this.IsTV = function() { return prompt( "#", "App.IsTV(" )=="true"; }
	  this.SetErrorFilter = function( filter ) { prompt( "#", "App.SetErrorFilter(\f"+filter ); }
	  this.SetOnError = function( callback ) { prompt( "#", "App.SetOnError(\f"+_Cbm(callback) ); }
	  this.SetOnDebug = function( callback ) { prompt( "#", "App.SetOnDebug(\f"+_Cbm(callback) ); }
	  this.SetOnKey = function( callback ) { prompt( "#", "App.SetOnKey(\f"+_Cbm(callback) ); }
	  this.SetOnShowKeyboard = function( callback ) { prompt( "#", "App.SetOnShowKeyboard(\f"+_Cbm(callback) ); }
	  this.SetOnWifiChange = function( callback ) { prompt( "#", "App.SetOnWifiChange(\f"+_Cbm(callback) ); }
	  this.WifiScan = function( callback,options ) { prompt( "#", "App.WifiScan(\f"+_Cbm(callback)+"\f"+options ); }
	  this.DisableKeys = function( keyList ) { prompt( "#", "App.DisableKeys(\f"+keyList ); }
	  this.DisableTouch = function( disable ) { prompt( "#", "App.DisableTouch(\f"+disable ); }
	  this.Broadcast = function( type,msg ) { prompt( "#", "App.Broadcast("+type+"\f"+msg ); }
	  this.SetOnBroadcast = function( callback,action ) { prompt( "#", "App.SetOnBroadcast(\f"+_Cbm(callback)+"\f"+action ); }
	  this.SetData = function( name,value ) { prompt( "#", "App.SetData(\f"+name+"\f"+value ); }
	  this.SetClipboardText = function( txt ) { prompt( "#", "App.SetClipboardText("+txt ); }
	  this.EnableBackKey = function( enable ) { prompt( "#", "App.EnableBackKey("+enable ); }
	  this.Wait = function( secs,doEvents ) { prompt( "#", "App.Wait(\f"+secs+"\f"+doEvents ); }
	  this.Alert = function( msg,title,options,hue ) { if(title) prompt( "#", "App.Alert(\f"+msg+"\f"+title+"\f"+options+"\f"+hue ); else alert(msg); }
	  this.HideKeyboard = function() { prompt( "#", "App.HideKeyboard(" ); }
	  this.ShowKeyboard = function( obj ) { return prompt( "#", "App.ShowKeyboard(\f"+obj.id )=="true"; }
	  this.IsKeyboardShown = function() { return prompt( "#", "App.IsKeyboardShown(" )=="true"; }
	  this.TextToSpeech = function( text,pitch,rate,callback,stream,locale,engine ) { prompt( "#", "App.TextToSpeech(\f"+text+"\f"+pitch+"\f"+rate+"\f"+_Cbm(callback)+"\f"+stream+"\f"+locale+"\f"+engine ); }
	  this.Debug = function( msg ) { prompt( "#", "App.Debug(\f"+(typeof msg==object?JSON.stringify(msg):msg) ); }
	  this.Error = function( msg,line,file,quit ) { prompt( "#", "App.Error(\f"+msg+"\f"+line+"\f"+file+"\f"+quit ); }
	  this.SetDebugEnabled = function( enable ) { prompt( "#", "_UseDbg(\f"+enable ); _dbg=enable; }
	  this.SetDebug = function( switches ) { prompt( "#", "_UseDbg(\f"+switches ); _dbg=switches; }
	  this.IsDebugEnabled = function() { return _dbg?true:false; }
	  this.IsDebugging = function() { return prompt( "#", "App.IsDebugging(" )=="true"; }
	  this.IsDebugVisible = function() { return prompt( "#", "App.IsDebugVisible(" )=="true"; }
	  this.CreateDebug = function( options ) { prompt( "#", "App.CreateDebug(\f"+options ); }
	  this.ShowDebug = function( show,options ) { prompt( "#", "App.ShowDebug(\f"+show+"\f"+options ); }
	  this.SendMail = function( address,subject,body,attach,type,options ) { prompt( "#", "App.SendMail(\f"+address+"\f"+subject+"\f"+body+"\f"+attach+"\f"+type+"\f"+options ); }
	  this.SendFile = function( file,subject,text,choose ) { prompt( "#", "App.SendFile(\f"+file+"\f"+subject+"\f"+text+"\f"+choose ); }
	  this.SendText = function( text,subject,choose ) { prompt( "#", "App.SendText(\f"+text+"\f"+subject+"\f"+choose ); }
	  this.SendImage = function( file,choose ) { prompt( "#", "App.SendImage(\f"+file+"\f"+choose ); }
	  this.SendSMS = function( msg,number ){ app.SendIntent(null,null,"android.intent.action.SENDTO",null,smsto:+number,null,JSON.stringify([{name:"sms_body",type:"string",value:msg}])); }
	// this._Extract = function( p1 ) { prompt( "#", "App._Extract("+p1 ); }
	  this.ExtractAssets = function( src,dest,overwrite,options,filter ) { prompt( "#", "App.ExtractAssets(\f"+src+"\f"+dest+"\f"+overwrite+"\f"+options+"\f"+filter ); }
	  this.RedirectAssets = function( dir ) { prompt( "#", "App.RedirectAssets(\f"+dir ); }
	  this.ExtractPlugins = function() { prompt( "#", "App.ExtractPlugins(\f" ); }
	  this.Vibrate = function( pattern ) { prompt( "#", "App.Vibrate("+pattern ); }
	  this.ShowPopup = function( msg,options ) { prompt( "#", "App.ShowPopup("+msg+"\f"+options ); }
	  this.ShowProgress = function( msg,options ) { prompt( "#", "App.ShowProgress(\f"+msg+"\f"+options ); }
	  this.HideProgress = function() { prompt( "#", "App.HideProgress(" ); }
	  this.ShowProgressBar = function( title,percent,options ) { prompt( "#", "App.ShowProgressBar(\f"+title+"\f"+percent+"\f"+options ); }
	  this.UpdateProgressBar = function( percent,options ) { prompt( "#", "App.UpdateProgressBar(\f"+percent+"\f"+options ); }
	  this.HideProgressBar = function() { prompt( "#", "App.HideProgressBar(" ); }
	  this.LoadText = function( name,dflt,file ) { return prompt( "#", "App.LoadText("+name+"\f"+dflt+"\f"+file ); }
	  this.LoadNumber = function( name,dflt,file ) { return parseFloat(prompt( "#", "App.LoadNumber("+name+"\f"+dflt+"\f"+file )); }
	  this.LoadBoolean = function( name,dflt,file ) { return (prompt( "#", "App.LoadBoolean("+name+"\f"+dflt+"\f"+file )=="true"); }
	  this.LoadJson = function(name,dflt,file) { try { return JSON.parse(prompt("#","App.LoadText("+name+"\f"+dflt+"\f"+file)); } catch(e) { app.Debug("WARNING: app.LoadJson Failed: "+e); } }
	  this.SaveText = function( name,value,file ) { prompt( "#", "App.SaveText("+name+"\f"+value+"\f"+file ); }
	  this.SaveNumber = function( name,value,file ) { prompt( "#", "App.SaveNumber("+name+"\f"+value+"\f"+file ); }
	  this.SaveBoolean = function( name,value,file ) { prompt( "#", "App.SaveBoolean("+name+"\f"+value+"\f"+file ); }
	  this.SaveJson = function(name,data,file) { try { prompt("#","App.SaveText("+name+"\f"+JSON.stringify(data)+"\f"+file); } catch(e) { app.Debug("WARNING: app.SaveJson Failed: "+e); } }
	  this.ClearData = function( file ) { prompt( "#", "App.ClearData(\f"+file ); }
	  this.ClearValue = function( name,file ) { prompt( "#", "App.ClearValue(\f"+name+"\f"+file ); }
	  this.HasSoftNav = function() { return prompt( "#", "App.HasSoftNav(" )=="true"; }
	  this.IsNavBarOnRight = function() { return prompt( "#", "App.IsNavBarOnRight(" )=="true"; }
	  this.IsPortrait = function() { return prompt( "#", "App.GetOrientation(" )=="Portrait"; }
	  this.SetOrientation = function( orient,callback ) { prompt( "#", "App.SetOrientation(\f"+orient+"\f"+_Cbm(callback) ); }
	  this.IsBatteryOptimized = function() { return prompt( "#", "App.IsBatteryOptimized(" )=="true"; }
	  this.IsCharging = function() { return prompt( "#", "App.IsCharging(" )=="true"; }
	  this.ShowBatterySettings = function() { prompt( "#", "App.ShowBatterySettings(" ); }
	  this.PreventScreenLock = function( mode ) { prompt( "#", "App.PreventScreenLock("+mode ); }
	  this.PreventWifiSleep = function() { prompt( "#", "App.PreventWifiSleep(" ); }
	  this.SetWifiEnabled = function( enable ) { prompt( "#", "App.SetWifiEnabled(\f"+enable ); }
	  this.IsWifiEnabled = function() { return prompt( "#", "App.IsWifiEnabled(" )=="true"; }
	  this.SetWifiApEnabled = function( enable,ssid,key ) { prompt( "#", "App.SetWifiApEnabled(\f"+enable+"\f"+ssid+"\f"+key ); }
	  this.IsWifiApEnabled = function() { return prompt( "#", "App.IsWifiApEnabled(" )=="true"; }
	  this.WifiConnect = function( ssid,key ) { prompt( "#", "App.WifiConnect(\f"+ssid+"\f"+key ); }
	  this.IsConnected = function() { return prompt( "#", "App.IsConnected(" )=="true"; }
	  this.SetBluetoothEnabled = function( enable ) { prompt( "#", "App.SetBluetoothEnabled(\f"+enable ); }
	  this.IsBluetoothEnabled = function() { return prompt( "#", "App.IsBluetoothEnabled(" )=="true"; }
	  this.IsBtDevicePaired = function( name ) { return prompt( "#", "App.IsBtDevicePaired(\f"+name )=="true"; }
	  this.DiscoverBtDevices = function( filter,onFound,onComplete ) { prompt( "#", "App.DiscoverBtDevices(\f"+filter+"\f"+_Cbm(onFound)+"\f"+_Cbm(onComplete) ); }
	  this.PairBtDevice = function( address,callback ) { prompt( "#", "App.PairBtDevice(\f"+address+"\f"+_Cbm(callback) ); }
	  this.UnpairBtDevice = function( address,callback ) { prompt( "#", "App.UnpairBtDevice(\f"+address+"\f"+_Cbm(callback) ); }
	  this.IsLocationEnabled = function( types ) { return prompt( "#", "App.IsLocationEnabled(\f"+types )=="true"; }
	  this.SetMockLocation = function( lat,lng,accuracy,speed ) { prompt( "#", "App.SetMockLocation(\f"+lat+"\f"+lng+"\f"+accuracy+"\f"+speed ); }
	  this.PlayRingtone = function( type ) { prompt( "#", "App.PlayRingtone(\f"+type ); }
	  this.SetRingerMode = function( mode ) { prompt( "#", "App.SetRingerMode(\f"+mode ); }
	  this.SetSpeakerPhone = function( on ) { prompt( "#", "App.SetSpeakerPhone(\f"+on ); }
	  this.SetVolume = function( stream,level,options ) { prompt( "#", "App.SetVolume(\f"+stream+"\f"+level+"\f"+options ); }
	  this.SetTitle = function( title ) { prompt( "#", "App.SetTitle("+title ); }
	  this.SetMenu = function( list,iconPath ) { prompt( "#", "App.SetMenu("+list+"\f"+iconPath ); }
	  this.ShowMenu = function() { prompt( "#", "App.ShowMenu(" ); }
	  this.Translate = function( cancel,ok ) { prompt( "#", "App.Translate(\f"+cancel+"\f"+ok ); }
	  this.AddLayout = function( layout,type,options ) { if( !type ) prompt( "#", "App.AddLayout("+layout.id ); else { var ret = prompt( (layout?layout.id:null), "App.AddLayout("+type+"\f"+options ); if( ret ) return new Lay(ret); else return null; } }
	  this.RemoveLayout = function( layout ) { prompt( "#", "App.RemoveLayout("+ layout.id ); }
	  this.DestroyLayout = function( layout ) { prompt( "#", "App.DestroyLayout("+ layout.id ); }
	  this.AddDrawer = function( layout,side,width,grabWidth ) { prompt( "#", "App.AddDrawer(\f"+layout.id+"\f"+side+"\f"+width+"\f"+grabWidth ); }
	  this.RemoveDrawer = function( side ) { prompt( "#", "App.RemoveDrawer(\f"+ side ); }
	  this.OpenDrawer = function( side ) { prompt( "#", "App.OpenDrawer(\f"+side ); }
	  this.CloseDrawer = function( side ) { prompt( "#", "App.CloseDrawer(\f"+side ); }
	  this.LockDrawer = function( side ) { prompt( "#", "App.LockDrawer(\f"+side ); }
	  this.UnlockDrawer = function( side ) { prompt( "#", "App.UnlockDrawer(\f"+side ); }
	  this.MakeFolder = function( fldr ) { prompt( "#", "App.MakeFolder("+fldr ); }
	  this.DeleteDatabase = function( name ) { prompt( "#", "App.DeleteDatabase(\f"+name); }
	  this.FolderExists = function( fldr ) { return prompt( "#", "App.FolderExists("+fldr )=="true"; }
	  this.FileExists = function( file ) { return prompt( "#", "App.FileExists("+file )=="true"; }
	  this.IsFolder = function( fldr ) { return prompt( "#", "App.IsFolder("+fldr )=="true"; }
	  this.ListFolder = function( path,filter,limit,options ) { return eval(prompt( "#", "App.ListFolder(\f"+path+"\f"+filter+"\f"+limit+"\f"+options )); }
	  this.WalkFolder = function( path,filter,depth,limit,options ) { return JSON.parse(prompt( "#", "App.WalkFolder(\f"+path+"\f"+filter+"\f"+depth+"\f"+limit+"\f"+options )); }
	  this.CheckPermission = function( name ) { return prompt( "#", "App.CheckPermission(\f"+name ); }
	  this.RemovePermission = function( uri ) { return prompt( "#", "App.RemovePermission(\f"+uri ); }
	  this.ListPermissions = function( type ) { return prompt( "#", "App.ListPermissions(\f"+type ); }
	  this.ReadFile = function( file,encoding ) { return prompt( "#", "App.ReadFile(\f"+file+"\f"+encoding ); }
	  this.ReadFileData = function( file,mode ) { return JSON.parse(prompt( "#", "App.ReadFileData(\f"+file+"\f"+mode )); }
	  this.WriteFile = function( file,text,mode,encoding ) { prompt( "#", "App.WriteFile(\f"+file+"\f"+text+"\f"+mode+"\f"+encoding ); }
	  this.OpenFile = function( file,type,choose ) { prompt( "#", "App.OpenFile(\f"+file+"\f"+type+"\f"+choose ); }
	  this.OpenUrl = function( url,type,choose ) { prompt( "#", "App.OpenUrl(\f"+url+"\f"+type+"\f"+choose ); }
	  this.DownloadFile = function( src,dest,title,desc,options ) { prompt( "#", "App.DownloadFile(\f"+src+"\f"+dest+"\f"+title+"\f"+desc+"\f"+options ); }
	  this.ChooseFile = function( msg,type,callback,fldr,options ) { prompt( "#", "App.ChooseFile(\f"+msg+"\f"+type+"\f"+_Cbm(callback)+"\f"+fldr+"\f"+options ); }
	  this.ChooseContact = function( type,callback ) { prompt( "#", "App.ChooseContact(\f"+type+"\f"+_Cbm(callback) ); }
	  this.ChooseImage = function( options,callback ) { prompt( "#", "App.ChooseImage(\f"+options+"\f"+_Cbm(callback) ); }
	  this.ChooseAccount = function( callback ) { prompt( "#", "App.ChooseAccount(\f"+_Cbm(callback) ); }
	  this.DeleteFile = function( file ) { prompt( "#", "App.DeleteFile("+file); }
	  this.CopyFile = function( src,dest ) { prompt( "#", "App.CopyFile("+src+"\f"+dest); }
	  this.CopyFolder = function( src,dest,overwrite,filter ) { prompt( "#", "App.CopyFolder(\f"+src+"\f"+dest+"\f"+overwrite+"\f"+filter); }
	  this.DeleteFolder = function( fldr ) { prompt( "#", "App.DeleteFolder("+fldr); }
	  this.RenameFile = function( src,dest ) { prompt( "#", "App.RenameFile(\f"+src+"\f"+dest); }
	  this.RenameFolder = function( src,dest ) { prompt( "#", "App.RenameFile(\f"+src+"\f"+dest); }
	  this.ReplaceInFile = function( file,txt,rep,options ) { prompt( "#", "App.ReplaceInFile(\f"+file+"\f"+txt+"\f"+rep+"\f"+options); }
	  this.UnzipFile = function( src,dest,options ) { prompt( "#", "App.UnzipFile(\f"+src+"\f"+dest+"\f"+options); }
	  this.ZipFile = function( src,dest,options ) { prompt( "#", "App.ZipFile(\f"+src+"\f"+dest+"\f"+options); }
	  this.ZipFolder = function( src,dest,options ) { prompt( "#", "App.ZipFile(\f"+src+"\f"+dest+"\f"+options); }
	  this.ScanFile = function( file ) { prompt( "#", "App.ScanFile(\f"+file); }
	  this.IsBluetoothOn = function() { return prompt( "#", "App.IsBluetoothOn(" )=="true"; }
	  this.IsScreenOn = function() { return prompt( "#", "App.IsScreenOn(" )=="true"; }
	  this.WakeUp = function() { prompt( "#", "App.WakeUp(" ); }
	  this.GoToSleep = function() { prompt( "#", "App.GoToSleep(" ); }
	  this.Unlock = function() { prompt( "#", "App.Unlock(" ); }
	  this.Lock = function() { prompt( "#", "App.Lock(" ); }
	  this.SetScreenBrightness = function( level ) { prompt( "#", "App.SetScreenBrightness(\f"+level); }
	  this.SetKioskMode = function( mode,enable,options,packages ) { prompt( "#", "App.SetKioskMode(\f"+mode+"\f"+enable+"\f"+options+"\f"+packages); }
	  this.PinScreen = function( enable ) { prompt( "#", "App.PinScreen(\f"+enable); }
	  this.SetAlarm = function( type,id,callback,time,interval,options ) { return prompt( "#", "App.SetAlarm(\f"+type+"\f"+id+"\f"+_Cbm(callback)+"\f"+time+"\f"+interval+"\f"+options); }
	  this.Call = function( number ) { prompt( "#", "App.Call(\f"+number ); }
	  this.SimulateTouch = function( obj,x,y,dir ) { prompt( "#", "App.SimulateTouch(\f"+obj.id+"\f"+x+"\f"+y+"\f"+dir ); }
	  this.SimulateDrag = function( obj,x1,y1,x2,y2,step,pause ) { prompt( "#", "App.SimulateDrag(\f"+obj.id+"\f"+x1+"\f"+y1+"\f"+x2+"\f"+y2+"\f"+step+"\f"+pause ); }
	  this.SimulateScroll = function( obj,x,y,dx,dy,count,fling ) { prompt( "#", "App.SimulateScroll(\f"+obj.id+"\f"+x+"\f"+y+"\f"+dx+"\f"+dy+"\f"+count+"\f"+fling ); }
	  this.SimulateKey = function( obj,keyName,modifiers,pause ) { prompt( "#", "App.SimulateKey(\f"+obj.id+"\f"+keyName+"\f"+modifiers+"\f"+pause ); }
	  this.SetJoystickOptions = function( options ) { prompt( "#", "App.SetJoystickOptions(\f"+options ); }
	  this.SetAutoBoot = function( auto ) { prompt( "#", "App.SetAutoBoot(\f"+auto); }
	this.SetAutoWifi = function( auto ) { prompt( "#", "App.SetAutoWifi(\f"+auto); }
	this.SetAutoStart = function( appName ) { prompt( "#", "App.SetAutoStart(\f"+appName); }
	  this.HttpRequest = function( type,baseUrl,path,params,callback,headers ) { prompt( "#", "App.HttpRequest(\f"+type+"\f"+baseUrl+"\f"+path+"\f"+params+"\f"+_Cbm(callback)+"\f"+headers); }
	  this.UploadFile = function( url,file,name,callback ) { prompt( "#", "App.UploadFile(\f"+url+"\f"+file+"\f"+name+"\f"+_Cbm(callback) ); }
	  this.SaveCookies = function() { prompt( "#", "App.SaveCookies(" ); }
	  this.ClearCookies = function() { prompt( "#", "App.ClearCookies(" ); }
	  this.SetUserAgent = function( agent,options ) { prompt( "#", "App.SetUserAgent(\f"+agent+"\f"+options ); }
      this.SetUserCreds = function( name,password ) { prompt( "#", "App.SetUserCreds(\f"+name+"\f"+password ); }
      this.QueryContent = function( uri,columns,select,args,sort ) { return eval(prompt( "#", "App.QueryContent(\f"+uri+"\f"+columns+"\f"+select+"\f"+args+"\f"+sort)); }
	  this.Uri2Path = function( uri,options ) { return prompt( "#", "App.Uri2Path(\f"+uri+"\f"+options); }
	  this.Path2Uri = function( path ) { return prompt( "#", "App.Path2Uri(\f"+path); }
	  this.RealPath = function( path ) { return prompt( "#", "App.RealPath(\f"+path); }
	  this.ScreenShot = function( fileName,quality ) { prompt( "#", "App.ScreenShot(\f"+fileName+"\f"+quality ); }
	  this.InstallWallpaper = function( packageName,className ) { prompt( "#", "App.InstallWallpaper\f"+packageName+"\f"+className ); }
	  this.InstallApp = function( apkFile,callback,options ) { prompt( "#", "App.InstallApp(\f"+apkFile+"\f"+_Cbm(callback)+"\f"+options ); }

	//These objects auto-release when layout is destroyed.
	  this.CreateLayout = function( type,options ) { var ret = prompt( "#", "App.CreateLayout("+type+"\f"+options ); if( ret ) return new Lay(ret); else return null; }
	  this.CreateImage = function( file,width,height,options,w,h ) { var ret = prompt( "#", "App.CreateImage("+file+"\f"+width+"\f"+height+"\f"+options+"\f"+w+"\f"+h );  if( ret ) return new Img(ret); else return null; }
	  this.CreateCanvas = function( width,height,options,w,h ) { var ret = prompt( "#", "App.CreateCanvas(\f"+width+"\f"+height+"\f"+options+"\f"+w+"\f"+h );  if( ret ) return new Img(ret); else return null; }
	  this.AddImage = function( lay,file,width,height,options,w,h ) { var ret = prompt( (lay?lay.id:null), "App.AddImage("+file+"\f"+width+"\f"+height+"\f"+options+"\f"+w+"\f"+h );  if( ret ) return new Img(ret); else return null; }
	  this.AddCanvas = function( lay,width,height,options,w,h ) { var ret = prompt( (lay?lay.id:null), "App.AddCanvas(\f"+width+"\f"+height+"\f"+options+"\f"+w+"\f"+h );  if( ret ) return new Img(ret); else return null; }
	  this.CreateButton = function( text,width,height,options ) { var ret = prompt( "#", "App.CreateButton("+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Btn(ret); else return null;  }
	  this.AddButton = function( lay,text,width,height,options ) { var ret = prompt( (lay?lay.id:null), "App.AddButton("+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Btn(ret); else return null;  }
	  this.CreateToggle = function( text,width,height,options ) { var ret = prompt( "#", "App.CreateToggle("+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Tgl(ret); else return null;  }
	  this.AddToggle = function( lay,text,width,height,options ) { var ret = prompt( (lay?lay.id:null), "App.AddToggle("+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Tgl(ret); else return null;  }
	  this.CreateSwitch = function( text,width,height,options ) { var ret = prompt( "#", "App.CreateSwitch("+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Swi(ret); else return null;  }
	  this.AddSwitch = function( lay,text,width,height,options ) { var ret = prompt( (lay?lay.id:null), "App.AddSwitch("+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Swi(ret); else return null;  }
	  this.CreateCheckBox = function( text,width,height,options ) { var ret = prompt( "#", "App.CreateCheckBox("+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Chk(ret); else return null;  }
	  this.AddCheckBox = function( lay,text,width,height,options ) { var ret = prompt( (lay?lay.id:null), "App.AddCheckBox("+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Chk(ret); else return null;  }
	  this.CreateSpinner = function( list,width,height,options ) { var ret = prompt( "#", "App.CreateSpinner("+list+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Spn(ret); else return null; }
	  this.AddSpinner = function( lay,list,width,height,options ) { var ret = prompt( (lay?lay.id:null), "App.AddSpinner("+list+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Spn(ret); else return null; }
	  this.CreateSeekBar = function( width,height,options ) { var ret = prompt( "#", "App.CreateSeekBar("+width+"\f"+height+"\f"+options ); if( ret ) return new Skb(ret); else return null; }
	  this.AddSeekBar = function( lay,width,height,options ) { var ret = prompt( (lay?lay.id:null), "App.AddSeekBar("+width+"\f"+height+"\f"+options ); if( ret ) return new Skb(ret); else return null; }
	  this.CreateText = function( text,width,height,options ) { var ret = prompt( "#", "App.CreateText("+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Txt(ret); else return null; }
	  this.AddText = function( lay,text,width,height,options ) { var ret = prompt( (lay?lay.id:null), "App.AddText("+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Txt(ret); else return null; }
	  this.CreateTextEdit = function( text,width,height,options ) { var ret = prompt( "#", "App.CreateTextEdit("+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Txe(ret); else return null; }
	  this.AddTextEdit = function( lay,text,width,height,options ) { var ret = prompt( (lay?lay.id:null), "App.AddTextEdit("+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Txe(ret); else return null; }
	  this.CreateList = function( list,width,height,options,delim ) { var ret = prompt( "#", "App.CreateList(\f"+list+"\f"+width+"\f"+height+"\f"+options+"\f"+delim ); if( ret ) return new Lst(ret); else return null; }
	  this.AddList = function( lay,list,width,height,options,delim ) { var ret = prompt( (lay?lay.id:null), "App.AddList(\f"+list+"\f"+width+"\f"+height+"\f"+options+"\f"+delim ); if( ret ) return new Lst(ret); else return null; }
	  this.CreateWebView = function( width,height,options,zoom ) { var ret = prompt( "#", "App.CreateWeb(\f"+width+"\f"+height+"\f"+options+"\f"+zoom ); if( ret ) return new Web(ret); else return null; }
	  this.AddWebView = function( lay,width,height,options,zoom ) { var ret = prompt( (lay?lay.id:null), "App.AddWeb(\f"+width+"\f"+height+"\f"+options+"\f"+zoom ); if( ret ) return new Web(ret); else return null; }
	  this.CreateScroller = function( width,height,options ) { var ret = prompt( "#", "App.CreateScroller("+width+"\f"+height+"\f"+options ); if( ret ) return new Scr(ret); else return null; }
	  this.AddScroller = function( lay,width,height,options ) { var ret = prompt( (lay?lay.id:null), "App.AddScroller("+width+"\f"+height+"\f"+options ); if( ret ) return new Scr(ret); else return null; }
	  this.CreateCameraView = function( width,height,options ) { var ret = prompt( "#", "App.CreateCameraView("+width+"\f"+height+"\f"+options );  if( ret ) return new Cam(ret); else return null; }
	  this.AddCameraView = function( lay,width,height,options ) { var ret = prompt( (lay?lay.id:null), "App.AddCameraView("+width+"\f"+height+"\f"+options );  if( ret ) return new Cam(ret); else return null; }
	  this.CreateVideoView = function( width,height,options ) { var ret = prompt( "#", "App.CreateVideoView(\f"+width+"\f"+height+"\f"+options );  if( ret ) return new Vid(ret); else return null; }
	  this.AddVideoView = function( lay,width,height,options ) { var ret = prompt( (lay?lay.id:null), "App.AddVideoView(\f"+width+"\f"+height+"\f"+options );  if( ret ) return new Vid(ret); else return null; }
	  this.CreateCodeEdit = function( text,width,height,options ) { var ret = prompt( "#", "App.CreateCodeEdit(\f"+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Cde(ret); else return null; }
	  this.AddCodeEdit = function( lay,text,width,height,options ) { var ret = prompt( (lay?lay.id:null), "App.AddCodeEdit(\f"+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Cde(ret); else return null; }
	  this.CreateAdView = function( unitId,testId,width,height,options ) { var ret = prompt( "#", "App.CreateAdView(\f"+unitId+"\f"+testId+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Adv(ret); else return null; }
	  this.AddAdView = function( lay,unitId,testId,width,height,options ) { var ret = prompt( (lay?lay.id:null), "App.AddAdView(\f"+unitId+"\f"+testId+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Adv(ret); else return null; }


	//These objects auto-release (ie. single instance)
	  this.CreateYesNoDialog = function( msg,options ) { if( _ynd ) _ynd.Release(); var ret = prompt( "#", "App.CreateYesNoDialog(\f"+msg+"\f"+options ); if( ret ) _ynd = new Ynd(ret); else _ynd = null; return _ynd; }
	  this.CreateListDialog = function( title,list,options ) { if( _ldg ) _ldg.Release(); var ret = prompt( "#", "App.CreateListDialog(\f"+title+"\f"+list+"\f"+options ); if( ret ) _ldg = new Ldg(ret); else _ldg = null; return _ldg; }
	  //this.CreateListView = function( list,title,options ) { if( _lvw ) _lvw.Release(); var ret = prompt( "#", "App.CreateListView(\f"+list+"\f"+title+"\f"+options ); if( ret ) _lvw = new Lvw(ret); else _lvw = null; return _lvw; }
	  this.CreateBluetoothList = function( filter ) { if( _btl ) _btl.Release(); var ret = prompt( "#", "App.CreateBluetoothList("+filter ); if( ret) _btl = new Btl(ret); else _btl = null; return _btl; }
	  this.CreateAudioRecorder = function() { if( _rec ) _rec.Release(); var ret = prompt( "#", "App.CreateAudioRecorder(" ); if( ret) _rec = new Rec(ret); else _rec = null; return _rec; }
	  this.CreateSMS = function() { if( _sms ) _sms.Release(); var ret = prompt( "#", "App.CreateSMS(" ); if( ret) _sms = new SMS(ret); else _sms = null; return _sms; }
	  this.CreateEmail = function( account,password ) { if( _eml ) _eml.Release(); var ret = prompt( "#", "App.CreateEmail("+account+"\f"+password ); if( ret) _eml = new EMAIL(ret); else _eml = null; return _eml; }
	  this.CreateSmartWatch = function( type ) { if( _smw ) _smw.Release(); var ret = prompt( "#", "App.CreateSmartWatch(\f"+type ); if( ret) _smw = new SMW(ret); else _smw = null; return _smw; }
	  this.CreateCrypt = function( options ) { if( _crp ) _crp.Release(); var ret = prompt( "#", "App.CreateCrypt(\f"+options ); if( ret) _crp = new Crp(ret); else _crp = null; return _crp; }
	  this.CreateSpeechRec = function( options ) { if( _spr ) _spr.Release(); var ret = prompt( "#", "App.CreateSpeechRec(\f"+options ); if( ret) _spr = new Spr(ret); else _spr = null; return _spr; }
	  this.CreatePhoneState = function( types ) { if( _pst ) _pst.Release(); var ret = prompt( "#", "App.CreatePhoneState(\f"+types ); if( ret) _pst = new Pst(ret); else _pst = null; return _pst; }
	  this.CreateWallpaper = function( options ) { if( _wpr ) _wpr.Release(); var ret = prompt( "#", "App.CreateWallpaper(\f"+options ); if( ret) _wpr = new Wpr(ret); else _wpr = null; return _wpr; }

	//These objects need releasing manually.
	  this.CreateTheme = function( baseTheme ) { var ret = prompt( "#", "App.CreateTheme(\f"+baseTheme ); if( ret ) return new Thm(ret); else return null;  }
	  this.CreateDialog = function( title,options ) { var ret = prompt( "#", "App.CreateDialog(\f"+title+"\f"+options ); if( ret ) return new Dlg(ret); else return null; }
	  this.CreateOverlay = function( options ) { var ret = prompt( "#", "App.CreateOverlay(\f"+options ); if( ret ) return new Ovl(ret); else return null; }
	  this.CreateMediaPlayer = function() { var ret = prompt( "#", "App.CreateMediaPlayer(" ); if( ret ) return new Aud(ret); else return null; }
	  this.CreateSensor = function( type,options ) { var ret = prompt( "#", "App.CreateSensor("+type+"\f"+options ); if( ret ) return new Sns(ret); else return null; }
	  this.CreateLocator = function( type,options ) { var ret = prompt( "#", "App.CreateLocator("+type+"\f"+options ); if( ret ) return new Loc(ret); else return null; }
	  this.CreateNetClient = function( type ) { var ret = prompt( "#", "App.CreateNetClient("+type ); if( ret ) return new Net(ret); else return null; }
	  this.CreateNxtRemote = function() { var ret = prompt( "#", "App.CreateNxtRemote(" ); if( ret ) return new Nxt(ret,null); else return null; }
	  this.CreateWebServer = function( port,options ) { var ret = prompt( "#", "App.CreateWebServer("+port+"\f"+options ); if( ret ) return new Wbs(ret); else return null; }
	  this.CreateUSBSerial = function( baudRate,dataBits,stopBits,parity,device ) { var ret = prompt( "#", "App.CreateUSBSerial(\f"+baudRate+"\f"+dataBits+"\f"+stopBits+"\f"+parity+"\f"+device ); if( ret ) return new Usb(ret); else return null; }
	  this.CreateSysProc = function( cmd,env,dir,options ) { var ret = prompt( "#", "App.CreateSysProc(\f"+cmd+"\f"+env+"\f"+dir+"\f"+options ); if( ret ) return new Sys(ret); else return null; }
	  this.CreateService = function( packageName,className,callback,options ) { var ret = prompt( "#", "App.CreateService(\f"+packageName+"\f"+className+"\f"+options+"\f"+_Cbm(callback) ); if( ret ) return new Svc(ret); else return null; }
	  this.CreateSynth = function( type ) { var ret = prompt( "#", "App.CreateSynth("+type ); if( ret ) return new Syn(ret); else return null; }
	  this.CreateBluetoothSerial = function( mode ) { var ret = prompt( "#", "App.CreateBluetoothSerial(\f"+mode ); if( ret ) return new Bts(ret); else return null; }
	  this.CreateZipUtil = function( mode ) { var ret = prompt( "#", "App.CreateZipUtil(\f"+mode ); if( ret ) return new Zip(ret); else return null; }
	  this.CreateDownloader = function( options ) { var ret = prompt( "#", "App.CreateDownloader(\f"+options ); if( ret ) return new Dwn(ret); else return null; }
	  this.CreateMediaStore = function() { var ret = prompt( "#", "App.CreateMediaStore(" ); if( ret ) return new Med(ret); else return null; }
	  this.CreatePlayStore = function() { var ret = prompt( "#", "App.CreatePlayStore(" ); if( ret ) return new Ply(ret); else return null; }
	  this.CreateNotification = function( options ) { var ret = prompt( "#", "App.CreateNotification(\f"+options ); if( ret ) return new Not(ret); else return null; }
	  this.CreateFile = function( file,mode ) { var ret = prompt( "#", "App.CreateFile(\f"+file+"\f"+mode ); if( ret ) return new Fil(ret); else return null; }

	//----- Special methods ---------------------

	this.Start = function() {
	    if(typeof OnStart==function) {
	        _dbg = app.GetDebug(); OnStart(); prompt("#","_Start"); _started=true;
	    }
	}

	  this.CreateObject = function( name, type ) {
		if( !type ) try { return eval( "new "+name+"()" ); } catch(e) { return null; }
		else { var ret = prompt( "#", "_Obj(\f"+type+"\f"+name ); if( ret ) return new SObj(ret); else return null; }
	}

      this.Func = function( name, args ) {
        for( var a in arguments )
            if( typeof arguments[a]==function ) arguments[a] = _Cbm(arguments[a])
        app.Execute( "_OnFunc("+btoa2(JSON.stringify(Array.from(arguments)))+")", function(){} )
    }

	  this.GA = function( cmd )
	{
	    var dbg = _dbg; _UseDbg( false );
		try {
			if( app.FileExists("/Sys/ga.js") )
			{
				if( cmd.toLowerCase()==create ) {
					_LoadScriptSync( "/Sys/ga.js" );
					window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
					ga(create, arguments[1], {storage:none, clientId:app.GetDeviceId()});
					ga(set, { checkProtocolTask: null, checkStorageTask: null });
				}
				else ga.apply( this, arguments );
			}
		}
		catch(e) {}
		finally{  _UseDbg( dbg ) }
	}

	var _anim_t = 0;
	function _animatev8() {if(_cbAnimate) {var t=new Date().getTime(); _cbAnimate(t,t-_anim_t); _anim_t=t;}}
	function _animate() {if(_cbAnimate) {var t=new Date().getTime(); _cbAnimate(t,t-_anim_t); _anim_t=t; requestAnimationFrame(_animate);}}
	  this.Animate = function( callback,fps )
	{
		_cbAnimate = callback;
		_anim_t = new Date().getTime();
		if( _isV8 ) {
			_fps=(fps?fps:30);
			if( _cbAnimate ) _tmAnimate = setInterval( _animatev8, 1000/_fps );
			else if( _tmAnimate ) clearInterval( _tmAnimate );
		}
		else {
			window._fps=(fps?fps:30);
			requestAnimationFrame(_animate);
		}
	}

	  this.GetAppLanguages = function() { return _languages.langs; }

	  this.GetAppLangCode = function(name) {
		if( name ) return _languages.codes[name.toLowerCase()];
		else return _curLang;
	}

	  this.SetAppLanguage = function( name )
	{
		var file = _GetMain().includes("/assets/samples/") ? "/assets/lang.json" : "lang.json";
		var json = app.ReadFile( file )
		_languages = JSON.parse(json);
		_curLang = _languages.codes[name.toLowerCase()];
	}

	//Helper classes.
	  this.CreateNxt = function() { var nxtHelp = new _NxtHelp(); return nxtHelp.nxt_CreateNxt(); }
	  this.CreateTabs = function( list,width,height,options ) { return new _Tabs( list,width,height,options ); }
	  this.CreateWebSocket = function( address,id,retry,options ) { return new _WebSock( address,id,retry,options ); }
	  this.CreateWizard = function( title,width,height,callback,options ) { return new _Wizard( title,width,height,callback,options ) }
	  this.CreateGame = function( file,orient ) { return new _Game( file,orient ) }

	//Externally defined methods.
	  this.ShowTextDialog = function( title,deflt,callback ) { _ShowTextDialog( title,deflt,callback ) }
	  this.ShowCheckList = function( title,list,callback,width,height,options ) { return new _CheckList( title,list,callback,width,height,options ); }
	  this.ShowTip = function( msg,left,top,timeOut,options ) { _ShowTip( msg,left,top,timeOut,options ) }
	  this.PlaySound = function( file ) { _PlaySound( file ) }
	  this.ChooseWifi = function( title1,title2,callback,options,extra ) { var wifi = new _WifiScan( title1,title2,callback,options,extra ); wifi.Select(); }

	//Internal plugins.
	  this.CreateMusic = function() { _LoadScriptSync( "/Sys/plugs/Music/Music.inc" ); return new Music() }
	  this.CreateCloudStore = function( key,server ) { _LoadScriptSync( "/Sys/cloud.js" ); return new CloudStore(key,server) }
	  this.CreateCustomTabs = function() { _LoadPlugin("CustomTabs"); return new CustomTabsWrapperClass() }
	  this.CreateNode = function(paths,options) { _LoadPlugin("Node"); return new Node(paths,options) }

	//Hybrid objects.
	  this.CreateGameView = function( width,height,options )
	{
		if( options ) options = options.toLowerCase(); else options = "";
	    if( options.indexOf("gles")>-1 ) {
			var obj = prompt( "#", "App.CreateGameView(\f"+width+"\f"+height+"\f"+options );
			if( obj ) return new WGL(obj); else return null;
		}
		else {
			var obj = app.CreateWebView( width,height,"gameview"+options );
			obj.GetType = function() { return "GameView"; }
			obj.SetFrameRate = function( fps ) { }
			obj.SetFile = function( file ) { obj.LoadHtml( _WglTemplate(file),"" ) }
			return obj;
		}
	}

	  this.CreateGLView = function( width,height,options )
	{
	    var glv = null;
	    if( options.toLowerCase().indexOf("fast2d") > -1 )
	    {
			_LoadScriptSync( "/Sys/cp.js" );
    		_LoadScriptSync( "/Sys/gl.js" );
    		glv = new GLV( prompt( "#", "App.CreateGLView(\f"+width+"\f"+height+"\f"+options ));
    		glv.canvas = FastCanvas.create();
    		glv.ctx = glv.canvas.getContext("2d");
    		glv.width = Math.round(app.GetDisplayWidth()*width);
    		glv.height = Math.round(app.GetDisplayHeight()*height);
    		glv.aspect = glv.width / glv.height;
    		glv.GetType = function() { return "GLView"; }
	    }
		return glv;
	}

	  this.OpenDatabase = function( name )
	{
		_LoadScriptSync( "/Sys/cp.js" );
		_LoadScriptSync( "/Sys/sql.js" );
		_CreateCP( "sqliteplugin" );

		name = app.RealPath( name )
		var db = sqlitePlugin.openDatabase( name );
		db.name = name;

	    db.GetType = function() { return "Database"; }
	    db.GetName = function() { return db.name; }
		db.ExecuteSql = function( sql, params, success, error )
		{
		    console.log( "SQL: " + sql )
			if( !success ) success = null;
			if( !error ) error = _Err;

			db.transaction( function(tx) {
				tx.executeSql( sql, params,
					function(tx,res) { if(success) success.apply(db,[res]) }
					function(t,e) { error.apply(db,[e.message]); }
				); } error
			);
		}
		db.Close = function() { db.close( _Log, _Err ); }
		db.Delete = function() { sqlitePlugin.deleteDatabase(db.name,_Log,_Err); }
		return db;
	}
}
*/
