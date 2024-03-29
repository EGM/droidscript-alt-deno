const arr = [
    `GetType() { return "DsApp"; }`,

`IsStarted() { return prompt( "#", "App.IsStarted(" )=="true"; }`,
`Exit( kill ) { prompt( "#", "App.Exit("+kill ); }`,
`Quit( msg,title,options ) { prompt( "#", "App.Quit(\f"+msg+"\f"+title+"\f"+options ); }`,
`ToBack() { prompt( "#", "App.ToBack(" ); }`,
`ToFront() { prompt( "#", "App.ToFront(" ); }`,
`Hide() { prompt( "#", "App.Hide(" ); }`,
`Show() { prompt( "#", "App.Show(" ); }`,
`UpdateUI( ms ) { prompt( "#", "_DoEvents(\f"+ms ); }`,
`Execute( js ) { prompt( "#", "App.Execute("+js ); }`,
`StartApp( file,options,intent ) { prompt( "#", "App.StartApp(\f"+file+"\f"+options+"\f"+intent ); }`,
`StopApp( name ) { prompt( "#", "App.StopApp("+name ); }`,
`LaunchApp( packageName,noPlay ) { prompt( "#", "App.LaunchApp(\f"+packageName+"\f"+noPlay ); }`,
`SetScreenMode( mode ) { prompt( "#", "App.SetScreenMode(\f"+mode ); }`,
`SetOptions( options ) { prompt( "#", "App.SetOptions(\f"+options ); }`,
`SetTheme( theme ) { prompt( "#", "App.SetTheme(\f"+(theme?theme.id:null) ); }`,
`SetDensity( dpi ) { prompt( "#", "App.SetDensity(\f"+dpi ); }`,
`SetPosition( left,top,width,height,options ) { prompt( "#", "App.SetPosition(\f"+left+"\f"+top+"\f"+width+"\f"+height+"\f"+options ); }`,
`SetBackColor( clr ) { prompt( "#", "App.SetBackColor(\f"+clr ); }`,
`SetNavBarColor( clr ) { prompt( "#", "App.SetNavBarColor(\f"+clr ); }`,
`SetStatusBarColor( clr ) { prompt( "#", "App.SetStatusBarColor(\f"+clr ); }`,
`StartService( packageName,className ) { prompt( "#", "App.StartService(\f"+packageName+"\f"+className ); }`,
`StopService() { prompt( "#", "App.StopService(" ); }`,
`ScheduleJob( delay,options ) { prompt( "#", "App.ScheduleJob(\f"+delay+"\f"+options ); }`,
`CancelJob() { prompt( "#", "App.CancelJob(" ); }`,
`StartDebugServer() { prompt( "#", "App.StartDebugServer(" ); }`,
`StopDebugServer() { prompt( "#", "App.StopDebugServer(" ); }`,
`SendIntent( packageName,className,action,category,uri,type,extras,options,callback ) { prompt( "#", "App.SendIntent(\f"+packageName+"\f"+className+"\f"+action+"\f"+category+"\f"+uri+"\f"+type+"\f"+extras+"\f"+options+"\f"+_Cbm(callback) ); }`,
`BroadcastIntent( action,category,data,type,extras,options ) { prompt( "#", "App.BroadcastIntent(\f"+action+"\f"+category+"\f"+data+"\f"+type+"\f"+extras+"\f"+options ); }`,
`SendMessage( msg ) { prompt( "#", "App.SendMessage(\f"+msg ); }`,
`SetInForeground( title,text,largeIcon,smallIcon,importance ) { prompt( "#", "App.SetInForeground(\f"+title+"\f"+text+"\f"+largeIcon+"\f"+smallIcon+"\f"+importance ); }`,
`SetInBackground() { prompt( "#", "App.SetInBackground(\f" ); }`,
`Script( file, noDefer ) { _LoadScriptSync( file, noDefer?false:true ); }`,
`LoadScript( url, callback ) { _LoadScript( url, callback ); }`,
`LoadPlugin( url ) { _LoadPlugin( url ); }`,
`SysExec( cmd,options,maxRead,timeout ) { return prompt( "#", "App.SysExec(\f"+cmd+"\f"+options+"\f"+maxRead+"\f"+timeout ); }`,
`ExtExec( name,file,args,options ) { return prompt( "#", "App.ExtExec(\f"+name+"\f"+file+"\f"+args+"\f"+options ); }`,
`SetPriority( level ) { prompt( "#", "App.SetPriority(\f"+level ); }`,
`    //this.Odroid( p1,p2,p3 ) { return prompt( "#", "App.Odroid(\f"+p1+"\f"+p2+"\f"+p3 ); }`,
`IsNewVersion() { return prompt( "#", "App.IsNewVersion(" )=="true"; }`,
`InIDE() { return prompt( "#", "App.InIDE(" )=="true"; }`,
`IsAPK() { return prompt( "#", "App.IsAPK(" )=="true"; }`,
`IsService() { return prompt( "#", "App.IsService(" )=="true"; }`,
`IsPremium() { return prompt( "#", "App.IsPremium(" )=="true"; }`,
`IsEngine() { return prompt( "#", "App.IsEngine(" )=="true"; }`,
`IsScoped() { return prompt( "#", "App.IsScoped(" )=="true"; }`,
`CheckLicense( key ) { prompt( "#", "App.CheckLicense(\f"+key ); }`,
`IsAppInstalled( packageName ) { return prompt( "#", "App.IsAppInstalled(\f"+packageName )=="true"; }`,
`SetSharedApp( name ) { prompt( "#", "App.SetSharedApp("+name ); }`,
`KillApp( procId ) { prompt( "#", "App.KillApp("+procId ); }`,
`CreateShortcut( name,iconFile,file,options ) { prompt( "#", "App.CreateShortcut(\f"+name+"\f"+iconFile+"\f"+file+"\f"+options ); }`,
`IsTablet() { return prompt( "#", "App.IsTablet(" )=="true"; }`,
`IsChrome() { return prompt( "#", "App.IsChrome(" )=="true"; }`,
`IsTV() { return prompt( "#", "App.IsTV(" )=="true"; }`,
`SetErrorFilter( filter ) { prompt( "#", "App.SetErrorFilter(\f"+filter ); }`,
`SetOnError( callback ) { prompt( "#", "App.SetOnError(\f"+_Cbm(callback) ); }`,
`SetOnDebug( callback ) { prompt( "#", "App.SetOnDebug(\f"+_Cbm(callback) ); }`,
`SetOnKey( callback ) { prompt( "#", "App.SetOnKey(\f"+_Cbm(callback) ); }`,
`SetOnShowKeyboard( callback ) { prompt( "#", "App.SetOnShowKeyboard(\f"+_Cbm(callback) ); }`,
`SetOnWifiChange( callback ) { prompt( "#", "App.SetOnWifiChange(\f"+_Cbm(callback) ); }`,
`WifiScan( callback,options ) { prompt( "#", "App.WifiScan(\f"+_Cbm(callback)+"\f"+options ); }`,
`DisableKeys( keyList ) { prompt( "#", "App.DisableKeys(\f"+keyList ); }`,
`DisableTouch( disable ) { prompt( "#", "App.DisableTouch(\f"+disable ); }`,
`Broadcast( type,msg ) { prompt( "#", "App.Broadcast("+type+"\f"+msg ); }`,
`SetOnBroadcast( callback,action ) { prompt( "#", "App.SetOnBroadcast(\f"+_Cbm(callback)+"\f"+action ); }`,
`SetData( name,value ) { prompt( "#", "App.SetData(\f"+name+"\f"+value ); }`,
`SetClipboardText( txt ) { prompt( "#", "App.SetClipboardText("+txt ); }`,
`EnableBackKey( enable ) { prompt( "#", "App.EnableBackKey("+enable ); }`,
`Wait( secs,doEvents ) { prompt( "#", "App.Wait(\f"+secs+"\f"+doEvents ); }`,
`Alert( msg,title,options,hue ) { if(title) prompt( "#", "App.Alert(\f"+msg+"\f"+title+"\f"+options+"\f"+hue ); else alert(msg); }`,
`HideKeyboard() { prompt( "#", "App.HideKeyboard(" ); }`,
`ShowKeyboard( obj ) { return prompt( "#", "App.ShowKeyboard(\f"+obj.id )=="true"; }`,
`IsKeyboardShown() { return prompt( "#", "App.IsKeyboardShown(" )=="true"; }`,
`TextToSpeech( text,pitch,rate,callback,stream,locale,engine ) { prompt( "#", "App.TextToSpeech(\f"+text+"\f"+pitch+"\f"+rate+"\f"+_Cbm(callback)+"\f"+stream+"\f"+locale+"\f"+engine ); }`,
`Debug( msg ) { prompt( "#", "App.Debug(\f"+(typeof msg==object?JSON.stringify(msg):msg) ); }`,
`Error( msg,line,file,quit ) { prompt( "#", "App.Error(\f"+msg+"\f"+line+"\f"+file+"\f"+quit ); }`,
`SetDebugEnabled( enable ) { prompt( "#", "_UseDbg(\f"+enable ); _dbg=enable; }`,
`SetDebug( switches ) { prompt( "#", "_UseDbg(\f"+switches ); _dbg=switches; }`,
`IsDebugEnabled() { return _dbg?true:false; }`,
`IsDebugging() { return prompt( "#", "App.IsDebugging(" )=="true"; }`,
`IsDebugVisible() { return prompt( "#", "App.IsDebugVisible(" )=="true"; }`,
`CreateDebug( options ) { prompt( "#", "App.CreateDebug(\f"+options ); }`,
`ShowDebug( show,options ) { prompt( "#", "App.ShowDebug(\f"+show+"\f"+options ); }`,
`SendMail( address,subject,body,attach,type,options ) { prompt( "#", "App.SendMail(\f"+address+"\f"+subject+"\f"+body+"\f"+attach+"\f"+type+"\f"+options ); }`,
`SendFile( file,subject,text,choose ) { prompt( "#", "App.SendFile(\f"+file+"\f"+subject+"\f"+text+"\f"+choose ); }`,
`SendText( text,subject,choose ) { prompt( "#", "App.SendText(\f"+text+"\f"+subject+"\f"+choose ); }`,
`SendImage( file,choose ) { prompt( "#", "App.SendImage(\f"+file+"\f"+choose ); }`,
`SendSMS( msg,number ){ app.SendIntent(null,null,"android.intent.action.SENDTO",null,smsto:+number,null,JSON.stringify([{name:"sms_body",type:"string",value:msg}])); }`,
`  // this._Extract( p1 ) { prompt( "#", "App._Extract("+p1 ); }`,
`ExtractAssets( src,dest,overwrite,options,filter ) { prompt( "#", "App.ExtractAssets(\f"+src+"\f"+dest+"\f"+overwrite+"\f"+options+"\f"+filter ); }`,
`RedirectAssets( dir ) { prompt( "#", "App.RedirectAssets(\f"+dir ); }`,
`ExtractPlugins() { prompt( "#", "App.ExtractPlugins(\f" ); }`,
`Vibrate( pattern ) { prompt( "#", "App.Vibrate("+pattern ); }`,
`ShowPopup( msg,options ) { prompt( "#", "App.ShowPopup("+msg+"\f"+options ); }`,
`ShowProgress( msg,options ) { prompt( "#", "App.ShowProgress(\f"+msg+"\f"+options ); }`,
`HideProgress() { prompt( "#", "App.HideProgress(" ); }`,
`ShowProgressBar( title,percent,options ) { prompt( "#", "App.ShowProgressBar(\f"+title+"\f"+percent+"\f"+options ); }`,
`UpdateProgressBar( percent,options ) { prompt( "#", "App.UpdateProgressBar(\f"+percent+"\f"+options ); }`,
`HideProgressBar() { prompt( "#", "App.HideProgressBar(" ); }`,
`LoadText( name,dflt,file ) { return prompt( "#", "App.LoadText("+name+"\f"+dflt+"\f"+file ); }`,
`LoadNumber( name,dflt,file ) { return parseFloat(prompt( "#", "App.LoadNumber("+name+"\f"+dflt+"\f"+file )); }`,
`LoadBoolean( name,dflt,file ) { return (prompt( "#", "App.LoadBoolean("+name+"\f"+dflt+"\f"+file )=="true"); }`,
`LoadJson(name,dflt,file) { try { return JSON.parse(prompt("#","App.LoadText("+name+"\f"+dflt+"\f"+file)); }, catch(e) { app.Debug("WARNING: app.LoadJson Failed: "+e); }, }`,
`SaveText( name,value,file ) { prompt( "#", "App.SaveText("+name+"\f"+value+"\f"+file ); }`,
`SaveNumber( name,value,file ) { prompt( "#", "App.SaveNumber("+name+"\f"+value+"\f"+file ); }`,
`SaveBoolean( name,value,file ) { prompt( "#", "App.SaveBoolean("+name+"\f"+value+"\f"+file ); }`,
`SaveJson(name,data,file) { try { prompt("#","App.SaveText("+name+"\f"+JSON.stringify(data)+"\f"+file); }, catch(e) { app.Debug("WARNING: app.SaveJson Failed: "+e); }, }`,
`ClearData( file ) { prompt( "#", "App.ClearData(\f"+file ); }`,
`ClearValue( name,file ) { prompt( "#", "App.ClearValue(\f"+name+"\f"+file ); }`,
`HasSoftNav() { return prompt( "#", "App.HasSoftNav(" )=="true"; }`,
`IsNavBarOnRight() { return prompt( "#", "App.IsNavBarOnRight(" )=="true"; }`,
`IsPortrait() { return prompt( "#", "App.GetOrientation(" )=="Portrait"; }`,
`SetOrientation( orient,callback ) { prompt( "#", "App.SetOrientation(\f"+orient+"\f"+_Cbm(callback) ); }`,
`IsBatteryOptimized() { return prompt( "#", "App.IsBatteryOptimized(" )=="true"; }`,
`IsCharging() { return prompt( "#", "App.IsCharging(" )=="true"; }`,
`ShowBatterySettings() { prompt( "#", "App.ShowBatterySettings(" ); }`,
`PreventScreenLock( mode ) { prompt( "#", "App.PreventScreenLock("+mode ); }`,
`PreventWifiSleep() { prompt( "#", "App.PreventWifiSleep(" ); }`,
`SetWifiEnabled( enable ) { prompt( "#", "App.SetWifiEnabled(\f"+enable ); }`,
`IsWifiEnabled() { return prompt( "#", "App.IsWifiEnabled(" )=="true"; }`,
`SetWifiApEnabled( enable,ssid,key ) { prompt( "#", "App.SetWifiApEnabled(\f"+enable+"\f"+ssid+"\f"+key ); }`,
`IsWifiApEnabled() { return prompt( "#", "App.IsWifiApEnabled(" )=="true"; }`,
`WifiConnect( ssid,key ) { prompt( "#", "App.WifiConnect(\f"+ssid+"\f"+key ); }`,
`IsConnected() { return prompt( "#", "App.IsConnected(" )=="true"; }`,
`SetBluetoothEnabled( enable ) { prompt( "#", "App.SetBluetoothEnabled(\f"+enable ); }`,
`IsBluetoothEnabled() { return prompt( "#", "App.IsBluetoothEnabled(" )=="true"; }`,
`IsBtDevicePaired( name ) { return prompt( "#", "App.IsBtDevicePaired(\f"+name )=="true"; }`,
`DiscoverBtDevices( filter,onFound,onComplete ) { prompt( "#", "App.DiscoverBtDevices(\f"+filter+"\f"+_Cbm(onFound)+"\f"+_Cbm(onComplete) ); }`,
`PairBtDevice( address,callback ) { prompt( "#", "App.PairBtDevice(\f"+address+"\f"+_Cbm(callback) ); }`,
`UnpairBtDevice( address,callback ) { prompt( "#", "App.UnpairBtDevice(\f"+address+"\f"+_Cbm(callback) ); }`,
`IsLocationEnabled( types ) { return prompt( "#", "App.IsLocationEnabled(\f"+types )=="true"; }`,
`SetMockLocation( lat,lng,accuracy,speed ) { prompt( "#", "App.SetMockLocation(\f"+lat+"\f"+lng+"\f"+accuracy+"\f"+speed ); }`,
`PlayRingtone( type ) { prompt( "#", "App.PlayRingtone(\f"+type ); }`,
`SetRingerMode( mode ) { prompt( "#", "App.SetRingerMode(\f"+mode ); }`,
`SetSpeakerPhone( on ) { prompt( "#", "App.SetSpeakerPhone(\f"+on ); }`,
`SetVolume( stream,level,options ) { prompt( "#", "App.SetVolume(\f"+stream+"\f"+level+"\f"+options ); }`,
`SetTitle( title ) { prompt( "#", "App.SetTitle("+title ); }`,
`SetMenu( list,iconPath ) { prompt( "#", "App.SetMenu("+list+"\f"+iconPath ); }`,
`ShowMenu() { prompt( "#", "App.ShowMenu(" ); }`,
`Translate( cancel,ok ) { prompt( "#", "App.Translate(\f"+cancel+"\f"+ok ); }`,
`AddLayout( layout,type,options ) { if( !type ) prompt( "#", "App.AddLayout("+layout.id ); else { var ret = prompt( (layout?layout.id:null), "App.AddLayout("+type+"\f"+options ); if( ret ) return new Lay(ret); else return null; , }`,
`RemoveLayout( layout ) { prompt( "#", "App.RemoveLayout("+ layout.id ); }`,
`DestroyLayout( layout ) { prompt( "#", "App.DestroyLayout("+ layout.id ); }`,
`AddDrawer( layout,side,width,grabWidth ) { prompt( "#", "App.AddDrawer(\f"+layout.id+"\f"+side+"\f"+width+"\f"+grabWidth ); }`,
`RemoveDrawer( side ) { prompt( "#", "App.RemoveDrawer(\f"+ side ); }`,
`OpenDrawer( side ) { prompt( "#", "App.OpenDrawer(\f"+side ); }`,
`CloseDrawer( side ) { prompt( "#", "App.CloseDrawer(\f"+side ); }`,
`LockDrawer( side ) { prompt( "#", "App.LockDrawer(\f"+side ); }`,
`UnlockDrawer( side ) { prompt( "#", "App.UnlockDrawer(\f"+side ); }`,
`MakeFolder( fldr ) { prompt( "#", "App.MakeFolder("+fldr ); }`,
`DeleteDatabase( name ) { prompt( "#", "App.DeleteDatabase(\f"+name); }`,
`FolderExists( fldr ) { return prompt( "#", "App.FolderExists("+fldr )=="true"; }`,
`FileExists( file ) { return prompt( "#", "App.FileExists("+file )=="true"; }`,
`IsFolder( fldr ) { return prompt( "#", "App.IsFolder("+fldr )=="true"; }`,
`ListFolder( path,filter,limit,options ) { return eval(prompt( "#", "App.ListFolder(\f"+path+"\f"+filter+"\f"+limit+"\f"+options )); }`,
`WalkFolder( path,filter,depth,limit,options ) { return JSON.parse(prompt( "#", "App.WalkFolder(\f"+path+"\f"+filter+"\f"+depth+"\f"+limit+"\f"+options )); }`,
`CheckPermission( name ) { return prompt( "#", "App.CheckPermission(\f"+name ); }`,
`RemovePermission( uri ) { return prompt( "#", "App.RemovePermission(\f"+uri ); }`,
`ListPermissions( type ) { return prompt( "#", "App.ListPermissions(\f"+type ); }`,
`ReadFile( file,encoding ) { return prompt( "#", "App.ReadFile(\f"+file+"\f"+encoding ); }`,
`ReadFileData( file,mode ) { return JSON.parse(prompt( "#", "App.ReadFileData(\f"+file+"\f"+mode )); }`,
`WriteFile( file,text,mode,encoding ) { prompt( "#", "App.WriteFile(\f"+file+"\f"+text+"\f"+mode+"\f"+encoding ); }`,
`OpenFile( file,type,choose ) { prompt( "#", "App.OpenFile(\f"+file+"\f"+type+"\f"+choose ); }`,
`OpenUrl( url,type,choose ) { prompt( "#", "App.OpenUrl(\f"+url+"\f"+type+"\f"+choose ); }`,
`DownloadFile( src,dest,title,desc,options ) { prompt( "#", "App.DownloadFile(\f"+src+"\f"+dest+"\f"+title+"\f"+desc+"\f"+options ); }`,
`ChooseFile( msg,type,callback,fldr,options ) { prompt( "#", "App.ChooseFile(\f"+msg+"\f"+type+"\f"+_Cbm(callback)+"\f"+fldr+"\f"+options ); }`,
`ChooseContact( type,callback ) { prompt( "#", "App.ChooseContact(\f"+type+"\f"+_Cbm(callback) ); }`,
`ChooseImage( options,callback ) { prompt( "#", "App.ChooseImage(\f"+options+"\f"+_Cbm(callback) ); }`,
`ChooseAccount( callback ) { prompt( "#", "App.ChooseAccount(\f"+_Cbm(callback) ); }`,
`DeleteFile( file ) { prompt( "#", "App.DeleteFile("+file); }`,
`CopyFile( src,dest ) { prompt( "#", "App.CopyFile("+src+"\f"+dest); }`,
`CopyFolder( src,dest,overwrite,filter ) { prompt( "#", "App.CopyFolder(\f"+src+"\f"+dest+"\f"+overwrite+"\f"+filter); }`,
`DeleteFolder( fldr ) { prompt( "#", "App.DeleteFolder("+fldr); }`,
`RenameFile( src,dest ) { prompt( "#", "App.RenameFile(\f"+src+"\f"+dest); }`,
`RenameFolder( src,dest ) { prompt( "#", "App.RenameFile(\f"+src+"\f"+dest); }`,
`ReplaceInFile( file,txt,rep,options ) { prompt( "#", "App.ReplaceInFile(\f"+file+"\f"+txt+"\f"+rep+"\f"+options); }`,
`UnzipFile( src,dest,options ) { prompt( "#", "App.UnzipFile(\f"+src+"\f"+dest+"\f"+options); }`,
`ZipFile( src,dest,options ) { prompt( "#", "App.ZipFile(\f"+src+"\f"+dest+"\f"+options); }`,
`ZipFolder( src,dest,options ) { prompt( "#", "App.ZipFile(\f"+src+"\f"+dest+"\f"+options); }`,
`ScanFile( file ) { prompt( "#", "App.ScanFile(\f"+file); }`,
`IsBluetoothOn() { return prompt( "#", "App.IsBluetoothOn(" )=="true"; }`,
`IsScreenOn() { return prompt( "#", "App.IsScreenOn(" )=="true"; }`,
`WakeUp() { prompt( "#", "App.WakeUp(" ); }`,
`GoToSleep() { prompt( "#", "App.GoToSleep(" ); }`,
`Unlock() { prompt( "#", "App.Unlock(" ); }`,
`Lock() { prompt( "#", "App.Lock(" ); }`,
`SetScreenBrightness( level ) { prompt( "#", "App.SetScreenBrightness(\f"+level); }`,
`SetKioskMode( mode,enable,options,packages ) { prompt( "#", "App.SetKioskMode(\f"+mode+"\f"+enable+"\f"+options+"\f"+packages); }`,
`PinScreen( enable ) { prompt( "#", "App.PinScreen(\f"+enable); }`,
`SetAlarm( type,id,callback,time,interval,options ) { return prompt( "#", "App.SetAlarm(\f"+type+"\f"+id+"\f"+_Cbm(callback)+"\f"+time+"\f"+interval+"\f"+options); }`,
`Call( number ) { prompt( "#", "App.Call(\f"+number ); }`,
`SimulateTouch( obj,x,y,dir ) { prompt( "#", "App.SimulateTouch(\f"+obj.id+"\f"+x+"\f"+y+"\f"+dir ); }`,
`SimulateDrag( obj,x1,y1,x2,y2,step,pause ) { prompt( "#", "App.SimulateDrag(\f"+obj.id+"\f"+x1+"\f"+y1+"\f"+x2+"\f"+y2+"\f"+step+"\f"+pause ); }`,
`SimulateScroll( obj,x,y,dx,dy,count,fling ) { prompt( "#", "App.SimulateScroll(\f"+obj.id+"\f"+x+"\f"+y+"\f"+dx+"\f"+dy+"\f"+count+"\f"+fling ); }`,
`SimulateKey( obj,keyName,modifiers,pause ) { prompt( "#", "App.SimulateKey(\f"+obj.id+"\f"+keyName+"\f"+modifiers+"\f"+pause ); }`,
`SetJoystickOptions( options ) { prompt( "#", "App.SetJoystickOptions(\f"+options ); }`,
`SetAutoBoot( auto ) { prompt( "#", "App.SetAutoBoot(\f"+auto); }`,
`  this.SetAutoWifi( auto ) { prompt( "#", "App.SetAutoWifi(\f"+auto); }`,
`  this.SetAutoStart( appName ) { prompt( "#", "App.SetAutoStart(\f"+appName); }`,
`HttpRequest( type,baseUrl,path,params,callback,headers ) { prompt( "#", "App.HttpRequest(\f"+type+"\f"+baseUrl+"\f"+path+"\f"+params+"\f"+_Cbm(callback)+"\f"+headers); }`,
`UploadFile( url,file,name,callback ) { prompt( "#", "App.UploadFile(\f"+url+"\f"+file+"\f"+name+"\f"+_Cbm(callback) ); }`,
`SaveCookies() { prompt( "#", "App.SaveCookies(" ); }`,
`ClearCookies() { prompt( "#", "App.ClearCookies(" ); }`,
`SetUserAgent( agent,options ) { prompt( "#", "App.SetUserAgent(\f"+agent+"\f"+options ); }`,
`SetUserCreds( name,password ) { prompt( "#", "App.SetUserCreds(\f"+name+"\f"+password ); }`,
`QueryContent( uri,columns,select,args,sort ) { return eval(prompt( "#", "App.QueryContent(\f"+uri+"\f"+columns+"\f"+select+"\f"+args+"\f"+sort)); }`,
`Uri2Path( uri,options ) { return prompt( "#", "App.Uri2Path(\f"+uri+"\f"+options); }`,
`Path2Uri( path ) { return prompt( "#", "App.Path2Uri(\f"+path); }`,
`RealPath( path ) { return prompt( "#", "App.RealPath(\f"+path); }`,
`ScreenShot( fileName,quality ) { prompt( "#", "App.ScreenShot(\f"+fileName+"\f"+quality ); }`,
`InstallWallpaper( packageName,className ) { prompt( "#", "App.InstallWallpaper\f"+packageName+"\f"+className ); }`,
`InstallApp( apkFile,callback,options ) { prompt( "#", "App.InstallApp(\f"+apkFile+"\f"+_Cbm(callback)+"\f"+options ); }`,

];

const encoder = new TextEncoder();

arr.sort().forEach( s => {
    const data = encoder.encode(s[0].toLowerCase() + s.slice(1).replace(/\f/img,"\\f")+"\n");
    Deno.writeFileSync("blah.txt", data, { append: true });
})
