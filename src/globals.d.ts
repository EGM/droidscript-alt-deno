// objects from somewhere else
declare function OnStart(): void;
//declare function _WifiScan(title1, title2, callback, options, extra);
declare function _WebSock(id, ip, port, options): void
declare function _Tween(): void

// functions
declare function _Cbm(callback: Function): string;
declare function _CheckList(title?: string, list?: string, callback?: Function,
    width?: number, height?: number, options?: string): void;
declare function _CreateCP(service): any;
declare function _Log(msg): void;
declare function _Err(msg): void;

declare function _ExecCP(callbackId, service, action, argsJson): void;
declare function _LoadScript(str: string, cb?: Function): void;
declare function _LoadScriptSync(str: string): void;
declare function _PlaySound(str: string): void;
declare function _LoadPlugin(str: string): void;
declare function _ShowTextDialog(title?: string, deflt?: string, callback?: Function): void;
declare function _ShowTip(msg?: string, left?: number, top?: number, timeOut?: number, options?: string): void;
declare function _WifiScan(title1, title2, callback, options, extra): void;
declare function _UseDbg(b): void;

declare function prompt(s1?: string, s2?: string): string;
declare function setInterval(fn: Function, ms: number): any;
declare function clearInterval(id: any);
declare function requestAnimationFrame(fn: Function): void;

// vars for single object types
declare let _btl: any;
declare let _crp: any;
declare let _eml: any;
declare let _ldg: any;
declare let _pst: any;
declare let _rec: any;
declare let _sms: any;
declare let _smw: any;
declare let _spr: any;
declare let _wpr: any;
declare let _ynd: any;

//vars
declare let window: any; //Window & typeof globalThis
declare let _tmAnimate: any;
declare let _map: any;
declare let _languages: any;
declare let _curLang: string;
declare let _fps: number;
declare let _dbg: boolean;
declare let _started: boolean;
declare let _isV8: boolean;
declare let _cbAnimate: Function;
declare let _anim_t: number;
declare let _animate: Function;
declare let _animatev8: Function;
