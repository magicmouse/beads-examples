

import*as str from'./beads_str.js';
import*as k from'./beads_k.js';

export const CHECKS=true;
export const TRACE_EVENTS=false;
export const TRACE_IMPLIED=false;
export const TRACE_INIT=true;
export const TRACE_TIME=false;

const TRACE_ANIMATION=false;
const TRACE_BOOT=false;
const TRACE_CACHE=false;
const TRACE_CHAN=true;
const TRACE_CHUNK=false;
const TRACE_CLICK=false;
const TRACE_COLLATE=false;
const TRACE_CURVE=false;
const TRACE_ENCODE=true;
const TRACE_ENCOD_LOW=false;
const TRACE_FILE=true;
const TRACE_IMG=false;
const TRACE_INSERT=false;
const TRACE_KEYS=false;
const TRACE_LOG=false;
const TRACE_LOOM=false;
const TRACE_MOVE=false;
const TRACE_PICKER=false;
const TRACE_SEARCH=false;
const TRACE_SEQ=false;
const TRACE_SERVER=true;
const TRACE_SETVAL=false;
const TRACE_SOUND=false;
const TRACE_SPRITE=false;
const TRACE_TEXT=false;
const TRACE_TO_VAL_PTR=false;
const TRACE_UNITX=false;
const TRACE_XY=false;
const TRACE_WRITE=false;
const USES_VIDEO=false;

const TRAP_BAD_SUBSCRIPTS=true;
const TRAP_ERR=true;
const TRAP_TYPE_MISMATCH=true;
const TRAP_U=true;

const SKIP_ANIMATION=false;

if(TRACE_INIT)console.log("--- INIT A of std");



export const IS_NODE=false;





const M=0;



export const SVG_NS="http://www.w3.org/2000/svg";
export const XLINK_NS="http://www.w3.org/1999/xlink";

export var META;


export var FIELDS={};


export var runtime;


export var default_pic_host;


export var loom_history;



let gg_buf;


export let SCREEN_H;
export let SCREEN_V;
export let SCREEN_DPI;










export let TOTAL_EXTERIOR;
export let TOTAL_INTERIOR;




export let g_currseq=1000;


export let g_code={};


var g_overlay=null;
export const g_hardware_id=0x12345678;


export let g_active_framerate=10;
export let g_inactive_framerate=2;

export let g_toplevel_nodes=[];



export let g_inverse_hash={};


export let g_id_to_websocket={};




let g_subscript_found;
let g_val_found;
let g_next_bid=21000;


export const SCROLLBAR_WIDTH=IS_NODE?0:js_scrollbar_width();

export const MAX_LEVELS=14;












export let g_socket_to_sub_client=[];
export let g_id_to_sub_server={};


export let g_id_to_sub_client={};



export const FIRST_ENUM=9007190000000000;
export const FIRST_META=9007194300000000;
export const LAST_ENUM=9007198599999998;

export const N=FIRST_ENUM+0;
export const Y=FIRST_ENUM+1111111111;
export const U=LAST_ENUM+1;
export const ERR=NaN;

export const INFINITY=Infinity;
export const NEG_INFINITY=-Infinity;

export const U_STR=undefined;
export const U_PATH=undefined;
export const U_PHOTO=undefined;
export const U_MEAS=undefined;
export const U_FUNC=undefined;
export const U_SOUND=undefined;
export const U_TREE=undefined;
export const U_COLOR=0xE0000000;
export const U_DATE=U;







export const ERR_STR="\u0001ERR";
export const ERR_PATH=new a_path();
export const ERR_IMAGE=new a_image("err","err");
export const ERR_MEAS=new a_meas();
export const ERR_FUNC=new a_function("std","halt",halt);
export const ERR_GRAD=new a_gradient();
export const ERR_SOUND=new a_sound();
export const ERR_BITS=ERR;
export const ERR_BYTES=ERR;
export let ERR_TREE;
export const ERR_COLOR=0xE9999999;
export const ERR_DATE=ERR;

export const GRAD_TO_RIGHT=0;
export const GRAD_TO_BOTTOM=90;
export const GRAD_TO_LEFT=180;
export const GRAD_TO_TOP=270;


export const FIRST=1;
export const CR="\r";
export const LF="\n";
export const TAB="\t";
export const ESC="\u001B";
export const BS="\u0008";

export const LOOM_OP_SKIP=" ";
export const LOOM_OP_SETV="S";
export const LOOM_OP_CLEAR="C";
export const LOOM_OP_RENUM="N";


export const PI=Math.PI;
export const TAU=Math.PI*2;
export const E=Math.E;
export const GOLDEN_RATIO=(1+Math.sqrt(5))/2;


export const SECONDS_PER_MIN=60.0;
export const SECONDS_PER_HOUR=3600.0;
export const SECONDS_PER_DAY=86400.0;
export const SECONDS_PER_YEAR=31557600.0;
export const SECONDS_PER_MONTH=SECONDS_PER_YEAR/12.0;


export const KEYCODE_LEFT=37;
export const KEYCODE_RIGHT=39;
export const KEYCODE_UP=38;
export const KEYCODE_DOWN=40;

export const KEYCODE_PAGE_UP=33;
export const KEYCODE_PAGE_DOWN=34;

export const KEYCODE_HOME=36;
export const KEYCODE_END=35;

export const KEYCODE_SPACE=32;
export const KEYCODE_BS=8;
export const KEYCODE_DEL=46;
export const KEYCODE_ENTER=13;
export const KEYCODE_ESC=27;
export const KEYCODE_INS=45;
export const KEYCODE_TAB=9;
export const KEYCODE_SCROLL_LOCK=145;
export const KEYCODE_PRINT_SCREEN=124;

export const KEYCODE_F1=112;
export const KEYCODE_F2=113;
export const KEYCODE_F3=114;
export const KEYCODE_F4=115;
export const KEYCODE_F5=116;
export const KEYCODE_F6=117;
export const KEYCODE_F7=118;
export const KEYCODE_F8=119;
export const KEYCODE_F9=120;
export const KEYCODE_F10=121;
export const KEYCODE_F11=122;
export const KEYCODE_F12=123;
export const KEYCODE_F13=124;


export const KEYCODE_ANDROID_BACK=0x01000016;
export const KEYCODE_ANDROID_SEARCH=0x0100001F;
export const KEYCODE_ANDROID_MENU=0x01000012;





export const ALICE_BLUE=0xF0F8FF;
export const ANTIQUE_WHITE=0xFAEBD7;
export const AQUA=0x00FFFF;
export const AQUAMARINE=0x7FFFD4;
export const AZURE=0xF0FFFF;
export const BEIGE=0xF5F5DC;
export const BISQUE=0xFFE4C4;
export const BLACK=0x000000;
export const BLANCHED_ALMOND=0xFFEBCD;
export const BLUE=0x0000FF;
export const BLUE_VIOLET=0x8A2BE2;
export const BROWN=0xA52A2A;
export const BURLY_WOOD=0xDEB887;
export const CADET_BLUE=0x5F9EA0;
export const CHARTREUSE=0x7FFF00;
export const CHOCOLATE=0xD2691E;
export const CORAL=0xFF7F50;
export const CORNFLOWER_BLUE=0x6495ED;
export const CORNSILK=0xFFF8DC;
export const CRIMSON=0xDC143C;
export const CYAN=0x00FFFF;
export const DARK_BLUE=0x00008B;
export const DARK_CYAN=0x008B8B;
export const DARK_GOLDENROD=0xB8860B;
export const DARK_GRAY=0xA9A9A9;
export const DARK_GREEN=0x006400;
export const DARK_KHAKI=0xBDB76B;
export const DARK_MAGENTA=0x8B008B;
export const DARK_OLIVE_GREEN=0x556B2F;
export const DARK_ORANGE=0xFF8C00;
export const DARK_ORCHID=0x9932CC;
export const DARK_RED=0x8B0000;
export const DARK_SALMON=0xE9967A;
export const DARK_SEA_GREEN=0x8FBC8F;
export const DARK_SLATE_BLUE=0x483D8B;
export const DARK_SLATE_GRAY=0x2F4F4F;
export const DARK_TURQUOISE=0x00CED1;
export const DARK_VIOLET=0x9400D3;
export const DEEP_PINK=0xFF1493;
export const DEEP_SKY_BLUE=0x00BFFF;
export const DIM_GRAY=0x696969;
export const DODGER_BLUE=0x1E90FF;
export const FIREBRICK=0xB22222;
export const FLORAL_WHITE=0xFFFAF0;
export const FOREST_GREEN=0x228B22;
export const FUCHSIA=0xFF00FF;
export const GAINSBORO=0xDCDCDC;
export const GHOST_WHITE=0xF8F8FF;
export const GOLD=0xFFD700;
export const GOLDENROD=0xDAA520;
export const GRAY=0x808080;


export const GRAY9=0x1A1A1A;
export const GRAY8=0x333333;
export const GRAY7=0x4C4C4C;
export const GRAY6=0x666666;
export const GRAY5=0x7F7F7F;
export const GRAY4=0x999999;
export const GRAY3=0xB2B2B2;
export const GRAY2=0xCCCCCC;
export const GRAY1=0xE5E5E5;

export const GREEN=0x008000;
export const GREEN_YELLOW=0xADFF2F;
export const HONEYDEW=0xF0FFF0;
export const HOT_PINK=0xFF69B4;
export const INDIAN_RED=0xCD5C5C;
export const INDIGO=0x4B0082;
export const IVORY=0xFFFFF0;
export const KHAKI=0xF0E68C;
export const LAVENDER=0xE6E6FA;
export const LAVENDER_BLUSH=0xFFF0F5;
export const LAWN_GREEN=0x7CFC00;
export const LEMON_CHIFFON=0xFFFACD;
export const LIGHT_BLUE=0xADD8E6;
export const LIGHT_CORAL=0xF08080;
export const LIGHT_CYAN=0xE0FFFF;
export const LIGHT_GOLDENROD=0xFAFAD2;
export const LIGHT_GREEN=0x90EE90;
export const LIGHT_GREY=0xD3D3D3;
export const LIGHT_PINK=0xFFB6C1;
export const LIGHT_SALMON=0xFFA07A;
export const LIGHT_SEA_GREEN=0x20B2AA;
export const LIGHT_SKY_BLUE=0x87CEFA;
export const LIGHT_SLATE_GRAY=0x778899;
export const LIGHT_STEEL_BLUE=0xB0C4DE;
export const LIGHT_YELLOW=0xFFFFE0;
export const LIME=0x00FF00;
export const LIME_GREEN=0x32CD32;
export const LINEN=0xFAF0E6;
export const MAGENTA=0xFF00FF;
export const MAROON=0x800000;
export const MEDIUM_AQUAMARINE=0x66CDAA;
export const MEDIUM_BLUE=0x0000CD;
export const MEDIUM_ORCHID=0xBA55D3;
export const MEDIUM_PURPLE=0x9370DB;
export const MEDIUM_SEA_GREEN=0x3CB371;
export const MEDIUM_SLATE_BLUE=0x7B68EE;
export const MEDIUM_SPRING_GREEN=0x00FA9A;
export const MEDIUM_TURQUOISE=0x48D1CC;
export const MEDIUM_VIOLET_RED=0xC71585;
export const MIDNIGHT_BLUE=0x191970;
export const MINT_CREAM=0xF5FFFA;
export const MISTY_ROSE=0xFFE4E1;
export const MOCCASIN=0xFFE4B5;
export const NAVAJO_WHITE=0xFFDEAD;
export const NAVY=0x000080;
export const OLD_LACE=0xFDF5E6;
export const OLIVE=0x808000;
export const OLIVE_DRAB=0x6B8E23;
export const ORANGE=0xFFA500;
export const ORANGE_RED=0xFF4500;
export const ORCHID=0xDA70D6;
export const PALE_GOLDENROD=0xEEE8AA;
export const PALE_GREEN=0x98FB98;
export const PALE_TURQUOISE=0xAFEEEE;
export const PALE_VIOLET_RED=0xDB7093;
export const PAPAYA_WHIP=0xFFEFD5;
export const PEACH_PUFF=0xFFDAB9;
export const PERU=0xCD853F;
export const PINK=0xFFC0CB;
export const PLUM=0xDDA0DD;
export const POWDER_BLUE=0xB0E0E6;
export const PURPLE=0x800080;
export const REBECCA_PURPLE=0x663399;
export const RED=0xFF0000;
export const ROSY_BROWN=0xBC8F8F;
export const ROYAL_BLUE=0x4169E1;
export const SADDLE_BROWN=0x8B4513;
export const SALMON=0xFA8072;
export const SANDY_BROWN=0xF4A460;
export const SEA_GREEN=0x2E8B57;
export const SEASHELL=0xFFF5EE;
export const SIENNA=0xA0522D;
export const SILVER=0xC0C0C0;
export const SKY_BLUE=0x87CEEB;
export const SLATE_BLUE=0x6A5ACD;
export const SLATE_GRAY=0x708090;
export const SNOW=0xFFFAFA;
export const SPRING_GREEN=0x00FF7F;
export const STEEL_BLUE=0x4682B4;
export const TAN=0xD2B48C;
export const TEAL=0x008080;
export const THISTLE=0xD8BFD8;
export const TOMATO=0xFF6347;
export const TURQUOISE=0x40E0D0;
export const VIOLET=0xEE82EE;
export const WHEAT=0xF5DEB3;
export const WHITE=0xFFFFFF;
export const WHITE_SMOKE=0xF5F5F5;
export const YELLOW=0xFFFF00;
export const YELLOW_GREEN=0x9ACD32;


export const SOP_NOP=0;
export const SOP_FIRST=1;
export const SOP_UPDATE=2;
export const SOP_NODE=3;
export const SOP_CALL=4;
export const SOP_QUIT=5;
export const SOP_END_DELTA=6;
export const SOP_CHUNK_START=7;
export const SOP_CHUNK_END=8;
export const SOP_BAD_REQ=18;
export const SOP_BAD_AUTH=19;





export const GIANT_WIDTH=20000;


export const EF_VAL_IS_U=0x0001;
export const EF_VAL_IS_ERR=0x0002;
export const EF_VAL_IS_NUM=0x0004;
export const EF_VAL_IS_STR=0x0008;
export const EF_VAL_IS_IMAGE=0x0010;
export const EF_VAL_IS_FUNC=0x0020;
export const EF_VAL_IS_PATH=0x0040;
export const EF_VAL_IS_MEAS=0x0080;
export const EF_VAL_IS_SOUND=0x0100;
export const EF_VAL_IS_GRAD=0x0200;
export const EF_VAL_IS_BITS=0x0400;
export const EF_VAL_IS_BYTES=0x0800;
export const EF_VAL_IS_COLOR=0x1000;
export const EF_VAL_IS_DATE=0x2000;
export const EF_VAL_IS_VIDEO=0x4000;
export const EF_VAL_IS_OBJECT=0x8000;


export const EF_IS_DIRTY=0x00010000;
export const EF_IS_DERIVED=0x00020000;


export const NF_STATEFUL=0x00040000;


export const NF_UNSORTED=0x00080000;


export const NF_READONLY=0x00100000;


export const NF_LOGGED=0x00200000;


export const NF_SERVER=0x00400000;




export const EF_DIRTY_OR_DERIVED=EF_IS_DIRTY|EF_IS_DERIVED;


export const TYPES_WHERE_U_NUM=EF_VAL_IS_NUM


export const EF_NUM_TYPES=EF_VAL_IS_U|EF_VAL_IS_ERR|EF_VAL_IS_NUM;
export const EF_MASK_TYPE=0x0000FFFF;
export const EF_CLEAR_TYPE=0xFFFF0000;


export const WINDOW_BORDER=2.5;
export const COLOR_WIN_BORDER=0xb3b3b3;

export const ONE_72=1/72;
export const ONE_25=1/25.4;

export const EMPTY_RECT=new Rectangle(-1000,-1000,0,0);


export var g_enum_ss=[];



export const al=FIRST_ENUM+1;
g_enum_ss[FIRST_ENUM+1]="al";
export const pt=FIRST_ENUM+2;
g_enum_ss[FIRST_ENUM+2]="pt";
export const px=FIRST_ENUM+3;
g_enum_ss[FIRST_ENUM+3]="px";


g_enum_ss[9007192689371859]="find_len";
g_enum_ss[9007194157790523]="a_find";
g_enum_ss[9007191603303728]="find_start";
g_enum_ss[9007191556776230]="str";


export let time_launched;
export let now;
export let now_raw;

export let elapsed;
export let elapsed_raw;



export let g_time_scale=1.0;
export let g_era_dilated;
export let g_era_raw;







export let monitored_drawf;
export const monitored_init_F=new a_function("std","monitored_init",monitored_init);




export const BIG_END=9007190873765313;g_enum_ss[9007190873765313]="BIG_END";
export const BLENDMODE_ADD=9007193208486009;g_enum_ss[9007193208486009]="BLENDMODE_ADD";
export const BLENDMODE_ALPHA=9007190010329114;g_enum_ss[9007190010329114]="BLENDMODE_ALPHA";
export const BLENDMODE_DARKEN=9007190800059581;g_enum_ss[9007190800059581]="BLENDMODE_DARKEN";
export const BLENDMODE_DIFFERENCE=9007191076336153;g_enum_ss[9007191076336153]="BLENDMODE_DIFFERENCE";
export const BLENDMODE_ERASE=9007192198043080;g_enum_ss[9007192198043080]="BLENDMODE_ERASE";
export const BLENDMODE_HARDLIGHT=9007190801031541;g_enum_ss[9007190801031541]="BLENDMODE_HARDLIGHT";
export const BLENDMODE_INVERT=9007194240042666;g_enum_ss[9007194240042666]="BLENDMODE_INVERT";
export const BLENDMODE_LAYER=9007191933818223;g_enum_ss[9007191933818223]="BLENDMODE_LAYER";
export const BLENDMODE_LIGHTEN=9007190296892853;g_enum_ss[9007190296892853]="BLENDMODE_LIGHTEN";
export const BLENDMODE_MULTIPLY=9007194046246514;g_enum_ss[9007194046246514]="BLENDMODE_MULTIPLY";
export const BLENDMODE_NORMAL=9007193065834577;g_enum_ss[9007193065834577]="BLENDMODE_NORMAL";
export const BLENDMODE_OVERLAY=9007190118029762;g_enum_ss[9007190118029762]="BLENDMODE_OVERLAY";
export const BLENDMODE_SCREEN=9007191051024702;g_enum_ss[9007191051024702]="BLENDMODE_SCREEN";
export const BLENDMODE_SHADER=9007190653012907;g_enum_ss[9007190653012907]="BLENDMODE_SHADER";
export const BLENDMODE_SUBTRACT=9007191223567846;g_enum_ss[9007191223567846]="BLENDMODE_SUBTRACT";
export const BODY_BINARY=9007190977491561;g_enum_ss[9007190977491561]="BODY_BINARY";
export const BODY_HTML=9007192304658121;g_enum_ss[9007192304658121]="BODY_HTML";
export const BODY_JSON=9007193587149102;g_enum_ss[9007193587149102]="BODY_JSON";
export const BODY_PLAIN=9007194200689272;g_enum_ss[9007194200689272]="BODY_PLAIN";
export const CAP_BUTT=9007192063538927;g_enum_ss[9007192063538927]="CAP_BUTT";
export const CAP_ROUND=9007191671167298;g_enum_ss[9007191671167298]="CAP_ROUND";
export const CAP_SQUARE=9007190564166513;g_enum_ss[9007190564166513]="CAP_SQUARE";
export const CENTER=9007192241868086;g_enum_ss[9007192241868086]="CENTER";
export const CPU_ARM=9007190976469578;g_enum_ss[9007190976469578]="CPU_ARM";
export const CPU_INTEL=9007193832875584;g_enum_ss[9007193832875584]="CPU_INTEL";
export const CSTATUS_CONNECTED=9007191710958010;g_enum_ss[9007191710958010]="CSTATUS_CONNECTED";
export const CSTATUS_NO_ANSWER=9007194263818523;g_enum_ss[9007194263818523]="CSTATUS_NO_ANSWER";
export const CSTATUS_NO_AUTH=9007190790542995;g_enum_ss[9007190790542995]="CSTATUS_NO_AUTH";
export const CSTATUS_WAITING=9007191192687714;g_enum_ss[9007191192687714]="CSTATUS_WAITING";
export const CURRENCY_AUD=9007192475718373;g_enum_ss[9007192475718373]="AUD";
export const CURRENCY_BGN=9007193705641312;g_enum_ss[9007193705641312]="BGN";
export const CURRENCY_BRL=9007193167036291;g_enum_ss[9007193167036291]="BRL";
export const CURRENCY_CAD=9007191208151055;g_enum_ss[9007191208151055]="CAD";
export const CURRENCY_CHF=9007191743607840;g_enum_ss[9007191743607840]="CHF";
export const CURRENCY_CNY=9007191123130127;g_enum_ss[9007191123130127]="CNY";
export const CURRENCY_CZK=9007192366645409;g_enum_ss[9007192366645409]="CZK";
export const CURRENCY_DKK=9007191281604017;g_enum_ss[9007191281604017]="DKK";
export const CURRENCY_EUR=9007194034713791;g_enum_ss[9007194034713791]="€";
export const CURRENCY_GBP=9007193328217132;g_enum_ss[9007193328217132]="£";
export const CURRENCY_HKD=9007193272004328;g_enum_ss[9007193272004328]="HKD";
export const CURRENCY_HRK=9007193254093876;g_enum_ss[9007193254093876]="HRK";
export const CURRENCY_HUF=9007193303882280;g_enum_ss[9007193303882280]="HUF";
export const CURRENCY_IDR=9007190070295358;g_enum_ss[9007190070295358]="IDR";
export const CURRENCY_ILS=9007194112318441;g_enum_ss[9007194112318441]="ILS";
export const CURRENCY_INR=9007191008856284;g_enum_ss[9007191008856284]="INR";
export const CURRENCY_JPY=9007191289355106;g_enum_ss[9007191289355106]="¥";
export const CURRENCY_KRW=9007190316430293;g_enum_ss[9007190316430293]="KRW";
export const CURRENCY_MXN=9007191000215538;g_enum_ss[9007191000215538]="MXN";
export const CURRENCY_MYR=9007191369470251;g_enum_ss[9007191369470251]="MYR";
export const CURRENCY_NOK=9007192131762283;g_enum_ss[9007192131762283]="NOK";
export const CURRENCY_NZD=9007192850095591;g_enum_ss[9007192850095591]="NZD";
export const CURRENCY_PHP=9007193986204375;g_enum_ss[9007193986204375]="PHP";
export const CURRENCY_PLN=9007194086281709;g_enum_ss[9007194086281709]="PLN";
export const CURRENCY_RON=9007192893301880;g_enum_ss[9007192893301880]="RON";
export const CURRENCY_RUB=9007191890293502;g_enum_ss[9007191890293502]="RUB";
export const CURRENCY_SEK=9007191131987602;g_enum_ss[9007191131987602]="SEK";
export const CURRENCY_SGD=9007194201894521;g_enum_ss[9007194201894521]="SGD";
export const CURRENCY_THB=9007190622087537;g_enum_ss[9007190622087537]="THB";
export const CURRENCY_TRY=9007190771408822;g_enum_ss[9007190771408822]="TRY";
export const CURRENCY_USD=9007191785707743;g_enum_ss[9007191785707743]="$";
export const CURRENCY_ZAR=9007190538585226;g_enum_ss[9007190538585226]="ZAR";
export const CURS_ALIAS=9007190207080347;g_enum_ss[9007190207080347]="CURS_ALIAS";
export const CURS_ARROW=9007193647841682;g_enum_ss[9007193647841682]="CURS_ARROW";
export const CURS_CELL=9007193083265441;g_enum_ss[9007193083265441]="CURS_CELL";
export const CURS_CONTEXT=9007191905619856;g_enum_ss[9007191905619856]="CURS_CONTEXT";
export const CURS_COPY=9007191552930064;g_enum_ss[9007191552930064]="CURS_COPY";
export const CURS_CROSSHAIR=9007193274530039;g_enum_ss[9007193274530039]="CURS_CROSSHAIR";
export const CURS_CUSTOM=9007190161810882;g_enum_ss[9007190161810882]="CURS_CUSTOM";
export const CURS_DIAG_LEFT=9007190666559294;g_enum_ss[9007190666559294]="CURS_DIAG_LEFT";
export const CURS_DIAG_RIGHT=9007193324379315;g_enum_ss[9007193324379315]="CURS_DIAG_RIGHT";
export const CURS_FINGER=9007192070383776;g_enum_ss[9007192070383776]="CURS_FINGER";
export const CURS_GRABBING=9007193359110701;g_enum_ss[9007193359110701]="CURS_GRABBING";
export const CURS_HAND=9007191510587780;g_enum_ss[9007191510587780]="CURS_HAND";
export const CURS_HIDE=9007193882670433;g_enum_ss[9007193882670433]="CURS_HIDE";
export const CURS_IBEAM=9007192946793023;g_enum_ss[9007192946793023]="CURS_IBEAM";
export const CURS_MOVE=9007192417875656;g_enum_ss[9007192417875656]="CURS_MOVE";
export const CURS_NOT=9007190841203262;g_enum_ss[9007190841203262]="CURS_NOT";
export const CURS_QUESTION=9007190982721729;g_enum_ss[9007190982721729]="CURS_QUESTION";
export const CURS_RESIZE_COL=9007192794129356;g_enum_ss[9007192794129356]="CURS_RESIZE_COL";
export const CURS_RESIZE_E=9007190282529329;g_enum_ss[9007190282529329]="CURS_RESIZE_E";
export const CURS_RESIZE_N=9007190097975520;g_enum_ss[9007190097975520]="CURS_RESIZE_N";
export const CURS_RESIZE_NE=9007193597645759;g_enum_ss[9007193597645759]="CURS_RESIZE_NE";
export const CURS_RESIZE_NW=9007193899642901;g_enum_ss[9007193899642901]="CURS_RESIZE_NW";
export const CURS_RESIZE_ROW=9007191394511618;g_enum_ss[9007191394511618]="CURS_RESIZE_ROW";
export const CURS_RESIZE_S=9007190584526471;g_enum_ss[9007190584526471]="CURS_RESIZE_S";
export const CURS_RESIZE_SE=9007192595770214;g_enum_ss[9007192595770214]="CURS_RESIZE_SE";
export const CURS_RESIZE_SW=9007192830656880;g_enum_ss[9007192830656880]="CURS_RESIZE_SW";
export const CURS_RESIZE_W=9007190517415995;g_enum_ss[9007190517415995]="CURS_RESIZE_W";
export const CURS_WAIT=9007192831767908;g_enum_ss[9007192831767908]="CURS_WAIT";
export const CURS_ZOOM_IN=9007193787378752;g_enum_ss[9007193787378752]="CURS_ZOOM_IN";
export const CURS_ZOOM_OUT=9007192468555045;g_enum_ss[9007192468555045]="CURS_ZOOM_OUT";
export const DRAW_ROW_BACK=9007191892658772;g_enum_ss[9007191892658772]="DRAW_ROW_BACK";
export const ENCODE_BINARY=9007192110016779;g_enum_ss[9007192110016779]="ENCODE_BINARY";
export const ENCODE_FORM_URL=9007190865080266;g_enum_ss[9007190865080266]="ENCODE_FORM_URL";
export const ENCODE_MULTIPART=9007192496651046;g_enum_ss[9007192496651046]="ENCODE_MULTIPART";
export const ENCODE_PLAIN=9007194097808478;g_enum_ss[9007194097808478]="ENCODE_PLAIN";
export const EV_ALT_TAP=9007194105015026;g_enum_ss[9007194105015026]="EV_ALT_TAP";
export const EV_ANIM_BLOCK=9007191727908086;g_enum_ss[9007191727908086]="EV_ANIM_BLOCK";
export const EV_ANIM_CURVE=9007194023992688;g_enum_ss[9007194023992688]="EV_ANIM_CURVE";
export const EV_ANIM_SPRITE=9007193000576696;g_enum_ss[9007193000576696]="EV_ANIM_SPRITE";
export const EV_ANIM_VAL=9007190546483344;g_enum_ss[9007190546483344]="EV_ANIM_VAL";
export const EV_DOUBLE_TAP=9007193618146078;g_enum_ss[9007193618146078]="EV_DOUBLE_TAP";
export const EV_DRAG_BEGIN=9007193246022061;g_enum_ss[9007193246022061]="EV_DRAG_BEGIN";
export const EV_DRAG_END=9007193849965437;g_enum_ss[9007193849965437]="EV_DRAG_END";
export const EV_DRAG_MOVE=9007192330010565;g_enum_ss[9007192330010565]="EV_DRAG_MOVE";
export const EV_DRAW=9007191483458599;g_enum_ss[9007191483458599]="EV_DRAW";
export const EV_GEST_BEGIN=9007194179688080;g_enum_ss[9007194179688080]="EV_GEST_BEGIN";
export const EV_GEST_END=9007192253491484;g_enum_ss[9007192253491484]="EV_GEST_END";
export const EV_HOLD=9007192309436500;g_enum_ss[9007192309436500]="EV_HOLD";
export const EV_HOVER=9007191105955681;g_enum_ss[9007191105955681]="EV_HOVER";
export const EV_INIT=9007193810427111;g_enum_ss[9007193810427111]="EV_INIT";
export const EV_KEYBOARD=9007192323348144;g_enum_ss[9007192323348144]="EV_KEYBOARD";
export const EV_NOP=9007194138818458;g_enum_ss[9007194138818458]="EV_NOP";
export const EV_RESIZE=9007191878931189;g_enum_ss[9007191878931189]="EV_RESIZE";
export const EV_ROTATE=9007192337726958;g_enum_ss[9007192337726958]="EV_ROTATE";
export const EV_STOP=9007191063356489;g_enum_ss[9007191063356489]="EV_STOP";
export const EV_SWIPE=9007194294477221;g_enum_ss[9007194294477221]="EV_SWIPE";
export const EV_TAP=9007192665263286;g_enum_ss[9007192665263286]="EV_TAP";
export const EV_TCP_CLOSE=9007192646676527;g_enum_ss[9007192646676527]="EV_TCP_CLOSE";
export const EV_TCP_CONNECTED=9007190110803356;g_enum_ss[9007190110803356]="EV_TCP_CONNECTED";
export const EV_TCP_DATA=9007193000086769;g_enum_ss[9007193000086769]="EV_TCP_DATA";
export const EV_TCP_ERR=9007191025146552;g_enum_ss[9007191025146552]="EV_TCP_ERR";
export const EV_TIMER=9007190083598342;g_enum_ss[9007190083598342]="EV_TIMER";
export const EV_TRACK_GRID=9007193638870201;g_enum_ss[9007193638870201]="EV_TRACK_GRID";
export const EV_TRACK_PLAIN=9007192772190303;g_enum_ss[9007192772190303]="EV_TRACK_PLAIN";
export const EV_TRACK_TABLE=9007194034012919;g_enum_ss[9007194034012919]="EV_TRACK_TABLE";
export const EV_ZOOM=9007191052370350;g_enum_ss[9007191052370350]="EV_ZOOM";
export const F_air_version=9007192398224747;g_enum_ss[9007192398224747]="air_version";
export const F_app_version=9007193701356128;g_enum_ss[9007193701356128]="app_version";
export const F_args=9007190339627053;g_enum_ss[9007190339627053]="args";
export const F_base_to_unit=9007191635159450;g_enum_ss[9007191635159450]="base_to_unit";
export const F_bchildren=9007191524061537;g_enum_ss[9007191524061537]="bchildren";
export const F_bdepth=9007192705851919;g_enum_ss[9007192705851919]="bdepth";
export const F_bexpanded=9007191727747299;g_enum_ss[9007191727747299]="bexpanded";
export const F_bkind=9007194173052024;g_enum_ss[9007194173052024]="bkind";
export const F_bname=9007192768869493;g_enum_ss[9007192768869493]="bname";
export const F_bobject=9007194017393109;g_enum_ss[9007194017393109]="bobject";
export const F_box=9007190237722809;g_enum_ss[9007190237722809]="box";
export const F_btracks=9007191843782978;g_enum_ss[9007191843782978]="btracks";
export const F_callback=9007193913055147;g_enum_ss[9007193913055147]="callback";
export const F_cell_id=9007191930494972;g_enum_ss[9007191930494972]="cell_id";
export const F_cell_seq=9007190189818832;g_enum_ss[9007190189818832]="cell_seq";
export const F_cell=9007192739192540;g_enum_ss[9007192739192540]="cell";
export const F_client_bytes_in=9007192330024275;g_enum_ss[9007192330024275]="client_bytes_in";
export const F_client_bytes_out=9007193907169216;g_enum_ss[9007193907169216]="client_bytes_out";
export const F_client_channel=9007190900478027;g_enum_ss[9007190900478027]="client_channel";
export const F_client_status=9007191092912066;g_enum_ss[9007191092912066]="client_status";
export const F_cpu_kind=9007192696949221;g_enum_ss[9007192696949221]="cpu_kind";
export const F_cursor_changed=9007191768871061;g_enum_ss[9007191768871061]="cursor_changed";
export const F_date_city=9007190344604278;g_enum_ss[9007190344604278]="date_city";
export const F_date_day=9007193811616089;g_enum_ss[9007193811616089]="date_day";
export const F_date_hour=9007191709337003;g_enum_ss[9007191709337003]="date_hour";
export const F_date_minute=9007190784173965;g_enum_ss[9007190784173965]="date_minute";
export const F_date_month=9007193351461641;g_enum_ss[9007193351461641]="date_month";
export const F_date_second=9007192615114217;g_enum_ss[9007192615114217]="date_second";
export const F_date_year=9007190473901776;g_enum_ss[9007190473901776]="date_year";
export const F_db_name=9007192007664828;g_enum_ss[9007192007664828]="db_name";
export const F_db_stores=9007190878152881;g_enum_ss[9007190878152881]="db_stores";
export const F_db_ver=9007192803634664;g_enum_ss[9007192803634664]="db_ver";
export const F_evkind=9007193830023889;g_enum_ss[9007193830023889]="evkind";
export const F_fam_base=9007192510327428;g_enum_ss[9007192510327428]="fam_base";
export const F_fam_dim=9007191144904389;g_enum_ss[9007191144904389]="fam_dim";
export const F_fam_nonlinear=9007192973195881;g_enum_ss[9007192973195881]="fam_nonlinear";
export const F_fam_units=9007193864233088;g_enum_ss[9007193864233088]="fam_units";
export const F_form_fields=9007191335064018;g_enum_ss[9007191335064018]="form_fields";
export const F_form_name=9007194241974128;g_enum_ss[9007194241974128]="form_name";
export const F_form_ok=9007190952352069;g_enum_ss[9007190952352069]="form_ok";
export const F_fsm_state=9007191932088960;g_enum_ss[9007191932088960]="fsm_state";
export const F_full_screen=9007193702789330;g_enum_ss[9007193702789330]="full_screen";
export const F_global_x=9007193122768448;g_enum_ss[9007193122768448]="global_x";
export const F_global_y=9007193139546067;g_enum_ss[9007193139546067]="global_y";
export const F_grad_angle=9007191342121240;g_enum_ss[9007191342121240]="grad_angle";
export const F_grad_centerx=9007192703286708;g_enum_ss[9007192703286708]="grad_centerx";
export const F_grad_centery=9007192720064327;g_enum_ss[9007192720064327]="grad_centery";
export const F_grad_focusx=9007190751560561;g_enum_ss[9007190751560561]="grad_focusx";
export const F_grad_focusy=9007190734782942;g_enum_ss[9007190734782942]="grad_focusy";
export const F_grad_radius_inner=9007192092005572;g_enum_ss[9007192092005572]="grad_radius_inner";
export const F_grad_radius_outer=9007192096884511;g_enum_ss[9007192096884511]="grad_radius_outer";
export const F_grad_shape=9007191080998438;g_enum_ss[9007191080998438]="grad_shape";
export const F_grad_stops=9007191284959010;g_enum_ss[9007191284959010]="grad_stops";
export const F_grad_sysobj=9007190591095843;g_enum_ss[9007190591095843]="grad_sysobj";
export const F_hardware_id=9007194078519856;g_enum_ss[9007194078519856]="hardware_id";
export const F_height=9007191065112171;g_enum_ss[9007191065112171]="height";
export const F_hist_absorber=9007190177249779;g_enum_ss[9007190177249779]="hist_absorber";
export const F_hist_cell_cum=9007192177330549;g_enum_ss[9007192177330549]="hist_cell_cum";
export const F_hist_cell_id=9007192249155495;g_enum_ss[9007192249155495]="hist_cell_id";
export const F_hist_cell=9007193573752369;g_enum_ss[9007193573752369]="hist_cell";
export const F_hist_rawx=9007190242492711;g_enum_ss[9007190242492711]="hist_rawx";
export const F_http_body_type=9007193353932454;g_enum_ss[9007193353932454]="http_body_type";
export const F_http_body=9007191020361357;g_enum_ss[9007191020361357]="http_body";
export const F_http_bytes_now=9007192005332123;g_enum_ss[9007192005332123]="http_bytes_now";
export const F_http_bytes_total=9007193563310425;g_enum_ss[9007193563310425]="http_bytes_total";
export const F_http_headers=9007192406940129;g_enum_ss[9007192406940129]="http_headers";
export const F_http_state=9007191125370686;g_enum_ss[9007191125370686]="http_state";
export const F_http_status=9007193847231911;g_enum_ss[9007193847231911]="http_status";
export const F_http_sysobj=9007192115372715;g_enum_ss[9007192115372715]="http_sysobj";
export const F_hue=9007192260774534;g_enum_ss[9007192260774534]="hue";
export const F_in_autofill=9007192741706158;g_enum_ss[9007192741706158]="in_autofill";
export const F_in_errmsg=9007192770646744;g_enum_ss[9007192770646744]="in_errmsg";
export const F_in_hint=9007193269270537;g_enum_ss[9007193269270537]="in_hint";
export const F_in_internal=9007190315372209;g_enum_ss[9007190315372209]="in_internal";
export const F_in_keyboard=9007193098511693;g_enum_ss[9007193098511693]="in_keyboard";
export const F_in_kind=9007191640276818;g_enum_ss[9007191640276818]="in_kind";
export const F_in_label=9007194015078766;g_enum_ss[9007194015078766]="in_label";
export const F_in_maxlen=9007192681926341;g_enum_ss[9007192681926341]="in_maxlen";
export const F_in_maxval=9007192141470485;g_enum_ss[9007192141470485]="in_maxval";
export const F_in_minlen=9007191103869283;g_enum_ss[9007191103869283]="in_minlen";
export const F_in_minval=9007191338915331;g_enum_ss[9007191338915331]="in_minval";
export const F_in_name=9007192892602323;g_enum_ss[9007192892602323]="in_name";
export const F_in_pattern=9007190727149130;g_enum_ss[9007190727149130]="in_pattern";
export const F_in_step=9007192575167474;g_enum_ss[9007192575167474]="in_step";
export const F_in_tip=9007190633928637;g_enum_ss[9007190633928637]="in_tip";
export const F_in_validator=9007194273742238;g_enum_ss[9007194273742238]="in_validator";
export const F_in_value=9007190252935937;g_enum_ss[9007190252935937]="in_value";
export const F_index_multi=9007193267331694;g_enum_ss[9007193267331694]="index_multi";
export const F_index_name=9007191391597730;g_enum_ss[9007191391597730]="index_name";
export const F_index_unique=9007193945027562;g_enum_ss[9007193945027562]="index_unique";
export const F_is_alt=9007190005667004;g_enum_ss[9007190005667004]="is_alt";
export const F_is_cmd=9007193687020619;g_enum_ss[9007193687020619]="is_cmd";
export const F_is_connected=9007193609258288;g_enum_ss[9007193609258288]="is_connected";
export const F_is_ctrl=9007191919774788;g_enum_ss[9007191919774788]="is_ctrl";
export const F_is_disabled=9007194088190437;g_enum_ss[9007194088190437]="is_disabled";
export const F_is_inline_validated=9007192668270529;g_enum_ss[9007192668270529]="is_inline_validated";
export const F_is_ok=9007193523919503;g_enum_ss[9007193523919503]="is_ok";
export const F_is_required=9007190137630720;g_enum_ss[9007190137630720]="is_required";
export const F_is_shift=9007193510209703;g_enum_ss[9007193510209703]="is_shift";
export const F_is_white_stripped=9007192472504784;g_enum_ss[9007192472504784]="is_white_stripped";
export const F_keycode=9007192424042526;g_enum_ss[9007192424042526]="keycode";
export const F_left=9007191706667889;g_enum_ss[9007191706667889]="left";
export const F_link_data=9007193149612877;g_enum_ss[9007193149612877]="link_data";
export const F_link_local_port=9007191183148878;g_enum_ss[9007191183148878]="link_local_port";
export const F_link_remote_port=9007192625502279;g_enum_ss[9007192625502279]="link_remote_port";
export const F_link_socket=9007191260533300;g_enum_ss[9007191260533300]="link_socket";
export const F_link_state=9007194263281102;g_enum_ss[9007194263281102]="link_state";
export const F_link_timeout=9007193503325680;g_enum_ss[9007193503325680]="link_timeout";
export const F_link_url=9007190416315206;g_enum_ss[9007190416315206]="link_url";
export const F_major_steps=9007193823541613;g_enum_ss[9007193823541613]="major_steps";
export const F_major_stepx=9007193638987804;g_enum_ss[9007193638987804]="major_stepx";
export const F_micro_steps=9007191607397904;g_enum_ss[9007191607397904]="micro_steps";
export const F_mod_funcs=9007191395250568;g_enum_ss[9007191395250568]="mod_funcs";
export const F_mod_vars=9007193863432299;g_enum_ss[9007193863432299]="mod_vars";
export const F_monitor_active=9007191310033365;g_enum_ss[9007191310033365]="monitor_active";
export const F_ms_dest=9007192790335809;g_enum_ss[9007192790335809]="ms_dest";
export const F_ms_funcname=9007191172220904;g_enum_ss[9007191172220904]="ms_funcname";
export const F_ms_kind=9007191809881671;g_enum_ss[9007191809881671]="ms_kind";
export const F_ms_module=9007192387639201;g_enum_ss[9007192387639201]="ms_module";
export const F_ms_newval=9007191501268188;g_enum_ss[9007191501268188]="ms_newval";
export const F_ms_where=9007194143747484;g_enum_ss[9007194143747484]="ms_where";
export const F_ncells=9007190572849627;g_enum_ss[9007190572849627]="ncells";
export const F_notch_height=9007191198576528;g_enum_ss[9007191198576528]="notch_height";
export const F_notch_width=9007192438172481;g_enum_ss[9007192438172481]="notch_width";
export const F_opt_children=9007191074573613;g_enum_ss[9007191074573613]="opt_children";
export const F_opt_disabled=9007190594341658;g_enum_ss[9007190594341658]="opt_disabled";
export const F_opt_label=9007191061925592;g_enum_ss[9007191061925592]="opt_label";
export const F_opt_selected=9007192931988523;g_enum_ss[9007192931988523]="opt_selected";
export const F_opt_val=9007191226420945;g_enum_ss[9007191226420945]="opt_val";
export const F_os_kind=9007192093146965;g_enum_ss[9007192093146965]="os_kind";
export const F_os_language=9007191811562369;g_enum_ss[9007191811562369]="os_language";
export const F_os_modal=9007191486739992;g_enum_ss[9007191486739992]="os_modal";
export const F_os_version=9007191114852513;g_enum_ss[9007191114852513]="os_version";
export const F_pending_delay=9007190405524235;g_enum_ss[9007190405524235]="pending_delay";
export const F_pending_interval=9007192438173725;g_enum_ss[9007192438173725]="pending_interval";
export const F_pending_limit=9007190067147759;g_enum_ss[9007190067147759]="pending_limit";
export const F_pending_parms=9007192550771863;g_enum_ss[9007192550771863]="pending_parms";
export const F_pending_prereq=9007193690019779;g_enum_ss[9007193690019779]="pending_prereq";
export const F_pending_targtime=9007192481613845;g_enum_ss[9007192481613845]="pending_targtime";
export const F_polar_angle=9007193998710740;g_enum_ss[9007193998710740]="polar_angle";
export const F_polar_radius=9007192867428455;g_enum_ss[9007192867428455]="polar_radius";
export const F_row_kind=9007194217458287;g_enum_ss[9007194217458287]="row_kind";
export const F_s_big_step_size=9007191004530853;g_enum_ss[9007191004530853]="s_big_step_size";
export const F_s_block_id=9007194173043653;g_enum_ss[9007194173043653]="s_block_id";
export const F_s_content_size=9007191211659509;g_enum_ss[9007191211659509]="s_content_size";
export const F_s_position=9007193141830829;g_enum_ss[9007193141830829]="s_position";
export const F_s_step_size=9007190382695348;g_enum_ss[9007190382695348]="s_step_size";
export const F_s_window_size=9007191764866610;g_enum_ss[9007191764866610]="s_window_size";
export const F_saturation=9007192754175272;g_enum_ss[9007192754175272]="saturation";
export const F_screen_dpi=9007190692964076;g_enum_ss[9007190692964076]="screen_dpi";
export const F_screen_horz=9007191043077712;g_enum_ss[9007191043077712]="screen_horz";
export const F_screen_vert=9007191931743462;g_enum_ss[9007191931743462]="screen_vert";
export const F_store_autoinc=9007191243807719;g_enum_ss[9007191243807719]="store_autoinc";
export const F_store_indices=9007190832054383;g_enum_ss[9007190832054383]="store_indices";
export const F_store_name=9007191598807537;g_enum_ss[9007191598807537]="store_name";
export const F_top=9007190493896459;g_enum_ss[9007190493896459]="top";
export const F_touch_id=9007193790632677;g_enum_ss[9007193790632677]="touch_id";
export const F_touch_kind=9007191578715210;g_enum_ss[9007191578715210]="touch_kind";
export const F_unicode=9007193563866243;g_enum_ss[9007193563866243]="unicode";
export const F_unit_factor=9007193027031068;g_enum_ss[9007193027031068]="unit_factor";
export const F_unit_to_base=9007191891603742;g_enum_ss[9007191891603742]="unit_to_base";
export const F_v_data_xy=9007191199051267;g_enum_ss[9007191199051267]="v_data_xy";
export const F_v_dim=9007190026105015;g_enum_ss[9007190026105015]="v_dim";
export const F_v_expand=9007193999888055;g_enum_ss[9007193999888055]="v_expand";
export const F_v_fields=9007192290630478;g_enum_ss[9007192290630478]="v_fields";
export const F_v_rec=9007190421380599;g_enum_ss[9007190421380599]="v_rec";
export const F_v_type=9007191532036559;g_enum_ss[9007191532036559]="v_type";
export const F_v_val=9007192076920078;g_enum_ss[9007192076920078]="v_val";
export const F_value=9007190189063009;g_enum_ss[9007190189063009]="value";
export const F_when=9007193511812616;g_enum_ss[9007193511812616]="when";
export const F_width=9007193183634940;g_enum_ss[9007193183634940]="width";
export const F_window_horz=9007192929002776;g_enum_ss[9007192929002776]="window_horz";
export const F_window_vert=9007190230517054;g_enum_ss[9007190230517054]="window_vert";
export const F_x=9007191158315608;g_enum_ss[9007191158315608]="x";
export const F_y=9007191175093227;g_enum_ss[9007191175093227]="y";
export const F_z=9007191191870846;g_enum_ss[9007191191870846]="z";
export const FLUSH=9007190152489735;g_enum_ss[9007190152489735]="FLUSH";
export const FOR_MEASURING=9007193724925426;g_enum_ss[9007193724925426]="FOR_MEASURING";
export const FOR_PRINT=9007194133252538;g_enum_ss[9007194133252538]="FOR_PRINT";
export const FOR_SCREEN=9007193814014199;g_enum_ss[9007193814014199]="FOR_SCREEN";
export const HTML=9007191508915230;g_enum_ss[9007191508915230]="HTML";
export const HTTP_BUSY=9007193089154801;g_enum_ss[9007193089154801]="HTTP_BUSY";
export const HTTP_DONE=9007192780479252;g_enum_ss[9007192780479252]="HTTP_DONE";
export const HTTP_HEADERS=9007190260036102;g_enum_ss[9007190260036102]="HTTP_HEADERS";
export const HTTP_START=9007190514846168;g_enum_ss[9007190514846168]="HTTP_START";
export const HTTP_TIMEOUT=9007193489829839;g_enum_ss[9007193489829839]="HTTP_TIMEOUT";
export const IDE_GROUP=9007190212561997;g_enum_ss[9007190212561997]="IDE_GROUP";
export const IN_COLOR=9007193896084384;g_enum_ss[9007193896084384]="IN_COLOR";
export const IN_DATE=9007191428278593;g_enum_ss[9007191428278593]="IN_DATE";
export const IN_DATETIME=9007191973531512;g_enum_ss[9007191973531512]="IN_DATETIME";
export const IN_EMAIL=9007192515492303;g_enum_ss[9007192515492303]="IN_EMAIL";
export const IN_FILE=9007191289194571;g_enum_ss[9007191289194571]="IN_FILE";
export const IN_MONTH=9007193690478909;g_enum_ss[9007193690478909]="IN_MONTH";
export const IN_NUMBER=9007190066732008;g_enum_ss[9007190066732008]="IN_NUMBER";
export const IN_PASSWORD=9007192691973136;g_enum_ss[9007192691973136]="IN_PASSWORD";
export const IN_RANGE=9007190605840218;g_enum_ss[9007190605840218]="IN_RANGE";
export const IN_TEL=9007192769142178;g_enum_ss[9007192769142178]="IN_TEL";
export const IN_TEXT=9007193396778358;g_enum_ss[9007193396778358]="IN_TEXT";
export const IN_TIME=9007192632800300;g_enum_ss[9007192632800300]="IN_TIME";
export const IN_URL=9007190407697254;g_enum_ss[9007190407697254]="IN_URL";
export const IN_WEEK=9007192669880341;g_enum_ss[9007192669880341]="IN_WEEK";
export const JOINT_BEVEL=9007192746461094;g_enum_ss[9007192746461094]="JOINT_BEVEL";
export const JOINT_MITER=9007190364436411;g_enum_ss[9007190364436411]="JOINT_MITER";
export const JOINT_ROUND=9007192159087542;g_enum_ss[9007192159087542]="JOINT_ROUND";
export const LANG_AMH=9007192671193202;g_enum_ss[9007192671193202]="AMH";
export const LANG_ARA=9007190134477402;g_enum_ss[9007190134477402]="ARA";
export const LANG_BEL=9007190660603587;g_enum_ss[9007190660603587]="BEL";
export const LANG_BEN=9007190694158825;g_enum_ss[9007190694158825]="BEN";
export const LANG_BUL=9007190126382803;g_enum_ss[9007190126382803]="BUL";
export const LANG_BUR=9007190629711373;g_enum_ss[9007190629711373]="BUR";
export const LANG_CAT=9007192050476800;g_enum_ss[9007192050476800]="CAT";
export const LANG_CHS=9007192435229204;g_enum_ss[9007192435229204]="CHS";
export const LANG_CHT=9007192418451585;g_enum_ss[9007192418451585]="CHT";
export const LANG_CRO=9007192501353942;g_enum_ss[9007192501353942]="CRO";
export const LANG_CZE=9007191795414016;g_enum_ss[9007191795414016]="CZE";
export const LANG_DAN=9007192616113231;g_enum_ss[9007192616113231]="DAN";
export const LANG_DEU=9007193304583990;g_enum_ss[9007193304583990]="DEU";
export const LANG_ENG=9007191338197928;g_enum_ss[9007191338197928]="ENG";
export const LANG_ENK=9007191271087452;g_enum_ss[9007191271087452]="ENK";
export const LANG_ESL=9007190619864620;g_enum_ss[9007190619864620]="ESL";
export const LANG_ESS=9007191005749857;g_enum_ss[9007191005749857]="ESE";
export const LANG_FIN=9007191973916929;g_enum_ss[9007191973916929]="FIN";
export const LANG_FRA=9007191317868575;g_enum_ss[9007191317868575]="FRA";
export const LANG_FRC=9007191351423813;g_enum_ss[9007191351423813]="FRC";
export const LANG_GEO=9007190543802441;g_enum_ss[9007190543802441]="GEO";
export const LANG_GRE=9007190641761204;g_enum_ss[9007190641761204]="GRE";
export const LANG_GUJ=9007193275891314;g_enum_ss[9007193275891314]="GUJ";
export const LANG_HEB=9007190185389899;g_enum_ss[9007190185389899]="HEB";
export const LANG_HIN=9007193875671363;g_enum_ss[9007193875671363]="HIN";
export const LANG_HUN=9007193878922767;g_enum_ss[9007193878922767]="HUN";
export const LANG_ICE=9007191223918851;g_enum_ss[9007191223918851]="ICE";
export const LANG_IND=9007190769098757;g_enum_ss[9007190769098757]="IND";
export const LANG_ITA=9007191153998256;g_enum_ss[9007191153998256]="ITA";
export const LANG_JAP=9007193001251419;g_enum_ss[9007193001251419]="JAP";
export const LANG_KOR=9007191762726468;g_enum_ss[9007191762726468]="KOR";
export const LANG_MAL=9007192711284782;g_enum_ss[9007192711284782]="MAL";
export const LANG_MAR=9007192342177164;g_enum_ss[9007192342177164]="MAR";
export const LANG_NED=9007190343662887;g_enum_ss[9007190343662887]="NED";
export const LANG_NOR=9007190042651483;g_enum_ss[9007190042651483]="NOR";
export const LANG_ORI=9007193024574120;g_enum_ss[9007193024574120]="ORI";
export const LANG_PER=9007190032174083;g_enum_ss[9007190032174083]="PER";
export const LANG_POL=9007194228049783;g_enum_ss[9007194228049783]="POL";
export const LANG_POR=9007190033748201;g_enum_ss[9007190033748201]="POR";
export const LANG_PUN=9007190499284391;g_enum_ss[9007190499284391]="PUN";
export const LANG_ROM=9007190414398278;g_enum_ss[9007190414398278]="ROM";
export const LANG_RUS=9007190849630634;g_enum_ss[9007190849630634]="RUS";
export const LANG_SLK=9007191582004616;g_enum_ss[9007191582004616]="SLK";
export const LANG_SLV=9007191263229855;g_enum_ss[9007191263229855]="SLV";
export const LANG_SVE=9007190948692236;g_enum_ss[9007190948692236]="SVE";
export const LANG_TAG=9007192417804164;g_enum_ss[9007192417804164]="TAG";
export const LANG_TAM=9007192317138450;g_enum_ss[9007192317138450]="TAM";
export const LANG_TEL=9007192871388257;g_enum_ss[9007192871388257]="TEL";
export const LANG_THA=9007190973501907;g_enum_ss[9007190973501907]="THA";
export const LANG_TUR=9007192504943663;g_enum_ss[9007192504943663]="TUR";
export const LANG_UKR=9007194159021638;g_enum_ss[9007194159021638]="UKR";
export const LANG_URD=9007194292109757;g_enum_ss[9007194292109757]="URD";
export const LANG_VIE=9007191473610720;g_enum_ss[9007191473610720]="VIE";
export const LEFT=9007190711321898;g_enum_ss[9007190711321898]="LEFT";
export const LINEAR_GRADIENT=9007191222812415;g_enum_ss[9007191222812415]="LINEAR_GRADIENT";
export const LITTLE_END=9007190564557437;g_enum_ss[9007190564557437]="LITTLE_END";
export const LOADER_BUSY=9007191245350440;g_enum_ss[9007191245350440]="LOADER_BUSY";
export const LOADER_FAIL=9007192353485765;g_enum_ss[9007192353485765]="LOADER_FAIL";
export const LOADER_OK=9007191791238983;g_enum_ss[9007191791238983]="LOADER_OK";
export const LOC_ARRAY=9007192251196669;g_enum_ss[9007192251196669]="LOC_ARRAY";
export const LOC_INVERSE=9007192773860012;g_enum_ss[9007192773860012]="LOC_INVERSE";
export const LOC_NOTES=9007191339031389;g_enum_ss[9007191339031389]="LOC_NOTES";
export const LOC_PLAIN=9007192212100724;g_enum_ss[9007192212100724]="LOC_PLAIN";
export const LOC_PLURAL=9007190766928558;g_enum_ss[9007190766928558]="LOC_PLURAL";
export const LOCMAN_CELL_COLOR=9007194049102430;g_enum_ss[9007194049102430]="LOCMAN_CELL_COLOR";
export const LOCMAN_CELL_MSGID=9007194246606917;g_enum_ss[9007194246606917]="LOCMAN_CELL_MSGID";
export const LOCMAN_CELL_SELECTED=9007190264240958;g_enum_ss[9007190264240958]="LOCMAN_CELL_SELECTED";
export const LOCMAN_LANG_TOGGLE=9007192272469839;g_enum_ss[9007192272469839]="LOCMAN_LANG_TOGGLE";
export const LOCMAN_MAPPING=9007191327081308;g_enum_ss[9007191327081308]="LOCMAN_MAPPING";
export const LOCMAN_NMISSING=9007190550673100;g_enum_ss[9007190550673100]="LOCMAN_NMISSING";
export const LOCMAN_NTOT=9007193217620787;g_enum_ss[9007193217620787]="LOCMAN_NTOT";
export const LOCMAN_TOGGLE=9007192047494738;g_enum_ss[9007192047494738]="LOCMAN_TOGGLE";
export const M_std=9007191858773372;g_enum_ss[9007191858773372]="std";
export const MARKDOWN=9007193324346510;g_enum_ss[9007193324346510]="MARKDOWN";
export const MENUBAR_ACTION=9007193537665432;g_enum_ss[9007193537665432]="MENUBAR_ACTION";
export const MENUBAR_APP_ABOUT=9007191529154043;g_enum_ss[9007191529154043]="MENUBAR_APP_ABOUT";
export const MENUBAR_APP_MENU=9007193248907749;g_enum_ss[9007193248907749]="MENUBAR_APP_MENU";
export const MENUBAR_APP_QUIT=9007190363491817;g_enum_ss[9007190363491817]="MENUBAR_APP_QUIT";
export const MENUBAR_CHECKMARK=9007191229884003;g_enum_ss[9007191229884003]="MENUBAR_CHECKMARK";
export const MENUBAR_CODE=9007192602527575;g_enum_ss[9007192602527575]="MENUBAR_CODE";
export const MENUBAR_ENABLED=9007194231244887;g_enum_ss[9007194231244887]="MENUBAR_ENABLED";
export const MENUBAR_HELP_MENU=9007190793541657;g_enum_ss[9007190793541657]="MENUBAR_HELP_MENU";
export const MENUBAR_SHORTCUT=9007191126016036;g_enum_ss[9007191126016036]="MENUBAR_SHORTCUT";
export const MICRO_CLEAR=9007191144004659;g_enum_ss[9007191144004659]="clear";
export const MICRO_DELTA=9007190759967260;g_enum_ss[9007190759967260]="Δ";
export const MICRO_RENUM=9007191665051429;g_enum_ss[9007191665051429]="renum";
export const MICRO_TRUNC=9007191763176072;g_enum_ss[9007191763176072]="trunc";
export const MSG_ENTER=9007194127162657;g_enum_ss[9007194127162657]="MSG_ENTER";
export const MSG_LEAVE=9007190445750868;g_enum_ss[9007190445750868]="MSG_LEAVE";
export const MSG_SOCKET_CLOSED=9007194294890029;g_enum_ss[9007194294890029]="MSG_SOCKET_CLOSED";
export const MSG_SOCKET_CONNECTED=9007191288201976;g_enum_ss[9007191288201976]="MSG_SOCKET_CONNECTED";
export const MSG_SOCKET_DATA=9007191526886701;g_enum_ss[9007191526886701]="MSG_SOCKET_DATA";
export const MSG_SOCKET_ERR=9007193723465476;g_enum_ss[9007193723465476]="MSG_SOCKET_ERR";
export const MSG_SOCKET_TIMEOUT=9007194132300272;g_enum_ss[9007194132300272]="MSG_SOCKET_TIMEOUT";
export const N_Å=9007191603808313;g_enum_ss[9007191603808313]="Å";
export const N_acre=9007190952149985;g_enum_ss[9007190952149985]="acre";
export const N_angstrom=9007190246448751;g_enum_ss[9007190246448751]="angstrom";
export const N_bar=9007193796463405;g_enum_ss[9007193796463405]="bar";
export const N_BTU=9007192621143025;g_enum_ss[9007192621143025]="BTU";
export const N_calorie=9007191281485983;g_enum_ss[9007191281485983]="calorie";
export const N_cm=9007192221800628;g_enum_ss[9007192221800628]="cm";
export const N_cu_ft=9007192145249835;g_enum_ss[9007192145249835]="cu_ft";
export const N_cu_yd=9007192111944860;g_enum_ss[9007192111944860]="cu_yd";
export const N_cup=9007191290327956;g_enum_ss[9007191290327956]="cup";
export const N_day=9007193058995218;g_enum_ss[9007193058995218]="day";
export const N_deg=9007193091858908;g_enum_ss[9007193091858908]="deg";
export const N_degC=9007193146176845;g_enum_ss[9007193146176845]="degC";
export const N_degF=9007193062288750;g_enum_ss[9007193062288750]="degF";
export const N_degK=9007193011955893;g_enum_ss[9007193011955893]="degK";
export const N_dm=9007191685063915;g_enum_ss[9007191685063915]="dm";
export const N_dozen=9007190884823382;g_enum_ss[9007190884823382]="dozen";
export const N_each=9007191641935777;g_enum_ss[9007191641935777]="each";
export const N_ev=9007191869764819;g_enum_ss[9007191869764819]="ev";
export const N_foot=9007190366725068;g_enum_ss[9007190366725068]="foot";
export const N_ft_per_min=9007191338235573;g_enum_ss[9007191338235573]="ft_per_min";
export const N_ft_per_sec=9007190336618084;g_enum_ss[9007190336618084]="ft_per_sec";
export const N_gal=9007190056891976;g_enum_ss[9007190056891976]="gal";
export const N_gigajoule=9007192706527421;g_enum_ss[9007192706527421]="gigajoule";
export const N_gigawatt=9007194053251940;g_enum_ss[9007194053251940]="gigawatt";
export const N_gradian=9007192220160448;g_enum_ss[9007192220160448]="gradian";
export const N_grain=9007190694708491;g_enum_ss[9007190694708491]="grain";
export const N_gram=9007190332562299;g_enum_ss[9007190332562299]="gram";
export const N_gross=9007190031983780;g_enum_ss[9007190031983780]="gross";
export const N_hectare=9007190901376482;g_enum_ss[9007190901376482]="hectare";
export const N_hour=9007191982557918;g_enum_ss[9007191982557918]="hour";
export const N_hp_hour=9007190413896935;g_enum_ss[9007190413896935]="hp_hour";
export const N_hp=9007191733425296;g_enum_ss[9007191733425296]="hp";
export const N_hz=9007191901201486;g_enum_ss[9007191901201486]="hz";
export const N_inch=9007194292702924;g_enum_ss[9007194292702924]="inch";
export const N_joule=9007190187579077;g_enum_ss[9007190187579077]="joule";
export const N_kg=9007192388193722;g_enum_ss[9007192388193722]="kg";
export const N_kilowatt=9007191577018041;g_enum_ss[9007191577018041]="kilowatt";
export const N_km_per_hr=9007192069054991;g_enum_ss[9007192069054991]="km_per_hr";
export const N_km=9007192220417532;g_enum_ss[9007192220417532]="km";
export const N_kw_hr=9007191251924533;g_enum_ss[9007191251924533]="kw_hr";
export const N_l=9007192691155340;g_enum_ss[9007192691155340]="l";
export const N_lbf=9007191086312484;g_enum_ss[9007191086312484]="lbf";
export const N_m_per_min=9007191208978500;g_enum_ss[9007191208978500]="m_per_min";
export const N_m_per_sec=9007192948847325;g_enum_ss[9007192948847325]="m_per_sec";
export const N_m=9007192707932959;g_enum_ss[9007192707932959]="m";
export const N_megawatt=9007192632365214;g_enum_ss[9007192632365214]="megawatt";
export const N_mi_per_hr=9007194188992065;g_enum_ss[9007194188992065]="mi_per_hr";
export const N_microsec=9007191928525241;g_enum_ss[9007191928525241]="microsec";
export const N_mile=9007191320210973;g_enum_ss[9007191320210973]="mile";
export const N_millisec=9007193781384766;g_enum_ss[9007193781384766]="millisec";
export const N_milliwatt=9007193810245337;g_enum_ss[9007193810245337]="milliwatt";
export const N_minute=9007193773574448;g_enum_ss[9007193773574448]="minute";
export const N_ml=9007192304702985;g_enum_ss[9007192304702985]="ml";
export const N_mm=9007192287925366;g_enum_ss[9007192287925366]="mm";
export const N_month=9007192916123494;g_enum_ss[9007192916123494]="month";
export const N_nanosec=9007193653692175;g_enum_ss[9007193653692175]="nanosec";
export const N_nautmile=9007193990526597;g_enum_ss[9007193990526597]="nautmile";
export const N_newton=9007191690160911;g_enum_ss[9007191690160911]="newton";
export const N_nm=9007192288072461;g_enum_ss[9007192288072461]="nm";
export const N_ounce=9007191756739322;g_enum_ss[9007191756739322]="ounce";
export const N_oz=9007192070110509;g_enum_ss[9007192070110509]="oz";
export const N_pascal=9007191181745268;g_enum_ss[9007191181745268]="pascal";
export const N_picosec=9007194026274698;g_enum_ss[9007194026274698]="picosec";
export const N_pint=9007194217411433;g_enum_ss[9007194217411433]="pint";
export const N_pound=9007192986587514;g_enum_ss[9007192986587514]="pound";
export const N_psi=9007193052403416;g_enum_ss[9007193052403416]="psi";
export const N_quart=9007193408590039;g_enum_ss[9007193408590039]="quart";
export const N_radian=9007192509132641;g_enum_ss[9007192509132641]="radian";
export const N_rev=9007192649263141;g_enum_ss[9007192649263141]="rev";
export const N_rpm=9007193071704757;g_enum_ss[9007193071704757]="rpm";
export const N_sec=9007190222245725;g_enum_ss[9007190222245725]="sec";
export const N_slug=9007193082855475;g_enum_ss[9007193082855475]="slug";
export const N_sq_cm=9007190673362901;g_enum_ss[9007190673362901]="sq_cm";
export const N_sq_ft=9007190219822735;g_enum_ss[9007190219822735]="sq_ft";
export const N_sq_in=9007190621352758;g_enum_ss[9007190621352758]="sq_in";
export const N_sq_m=9007190630415248;g_enum_ss[9007190630415248]="sq_m";
export const N_sq_mi=9007190536876283;g_enum_ss[9007190536876283]="sq_mi";
export const N_sq_mm=9007190603986759;g_enum_ss[9007190603986759]="sq_mm";
export const N_sq_yd=9007190182574808;g_enum_ss[9007190182574808]="sq_yd";
export const N_tbsp=9007191098858601;g_enum_ss[9007191098858601]="tbsp";
export const N_therm=9007190733394250;g_enum_ss[9007190733394250]="therm";
export const N_ton=9007191865357341;g_enum_ss[9007191865357341]="ton";
export const N_tonne=9007192984145156;g_enum_ss[9007192984145156]="tonne";
export const N_torr=9007191848403073;g_enum_ss[9007191848403073]="torr";
export const N_troy_ounce=9007194149819487;g_enum_ss[9007194149819487]="troy_ounce";
export const N_troy_pound=9007191827535779;g_enum_ss[9007191827535779]="troy_pound";
export const N_tsp=9007192029882127;g_enum_ss[9007192029882127]="tsp";
export const N_um=9007191754881342;g_enum_ss[9007191754881342]="um";
export const N_watt=9007192594329260;g_enum_ss[9007192594329260]="watt";
export const N_week=9007193847702628;g_enum_ss[9007193847702628]="week";
export const N_yard=9007192331946152;g_enum_ss[9007192331946152]="yard";
export const N_year=9007190800547617;g_enum_ss[9007190800547617]="year";
export const ORDER_BTLR=9007193226990082;g_enum_ss[9007193226990082]="ORDER_BTLR";
export const ORDER_BTRL=9007192523315822;g_enum_ss[9007192523315822]="ORDER_BTRL";
export const ORDER_LRBT=9007192935571706;g_enum_ss[9007192935571706]="ORDER_LRBT";
export const ORDER_LRTB=9007192568038206;g_enum_ss[9007192568038206]="ORDER_LRTB";
export const ORDER_RLBT=9007192915196142;g_enum_ss[9007192915196142]="ORDER_RLBT";
export const ORDER_RLTB=9007192409601906;g_enum_ss[9007192409601906]="ORDER_RLTB";
export const ORDER_TBLR=9007191520272206;g_enum_ss[9007191520272206]="ORDER_TBLR";
export const ORDER_TBRL=9007190678537210;g_enum_ss[9007190678537210]="ORDER_TBRL";
export const ORIENTATION_LANDSCAPE=9007191010543533;g_enum_ss[9007191010543533]="ORIENTATION_LANDSCAPE";
export const ORIENTATION_PORTRAIT=9007191978835675;g_enum_ss[9007191978835675]="ORIENTATION_PORTRAIT";
export const OS_AND=9007193360895287;g_enum_ss[9007193360895287]="OS_AND";
export const OS_IOS=9007191984026743;g_enum_ss[9007191984026743]="OS_IOS";
export const OS_OSX=9007190362755304;g_enum_ss[9007190362755304]="OS_OSX";
export const OS_WEB=9007190607726472;g_enum_ss[9007190607726472]="OS_WEB";
export const OS_WIN=9007191612412136;g_enum_ss[9007191612412136]="OS_WIN";
export const PLAINTEXT=9007192963982350;g_enum_ss[9007192963982350]="PLAINTEXT";
export const PLURAL_DEFAULT=9007191673733887;g_enum_ss[9007191673733887]="PLURAL_DEFAULT";
export const PLURAL_FEW=9007191107244612;g_enum_ss[9007191107244612]="PLURAL_FEW";
export const PLURAL_MANY=9007193773251461;g_enum_ss[9007193773251461]="PLURAL_MANY";
export const PLURAL_ONE=9007193337328970;g_enum_ss[9007193337328970]="PLURAL_ONE";
export const PLURAL_TWO=9007191430822928;g_enum_ss[9007191430822928]="PLURAL_TWO";
export const PLURAL_ZERO=9007191796263072;g_enum_ss[9007191796263072]="PLURAL_ZERO";
export const POP=9007192026394006;g_enum_ss[9007192026394006]="POP";
export const PRINT_FIRST_PAGE=9007191751010783;g_enum_ss[9007191751010783]="PRINT_FIRST_PAGE";
export const PRINT_IS_COLOR=9007192510406563;g_enum_ss[9007192510406563]="PRINT_IS_COLOR";
export const PRINT_LAST_PAGE=9007191105806867;g_enum_ss[9007191105806867]="PRINT_LAST_PAGE";
export const PRINT_NCOPIES=9007193080038706;g_enum_ss[9007193080038706]="PRINT_NCOPIES";
export const PRINT_ORIENTATION=9007192098519467;g_enum_ss[9007192098519467]="PRINT_ORIENTATION";
export const PRINT_PAGENUM=9007190484000188;g_enum_ss[9007190484000188]="PRINT_PAGENUM";
export const PRINT_PHASE=9007190644145138;g_enum_ss[9007190644145138]="PRINT_PHASE";
export const PRINT_RESOLUTION=9007193575630101;g_enum_ss[9007193575630101]="PRINT_RESOLUTION";
export const PRINT_ROWX=9007190982033607;g_enum_ss[9007190982033607]="PRINT_ROWX";
export const PUSH=9007194246739527;g_enum_ss[9007194246739527]="PUSH";
export const R_a_block_desc=9007190030980491;g_enum_ss[9007190030980491]="a_block_desc";
export const R_a_block=9007193255732081;g_enum_ss[9007193255732081]="a_block";
export const R_a_date=9007191823293908;g_enum_ss[9007191823293908]="a_date";
export const R_a_event=9007191791712392;g_enum_ss[9007191791712392]="a_event";
export const R_a_family=9007191614147856;g_enum_ss[9007191614147856]="a_family";
export const R_a_fsm=9007193322986362;g_enum_ss[9007193322986362]="a_fsm";
export const R_a_gradient=9007194155014896;g_enum_ss[9007194155014896]="a_gradient";
export const R_a_hsv=9007192252978469;g_enum_ss[9007192252978469]="a_hsv";
export const R_a_html_pulldown=9007194212296109;g_enum_ss[9007194212296109]="a_html_pulldown";
export const R_a_http_form=9007190990743535;g_enum_ss[9007190990743535]="a_http_form";
export const R_a_http_response=9007190750294694;g_enum_ss[9007190750294694]="a_http_response";
export const R_a_input_field=9007192954337099;g_enum_ss[9007192954337099]="a_input_field";
export const R_a_internet_link=9007192819581550;g_enum_ss[9007192819581550]="a_internet_link";
export const R_a_micro_step=9007193135442035;g_enum_ss[9007193135442035]="a_micro_step";
export const R_a_mod_def=9007190587426296;g_enum_ss[9007190587426296]="a_mod_def";
export const R_a_polar_coord=9007193787221650;g_enum_ss[9007193787221650]="a_polar_coord";
export const R_a_rect=9007193669085694;g_enum_ss[9007193669085694]="a_rect";
export const R_a_runtime=9007191881640948;g_enum_ss[9007191881640948]="a_runtime";
export const R_a_scroll_link_record=9007192611723630;g_enum_ss[9007192611723630]="a_scroll_link_record";
export const R_a_subs_client_conn=9007193331751370;g_enum_ss[9007193331751370]="a_subs_client_conn";
export const R_a_unit=9007193478373070;g_enum_ss[9007193478373070]="a_unit";
export const R_a_var_def=9007191905424577;g_enum_ss[9007191905424577]="a_var_def";
export const R_a_xy=9007191434709187;g_enum_ss[9007191434709187]="a_xy";
export const R_a_xyz=9007191470998331;g_enum_ss[9007191470998331]="a_xyz";
export const RADIAL_GRADIENT=9007192309010309;g_enum_ss[9007192309010309]="RADIAL_GRADIENT";
export const RIGHT=9007193840331351;g_enum_ss[9007193840331351]="RIGHT";
export const RTL_SS=9007190479220938;g_enum_ss[9007190479220938]="RTL_SS";
export const TIMEZONE_ANCHORAGE=9007192361310267;g_enum_ss[9007192361310267]="TIMEZONE_ANCHORAGE";
export const TIMEZONE_ATHENS=9007190981516388;g_enum_ss[9007190981516388]="TIMEZONE_ATHENS";
export const TIMEZONE_BAKER_ISLAND=9007191507011446;g_enum_ss[9007191507011446]="TIMEZONE_BAKER_ISLAND";
export const TIMEZONE_BANGKOK=9007191049117670;g_enum_ss[9007191049117670]="TIMEZONE_BANGKOK";
export const TIMEZONE_CARACAS=9007191813271397;g_enum_ss[9007191813271397]="TIMEZONE_CARACAS";
export const TIMEZONE_CHICAGO=9007190415525059;g_enum_ss[9007190415525059]="TIMEZONE_CHICAGO";
export const TIMEZONE_DELHI=9007193355025641;g_enum_ss[9007193355025641]="TIMEZONE_DELHI";
export const TIMEZONE_DENVER=9007190633449477;g_enum_ss[9007190633449477]="TIMEZONE_DENVER";
export const TIMEZONE_DHAKA=9007190570556172;g_enum_ss[9007190570556172]="TIMEZONE_DHAKA";
export const TIMEZONE_DUBAI=9007190654943714;g_enum_ss[9007190654943714]="TIMEZONE_DUBAI";
export const TIMEZONE_FERNANDO=9007193555368666;g_enum_ss[9007193555368666]="TIMEZONE_FERNANDO";
export const TIMEZONE_GMT=9007193944953035;g_enum_ss[9007193944953035]="TIMEZONE_GMT";
export const TIMEZONE_HONG_KONG=9007190874557581;g_enum_ss[9007190874557581]="TIMEZONE_HONG_KONG";
export const TIMEZONE_HONOLULU=9007190810715811;g_enum_ss[9007190810715811]="TIMEZONE_HONOLULU";
export const TIMEZONE_JEDDAH=9007193893625221;g_enum_ss[9007193893625221]="TIMEZONE_JEDDAH";
export const TIMEZONE_KABUL=9007193654106028;g_enum_ss[9007193654106028]="TIMEZONE_KABUL";
export const TIMEZONE_KARACHI=9007190273642218;g_enum_ss[9007190273642218]="TIMEZONE_KARACHI";
export const TIMEZONE_KIRITIMATI=9007193401833546;g_enum_ss[9007193401833546]="TIMEZONE_KIRITIMATI";
export const TIMEZONE_LONDON=9007194171648235;g_enum_ss[9007194171648235]="TIMEZONE_LONDON";
export const TIMEZONE_LOS_ANGELES=9007192289237247;g_enum_ss[9007192289237247]="TIMEZONE_LOS_ANGELES";
export const TIMEZONE_MARQUESAS=9007194114222817;g_enum_ss[9007194114222817]="TIMEZONE_MARQUESAS";
export const TIMEZONE_NEW_YORK=9007191030228181;g_enum_ss[9007191030228181]="TIMEZONE_NEW_YORK";
export const TIMEZONE_NOUMEA=9007192814753950;g_enum_ss[9007192814753950]="TIMEZONE_NOUMEA";
export const TIMEZONE_NUKU=9007191069256452;g_enum_ss[9007191069256452]="TIMEZONE_NUKU";
export const TIMEZONE_PAGO_PAGO=9007193682191764;g_enum_ss[9007193682191764]="TIMEZONE_PAGO_PAGO";
export const TIMEZONE_PARIS=9007193076914724;g_enum_ss[9007193076914724]="TIMEZONE_PARIS";
export const TIMEZONE_PRAIA=9007190257414500;g_enum_ss[9007190257414500]="TIMEZONE_PRAIA";
export const TIMEZONE_RIO=9007192664222413;g_enum_ss[9007192664222413]="TIMEZONE_RIO";
export const TIMEZONE_SANTIAGO=9007191908316559;g_enum_ss[9007191908316559]="TIMEZONE_SANTIAGO";
export const TIMEZONE_ST_JOHNS=9007192657713671;g_enum_ss[9007192657713671]="TIMEZONE_ST_JOHNS";
export const TIMEZONE_SYDNEY=9007193946321621;g_enum_ss[9007193946321621]="TIMEZONE_SYDNEY";
export const TIMEZONE_TEHRAN=9007190053395879;g_enum_ss[9007190053395879]="TIMEZONE_TEHRAN";
export const TIMEZONE_TOKYO=9007192145655909;g_enum_ss[9007192145655909]="TIMEZONE_TOKYO";
export const TIMEZONE_UTC=9007194004136273;g_enum_ss[9007194004136273]="TIMEZONE_UTC";
export const TIMEZONE_WELLINGTON=9007193118918360;g_enum_ss[9007193118918360]="TIMEZONE_WELLINGTON";
export const TOUCH_FINGER=9007193390822830;g_enum_ss[9007193390822830]="TOUCH_FINGER";
export const TOUCH_NONE=9007194053980865;g_enum_ss[9007194053980865]="TOUCH_NONE";
export const TOUCH_STYLUS=9007192517172985;g_enum_ss[9007192517172985]="TOUCH_STYLUS";
export const TYPE_BYTES=9007191344815103;g_enum_ss[9007191344815103]="TYPE_BYTES";
export const TYPE_CHANGELIST=9007190643838260;g_enum_ss[9007190643838260]="TYPE_CHANGELIST";
export const TYPE_COLOR=9007190326328899;g_enum_ss[9007190326328899]="TYPE_COLOR";
export const TYPE_DATE=9007191452059640;g_enum_ss[9007191452059640]="TYPE_DATE";
export const TYPE_ENUM=9007190307525209;g_enum_ss[9007190307525209]="TYPE_ENUM";
export const TYPE_ERR=9007191320260475;g_enum_ss[9007191320260475]="TYPE_ERR";
export const TYPE_FUNC=9007190174688282;g_enum_ss[9007190174688282]="TYPE_FUNC";
export const TYPE_IMAGE=9007192176669305;g_enum_ss[9007192176669305]="TYPE_IMAGE";
export const TYPE_MEAS=9007193854053742;g_enum_ss[9007193854053742]="TYPE_MEAS";
export const TYPE_NUM=9007191566577692;g_enum_ss[9007191566577692]="TYPE_NUM";
export const TYPE_OBJECT=9007194039983755;g_enum_ss[9007194039983755]="TYPE_OBJECT";
export const TYPE_ANY=9007193993620348;g_enum_ss[9007193993620348]="TYPE_ANY";
export const TYPE_PATH=9007192971052859;g_enum_ss[9007192971052859]="TYPE_PATH";
export const TYPE_PATTERN=9007191926742254;g_enum_ss[9007191926742254]="TYPE_PATTERN";
export const TYPE_SOUND=9007190679494275;g_enum_ss[9007190679494275]="TYPE_SOUND";
export const TYPE_STR=9007190249956539;g_enum_ss[9007190249956539]="TYPE_STR";
export const TYPE_TREE=9007193022501804;g_enum_ss[9007193022501804]="TYPE_TREE";
export const TYPE_U=9007192898065963;g_enum_ss[9007192898065963]="TYPE_U";
export const TYPE_VIDEO=9007192435016199;g_enum_ss[9007192435016199]="TYPE_VIDEO";
export const TYPE_VOID=9007192290118574;g_enum_ss[9007192290118574]="TYPE_VOID";
export const TYPE_YESNO=9007190779215148;g_enum_ss[9007190779215148]="TYPE_YESNO";
export const V_std_debug_blocklist=9007191484368099;g_enum_ss[9007191484368099]="debug_blocklist";
export const V_std_elapsed_raw=9007194160934207;g_enum_ss[9007194160934207]="elapsed_raw";
export const V_std_elapsed=9007192882148682;g_enum_ss[9007192882148682]="elapsed";
export const V_std_families=9007192957064686;g_enum_ss[9007192957064686]="families";
export const V_std_META=9007192418521631;g_enum_ss[9007192418521631]="META";
export const V_std_now_raw=9007191113776135;g_enum_ss[9007191113776135]="now_raw";
export const V_std_now=9007190707922146;g_enum_ss[9007190707922146]="now";
export const V_std_runtime=9007192837991754;g_enum_ss[9007192837991754]="runtime";
export const V_std_time_launched=9007192393556622;g_enum_ss[9007192393556622]="time_launched";
export const V_std_unit_to_family=9007192909702241;g_enum_ss[9007192909702241]="unit_to_family";
export const VAL=9007192950101122;g_enum_ss[9007192950101122]="VAL";
export const WEBSOCK_CLOSE=9007191180554640;g_enum_ss[9007191180554640]="WEBSOCK_CLOSE";
export const WEBSOCK_ERROR=9007194030626010;g_enum_ss[9007194030626010]="WEBSOCK_ERROR";
export const WEBSOCK_OPEN=9007192997448236;g_enum_ss[9007192997448236]="WEBSOCK_OPEN";
export const Y_Angle=9007191340652178;g_enum_ss[9007191340652178]="Angle";
export const Y_Area=9007192203099294;g_enum_ss[9007192203099294]="Area";
export const Y_Energy=9007190240949311;g_enum_ss[9007190240949311]="Energy";
export const Y_Force=9007190127307486;g_enum_ss[9007190127307486]="Force";
export const Y_Frequency=9007194035908891;g_enum_ss[9007194035908891]="Frequency";
export const Y_Length=9007193164009787;g_enum_ss[9007193164009787]="Length";
export const Y_Mass=9007192445499647;g_enum_ss[9007192445499647]="Mass";
export const Y_Power=9007193650645924;g_enum_ss[9007193650645924]="Power";
export const Y_Pressure=9007192495556120;g_enum_ss[9007192495556120]="Pressure";
export const Y_Scalar=9007191994712031;g_enum_ss[9007191994712031]="Scalar";
export const Y_Speed=9007194016706446;g_enum_ss[9007194016706446]="Speed";
export const Y_Temperature=9007191653401759;g_enum_ss[9007191653401759]="Temperature";
export const Y_Time=9007193033544522;g_enum_ss[9007193033544522]="Time";
export const Y_Volume=9007192707741773;g_enum_ss[9007192707741773]="Volume";
FIELDS[F_air_version]=true;
FIELDS[F_app_version]=true;
FIELDS[F_args]=true;
FIELDS[F_base_to_unit]=true;
FIELDS[F_bchildren]=true;
FIELDS[F_bdepth]=true;
FIELDS[F_bexpanded]=true;
FIELDS[F_bkind]=true;
FIELDS[F_bname]=true;
FIELDS[F_bobject]=true;
FIELDS[F_box]=true;
FIELDS[F_btracks]=true;
FIELDS[F_callback]=true;
FIELDS[F_cell_id]=true;
FIELDS[F_cell_seq]=true;
FIELDS[F_cell]=true;
FIELDS[F_client_bytes_in]=true;
FIELDS[F_client_bytes_out]=true;
FIELDS[F_client_channel]=true;
FIELDS[F_client_status]=true;
FIELDS[F_cpu_kind]=true;
FIELDS[F_cursor_changed]=true;
FIELDS[F_date_city]=true;
FIELDS[F_date_day]=true;
FIELDS[F_date_hour]=true;
FIELDS[F_date_minute]=true;
FIELDS[F_date_month]=true;
FIELDS[F_date_second]=true;
FIELDS[F_date_year]=true;
FIELDS[F_db_name]=true;
FIELDS[F_db_stores]=true;
FIELDS[F_db_ver]=true;
FIELDS[F_evkind]=true;
FIELDS[F_fam_base]=true;
FIELDS[F_fam_dim]=true;
FIELDS[F_fam_nonlinear]=true;
FIELDS[F_fam_units]=true;
FIELDS[F_form_fields]=true;
FIELDS[F_form_name]=true;
FIELDS[F_form_ok]=true;
FIELDS[F_fsm_state]=true;
FIELDS[F_full_screen]=true;
FIELDS[F_global_x]=true;
FIELDS[F_global_y]=true;
FIELDS[F_grad_angle]=true;
FIELDS[F_grad_centerx]=true;
FIELDS[F_grad_centery]=true;
FIELDS[F_grad_focusx]=true;
FIELDS[F_grad_focusy]=true;
FIELDS[F_grad_radius_inner]=true;
FIELDS[F_grad_radius_outer]=true;
FIELDS[F_grad_shape]=true;
FIELDS[F_grad_stops]=true;
FIELDS[F_grad_sysobj]=true;
FIELDS[F_hardware_id]=true;
FIELDS[F_height]=true;
FIELDS[F_hist_absorber]=true;
FIELDS[F_hist_cell_cum]=true;
FIELDS[F_hist_cell_id]=true;
FIELDS[F_hist_cell]=true;
FIELDS[F_hist_rawx]=true;
FIELDS[F_http_body_type]=true;
FIELDS[F_http_body]=true;
FIELDS[F_http_bytes_now]=true;
FIELDS[F_http_bytes_total]=true;
FIELDS[F_http_headers]=true;
FIELDS[F_http_state]=true;
FIELDS[F_http_status]=true;
FIELDS[F_http_sysobj]=true;
FIELDS[F_hue]=true;
FIELDS[F_in_autofill]=true;
FIELDS[F_in_errmsg]=true;
FIELDS[F_in_hint]=true;
FIELDS[F_in_internal]=true;
FIELDS[F_in_keyboard]=true;
FIELDS[F_in_kind]=true;
FIELDS[F_in_label]=true;
FIELDS[F_in_maxlen]=true;
FIELDS[F_in_maxval]=true;
FIELDS[F_in_minlen]=true;
FIELDS[F_in_minval]=true;
FIELDS[F_in_name]=true;
FIELDS[F_in_pattern]=true;
FIELDS[F_in_step]=true;
FIELDS[F_in_tip]=true;
FIELDS[F_in_validator]=true;
FIELDS[F_in_value]=true;
FIELDS[F_index_multi]=true;
FIELDS[F_index_name]=true;
FIELDS[F_index_unique]=true;
FIELDS[F_is_alt]=true;
FIELDS[F_is_cmd]=true;
FIELDS[F_is_connected]=true;
FIELDS[F_is_ctrl]=true;
FIELDS[F_is_disabled]=true;
FIELDS[F_is_inline_validated]=true;
FIELDS[F_is_ok]=true;
FIELDS[F_is_required]=true;
FIELDS[F_is_shift]=true;
FIELDS[F_is_white_stripped]=true;
FIELDS[F_keycode]=true;
FIELDS[F_left]=true;
FIELDS[F_link_data]=true;
FIELDS[F_link_local_port]=true;
FIELDS[F_link_remote_port]=true;
FIELDS[F_link_socket]=true;
FIELDS[F_link_state]=true;
FIELDS[F_link_timeout]=true;
FIELDS[F_link_url]=true;
FIELDS[F_major_steps]=true;
FIELDS[F_major_stepx]=true;
FIELDS[F_micro_steps]=true;
FIELDS[F_mod_funcs]=true;
FIELDS[F_mod_vars]=true;
FIELDS[F_monitor_active]=true;
FIELDS[F_ms_dest]=true;
FIELDS[F_ms_funcname]=true;
FIELDS[F_ms_kind]=true;
FIELDS[F_ms_module]=true;
FIELDS[F_ms_newval]=true;
FIELDS[F_ms_where]=true;
FIELDS[F_ncells]=true;
FIELDS[F_notch_height]=true;
FIELDS[F_notch_width]=true;
FIELDS[F_opt_children]=true;
FIELDS[F_opt_disabled]=true;
FIELDS[F_opt_label]=true;
FIELDS[F_opt_selected]=true;
FIELDS[F_opt_val]=true;
FIELDS[F_os_kind]=true;
FIELDS[F_os_language]=true;
FIELDS[F_os_modal]=true;
FIELDS[F_os_version]=true;
FIELDS[F_pending_delay]=true;
FIELDS[F_pending_interval]=true;
FIELDS[F_pending_limit]=true;
FIELDS[F_pending_parms]=true;
FIELDS[F_pending_prereq]=true;
FIELDS[F_pending_targtime]=true;
FIELDS[F_polar_angle]=true;
FIELDS[F_polar_radius]=true;
FIELDS[F_row_kind]=true;
FIELDS[F_s_big_step_size]=true;
FIELDS[F_s_block_id]=true;
FIELDS[F_s_content_size]=true;
FIELDS[F_s_position]=true;
FIELDS[F_s_step_size]=true;
FIELDS[F_s_window_size]=true;
FIELDS[F_saturation]=true;
FIELDS[F_screen_dpi]=true;
FIELDS[F_screen_horz]=true;
FIELDS[F_screen_vert]=true;
FIELDS[F_store_autoinc]=true;
FIELDS[F_store_indices]=true;
FIELDS[F_store_name]=true;
FIELDS[F_top]=true;
FIELDS[F_touch_id]=true;
FIELDS[F_touch_kind]=true;
FIELDS[F_unicode]=true;
FIELDS[F_unit_factor]=true;
FIELDS[F_unit_to_base]=true;
FIELDS[F_v_data_xy]=true;
FIELDS[F_v_dim]=true;
FIELDS[F_v_expand]=true;
FIELDS[F_v_fields]=true;
FIELDS[F_v_rec]=true;
FIELDS[F_v_type]=true;
FIELDS[F_v_val]=true;
FIELDS[F_value]=true;
FIELDS[F_when]=true;
FIELDS[F_width]=true;
FIELDS[F_window_horz]=true;
FIELDS[F_window_vert]=true;
FIELDS[F_x]=true;
FIELDS[F_y]=true;
FIELDS[F_z]=true;




export var families=new a_tree("std","$families",0);
export var unit_to_family=new a_tree("std","$unit_to_family",0);






export const NULL_FUNC=undefined;


export var aaaa={};

aaaa.main_init=null;
aaaa.main_drawer=null;
aaaa.main_module=0;

aaaa.mon_init=null;
aaaa.mon_drawer=null;

aaaa.leave_func=null;
aaaa.menubar_func=null;
aaaa.derive_func=null_derive_func;
aaaa.opendoc_func=null;
aaaa.orient_func=null;





export function internal_err(msg){
alert("Internal error: "+msg);
debugger;
}





export function argument_err(msg){
alert("Bad argument: "+msg);
debugger;
}





export function js_color_to_str(color,opacity=1.0){

if(opacity===1.0){

return'#'+(color+0x1000000).toString(16).substring(1);
}else{

return`rgba(${color_r(color)},${color_g(color)},${color_b(color)},${opacity*255})`;
}
}







export function js_svg_wrapper(container,opacity){

var wrapper;


if(container.last_svg_ptr!=undefined){

return container.last_svg_ptr;
}


wrapper=document.createElementNS(SVG_NS,'svg');


wrapper.style.position="absolute";


if(CHECKS&&((container.bounds.width<0)||(container.bounds.height<0)))debugger;
wrapper.setAttribute('width',container.bounds.width.toFixed(0));
wrapper.setAttribute('height',container.bounds.height.toFixed(0));




if(opacity!=1)
wrapper.setAttribute('opacity',opacity.toFixed(3));

container.appendChild(wrapper);



container.last_svg_ptr=wrapper;

return wrapper;



}










export function remote_call(


connection,
func_hash,
parms){

let pos_len;
let pos_eof;
let pos_nparms;
let chunk_len;
let i;
let nparms;
let parmkind;
let parmname;
let parmval;


var socket=get_object(connection,F_client_channel);





if(gg_buf==null)
gg_buf=new_bytes(100000);
else
gg_buf.position=0;


bytes_put_card8(gg_buf,SOP_CHUNK_START);
bytes_put_card8(gg_buf,0);
pos_len=gg_buf.position;
bytes_put_card32(gg_buf,0);
bytes_put_card8(gg_buf,SOP_CALL);
bytes_put_card32(gg_buf,func_hash);

pos_nparms=gg_buf.position;
bytes_put_card8(gg_buf,0);






nparms=0;
i=0;
while(i<parms.length){

parmval=parms[i];
i+=1;



if(parmval instanceof a_path)
bytes_put_relpath(gg_buf,parmval,socket.client_dest);
else
bytes_put_val(gg_buf,parmval);

console.log(`  parm[${i}]=${str.to_str(parmval)}`);
nparms+=1;
}

bytes_put_card8(gg_buf,SOP_CHUNK_END);
pos_eof=gg_buf.position;


gg_buf.position=pos_nparms;
bytes_put_card8(gg_buf,nparms);


gg_buf.position=pos_len;
bytes_put_card32(gg_buf,pos_eof-pos_len-4);


var ncum=getn(connection,F_client_bytes_out)+pos_eof;
setv(0,0,connection,F_client_bytes_out,ncum);

if(TRACE_CHAN)console.log(str.conv("--sending {} bytes ({} cumulative) of remote call to func {}",pos_eof,ncum,func_hash));


websocket_send(socket,gg_buf,pos_eof);
}










export const WEBSOCKET_CLOSED=1111;
export const WEBSOCKET_ERROR=2222;
export const WEBSOCKET_OPENED=3333;


export function websocket_open(

url,
data_handler,
status_handler,
){
var sock=new WebSocket(url);



sock.onmessage=function(event){

data_handler(sock,event.data);
}

sock.onopen=function(event){
status_handler(sock,WEBSOCKET_OPENED);
}

sock.onclose=function(event){
status_handler(sock,WEBSOCKET_CLOSED);
}

sock.onerror=function(event){
status_handler(sock,WEBSOCKET_ERROR);
}

return sock;
}


export function websocket_close(

sock
){
sock.close();
}



export function websocket_send(

sock,
data,
len=U){

if(typeof instance==='string'){

if(TRACE_CHAN)console.log(`websocket_send, sending as string`);
sock.send(data);
}else{



if((len!=U)&&(len!=data.arraybuf.byteLength)){



var subset=new Uint8Array(data.arraybuf,0,len);
if(TRACE_CHAN)console.log(`websocket_send, sending subset ${len} bytes, type=${typeof subset}`);
sock.send(subset);

}else{

if(TRACE_CHAN)console.log(`websocket_send, sending entire ${data.arraybuf.byteLength} bytes`);
sock.send(data.arraybuf);
}
}

}




const CURSOR_ID="$cursor";
export function cursor_set(curs){

switch(curs){
case CURS_ARROW:
document.body.style.cursor="default";
break;

case CURS_FINGER:
document.body.style.cursor="pointer";
break;

case CURS_HAND:
document.body.style.cursor="grab";
break;

case CURS_IBEAM:
document.body.style.cursor="text";
break;

case CURS_HIDE:
document.body.style.cursor="none";
break;





case CURS_ALIAS:
document.body.style.cursor="alias";
break;

case CURS_CELL:
document.body.style.cursor="cell";
break;

case CURS_CONTEXT:
document.body.style.cursor="context-menu";
break;

case CURS_COPY:
document.body.style.cursor="copy";
break;

case CURS_CROSSHAIR:
document.body.style.cursor="crosshair";
break;

case CURS_GRABBING:
document.body.style.cursor="grabbing";
break;

case CURS_MOVE:
document.body.style.cursor="move";
break;

case CURS_NOT:
document.body.style.cursor="no-drop";
break;

case CURS_QUESTION:
document.body.style.cursor="help";
break;

case CURS_WAIT:
document.body.style.cursor="wait";
break;

case CURS_ZOOM_IN:
document.body.style.cursor="zoom-in";
break;

case CURS_ZOOM_OUT:
document.body.style.cursor="zoom-out";
break;

case CURS_RESIZE_COL:
document.body.style.cursor="col-resize";
break;

case CURS_RESIZE_ROW:
document.body.style.cursor="row_resize";
break;

case CURS_RESIZE_N:
document.body.style.cursor="n-resize";
break;

case CURS_RESIZE_S:
document.body.style.cursor="s-resize";
break;

case CURS_RESIZE_E:
document.body.style.cursor="e-resize";
break;

case CURS_RESIZE_W:
document.body.style.cursor="w-resize";
break;

case CURS_RESIZE_NE:
document.body.style.cursor="ne-resize";
break;

case CURS_RESIZE_NW:
document.body.style.cursor="nw-resize";
break;

case CURS_RESIZE_SE:
document.body.style.cursor="se-resize";
break;

case CURS_RESIZE_SW:
document.body.style.cursor="sw-resize";
break;

case CURS_DIAG_RIGHT:
document.body.style.cursor="nesw-resize";
break;

case CURS_DIAG_LEFT:
document.body.style.cursor="nwse-resize";
break;

default:
if(CHECKS)
argument_err(`bad cursor: ${curs}`)
}


var tag=document.getElementById(CURSOR_ID);
if(tag!=null){


tag.parentElement.removeChild(tag);
}


setv(0,0,runtime,F_cursor_changed,Y);
}







export function cursor_custom(arg_image,arg_hotspot,arg_x,arg_y){

document.body.style.cursor="none";

var dx=getn(arg_hotspot,F_x);
var dy=getn(arg_hotspot,F_y);

var netx=arg_x-dx;
var nety=arg_y-dy;

var tag=document.getElementById(CURSOR_ID);




if(tag==null){

tag=draw_image(k.g_root_block,null,arg_image,{x:netx,y:nety,shrink:N,grow:N});
tag.id=CURSOR_ID;

}else{

var transform_ss=`translate(${netx.toFixed(0)}px,${nety.toFixed(0)}px)`;
tag.style.transform=transform_ss;

}


setv(0,0,runtime,F_cursor_changed,Y);
}









export function new_bytes(len,order=U){






return new ByteArray(len,order);


}


export const NOV_0=20;
export const NOV_U=21;
export const NOV_ERR=22;
export const NOV_Y=23;
export const NOV_N=24;
export const NOV_NUM=25;
export const NOV_STR=26;
export const NOV_PATH=27;
export const NOV_MEAS=28;
export const NOV_IMAGE=29;
export const NOV_OBJECT=30;
export const NOV_RELPATH=31;








export function bytes_put_tree(buf,subtree){

let base=path_to_node(subtree);
let first;
let currsub;
let last_depth=0;



function emit_op(lowbits,pushflag,depth){
let byte;
let npop=0;
if(last_depth>=depth){
npop=last_depth-depth;
if(pushflag)
npop+=1;
}
last_depth=depth;

if(npop>=15){

byte=(15<<3)|(pushflag<<2)|lowbits;
bytes_put_card8(buf,byte);
bytes_put_card8(buf,npop);
}else{

if(TRACE_ENCOD_LOW)console.log(str.conv("  op, npop={}, push={}, opcode={}",npop,pushflag,lowbits));
byte=(npop<<3)|(pushflag<<2)|lowbits;
bytes_put_card8(buf,byte);
}

if(pushflag){
if(TRACE_ENCOD_LOW)console.log(str.conv("  subscript {}",currsub));
bytes_put_num(buf,currsub);
}

npop=0;
}


function do_node(node,pushflag,depth){
let child;


if(node.val==U){

emit_op(0,pushflag,depth);
}else if(typeof node.val==='number'){
emit_op(1,pushflag,depth);

if(TRACE_ENCOD_LOW)console.log(str.conv("  num val {}",node.val));
bytes_put_num(buf,node.val);
}else{
emit_op(2,pushflag,depth);

if(TRACE_ENCOD_LOW)console.log(str.conv("  other val {}",node.val));
bytes_put_val(buf,node.val);
}


if(node.children!=null){
for(child of node.children){
currsub=child.sub;
do_node(child,1,depth+1);
}
}
}



if(base==null)
return;


do_node(base,0,0);


if(TRACE_ENCOD_LOW)console.log("  --end of tokens--");
bytes_put_card8(buf,3);

}



export function bytes_put_val(buf,val){
if(typeof val==='number'){
if(Number.isNaN(val)){
bytes_put_card8(buf,NOV_ERR);
if(TRACE_ENCOD_LOW)console.log(str.conv("bytes_put_val, offset={}, ERR",buf.position));
}else if(val==U){
bytes_put_card8(buf,NOV_U);
if(TRACE_ENCOD_LOW)console.log(str.conv("bytes_put_val, offset={}, U",buf.position));
}else if(val==0){
bytes_put_card8(buf,NOV_0);
if(TRACE_ENCOD_LOW)console.log(str.conv("bytes_put_val, offset={}, ZERO",buf.position));
}else if(val==Y){
bytes_put_card8(buf,NOV_Y);
if(TRACE_ENCOD_LOW)console.log(str.conv("bytes_put_val, offset={}, Y",buf.position));
}else if(val==N){
bytes_put_card8(buf,NOV_N);
if(TRACE_ENCOD_LOW)console.log(str.conv("bytes_put_val, offset={}, N",buf.position));
}else{
bytes_put_card8(buf,NOV_NUM);
if(TRACE_ENCOD_LOW)console.log(str.conv("bytes_put_val, offset={}, num={}",buf.position,val));
bytes_put_num(buf,val);
}

}else if(typeof val==='string'){
bytes_put_card8(buf,NOV_STR);
if(TRACE_ENCOD_LOW)console.log(str.conv("bytes_put_val, offset={}, str={}",buf.position,val));
bytes_put_str(buf,val);

}else if(val instanceof a_meas){
bytes_put_card8(buf,NOV_MEAS);
if(TRACE_ENCOD_LOW)console.log(str.conv("bytes_put_val, offset={}, meas",buf.position));
throw new Error("not yet");

}else if(val instanceof a_path){
bytes_put_card8(buf,NOV_PATH);
if(TRACE_ENCOD_LOW)console.log(str.conv("bytes_put_val, offset={}, path",buf.position));
throw new Error("not yet");

}else if(val instanceof a_image){
bytes_put_card8(buf,NOV_IMAGE);
if(TRACE_ENCOD_LOW)console.log(str.conv("bytes_put_val, offset={}, image",buf.position));
throw new Error("not yet");

}else{

throw new Error("not yet");
}

}




function bytes_put_relpath(buf,argpath,basis){


var basisn=basis.key.length;
var nlevels=argpath.key.length-basis.key.length;
if(argpath.base!=basis.base||nlevels<0){

throw new Error("remote call is sending a path that is not relative to the channel base");
}


var i;
for(i=0;i<basisn;i++){
if(argpath.key[i]!=basis.key[i])
throw new Error(`remote call path argument is not deeper than the base in art ${i}`);
}

bytes_put_card8(buf,NOV_RELPATH);

bytes_put_card8(buf,nlevels);
console.log(`bytes_put_relpath, nlevels=${nlevels}`);

for(i=0;i<nlevels;i++){
bytes_put_num(buf,argpath.key[basisn+i]);
}
}




function bytes_get_relpath(buf,basis){

var i,subscript;
var nlevels=bytes_get_card8(buf);


var net=basis.clone();

for(i=0;i<nlevels;i++){
subscript=bytes_get_num(buf);
net.key.push(subscript);
}
return net;
}



export function bytes_put_node(buf,key,val){

bytes_put_card8(buf,SOP_NODE);


let i;
bytes_put_card8(buf,key.length);
for(i=0;i<key.length;i++){
bytes_put_num(buf,key[i]);
}
bytes_put_val(buf,val);
}






export function bytes_put_str(bytes,str){

var i;
var utf8=[];

var strlen=str.length;
if(strlen>65535)
strlen=65535;
for(i=0;i<strlen;i++){
var charcode=str.charCodeAt(i);

if(charcode<0x80)utf8.push(charcode);


else if(charcode<0x800){
utf8.push(0xc0|(charcode>>6),
0x80|(charcode&0x3f));
}


else if(charcode<0xd800||charcode>=0xe000){
utf8.push(0xe0|(charcode>>12),
0x80|((charcode>>6)&0x3f),
0x80|(charcode&0x3f));
}

else{
i++;



charcode=0x10000+(((charcode&0x3ff)<<10)|
(str.charCodeAt(i)&0x3ff));
utf8.push(0xf0|(charcode>>18),
0x80|((charcode>>12)&0x3f),
0x80|((charcode>>6)&0x3f),
0x80|(charcode&0x3f));
}
}

var len8=utf8.length;
bytes_put_card16(bytes,len8);


for(i=0;i<len8;i++){
bytes.view.setUint8(bytes.position,utf8[i]);
bytes.position+=1;
if(bytes.position>bytes.length)
bytes.length=bytes.position;
}
}

export function bytes_put_num(bytes,val){
bytes.view.setFloat64(bytes.position,val,bytes.little);
bytes.position+=8;
if(bytes.position>bytes.length)
bytes.length=bytes.position;
}

export function bytes_put_int8(bytes,val){
bytes.view.setInt8(bytes.position,val);
bytes.position+=1;
if(bytes.position>bytes.length)
bytes.length=bytes.position;
}

export function bytes_put_card8(bytes,val){
bytes.view.setUint8(bytes.position,val);
bytes.position+=1;
if(bytes.position>bytes.length)
bytes.length=bytes.position;
}

export function bytes_put_int16(bytes,val){
bytes.view.setInt16(bytes.position,val,bytes.little);
bytes.position+=2;
if(bytes.position>bytes.length)
bytes.length=bytes.position;
}

export function bytes_put_card16(bytes,val){
bytes.view.setUint16(bytes.position,val,bytes.little);
bytes.position+=2;
if(bytes.position>bytes.length)
bytes.length=bytes.position;
}

export function bytes_put_int32(bytes,val){
bytes.view.setInt32(bytes.position,val,bytes.little);
bytes.position+=4;
if(bytes.position>bytes.length)
bytes.length=bytes.position;
}

export function bytes_put_card32(bytes,val){
bytes.view.setUint32(bytes.position,val,bytes.little);
bytes.position+=4;
if(bytes.position>bytes.length)
bytes.length=bytes.position;
}




export function bytes_get_tree(buf,dest){
let op;
let net=dest.clone();
let sub;
let depthx=0;
let val;
let low;
let npop;



trunc_tree(0,0,dest)


while(1){

op=bytes_get_card8(buf);
low=op&3;

if(TRACE_ENCOD_LOW)console.log(str.conv("bytes_get_tree, offset={}, low={}",buf.position-1,low));

if(low==3)
break;

npop=op>>3;
if(npop==15)
npop=bytes_get_card8(buf);
if(TRACE_ENCOD_LOW)console.log(str.conv("  npop={}",npop));


while(npop>0){
net.key.pop();
npop-=1;
}


if(op&4){
if(TRACE_ENCOD_LOW)console.log("  push");

sub=bytes_get_num(buf);
net.key.push(sub);
}




if(low==1){
val=bytes_get_num(buf);
if(TRACE_ENCODE)console.log(str.conv(">> {}={} (num)",net,val));
path_setv(0,0,net,val);
}else if(low==2){
val=bytes_get_val(buf);
if(TRACE_ENCODE)console.log(str.conv(">> {}={}",net,val));
path_setv(0,0,net,val);
}
}
}



export function bytes_get_val(buf){

let dtype=bytes_get_card8(buf);
switch(dtype){
case NOV_ERR:
if(TRACE_ENCOD_LOW)console.log(str.conv("bytes_get_val, offset={}, ERR",buf.position));
return ERR;

case NOV_U:
if(TRACE_ENCOD_LOW)console.log(str.conv("bytes_get_val, offset={}, U",buf.position));
return U;

case NOV_0:
if(TRACE_ENCOD_LOW)console.log(str.conv("bytes_get_val, offset={}, zero",buf.position));
return 0;

case NOV_Y:
if(TRACE_ENCOD_LOW)console.log(str.conv("bytes_get_val, offset={}, Y",buf.position));
return Y;

case NOV_N:
if(TRACE_ENCOD_LOW)console.log(str.conv("bytes_get_val, offset={}, N",buf.position));
return N;

case NOV_NUM:
if(TRACE_ENCOD_LOW)console.log(str.conv("bytes_get_val, offset={}, num",buf.position));
return bytes_get_num(buf);

case NOV_STR:
if(TRACE_ENCOD_LOW)console.log(str.conv("bytes_get_val, offset={}, str",buf.position));
return bytes_get_str(buf);

case NOV_MEAS:
if(TRACE_ENCOD_LOW)console.log(str.conv("bytes_get_val, offset={}, meas",buf.position));

debugger;
return;

case NOV_PATH:
if(TRACE_ENCOD_LOW)console.log(str.conv("bytes_get_val, offset={}, path",buf.position));

debugger;
return;

case NOV_IMAGE:
if(TRACE_ENCOD_LOW)console.log(str.conv("bytes_get_val, offset={}, image",buf.position));

debugger;
return;

default:
throw new Error("bad type");
}

}


export function bytes_get_str(bytes){

var len=bytes_get_card16(bytes);



var i,c,char2,char3;
var out="";

i=0;
while(i<len){
c=bytes_get_card8(bytes);
i++;
switch(c>>4){
case 0:
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:

out+=String.fromCharCode(c);
break;
case 12:
case 13:

char2=bytes_get_card8(bytes);
i++;
out+=String.fromCharCode(((c&0x1F)<<6)|(char2&0x3F));
break;
case 14:

char2=bytes_get_card8(bytes);
i++;
char3=bytes_get_card8(bytes);
i++;
out+=String.fromCharCode(((c&0x0F)<<12)|
((char2&0x3F)<<6)|
((char3&0x3F)<<0));
break;
}
}


if(i>len){

debugger;
}

return out;
}


export function bytes_get_num(bytes){
var val=bytes.view.getFloat64(bytes.position,bytes.little);
bytes.position+=8;
return val;
}


export function bytes_get_int8(bytes){
var val=bytes.view.getInt8(bytes.position);
bytes.position+=1;
return val;
}


export function bytes_get_card8(bytes){
var val=bytes.view.getUint8(bytes.position);
bytes.position+=1;
return val;
}


export function bytes_get_int16(bytes){
var val=bytes.view.getInt16(bytes.position,bytes.little);
bytes.position+=2;
return val;
}


export function bytes_get_card16(bytes){
var val=bytes.view.getUint16(bytes.position,bytes.little);
bytes.position+=2;
return val;
}


export function bytes_get_int32(bytes){
var val=bytes.view.getInt32(bytes.position,bytes.little);
bytes.position+=4;
return val;
}


export function bytes_get_card32(bytes){
var val=bytes.view.getUint32(bytes.position,bytes.little);
bytes.position+=4;
return val;
}


















export function clock_tick(){
now_raw=sys_rawtime();
elapsed_raw=now_raw-time_launched;

now=sys_dilatedime();
elapsed=now-time_launched;
}






export function zap_clock(){
let raw=sys_rawtime();
time_launched=raw;
now_raw=raw;
now=raw;
elapsed=0;
elapsed_raw=0;
g_era_raw=raw;
g_era_dilated=raw;
}






export function sys_rawtime(){



return Date.now()*0.001;



}






export function sys_dilatedime(){
let net=g_era_dilated+(now_raw-g_era_raw)*g_time_scale;
if(TRACE_TIME)console.log(str.conv(">> now, now_raw={n3}, era_dilated={n3}, era_raw={n3}, scale={n3}, net={n3}",now_raw,g_era_dilated,g_era_raw,g_time_scale,net));
return net;
}








export function monitored_draw(b){




let old_bid=g_next_bid;
monitored_drawf.code(b);

if(g_next_bid!=old_bid){

console.log("--after refresh, blocklist dirty");
debugger;

}







}







export function monitored_init(){





loom_clear_all();


zap_clock();


aaaa.main_init();
}













export function subscribe_start(mod,loc,arg_id,arg_url,arg_port,arg_rate,arg_dest,connection){
setv(mod,loc,connection,F_client_status,CSTATUS_WAITING);



if(arg_url=="localhost")
arg_url="ws://127.0.0.1";
var net=arg_url+':'+arg_port+"/BEAD01/location?parm1";
if(TRACE_CHAN)console.log(`>> subscribing to ${net}`);
var sock=new WebSocket(net);
sock.binaryType="arraybuffer";


sock.last_pos=0;
sock.client_dest=arg_dest;
sock.id=arg_id;
g_id_to_websocket[arg_id]=sock;

setv(mod,0,connection,F_client_channel,sock);
setv(mod,loc,connection,F_client_bytes_in,0);
setv(mod,loc,connection,F_client_bytes_out,0);


sock.onopen=function(evt){


if(TRACE_CHAN)console.log(str.conv(">> on_open, id={}",arg_id));
}

sock.onclose=function(evt){
if(TRACE_CHAN)console.log(str.conv(">> on_close, id={}",arg_id));

if(getn(connection,F_client_status)!=CSTATUS_NO_ANSWER)
setv(mod,loc,connection,F_client_status,U);
}

sock.onerror=function(evt){
if(TRACE_CHAN)console.log(str.conv(">> on_error, id={}",arg_id));
setv(mod,loc,connection,F_client_status,CSTATUS_NO_ANSWER);
}

sock.onmessage=function(evt){

if(TRACE_CHAN)console.log(str.conv(">> on_message, id={}",arg_id));



var mybuf=ArrayBuffer_to_ByteArray(evt.data);



setv(mod,loc,connection,F_client_status,CSTATUS_CONNECTED);





process_client_chunks(mybuf,arg_dest);
}
}






function process_client_chunks(mybuf,dest){




var opcode;

opcode=bytes_get_card8(mybuf);
if(opcode!=SOP_CHUNK_START){

console.log(`Expected SOP_CHUNK_START, got 0x${opcode.toString(16)}`);
return;
}

var compression=bytes_get_card8(mybuf);
var len=bytes_get_int32(mybuf);
var chunk_start=mybuf.position;

bigloop:while(1){

opcode=bytes_get_card8(mybuf);

switch(opcode){
case SOP_NOP:

if(TRACE_SERVER)console.log("-- opcode SOP_NOP");

break;

case SOP_FIRST:

if(TRACE_SERVER)console.log("-- opcode SOP_FIRST");

bytes_get_tree(mybuf,dest);
break;

case SOP_UPDATE:

if(TRACE_SERVER)console.log("-- opcode SOP_UPDATE");

process_deltas(mybuf,dest);
break;

case SOP_CALL:

if(TRACE_SERVER)console.log("-- opcode SOP_CALL");
debugger;
break;

case SOP_CHUNK_END:


break bigloop;

default:
if(TRACE_SERVER)console.log("-- bad opcode");
debugger;
}
}



if(TRACE_CHAN)console.log(`SUB: after parsing chunk, pos=${mybuf.position}, expect=${chunk_start+len}`);
}







export function process_deltas(buf,dest){
var opcode;
var keylen;
var net;
var i;
var keyx;
var val;


while(1){
if(TRACE_SERVER)console.log(`top delta loop, pos=${buf.position}`);
opcode=bytes_get_card8(buf);
if(opcode==SOP_END_DELTA)
break;

if(opcode!=SOP_NODE){
debugger;
break;
}


keylen=bytes_get_card8(buf);


net=dest.clone();
for(i=0;i<keylen;i++){
keyx=bytes_get_num(buf);
net.key.push(keyx);
}

val=bytes_get_val(buf);
if(TRACE_SERVER)console.log(str.conv("delta, pos={}, net.key={key}, val={}",buf.position,net.key,val));
path_setv(0,0,net,val);
}

}







function is_path_in_path(curr,big){

if(curr.base!=big.base)
return false;

let currnkey=curr.key.length;
let bignkey=big.key.length;


let lx;
for(lx=0;lx<bignkey;lx++){
if(lx>currnkey)
return false;

if(curr.key[lx]!=big.key[lx])
return false;
}


return true;
}

















export function http_request(url,_options){

let id=0;
let method="GET";
let encoding=ENCODE_FORM_URL;
let sendbuf=null;
let port=80;
let timeout=10;
let response=null;
let nocache=true;


for(let property in _options){
switch(property){
case'id':
id=_options.id;
break;

case'method':
method=_options.method;
break;

case'encoding':
encoding=_options.encoding;
break;

case'nocache':
nocache=_options.nocache==Y;
break;

case'send':
sendbuf=_options.send;
break;

case'port':
port=_options.port;
break;

case'timeout':
timeout=_options.timeout;
break;

case'response':
response=_options.response;
break;

default:

argument_err("bad option: "+property);

}
}


if(response==null)
argument_err("response field is required");


setv(0,0,response,F_http_status,0);
setv(0,0,response,F_http_state,HTTP_START);


if(url.substr(1,4)!='http')
url='http://'+url;


if(port!=80){
url+=':'+port;
}


if(nocache){
switch(method){
case'GET':
case'HEAD':


var timestamp=(new Date()).getTime();
if(url.indexOf('&')>=0){

url+='&'+timestamp;
}else{

url+='?'+timestamp;
}
break;
default:



break;
}
}


let request=new XMLHttpRequest();
request.timeout=timeout*1000;



request.onerror=on_error;
request.onabort=on_abort;
request.ontimeout=on_timeout;
request.onreadystatechange=on_change;



request.open(method,url);


request.send(sendbuf);


















function on_error(evt){

if(TRACE_CHAN)console.log(`### on_error, id=${id}, url=${url}, r=${request.readyState}, status=${request.status}`);
setv(0,0,response,F_http_state,HTTP_DONE);
setv(0,0,response,F_http_status,400);
}


function on_abort(evt){

if(TRACE_CHAN)console.log(`### on_abort, id=${id}, url=${url}, r=${request.readyState}, status=${request.status}`);
setv(0,0,response,F_http_state,HTTP_DONE);
setv(0,0,response,F_http_status,400);
}


function on_timeout(evt){

if(TRACE_CHAN)console.log(`### on_timeout, id=${id}, url=${url}, r=${request.readyState}, status=${request.status}`);
setv(0,0,response,F_http_state,HTTP_DONE);
setv(0,0,response,F_http_status,408);
}


function on_change(evt){
if(TRACE_CHAN)console.log(`### on_change, id=${id}, url=${url}, r=${request.readyState}, status=${request.status}`);


switch(request.readyState){
case 2:

setv(0,0,response,F_http_state,HTTP_HEADERS);



setv(0,0,response,F_http_headers,request.getAllResponseHeaders());
break;
case 3:

setv(0,0,response,F_http_state,HTTP_BUSY);
break;
case 4:

setv(0,0,response,F_http_state,HTTP_DONE);




setv(0,0,response,F_http_status,request.status);


switch(request.responseType){
case"arraybuffer":
case"blob":

setv(0,0,response,F_http_body_type,BODY_BINARY);
break;

case"json":

setv(0,0,response,F_http_body_type,BODY_JSON);
break;

case"document":

setv(0,0,response,F_http_body_type,BODY_HTML);
break;

default:

setv(0,0,response,F_http_body_type,BODY_PLAIN);
}


if(request.responseText!="")
setv(0,0,response,F_http_body,request.responseText);

break;
}
}

}







function js_to_langx(langss){
var os_lang=LANG_ENG;
var prefix=langss.substring(0,2);

switch(prefix){


case"am":
os_lang=LANG_AMH;
break;
case"ar":
os_lang=LANG_ARA;
break;
case"be":
os_lang=LANG_BEL;
break;
case"bn":
os_lang=LANG_BEN;
break;
case"bg":
os_lang=LANG_BUL;
break;

case"ca":
os_lang=LANG_CAT;
break;
case"zh":

if(langss.substr(3,2)=="CN")

os_lang=LANG_CHS;
else
os_lang=LANG_CHT;
break;
case"hr":
os_lang=LANG_CRO;
break;
case"cs":
os_lang=LANG_CZE;
break;
case"da":
os_lang=LANG_DAN;
break;

case"nl":
os_lang=LANG_NED;
break;
case"en":

os_lang=LANG_ENG;
break;

case"es":
os_lang=LANG_ESL;
break;

case"fi":
os_lang=LANG_FIN;
break;
case"fr":
os_lang=LANG_FRA;
break;

case"ka":
os_lang=LANG_GEO;
break;
case"de":
os_lang=LANG_DEU;
break;
case"el":
os_lang=LANG_GRE;
break;
case"gu":
os_lang=LANG_GUJ;
break;
case"he":

os_lang=LANG_HEB;
break;
case"hi":
os_lang=LANG_HIN;
break;
case"hu":
os_lang=LANG_HUN;
break;
case"is":
os_lang=LANG_ICE;
break;
case"id":

os_lang=LANG_IND;
break;
case"it":
os_lang=LANG_ITA;
break;
case"ja":
os_lang=LANG_JAP;
break;
case"ko":
os_lang=LANG_KOR;
break;
case"ms":
os_lang=LANG_MAL;
break;
case"mr":
os_lang=LANG_MAR;
break;
case"no":
os_lang=LANG_NOR;
break;
case"or":
os_lang=LANG_ORI;
break;
case"fa":
os_lang=LANG_PER;
break;
case"pl":
os_lang=LANG_POL;
break;
case"pt":
os_lang=LANG_POR;
break;
case"pa":
os_lang=LANG_PUN;
break;
case"ro":
os_lang=LANG_ROM;
break;
case"ru":
os_lang=LANG_RUS;
break;
case"sk":
os_lang=LANG_SLK;
break;
case"sl":
os_lang=LANG_SLV;
break;
case"sv":
os_lang=LANG_SVE;
break;
case"tl":
os_lang=LANG_TAG;
break;
case"ta":
os_lang=LANG_TAM;
break;
case"te":
os_lang=LANG_TEL;
break;
case"th":
os_lang=LANG_THA;
break;
case"tu":
os_lang=LANG_TUR;
break;
case"uk":
os_lang=LANG_UKR;
break;
case"ur":
os_lang=LANG_URD;
break;
case"vi":
os_lang=LANG_VIE;
break;
}
return os_lang;
}





export function halt(){
console.log("inside halt");
debugger;
}






export function quit(errcode=0){

console.log(`inside halt, errorcode=${errcode}`);
debugger;
}








export function hist_get_code(module_enum,where){




let lines;
lines=g_code[module_enum];
if(lines===null)
return null;

let nlines=lines.length;
if(nlines<2)
return null;

if((where<1)||(where>=nlines))
return"";

return lines[where];
}





export function vars_ptr_to_value_ptr(vars_ptr){




let base_path=vars_ptr.clone();
base_path.key.length=2;
base_path.key.push(VAL);


let data_path=get_path(base_path).clone();
if(TRACE_TO_VAL_PTR)console.log(str.conv("to_value_ptr, vars={path}, base={path}, data={path}",vars_ptr,base_path,data_path));


let i;
let f;
for(i=2;i<vars_ptr.key.length;i++){
f=vars_ptr.key[i];
if(f!==F_v_fields)
data_path.key.push(f);
}

if(TRACE_TO_VAL_PTR)console.log(str.conv(" after append, data={path}",data_path));
return data_path;
}




export function set_auto_size(myblock,width,height){


myblock.bounds.width=width;
myblock.bounds.height=width;


setv(0,0,myblock.extra,F_box,F_width,width);
setv(0,0,myblock.extra,F_box,F_height,height);
}





export function type_of(path){
let pathx=path_to_pathx(path);
if(pathx===null||!pathx.exists)
return TYPE_U;

return node_get_type(pathx.lev[pathx.lastx].node);
}










export function sound_play(snd,_options=null){
let offset=0;


for(let property in _options){
switch(property){
case'loop':
snd.loopf=_options.loop===Y;
break;

case'notify':
snd.notifyf=_options.notify===Y;
break;

case'offset':

offset=_options.offset;
break;

case'id':

snd.id=_options.id;
break;

default:

argument_err("bad option: "+property);

}
}


var startx=0;
if(snd.curx==0&&snd.numx==1){


var state=snd.audio[0].readyState;
if(state<3){
console.log("skipping not ready sound");
return;
}
}else{



snd.curx+1;
if(startx>=snd.numx)
startx=0;
}

var tryx=startx;
var myaudio;

while(1){
myaudio=snd.audio[tryx];
if(myaudio.currentTime==0||myaudio.ended){

if(TRACE_SOUND)console.log(`-- slot at ix ${tryx} is idle`);
break;
}


if(TRACE_SOUND)console.log(`-- slot at ix ${tryx} is busy`);
tryx+=1;
if(tryx>=snd.numx)
tryx=0;
if(tryx==startx){

myaudio=myaudio.cloneNode();
myaudio.currentTime=0;
snd.audio.push(myaudio);
snd.curx=snd.numx;
snd.numx+=1;
if(TRACE_SOUND)console.log(`-- wrapped around, added copy, num=${snd.numx}`);
break;
}
}

if(offset!=0){

myaudio.currentTime=offset;
}

if(snd.loopf)
myaudio.loop=true;

myaudio.play();













}





export function sound_pause(snd){
snd.pause_position=snd.audio.currentTime;
snd.audio.pause();
}






export function sound_resume(snd){


snd.audio.play();
}




export function conv_degK_to_degC(degK){

return degK-273.15;
}




export function conv_degC_to_degK(degC){

return degC+273.15;
}




export function conv_degK_to_degF(degK){

return(degK*9/5)-459.67;
}




export function conv_degF_to_degK(degF){

return(degF+459.67)*5/9;
}




export function is_odd(n){
if(n==U)
return U;

if(is_numeric(n)===Y){
if((Math.round(n)%2)!==0)
return Y;
else
return N;
}else{
return ERR;
}
}




export function is_even(n){
if(n==U)
return U;

if(is_numeric(n)===Y){
if((Math.round(n)%2)===0)
return Y;
else
return N;
}else{
return ERR;
}
}




export function is_enum(n){
if((n>=FIRST_ENUM)&&(n<=LAST_ENUM))
return Y;
else
return N;
}





export function is_err(n){
if(Number.isNaN(n))
return Y;
else
return N;
}




export function is_err_u(n){
if(Number.isNaN(n)||(n===U))
return Y;
else
return N;
}





export function is_numeric(n){
if(Number.isNaN(n)||(n===U)||((n>=FIRST_ENUM)&&(n<=LAST_ENUM)))
return N;
else
return Y;
}




export function is_not_numeric(n){
if(Number.isNaN(n)||(n===U)||((n>=FIRST_ENUM)&&(n<=LAST_ENUM)))
return Y;
else
return N;
}





export function is_err_enum(n){
if(Number.isNaN(n)||((n>=FIRST_ENUM)&&(n<=LAST_ENUM)))
return Y;
else
return N;
}





export function is_finite(n){
if((is_numeric(n)===Y)&&(n!==INFINITY)&&(n!==NEG_INFINITY))
return Y;
else
return N;
}





export function is_portrait(r){
let h=getn(r,F_width);
let v=getn(r,F_height);

if(is_err_enum_b(h)||is_err_enum_b(v)){
if(CHECKS)argument_err("bad rectangle");
return ERR;
}

if((h===U)||(v===U))
return U;

if(h<v)
return Y;
else
return N;
}





export function is_landscape(r){
let h=getn(r,F_width);
let v=getn(r,F_height);

if(is_err_enum_b(h)||is_err_enum_b(v)){
if(CHECKS)argument_err("bad rectangle");
return ERR;
}

if((h===U)||(v===U))
return U;

if(h>=v)
return Y;
else
return N;
}





export function clamp(a,lo,hi){
if(is_err_enum_b(a))
return ERR;

if(a===U)
return U;

return Math.max(lo,Math.min(a,hi));
}




export function uzero(n){
if(n===U)
return 0;

return n;
}





export function distance_sq(a,b){
let x1=getn(a,F_x);
let y1=getn(a,F_y);
let x2=getn(b,F_x);
let y2=getn(b,F_y);
if(is_err_enum_b(x1)||is_err_enum_b(x2)||is_err_enum_b(y1)||is_err_enum_b(y2))
return ERR;
if((x1===U)||(x2===U)||(y1===U)||(y2===U))
return U;
let dx=x1-x2;
let dy=y1-y2;
return(dx*dx+dy*dy);
}




export function distance(a,b){
let x1=getn(a,F_x);
let y1=getn(a,F_y);
let x2=getn(b,F_x);
let y2=getn(b,F_y);
if(is_err_enum_b(x1)||is_err_enum_b(x2)||is_err_enum_b(y1)||is_err_enum_b(y2))
return ERR;
if((x1===U)||(x2===U)||(y1===U)||(y2===U))
return U;
let dx=x1-x2;
let dy=y1-y2;
return Math.sqrt(dx*dx+dy*dy);
}






function distance_xy(ax,ay,bx,by){
let dx=ax-bx;
let dy=ay-by;
return Math.sqrt(dx*dx+dy*dy);
}






export function distance_to_segment(p,a,b){
let px=getn(p,F_x);
let py=getn(p,F_y);
let vx=getn(a,F_x);
let vy=getn(a,F_y);
let wx=getn(b,F_x);
let wy=getn(b,F_y);


if(is_err_enum_b(px)||is_err_enum_b(py)||is_err_enum_b(vx)||is_err_enum_b(vy)||is_err_enum_b(wx)||is_err_enum_b(wy))
return ERR;
if((px===U)||(py===U)||(vx===U)||(vy===U)||(wx===U)||(wy===U))
return U;

let dx=vx-wx;
let dy=vy-wy;
let l2=dx*dx+dy*dy;
if(l2<=0.000001)
return distance_xy(px,py,vx,vy);

let t=((px-vx)*(wx-vx)+(py-vy)*(wy-vy))/l2;
if(t<=0){

return distance_xy(px,py,vx,vy);
}

if(t>=1){

return distance_xy(px,py,wx,wy);
}



let sx=vx+t*(wx-vx);
let sy=vy+t*(wy-vy);
return distance_xy(px,py,sx,sy);
}




export function sign(n){
if(is_err_enum_b(n))
return ERR;

if(n===U)
return U;

if(n===0)
return 0;

if(n>0)
return+1;
else
return-1;
}




export function abs(n){
if(is_err_enum_b(n))
return ERR;

if(n===U)
return U;

if(n>=0)
return n;
else
return-n;
}





export function power(base,expon){
let result;


if(is_err_enum_b(base)||is_err_enum_b(expon))
return ERR;


if((base===U)||(expon===U))
return U;



result=Math.pow(base,expon);

if((result>=FIRST_ENUM)&&(result<=LAST_ENUM))

return ERR;

return result;
}





export function log(msg){
console.log(msg);
}




export function hypot(a,b){
return sqrt(add(mul(a,a),mul(b,b)));
}






export function lg(n,_options){
let base=E;

if(is_err_enum_b(n)||(n<0))
return ERR;

if(n===U)
return U;

if(_options!==null){
if(_options.hasOwnProperty('base')){
base=_options.base;
if(Number.isNaN(base)||(base<0))
return ERR;
if(base===U)
return U;
return Math.log(n)/Math.log(base);
}
}


return Math.log(n);
}





export function factorial(n){
let result;

if(Number.isNaN(n)||((n>=FIRST_ENUM)&&(n<=LAST_ENUM)))
return ERR;

if(n===U)
return U;

if(n<0)
return ERR;

result=n;
while(n>2){
n--;
result*=n;
}

return result;
}





export function sqrt(n){
if(is_err_enum(n))
return ERR;

if(n===U)
return U;

if(n<0)
return ERR;

return Math.sqrt(n);
}








export function min(...args){
let result=INFINITY;
let a;
let i;
let empty=true;


for(i=0;i<args.length;i++){
a=args[i];


if(is_err_enum_b(a))
return ERR;

if((a!==U)&&(a<result)){
result=a;
empty=false;
}
}

if(empty)
return U;
else
return result;
}








export function max(...args){
let result=NEG_INFINITY;
let a;
let i;
let empty=true;


for(i=0;i<args.length;i++){
a=args[i];


if(is_err_enum_b(a))
return ERR;

if((a!==U)&&(a>result)){
result=a;
empty=false;
}
}

if(empty)
return U;
else
return result;
}





export function fract(n){
if(is_err_enum_b(n))
return ERR;

if(n===U)
return U;


if(n>=0)
return n-Math.floor(n);
else
return n-Math.ceil(n);
}





export function magnitude(n){
return n.mag;
}





export function to_unit(n,targunit){
let factor;
let conversionf;


if(is_err_enum_b(n.mag)||(!is_enum_b(targunit)))
return ERR;

if((n.mag===U)||(n.family===U))
return U;


conversionf=get_func(families,n.family,F_fam_units,targunit,F_base_to_unit);
if(conversionf!==null){

return conversionf.code(n.mag);

}else{

factor=getn(families,n.family,F_fam_units,targunit,F_unit_factor);

if(factor===U){

if(CHECKS)internal_err('no conversion ratio found in the family for the target unit');
return ERR;
}
return div(n.mag,factor);
}
}






export function to_meas(mag,unit){
let familyx;


familyx=getn(unit_to_family,unit);


if(familyx===U){
halt();
return meas(ERR,N_each,Y_Scalar);
}


return meas(mag,unit,familyx);
}




export function mm_to_dots(b,mm){

return Math.round((mm/25.4)*b.dpi);
}




export function cm_to_dots(b,cm){
return Math.round((cm/2.54)*b.dpi);
}




export function pt_to_dots(b,pt){
return Math.round((pt/72)*b.dpi);
}




export function pc_to_dots(b,picas){
return Math.round((picas/6)*b.dpi);
}




export function in_to_dots(b,inch){
return Math.round(inch*b.dpi);
}





export function dots_to_mm(b,dots){
return Math.round((dots/b.dpi)*25.4);
}





export function dots_to_cm(b,dots){
return(dots/b.dpi)*2.54;
}




export function dots_to_pt(b,dots){
return Math.round((dots/b.dpi)*72);
}





export function dots_to_in(b,dots){
return(dots/b.dpi);
}






export function interpolate(
a_cur,
a_min,
a_max,
b_min,
b_max,
_options=null){
let clamped=false;
let rounded=false;

if(_options!==null){
if(_options.hasOwnProperty('round'))
rounded=_options.round;

if(_options.hasOwnProperty('clamp'))
clamped=_options.clamp;
}

if(is_err_enum_b(a_cur)||
is_err_enum_b(a_min)||
is_err_enum_b(a_max)||
is_err_enum_b(b_min)||
is_err_enum_b(b_max))
return ERR;

if((a_cur===U)||
(a_min===U)||
(a_max===U)||
(b_min===U)||
(b_max===U))
return U;

if(a_min===a_max)

return b_min;


if(clamped){
if(a_cur<=a_min)
return b_min;

if(a_cur>=a_max)
return b_max;

}else{
if(a_cur===INFINITY)
return INFINITY;

if(a_cur===NEG_INFINITY)
return NEG_INFINITY;
}

if(rounded)
return Math.round(b_min+(b_max-b_min)*(a_cur-a_min)/(a_max-a_min));
else
return b_min+(b_max-b_min)*(a_cur-a_min)/(a_max-a_min);
}












export function solve_point(options){
let pin=5;
let dx=0;
let dy=0;
let basis;
let basis_l;
let basis_t;
let basis_w;
let basis_h;
let x;
let y;


for(let property in options){
switch(property){
case'basis':
if(options.basis instanceof Rectangle){
basis=options.basis;
basis_l=basis.left;
basis_t=basis.top;
basis_w=basis.width;
basis_h=basis.height;

}else if((options.basis instanceof a_path)||(options.basis instanceof a_tree)){
basis=options.basis;
basis_l=getn(basis,F_left);
basis_t=getn(basis,F_top);
basis_w=getn(basis,F_width);
basis_h=getn(basis,F_height);
}else
argument_err("basis must be a a_path or a_rect");
break;

case'dx':
dx=options.dx;
break;

case'dy':
dy=options.dy;
break;

case'pin':
pin=options.pin;
if(CHECKS&&(pin<1||pin>9))argument_err("bad pin value");
break;

default:

argument_err("bad option: "+property);

}
}

if(basis===null)
argument_err("missing basis");


switch((pin-1)%3){
case 0:
x=basis_l;
break;

case 1:
x=basis_l+basis_w/2;
break;

case 2:
x=basis_l+basis_w;
break;
}


switch(((pin-1)/3)>>0){
case 0:
y=basis_t;
break;

case 1:
y=basis_t+basis_h/2;
break;

case 2:
y=basis_t+basis_h;
break;
}


x+=dx;
y+=dy;


return point_as_tree(x,y);
}





export function solve_cellsize(
totwidth,
ncells,
gapfract
){
return totwidth/(ncells+(ncells+1)*gapfract);
}






export function solve_rect(options){




































let centerx=U;
let centery=U;
let dx=U;
let dy=U;
let left=U;
let right=U;
let top=U;
let bottom=U;
let width=U;
let height=U;
let inset=U;
let inset_n=U;
let inset_s=U;
let inset_e=U;
let inset_w=U;
let inset_y=U;
let inset_x=U;
let aspect=U;
let pin=1;




let round=false;
let error=false;
let basis;
let basis_l;
let basis_t;
let basis_w;
let basis_h;
let horz_specified=false;
let vert_specified=false;



for(let property in options){
switch(property){
case'basis':
if(options.basis instanceof Rectangle){
basis=options.basis;
basis_l=basis.left;
basis_t=basis.top;
basis_w=basis.width;
basis_h=basis.height;

}else if((options.basis instanceof a_path)||(options.basis instanceof a_tree)){
basis=options.basis;
basis_l=getn(basis,F_left);
basis_t=getn(basis,F_top);
basis_w=getn(basis,F_width);
basis_h=getn(basis,F_height);
}else
argument_err("basis must be a path or tree");
break;

case'aspect':
aspect=options.aspect;
break;

case'left':
left=options.left;
horz_specified=true;
break;

case'top':
top=options.top;
vert_specified=true;
break;

case'top_left':
left=getn(options.top_left,F_x);
top=getn(options.top_left,F_y);
horz_specified=true;
vert_specified=true;
break;

case'right':
right=options.right;
horz_specified=true;
break;

case'bottom':
bottom=options.bottom;
vert_specified=true;
break;

case'cx':
centerx=options.cx;
break;

case'cy':
centery=options.cy;
break;

case'dx':
dx=options.dx;
break;

case'dy':
dy=options.dy;
break;

case'height':
height=options.height;
break;

case'width':
width=options.width;
break;



case'inset':
inset=options.inset;
break;

case'inset_n':
inset_n=options.inset_n;
break;

case'inset_s':
inset_s=options.inset_s;
break;

case'inset_e':
inset_e=options.inset_e;
break;

case'inset_w':
inset_w=options.inset_w;
break;

case'inset_y':
inset_y=options.inset_y;
break;

case'inset_x':
inset_x=options.inset_x;
break;

case'pin':
pin=options.pin;
if(CHECKS&&(pin<1||pin>9))argument_err("bad pin value");
break;



case'round':
round=options.round;
break;

default:

argument_err("bad option: "+property);

}
}

if(basis!==null){

if(dx!==U)
basis_l+=dx;

if(dy!==U)
basis_t+=dy;


if(inset!==U){

basis_l+=inset;
basis_t+=inset;
basis_w-=inset*2;
basis_h-=inset*2;
}

if(inset_y!==U){
basis_t+=inset_y;
basis_h-=inset_y*2;
}

if(inset_x!==U){
basis_l+=inset_x;
basis_w-=inset_x*2;
}

if(inset_n!==U){
basis_t+=inset_n;
basis_h-=inset_n;
}

if(inset_s!==U){
basis_h-=inset_s;
}

if(inset_e!==U){
basis_w-=inset_e;
}

if(inset_w!==U){
basis_l+=inset_w;
basis_w-=inset_w;
}



if(!horz_specified){
switch((pin-1)%3){
case 0:
left=basis_l;
break;

case 1:
centerx=basis_l+basis_w/2;
break;

case 2:
right=basis_l+basis_w;
break;
}
}


if(!vert_specified){
switch(Math.floor((pin-1)/3)){
case 0:
top=basis_t;
break;

case 1:
centery=basis_t+basis_h/2;
break;

case 2:
bottom=basis_t+basis_h;
break;
}
}


if(aspect!==U){

height=basis_w/aspect;
if(height<=basis_h){

width=basis_w;
}else{

height=basis_h;
width=height*aspect;
}
}

}


if(left!==U){

if(width!==U){


}else if(right!==U){

width=(right-left);

}else if(centerx!==U){

width=(centerx-left)*2;

}else if(basis!==null){

width=basis_w-(left-basis_l);

}else{

error=true;
}
}else if(right!==U){

if(width!==U){

left=right-width;
}else if(centerx!==U){

width=(right-centerx)*2;
left=right-width;
}else if(basis!==null){
width=basis_w;
left=right-width;
}else{
error=true;
}
}else if(centerx!==U){

if(width!==U){

left=centerx-width/2;

}else if(basis!==null){

width=basis_w;
left=centerx-width/2;

}else{
error=true;
}
}else{
error=true;
}


if(top!==U){

if(height!==U){

}else if(bottom!==U){

height=bottom-top;
}else if(centery!==U){

height=(centery-top)*2;
}else if(basis!==null){

height=basis_h-(top-basis_t);
}else{
error=true;
}
}else if(bottom!==U){

if(height!==U){

top=bottom-height;
}else if(centery!==U){

height=(bottom-centery)*2;
top=bottom-height;
}else if(basis!==null){

height=basis_h;
top=bottom-height;
}else{
error=true;
}
}else if(centery!==U){

if(height!==U){

top=centery-height/2;
}else if(basis!==null){

height=basis_h;
top=centery-height/2;
}else{
error=true;
}
}else{
error=true;
}

if(CHECKS&&error)argument_err("insufficient info to determine rectangle");

if(round){
left=Math.round(left);
top=Math.round(top);
width=Math.round(width);
height=Math.round(height);
}

return rect_as_tree(left,top,width,height);
}





function count_drawable(slices){
let n=0;
let slice;
let i;
for(slice of slices){
if(slice.drawer!==null)
n+=1;
}
return n;
}




const HORZ=true;
const VERT=false;
const SMALLER=true;
const BIGGER=false;


function calc_slice_edge(
orient,
sizing,
targix,
gap_fract,
slices)
{

let sx;
let cum_gap;
let slice_size;
let drawx;
let slice;
let edge;

drawx=0;
cum_gap=0;
sx=0;


while(1){
slice=slices[sx];
sx+=1;
if(slice.drawer===null){

if(orient===HORZ)
cum_gap+=slice.box.width;
else
cum_gap+=slice.box.height;
}else{

drawx+=1;
if(drawx===targix){
if(orient===HORZ)
if(sizing===SMALLER)
edge=slice.box.left;
else
edge=slice.box.left+slice.box.width;
else
if(sizing===SMALLER)
edge=slice.box.top;
else
edge=slice.box.top+slice.box.height;
break;
}
cum_gap=0;
}
}


if(sizing===SMALLER){

edge-=cum_gap*gap_fract;
}else{

cum_gap=0;
while(1){
if(sx>=slices.length)
break;
slice=slices[sx];
sx+=1;
if(slice.drawer!==null)
break;
if(orient===HORZ)
cum_gap+=slice.box.width;
else
cum_gap+=slice.box.height;
}


edge+=cum_gap*gap_fract;
}

return edge;
}







export function solve_grid_dim(
ncells,
avail,
cellwidth,
gapwidth,
indent
){


let ncols=1;
let celltot=(cellwidth+gapwidth);
avail-=indent*2+cellwidth;


while(avail>=celltot){
ncols+=1;
avail-=celltot;
}

let nrows=round_up(ncells/ncols)





while((ncols-1)*nrows>=ncells){
ncols-=1;
}



let result=new a_tree("std","solve_grid_dim");
setv(0,0,result,F_x,ncols);
setv(0,0,result,F_y,nrows);
return result;
}





export function solve_grid_rect(b,col1,row1,col2,row2,_options=null){
let gap=0.5;
let left;
let top;
let right;
let bottom;
let icol1;
let icol2;
let irow1;
let irow2;


for(let property in _options){
switch(property){
case'gap':
gap=_options.gap;
break;

default:

argument_err("bad option: "+property);

}
}


let spec=null;
if((b!==null)&&(b.div!==null)&&(b.div.is_grid))
spec=b.div;

if((spec===null)||is_err_enum_b(col1)||is_err_enum_b(row1)||is_err_enum_b(col2)||is_err_enum_b(row2)){
if(CHECKS)argument_err("bad arguments to function");
return ERR_TREE;
}

if((col1===U)||(row1===U)||(col2===U)||(row2===U)){
return U_TREE;
}


let ncols=count_drawable(spec.horz_slices);
let nrows=count_drawable(spec.vert_slices);

icol1=col1;
icol2=col2;
irow1=row1;
irow2=row2;


if(icol1<1)
icol1=1;
if(icol2<1)
icol2=1;
if(irow1<1)
irow1=1;
if(irow2<1)
irow2=1;

if(icol1>ncols)
icol1=ncols;
if(icol2>ncols)
icol2=ncols;
if(irow1>nrows)
irow1=nrows;
if(irow2>nrows)
irow2=nrows;


left=calc_slice_edge(HORZ,SMALLER,icol1,gap,spec.horz_slices);
top=calc_slice_edge(VERT,SMALLER,irow1,gap,spec.vert_slices);
right=calc_slice_edge(HORZ,BIGGER,icol2,gap,spec.horz_slices);
bottom=calc_slice_edge(VERT,BIGGER,irow2,gap,spec.vert_slices);

return rect_as_tree(left,top,right-left,bottom-top);
}











export function round(n,_options=null){
let precision=0;
let mult;

if(is_err_enum_b(n))
return ERR;

if(n===0)
return 0;

if(n===U)
return U;


for(let property in _options){
switch(property){
case'precision':
precision=_options.precision;
break;

default:

argument_err("bad option: "+property);

}
}


if(precision===0){

return Math.round(n);
}else if(precision>0){

mult=Math.pow(10,precision);
return Math.round(n/mult)*mult;
}else{

mult=Math.pow(10,-precision);
return Math.round(n*mult)/mult;
}
}





export function round_up(n,_options=null){
let precision=0;
let mult;
let property;

if(is_err_enum_b(n))
return ERR;

if(n===0)
return 0;

if(n===U)
return U;


if(_options!==null)
for(property in _options){
switch(property){
case'precision':
precision=_options.precision;
break;

default:

argument_err("bad option: "+property);

}
}


if(precision===0){

return Math.ceil(n);
}else if(precision>0){

mult=Math.pow(10,precision);
return Math.ceil(n/mult)*mult;
}else{

mult=Math.pow(10,-precision);
return Math.ceil(n*mult)/mult;
}
}





export function round_down(n,_options=null){
let precision=0;
let mult;

if(is_err_enum_b(n))
return ERR;

if(n===0)
return 0;

if(n===U)
return U;



for(let property in _options){
switch(property){
case'precision':
precision=_options.precision;
break;

default:

argument_err("bad option: "+property);

}
}


if(precision===0){

return Math.floor(n);
}else if(precision>0){

mult=Math.pow(10,precision);
return Math.floor(n/mult)*mult;
}else{

mult=Math.pow(10,-precision);
return Math.floor(n*mult)/mult;
}
}





export function round_zero(number,_options=null){
if(number>=0)
return round_down(number,_options);
else
return round_up(number,_options);
}





export function round_multiple(a,mult){
let result;

if(is_err_enum_b(a)||is_err_enum_b(mult))
return ERR;

if(a===0)
return 0;

if((a===U)||(mult===U))
return U;

if(mult===0)
return 0;

mult=Math.abs(mult);

if(mult===1)
return Math.round(a);


return Math.round(a/mult)*mult;
}










export function rem(input,divisor,options=null){
let one_flag=false;
let neg_flag=false;
let result1;
let result2;

if(is_err_enum_b(input)||is_err_enum_b(divisor))
return ERR;

if((input==U)||(divisor===U))
return U;

if(input===0)
return 0;


divisor=Math.floor(divisor);

if(divisor<=0)
return ERR;


if(options!==null){
for(let property in options){
switch(property){

case'one':
one_flag=options.one===Y;
break;

case'neg':
neg_flag=options.neg===Y;
break;

default:

argument_err("bad option: "+property);

}
}
}

if(one_flag){






if(neg_flag)
argument_err("neg_flag and one_flag together not yet implemented");

if(input<=0){

let temp=(-input)%divisor;
return divisor-temp;
}else{

return 1+((input-1)%divisor);
}


}else{





result1=input%divisor;

if(neg_flag){

if(result1<0){

result2=result1+divisor;
}else{

result2=result1-divisor;
}


if(Math.abs(result1)<Math.abs(result2))
return result1;
else
return result2;

}else{

if(result1<0)
result1+=divisor;
return result1;
}
}
}








export function idiv(input,divisor,options){
let one_flag=false;
let neg;
let result;

if(is_err_enum_b(input)||is_err_enum_b(divisor))
return ERR;

if((input===U)||(divisor===U))
return U;

if(input===0)
return 0;


divisor=Math.floor(divisor);

if(divisor<=0)
return ERR;

neg=false;
if(input<0){
neg=true;
input=-input;
}


if(options!==null){
for(let property in options){
switch(property){

case'one':
one_flag=options.one===Y;
break;






default:

argument_err("bad option: "+property);

}
}
}

if(one_flag){


result=1+Math.floor((input-1)/divisor);
}else{


result=Math.floor(input/divisor);
}

if(neg)
result=-result;

return result;
}




export function cos(n){
let radians;

radians=n.mag;

if(Number.isNaN(radians)||((radians>=FIRST_ENUM)&&(radians<=LAST_ENUM)))

return ERR;

if(radians===U)

return U;


return Math.cos(radians);
}





export function sin(n){
let radians;

radians=n.mag;

if(Number.isNaN(radians)||((radians>=FIRST_ENUM)&&(radians<=LAST_ENUM)))

return ERR;

if(radians===U)

return U;


return Math.sin(radians);
}




export function tan(n){
let radians;

radians=n.mag;

if(Number.isNaN(radians)||((radians>=FIRST_ENUM)&&(radians<=LAST_ENUM)))

return ERR;

if(radians===U)

return U;


return Math.tan(radians);
}





export function arc_cos(n){
if(n===U)

return meas(U,N_radian,Y_Angle);

if(n>1||n<-1)
return meas(ERR,N_radian,Y_Angle);

return meas(Math.acos(n),N_radian,Y_Angle);
}





export function arc_sin(n){
if(n===U)

return meas(U,N_radian,Y_Angle);

if(n>1||n<-1)
return meas(ERR,N_radian,Y_Angle);

return meas(Math.asin(n),N_radian,Y_Angle);
}





export function arc_tan(n){
let mag;

if(Number.isNaN(n)||((n>=FIRST_ENUM)&&(n<=LAST_ENUM)))

mag=ERR;

else if(n===U)

mag=U;


else
mag=Math.atan(n);

return meas(mag,N_radian,Y_Angle);
}




export function arc_tan2(y,x){
let mag;

if(Number.isNaN(x)||((x>=FIRST_ENUM)&&(x<=LAST_ENUM))||
Number.isNaN(y)||((y>=FIRST_ENUM)&&(y<=LAST_ENUM)))

mag=ERR;

else if((x===U)||(y===U))

mag=U;


else
mag=Math.atan2(y,x);

return meas(mag,N_radian,Y_Angle);
}





export function random(){
return Math.random();
}





export function random_range(MIN,MAX){
return MIN+Math.random()*(MAX-MIN);
}





export function random_int(MIN,MAX){
return MIN+Math.floor(Math.random()*(MAX-MIN+1));
}





const WORDS=[
"abac","abas","abba","abbe","abbs","abed","abet","abid","abos","abri","abut","abye","abys","acai","acca","aced","acer","aces","ache","achy","acid","acme","acne",
"acre","acta","acts","adaw","adds","addy","adit","ados","adry","adze","aeon","aero","aery","aesc","afar","affy","afro","agar","agas","aged","agee","agen","ager","ages",
"agha","agin","agio","agma","agog","agon","ague","ahed","ahem","ahis","ahoy","aias","aide","aids","aiga","aims","aine","ains","airn","airs","airt","airy","aits","aitu",
"ajar","ajee","aked","akee","akes","akin","amah","amas","ambo","amen","amia","amid","amie","amin","amir","amis","ammo","amok","amps","amus","anan","anas","ance","ands",
"anes","anew","anga","anis","ankh","anna","anno","anns","anoa","anon","anow","ansa","anta","ante","anti","ants","anus","apay","aped","aper","apes","apex","apod","apos",
"apps","apse","apso","apts","aqua","arak","arar","arba","arbs","arch","arco","arcs","ards","area","ared","areg","ares","aret","arew","arfs","aria","arid","aris","arks",
"arms","army","arna","arow","arpa","arse","arsy","arti","arts","arty","arum","arvo","asar","asci","asea","ashy","asks","asps","atap","ates","atma","atoc","atok","atom",
"atop","atua","aufs","auks","aune","aunt","aura","auto","avas","aver","aves","avid","avos","avow","away","awed","awee","awes","awns","awny","awry","axed","axes","axis",
"axon","ayah","ayes","ayin","ayre","ayus","azan","azon","azym","baba","babe","babu","baby","bach","back","bacs","bade","bads","baff","baft","bagh","bags","baht",
"bait","baju","bake","bams","banc","band","bane","bang","bani","bank","bans","bant","baps","bapu","barb","bard","bare","barf","bark","barm","barn","barp","bars","base",
"bash","bask","bass","bast","bate","bath","bats","batt","baud","bauk","baur","bawd","bawn","bawr","baye","bays","bayt","bead","beak","beam","bean","bear","beat","beau",
"beck","bede","beds","bedu","beef","been","beep","beer","bees","beet","bego","begs","bein","bema","bend","bene","beni","benj","bens","bent","bere","berg","berk","berm",
"best","beta","bete","beth","bets","bevy","beys","bhat","bhut","bias","bibb","bibs","bice","bide","bidi","bids","bien","bier","biff","biga","bigg","bigs","bike","bima",
"bind","bine","bing","bink","bins","bint","biog","bios","bird","birk","biro","birr","bise","bish","bisk","bist","bite","bito","bits","bitt","bize","boab","boak","boar",
"boas","boat","boba","bobs","bock","bode","bods","body","boep","boet","boff","bogs","bogy","boho","bohs","bois","boke","boko","boks","boma","bomb","bona","bond","bone",
"bong","bonk","bony","boob","booh","book","boom","boon","boor","boos","boot","bops","bora","bord","bore","bork","borm","born","bors","bort","bosh","bosk","boss","bota",
"both","bots","bott","bouk","boun","bout","bowr","bows","boxy","boyf","boyg","boyo","boys","bozo","brad","brae","brag","brak","bran","bras","brat","braw","bray","bred",
"bree","brei","bren","brer","brew","brey","brie","brig","brik","brim","brin","brio","bris","brit","brod","brog","broo","bros","brow","brrr","brus","brut","brux","buat",
"buba","bubo","bubs","bubu","buck","buda","budi","budo","buds","buff","bufo","bugs","buhr","buik","buke","bumf","bump","bums","buna","bund","bung","bunk","bunn","buns",
"bunt","buoy","bura","burb","burd","burg","burk","burn","burp","burr","burs","bury","bush","busk","buss","bust","busy","bute","buts","butt","buys","buzz","byde","byes",
"byke","byre","byte","caba","cabs","caca","cade","cadi","cads","cafe","caff","cage","cags","cagy","caid","cain","cake","caky","cama","came","camo","camp","cams",
"cane","cang","cann","cans","cant","cany","capa","cape","caph","capi","capo","caps","carb","card","care","cark","carn","carp","carr","cars","cart","casa","case","cash",
"cask","cast","cate","cats","cauf","cauk","caum","caup","cava","cave","cavy","cawk","caws","cays","ceas","ceca","cede","cedi","cees","cens","cent","cepe","ceps","cere",
"cero","cert","cess","cete","chad","chai","cham","chao","chap","char","chas","chat","chav","chaw","chay","chef","cher","chew","chez","chia","chib","chic","chid","chik",
"chin","chip","chis","chit","chiv","chiz","choc","chog","chon","chop","chou","chow","chub","chug","chum","chut","ciao","cide","cids","cigs","cine","cion","cire","cist",
"cite","cito","cits","city","cive","coat","coax","cobb","cobs","coca","coch","cock","coco","coda","code","cods","coed","coff","coft","cogs","coho","coif","coin","coir",
"coit","coke","coky","coma","comb","come","comm","comp","coms","cond","cone","conf","coni","conk","conn","cons","cony","coof","cook","coom","coon","coop","coos","coot",
"cope","cops","copy","cord","core","corf","cork","corm","corn","cors","cory","cose","cosh","coss","cost","cosy","cote","coth","cots","cott","coup","cour","cove","cowk",
"cowp","cows","cowy","coxa","coxy","coys","coze","cozy","crab","crag","cram","cran","crap","craw","cray","cred","cree","crem","crew","crib","crim","cris","crit","croc",
"crog","crop","crow","crud","crue","crus","crux","cube","cubs","cuds","cued","cues","cuff","cuif","cuit","cuke","cunt","cups","curb","curd","cure","curf","curn","curr",
"curs","curt","cush","cusk","cusp","cuss","cute","cuts","cwms","cyan","cyma","cyme","cyst","cyte","czar","dabs","dace","dack","dada","dado","dads","daes","daff","daft",
"dago","dags","dahs","dais","daks","dame","damn","damp","dams","dang","dank","dans","dant","daps","darb","dare","darg","dari","dark","darn","dart","dash","data","date",
"dato","daub","daud","daur","daut","davy","dawd","dawk","dawn","daws","dawt","days","daze","dead","deaf","dean","dear","deaw","debe","debs","debt","deck","deco","deed",
"deek","deem","deen","deep","deer","dees","deet","deev","defi","deft","defy","degs","deid","deif","deke","deme","demo","demy","dene","deni","dens","dent","deny","dere",
"derm","dern","dero","derv","desi","desk","deus","deva","devs","dews","dewy","dexy","deys","dhak","dhow","dibs","dice","dich","dick","dict","dido","didy","dieb","died",
"dies","diet","diff","difs","digs","dika","dike","dime","dimp","dims","dine","ding","dink","dino","dins","dint","dips","dipt","dire","dirk","dirt","disa","disc","dish",
"disk","diss","dita","dite","dits","ditt","ditz","diva","dive","divi","divs","dixi","dixy","djin","doab","doat","dobs","doby","dock","doco","docs","dodo","dods","doek",
"doen","doer","does","doff","doge","dogs","dogy","dohs","doit","dojo","dome","doms","domy","dona","done","dong","dons","doob","dook","doom","doon","door","doos","dopa",
"dope","dops","dopy","dorb","dore","dork","dorm","dorp","dorr","dors","dort","dory","dose","dosh","doss","dost","dote","doth","dots","doty","douc","douk","doum","doun",
"doup","dour","dout","doux","dove","dowd","dowf","down","dowp","dows","dowt","doxy","doys","doze","dozy","drab","drac","drad","drag","dram","drap","drat","draw","dray",
"dree","dreg","drek","drew","drey","drib","drip","drop","drow","drub","drug","drum","drys","dsos","duad","duan","duar","dubs","duce","duci","duck","duct","dude","duds",
"dued","dues","duet","duff","dugs","duit","duka","duke","duma","dumb","dump","dune","dung","dunk","duns","dunt","duos","dupe","dups","dura","dure","durn","duro","durr",
"dush","dusk","dust","duty","dwam","dyad","dyed","dyer","dyes","dyke","dyne","dzho","dzos","each","eans","eard","earn","ears","ease","east","easy","eath","eats","eaus",
"eaux","eave","ebbs","ebon","ecad","ecce","ecco","eche","echo","echt","ecod","ecos","ecru","ecus","eddo","eddy","edge","edgy","edhs","edit","eech","eery","eevn","effs",
"efts","egad","eger","eggs","eggy","egis","egma","egos","ehed","eide","eiks","eina","eine","eish","eked","ekes","ekka","emes","emeu","emic","emir","emit","emma","emmy",
"emos","empt","emus","emyd","emys","ends","enes","enew","engs","enow","enuf","envy","eoan","eons","epee","epha","epic","epos","eras","ered","eres","erev","ergo","ergs",
"eric","erks","erne","erns","eros","errs","erst","eruv","eses","esky","esne","espy","esse","ests","etas","etat","etch","eten","ethe","eths","etic","etna","etui","euge",
"eugh","euks","euoi","euro","even","ever","eves","evet","evoe","evos","ewer","ewes","ewks","ewts","exam","exec","exed","exes","exit","exon","expo","eyas","eyed","eyen",
"eyer","eyes","eyne","eyot","eyra","eyre","eyry","fabs","face","fact","fade","fado","fads","fady","faff","fags","fahs","faik","fain","fair","faix","fake",
"fame","fand","fane","fang","fank","fano","fans","fard","fare","farm","faro","fars","fart","fash","fast","fate","fats","faun","faur","faut","faux","fava","fave","fawn",
"faws","fays","faze","fear","feat","feck","feds","feeb","feed","feen","feer","fees","feet","fegs","fehm","fehs","feis","feme","fems","fend","feni","fens","fent","feod",
"fere","ferm","fern","fess","fest","feta","fete","fets","fett","feud","feus","feys","fiar","fiat","fibs","fice","fico","fido","fids","fief","fier","fife","fifi","figo",
"figs","fike","fiky","find","fine","fini","fink","fino","fins","fire","firk","firm","firn","firs","fisc","fish","fisk","fist","fits","fitt","five","fixt","fizz","foam",
"fobs","foci","foen","foes","fogs","fogy","fohn","fohs","foid","foin","fond","fone","fons","font","food","foot","fops","fora","forb","ford","fore","fork","form","fort",
"foss","foud","four","fous","foxy","foys","fozy","frab","frae","frag","frap","fras","frat","frau","fray","free","fret","frib","frig","fris","frit","friz","froe","frog",
"from","fros","frow","frug","fubs","fuci","fuck","fuds","fuff","fugs","fugu","fuji","fume","fums","fumy","fund","fung","funk","funs","furr","furs","fury","fusc","fuse",
"fuss","fust","futz","fuze","fuzz","fyce","fyke","fyrd","gabs","gaby","gade","gadi","gads","gaed","gaen","gaes","gaff","gaga","gage","gags","gaid","gain","gair","gait",
"gajo","gama","gamb","game","gamp","gams","gamy","gane","gang","gans","gant","gape","gapo","gaps","gapy","garb","gare","gari","gars","gart","gash","gasp","gast","gate",
"gath","gats","gaud","gaum","gaun","gaup","gaur","gaus","gave","gawd","gawk","gawp","gays","gaze","gazy","gean","gear","geat","geck","geds","geed","geek","geep","gees",
"geez","geit","gems","gena","gene","gens","gent","genu","geos","gere","germ","gert","gest","geta","gets","geum","ghat","ghee","ghis","gibe","gibs","gids","gied","gien",
"gies","gift","giga","gigs","gimp","ging","gink","ginn","gins","gios","gips","gird","girn","giro","girr","girt","gism","gist","gite","gits","give","gizz","gjus","gnar",
"gnat","gnaw","gnow","gnus","goad","goaf","goas","goat","gobo","gobs","goby","gods","goer","goes","goey","goff","gogo","gone","gong","gonk","gons","good","goof","goog",
"gook","goon","goop","goor","goos","gora","gore","gori","gorm","gorp","gory","gosh","goss","goth","gouk","gout","govs","gowd","gowf","gowk","gown","goys","grab","grad",
"gram","gran","grat","grav","gray","gree","gren","grew","grex","grey","grid","grig","grim","grin","grip","gris","grit","grog","grok","grot","grow","grub","grue","grum",
"guan","guar","gubs","guck","gude","gues","guff","guga","guid","gump","gums","gung","gunk","guns","gups","gurn","gurs","guru","gush","gust","guts","guvs","guys","gybe",
"gymp","gyms","gyny","gyps","gyre","gyri","gyro","gyte","gyve","habu","hack","hade","hadj","hads","haed","haem","haen","haes","haet","haff","haft","hagg",
"hags","haha","hahs","haik","hain","hair","haji","hajj","haka","hake","haku","hame","hams","hand","hang","hank","hant","haps","hapu","hard","hare","hark","harm","harn",
"haro","harp","hart","hash","hask","hasp","hast","hate","hath","hats","haud","hauf","haut","have","hawk","hawm","haws","hays","haze","hazy","head","heap","hear","heat",
"hebe","hech","heck","heed","heft","hehs","heid","heir","heme","hemp","hems","hend","hens","hent","heps","hept","herb","herd","here","herm","hern","hero","hers","hery",
"hesp","hest","hete","heth","hets","hewn","hews","heys","hick","hide","hied","hies","high","hike","hims","hind","hing","hins","hint","hioi","hips","hipt","hire","hish",
"hisn","hiss","hist","hits","hive","hiya","hizz","hoar","hoas","hoax","hobo","hobs","hock","hods","hoed","hoer","hoes","hogg","hogh","hogs","hoha","hohs","hoik","hoka",
"hoke","hoki","homa","home","homo","homs","homy","hond","hone","hong","honk","hons","hood","hoof","hook","hoon","hoop","hoot","hope","hops","hora","hore","hori","horn",
"hors","hose","hoss","host","hote","hots","houf","hour","hout","hove","howe","howf","howk","hows","hoya","hoys","hubs","huck","hued","huer","hues","huff","huge","hugs",
"hugy","huhu","huia","huic","huis","huma","humf","hump","hums","hung","hunh","hunk","huns","hunt","hups","hurt","hush","husk","huso","huss","huts","hwan","hyed","hyen",
"hyes","hyke","hymn","hype","hypo","hyps","hyte","iamb","ibex","ibis","iced","icer","ices","ichs","icky","icon","idea","idee","idem","ides","iffy","igad","iggs","ikan",
"ikat","ikon","imam","imid","immy","impi","imps","inby","inch","info","ingo","inia","inks","inky","inns","inro","inti","into","ions","iota","ired","ires","irid","iris",
"irks","iron","isba","isit","isms","isna","isos","itas","itch","item","iure","iwis","ixia","izar","jabs","jack","jade","jafa","jaga","jagg","jags","jake","jaks",
"jamb","jams","jane","jann","jape","japs","jark","jarp","jars","jasp","jass","jasy","jato","jauk","jaup","java","jaws","jaxy","jays","jazy","jazz","jean","jeat","jedi",
"jeed","jeep","jeer","jees","jeez","jefe","jeff","jehu","jeon","jerk","jess","jest","jete","jets","jeux","jews","jiao","jibb","jibe","jibs","jiff","jigs","jimp","jink",
"jinn","jins","jinx","jird","gism","jive","jivy","jozz","jobe","jobs","jock","joco","joes","joey","jogs","john","join","joke","joky","jomo","jong","jook","jors","josh",
"joss","jota","jots","jouk","jour","jows","joys","juba","jube","juco","judo","juds","judy","juga","jugs","juju","juke","juku","jump","junk","jupe","jura","jure","jury",
"just","jute","juts","juve","jynx","kabs","kade","kadi","kaed","kaes","kafs","kago","kagu","kaid","kaie","kaif","kaik","kaim","kain","kais","kaka","kaki","kaks",
"kama","kame","kami","kana","kane","kang","kans","kant","kaon","kapa","kaph","kara","kark","karn","karo","kart","kata","kati","kats","kava","kawa","kaws","kayo","kays",
"kazi","kbar","keas","kebs","keck","keds","keef","keek","keen","keep","keet","kefs","kegs","keir","keks","kemb","kemp","keno","kens","kent","kepi","keps","kept","kerb",
"kerf","kern","kero","kesh","kest","keta","kete","keto","kets","keys","khaf","khan","khat","khet","khis","khor","khud","kibe","kick","kids","kief","kier","kiff","kifs",
"kina","kind","kine","king","kink","kino","kins","kipe","kipp","kips","kirk","kirn","kirs","kish","kiss","kist","kite","kith","kits","kiva","kiwi","knag","knap",
"knar","knee","knew","knit","knob","knop","knot","know","knub","knur","knut","koan","koap","koas","kobo","kobs","koff","koha","kois","koji","kond","konk","kons","kook",
"koph","kops","kora","kore","koro","kors","koru","koss","koto","kows","krab","kris","ksar","kudo","kudu","kueh","kues","kufi","kuia","kuku","kuna","kune","kuri","kuru",
"kuta","kuti","kutu","kuzu","kvas","kyak","kyar","kyat","kybo","kyes","kynd","kyne","kype","kyte","kyus","mabe","mace","mach","mack","macs","made","mads",
"maes","mage","magg","magi","mags","maid","maik","maim","main","mair","make","maki","mako","maks","mama","mams","mana","mand","mane","mang","mani","mano","mans","many",
"maps","mara","marc","mard","mare","marg","mark","marm","mars","mart","mary","masa","mase","mash","mask","mass","mast","masu","mate","math","mats","matt","maty","maud",
"maun","maut","mawk","mawn","mawr","maws","maxi","maya","mayo","mays","maze","mazy","mead","mean","meat","meck","meds","meed","meek","meer","mees","meet","meff","mega",
"megs","mein","meme","memo","mems","mend","mene","meng","meno","ment","menu","meou","meow","merc","mere","meri","merk","mesa","mese","mesh","mess","meta","mete","meth",
"mets","meus","meve","mews","meze","mezz","mhos","mibs","mica","mice","mich","mick","mico","mics","midi","mids","mien","miff","migg","migs","miha","mihi","mike","mime",
"mina","mind","mine","ming","mini","mink","mino","mint","minx","miny","mips","mire","miri","mirk","miro","mirs","mirv","miry","mise","miso","miss","mist","mite","mitt",
"mity","mixt","mixy","mizz","mnas","moai","moan","moas","moat","mobe","mobs","moby","moch","mock","mocs","mode","modi","mods","moer","moes","mofo","mogs","mohr","moit",
"mojo","moke","moki","moko","mome","momi","moms","mona","mong","monk","mono","mons","mony","mood","mooi","mook","moon","moop","moor","moos","moot","mope","mops","mopy",
"mora","more","morn","mors","mort","mose","mosh","mosk","moss","most","mote","moth","moti","mots","mott","motu","moue","moup","mous","move","mowa","mown","mows","moxa",
"moya","moys","moze","mozo","mozz","much","muck","muds","muff","mugg","mugs","muid","muir","mumm","mump","mums","mumu","mung","muni","muns","munt","muon","mura","mure",
"murk","murr","muse","mush","musk","muso","muss","must","mute","muti","muts","mutt","muzz","mycs","myna","myth","myxo","mzee","nabe","nabk","nabs","nach",
"nada","nads","naff","naga","nags","naif","naik","nain","name","nams","namu","nana","nane","nans","naoi","naos","napa","nape","naps","narc","nard","nare","nark","nary",
"nats","nave","navy","nays","naze","nazi","neap","near","neat","nebs","neck","neds","need","neem","neep","nefs","negs","neif","neks","nema","nemn","nene","neon","neps",
"nerd","nerk","nesh","ness","nest","nete","nets","nett","neuk","neum","neve","nevi","news","newt","next","nibs","nice","nick","nide","nidi","nids","nied","nief","nies",
"nife","niff","nigh","nimb","nims","nine","nipa","nips","nish","nisi","nite","nits","nixe","nixy","noah","nobs","nock","node","nodi","nods","noes","nogg","nogs","noir",
"noma","nome","noms","nona","none","nong","noni","nook","noon","noop","nope","nori","nork","norm","nose","nosh","nosy","nota","note","nott","noun","noup","nous","nout",
"nova","nown","nows","nowt","nowy","noys","nubs","nude","nuff","nuke","numb","nuns","nurd","nurr","nurs","nuts","nyas","nyed","nyes","oafs","oaks","oaky","oars","oary",
"oast","oath","oats","obas","obes","obey","obia","obis","obit","oboe","obos","ocas","occy","oche","octa","odah","odas","odds","odea","odes","odic","odor","odso","ofay",
"offs","ogam","ogee","ogre","ohed","ohia","ohms","ohos","oiks","oink","oint","okas","okay","okeh","okes","okra","okta","ombu","omen","omer","omit","omov","once","oner",
"ones","onie","onos","onst","onto","onus","onyx","oofs","oofy","oohs","ooms","oons","oont","oops","oose","oosy","oots","ooze","oozy","opah","oped","open","opes","oppo",
"opts","opus","orad","orbs","orby","orca","orcs","ordo","ords","ores","orfe","orfs","orgy","orra","orts","oryx","orzo","osar","oses","ossa","otic","otto","ouch","ouds",
"ouks","ouma","oupa","ouph","oups","ourn","ours","oust","outs","ouzo","oven","over","ovum","owed","ower","owes","owns","owre","owse","owts","oxen","oxer","oxes","oxid",
"oxim","oyer","oyes","oyez","paca","pace","pack","paco","pacs","pact","pacy","padi","pads","page","pahs","paid","paik","pain","pair","pais","pams","pand","pane","pang",
"pans","pant","papa","pape","paps","para","pard","pare","park","parp","parr","pars","part","pase","pash","pass","past","pate","path","pats","patu","paty","paua","pave",
"pavs","pawa","pawk","pawn","paws","pays","peag","peak","pean","pear","peas","peat","peba","pech","peck","pecs","peds","peed","peek","peen","peep","peer","pees","pegh",
"pegs","pehs","pein","peke","pend","pene","peni","penk","pens","pent","peon","pepo","peps","pere","peri","perk","perm","pern","perp","pert","perv","peso","pest","pets",
"pews","pfft","pfui","phat","phew","phis","phiz","phoh","phon","phos","phot","phut","pian","pias","pica","pice","pick","pics","pied","pier","pies","piet","pigs","pika",
"pike","piki","pima","pimp","pina","pine","ping","pink","pins","pint","piny","pion","pioy","pipa","pipe","pipi","pips","pipy","pirn","pirs","pise","pish","piso","piss",
"pita","pith","pits","pity","pium","pixy","pize","poas","pock","poco","pods","poem","poep","poet","pogo","pogy","pois","poke","poky","pome","pomo","pomp","poms","pond",
"pone","pong","ponk","pons","pont","pony","pood","poof","pooh","pook","poon","poop","poor","poos","poot","pope","pops","pore","pork","porn","port","pory","pose","posh",
"poss","post","posy","pote","pots","pott","pouf","pouk","pour","pout","pown","pows","poxy","pozz","prad","pram","prao","prat","prau","pray","pree","prem","prep","prex",
"prey","prez","prig","prim","proa","prob","prod","prof","prog","prom","proo","prop","pros","prow","pruh","prys","psis","psst","ptui","pube","pubs","puce","puck","puds",
"pudu","puer","puff","pugh","pugs","puha","puir","puja","puka","puke","puku","puma","pump","pumy","puna","pung","punk","puns","punt","puny","pupa","pups","pupu","pure",
"puri","purr","purs","push","puss","puts","putt","putz","puys","pyas","pyat","pyes","pyet","pyic","pyin","pyne","pyot","pyre","pyro","qadi","qaid","qats","qoph","quad",
"quag","quai","quat","quay","quep","quey","quid","quin","quip","quit","quiz","quod","quop","rabi","raca","race","rach","rack","racy","rade","rads","raff","raft",
"raga","rage","ragg","ragi","rags","rahs","raia","raid","raik","rain","rais","rait","raja","rake","raki","raku","rami","ramp","rams","rana","rand","rang","rani","rank",
"rant","rape","raps","rapt","rare","rark","rase","rash","rasp","rast","rata","rate","rath","rato","rats","ratu","raun","rave","rawn","raws","raya","rays","raze","razz",
"read","reak","ream","rean","reap","rear","rebs","reck","recs","redd","rede","redo","reds","reed","reef","reek","reen","rees","refs","reft","rego","regs","rehs","reif",
"reik","rein","reis","reke","rems","rend","renk","rens","rent","reny","reos","repo","repp","reps","resh","rest","rete","rets","revs","rews","rhea","rhos","rhus","rias",
"riba","ribs","rice","rich","rick","ricy","ride","rids","riem","rife","riff","rifs","rift","rigg","rigs","rima","rime","rims","rimu","rimy","rind","rine","ring","rink",
"rins","riot","ripe","ripp","rips","ript","rise","risk","risp","rite","rits","ritt","ritz","riva","rive","rivo","riza","road","roam","roan","roar","robe","robs","roch",
"rock","rocs","rode","rods","roed","roes","roin","roji","roke","roks","roky","roma","romp","roms","rone","rong","ront","rood","roof","rook","room","roon","roop","roos",
"root","rope","ropy","rore","rort","rory","rose","rost","rosy","rota","rote","roti","roto","rots","roue","roum","roup","rout","roux","rove","rows","rowt","rube","rubs",
"ruby","ruck","rucs","rudd","rude","ruds","rued","ruer","rues","ruff","ruga","rugs","ruin","rukh","rume","rump","rums","rund","rune","rung","runs","runt","rurp","ruru",
"rusa","ruse","rush","rusk","rust","ruth","ruts","ryas","ryes","ryfe","ryke","rynd","ryot","rype","sabe","sabs","sack","sacs","sade","sadi","sado","sads","safe","saft",
"saga","sage","sago","sags","sagy","saic","said","saim","sain","sair","sais","sake","saki","sama","same","samp","sams","sand","sane","sang","sank","sans","sant","saps",
"sard","sari","sark","sars","sash","sass","sate","sati","saut","save","savs","sawn","saws","saxe","says","scab","scad","scag","scam","scan","scar","scat","scaw","scog",
"scop","scot","scow","scry","scud","scug","scum","scup","scur","scut","scye","seam","sean","sear","seas","seat","sech","seco","secs","sect","seed","seek","seem","seen",
"seep","seer","sees","sego","segs","seif","seik","seir","seis","sekt","seme","semi","sena","send","sene","sens","sent","seps","sept","sera","sere","serf","serk","serr",
"sers","sese","sesh","sess","seta","sets","sett","sewn","sews","sext","sexy","seys","shad","shag","shah","sham","shan","shat","shaw","shay","shea","shed","shes","shet",
"shew","shim","shin","ship","shir","shit","shiv","shmo","shod","shoe","shog","shoo","shop","shot","show","shri","shun","shut","shwa","sibb","sibs","sice","sich","sick",
"sics","sida","side","sidh","sien","sies","sift","sigh","sign","sijo","sika","sike","sima","simi","simp","sims","sind","sine","sing","sinh","sink","sins","sipe","sips",
"sire","siri","sirs","siss","sist","site","sith","sits","sitz","size","sizy","sjoe","skag","skas","skat","skaw","skee","skeg","sken","skeo","skep","sker","sket","skew",
"skid","skim","skin","skio","skip","skis","skit","skry","skua","skug","skyf","skyr","smee","smew","smir","smit","smog","smug","smur","smut","snab","snag","snap","snar",
"snaw","sneb","sned","snee","snib","snig","snip","snit","snob","snod","snog","snot","snow","snub","snug","snye","soak","soap","soar","soba","sobs","soca","sock","socs",
"soda","sods","sofa","soft","sogs","soho","sohs","soja","soke","soma","some","soms","somy","sone","song","sons","sook","soom","soon","soop","soot","soph","sops","sora",
"sorb","sord","sore","sori","sorn","sort","soss","soth","sots","souk","soum","soup","sour","sous","sout","sovs","sowf","sowm","sown","sowp","sows","soya","soys","spae",
"spag","spam","span","spar","spas","spat","spaw","spay","spaz","spec","sped","spek","spet","spew","spic","spie","spif","spik","spim","spin","spit","spiv","spod","spot",
"spry","spud","spue","spug","spun","spur","sris","stab","stag","stap","star","stat","staw","stay","sted","stem","sten","step","stet","stew","stey","stie","stim","stir",
"stoa","stob","stop","stot","stow","stub","stud","stum","stun","stye","suba","subs","such","suck","sudd","suds","sued","suer","sues","suet","sugh","suid","suit","sukh",
"suks","sumo","sump","sums","sumy","sung","sunk","sunn","suns","supe","sups","suqs","sura","surd","sure","surf","suss","susu","swab","swad","swag","swam","swan","swap",
"swat","sway","swee","swey","swig","swim","swiz","swob","swop","swot","swum","sybo","syce","syed","syen","syes","syke","sync","synd","syne","sype","syph","tabi","tabs",
"tabu","tace","tach","tack","taco","tact","tads","taed","taes","tags","taha","tahr","taig","tain","tais","tait","taka","take","taki","taks","taky","tame","tamp","tams",
"tana","tane","tang","tanh","tank","tans","taos","tapa","tape","taps","tapu","tara","tare","tarn","taro","tarp","tars","tart","tash","task","tass","tate","tath","tats",
"tatt","tatu","taus","taut","tava","tavs","tawa","taws","tawt","taxa","taxi","tays","tead","teak","team","tear","teas","teat","tech","tecs","teds","tedy","teed","teek",
"teem","teen","teer","tees","teff","tefs","tegg","tegs","tegu","tehr","teme","temp","tems","tend","tene","tens","tent","tepa","terf","term","tern","test","tete","teth",
"tets","tews","text","thae","than","thar","that","thaw","thee","them","then","thew","they","thig","thin","thio","thir","this","thon","thou","thro","thru","thud","thug",
"thus","tiar","tice","tich","tick","tics","tide","tids","tidy","tied","tier","ties","tiff","tift","tige","tigs","tika","tike","tiki","time","tind","tine","ting","tink",
"tins","tint","tiny","tipi","tips","tipt","tire","tiro","tirr","tite","titi","tits","tivy","tizz","toad","toby","tock","toco","tocs","tods","tody","toea","toed","toes",
"toey","toff","toft","tofu","toga","toge","togs","toho","toit","toke","toko","tomb","tome","tomo","toms","tone","tong","tonk","tons","tony","took","toom","toon","toot",
"tope","toph","topi","topo","tops","tora","torc","tore","tori","torn","toro","torr","tors","tort","tory","tosa","tose","tosh","toss","tost","tote","tots","touk","toun",
"tour","tout","town","tows","towt","towy","toyo","toys","toze","trad","tram","trap","trat","tray","tree","tref","trek","tres","tret","trew","trey","trez","trie","trig",
"trim","trin","trio","trip","trod","trog","tron","trop","trot","trow","troy","true","trug","trye","tryp","tsar","tsks","tuan","tuba","tube","tubs","tuck","tufa","tuff",
"tuft","tugs","tuis","tump","tums","tuna","tund","tune","tung","tuns","tuny","tups","turd","turf","turk","turm","turn","tush","tusk","tuts","tutu","tuzz","twae","twas",

"tway","twee","twig","twin","twit","twos","tyde","tyed","tyee","tyer","tyes","tygs","tyin","tyke","tymp","tynd","tyne","type","typo","typp","typy","tyre","tyro",
"tyte","tzar","udon","udos","ueys","ufos","ughs","ukes","umbo","umph","umps","umpy","unai","unau","unbe","unce","unci","unco","unde","undo","undy","unis","unit","unto",
"upas","upby","updo","upgo","upon","upsy","upta","urao","urbs","urde","urds","urdy","urea","ures","urge","uric","urns","urps","ursa","urus","urva","used","user","uses",
"utas","utes","utis","utus","uvae","uvas","uvea","vacs","vade","vaes","vagi","vags","vain","vair","vamp","vane","vang","vans","vant","vara","vare","vars","vary","vasa",
"vase","vast","vats","vatu","vaus","vaut","vavs","vaws","veep","veer","vees","vega","vego","vehm","vein","vena","vend","vent","vera","verb","verd","vers","vert","very",
"vest","veto","vets","vext","viae","vias","vibe","vibs","vice","vide","vids","vied","vier","vies","view","viga","vigs","vims","vina","vine","vino","vins","vint","viny",
"vire","visa","vise","vita","vite","viva","vive","vivo","vizy","voar","voes","void","vors","vote","vows","vrot","vrou","vrow","vugg","vugh","vugs","vums","wabs",
"wack","wadd","wade","wadi","wads","wadt","wady","waes","waff","waft","wage","wags","waid","waif","wain","wair","wais","wait","waka","wake","wakf","wame","wand","wane",
"wang","wank","wans","want","wany","waps","waqf","warb","ward","ware","wark","warm","warn","warp","wars","wart","wary","wase","wash","wasm","wasp","wast","wate","wats",
"watt","wauk","waur","wave","wavy","wawa","wawe","waws","waxy","ways","weak","wean","wear","webs","weds","weed","week","weem","ween","weep","weer","wees","weet","weft",
"weid","weir","weka","wemb","wems","wena","wend","wens","went","wept","were","wero","wert","west","weta","wets","wexe","weys","whae","wham","whap","what","whee","when",
"whet","whew","whey","whid","whig","whim","whin","whio","whip","whir","whit","whiz","whoa","whom","whop","whot","whow","whup","whys","wice","wich","wick","wide","wife",
"wigs","wimp","wind","wine","wing","wink","winn","wino","wins","winy","wipe","wire","wiry","wise","wish","wisp","wiss","wist","wite","with","wits","wive","woad","wock",
"woes","wofs","wogs","woke","woks","womb","wonk","wons","wont","wood","woof","woon","woos","woot","wops","word","wore","work","worm","worn","wort","wost","wots","wove",
"wowf","wows","wrap","wren","writ","wuds","wudu","wuss","wych","wyes","wynd","wynn","wyns","wyte","xyst","yaba","yack","yads","yaff","yagi","yags","yahs","yaks",
"yams","yang","yank","yapp","yaps","yard","yare","yark","yarn","yarr","yate","yaud","yaup","yawn","yawp","yaws","yawy","yays","ybet","yead","yeah","yean","year","yeas",
"yebo","yech","yede","yeed","yegg","yens","yeps","yerd","yerk","yesk","yest","yeti","yett","yeuk","yeve","yews","ygoe","yids","yike","yins","yipe","yips","yird","yirk",
"yirr","yite","ympe","ympt","yobs","yock","yode","yodh","yods","yoga","yogh","yogi","yoke","yoks","yomp","yond","yoni","yont","yoof","yoop","yore","york","yorp","youk",
"your","yous","yowe","yows","yuan","yuca","yuch","yuck","yuft","yuga","yugs","yuke","yuko","yuks","yuky","yump","yunx","yups","yurt","yutz","yuzu","ywis","zack","zags",
"zany","zaps","zarf","zati","zeas","zebu","zeds","zees","zein","zeks","zeps","zerk","zero","zest","zeta","zeze","zhos","ziff","zigs","zimb","zinc","zine","zing","zins",
"zips","zite","ziti","zits","zizz","zobo","zobu","zoea","zoic","zona","zone","zonk","zoom","zoon","zoos","zoot","zori","zouk","zupa","zurf","zyga","zyme"
];

export function random_word4(){
return WORDS[random_int(0,WORDS.length)];
}





export function set_clock(targ_sec){
let delta=targ_sec-now;
if(TRACE_TIME)console.log(str.conv(" >> set_clock, targ={n3}, now={n3}, delta={n3}, old_dilated={n3}",targ_sec,now,delta,g_era_dilated));
g_era_dilated+=delta;


loom_delta_clock(delta);
}









export function set_clock_scale(newscale){
if(TRACE_TIME)console.log(str.conv(" >> set_clock_scale, {n3}",newscale));
if(newscale!=g_time_scale){

g_time_scale=newscale;
g_era_dilated=now;
g_era_raw=now_raw;
}
}


const SS_DATE=0;






export function day_of_year(d){
var monthLengths=[31,28,31,30,31,30,31,31,30,31,30,31];


var year=d.getFullYear();
if(((year%4==0)&&(year%100!=0))||(year%400==0)){
monthLengths[1]=29;
}

var dayInYear=0;


for(var i=0;i<d.getMonth()-1;i++){
dayInYear+=monthLengths[i];
}


dayInYear+=d.getDate();

return dayInYear;
}







export function week_of_year_sunday(d){

debugger;
return ERR;
}






export function week_of_year_monday(d){

debugger;
return ERR;
}







export function day_of_week_monday(d){


let n=d.getDay();
if(n==0)
return 6;
else
return n-1;
}





function push_system_modal(){
let depth=getn(runtime,F_os_modal);
setv(0,0,runtime,F_os_modal,depth+1);
}




function pop_system_modal(){
let depth=getn(runtime,F_os_modal);
setv(0,0,runtime,F_os_modal,depth+1);
}





export function os_command(cmd,...parms){
debugger;
}





export function os_run(filepath,...parms){
debugger;
}





export function os_open(filepath){
debugger;
}








export function os_pick_files(
title,
callback,


options)
{
debugger;
}







export function os_pick_save(
title,
callback,
options)
{
debugger;
}







export function os_pick_dir(
title,
callback,
options)
{
debugger;
}















export function loom_timer(
func,
options,
...args)
{

let nargs;
let argx;
let elem=alloc_loom_elem(options);
let fired;


if(elem.nreps<1)
return U;

elem.func=func;
elem.evkind=EV_TIMER;


nargs=args.length;
for(argx=0;argx<nargs;argx++){
elem.parm_array.push(args[argx]);
}


g_loom.push(elem);


if(now>=elem.time){

call_deferred_func(elem);
elem.countx=1;
elem.last_seen=now;


elem.time=fired+elem.interval;
elem.is_relative=true;

if(TRACE_LOOM)console.log(str.conv("-- loom_timer, firing immediate, last_fired={}",elem.last_seen));



}

return elem.id;
}






export function loom_animate_curve(
container,
p1,
c1,
p2,
options)
{
debugger;
return null;

}






export function loom_animate_box(
container,
p1,
c1,
p2,
width1,
height1,
width2,
height2,
options)
{
debugger;
return null;

}








export function loom_clear(options){
let lx;
let group;
let id;

for(let property in options){
switch(property){
case'id':
id=options.id;
break;

case'group':
group=options.group;
break;

default:

argument_err("bad property: "+property);

}
}


lx=g_loom.length;
while(lx--){
if(g_loom[lx].group==group||g_loom[lx].id==id)
loom_clearx(lx);
}
}







export function loom_clear_all(){
let lx;
let item;

lx=g_loom.length;
while(lx--){

item=g_loom[lx];
if(item.group==IDE_GROUP&&item.evkind==EV_TIMER){



call_deferred_func(item);
}


loom_clearx(lx);
}
}






export function loom_delta_clock(delta){
let lx;
let item;

lx=g_loom.length;
while(lx--){

item=g_loom[lx];
if(TRACE_LOOM)console.log(str.conv("loom_delta, lx={}, time={n3}, is_rel={bool}",lx,item.time,item.is_relative));
if(item.is_relative){

item.time+=delta;
if(TRACE_LOOM)console.log(str.conv("  -- adjusted loom item time to {n3}",item.time));
}
}
}






export function loom_animate_num_linear(
valpath,
busypath,
endval,
duration)
{
return loom_animate_num_bezier(valpath,busypath,endval,duration,U,U,U,U);
}







export function loom_animate_num_bezier(
valpath,
busypath,
endval,
duration,
x1,
y1,
x2,
y2)
{


let startval=path_getv(valpath,EF_VAL_IS_NUM);

if(TRACE_ANIMATION)console.log(str.conv("adding bez animation startval={n,3}, endval={n,3}, duration={}",startval,endval,duration));

if(startval!==endval){

let anim=new a_loom_anim_num();
g_num_animations.push(anim);


path_setv(0,WHERE_LOOM,busypath,Y);


anim.valpath=valpath.clone();
anim.busypath=busypath.clone();
anim.startval=startval;
anim.endval=endval;
anim.starttime=elapsed;
anim.duration=duration;
anim.bez_x1=x1;
anim.bez_y1=y1;
anim.bez_x2=x2;
anim.bez_y2=y2;
anim.id=loom_next_id();
return anim.id;

}else{

return U;
}
}







export function random_color(){
return random_int(0,0xFFFFFF);
}





export function hsv_to_color(hsv_rec){
let h=getn(hsv_rec,F_hue);
let s=getn(hsv_rec,F_saturation);
let v=getn(hsv_rec,F_value);
return hsv(h,s,v);
}






export function hsv(h,s,v){
if(is_err_enum_b(h)||is_err_enum_b(s)||is_err_enum_b(v))
return ERR;
if((h===U)||(s===U)||(v===U))
return U;

let r=0;
let g=0;
let b=0;

let tempS=s/100;
let tempV=v/100;

let hi=Math.floor(h/60)%6;
let f=h/60-Math.floor(h/60);
let p=(tempV*(1-tempS));
let q=(tempV*(1-f*tempS));
let t=(tempV*(1-(1-f)*tempS));

switch(hi){
case 0:r=tempV;g=t;b=p;break;
case 1:r=q;g=tempV;b=p;break;
case 2:r=p;g=tempV;b=t;break;
case 3:r=p;g=q;b=tempV;break;
case 4:r=t;g=p;b=tempV;break;
case 5:r=tempV;g=p;b=q;break;
}

let rr=Math.round(r*255);
let gg=Math.round(g*255);
let bb=Math.round(b*255);
return(rr<<16)|(gg<<8)|bb;
}





export function color_to_hsv(rgb){
if(is_err_enum_b(rgb)){

return ERR_TREE;
}
if(rgb===U)
return U_TREE;

let r=rgb>>16&0xFF;
let g=rgb>>8&0xFF;
let b=rgb&0xFF;

let max=Math.max(r,g,b);
let min=Math.min(r,g,b);

let hue=0;
let saturation=0;
let value=0;


if(max===min)
hue=0;
else if(max===r)
hue=(60*(g-b)/(max-min)+360)%360;
else if(max===g)
hue=(60*(b-r)/(max-min)+120);
else
hue=(60*(r-g)/(max-min)+240);


value=max;


if(max===0){
saturation=0;
}else{
saturation=(max-min)/max;
}

let hsv=new a_tree("std","hsv");
setv(0,0,hsv,F_hue,Math.round(hue));
setv(0,0,hsv,F_saturation,Math.round(saturation*100));
setv(0,0,hsv,F_value,Math.round(value/255*100));
return hsv;
}





export function color_r(pixel){
if(is_err_enum_b(pixel)||(pixel<0))
return ERR;
if(pixel===U)
return U;


return(pixel>>>16)&0xFF;
}





export function color_g(pixel){
if(is_err_enum_b(pixel)||(pixel<0))
return ERR;
if(pixel===U)
return U;

return(pixel>>>8)&0xFF;
}





export function color_b(pixel){
if(is_err_enum_b(pixel)||(pixel<0))
return ERR;
if(pixel===U)
return U;

return pixel&0xFF;
}





export function color_a(pixel){
if(is_err_enum_b(pixel)||(pixel<0))
return ERR;
if(pixel===U)
return U;

return(pixel>>>24)&0xFF;
}





export function rgb(r,g,b,a=0){
let ri;
let gi;
let bi;
let ai;

if(is_err_enum_b(r)||is_err_enum_b(g)||is_err_enum_b(b)||is_err_enum_b(a))
return ERR;
if((r===U)||(g===U)||(b===U)||(a===U))
return U;


if(r<0)
ri=0;
else if(r>255)
ri=255;
else
ri=r;

if(g<0)
gi=0;
else if(g>255)
gi=255;
else
gi=g;

if(b<0)
bi=0;
else if(b>255)
bi=255;
else
bi=b;

if(a<0)
ai=0;
else if(a>255)
ai=255;
else
ai=a;


let result=(ai<<24)|(ri<<16)|(gi<<8)|bi;
return result;
}





export function rgb1(r,g,b,a=0){
let ri;
let gi;
let bi;
let ai;

if(is_err_enum_b(r)||is_err_enum_b(g)||is_err_enum_b(b)||is_err_enum_b(a))
return ERR;
if((r===U)||(g===U)||(b===U)||(a===U))
return U;


if(r<0)
r=0;
else if(r>1)
r=1;

if(g<0)
g=0;
else if(g>1)
g=1;

if(b<0)
b=0;
else if(b>1)
b=1;

if(a<0)
a=0;
else if(a>1)
a=1;

ai=Math.round(a*255);
ri=Math.round(r*255);
gi=Math.round(g*255);
bi=Math.round(b*255);


return(ai<<24)|(ri<<16)|(gi<<8)|bi;
}










export function tree_count(targ){
let pathx;
let node;

if(targ instanceof a_tree){

node=targ;
if((k.g_curr_block!=null)&&(node.eflags&NF_STATEFUL))
add_node_dependency(node);

}else if(targ instanceof a_path){

pathx=path_to_pathx(targ);
if((k.g_curr_block!=null)&&(pathx.basepath.base.eflags&NF_STATEFUL))
add_pathx_dependency(pathx);
if(pathx===null||!pathx.exists)
return 0;
node=pathx.lev[pathx.lastx].node;

}else{

argument_err("expected path or tree");
}


if((node===null)||(node.children===null))
return 0;

return node.children.length;
}







export function tree_lo(targ){
let pathx;
let node;
let sub;

if(targ instanceof a_tree){

node=targ;
if((k.g_curr_block!=null)&&(node.eflags&NF_STATEFUL))
add_node_dependency(node);

}else if(targ instanceof a_path){

pathx=path_to_pathx(targ);
if((k.g_curr_block!=null)&&(pathx.basepath.base.eflags&NF_STATEFUL))
add_pathx_dependency(pathx);
if(pathx===null||!pathx.exists)
return U;
node=pathx.lev[pathx.lastx].node;

}else{

argument_err("expected path or tree");
}

if((node===null)||(node.children===null)||(node.children.length===0))
return U;



sub=node.children[0].sub;
if(is_numeric(sub)){

return sub;
}


return U;
}







export function tree_hi(targ){
let pathx;
let node;
let sub;
let ix;

if(targ instanceof a_tree){

node=targ;
if((k.g_curr_block!=null)&&(node.eflags&NF_STATEFUL))
add_node_dependency(node);

}else if(targ instanceof a_path){

pathx=path_to_pathx(targ);
if((k.g_curr_block!=null)&&(pathx.basepath.base.eflags&NF_STATEFUL))
add_pathx_dependency(pathx);
if(pathx===null||!pathx.exists)
return U;
node=pathx.lev[pathx.lastx].node;

}else{

argument_err("expected path or tree");
}

if((node===null)||(node.children===null)||(node.children.length===0))
return U;



ix=node.children.length-1;
while(ix>=0){
sub=node.children[ix].sub;
if(is_numeric(sub))
return sub;

ix-=1;
}


return U;
}









export function tree_next_lo(targ){
let ix=tree_lo(targ);
if(ix===U)
return 1;
return ix-1;
}







export function tree_next_hi(targ){
let ix=tree_hi(targ);
if(ix===U)
return 1;
return ix+1;
}





let g_sortkeys;
function collate_indirect(a,b){
let result;
let val1;
let val2;
let key;


for(key of g_sortkeys){


val1=get_generic(a,key);
val2=get_generic(b,key);
result=collate_open(val1,val2);
if(result!==0)
return result;
}


return 0;
}







export function tree_index(

base,...sortkeys){
let result=new a_tree("std","tree_index");
let p;
g_sortkeys=sortkeys;


let list=[];
let myloop=new a_loop({across:base});
while(myloop.next()){
p=myloop.path.clone();
list.push(p);
}

list.sort(collate_indirect);


for(p of list){
append_val(0,0,p,addr(result));
}


return result;
}





export function tree_find(node,targval){
let myloop=new a_loop({across:node});
while(myloop.next()){
if(eq2(targval,myloop.val))
return myloop.index;
}

return U;
}






export function path_last_index(
t){
if(t==null||t.key.length==0)
return U;

return t.key[t.key.length-1];
}








function escape_plain_for_html(old){
let net="";
let pos=0;
let len=old.length;
let cc;



while(pos<len){
cc=old.charAt(pos);
pos+=1;

switch(cc){

case'\r':
if((pos<len)&&(old.charAt(pos)=='\n')){
pos+=1;
}
cc='<br>';
break;
case'\n':
cc='<br>';
break;
case'<':
cc='&lt;';
break;
case'>':
cc='&gt;';
break;
case'&':
cc='&amp;';
break;
case"'":
cc='&quot;';
break;







}

net+=cc;
}
return net;
}

































export function draw_str(container,boxarg,ss,options){
let avail_h;
let avail_v;
let backcolor=U;
let bold=false;
let border=0;
let bordercolor=BLACK;
let box;
let color=BLACK;
let corner=0;
let currleft=false;
let dest_x=0;
let dest_y=0;
let embed=false;
let excess;
let font=null;
let fontd=U;
let fontptr=null;
let html=false;
let indent=0;
let is_input=false;
let italic=false;
let just=CENTER;
let leading=U;
let leading2;
let leftover;
let metrics=null;
let mytxt;
let net_height;
let net_ss;
let net_width;
let opacity=1.0;
let shrink=true;
let shrink_min=6;
let size=pt_to_dots(container,10);
let size2;
let strike=false;
let trailing;
let uhide=false;
let und=false;
let vert=0.5;
let wrap=false;


for(let property in options){
switch(property){
case'backcolor':
backcolor=options.backcolor;
break;

case'bold':
bold=options.bold===Y;
break;

case'border':

border=options.border;
break;

case'border_color':

bordercolor=options.border_color;
break;

case'color':
color=options.color;
break;

case'input':
is_input=options.input===Y;
break;

case'fill':
backcolor=options.fill;
break;

case'font':
font=options.font;
break;


case'html':
html=options.html===Y;
break;

case'indent':
indent=options.indent;
break;

case'italic':
italic=options.italic===Y;
break;

case'just':
just=options.just;
break;

case'leading':
leading=options.leading;
break;

case'metrics':
metrics=options.metrics;
break;

case'opacity':
opacity=options.opacity;
break;

case'corner':
corner=options.corner;
break;

case'shrink':
shrink=options.shrink===Y;
break;

case'shrink_min':
shrink_min=options.shrink_min;
break;

case'size':

size=Math.round(options.size);
break;

case'strike':
strike=options.strike===Y;
break;

case'uhide':
uhide=options.uhide===Y;
break;

case'und':
und=options.und===Y;
break;

case'vert':
vert=options.vert;
if(vert<0)
vert=0;
if(vert>1.0)
vert=1.0;
break;

case'wrap':
wrap=options.wrap===Y;
break;

case'xy':
if(!(options.xy instanceof a_tree)){
argument_err('bad arg');
}
dest_x=getn(options.xy,F_x);
dest_y=getn(options.xy,F_y);
break;

case'x':
dest_x=options.x;
break;

case'y':
dest_y=options.y;
break;

default:

argument_err("bad option: "+property);

}
}


if(boxarg==U){

box=null;
}else{

if((boxarg instanceof a_tree)||(boxarg instanceof a_path)){
box=tree_to_rect(boxarg);
}else if(boxarg instanceof Rectangle){
box=boxarg;
}else{
argument_err("bad box");
return;
}
}


if(container.is_measuring){

if(box!=null&&box.width!=U&&box.height!=U){
container.max_h=Math.max(container.max_h,box.left+box.width);
container.max_v=Math.max(container.max_v,box.top+box.height);
return;
}



shrink=false;
just=LEFT;
backcolor=U;
border=0;
}


if(leading==U)
leading=size*1.16;

if(font==null)
font="";

if(font.charAt(0)==='$')
embed=true;

if(ss===U_STR){
if(uhide)
net_ss="";
else
net_ss="U";
}else if((ss==null)||(ss=="")){
net_ss=" ";
}else
net_ss=ss;


if(box==null){

avail_h=GIANT_WIDTH;
avail_v=GIANT_WIDTH;

backcolor=U;
border=0;
shrink=false;
}else{

if(box.width==U){
avail_h=GIANT_WIDTH;
}else
avail_h=box.width-indent;

if(box.height==U)
avail_v=GIANT_WIDTH;
else
avail_v=box.height;


if(backcolor!==U){
draw_rect(container,box,{
color:backcolor,
corner:corner
});
}


if(border>0){
draw_rect(container,box,{
stroke:bordercolor,
width:border,
corner:corner,
pos:1
});
}
}


if((avail_h<=10)||(ss=="")||(ss==" ")){
if(metrics!==null){

setv(0,0,metrics,F_x,0);
setv(0,0,metrics,F_y,0);
}


return;
}




mytxt=document.createElement("div");
mytxt.style.userSelect="none";
mytxt.style.webkitUserSelect="none";


mytxt.style.cursor="";
mytxt.style.position="absolute";
mytxt.style.visibility='hidden';



if(html){
if(!wrap){
mytxt.style.whiteSpace='nowrap';
}
}else{



if(wrap){

mytxt.style.whiteSpace='pre-wrap';
}else{

mytxt.style.whiteSpace='pre';
}
net_ss=escape_plain_for_html(net_ss);
}





if(box==null){
mytxt.style.left=dest_x.toFixed(1)+'px';
mytxt.style.top=dest_y.toFixed(1)+'px';
}else{


if(wrap)
mytxt.style.width=avail_h.toFixed(1)+'px';
}




mytxt.innerHTML=net_ss;


set_attrib(mytxt,just,opacity,font,bold,italic,color,und,strike,size,leading);







container.appendChild(mytxt);







let rbox=mytxt.getBoundingClientRect();
if(TRACE_TEXT)console.log(str.conv(" size={}x{}, avail={}x{}",rbox.width,rbox.height,avail_h,avail_v));



trailing=0;


net_height=rbox.height-trailing;


if(shrink&&(box!=null)){
if((rbox.width>avail_h)||(net_height>avail_v)){


let ratio1=avail_h/rbox.width;
let ratio2=avail_v/net_height;



let ratio3=shrink_min/size;
let net_ratio=Math.max(ratio3,Math.min(ratio1,ratio2)*0.97);


size=size*net_ratio;
leading=leading*net_ratio;


mytxt.style.fontSize=size.toFixed(1)+"px";
mytxt.style.lineHeight=leading.toFixed(0)+'px';
}


rbox=mytxt.getBoundingClientRect();
trailing=0;


net_height=rbox.height-trailing;
}


if(metrics!==null){
setv(0,0,metrics,F_x,rbox.width);
setv(0,0,metrics,F_y,net_height);
}


if(box==null){

switch(just){
case LEFT:
case FLUSH:

dest_x+=indent;
break;
case RIGHT:

dest_x=dest_x-rbox.width-indent;
break;
default:

dest_x=dest_x-Math.round((rbox.width+1)/2);
}
}else{

switch(just){
case LEFT:
case FLUSH:

dest_x=box.left+indent;
excess=rbox.width+indent-box.width;
if(excess>0){
dest_x-=excess;
}
break;
case RIGHT:

dest_x=box.left+box.width-rbox.width-indent;
excess=rbox.width+indent-box.width;
if(excess>0)
dest_x+=excess;
break;
default:

dest_x=box.left+Math.round((box.width-rbox.width+1)/2);
}


leftover=Math.max(0,box.height-net_height);

dest_y=box.top+Math.round(leftover*vert);
}

if(TRACE_TEXT)console.log(str.conv(" vert={n,2}, boxv={n1}, net_height={n1}, leftover={n1}",vert,box.height,net_height,leftover));

mytxt.style.left=dest_x.toFixed(0)+'px';
mytxt.style.top=dest_y.toFixed(0)+'px';

if(container.is_measuring){
rbox=mytxt.getBoundingClientRect();
container.max_h=Math.max(rbox.left+rbox.width,container.max_h);
container.max_v=Math.max(rbox.top+rbox.height,container.max_v);


mytxt.parentNode.removeChild(mytxt);
return;
}


mytxt.style.visibility='';


return;

}





























































export function draw_input(container,field,boxarg,options){
let backcolor=U;
let bold=false;
let border=0;
let bordercolor=BLACK;
let box;
let color=BLACK;
let corner=0;
let currleft=false;
let font=null;
let fontd=U;
let fontptr=null;
let hint="";
let indent=0;
let italic=false;
let just=LEFT;
let leading=U;
let leading2;
let leftover;
let maxlen=80;
let metrics=null;
let minlen=0;
let minval=U;
let maxval=U;
let multiline=false;
let net_height;
let net_width;
let opacity=1.0;
let required=false;
let size=pt_to_dots(container,10);
let show_errs=true;
let size2;
let start_ss;
let wrap=false;
let ss;


if((boxarg instanceof a_tree)||(boxarg instanceof a_path)){
box=tree_to_rect(boxarg);
}else if(boxarg instanceof Rectangle){
box=boxarg;
}else{
argument_err("bad box");
return;
}


if(container.is_measuring){

container.max_h=Math.max(container.max_h,box.left+box.width);
container.max_v=Math.max(container.max_v,box.top+box.height);
return;
}


for(let property in options){
switch(property){
case'bold':
bold=options.bold===Y;
break;

case'border':

border=options.border;
break;

case'border_color':

bordercolor=options.border_color;
break;

case'color':
color=options.color;
break;

case'corner':
corner=options.corner;
break;

case'fill':
backcolor=options.fill;
break;

case'font':
font=options.font;
break;

case'hint':
hint=options.hint;
break;

case'indent':
indent=options.indent;
break;

case'italic':
italic=options.italic===Y;
break;

case'just':
just=options.just;
break;

case'leading':
leading=options.leading;
break;

case'minlen':
minlen=options.minlen;
break;

case'minval':
minval=options.minval;
break;

case'maxlen':
maxlen=options.maxlen;
break;

case'maxval':
maxval=options.maxval;
break;

case'opacity':
opacity=options.opacity;
break;

case'show_errs':
show_errs=options.show_errs===Y;
break;

case'size':

size=Math.round(options.size);
break;

default:

argument_err("bad option: "+property);
}
}

if(leading==U)
leading=size*1.16;

if(font==null)
font="";

var input=document.createElement("input");

var kind=getn(field,F_in_kind);
switch(kind){
case IN_COLOR:
input.type="color";
break;
case IN_DATE:
input.type="date";
break;
case IN_DATETIME:
input.type="datetime";
break;
case IN_EMAIL:
input.type="email";
break;
case IN_FILE:
input.type="file";
break;
case IN_MONTH:
input.type="month";
break;
case IN_NUMBER:
input.type="number";
break;
case IN_PASSWORD:
input.type="password";
break;
case IN_RANGE:
input.type="range";
break;
case IN_TEL:
input.type="tel";
break;
case IN_TIME:
input.type="time";
break;
case IN_URL:
input.type="url";
break;
case IN_WEEK:
input.type="week";
break;
default:
input.type="text";
}


start_ss=gets(field,F_in_value);
if(start_ss!=null)
input.value=start_ss;




input.style.position="absolute";
input.style.left=box.left.toFixed(1)+'px';
input.style.top=box.top.toFixed(1)+'px';
input.style.width=box.width.toFixed(1)+'px';
input.style.height=box.height.toFixed(1)+'px';


input.style.boxSizing="border-box";

maxlen=getn(field,F_in_maxlen);
if(maxlen==U)
maxlen=80;
input.maxLength=maxlen;

minlen=getn(field,F_in_minlen);
if(minlen!=U)
input.minLength=minlen;

minval=getn(field,F_in_minval);
if(minval!=U)
input.min=minval;

maxval=getn(field,F_in_maxval);
if(maxval!=U)
input.max=maxval;


ss=gets(field,F_in_hint);
if(ss!=null)
input.placeholder=ss;


ss=gets(field,F_in_tip);
if(ss!=null)
input.title=ss;

if(getn(field,F_is_required)==Y)
input.required=true;


input.style.textIndent=indent.toFixed(0)+'px';


set_attrib(input,just,opacity,font,bold,italic,color,false,false,size,leading);

container.appendChild(input);


if((getn(field,F_is_ok)==N)&&show_errs){

let warnbox=box;
let warnjust;
if(just==RIGHT){
warnjust=LEFT;
}else{
warnjust=RIGHT;
}
















draw_str(container,warnbox,"\u26A0",{
just:warnjust,
size:box.height*0.6,
indent:box.height*0.08,
color:CRIMSON
});
}

}





function set_attrib(mytxt,just,opacity,font,bold,italic,color,und,strike,size,leading){


let align_ss;
switch(just){
case LEFT:
align_ss='left';
break;
case CENTER:
align_ss='center';
break;
case RIGHT:
align_ss='right';
break;
case FLUSH:
align_ss='justify';
break;
default:
if(CHECKS)argument_err("bad just");
align_ss='left';
}
mytxt.style.textAlign=align_ss;



if(opacity!=1)
mytxt.style.opacity=opacity.toFixed(3);



var colon=font.indexOf(':');
if(font===""||font==='_sans')
font="sans-serif";
else if(font==="_serif")
font="serif";
else if(font==="_typewriter")
font="monospace";


if(colon>0){

mytxt.style.fontWeight=font.substring(colon+1);
font=font.substring(0,colon);
}
mytxt.style.fontFamily=font;



if(bold)
mytxt.style.fontWeight='bold';
if(italic)
mytxt.style.fontStyle='italic';



mytxt.style.color=js_color_to_str(color);



let decoration="";
if(und)
decoration+=' underline';
if(strike)
decoration+=' line-through';
if(decoration!="")
mytxt.style.textDecoration=decoration;



mytxt.style.fontSize=size.toFixed(1)+"px";



if(leading!==U)
mytxt.style.lineHeight=leading.toFixed(1)+'px';
}


































export function draw_image(container,boxarg,image,options){
let angle=null;
let blendmode=U;
let box=null;
let corner=0;
let dest_x=0;
let dest_y=0;
let shrink=true;
let grow=true;
let horz=0.5;
let horz_ratio;
let horz_size;
let indent=0;
let net_box;
let net_boxR;
let opacity=1;
let origin_x=0;
let origin_y=0;
let pin=U;

let preserve_aspect=true;
let result_pix;
let vert=0.5;
let vert_ratio;
let vert_size;


if(TRACE_IMG)console.log(`draw_image, src=${image.url}`);


for(let property in options){
switch(property){
case'angle':
if(CHECKS&&!(options.angle instanceof a_meas))
argument_err("angle argument must be a meas");

if(options.angle!==0)
angle=options.angle;
break;

case'aspect':
preserve_aspect=(options.aspect===Y);
break;

case'blend':
blendmode=options.blend;
break;

case'corner':

corner=options.corner;
break;

case'grow':
grow=(options.grow===Y);
break;

case'horz':
horz=options.horz;
if(CHECKS&&(horz<0||horz>1))
argument_err("bad horz");
break;

case'indent':
indent=options.indent;
break;

case'opacity':
opacity=options.opacity;
break;

case'origin':

if(!(options.origin instanceof a_tree)){
internal_err('bad arg');
}
origin_x=getn(options.origin,F_x);
origin_y=getn(options.origin,F_y);
break;

case'originx':

origin_x=options.originx;
break;

case'originy':

origin_y=options.originy;
break;

case'rot_pin':

pin=options.rot_pin;
break;

case'shrink':
shrink=(options.shrink===Y);
break;

case'vert':
vert=options.vert;
if(CHECKS&&(vert<0||vert>1))
argument_err("bad horz");
break;





case'xy':
if(!(options.xy instanceof a_tree)){
internal_err('bad arg');
}
dest_x=getn(options.xy,F_x);
dest_y=getn(options.xy,F_y);
break;

case'x':
dest_x=options.x;
break;

case'y':
dest_y=options.y;
break;

default:

argument_err("bad option: "+property);

}
}





if(image===null||opacity==0){

if(TRACE_IMG)console.log("draw_image, ignoring U or transparent image");
return null;
}


if(boxarg==null||boxarg==U){
box=null;
}else if((boxarg instanceof a_tree)||(boxarg instanceof a_path)){
box=tree_to_rect(boxarg);
}else if(boxarg instanceof Rectangle){
box=boxarg;
}else
argument_err("bad box");






if(image==ERR_IMAGE){
if(TRACE_IMG)console.log("draw_image, ERR");

if(box==null)
return null;
var errtag=draw_rect(container,box,{color:PINK,corner:10});
draw_str(container,box,"ERR",{size:40});
return errtag;
}





let tag=document.createElement("img");
tag.onload=callback_on_load;
tag.onerror=callback_on_err;


tag.src=image.url;
tag.alt=image.hint;
tag.style.overflow="visible";
tag.style.position="absolute";
tag.style.visibility='hidden';




if(corner!=0){

tag.style.borderRadius=`${corner.toFixed(1)}px`;
}

if(opacity!=1){

tag.style.opacity=opacity.toFixed(3);
}


container.appendChild(tag);
return tag;




function callback_on_load(){

if(TRACE_IMG)console.log(`...in callback_on_load of ${this.src}, natural=${this.naturalWidth} x ${this.naturalHeight}`);

this.onload=null;
this.onerror=null;
draw_image2(this);
}




function callback_on_err(){
if(TRACE_IMG)console.log(`...in callback_on_err of ${image.url}`);
this.onload=null;
this.onerror=null;

draw_missing_image(container,box,image.url);
return;
}







function draw_image2(mytag){




let raw_h=mytag.naturalWidth;
let raw_v=mytag.naturalHeight;

if(box!==null){






net_box=solve_rect({basis:box,pin:5,inset:indent});


net_boxR=tree_to_rect(net_box);

if(TRACE_IMG)console.log(` size_image, box=[${net_boxR.left}, ${net_boxR.top}], ${net_boxR.width} x ${net_boxR.height}, raw=${raw_h} x ${raw_v}`);



horz_ratio=net_boxR.width/raw_h;
vert_ratio=net_boxR.height/raw_v;

if(preserve_aspect){

horz_ratio=min(horz_ratio,vert_ratio);
vert_ratio=horz_ratio;
}

if(!shrink){

horz_ratio=max(horz_ratio,1);
vert_ratio=max(vert_ratio,1);
}

if(!grow){

horz_ratio=min(horz_ratio,1);
vert_ratio=min(vert_ratio,1);
}

if(TRACE_IMG)console.log(`  net ratios=${horz_ratio.toFixed(3)}, ${vert_ratio.toFixed(3)}`);



horz_size=round_up(horz_ratio*raw_h);
vert_size=round_up(vert_ratio*raw_v);

dest_x=net_boxR.left+(net_boxR.width-horz_size)*horz;
dest_y=net_boxR.top+(net_boxR.height-vert_size)*vert;




mytag.style.left=`${dest_x.toFixed(0)}px`;
mytag.style.top=`${dest_y.toFixed(0)}px`;
mytag.style.width=`${horz_size}px`;
mytag.style.height=`${vert_size}px`;

}else{




net_boxR=new Rectangle(dest_x,dest_y,raw_h,raw_v);
if(TRACE_IMG)console.log(` size_image, no box, dest=[${net_boxR.left}, ${net_boxR.top}], ${net_boxR.width} x ${net_boxR.height}`);





mytag.style.transformOrigin="0 0";
let transform_ss;

if(angle==null){

transform_ss=`translate(${(dest_x-origin_x).toFixed(1)}px,${(dest_y-origin_y).toFixed(1)}px)`;
}else{


if(pin!=U){


switch((pin-1)%3){
case 0:
origin_x=0;
break;

case 1:
origin_x=raw_h/2;
break;

case 2:
origin_x=raw_h;
break;

default:
argument_err("bad pin");
}


switch(((pin-1)/3)>>0){
case 0:
origin_y=0;
break;

case 1:
origin_y=raw_v/2;
break;

case 2:
origin_y=raw_v;
break;

default:
argument_err("bad pin");
}
}


let cose=Math.cos(angle.mag);
let sine=Math.sin(angle.mag);
let onecose=1-cose;

let cos_ss=cose.toFixed(5);
let sin_ss=sine.toFixed(5);
let dx=onecose*origin_x+sine*origin_y+dest_x-origin_x;
let dy=-sine*origin_x+onecose*origin_y+dest_y-origin_y;
transform_ss=`matrix(${cos_ss},${sin_ss},${-sin_ss},${cos_ss},${dx.toFixed(1)},${dy.toFixed(1)})`;
}
mytag.style.transform=transform_ss;
}


mytag.style.visibility='';
}

}





function draw_missing_image(container,box,url){
if(box!=null){

var filename=str.filepath_get_name(url);
draw_rect(container,box,{color:PINK});
draw_str(container,box,`MISSING:\n${filename}`,{size:12});
}
}









export function find_font(list){
return list;

}






function calc_middle_of_stroke(box,stroke_width,stroke_pos){

var delta=stroke_width/4;

var offset=interpolate(stroke_pos,0,1,delta,-delta);
return solve_rectR({
basis:box,
inset:offset
});
}








function calc_scaled_radius(base_radius,stroke_width,stroke_pos){


if(base_radius===0)
return 0;

let half=(stroke_width/2);


let r1=base_radius-half;
let r2=base_radius+half;
let net_radius=interpolate(stroke_pos,0,1,r1,r2);

return Math.max(0,net_radius);
}





function svg_define_pattern(tile,wrapper){
let defs=document.createElementNS(SVG_NS,'defs');
wrapper.appendChild(defs);




let known_width=tile.raw_width;
let known_height=tile.raw_height;
if((known_width==0)||(known_height==0))
argument_err("pattern images have to specify their size at compile time");

let pattern=document.createElementNS(SVG_NS,'pattern');
pattern.setAttribute('id','pat1');
pattern.setAttribute('patternUnits','userSpaceOnUse');

pattern.setAttribute('width',known_height.toFixed(0));
pattern.setAttribute('height',known_height.toFixed(0));


defs.appendChild(pattern);



let image=document.createElementNS(SVG_NS,'image');
image.setAttributeNS(XLINK_NS,'xlink:href',tile.url);

image.setAttribute('width',known_height.toFixed(0));
image.setAttribute('height',known_height.toFixed(0));
pattern.appendChild(image);
}







function svg_define_gradient(gradpath,wrapper,box){

let defs=document.createElementNS(SVG_NS,'defs');
wrapper.appendChild(defs);


let node=path_to_node(gradpath);


let bkind=getn(node,F_grad_shape);
let gradient;
switch(bkind){
case LINEAR_GRADIENT:








gradient=document.createElementNS(SVG_NS,'linearGradient');
var angle_deg=getn(node,F_grad_angle);



gradient.setAttribute('x1','0');
gradient.setAttribute('y1','0');
gradient.setAttribute('x2','1');
gradient.setAttribute('y2','0');

gradient.setAttribute('gradientTransform',`rotate(${angle_deg},0.5,0.5)`);

break;

case RADIAL_GRADIENT:
gradient=document.createElementNS(SVG_NS,'radialGradient');


var cx=getn(node,F_grad_centerx);
gradient.setAttribute('cx',cx.toFixed(3));

var cy=getn(node,F_grad_centery);
gradient.setAttribute('cy',cy.toFixed(3));

var inner_radius=getn(node,F_grad_radius_inner);
if(inner_radius!=U)
gradient.setAttribute('fr',inner_radius.toFixed(3));

var outer_radius=getn(node,F_grad_radius_outer);
if(outer_radius!=U)
gradient.setAttribute('r',outer_radius.toFixed(3));

break;

default:
argument_err('bad gradient shape');
}
defs.appendChild(gradient);


gradient.id='grad1';


let iter=new a_loop({
across:addr(node,F_grad_stops)
});
while(iter.next()){

let stop_pos=getn(iter.path,1);
if(stop_pos===U)
argument_err('bad pos');


let stop_color=getn(iter.path,2);
if(stop_color===U)
argument_err('bad color');


let stop_opacity=getn(iter.path,3);
if(stop_opacity===U)
stop_opacity=1;


let stop=document.createElementNS(SVG_NS,'stop');
stop.setAttribute('offset',(stop_pos/100).toFixed(3));
stop.setAttribute('stop-color',js_color_to_str(stop_color));
if(stop_opacity!=1)
stop.setAttribute('stop-opacity',stop_opacity.toFixed(3));
gradient.appendChild(stop);
}


}





















export function draw_rect(
container,
boxarg,
options){

let strokecolor=BLACK;
let strokewidth=0;
let pos=0.5;
let opacity=1.0;
let fill=U;
let grad=null;
let tile=null;
let corner_tl=0;
let corner_tr=0;
let corner_bl=0;
let corner_br=0;
let s1;
let s2;
let r;
let sandwich=N;
let blendmode=U;
let matrix=null;
let xblock;

let combined_xform;
let box;
let path;
let filling;
let single_pass;
let did_stroke;
let net_tl;
let net_tr;
let net_bl;
let net_br;


if((boxarg instanceof a_tree)||(boxarg instanceof a_path)){
box=tree_to_rect(boxarg);
}else if(boxarg instanceof Rectangle){
box=boxarg;
}else
argument_err("bad box");

if(box.width<1||box.height<1||container.bounds.width<1||container.bounds.height<1)
return;



for(let property in options){
switch(property){
case'color':
strokecolor=options.color;
break;

case'corner':
corner_tl=options.corner;
if(is_numeric(corner_tl)!==Y)
argument_err("bad corner");
corner_tr=corner_tl;
corner_bl=corner_tl;
corner_br=corner_tl;
break;

case'corner_tl':
corner_tl=options.corner_tl;
break;

case'corner_br':
corner_br=options.corner_br;
break;

case'corner_tr':
corner_tr=options.corner_tr;
break;

case'corner_bl':
corner_bl=options.corner_bl;
break;

case'fill':
fill=options.fill;
break;

case'grad':
grad=options.grad;
break;

case'matrix':
matrix=options.matrix;
break;

case'mode':
blendmode=options.mode;
break;

case'opacity':
if(is_numeric(options.opacity)!==Y)
argument_err("bad opacity");
opacity=clamp(options.opacity,0,1);
break;





case'pos':
if(is_numeric(options.pos)!==Y)
argument_err("bad pos");
pos=clamp(options.pos,0,1);
break;

case'thick':
if(is_numeric(options.thick)!==Y)
argument_err("bad thick");
strokewidth=options.thick;
break;

case'tile':
tile=options.tile;
break;

default:

argument_err("bad option: "+property);

}
}


filling=(grad!==null)||(tile!==null)||(fill!==U);

if(!filling&&(strokewidth<=0)){

return;
}



let wrapper=js_svg_wrapper(container,1);
let shape;
let rx;
let ry;
let is_uneven=(corner_tl!=corner_tr)||(corner_tr!=corner_bl)||(corner_bl!=corner_br);




function roundrect_path(left,top,h,v){

return'M '+left+','+(top+corner_tl)+
' A '+corner_tl+' '+corner_tl+' 0 0 1 '+(left+corner_tl)+' '+top+
' H '+(left+h-corner_tr)+
' A '+corner_tr+' '+corner_tr+' 0 0 1 '+(left+h)+' '+(top+corner_tr)+
' V '+(top+v-corner_br)+
' A '+corner_br+' '+corner_br+' 0 0 1 '+(left+h-corner_br)+' '+(top+v)+
' H '+(left+corner_bl)+
' A '+corner_bl+' '+corner_bl+' 0 0 1 '+left+' '+(top+v-corner_bl)+
' Z';
}



function create_roundrect(mybox){
let myshape;
let ss;

if(is_uneven){
myshape=document.createElementNS(SVG_NS,'path');
myshape.setAttribute('d',roundrect_path(Math.round(mybox.left),Math.round(mybox.top),
Math.round(mybox.width),Math.round(mybox.height)));
}else{
myshape=document.createElementNS(SVG_NS,'rect');
myshape.setAttribute('x',mybox.left.toFixed(0));
myshape.setAttribute('y',mybox.top.toFixed(0));
myshape.setAttribute('width',mybox.width.toFixed(0));
myshape.setAttribute('height',mybox.height.toFixed(0));
ss=corner_tl.toFixed(1);
myshape.setAttribute('rx',ss);
myshape.setAttribute('ry',ss);
}
return myshape;
}



if(tile!=null){
svg_define_pattern(tile,wrapper);
}else if(grad!=null){
svg_define_gradient(grad,wrapper,box);
}

let pass1=(filling||(pos==0.5));
let pass2=((strokewidth>0)&&(pos!=0.5));
let group;

if(pass1&&pass2&&opacity!=1){


group=document.createElementNS(SVG_NS,'g');
wrapper.appendChild(group);
wrapper=group;
if(opacity!=1){
group.setAttribute('opacity',opacity.toFixed(3));
opacity=1;
}
}


if(pass1){
shape=create_roundrect(box);

if(tile!=null){
shape.setAttribute('fill','url(#pat1)');
}else if(grad!=null){
shape.setAttribute('fill','url(#grad1)');
}else if(fill==U){
shape.setAttribute('fill','none');
}else
shape.setAttribute('fill',js_color_to_str(fill));
if((strokewidth>0)&&(pos==0.5)){

shape.setAttribute('stroke',js_color_to_str(strokecolor));
shape.setAttribute('stroke-width',strokewidth.toFixed(1));
}
if(opacity!=1){
shape.setAttribute('opacity',opacity.toFixed(3));
}
wrapper.appendChild(shape);
}


if(pass2){

let newbox=calc_middle_of_stroke(box,strokewidth,pos);
shape=create_roundrect(newbox);
shape.setAttribute('stroke',js_color_to_str(strokecolor));
shape.setAttribute('stroke-width',strokewidth.toFixed(1));
shape.setAttribute('fill','none');
if(opacity!=1){
shape.setAttribute('opacity',opacity.toFixed(3));
}
wrapper.appendChild(shape);
}






}















export function draw_oval(
container,
boxarg,
options){

let blendmode=U;
let matrix=null;
let stroke=BLACK;
let width=0;
let pos=0.5;
let opacity=1.0;
let fill=U;
let grad=null;
let tile=null;
let s1;
let s2;
let r;
let box;
let filling;
let did_stroke;


if((boxarg instanceof a_tree)||(boxarg instanceof a_path)){
box=tree_to_rect(boxarg);
}else if(boxarg instanceof Rectangle){
box=boxarg;
}else
argument_err("bad box");

if(box.width<1||box.height<1)
return;

for(let property in options){
switch(property){

case'color':
stroke=options.color;
break;

case'fill':
fill=options.fill;
break;

case'grad':
grad=options.grad;
break;

case'matrix':
matrix=options.matrix;
break;

case'mode':
blendmode=options.mode;
break;

case'opacity':
opacity=clamp(options.opacity,0,1);
break;

case'tile':
tile=options.tile;
break;

case'pos':
pos=clamp(options.pos,0,1);
break;

case'thick':
width=options.thick;
break;

case'x':
case'y':
case'center':
case'radius':
case'diam':

break;

default:

argument_err("bad option: "+property);

}
}


filling=(grad!==null)||(tile!==null)||(fill!==U);

if(!filling&&(width<=0))
return;







let wrapper=js_svg_wrapper(container,1);
let shape;
let rx;
let ry;
let pass1=(filling||(pos==0.5));
let pass2=((width>0)&&(pos!=0.5));
let group;

if(pass1&&pass2&&opacity!=1){


group=document.createElementNS(SVG_NS,'g');
wrapper.appendChild(group);
wrapper=group;
if(opacity!=1){
group.setAttribute('opacity',opacity.toFixed(3));
opacity=1;
}
}


if(pass1){


rx=box.width/2;
ry=box.height/2;


shape=document.createElementNS(SVG_NS,'ellipse');

shape.setAttribute('cx',(box.left+rx).toFixed(1));
shape.setAttribute('cy',(box.top+ry).toFixed(1));
shape.setAttribute('rx',rx.toFixed(1));
shape.setAttribute('ry',ry.toFixed(1));
if(tile!=null){
shape.setAttribute('fill','url(#pat1)');
}else if(grad!=null)
shape.setAttribute('fill','url(#grad1)');
else if(fill==U)
shape.setAttribute('fill','transparent');
else
shape.setAttribute('fill',js_color_to_str(fill));
if((width>0)&&(pos==0.5)){

shape.setAttribute('stroke',js_color_to_str(stroke));
shape.setAttribute('stroke-width',width.toFixed(1));
}
if(opacity!=1){
shape.setAttribute('opacity',opacity.toFixed(3));
}
wrapper.appendChild(shape);
}


if(pass2){

let newbox=calc_middle_of_stroke(box,width,pos);
rx=newbox.width/2;
ry=newbox.height/2;
shape=document.createElementNS(SVG_NS,'ellipse');

shape.setAttribute('cx',(newbox.left+rx).toFixed(1));
shape.setAttribute('cy',(newbox.top+ry).toFixed(1));
shape.setAttribute('rx',rx.toFixed(1));
shape.setAttribute('ry',ry.toFixed(1));
shape.setAttribute('stroke',js_color_to_str(stroke));
shape.setAttribute('stroke-width',width.toFixed(1));
shape.setAttribute('fill','transparent');
if(opacity!=1){
shape.setAttribute('opacity',opacity.toFixed(3));
}
wrapper.appendChild(shape);
}













































}






export function draw_circle(
container,
options){

let cx=0;
let cy=0;
let diam=U;
let radius=U;
let box;


for(let property in options){
switch(property){

case'x':
cx=options.x;
break;

case'y':
cy=options.y;
break;

case'center':
if(!(options.center instanceof a_tree)){
argument_err("bad arg");
return;
}
cx=getn(options.center,F_x);
cy=getn(options.center,F_y);
break;

case'radius':
if(is_numeric(options.radius)!==Y){
argument_err("bad arg");
return;
}
radius=options.radius;
break;

case'diam':
if(is_numeric(options.diam)!==Y){
argument_err("bad arg");
return;
}
diam=options.diam;
break;

default:

}
}

if(is_numeric(cx)!==Y){
argument_err("bad center x");
return;
}

if(is_numeric(cy)!==Y){
argument_err("bad center y");
return;
}

if(radius!==U){

box=new Rectangle(cx-radius,cy-radius,radius*2,radius*2);

}else if(diam!==U){

radius=diam/2;
box=new Rectangle(cx-radius,cy-radius,diam,diam);

}else{

argument_err("missing radius or diam");
return;
}


draw_oval(container,box,options);
}





export function draw_line(
container,
options){

let x1=U;
let y1=U;
let x2=U;
let y2=U;
let dx=U;
let dy=U;
let angle=null;
let len=U;
let color=BLACK;
let width=2;
let opacity=1.0;
let capx=CAP_ROUND;
let joinx=JOINT_ROUND;
let caps;
let joint;

for(let property in options){
switch(property){
case'angle':
angle=options.angle;
break;

case'cap':
capx=options.cap;
break;

case'color':
color=options.color;
break;

case'dx':
dx=options.dx;
break;

case'dy':
dy=options.dy;
break;

case'joint':
joinx=options.joint;
break;

case'p1':
x1=getn(options.p1,F_x);
y1=getn(options.p1,F_y);
break;

case'p2':
x2=getn(options.p2,F_x);
y2=getn(options.p2,F_y);
break;

case'x1':
x1=options.x1;
break;

case'y1':
y1=options.y1;
break;

case'x2':
x2=options.x2;
break;

case'y2':
y2=options.y2;
break;

case'len':
len=options.len;
break;

case'thick':
width=options.thick;
break;

case'opacity':
if(is_numeric(options.opacity))
opacity=clamp(options.opacity,0,1);
else
argument_err("bad arg");
break;

default:

argument_err("bad option: "+property);

}
}

if(width<0)
return;

if(angle!==null){
dx=mul(cos(angle),len);
dy=mul(sin(angle),len);
}

if(dx!==U)
x2=add(x1,dx);

if(dy!==U)
y2=add(y1,dy);


if((is_numeric(x1)!==Y)||(is_numeric(y1)!==Y)||(is_numeric(x2)!==Y)||(is_numeric(y2)!==Y)){
if(CHECKS)argument_err("bad args");
return;
}







switch(joinx){
case JOINT_ROUND:
joint="round";
break;
case JOINT_BEVEL:
joint="bevel";
break;
case JOINT_MITER:
joint="miter";
break;
default:
if(CHECKS)argument_err("bad line cap");

joint="round";
}

switch(capx){
case CAP_BUTT:
caps="butt";
break;
case CAP_ROUND:
caps="round";
break;
case CAP_SQUARE:
caps="square";
break;
default:
if(CHECKS)argument_err("bad line cap");

caps="round";
}


let wrapper=js_svg_wrapper(container,1);



let shape=document.createElementNS(SVG_NS,'line');

shape.setAttribute('x1',x1.toFixed(1));
shape.setAttribute('y1',y1.toFixed(1));
shape.setAttribute('x2',x2.toFixed(1));
shape.setAttribute('y2',y2.toFixed(1));
shape.setAttribute('stroke',js_color_to_str(color));
shape.setAttribute('stroke-width',width.toFixed(1));
shape.setAttribute('stroke-linecap',caps);
shape.setAttribute('stroke-linejoin',joint);
if(opacity!=1){
shape.setAttribute('opacity',opacity.toFixed(3));
}
wrapper.appendChild(shape);















}












export function draw_lines(
container,
pointlist,
options){

let x1;
let y1;
let x2;
let y2;

let firstx;
let firsty;
let first=true;



let iter=new a_loop({across:pointlist});
while(iter.next()){
x2=getn(iter.path,F_x);
y2=getn(iter.path,F_y);



if(first){
firstx=x2;
firsty=y2;
first=false;

}else{

options.x2=x2;
options.y2=y2;
options.x1=x1;
options.y1=y1;
draw_line(container,options);
}


x1=x2;
y1=y2;
}
}












export function launch_url(url){
if(IS_NODE){

debugger;
}else{
var win=window.open(url,"_blank");
}
}





export function measure_table_column(
b,
rowkind,
column)

{


let rowkind_ptr=k.tbl_find_rowkind(rowkind,b.tbl.s);


let col_ptr=rowkind_ptr.fields[column-1];


let width=col_ptr.stopdot-col_ptr.startdot;
return width;
}



























export async function ixdb_write(schema,objstore,rec_key,datapath){




if(TRACE_FILE)console.log(`${performance.now().toFixed(1)}: ixdb_write IXDB_START`);
const dbname=gets(schema,F_db_name);
const dbver=getn(schema,F_db_ver);
var open=indexedDB.open(dbname,dbver);
open.onupgradeneeded=function(e){gen_db_struct(schema,open.result)}
open.onerror=db_err;
open.onsuccess=function(){
if(TRACE_FILE)console.log(`${performance.now().toFixed(1)}: ixdb_write IXDB_OPEN`);

let db=open.result;
let tx=db.transaction(objstore,'readwrite');
let store=tx.objectStore(objstore);
let node=path_to_node(datapath);
if(rec_key===U)
store.add(node);
else
store.put(node,rec_key);

tx.oncomplete=function(){
if(TRACE_FILE)console.log(`${performance.now().toFixed(1)}: ixdb_write tx finished`);
db.close()}
}
}


export function ixdb_read(module,loc,schema,objstore,rec_key,datapath){



if(TRACE_FILE)console.log(`${performance.now().toFixed(1)}: ixdb_read IXDB_START`);
const dbname=gets(schema,F_db_name);
const dbver=getn(schema,F_db_ver);
var open=indexedDB.open(dbname,dbver);
open.onupgradeneeded=function(e){gen_db_struct(schema,open.result)}
open.onerror=db_err;
open.onsuccess=function(){
if(TRACE_FILE)console.log(`${performance.now().toFixed(1)}: ixdb_read IXDB_OPEN`);
let db=open.result;
let tx=db.transaction(objstore);
let store=tx.objectStore(objstore);

let readreq=store.get(rec_key);
readreq.onsuccess=function(e){

let raw=readreq.result;
let srcpath=new a_path(raw);
copy_tree(module,loc,srcpath,datapath);
if(TRACE_FILE)console.log(`${performance.now().toFixed(1)}: ixdb_read IXDB_OK`);
}
tx.oncomplete=function(){
if(TRACE_FILE)console.log(`${performance.now().toFixed(1)}: ixdb_read tx finished`);
db.close()}
}
}


export function ixdb_delete(schema,objstore,rec_key){



if(TRACE_FILE)console.log(`${performance.now().toFixed(1)}: ixdb_delete IXDB_START`);
const dbname=gets(schema,F_db_name);
const dbver=getn(schema,F_db_ver);
var open=indexedDB.open(dbname,dbver);
open.onupgradeneeded=function(e){gen_db_struct(schema,open.result)}
open.onerror=db_err;
open.onsuccess=function(){
if(TRACE_FILE)console.log(`${performance.now().toFixed(1)}: ixdb_delete IXDB_OPEN`);
let db=open.result;
let tx=db.transaction(objstore,'readwrite');
let store=tx.objectStore(objstore);
if(rec_key===U)
store.clear();
else
store.delete(rec_key);
if(TRACE_FILE)console.log(`${performance.now().toFixed(1)}: ixdb_delete IXDB_OK`);
tx.oncomplete=function(){
if(TRACE_FILE)console.log(`${performance.now().toFixed(1)}: ixdb_delete tx finished`);
db.close()}
}
}


function db_err(e){


alert('error opening database '+e.target.errorCode);
}


function gen_db_struct(schema,udb){





if(TRACE_FILE)console.log("gen_db_struct start...");
let iter=new a_loop({across:addr(schema,F_db_stores)});
while(iter.next()){

let store=iter.path;
let s_name=gets(store,F_store_name);
if(TRACE_FILE)console.log(`gen_db_struct checking store ${s_name}`);


if(!udb.objectStoreNames.contains(s_name)){
let s_auto=getn(store,F_store_autoinc);
let flags={}
flags.autoIncrement=(s_auto===Y);
let dbstore=udb.createObjectStore(s_name,flags);


let iter2=new a_loop({across:addr(store,F_store_indices)});
while(iter2.next()){
let index=iter2.path;
let ix_name=gets(index,F_index_name);
let ix_uniq=getn(index,F_index_unique);
let ix_mult=getn(index,F_index_multi);
let flags2={};
flags2.unique=(ix_uniq===Y);
flags2.multiEntry=(ix_mult===Y);
if(TRACE_FILE)console.log(`gen_db_struct creating index ${ix_name}`);
dbstore.createIndex(ix_name,ix_name,flags2);
}
}
}


if(TRACE_FILE)console.log("..end gen_db_struct");
}






export function seconds_to_date(seconds=U,_options=null){
if(seconds==U)
seconds=now;


if(_options!==null)
if(_options.hasOwnProperty('city')){
internal_err('not yet');
}

let jsd=new Date(seconds*1000);

return jsd_to_datetime(jsd);
}





export function date_to_seconds(datetime){



let jsd=datetime_to_jsd(datetime);
return jsd.getTime/1000;
}





function datetime_to_jsd(datetime){
let year;
let month;
let day;
let hour;
let minute;
let second;
let seconds_whole;
let msec;

year=getn(datetime,F_date_year);
month=getn(datetime,F_date_month)+1;
day=getn(datetime,F_date_day);
hour=getn(datetime,F_date_hour);
minute=getn(datetime,F_date_minute);
second=getn(datetime,F_date_second);
seconds_whole=Math.floor(second);
msec=(second-seconds_whole)*1000;


let jsd=new Date(year,month,day,hour,minute,seconds_whole,msec);
return jsd;
}






function jsd_to_datetime(jsd){
let result=new a_tree("std","$jsd_to_datetime",0);



setv(0,0,result,F_date_year,jsd.getFullYear());
setv(0,0,result,F_date_month,jsd.getMonth()+1);

setv(0,0,result,F_date_day,jsd.getDate());
setv(0,0,result,F_date_hour,jsd.getHours());
setv(0,0,result,F_date_minute,jsd.getMinutes());

let net_seconds=jsd.getSeconds()+jsd.getMilliseconds()*0.001;
setv(0,0,result,F_date_second,net_seconds);

return result;
}






function add_select_list(sel,list){
let option;
let group;
let ix;


let myloop=new a_loop({
across:list
});
while(myloop.next()){
ix=myloop.index;


if(exists(list,ix,F_opt_children)){

group=document.createElement('optgroup');
option.text=gets(list,ix,F_opt_label);


let sublist=addr(list,ix,F_opt_children);
add_select_list(sel,sublist);
}else{

option=document.createElement('option');
option.text=gets(list,ix,F_opt_label);
option.value=option.text;


if(exists(list,ix,F_opt_val))
option.value=gets(list,ix,F_opt_val);

if(getn(list,ix,F_opt_selected)==Y)
option.selected=true;

if(getn(list,ix,F_opt_disabled)==Y)
option.disabled=true;

sel.appendChild(option);
}
}
}






export function html_redirect(
url,options){

const newtab=((options!==undefined)&&options.hasOwnProperty('newtab')&&(options.newtab==Y))

if(newtab)
var mywin=window.open(url);
else
window.location.href=url;
}


















export function html_draw_pulldown(
container,
box,
items,
field_ptr,
options){

let size=pt_to_dots(container,10);
let is_multiple=false;
let nitems=U;
let ss;



for(let property in options){
switch(property){
case'size':
size=options.size;
break;





case'multiple':
is_multiple=options.multiple===Y;
break;

case'nitems':
nitems=options.nitems;
break;

default:

argument_err("bad option: "+property);

}
}


let sel=document.createElement('select');


add_select_list(sel,items);



ss=gets(field_ptr,F_in_value);






sel.style.boxSizing="border-box";


sel.style.position="absolute";
sel.style.left=getn(box,F_left).toFixed(0)+'px';
sel.style.top=getn(box,F_top).toFixed(0)+'px';
sel.style.width=getn(box,F_width).toFixed(0)+'px';
sel.style.height=getn(box,F_height).toFixed(0)+'px';


sel.style.fontSize=size.toFixed(1)+"px";


if(getn(field_ptr,F_is_required==Y))
sel.required=true;


ss=gets(field_ptr,F_in_autofill);
if(ss!=null)
sel.autocomplete=ss;


if(nitems!=U){
sel.size=nitems;
}


if(is_multiple)
sel.multiple=true;

container.appendChild(sel);

}






function js_scrollbar_width(){

var scrollDiv=document.createElement("div");

scrollDiv.style.width="100px";
scrollDiv.style.height="100px";
scrollDiv.style.overflow="scroll";
scrollDiv.style.position="absolute";
scrollDiv.style.top="-9999px";
document.body.appendChild(scrollDiv);


var result=scrollDiv.offsetWidth-scrollDiv.clientWidth;



document.body.removeChild(scrollDiv);
return result;
}
















export function js_resize(){





let horz=window.innerWidth;
let vert=window.innerHeight;

setv(0,0,runtime,F_window_horz,horz);
setv(0,0,runtime,F_window_vert,vert);
if(TRACE_BOOT)console.log(`--- js_resize: horz=${horz}, ${vert}`);


if(k.g_root_block!=undefined){

k.g_root_block.style.width=`${horz}px`;
k.g_root_block.style.height=`${vert}px`;



k.g_root_block.bounds=new Rectangle(0,0,horz,vert);


k.k_set_bounds(k.g_root_block,k.g_root_block.bounds);



var svg=k.g_root_block.last_svg_ptr;
if(svg!=undefined){

svg.setAttribute('width',horz.toFixed(0));
svg.setAttribute('height',vert.toFixed(0));
}


aaaa.main_drawer.code(k.g_root_block);
}




}






export function set_root_block(){



document.body.appendChild(k.g_root_block);

}







function js_click(event){

let target=event.target;



if(target.localName=="input"||target.localName=="select"||target.localName=="textarea"){


return;
}


event.preventDefault();






if(TRACE_CLICK)console.log(`js_click, ${target.localName} which=${event.which}, id=${target.id} .screen=[${event.screenX},${event.screenY}] .client=[${event.clientX},${event.clientY}] .scroll=${document.body.scrollTop} .scrY=${window.scrollY}, SHF=${event.shiftKey} ALT=${event.altKey} CMD=${event.metaKey} CTL=${event.ctrlKey}`);


let evkind;
if(event.which==1)
evkind=EV_TAP;
else{

evkind=EV_ALT_TAP;
}



k.do_pointer_event(evkind,elapsed,event.clientX,event.clientY,

{
mod_alt:event.altKey,
mod_cmd:event.metaKey,
mod_ctl:event.ctrlKey,
mod_shf:event.shiftKey
});



}





function js_mousemove(event){

let target=event.target;



if(target.localName=="input"||target.localName=="select"||target.localName=="textarea"){


return;
}


event.preventDefault();






if(TRACE_MOVE)console.log(`js_mousemove, ${target.localName} which=${event.which}, id=${target.id} .screen=[${event.screenX},${event.screenY}] .client=[${event.clientX},${event.clientY}] .scroll=${document.body.scrollTop} .scrY=${window.scrollY}, SHF=${event.shiftKey} ALT=${event.altKey} CMD=${event.metaKey} CTL=${event.ctrlKey}`);



k.do_pointer_event(EV_HOVER,elapsed,event.clientX,event.clientY,

{mod_alt:event.altKey,mod_cmd:event.metaKey,mod_ctl:event.ctrlKey,mod_shf:event.shiftKey});
}





function js_keydown(event){

var active=document.activeElement;
if((active!=null)&&
(active.localName=="input"||active.localName=="select"||active.localName=="textarea")){

return;
}


if(TRACE_KEYS)console.log(str.conv("at {n3} on_keydown, cc={}, keycode={}",elapsed,event.charCode,event.keyCode));











let keycode=event.keyCode;
if(keycode==20||keycode==17||keycode==18||keycode==16||keycode==91||keycode==92){

if(TRACE_KEYS)console.log("--ignoring shift key");
}else{

k.do_key_event(elapsed,event.key,keycode,event.shiftKey,event.altKey,event.metaKey,event.ctrlKey);
}

event.preventDefault();
}





function on_enter_frame(timestamp){



clock_tick();
loom_process_events();



if(SKIP_ANIMATION)
return;

requestAnimationFrame(on_enter_frame);
}







export function tree_find_top_level(targ){
let ix;
let len;


len=g_toplevel_nodes.length;
for(ix=0;ix<len;ix++){
if(g_toplevel_nodes[ix].val==targ)
return ix;
}


return-1;
}






export function new_block(
arg_parent,
arg_bounds,
arg_kind,
arg_label,


arg_drawer=null,
arg_dest=FOR_SCREEN){




let newb=document.createElement('div');



let net_left=Math.round(arg_bounds.left);
let net_top=Math.round(arg_bounds.top);
let net_right=Math.round(arg_bounds.left+arg_bounds.width);
let net_bottom=Math.round(arg_bounds.top+arg_bounds.height);


let fudgex=0;
let fudgey=0;















newb.style.left=`${net_left}px`;
newb.style.top=`${net_top}px`;
newb.style.width=`${net_right-net_left}px`;
newb.style.height=`${net_bottom-net_top}px`;
newb.style.position="absolute";



if(arg_label.substr(0,5)=="$root"){


newb.style.overflow="hidden";
}





newb.id=arg_label+"_"+g_next_bid.toString();
newb.blabel=arg_label;
newb.bid=g_next_bid++;
newb.bkind=arg_kind;
newb.bseq=0;
newb.locator=0;
newb.dest=arg_dest;

if(arg_parent===null){
newb.is_modal=false;
newb.dpi=SCREEN_DPI;

}else{
newb.is_modal=arg_parent.is_modal;
newb.dpi=arg_parent.dpi;


arg_parent.appendChild(newb);
}

newb.nesting=0;
newb.drawer=arg_drawer;
newb.usesz=[];
newb.is_measuring=false;
newb.div=null;
newb.tbl=null;






newb.extra=new a_tree("std","$a_block.extra");



newb.xtra_parms=null;
k.k_set_bounds(newb,arg_bounds);
return newb;



}








export let g_rawlog=[];


const NDELTAS_PER_CHUNK=24;
let g_chunkx=0;
let g_chunk_ndelta=0;
let g_chunk_delta_ss="";





const TRACE_MICRO=false;
const TRACE_LOGW=false;



export let g_micro=[];



export const LOGK_DELTA=0x0002;
export const LOGK_RENUM=0x0004;

export const MARK_CLEAR_BEG=0x0008;
export const MARK_CLEAR_END=0x0010;
export const MARK_TRUNC_BEG=0x0020;
export const MARK_TRUNC_END=0x0040;






export const OPS_THAT_USE_PATH=LOGK_DELTA|LOGK_RENUM;



export function a_micro(){

this.when=U;
this.module=U;
this.where=0;
this.kind=0;



this.path=null;
this.oldval=null;
this.newval=null;
}





export function next_rawx(){
return g_micro.length;
}






export function micro_add_marker(opcode){
let rec={};
rec.kind=opcode;
g_micro.push(rec);
}





export function pathx_to_hard(pathx){
let path=new a_path(pathx.lev[0].node);
let i;

for(i=1;i<=pathx.lastx;i++){
path.key.push(pathx.lev[i].sub);
}

return path;
}






export function micro_add_delta(
arg_kind,
arg_module,
arg_where,
arg_pathx,
arg_oldval,
arg_newval)
{
if(CHECKS&&((arg_where==0)||(!is_enum_b(arg_module))))
argument_err("log_delta requires where");





if(!(arg_pathx.lev[0].node.eflags&NF_LOGGED)){

return;
}


let rec={};
rec.when=elapsed;
rec.module=arg_module;
rec.where=arg_where;
rec.kind=arg_kind;


rec.path=pathx_to_hard(arg_pathx);


if(is_simple_value(arg_oldval)){

rec.oldval=arg_oldval;
}else{

rec.oldval=arg_oldval;
}

if(is_simple_value(arg_newval)){

rec.newval=arg_newval;
}else{

rec.newval=arg_newval;
}


let rawix=g_micro.length;

if(TRACE_MICRO)console.log(str.conv("micro[{}] when={}, kind={}, mod={}, linex={}, path={pathx}, old={}, new={}",
rawix,rec.when,arg_kind,arg_module,arg_where,arg_pathx,arg_oldval,arg_newval));

g_micro.push(rec);



}





function add_major_step(evkind){
let sx=tree_next_hi(addr(runtime,F_major_steps));
if(TRACE_MICRO)console.log(str.conv("add_major_step at {}, kind={}, rawx={}",sx,evkind,g_micro.length));
setv(0,0,runtime,F_major_steps,sx,F_evkind,evkind);
setv(0,0,runtime,F_major_steps,sx,F_when,elapsed);
setv(0,0,runtime,F_major_steps,sx,F_hist_rawx,g_micro.length);


setv(0,0,runtime,F_major_stepx,sx+1);
return sx;
}






export function add_major_callback(
elem){

if(TRACE_MICRO)console.log(str.conv("add_major_callback func={}",elem.func.name));


let sx=add_major_step(EV_TIMER);


setv(0,0,runtime,F_major_steps,sx,F_callback,elem.func);

}







export function add_major_event(
arg_event,
absorber)
{


let sx=append_tree(0,0,arg_event,addr(runtime,F_major_steps));

if(TRACE_MICRO){
let ss="null";
if(absorber!=null)
ss=absorber.blabel;
console.log(str.conv("add_major_event[{}] evkind={}, absorber={}, rawx={}",sx,getn(arg_event,F_evkind),ss,g_micro.length));
}


setv(0,0,runtime,F_major_steps,sx,F_hist_rawx,g_micro.length);


setv(0,0,runtime,F_major_stepx,sx+1);


if(absorber!=null){
setv(0,0,runtime,F_major_steps,sx,F_hist_absorber,absorber.blabel);
}

return sx;
}





function is_simple_value(val){

return(typeof val==='number')||
(typeof val==='string')||
(val instanceof a_image)||
(val instanceof a_sound)||
(val instanceof XMLHttpRequest);
}





export function a_num_animation(){
this.valpath=null;
this.busypath=null;
this.id=U;
this.startval=U;
this.endval=U;
this.starttime=U;
this.duration=U;

this.paused=false;
this.pause_start=0;


this.bez_x1=U;
this.bez_y1=U;
this.bez_x2=U;
this.bez_y2=U;
}






export function a_sys_gradient(){
this.grad_seq=0;
this.grad_obj=null;
}





export function a_loom_element(){
this.func=null;
this.nreps=1;
this.countx=0;
this.last_seen=0;
this.field_vec=[];
this.parm_array=[];
}






export function Point(x,y){
this.x=x;
this.y=y;
}






export function Rectangle(left,top,width,height){

this.left=left;
this.top=top;
this.width=width;
this.height=height;


}



Object.defineProperty(Rectangle.prototype,"right",{
get:function(){
return this.left+this.width;
}
});






Object.defineProperty(Rectangle.prototype,"bottom",{
get:function(){
return this.top+this.height;
}
});





Rectangle.prototype.union=function(box2){
return new Rectangle(Math.min(this.left,box2.left),
Math.min(this.top,box2.top),
Math.max(this.width,box2.width),
Math.max(this.height,box2.height));
}


Rectangle.prototype.intersection=function(box2){
let l,t,rit,bot;
l=Math.max(this.left,box2.left);
t=Math.max(this.top,box2.top);
rit=Math.min(this.left+this.width,box2.left+box2.width);
bot=Math.min(this.top+this.height,box2.top+box2.height);
return new Rectangle(l,t,rit-l,bot-t);
}






export function Matrix(){
internal_err("not yet");
}






export function Bitmap(){
internal_err("not yet");
}





export function a_entry_field(){
this.parm=0;
debugger;
}





export function a_div_slice(){
this.box=null;
this.id=U;

this.backcolor=U;
this.npasses=1;


this.drawer=null;
this.xtra_parms=null;


}





export function a_div_spec(arg_is_grid=false,arg_tblr=false){
this.horz_slices=[];
this.vert_slices=[];
this.open=true;
this.is_grid=arg_is_grid;
this.grid_tblr=arg_tblr;
this.ncols=0;
this.nrows=0;
}






export function a_unitxx(){
this.terms=[];
}





function compare_unit_terms(a,b){
if(a.name<b.name)
return-1;
else if(a.name>b.name)
return+1;
else
return 0;
}





function str_to_unitxx(compact){
let unitx=new a_unitxx();
let exp;
let numss;
let denss;

if(TRACE_UNITX)console.log("expand compact="+compact);

if(CHECKS&&compact=="")
internal_err("unit string missing from measure");


let chunks=compact.split(",");
let chunk;
let pos_caret;
let pos_bar;
let term;


for(chunk of chunks){

term={};


pos_caret=chunk.indexOf("^");
term.name=chunk.substring(0,pos_caret);

exp=chunk.substring(pos_caret+1);
pos_bar=exp.indexOf("|");
if(pos_bar<=0){

term.num=Math.floor(exp.substring(0,pos_bar));
term.den=Math.floor(exp.substring(pos_bar+1));
}else{

term.num=Math.floor(exp);
term.den=1;
}


unitx.terms.push(term);
}

return unitx;
}





a_unitxx.prototype.unitxx_to_str=function(){
let term;


this.terms.sort(compare_unit_terms);

if(TRACE_UNITX){
console.log("unitxx_to_str start, terms=");
for(term of this.terms){
console.log("  term.name="+term.name+", "+String(term.num)+" / "+String(term.den));
}
}


let ss="";
let first=true;
for(term of this.terms){
if(term.num==0)
continue;


while(1){

let active=false;
if(((term.num%2)==0)&&((term.den%2)==0)){
term.num/=2;
term.den/=2;
active=true;
}
if(((term.num%3)==0)&&((term.den%3)==0)){
term.num/=3;
term.den/=3;
active=true;
}
if(((term.num%5)==0)&&((term.den%5)==0)){
term.num/=5;
term.den/=5;
active=true;
}
if(!active)
break;
}

if(first)
first=false;
else
ss+=",";
ss+=term.name+"^"+String(term.num);
if(term.den!=1)
ss+="|"+String(term.den);
}

if(TRACE_UNITX)console.log("unitxx_to_str end, unitss="+ss);
return ss;
}





a_unitxx.prototype.find_unit_term=function(targ){
let term;
for(term of this.terms){
if(term.name==targ)
return term;
}
return null;
}





a_unitxx.prototype.add_unit_term=function(newterm,sign=+1){

let existing_term=this.find_unit_term(newterm.name);
if(existing_term==null){

this.terms.push(newterm);
}else{

if(newterm.den!=1){

existing_term.num*=newterm.den;
existing_term.den*=newterm.den;
}


existing_term.num+=newterm.num*existing_term.den*sign;
}
}







export function ByteArray(arg_len,arg_order){

this.arraybuf=new ArrayBuffer(arg_len);
this.view=new DataView(this.arraybuf,0);
this.position=0;

this.little=(arg_order!=BIG_END);
}


function ArrayBuffer_to_ByteArray(buf,arg_order){

return{
arraybuf:buf,
view:new DataView(buf,0),
position:0,
little:(arg_order!=BIG_END)
}
}





export function a_loop_step(){
this.index=null;
this.val=null;
this.key=null;
this.leaf=null;
this.path=null;
}





const METHOD_INFINITE=0;
const METHOD_RANGE=1;
const METHOD_ACROSS=2;
const METHOD_TOP_DOWN=3;
const METHOD_BOT_UP=4;
const METHOD_LIST=5;
const METHOD_RECURSIVE=6;
const METHOD_PASS2=7;

const STATE_EMIT=0;
const STATE_CHILDREN=1;
const STATE_SIBLINGS=2;

const SIGNAL=-99;


let g_sort_func;





















export function a_loop(options){
this.count=0;
this.index=1;
this.range_from=U;
this.range_to=INFINITY;
this.range_delta=1;
this.limit=INFINITY;
this.trap=false;
this.rev=false;
this.basis=null;
this.recursive_field=U;
this.sort_mode=0;
this.sort_field=U;

this.method=METHOD_INFINITE;
this.done=false;
this.include_root=false;

this.parent_node=null;
this.base_node=null;
this.state=0;
this.stack_ix=null;
this.stack_node=null;
this.stack_field=null;
this.stx=0;


for(let property in options){
switch(property){
case'across':
if(options.across instanceof a_tree)
this.basis=addr(options.across);
else if(options.across instanceof a_path)
this.basis=options.across;
else
argument_err("loop target must be a_path or a_tree");
this.method=METHOD_ACROSS;
break;

case'by':
this.range_delta=options.by;
if(is_numeric(this.range_delta)!=Y)
argument_err("bad 'delta' value");
if(this.range_delta<=0)
argument_err("delta must be positive");

break;

case'from':
this.range_from=options.from;
if(is_numeric(this.range_from)!=Y)
argument_err("bad from value");
this.method=METHOD_RANGE;
break;

case'bottom_up':
if(options.bottom_up instanceof a_tree)
this.basis=addr(options.bottom_up);
else if(options.bottom_up instanceof a_path)
this.basis=options.bottom_up;
else
argument_err("loop target must be a path or tree");
this.method=METHOD_BOT_UP;
break;

case'recursive':
if(options.recursive instanceof a_tree)
this.basis=addr(options.recursive);
else if(options.recursive instanceof a_path)
this.basis=options.recursive;
else
argument_err("loop target must be a path or tree");
this.method=METHOD_RECURSIVE;
break;

case'field':
this.recursive_field=options.field;
break;

case'top_down':
if(options.top_down instanceof a_tree)
this.basis=addr(options.top_down);
else if(options.top_down instanceof a_path)
this.basis=options.top_down;
else
argument_err("loop target must be a path or tree");
this.method=METHOD_TOP_DOWN;
break;



case'label':
this.label=options.label;
break;



case'limit':
this.limit=options.limit;
break;

case'rev':
this.rev=options.rev===Y;
break;

case'root':
this.include_root=options.root;
break;

case'sort_mode':
this.sort_mode=options.sort_mode;
break;

case'sort_field':
this.sort_field=options.sort_field;
break;

case'sort_func':
this.sort_func=options.sort_func;
break;

case'to_':
this.range_to=options.to_;
if(is_numeric(this.range_to)!=Y)
argument_err("bad 'to' value");
break;

case'trap':
this.trap=options.trap===Y;
break;



default:

argument_err("### bad property in options: "+property);

}
}


switch(this.method){
case METHOD_RANGE:
if(this.rev){

this.index=this.range_to+this.range_delta;
}else{

this.index=this.range_from-this.range_delta;
}
break;

case METHOD_ACROSS:
this.parent_node=path_to_node(this.basis);
if((k.g_curr_block!=null)&&(this.basis.base.eflags&NF_STATEFUL))
add_path_dependency(this.basis,this.parent_node);
if((this.parent_node==null)||(this.parent_node.children==null)){

this.done=true;
}else{

if(this.rev){
this.elemx=this.parent_node.children.length;
}else{
this.elemx=-1;
}
this.path=addr_append(this.basis,999);
}
break;

case METHOD_TOP_DOWN:
case METHOD_RECURSIVE:
this.base_node=path_to_node(this.basis);


if((k.g_curr_block!=null)&&(this.basis.base.eflags&NF_STATEFUL))
add_path_dependency(this.basis,this.base_node);
if(this.base_node==null){

this.done=true;
}else{
if(this.include_root)
this.state=STATE_EMIT;
else
this.state=STATE_CHILDREN;
this.stack_node=[this.base_node];

if(this.method==METHOD_RECURSIVE){

let field_path=addr(this.base_node,this.recursive_field);
let field_node=path_to_node(field_path);
this.stack_field=[field_node];
}
this.stack_ix=[-999];
this.stx=0;
this.path=this.basis.clone();
}
break;

case METHOD_BOT_UP:
internal_err("method not yet imp");
break;

default:
}



if(this.sort_mode!=0){
this.sort_list=[];
this.build_loop_steps();

if(this.sort_func==null){
this.sort_list.sort(default_sort_func);
}else{
g_sort_func=this.sort_func;
this.sort_list.sort(custom_sort_func);
}

this.done=false;
this.method=METHOD_PASS2;
this.count=0;
}


}







a_loop.prototype.update_pos=function(){
let i;
let _bx;


this.leaf=this.stack_node[this.stx];
this.index=this.leaf.sub;
this.val=this.leaf.val;



_bx=this.basis.key.length-1;


for(i=1;i<=this.stx;i++){

_bx+=1;
this.path.key[_bx]=this.stack_node[i-1].children[this.stack_ix[i]].sub;
}
this.path.key.length=_bx+1;
}






a_loop.prototype.next_topdown=function(){
let parent;
let _nextx;
let next;


while(1){
if(this.state==STATE_EMIT){
this.update_pos();
this.state=STATE_CHILDREN;
return true;
}


if(this.state==STATE_CHILDREN){
if(this.stack_node[this.stx].children!=null){

parent=this.stack_node[this.stx];
this.stx+=1;
if(this.rev)
_nextx=parent.children.length-1;
else
_nextx=0;
this.stack_ix[this.stx]=_nextx;
this.stack_node[this.stx]=parent.children[_nextx];
this.state=STATE_EMIT;
continue;
}
}

this.state=STATE_SIBLINGS;


if(this.stx>0){
parent=this.stack_node[this.stx-1];
if(this.rev){

_nextx=this.stack_ix[this.stx]-1;
if(_nextx>=0){

this.stack_ix[this.stx]=_nextx;
this.stack_node[this.stx]=parent.children[_nextx];
this.state=STATE_EMIT;
continue;
}
}else{

_nextx=this.stack_ix[this.stx]+1;
if(_nextx<parent.children.length){

this.stack_ix[this.stx]=_nextx;
this.stack_node[this.stx]=parent.children[_nextx];
this.state=STATE_EMIT;
continue;
}
}
}


this.stx-=1;
if(this.stx<0){

this.done=true;
return false;
}

this.state=STATE_SIBLINGS;

}


return false;
}






a_loop.prototype.next_recursive=function(){
let _parent;
let _nextx;
let next;
let i;
let _bx;


while(1){
if(this.state==STATE_EMIT){

this.leaf=this.stack_node[this.stx];
this.index=this.leaf.sub;
this.val=U;




this.path.key.length=this.basis.key.length;


for(i=1;i<=this.stx;i++){

this.path.key.push(this.recursive_field);



this.path.key.push(this.stack_field[i].children[this.stack_ix[i]].sub);
}

this.state=STATE_CHILDREN;
return true;
}


if(this.state==STATE_CHILDREN){
let field_path=addr(this.stack_node[this.stx],this.recursive_field);
let field_node=path_to_node(field_path);
if((field_node!=null)&&(field_node.children!=null)){

this.stx+=1;
if(this.rev)
_nextx=field_node.children.length-1;
else
_nextx=0;
this.stack_ix[this.stx]=_nextx;
this.stack_node[this.stx]=field_node.children[_nextx];
this.stack_field[this.stx]=field_node;
this.state=STATE_EMIT;
continue;
}
}


if(this.stx>0){
_parent=this.stack_field[this.stx];
if(this.rev){

_nextx=this.stack_ix[this.stx]-1;
if(_nextx>=0){

this.stack_ix[this.stx]=_nextx;
this.stack_node[this.stx]=_parent.children[_nextx];
this.state=STATE_EMIT;
continue;
}
}else{

_nextx=this.stack_ix[this.stx]+1;
if(_nextx<_parent.children.length){

this.stack_ix[this.stx]=_nextx;
this.stack_node[this.stx]=_parent.children[_nextx];
this.state=STATE_EMIT;
continue;
}
}
}


this.stx-=1;
if(this.stx<0){

this.done=true;
return false;
}


this.state=STATE_SIBLINGS;

}


return false;
}






a_loop.prototype.next=function(){

if(this.done){
return false;
}


if(ge2(this.count,this.limit)){

if(this.trap){

internal_err("Aborting because loop limit of "+String(this.limit)+" was reached");
}
this.done=true;
return false;
}


switch(this.method){
case METHOD_INFINITE:

break;

case METHOD_RANGE:

if(this.rev){

this.index-=this.range_delta;
if(this.index<this.range_from){
this.done=true;
return false;
}

}else{

this.index+=this.range_delta;
if(this.index>this.range_to){
this.done=true;
return false;
}
}
break;

case METHOD_ACROSS:
if(this.rev){
this.elemx-=1;
if(this.elemx<0){
this.done=true;
return false;
}
}else{
this.elemx+=1;
let children=this.parent_node.children;
if((children==null)||(this.elemx>=children.length)){
this.done=true;
return false;
}
}

this.leaf=this.parent_node.children[this.elemx];
this.index=this.leaf.sub;
this.val=this.leaf.val;



this.path.key[this.path.key.length-1]=this.index;
break;

case METHOD_TOP_DOWN:

if(!this.next_topdown()){
this.done=true;
return false;
}
break;

case METHOD_BOT_UP:
internal_err("not yet");
break;

case METHOD_RECURSIVE:

if(!this.next_recursive()){
this.done=true;
return false;
}
break;



case METHOD_PASS2:
var rec;


if(this.count>=this.sort_list.length){
this.done=true;
return false;
}

if(this.rev){

rec=this.sort_list[this.sort_list.length-1-this.count];
}else{

rec=this.sort_list[this.count];
}
this.index=rec.index;
this.val=rec.val;
this.leaf=rec.leaf;
this.path=rec.path;
break;

default:
internal_err("bad method");
}


this.count++;
return true;
}









function default_sort_func(stepa,stepb){
return collate_open(stepa.key,stepb.key);
}








function custom_sort_func(stepa,stepb){
return g_sort_func(stepa.key,stepb.key);
}










a_loop.prototype.build_loop_steps=function(){
let ix=0;
let rec;


while(this.next()){
ix+=1;
if(ix>100000)
internal_err("sanity check error: 100k sort item limit reached in loop.");


rec={};
rec.index=this.index;
rec.val=this.val;
rec.path=this.path.clone();
rec.leaf=this.leaf;


switch(this.sort_mode){
case 1:

rec.key=this.index;
break;

case 2:

rec.key=this.val;
break;

case 3:

rec.key=get_generic(this.path,this.sort_field);
break;

default:
internal_err("bad mode");
}


this.sort_list.push(rec);
}
}





export function a_tree(arg_mod=null,arg_label=null,arg_nodeflags=0){

var ix;

this.children=null;

if(arg_label==null){

this.val=U;
this.sub=U;
this.eflags=EF_VAL_IS_U;
this.seq=0;




}else{

if(arg_label=="")
arg_label="%anon";




this.val=arg_label;
this.eflags=EF_VAL_IS_STR|arg_nodeflags;
this.seq=0;











this.sub=str.str_to_enum("V_"+arg_mod+"_"+arg_label);


if((arg_nodeflags&NF_STATEFUL)!=0){




g_toplevel_nodes[this.sub]=this;
}

}
}


























export function a_dependency(){
this.path=null;
this.seq=0;
}





export function a_loom_anim_curve(){





























this.phase=0;
this.draw_end_time=0;
this.hold_end_time=0;
}





export function a_loom_anim_num(){
















this.paused=false;
this.pause_start=0;
}





export function a_path(arg_base){
this.base=arg_base;
this.key=[];
}


a_path.prototype.clone=function(){
let result=new a_path();
result.base=this.base;
result.key=this.key.concat();
return result;
}






a_path.prototype.clone_to_soft=function(){
var result=new a_path();
result.base=this.base.sub;
result.key=this.key.concat();
return result;
}





a_path.prototype.clone_to_hard=function(){
var result=new a_path();



if(typeof this.base==='number')
result.base=g_toplevel_nodes[this.base];
else
argument_err("A soft path should have a numeric base");
result.key=this.key.concat();
return result;
}






export function a_pathh(){
internal_err("not yet");
}







export function a_pathx(){
this.basepath=null;
this.lastx=-1;
this.lev=[];
this.exists=false;
let i;
for(i=0;i<MAX_LEVELS;i++){
this.lev[i]={};
}
}











export function a_image(arg_url,arg_hint="",arg_h=0,arg_v=0){



this.url=arg_url;
this.hint=arg_hint;
this.tile_width=arg_h;
this.tile_height=arg_v;
}










export function load_image(url,options){
var hint="";
var img;

for(let property in options){
switch(property){

case'hint':
hint=options.hint;
break;

default:

argument_err("bad option: "+property);

}
}


img=new a_image(url,null,hint);

return img;
}





export function a_meas(){
this.mag=U;
this.unit=U;
this.family=U;
this.unitss=null;
}





export function a_function(arg_modname="",arg_name="",arg_code=null,arg_track=null){
this.modname=arg_modname;
this.name=arg_name;
this.code=arg_code;
this.tracker=arg_track;
this.hash=str.str_hash_fnv(arg_name);
}





export function a_gradient(
arg_kind=null,
arg_spread=null,
arg_focus=0,
arg_angle=0,
arg_ratios=null,
arg_colors=null,
arg_alphas=null){
this.grad_kind=arg_kind;
this.grad_spread=arg_spread;
this.grad_focus=arg_focus;
this.grad_colors=arg_colors;
this.grad_alphas=arg_alphas;
this.grad_ratios=arg_ratios;
this.grad_angle=arg_angle;
}






export function a_sound(src){
this.loopf=false;
this.notify=false;
this.id=0;
this.pause_position=0;
this.curx=0;
this.numx=1;
if(IS_NODE){

this.audio=null;
}else{

let myaudio=new Audio(src);
myaudio.preload="auto";
myaudio.load();
this.audio=[myaudio];
}
}




function null_derive_func(){

}




export function solve_rectR(options){
let basis=null;
let centerx=U;
let centery=U;
let dx=U;
let dy=U;
let left=U;
let right=U;
let top=U;
let bottom=U;
let width=U;
let height=U;
let inset=U;
let inset_n=U;
let inset_s=U;
let inset_e=U;
let inset_w=U;
let inset_y=U;
let inset_x=U;
let pin=1;
let prop_x=U;
let prop_y=U;
let round=false;
let error=false;



for(let property in options){
switch(property){
case'basis':
basis=options.basis;
break;

case'bottom':
bottom=options.bottom;
break;

case'cx':
centerx=options.cx;
break;

case'cy':
centery=options.cy;
break;

case'dx':
dx=options.dx;
break;

case'dy':
dy=options.dy;
break;

case'height':
height=options.height;
break;

case'inset':
inset=options.inset;
break;

case'inset_n':
inset_n=options.inset_n;
break;

case'inset_s':
inset_s=options.inset_s;
break;

case'inset_e':
inset_e=options.inset_e;
break;

case'inset_w':
inset_w=options.inset_w;
break;

case'inset_y':
inset_y=options.inset_y;
break;

case'inset_x':
inset_x=options.inset_x;
break;

case'left':
left=options.left;
break;

case'pin':
pin=options.pin;
if(CHECKS&&(pin<1||pin>9))argument_err("bad pin value");
break;

case'prop_x':
prop_x=options.prop_x;
break;

case'prop_y':
prop_y=options.prop_y;
break;

case'right':
right=options.right;
break;

case'round':
round=options.round;
break;

case'top':
top=options.top;
break;

case'width':
width=options.width;
break;

default:

argument_err("### internal error, bad property in options: "+property);

}
}

if(basis!=null){

if(dx!=U)
basis=new Rectangle(basis.left+dx,basis.top,basis.width,basis.height);

if(dy!=U)
basis=new Rectangle(basis.left,basis.top+dy,basis.width,basis.height);


if(inset!=U){

basis=new Rectangle(basis.left+inset,basis.top+inset,basis.width-inset*2,basis.height-inset*2);
}

if(inset_y!=U){
basis=new Rectangle(basis.left,basis.top+inset_y,basis.width,basis.height-inset_y*2);
}

if(inset_x!=U){
basis=new Rectangle(basis.left+inset_x,basis.top,basis.width-inset_x*2,basis.height);
}

if(inset_n!=U){
basis=new Rectangle(basis.left,basis.top+inset_n,basis.width,basis.height-inset_n);
}

if(inset_s!=U){
basis=new Rectangle(basis.left,basis.top,basis.width,basis.height-inset_s);
}

if(inset_e!=U){
basis=new Rectangle(basis.left,basis.top,basis.width-inset_e,basis.height);
}

if(inset_w!=U){
basis=new Rectangle(basis.left+inset_w,basis.top,basis.width-inset_w,basis.height);
}
}


if(basis!=null){

switch((pin-1)%3){
case 0:
left=basis.left;
break;

case 1:
centerx=basis.left+basis.width/2;
break;

case 2:
right=basis.left+basis.width;
break;

}


switch(((pin-1)/3)>>0){
case 0:
top=basis.top;
break;

case 1:
centery=basis.top+basis.height/2;
break;

case 2:
bottom=basis.top+basis.height;
break;

default:
argument_err("pin out of range");

}

if(prop_x!=U&&prop_y!=U){

if(basis.width*prop_y>basis.height*prop_x){

height=basis.height;
width=height*prop_x/prop_y;
}else{

width=basis.width;
height=width*prop_y/prop_x;
}
}
}


if(left!=U){

if(width!=U){


}else if(right!=U){

width=(right-left);

}else if(centerx!=U){

width=(centerx-left)*2;

}else if(basis!=null){

width=basis.width;

}else{

error=true;
}
}else if(right!=U){

if(width!=U){

left=right-width;
}else if(centerx!=U){

width=(right-centerx)*2;
left=right-width;
}else if(basis!=null){
width=basis.width;
left=right-width;
}else{
error=true;
}
}else if(centerx!=U){

if(width!=U){

left=centerx-width/2;

}else if(basis!=null){

width=basis.width;
left=centerx-width/2;

}else{
error=true;
}
}else{
error=true;
}


if(top!=U){

if(height!=U){

}else if(bottom!=U){

height=bottom-top;
}else if(centery!=U){

height=(centery-top)*2;
}else if(basis!=null){

height=basis.height;
}else{
error=true;
}
}else if(bottom!=U){

if(height!=U){

top=bottom-height;
}else if(centery!=U){

height=(bottom-centery)*2;
top=bottom-height;
}else if(basis!=null){

height=basis.height;
top=bottom-height;
}else{
error=true;
}
}else if(centery!=U){

if(height!=U){

top=centery-height/2;
}else if(basis!=null){

height=basis.height;
top=centery-height/2;
}else{
error=true;
}
}else{
error=true;
}

if(CHECKS&&error)argument_err("insufficient info to determine rectangle");


if(inset!=U){
left+=inset;
top+=inset;
width-=inset+inset;
height-=inset+inset;
}

if(round){
left=Math.round(left);
top=Math.round(top);
width=Math.round(width);
height=Math.round(height);
}

return new Rectangle(left,top,width,height);
}







export function load_code(mod_name,mod_enum,mod_hash){
const CODE_FOLDER="/beads/bcode/";
let filepath;
let lines;






let hex=mod_hash.toString(16).toUpperCase();
while(hex.length<8){
hex='0'+hex;
}

let suffix="_"+hex+".bcode";
filepath=CODE_FOLDER+mod_name+suffix;


debugger;


if(lines===null){

lines=[];
lines.push(mod_name);
}


g_code[mod_enum]=lines;
}





export function s(stringset,key,lang=LANG_ENG){
return key;
}






export function is_enum_b(n){
return((n>=FIRST_ENUM)&&(n<=LAST_ENUM));
}







export function is_err_enum_b(n){
return(Number.isNaN(n)||((n>=FIRST_ENUM)&&(n<=LAST_ENUM)));
}





export function collate_num(a,b){
let cat_a;
let cat_b;

if(a===U)
cat_a=1;
else if(is_enum_b(a))
cat_a=2;
else if(Number.isNaN(a))
cat_a=3;
else
cat_a=0;

if(b===U)
cat_b=1;
else if(is_enum_b(b))
cat_b=2;
else if(Number.isNaN(b))
cat_b=3;
else
cat_b=0;

if(cat_a<cat_b){
if(TRACE_COLLATE)console.log(str.conv("collate_num, a={}, b={}, category -1",a,b));
return-1;
}

if(cat_a>cat_b){
if(TRACE_COLLATE)console.log(str.conv("collate_num, a={}, b={}, category +1",a,b));
return+1;
}


if(cat_a===0){

if(a<b){
if(TRACE_COLLATE)console.log(str.conv("collate_num, a={}, b={}, result=-1",a,b));
return-1;
}
if(a>b){
if(TRACE_COLLATE)console.log(str.conv("collate_num, a={}, b={}, result=+1",a,b));
return+1;
}
if(TRACE_COLLATE)console.log(str.conv("collate_num, a={}, b={}, result=0",a,b));
return 0;

}else if(cat_a===2){


if(TRACE_COLLATE)console.log(str.conv("collate_num, a={}, b={} enum",a,b));
return collate_str(str.enum_to_str(a),str.enum_to_str(b));
}


if(TRACE_COLLATE)console.log(str.conv("collate_num, a={}, b={}, other",a,b));
return 0;
}





export function collate_str(a,b){
let cat_a;
let cat_b;

if(a===U_STR)
cat_a=1;
else if(a===ERR_STR)
cat_a=2;
else
cat_a=0;

if(b===U_STR)
cat_b=1;
else if(b===ERR_STR)
cat_b=2;
else
cat_b=0;

if(cat_a<cat_b)
return-1;
else if(cat_a>cat_b)
return+1;
else{

if(cat_a===0){

if(a<b)
return-1;
if(a>b)
return+1;
}
}


return 0;
}

export const AS3_NUM=1;
export const AS3_STR=2;
export const AS3_OTHER=99;





export function as3_cat(a){
if(typeof a==='number')
return AS3_NUM;

if(typeof a==='string')
return AS3_STR;

return AS3_OTHER;
}






export function collate_open(a,b){
let cat_a=as3_cat(a);
let cat_b=as3_cat(b);


if(cat_a<cat_b)
return-1;
if(cat_a>cat_b)
return+1;


switch(cat_a){
case AS3_NUM:
return collate_num(a,b);



case AS3_STR:
return collate_str(a,b);



default:

}

if(TRACE_COLLATE)console.log(str.conv("collate open, equal, a={}, b={}",a,b));
return 0;
}




const TRACE_TASKS=true;

let q_tasks;
let q_taskx;
let q_loader;
let q_donef;
let q_progressf;





const TASK_WAITING=0;
const TASK_BUSY=1;
const TASK_DONE=2;
const TASK_FAILED=3;


export function a_qtask(arg_folder,arg_fname,arg_addr){
this.folder=arg_folder;
this.fname=arg_fname;
this.addr=arg_addr;
this.state=TASK_WAITING;
}


export function a_loader_x(arg_folder,arg_fname,arg_dtype,arg_callback,arg_parm,arg_cache){
debugger;
}





export function q_reset(){
q_tasks=[];

}






export function q_add_pic(
folder,
fname,
pic_addr)
{

if(TRACE_TASKS)console.log(str.conv("## adding task with fnane={str}, path={path}",fname,pic_addr));

let newtask=new a_qtask(folder,fname,pic_addr);
q_tasks.push(newtask);
}







export function q_start(on_done=null,on_progress=null){
if(TRACE_TASKS)console.log("## q_start, ntasks="+String(q_tasks.length));
q_donef=on_done;
q_progressf=on_progress;
q_taskx=0;


q_next_task();
}





function q_next_task(){
let ntasks=q_tasks.length;
let mytask;

if(q_taskx<ntasks){

if(TRACE_TASKS)console.log(str.conv("## task {int}/{int} running",q_taskx,ntasks));


mytask=q_tasks[q_taskx];
mytask.state=a_qtask.TASK_BUSY;
q_loader=new a_loader_x(mytask.folder,mytask.fname,TYPE_BYTES,on_task_complete,Y);


if(q_progressf!==null)
q_progressf(q_taskx,ntasks);

}else{

if(TRACE_TASKS)console.log("## q_tasks all done");
if(q_donef!==null)
q_donef();

}
}






function on_task_complete(okay,data){

if(okay===Y){
if(TRACE_TASKS)console.log(str.conv("## task {int} okay",q_taskx));
q_tasks[q_taskx].state=a_qtask.TASK_DONE;







}else{
if(TRACE_TASKS)console.log(str.conv("## task {int} failed",q_taskx));
q_tasks[q_taskx].state=a_qtask.TASK_FAILED;
}


q_taskx+=1;
q_next_task();
}






export function is_invalid_sub(sub){
if(typeof sub==='number'){

return Number.isNaN(sub)||sub===U;
}else if(typeof sub==='string'){

return false;
}else{

return true;
}


return false;
}





export function set_val_rect(module,loc,t,r){
setv(module,loc,t,F_left,r.left);
setv(module,loc,t,F_top,r.top);
setv(module,loc,t,F_width,r.width);
setv(module,loc,t,F_height,r.height);
}





export function rect_as_tree(left,top,width,height){
let t=new a_tree("std","$rect_as_tree");
setv(0,0,t,F_left,left);
setv(0,0,t,F_top,top);
setv(0,0,t,F_width,width);
setv(0,0,t,F_height,height);
return t;
}






export function tree_to_rect(boxt){
let left;
let top;
let width;
let height;

left=getn(boxt,F_left);
top=getn(boxt,F_top);
width=getn(boxt,F_width);
height=getn(boxt,F_height);








return new Rectangle(left,top,width,height);
}





export function point_as_tree(x,y){
let t=new a_tree("std","$point_as_tree");

setv(0,0,t,F_x,x);
setv(0,0,t,F_y,y);

return t;
}







export function SPTS(arg_pts){
return(arg_pts*SCREEN_DPI*ONE_72);
}




export function int_abs(a){
if(a<0)
return-a;
else
return a;
}







export function add_family(
family,
dimensions,
nonlinear=N)
{


if(nonlinear===Y){
setv(0,0,families,family,F_fam_nonlinear,Y);
}


if(dimensions!=="")
setv(0,0,families,family,F_fam_dim,dimensions);




}





export function add_unit(
family,
unit,
factor,
base_to_unitf=null,
unit_to_basef=null)

{


setv(0,0,unit_to_family,unit,family);



if(factor===1.0){

setv(0,0,families,family,F_fam_base,unit);
}

if(unit_to_basef===null){

setv(0,0,families,family,F_fam_units,unit,F_unit_factor,factor);
}else{

setv(0,0,families,family,F_fam_units,unit,F_base_to_unit,base_to_unitf);
setv(0,0,families,family,F_fam_units,unit,F_unit_to_base,unit_to_basef);
}

}





export function degree_to_radian(a){
return a*Math.PI/180;
}





export function radian_to_degree(a){
return a*180/Math.PI;
}








export function xy_in_rect(x,y,box){

x-=box.left;
y-=box.top;
return((x>=0)&&(y>=0)&&(x<box.width)&&(y<box.height));
}







export function tree_add(module,loc,src,dest){
path_setv(module,loc,dest,add(path_getv(dest,EF_VAL_IS_NUM),src));
}







export function tree_sub(module,loc,src,dest){
path_setv(module,loc,dest,sub(path_getv(dest,EF_VAL_IS_NUM),src));
}







export function tree_mul(module,loc,src,dest){
path_setv(module,loc,dest,mul(path_getv(dest,EF_VAL_IS_NUM),src));
}







export function tree_div(module,loc,src,dest){
path_setv(module,loc,dest,div(path_getv(dest,EF_VAL_IS_NUM),src));
}







export function tree_cat(module,loc,src,dest){
path_setv(module,loc,dest,cat(path_getv(dest,EF_VAL_IS_STR),src));
}





export function add(a,b){
let a_is_num=typeof a==='number';
let b_is_num=typeof b==='number';

if(a_is_num&&b_is_num){



if(is_err_enum_b(a)||is_err_enum_b(b)){
if(TRAP_ERR)internal_err("bad arg");
return ERR;
}

if((a===U)||(b===U)){
return U;
}



return a+b;
}

let a_is_mea=a instanceof a_meas;
let b_is_mea=b instanceof a_meas;




if(a_is_mea&&b_is_mea){
if(a.unitss===b.unitss){

let c=a.clone();
c.mag=a.mag+b.mag;
return c;
}
}





if(TRAP_ERR)internal_err("bad arg");
return ERR;
}





export function sub(a,b){
let a_is_num=typeof a==='number';
let b_is_num=typeof b==='number';

if(a_is_num&&b_is_num){



if(is_err_enum_b(a)||is_err_enum_b(b)){
if(TRAP_ERR)internal_err("bad arg");
return ERR;
}

if((a===U)||(b===U)){
return U;
}



return a-b;
}

let a_is_mea=a instanceof a_meas;
let b_is_mea=b instanceof a_meas;




if(a_is_mea&&b_is_mea){
if(a.unitss===b.unitss){

let c=a.clone();
c.mag=a.mag-b.mag;
return c;
}
}





if(TRAP_ERR)internal_err("bad arg");
return ERR;
}





export function mul(a,b){
let a_is_num=typeof a==='number';
let b_is_num=typeof b==='number';

if(a_is_num&&b_is_num){



if((a===0)||(b===0))

return 0;

if(a===Y)
a=1;
else if(a===N)
a=0;

if(b===Y)
b=1;
else if(b===N)
b=0;

if(is_err_enum_b(a)||is_err_enum_b(b)){
if(TRAP_ERR)internal_err("bad arg");
return ERR;
}

if((a===U)||(b===U)){
return U;
}

return a*b;
}

let a_is_mea=a instanceof a_meas;
let b_is_mea=b instanceof a_meas;
let cm;




if(a_is_mea&&b_is_mea){
cm=new a_meas();
cm.family=U;
cm.mag=a.mag*b.mag;
cm.unit=U;


let ax=str_to_unitxx(a.unitss);
let bx=str_to_unitxx(b.unitss);
let term;


for(term of bx){
ax.add_unit_term(term,+1);
}


cm.unitss=ax.unitxx_to_str();
return cm;
}




if(a_is_num&&b_is_mea){
if(is_err_enum_b(a)){

if(TRAP_ERR)internal_err("bad arg");
return ERR_MEAS;
}

if(a===U)
return U;

cm=b.clone();
cm.mag=b.mag*a;
return cm;
}




if(a_is_mea&&b_is_num){
if(is_err_enum_b(b)){
if(TRAP_ERR)internal_err("bad arg");
return ERR;
}
if(b===U)
return U;


if(is_enum_b(b)){

if(TRAP_ERR)internal_err("bad arg");
return ERR_MEAS;
}
cm=a.clone();
cm.mag=a.mag*b;
return cm;
}





if(TRAP_ERR)internal_err("bad arg");
return ERR;
}






export function div(a,b){
let a_is_num=typeof a==='number';
let b_is_num=typeof b==='number';

if(a_is_num&&b_is_num){



if(a===0)
return 0;

if(is_err_enum_b(a)||is_err_enum_b(b)){
if(TRAP_ERR)internal_err("bad arg");
return ERR;
}

if((a===U)||(b===U)){
return U;
}

let cn;
cn=a/b;
if(Number.isNaN(cn)){

if(TRAP_ERR)internal_err("bad arg");
return ERR;
}
return cn;
}

let a_is_mea=a instanceof a_meas;
let b_is_mea=b instanceof a_meas;
let cm;
let term;




if(a_is_mea&&b_is_mea){
cm=new a_meas();
cm.family=U;
cm.unit=U;
if(a.mag===0)
cm.mag=0;
else{
cm.mag=a.mag/b.mag;
if(Number.isNaN(cm.mag))

return ERR_MEAS;
}


let ax=str_to_unitxx(a.unitss);
let bx=str_to_unitxx(b.unitss);


for(term of bx){
ax.add_unit_term(term,+1);
}


cm.unitss=ax.unitxx_to_str();
return cm;
}




if(a_is_num&&b_is_mea){
if(is_err_enum_b(a)){

if(TRAP_ERR)internal_err("bad arg");
return ERR_MEAS;
}

if(a===0)
return 0;

if(a===U)
return U;

cm=new a_meas();
cm.family=U;
cm.unit=U;
if(a===0)
cm.mag=0;
else{
cm.mag=a/b.mag;
if(Number.isNaN(cm.mag))

return ERR_MEAS;
}


let nmx=str_to_unitxx(b.unitss);

for(term of nmx){
term.num=-term.num;
}
cm.unitss=nmx.unitxx_to_str();
return cm;
}




if(a_is_mea&&b_is_num){
if(is_err_enum_b(b)){
if(TRAP_ERR)internal_err("bad arg");
return ERR;
}
if(b===U)
return U;

cm=a.clone();
cm.mag=a.mag/b;
if(Number.isNaN(cm.mag))

return ERR_MEAS;

return cm;
}





if(TRAP_ERR)internal_err("bad arg");
return ERR;
}






export function exp(a,b,c){
if(is_err_enum_b(a)||is_err_enum_b(b)||is_err_enum_b(c))
return ERR;

if(a==U||b==U||c==U)
return U;

return Math.pow(a,b/c);
}






export function cat(...args){
var result="";



for(let arg of args){
if(arg==ERR_STR)
return ERR_STR;

if((arg==null)||(arg==""))
continue;


result+=arg;
}

return result;
}





export function negate(a){
let result;

if(is_err_enum_b(a)){
if(TRAP_ERR)internal_err("bad arg");
return ERR;
}

if(a===U)
return U;


return-a;
}






export function meas(arg_mag,arg_unitx,arg_familyx){
let factor;
let convfunc;
let result=new a_meas();

result.family=arg_familyx;
result.unit=arg_unitx;


if(arg_unitx!==U){
result.unitss=gets(families,arg_familyx,F_fam_dim);


factor=getn(families,arg_familyx,F_fam_units,arg_unitx,F_unit_factor);
if(factor===U){


convfunc=get_func(families,arg_familyx,F_fam_units,arg_unitx,F_unit_to_base);
result.mag=convfunc.code(arg_mag);
}else if(factor===1){

result.mag=arg_mag;
}else{

result.mag=mul(arg_mag,factor);
}
}else{


result.mag=arg_mag;
}

return result;
}





export function negate_meas(a){
let result;

result.mag=negate(a.mag);
result.family=a.family;
result.unit=a.unit;
result.unitss=a.unitss;

return result;
}





export function mul_meas_n(a,b){
let result=a.clone();


result.mag=mul(a.mag,b);

return result;
}









export function not4(a){
if(a===Y)
return N;

if(a===N)
return Y;

if(a===U)
return U;


return ERR;
}







export function or4(a,b){

if(Number.isNaN(a)||Number.isNaN(b))
return ERR;


if(a==U||b==U)
return U;

if(a===Y){
if((b===Y)||(b===N))
return Y;
}else if(a===N){
if(b===Y)
return Y;
if(b===N)
return N;
}


return ERR;
}





export function and4(a,b){

if(Number.isNaN(a)||Number.isNaN(b))
return ERR;


if(a==U||b==U)
return U;

if(a===Y){
if(b===Y)
return Y;
if(b===N)
return N;
}else if(a===N){
if((b===Y)||(b===N))
return N;
}


return ERR;
}





export function xor4(a,b){

if(Number.isNaN(a)||Number.isNaN(b))
return ERR;


if(a==U||b==U)
return U;


if(a===Y){
if(b===Y)
return N;
if(b===N)
return Y;
}else if(a===N){
if(b===Y)
return Y;
if(b===N)
return N;
}


return ERR;
}





export function xor2(a,b){

if(((a===Y)&&(b===N))||
((a===N)&&(b===Y)))
return true;


return false;
}






export function val_type(a){
if(typeof a==='number'){
if(Number.isNaN(a))
return TYPE_ERR;
if(a==U)
return TYPE_U;
if(is_enum_b(a))
return TYPE_ENUM;
return TYPE_NUM;

}else if(typeof a==='string'){
if(a==ERR_STR)
return TYPE_ERR;
return TYPE_STR;

}else if(a instanceof a_meas){
if(Number.isNaN(a.mag))
return TYPE_ERR;
if(a.mag==U)
return TYPE_U;
return TYPE_MEAS;

}else if(a instanceof a_path){
return TYPE_PATH;

}else if(a instanceof a_tree){
return TYPE_TREE;

}else if(a instanceof a_image){
return TYPE_IMAGE;

}else if(a instanceof a_sound){
return TYPE_SOUND;

}else if(a instanceof a_function){
return TYPE_FUNC;

}else if(a instanceof ByteArray){
return TYPE_BYTES;

}else if(a instanceof Object){
return TYPE_OBJECT;

}else if(a==null){
return TYPE_U;
}

if(CHECKS)throw new Error("unknown type");
return TYPE_U;
}





export function lt4(a,b){
let typea=val_type(a);
let typeb=val_type(b);

if(typea==TYPE_ERR||typeb==TYPE_ERR)
return ERR;
if(typea==TYPE_U||typeb==TYPE_U)
return U;
if(typea!=typeb)
return ERR;

switch(typea){
case TYPE_NUM:
if(a<b)
return Y;
else
return N;
break;

case TYPE_MEAS:
if(Number.isNaN(a.mag)||Number.isNaN(b.mag)||a.unitss!=b.unitss)
return ERR;
if(a.mag<b.mag)
return Y;
else
return N;
break;

case TYPE_STR:
if(a<b)
return Y;
else
return N;
break;

default:

return ERR;
}
}





export function le4(a,b){
let typea=val_type(a);
let typeb=val_type(b);

if(typea==TYPE_ERR||typeb==TYPE_ERR)
return ERR;
if(typea==TYPE_U||typeb==TYPE_U)
return U;
if(typea!=typeb)
return ERR;

switch(typea){
case TYPE_NUM:
if(a<=b)
return Y;
else
return N;
break;

case TYPE_MEAS:
if(Number.isNaN(a.mag)||Number.isNaN(b.mag)||a.unitss!=b.unitss)
return ERR;
if(a.mag<=b.mag)
return Y;
else
return N;
break;

case TYPE_STR:
if(a<=b)
return Y;
else
return N;
break;

default:

return ERR;
}
}





export function ge4(a,b){
let typea=val_type(a);
let typeb=val_type(b);

if(typea==TYPE_ERR||typeb==TYPE_ERR)
return ERR;
if(typea==TYPE_U||typeb==TYPE_U)
return U;
if(typea!=typeb)
return ERR;

switch(typea){
case TYPE_NUM:
if(a>=b)
return Y;
else
return N;
break;

case TYPE_MEAS:
if(Number.isNaN(a.mag)||Number.isNaN(b.mag)||a.unitss!=b.unitss)
return ERR;
if(a.mag>=b.mag)
return Y;
else
return N;
break;

case TYPE_STR:
if(a>=b)
return Y;
else
return N;
break;

default:

return ERR;
}
}





export function gt4(a,b){
let typea=val_type(a);
let typeb=val_type(b);

if(typea==TYPE_ERR||typeb==TYPE_ERR)
return ERR;
if(typea==TYPE_U||typeb==TYPE_U)
return U;
if(typea!=typeb)
return ERR;

switch(typea){
case TYPE_NUM:
if(a>b)
return Y;
else
return N;
break;

case TYPE_MEAS:
if(Number.isNaN(a.mag)||Number.isNaN(b.mag)||a.unitss!=b.unitss)
return ERR;
if(a.mag>b.mag)
return Y;
else
return N;
break;

case TYPE_STR:
if(a>b)
return Y;
else
return N;
break;

default:

return ERR;
}
}





export function eq4(a,b){
var typea=val_type(a);
var typeb=val_type(b);

switch(typea){
case TYPE_NUM:
case TYPE_ENUM:
if(a==b)
return Y;
else
return N;
break;

case TYPE_MEAS:
if(Number.isNaN(a.mag)||Number.isNaN(b.mag))
return ERR;
if(a.unitss==b.unitss&&(a.mag==b.mag))
return Y;
else
return N;
break;

case TYPE_STR:
if(a==b)
return Y;
else
return N;
break;

case TYPE_PATH:

if(is_path_equal(a,b))
return Y;
else
return N;
break;

case TYPE_ERR:
if(typeb==TYPE_ERR)
return Y;
else
return N;
break;

case TYPE_U:
if(typeb==TYPE_U)
return Y;
else
return N;
break;

case TYPE_OBJECT:

if(a==b)
return Y;
else
return N;
break;

default:

if(CHECKS)throw new Error("bad type");
return ERR;
}
}





export function ne4(a,b){
var typea=val_type(a);
var typeb=val_type(b);

switch(typea){
case TYPE_NUM:
case TYPE_ENUM:
if(a==b)
return N;
else
return Y;
break;

case TYPE_MEAS:
if(Number.isNaN(a.mag)||Number.isNaN(b.mag))
return ERR;
if(a.unitss==b.unitss&&(a.mag==b.mag))
return N;
else
return Y;
break;

case TYPE_STR:
if(a==b)
return N;
else
return Y;
break;

case TYPE_PATH:

if(is_path_equal(a,b))
return N;
else
return Y;

case TYPE_ERR:
if(typeb==TYPE_ERR)
return N;
else
return Y;
break;

case TYPE_U:
if(typeb==TYPE_U)
return N;
else
return Y;
break;

case TYPE_OBJECT:

if(a==b)
return N;
else
return Y;
break;

default:

return ERR;
}
}





export function lt2(a,b){
return lt4(a,b)==Y;
}





export function le2(a,b){
return le4(a,b)==Y;
}





export function ge2(a,b){
return ge4(a,b)==Y;
}





export function gt2(a,b){
return gt4(a,b)==Y;
}





export function eq2(a,b){
return eq4(a,b)==Y;
}





export function ne2(a,b){
return eq4(a,b)!=Y;
}










export function args_to_path(nskip,list){
let path;
let first=list[0];
let nparms=list.length-nskip;
let ix;
let startx;
let sub;

if(first instanceof a_path){


if(nparms==1)
return first;


path=first.clone();
startx=1;
}else if(first instanceof a_tree){

path=new a_path(first);
startx=1;
}else{
argument_err("bad arg");
}


for(ix=startx;ix<nparms;ix++){
sub=list[ix];
path.key.push(sub);
}

return path;
}






export function pathh(base_name,...levels){
let l;
let i;
let destx;

l=new a_pathh(str.str_hash_fnv(base_name));
destx=0;


for(i=0;i<levels.length;i++){
l.key[destx]=levels[i];
destx+=1;
}
return l;
}






export function addr(arg_base,...levels){
let l=new a_path();
let i;
let destx;

if(arg_base instanceof a_tree){

l.base=arg_base;
destx=0;
}else if(arg_base instanceof a_path){

l.base=arg_base.base;

l.key=arg_base.key.concat();
destx=l.key.length;
}else
argument_err("bad type");


for(i=0;i<levels.length;i++){
l.key[destx]=levels[i];
destx+=1;
}
return l;
}






export function addr_append(arg_basis,level1,...others){
let newleaf=new a_path();

newleaf.base=arg_basis.base;
newleaf.key=arg_basis.key.concat();

newleaf.key.push(level1);
for(let i=0;i<others.length;i++){
newleaf.key.push(others[i]);
}
return newleaf;
}





export function addr_head(src,ndrop){
let result;

if(ndrop===0)
return src;

result=src.clone();
result.key.length=result.key.length-ndrop;

return result;
}





export function addr_tail(path,nsteps){
let ix=path.key.length-1-nsteps;

if(ix>=0)
return path.key[ix];
else{
if(CHECKS)
argument_err("gone off the head of the path");
return U;
}
}






export function alloc_derived(loc,...args){
let elem;
let pathx;
let path;
let lx;


path=args_to_path(1,args);
pathx=path_create_pathx(path);


lx=pathx.lev.length-1;
elem=pathx.lev[lx].elem;


elem.derivef=args[args.length-1];


elem.eflags|=EF_DIRTY_OR_DERIVED;




g_currseq+=1;
if(TRACE_SEQ)console.log("+SEQ in alloc_derived");


while(lx>=0){
pathx.lev[lx].node.seq=g_currseq;
lx-=1;
}




}





export function exists(...args){
let path=args_to_path(0,args);
let pathx=path_to_pathx(path);
return(pathx!==null)&&pathx.exists;
}





export function tog(val){
if(val==Y)
val=N;
else if((val==N)||(val==U))
val=Y;
else
val=ERR;
return val;
}






export function toggle(module,loc,...args){

let path=args_to_path(0,args);
let pathx=path_create_pathx(path);
let val=leaf_getv(pathx,EF_VAL_IS_NUM);
if(val==Y)
val=N;
else if((val==N)||(val==U))
val=Y;
else
val=ERR;
if(TRACE_LOG&&(loc!==0))console.log(">> toggle");
setv_x(module,loc,pathx,val);
}





export function inc(module,loc,...args){
let path=args_to_path(0,args);
let pathx=path_create_pathx(path);
let val=leaf_getv(pathx,EF_VAL_IS_NUM);
val=add(val,1);
if(TRACE_LOG&&(loc!==0))console.log(">> inc");
setv_x(module,loc,pathx,val);
}





export function dec(module,loc,...args){
let path=args_to_path(0,args);
let pathx=path_create_pathx(path);
let val=leaf_getv(pathx,EF_VAL_IS_NUM);
val=sub(val,1);
if(TRACE_LOG&&(loc!==0))console.log(">> dec");
setv_x(module,loc,pathx,val);
}








export function matrix_lit(module,location,...args){
let node;
let path=new a_path();
let flag;
let nargs;
let ix;
let arg;

nargs=args.length;

flag=false;
node=new a_tree("std","$matrix_lit");
path.base=node;

for(ix=0;ix<nargs;ix++){
arg=args[ix];
if(arg===VAL){

flag=true;
}else if(flag){
path_setv(module,location,path,arg);
path.key.length=0;
flag=false;
}else{

path.key.push(arg);
}
}

return node;
}






export function tree_litP(module,loc,...args){



let mytree=tree_lit.apply(null,[module,loc].concat(args));
let mypath=new a_path(mytree);
return mypath;
}






export function tree_lit(module,loc,...args){
let mytree=new a_tree("$tree_lit");
let mypath=new a_path(mytree);
let depthx=0;
let nargs=args.length;
let argx;
let subscript;
let val;

mypath.key.push(0);



argx=0;
while(argx<nargs){
subscript=args[argx];
argx+=1;

if(subscript===PUSH){

mypath.key.push(0);
depthx+=1;

}else if(subscript===POP){

mypath.key.pop();
depthx-=1;

}else{

val=args[argx];
argx+=1;

mypath.key[depthx]=subscript;


if(val instanceof a_tree){

merge_tree(module,loc,val,mypath);
}else{



if(val!=U)
path_setv(module,loc,mypath,val);
}
}
}

mypath=null;
return mytree;
}






export function table_litP(

...args){



let mytree=table_lit.apply(null,args);
let mypath=new a_path(mytree);
return mypath;
}






export function table_lit(

...args){
let mytree=new a_tree("$table_lit");
let nargs=args.length;
let argx;
let field;
let fields=[];
let val;
let fieldx;
let rowx;

argx=0;


while(1){
field=args[argx];
argx+=1;

if(field===VAL){

break;
}

fields.push(field);
}

fieldx=0;
rowx=1;


while(argx<nargs){
val=args[argx];
argx+=1;

if(val===VAL){

rowx+=1;
fieldx=0;
}else{

setv(0,0,mytree,rowx,fields[fieldx],val);
fieldx+=1;
}
}

return mytree;
}






export function pathx_to_path(pathx){
let path=new a_path(pathx.lev[0].node);
let i;

for(i=1;i<=pathx.lastx;i++){
path.key.push(pathx.lev[i].sub);
}

return path;
}






export function path_to_pathx(path){
let px=new a_pathx();
let prevlevel=px.lev[0];
let currlevel;
let lx=0;
let targsub;
let index;


px.basepath=path;


prevlevel.node=path.base;
prevlevel.sub=U;
prevlevel.subx=-1;


for(targsub of path.key){
if(TRAP_BAD_SUBSCRIPTS&&(targsub===U))internal_err("bad subscript");
index=find_subscript(targsub,prevlevel.node,(path.base.eflags&NF_UNSORTED)===0);


if(!g_subscript_found){

return px;
}


lx+=1;
currlevel=px.lev[lx];
currlevel.sub=targsub;
currlevel.subx=index;
currlevel.node=prevlevel.node.children[index];


prevlevel=currlevel;
}


px.lastx=lx;
px.exists=true;
return px;
}





export function find_subscript(targsub,node,sorted){
let sub;
let totn;
let i;
let lo;
let hi;

g_subscript_found=false;
if(node.children===null){
return 0;
}


totn=node.children.length;

if(totn===0){

return 0;
}

if(sorted){

lo=0;
hi=totn-1;
while(lo<=hi){
if(TRACE_SEARCH)console.log(str.conv("binary search, lo={}, hi={}, totn={}",lo,hi,totn));
i=((lo+hi)/2)>>0;
sub=node.children[i].sub;
if(sub===targsub){

g_subscript_found=true;
if(TRACE_SEARCH)console.log(str.conv("..found, i={}",i));
return i;
}


if(targsub<sub){

hi=i-1;
}else{

lo=i+1;

}
}


if(targsub>node.children[i].sub){
i+=1;
}

}else{

if(TRACE_SEARCH)console.log(str.conv("linear search, totn={}",totn));
for(i=0;i<totn;i++){
if(node.children[i].sub===targsub){
g_subscript_found=true;
if(TRACE_SEARCH)console.log(str.conv("..found, i={}",i));
return i;
}
}

i=totn;
}


if(TRACE_SEARCH)console.log(str.conv("..not found, i={}",i));
return i;
}






export function path_create_pathx(path){
let px=new a_pathx();
let prevlevel=px.lev[0];
let currlevel;
let lx=0;
let targsub;
let index;
let added=false;

px.basepath=path;


prevlevel.node=path.base;
prevlevel.sub=U;
prevlevel.subx=-1;


for(targsub of path.key){

index=find_subscript(targsub,prevlevel.node,(path.base.eflags&NF_UNSORTED)===0);


if(!g_subscript_found){


if(prevlevel.node.children===null){
prevlevel.node.children=[];
}

prevlevel.node.children.splice(index,0,new a_tree("std"));
prevlevel.node.children[index].sub=targsub;




prevlevel.node.seq=g_currseq+1;
added=true;
}


lx+=1;
currlevel=px.lev[lx];
currlevel.sub=targsub;
currlevel.subx=index;
currlevel.node=prevlevel.node.children[index];


prevlevel=currlevel;
}

if(added){

g_currseq+=1;
}


px.lastx=lx;
px.exists=true;
return px;
}





export function path_to_node(path){
if(!(path instanceof a_path))debugger;

let px=path_to_pathx(path);
if(px!==null&&px.exists)
return px.lev[px.lastx].node;
else
return null;
}










export function node_get_type(node){
switch(node.eflags&EF_MASK_TYPE){
case EF_VAL_IS_U:
return TYPE_U;


case EF_VAL_IS_ERR:
return TYPE_ERR;


case EF_VAL_IS_NUM:

if((node.val===Y)||(node.val===N))
return TYPE_YESNO;
else
return TYPE_NUM;
break;

case EF_VAL_IS_STR:
return TYPE_STR;


case EF_VAL_IS_IMAGE:
return TYPE_IMAGE;


case EF_VAL_IS_FUNC:
return TYPE_FUNC;


case EF_VAL_IS_PATH:
return TYPE_PATH;


case EF_VAL_IS_MEAS:
return TYPE_MEAS;


case EF_VAL_IS_SOUND:
return TYPE_SOUND;










case EF_VAL_IS_BYTES:
return TYPE_BYTES;


case EF_VAL_IS_COLOR:
return TYPE_COLOR;


case EF_VAL_IS_DATE:
return TYPE_DATE;


case EF_VAL_IS_OBJECT:
return TYPE_OBJECT;


default:

internal_err("bad leaf type");
}

return TYPE_ERR;
}




function U_of_type(expected_type){
if((expected_type===0)||(expected_type&TYPES_WHERE_U_NUM))
return U;
else
return null;
}




function ERR_of_type(expected_type){

switch(expected_type){
case EF_VAL_IS_NUM:
return ERR;


case EF_VAL_IS_STR:
return ERR_STR;


case EF_VAL_IS_IMAGE:
return ERR_IMAGE;


case EF_VAL_IS_FUNC:
return ERR_FUNC;


case EF_VAL_IS_PATH:
return ERR_PATH;


case EF_VAL_IS_MEAS:
return ERR_MEAS;


case EF_VAL_IS_SOUND:
return ERR_SOUND;


case EF_VAL_IS_GRAD:
return ERR_GRAD;


case EF_VAL_IS_BITS:
return ERR_BITS;


case EF_VAL_IS_BYTES:
return ERR_BYTES;


case EF_VAL_IS_COLOR:
return ERR_COLOR;


case EF_VAL_IS_DATE:
return ERR_DATE;


default:

internal_err("bad type");
}
}





export function get_generic(...args){

let path=args_to_path(0,args);
let pathx=path_to_pathx(path);
return leaf_getv(pathx,0);
}





export function getn(...args){
let path=args_to_path(0,args);
let pathx=path_to_pathx(path);
return leaf_getv(pathx,EF_VAL_IS_NUM);
}




export function gets(...args){
let path=args_to_path(0,args);
let pathx=path_to_pathx(path);
return leaf_getv(pathx,EF_VAL_IS_STR);
}




export function get_path(...args){
let path=args_to_path(0,args);
let pathx=path_to_pathx(path);
return leaf_getv(pathx,EF_VAL_IS_PATH);
}




export function get_image(...args){
let path=args_to_path(0,args);
let pathx=path_to_pathx(path);
return leaf_getv(pathx,EF_VAL_IS_IMAGE);
}




export function get_meas(...args){
let path=args_to_path(0,args);
let pathx=path_to_pathx(path);
return leaf_getv(pathx,EF_VAL_IS_MEAS);
}




export function get_func(...args){
let path=args_to_path(0,args);
let pathx=path_to_pathx(path);
return leaf_getv(pathx,EF_VAL_IS_FUNC);
}




export function get_sound(...args){
let path=args_to_path(0,args);
let pathx=path_to_pathx(path);
return leaf_getv(pathx,EF_VAL_IS_SOUND);
}




export function get_object(...args){
let path=args_to_path(0,args);
let pathx=path_to_pathx(path);
return leaf_getv(pathx,EF_VAL_IS_OBJECT);
}





export function path_getv(path,expected_type){

let pathx=path_to_pathx(path);
return leaf_getv(pathx,expected_type);
}







export function add_path_dependency(path,node){

let dep=new a_dependency();
dep.path=path.clone();
if(node!=null)
dep.seq=node.seq;
else
dep.seq=0;
if(TRACE_IMPLIED)console.log(str.conv("--adding pathx add_path_dependency: {path} of seq {} in {}",dep.path,dep.seq,k.g_curr_block.blabel));
k.g_curr_block.usesz.push(dep);
}





export function add_pathx_dependency(pathx){

let dep=new a_dependency();
dep.path=pathx.basepath.clone();
if(pathx.exists)
dep.seq=pathx.lev[pathx.lastx].node.seq;
else
dep.seq=0;
if(TRACE_IMPLIED)console.log(str.conv("--adding pathx dependency: {path} of seq {} in {}",dep.path,dep.seq,k.g_curr_block.blabel));
k.g_curr_block.usesz.push(dep);
}





export function add_node_dependency(node){

let dep=new a_dependency();
dep.path=addr(node);
dep.seq=node.seq;
if(TRACE_IMPLIED)console.log(str.conv("--adding node dependency: {path} of seq {} in {}",dep.path,dep.seq,k.g_curr_block.blabel));
k.g_curr_block.usesz.push(dep);
}





export function leaf_getv(pathx,expected_type,add_dependency=true){

if(pathx===null){

return U_of_type(expected_type);
}




if((k.g_curr_block!=null)&&add_dependency&&(pathx.basepath.base.eflags&NF_STATEFUL)){
add_pathx_dependency(pathx);
}

if(!pathx.exists){

return U_of_type(expected_type);
}


let leaf=pathx.lev[pathx.lastx].node;


if((EF_DIRTY_OR_DERIVED&leaf.eflags)===EF_DIRTY_OR_DERIVED){





internal_err("not yet");


leaf.eflags&=~EF_IS_DIRTY;




}


if((expected_type==0)||(leaf.eflags&expected_type)!=0){


if((leaf.eflags&EF_VAL_IS_PATH)!=0){

var result_path=leaf.val;
return result_path.clone_to_hard();
}else{

return leaf.val;
}
}

if((leaf.eflags&EF_VAL_IS_U)!==0)
return U_of_type(expected_type);

if((leaf.eflags&EF_VAL_IS_ERR)!==0)
return ERR_of_type(expected_type);


if(TRAP_TYPE_MISMATCH)internal_err("type mismatch on get");
return ERR_of_type(expected_type);
}







export function setv(module,loc,...args){

let path=args_to_path(1,args);
let pathx=path_create_pathx(path);
if(TRACE_LOG&&(loc!==0))console.log(str.conv(">> setv {}={}",path,args[args.length-1]));
setv_x(module,loc,pathx,args[args.length-1]);
}





export function path_setv(module,loc,path,val){

if(path.base==undefined)argument_err("undefined base");
if(TRACE_LOG&&(loc!==0))console.log(str.conv(">> path_setv {}={}",path,val));
let pathx=path_create_pathx(path);
setv_x(module,loc,pathx,val);
}






function setv_x(
module,
loc,
pathx,
newval)
{
let changed=false;
let elem=pathx.lev[pathx.lastx].node;
let oldval=elem.val;
let oldflags=elem.eflags;



let newval_type=val_type(newval);

switch(newval_type){
case TYPE_U:
if((oldflags&EF_VAL_IS_U)==0){

changed=true;
elem.val=U;
elem.eflags=(oldflags&EF_CLEAR_TYPE)|EF_VAL_IS_U;
}
break;

case TYPE_ERR:
if((oldflags&EF_VAL_IS_ERR)==0){

changed=true;
elem.val=ERR;
elem.eflags=(oldflags&EF_CLEAR_TYPE)|EF_VAL_IS_ERR;
}
break;

case TYPE_NUM:
case TYPE_ENUM:
if(((oldflags&EF_VAL_IS_NUM)==0)||(oldval!==newval)){
elem.val=newval;
elem.eflags=(oldflags&EF_CLEAR_TYPE)|EF_VAL_IS_NUM;
changed=true;
}
break;

case TYPE_STR:
if(((oldflags&EF_VAL_IS_STR)==0)||(oldval!==newval)){
elem.val=newval;
elem.eflags=(oldflags&EF_CLEAR_TYPE)|EF_VAL_IS_STR;
changed=true;
}
break;

case TYPE_PATH:
if(((oldflags&EF_VAL_IS_PATH)==0)||!is_path_equal(oldval,newval)){
elem.val=newval.clone_to_soft();
elem.eflags=(oldflags&EF_CLEAR_TYPE)|EF_VAL_IS_PATH;
changed=true;
}
break;

case TYPE_MEAS:
if(((oldflags&EF_VAL_IS_MEAS)==0)||!is_meas_equal(oldval,newval)){
changed=true;
elem.val=newval;
elem.eflags=(oldflags&EF_CLEAR_TYPE)|EF_VAL_IS_MEAS;
}
break;

case TYPE_IMAGE:
if(((oldflags&EF_VAL_IS_STR)==0)||(oldval!==newval)){
changed=true;
elem.val=newval;
elem.eflags=(oldflags&EF_CLEAR_TYPE)|EF_VAL_IS_IMAGE;
}
break;

case TYPE_FUNC:
if(((oldflags&EF_VAL_IS_FUNC)==0)||(oldval!==newval)){
changed=true;
elem.val=newval;
elem.eflags=(oldflags&EF_CLEAR_TYPE)|EF_VAL_IS_FUNC;
}
break;

case TYPE_SOUND:
if(((oldflags&EF_VAL_IS_SOUND)==0)||(oldval!==newval)){
changed=true;
elem.val=newval;
elem.eflags=(oldflags&EF_CLEAR_TYPE)|EF_VAL_IS_SOUND;
}
break;









case TYPE_OBJECT:
if(((oldflags&EF_VAL_IS_OBJECT)==0)||(oldval!==newval)){
changed=true;
elem.val=newval;
elem.eflags=(oldflags&EF_CLEAR_TYPE)|EF_VAL_IS_OBJECT;
}
break;

default:
throw new Error("bad type");
}


let mybase=pathx.basepath.base;
if(TRACE_SETVAL&&(NF_STATEFUL&mybase.eflags)&&mybase.val.substr(0,1)!="$"){
if(changed)
console.log(str.conv("  setval {}={}, was {}",pathx,newval,oldval));
else
console.log(str.conv("  setval {}={}, unchanged",pathx,oldval));
}


if(changed&&(NF_STATEFUL&mybase.eflags)){




if(loc!==0)micro_add_delta(LOGK_DELTA,module,loc,pathx,oldval,newval);


g_currseq+=1;
if(TRACE_SEQ)console.log(str.conv("+SEQ {} in setv, path={}",g_currseq,pathx));


elem.seq=g_currseq;









if(elem.markf!==NULL_FUNC){

elem.markf(pathx);
}



}
}




export function append_val(module,loc,val,dest){
let sub=tree_next_hi(dest);
setv(module,loc,dest,sub,val);
return sub;
}




export function prepend_val(module,loc,val,dest){
let sub=tree_next_lo(dest);
setv(module,loc,dest,sub,val);
return sub;
}




export function append_tree(module,loc,a,b){
let sub=tree_next_hi(b);

let b2=addr_append(b,sub);

merge_tree(module,loc,a,b2);

return sub;
}




export function prepend_tree(module,loc,a,b){
let sub=tree_next_lo(b);

let b2=addr_append(b,sub);
merge_tree(module,loc,a,b2);
return sub;
}




export function copy_tree(module,loc,src,b){
let src_path;

if(src instanceof a_path)
src_path=src;
else if(src instanceof a_tree)
src_path=addr(src);
else
argument_err("expected a_tree, or a_path");

let ax=path_to_pathx(src_path);
if(ax===null||!ax.exists)
return;

let bx=path_create_pathx(b);
trunc_x(module,loc,bx);
merge_x(module,loc,ax,bx,0);
}





export function merge_tree(module,loc,a,b){
let src_path;

if(a instanceof a_path)
src_path=a;
else if(a instanceof a_tree)
src_path=addr(a);
else
argument_err("bad arg");

let ax=path_to_pathx(src_path);


if(ax===null||!ax.exists)
return;

let bx=path_create_pathx(b);
merge_x(module,loc,ax,bx,0);
}






function merge_x(module,loc,ax,bx,nesting){
let srcnode=ax.lev[ax.lastx].node;
let dstnode=bx.lev[bx.lastx].node;
let nsrc;
let srcx;
let dstx;
let srcsub;
let newnode;
let nextalev;
let nextblev;
let val;


if(nesting>0){
val=leaf_getv(ax,0);

setv_x(module,loc,bx,val);
}

if(srcnode.children!==null){


ax.lastx+=1;
bx.lastx+=1;
nextalev=ax.lev[ax.lastx];
nextblev=bx.lev[bx.lastx];


if(dstnode.children===null)
dstnode.children=[];


nsrc=srcnode.children.length;
for(srcx=0;srcx<nsrc;srcx++){

srcsub=srcnode.children[srcx].sub;
nextalev.node=srcnode.children[srcx];
nextalev.subx=srcx;
nextalev.sub=srcsub;




dstx=find_subscript(nextalev.sub,dstnode,(bx.lev[0].node.eflags&NF_UNSORTED)===0);
if(!g_subscript_found){

newnode=new a_tree("std");
newnode.sub=srcsub;
dstnode.children.splice(dstx,0,newnode);
nextblev.node=newnode;
}else{

nextblev.node=dstnode.children[dstx];
}
nextblev.subx=dstx;
nextblev.sub=srcsub;

merge_x(module,loc,ax,bx,nesting+1);
}

ax.lastx-=1;
bx.lastx-=1;
}
}





export function insert_val(module,loc,val,dest){

let bx=path_to_pathx(dest);
if(bx==null)
return;

if(!bx.exists||(bx.lastx===0)||(is_numeric(bx.lev[bx.lastx].sub)!==Y)){

setv(module,loc,dest,val);
}else{



let lev=bx.lev[bx.lastx];
let startx=lev.subx;
let ncon=count_consec(lev.node,startx);


shift_x(module,loc,bx,startx,lev.sub+1,ncon);


if(TRACE_LOG&&(loc!==0))console.log(">> insert_val");
setv_x(module,loc,bx,val);
}

}












export function insert_val_ordered(module,loc,val,dest){
let DELTA=1<<4;
let insertx,probe,last,hi,lo;
let newsub,range,cmp,hi_sub,lo_sub;
let bx=path_to_pathx(dest);

if(bx===null){

setv(module,loc,addr(dest,0),val);
return 0;
}


let lev=bx.lev[bx.lastx];
let parent=lev.node;

last=-1;
if(parent.children!==null){
last=parent.children.length-1;


while((last>=0)&&is_enum_b(parent.children[last].sub)){
last-=1;
}
}



if(last<0){

setv(module,loc,addr(dest,0),val);
return 0;
}


lo=0;
hi=last;



while((hi-lo)>1){
probe=(lo+hi+1)/2;
cmp=collate_open(val,parent.children[probe].val);
if(cmp>0){

lo=probe;
}else if(cmp<0){

hi=probe;
}else{


while((probe<last)&&(parent.children[probe].val===val)){
probe+=1;
}
lo=probe;
hi=probe;
break;
}
}

if(collate_open(val,parent.children[lo].val)<0){

insertx=lo;
}else if(collate_open(val,parent.children[hi].val)>=0){

insertx=hi+1;
}else{

insertx=hi;
}


if(insertx===0){

newsub=parent.children[0].sub-DELTA;
}else if(insertx>last){

newsub=parent.children[last].sub+DELTA;
}else{

lo_sub=parent.children[lo].sub;
hi_sub=parent.children[hi].sub;
range=hi_sub-lo_sub;
if(range<=1){

let ncon=count_consec(parent,hi);


if((bx.lev[0].node.eflags&NF_STATEFUL)!==0){


internal_err("logging not yet implemented");
}


for(let i=0;i<ncon;i++){
parent.children[hi].sub+=1;
hi+=1;
}
newsub=hi_sub;

}else{

newsub=parent.children[lo].sub+(range*0.5);
}
}


if(TRACE_LOG&&(loc!==0))console.log(">> insert_val");
setv(module,loc,addr(dest,newsub),val);


return newsub;
}







export function insert_tree(module,loc,a,b){
let bx=path_to_pathx(b);


if((bx!==null)&&(bx.lastx>0)&&(is_numeric(bx.lev[bx.lastx].sub)===Y)){

if(TRACE_LOG&&(loc!==0))console.log(str.conv(">> insert_tree, src={}, dest={}",a,b));


let startx=bx.lev[bx.lastx].subx;


let ncon=count_consec(bx.lev[bx.lastx-1].node,startx);


shift_x(module,loc,bx,startx,bx.lev[bx.lastx].sub+1,ncon);


}
merge_tree(module,loc,a,b);
}





export function remove_tree(module,loc,b){
let bx=path_to_pathx(b);
if(bx===null)
return;

let lastlev=bx.lev[bx.lastx];
let deletedsub=lastlev.sub;


if((bx.lastx===0)||(is_numeric(deletedsub)!==Y)){
clear_x(module,loc,bx);
return;
}

if(TRACE_LOG&&(loc!==0))console.log(str.conv(">> remove_tree, path={}",b));


let deletedsubx=lastlev.subx;
let ncon=count_consec(lastlev.node,deletedsubx);


clear_x(module,loc,bx);


if(ncon>1){

shift_x(module,loc,bx,deletedsubx+1,deletedsub,ncon-1);
}
}





export function clear_tree(module,loc,b){
let bx=path_to_pathx(b);
if(bx===null)
return;

if(TRACE_LOG&&(loc!==0))console.log(str.conv(">> clear_tree, path={}",b));
clear_x(module,loc,bx);
}






export function clear_x(module,loc,bx){

let logged=(NF_STATEFUL&bx.basepath.base.eflags)&&(loc!=0);
if(logged)
micro_add_marker(MARK_CLEAR_BEG);

trunc_x(module,loc,bx);
zap_x(module,loc,bx);

if(logged)
micro_add_marker(MARK_CLEAR_END);
}




export function trunc_tree(module,loc,b){
let bx=path_to_pathx(b);
if(bx===null||!bx.exists)
return;
if(TRACE_LOG&&(loc!==0))console.log(str.conv(">> trunc_tree, path={}",b));

let logged=(NF_STATEFUL&b.base.eflags)&&(loc!=0);
if(logged)
micro_add_marker(MARK_TRUNC_BEG);

trunc_x(module,loc,bx);

if(logged)
micro_add_marker(MARK_TRUNC_END);
}










function trunc_x(module,loc,px){
let curnode=px.lev[px.lastx].node;
let ix;
let nextlev;
let oldval;
let is_stateful=(px.lev[0].node.eflags&NF_STATEFUL);

if(curnode.children!==null){


px.lastx+=1;
nextlev=px.lev[px.lastx];
ix=curnode.children.length;
while(ix>0){
ix-=1;
nextlev.node=curnode.children[ix];
nextlev.subx=ix;
nextlev.sub=curnode.children[ix].sub;


if((loc!==0)&&is_stateful){

oldval=leaf_getv(px,0,false);
if(oldval!==U){


if(TRACE_LOG&&(oldval!==U))console.log(str.conv("  atomic trunc {pathx} was {}",px,oldval));


micro_add_delta(LOGK_DELTA,module,loc,px,oldval,U);
}
}


trunc_x(module,loc,px);
}


curnode.children.length=0;
curnode.children=null;


if(is_stateful)
curnode.seq=++g_currseq;


px.lastx-=1;
}
}






function zap_x(module,loc,px){
let oldval;
let is_stateful=px.lev[0].node.eflags&NF_STATEFUL;



if(px.lastx===0)
return;


if((loc!==0)&&is_stateful){

if(TRACE_LOG)console.log(str.conv("  atomic Zap: {}",px));


oldval=leaf_getv(px,0,false);

if(oldval!==U)

micro_add_delta(LOGK_DELTA,module,loc,px,oldval,U);
}


let parentlev=px.lev[px.lastx-1];
let targix=px.lev[px.lastx].subx;
parentlev.node.children.splice(targix,1);



if(is_stateful)
parentlev.node.seq=++g_currseq;


if(parentlev.node.children.length===0)
parentlev.node.children=null;
}





export function renum_tree(module,loc,b){
let bx=path_to_pathx(b);
if(bx===null||!bx.exists)
return;

renum_x(module,loc,bx);
}





export function renum_x(module,loc,px){
let node=px.lev[px.lastx].node;
if(node.children===null)
return;

let sub;
let startx=0;
let targsub=1;
let totn=node.children.length;
let n;
while(1){
if(startx>=totn)
break;

sub=node.children[startx].sub;
if(is_numeric(sub)!==Y)
break;

if(sub===targsub){

startx+=1;
targsub+=1;
}else{

n=count_consec(node,startx);
shift_x(module,loc,px,startx,targsub,n);
startx+=n;
targsub+=n;
}
}
}





export function shift_x(
module,
loc,
px,
startx,
newsub,
n){

let parentlev=px.lev[px.lastx-1];
let node=parentlev.node;

if((px.lev[0].node.eflags&NF_STATEFUL)!==0){

let oldsub=px.lev[px.lastx].sub;
if(TRACE_LOG)console.log(str.conv("  atomic shift path={} from subscript {} to {} n:{}",px,oldsub,newsub,n));


if(TRACE_LOG)console.log("logging of shift_x not yet imp");

}


let i;
for(i=0;i<n;i++){
node.children[startx].sub=newsub;
startx+=1;
newsub+=1;
}
}





function count_consec(node,startx){
let sub=node.children[startx].sub;
if(is_numeric(sub)!==Y)
return 1;


let targsub=sub+1;
let ix=startx+1;
let n=1;
let totn=node.children.length;
while(1){
if(ix>=totn)
break;

if(node.children[ix].sub!==targsub)
break;


n+=1;
ix+=1;
targsub+=1;
}

return n;
}




export function move_tree(module,loc,a,b){
let ax=path_to_pathx(a);
let bx=path_to_pathx(b);
move_x(module,loc,ax,bx);
}





function move_x(module,loc,ax,bx){
if(ax===null||!ax.exists||bx==null)

return;

if(ax.lev[ax.lastx].node.children===null)
return;

merge_x(module,loc,ax,bx,0);
trunc_x(module,loc,ax);
}




export function swap_tree(module,loc,a,b){
let temp;
let ax;
let bx;
let tx;

ax=path_to_pathx(a);
bx=path_to_pathx(b);

if((ax===null)||(bx===null)){
if(TRAP_ERR)internal_err("bad swap");

return;
}

temp=new a_tree("std","$swap_tree");
tx=path_to_pathx(addr(temp));

move_x(module,loc,bx,tx);
move_x(module,loc,ax,bx);
move_x(module,loc,tx,ax);
temp=null;
tx=null;
}






export function is_path_equal(a,b){
let i;


if(a===null)
return(b==null);
if(b==null)
return false;


if(a.base!==b.base)

return false;

if(a.key.length!==b.key.length)

return false;


for(i=0;i<a.key.length;i++){
if(a.key[i]!==b.key[i])
return false;
}


return true;
}





function is_meas_equal(m1,m2){
let meas1;
let meas2;

if(!(m1 instanceof a_meas)||!(m2 instanceof a_meas))
return false;

meas1=m1;
meas2=m2;
if(meas1.mag!==meas2.mag)
return false;

if(meas1.unitss!==meas2.unitss)
return false;

return true;
}





export function mark_all_instances(field){


if(TRACE_IMPLIED)console.log(str.conv("mark_all_instances, deferring all instances of {n}",field));
if(k.g_fields_to_mark.indexOf(field)<0){
k.g_fields_to_mark.push(field);
if(TRACE_IMPLIED)console.log(str.conv("  not yet in dirty array, adding {n}",field));
}
}





function add_runtime_to_vars(){

setv(0,0,META,M,F_mod_vars,V_std_runtime,TYPE_TREE);
setv(0,0,META,M,F_mod_vars,V_std_runtime,VAL,addr(runtime));
setv(0,0,META,M,F_mod_vars,V_std_runtime,F_v_rec,R_a_runtime);
setv(0,0,META,M,F_mod_vars,V_std_runtime,F_v_fields,F_args,TYPE_TREE);
setv(0,0,META,M,F_mod_vars,V_std_runtime,F_v_fields,F_app_version,TYPE_STR);
setv(0,0,META,M,F_mod_vars,V_std_runtime,F_v_fields,F_air_version,TYPE_STR);
setv(0,0,META,M,F_mod_vars,V_std_runtime,F_v_fields,F_os_version,TYPE_STR);
setv(0,0,META,M,F_mod_vars,V_std_runtime,F_v_fields,F_os_language,TYPE_NUM);
setv(0,0,META,M,F_mod_vars,V_std_runtime,F_v_fields,F_os_kind,TYPE_NUM);
setv(0,0,META,M,F_mod_vars,V_std_runtime,F_v_fields,F_cpu_kind,TYPE_NUM);
setv(0,0,META,M,F_mod_vars,V_std_runtime,F_v_fields,F_full_screen,TYPE_YESNO);
setv(0,0,META,M,F_mod_vars,V_std_runtime,F_v_fields,F_screen_dpi,TYPE_NUM);
setv(0,0,META,M,F_mod_vars,V_std_runtime,F_v_fields,F_window_horz,TYPE_NUM);
setv(0,0,META,M,F_mod_vars,V_std_runtime,F_v_fields,F_window_vert,TYPE_NUM);
setv(0,0,META,M,F_mod_vars,V_std_runtime,F_v_fields,F_screen_horz,TYPE_NUM);
setv(0,0,META,M,F_mod_vars,V_std_runtime,F_v_fields,F_screen_vert,TYPE_NUM);
setv(0,0,META,M,F_mod_vars,V_std_runtime,F_v_fields,F_touch_kind,TYPE_NUM);
setv(0,0,META,M,F_mod_vars,V_std_runtime,F_v_fields,F_hardware_id,TYPE_NUM);
setv(0,0,META,M,F_mod_vars,V_std_runtime,F_v_fields,F_os_modal,TYPE_NUM);
setv(0,0,META,M,F_mod_vars,V_std_runtime,F_v_fields,F_is_connected,TYPE_YESNO);




}






export const WHERE_LOOM=1<<30;

export let g_loom=[];
let g_block_animations=[];
let g_num_animations=[];

let g_loom_next_id=10000;
let g_block_animations_otime;





export function loom_next_id(){
return++g_loom_next_id;
}





export function loom_find_id(id){
let lx;
let len;

len=g_loom.length;
for(lx=0;lx<len;lx++){
if(g_loom[lx].id===id)
return lx;
}


return-1;
}






export function alloc_loom_elem(options){
let elem=new a_loom_element();
let prereq=U;
let group=U;
let time=U;
let delay=U;
let nreps=1;
let interval=U;
let interval_mon=U;
let alternate=false;
let speed=U;
let id=U;
let fadeout=U;
let hold=U;
let is_dilated=true;


for(let property in options){
switch(property){

case'delay':

delay=options.delay;
if(delay<0)
delay=0;
break;

case'duration':

interval=options.duration;
break;

case'fadeout':
fadeout=options.fadeout;
break;

case'group':
group=options.group;
break;

case'hold':
hold=options.hold;
break;

case'id':

id=options.id;
break;

case'interval':

interval=options.interval;
break;

case'interval_mon':

interval_mon=options.interval_mon;
break;

case'is_alternate':

alternate=options.is_alternate==Y;
break;

case'is_dilated':

is_dilated=options.is_dilated==Y;
break;

case'pre':
prereq=options.pre;





break;

case'rate':

interval=1.0/options.rate;
break;

case'reps':

nreps=options.reps;
break;

case'speed':

speed=options.speed;
break;

case'time':


if(is_numeric(options.time)===Y)
time=options.time;
else if(CHECKS)
argument_err("a specified time must be numeric");
break;


case'color':
case'thick':
case'cap':
case'opacity':
break;

default:


argument_err("internal error, bad property in options: "+property);
}
}

if((nreps>1)&&(interval==U))
argument_err("when repetitions is greater than 1, you must specify an interval or rate");

if((is_numeric(interval)===Y)&&(interval<0.010))
argument_err("cannot use repeat intervals less than 10 msec");

elem.is_relative=false;


let currtime;
if(is_dilated)
currtime=now;
else
currtime=now_raw;



if(delay!==U){

if(time!==U)
argument_err("cannot specify both absolute time and delay from now");

if(prereq===U){

if(delay===0){
time=currtime;
}else{
time=currtime+delay;
elem.is_relative=true;
}
}else{

time=delay;
}
}else if(time===U)
time=currtime;

if(id==U)
id=loom_next_id();

elem.prereq=prereq;
elem.group=group;
elem.id=id;
elem.time=time;
elem.nreps=nreps;
elem.countx=0;
elem.interval=interval;
elem.interval_mon=interval_mon;
elem.fadeout_duration=fadeout;
elem.hold_duration=hold;
elem.last_seen=0;
elem.alternate=alternate;
elem.speed=speed;
elem.is_dilated=is_dilated;

return elem;
}





function loom_dump1(loomx){
let fx;
let ndigits;
let val_ss;
let char_ss;
let msg;
let elem;

msg=str.conv("  loom[{int}]: ",loomx);


elem=g_loom[loomx];



msg+=str.conv("pre={n}, id={n}, time={n}, kind={n}, rel={bool}",elem.prereq,elem.id,elem.time,elem.evkind,elem.is_relative);

if(elem.evkind===EV_TIMER){


msg+=", parms=[";
for(fx=0;fx<elem.parm_array.length;fx++){
if(fx!==0)
msg+=", ";
msg+=str.conv("{}",elem.parm_array[fx]);
}
msg+=']';
}else{




}

console.log(msg);
}





function flush_pending_touches(id){
let i;
let outx;
let node;

if(TRACE_LOOM)console.log(str.conv("flush_pending_touches id {n}",id));












}





function flush_pending2(targ_id,event){
let id;



id=getn(event,F_touch_id);
if(TRACE_LOOM)console.log(str.conv("   flush_pending2, id={n}, targ={n}",id,targ_id));
if(id===targ_id){


if(TRACE_LOOM)console.log("  zapped a pending event");
setv(0,WHERE_LOOM,event,F_evkind,EV_NOP);
}
}





function loom_release_id(cleared_id){
let lx;


for(lx=0;lx<g_loom.length;lx++){
if(g_loom[lx].prereq===cleared_id){

if(CHECKS&&(is_numeric(g_loom[lx].time)!==Y))internal_err("loom time not numeric");
g_loom[lx].time+=now();
if(TRACE_LOOM)console.log(str.conv("  loom_clear id={n}, dependency at {int} cleared, new time {n}",cleared_id,lx,g_loom[lx].time));
g_loom[lx].prereq=U;
}
}
}







export function loom_clearx(loomx){

let cleared_id=g_loom[loomx].id;
loom_release_id(cleared_id);


g_loom.splice(loomx,1);
}






export function call_deferred_func(elem){


if(elem.group!=IDE_GROUP){
add_major_callback(elem);
}



elem.func.code.apply(null,elem.parm_array);
}





export function block_animation_enter(){
g_block_animations.length=0;
}






export function block_animation_leave(){
let a;




for(a of g_block_animations){

g_overlay.appendChild(a.block);
a.block.x=a.startx;
a.block.y=a.starty;
}

g_block_animations_otime=now();
}





export function loom_animate_block(
block,
reference,
targx,
targy,
duration,
curvefunc,
funcparm)
{

let a={};


let start_g=k.local_to_global_p(block,new Point(0,0));
let stop_g=k.local_to_global_p(reference,new Point(targx,targy));

a.id=++g_loom_next_id;
a.block=block;
a.oparent=block.parent;
a.duration=duration;
a.parm=0;
a.startx=start_g.x;
a.starty=start_g.y;
a.stopx=stop_g.x;
a.stopy=stop_g.y;
a.curvefunc=curvefunc;
a.funcparm=funcparm;
g_block_animations.push(a);

if(TRACE_ANIMATION)console.log(str.conv("animation add, id={n}",a.id));





return a.id;
}





function find_num_animation(id){
let ax;

for(ax=0;ax<g_num_animations.length;ax++){
if(id===g_num_animations[ax].id)
return ax;
}
return-1;
}





function abort_animate_num(ax,va,finishflag=N){
if(finishflag===Y)
path_setv(0,WHERE_LOOM,va.valpath,va.endval);

path_setv(0,WHERE_LOOM,va.busypath,N);


loom_release_id(va.id);


g_num_animations.splice(ax,1);
}




function pause_start(va){
va.paused=true;
va.pause_start=now();
if(TRACE_ANIMATION)console.log(str.conv("pause_start, time={}",va.pause_start));

}




function pause_end(va){
va.paused=false;

va.starttime+=now()-va.pause_start;
if(TRACE_ANIMATION)console.log(str.conv("pause_end, new start={}",va.starttime));
}












export function loom_animate_num_ctrl(id,options){
let ax;
let va;
let abort=U;
let finish=U;
let pause=U;
let resume=U;
let toggle=U;

for(let property in options){
switch(property){

case'abort':
abort=options.abort;
break;

case'finish':
finish=options.finish;
break;

case'pause':
pause=options.pause;
break;

case'resume':
resume=options.resume;
break;

case'toggle':
toggle=options.toggle;
break;

default:

argument_err("internal error, bad property in options: "+property);
}
}


ax=find_num_animation(id);
if(ax>=0){
va=g_num_animations[ax];

if(pause===Y){

if(!va.paused){
pause_start(va);
}
}else if(resume===Y){

if(va.paused){
pause_end(va);
}
}else if(toggle===Y){

if(va.paused)
pause_end(va);
else
pause_start(va);
}else if(finish===Y){

abort_animate_num(ax,va,Y);
}else if(abort===Y){

abort_animate_num(ax,va,N);
}

}else{

if(CHECKS)argument_err("not found");
}

}









function solve_unit_bezier(x,epsilon,p1x,p1y,p2x,p2y){

const TRACE_SOLVE=false;


var cx=3.0*p1x;
var bx=3.0*(p2x-p1x)-cx;
var ax=1.0-cx-bx;

var cy=3.0*p1y;
var by=3.0*(p2y-p1y)-cy;
var ay=1.0-cy-by;



function sampleCurveX(t){


return((ax*t+bx)*t+cx)*t;
}


function sampleCurveY(t){

return((ay*t+by)*t+cy)*t;
}


function sampleCurveDerivativeX(t){

return(3.0*ax*t+2.0*bx)*t+cx;
}



function solveCurveX(x,epsilon){


var t0;
var t1;
var t2;
var x2;
var d2;
var i;


for(t2=x,i=0;i<8;i++){
x2=sampleCurveX(t2)-x;
if(TRACE_SOLVE)console.log(str.conv("inside SolveCurvex,iteration {int}, x={n,3}, err={n,6}, eps={n,3}",i,x,Math.abs(x2),epsilon));
if(Math.abs(x2)<epsilon)
return t2;
d2=sampleCurveDerivativeX(t2);
if(Math.abs(d2)<1e-6)
break;
t2=t2-x2/d2;
}


t0=0.0;
t1=1.0;
t2=x;

if(t2<t0)
return t0;
if(t2>t1)
return t1;

while(t0<t1){
x2=sampleCurveX(t2);
if(Math.abs(x2-x)<epsilon)
return t2;
if(x>x2)
t0=t2;
else
t1=t2;
t2=(t1-t0)*.5+t0;
}


return t2;
}


return sampleCurveY(solveCurveX(x,epsilon));
}






export function loom_process_events(){
let elem;
let node;
let lx;
let ax;
let currtime;
let percent;
let va_elapsed;
let ba;
let va;
let did_trickle=false;
let newval;
let progress;
let clearflag;

currtime=now;

if(TRACE_LOOM&&g_loom.length>0)console.log(str.conv("loom_process_events, now={n3}, loom.n={}",currtime,g_loom.length));








if(g_block_animations.length>0){


if(TRACE_ANIMATION)console.log(str.conv("block animation loop len={}, now={n3}...",g_block_animations.length,currtime));


ax=0;
while(ax<g_block_animations.length){
ba=g_block_animations[ax];
percent=(currtime-g_block_animations_otime)*100/ba.duration;





if(TRACE_ANIMATION)console.log(str.conv("animation running otime={n3}, percent={n}, start=({},{}), stop=({},{}), parm={}",
g_block_animations_otime,percent,ba.startx,ba.starty,ba.stopx,ba.stopy,ba.funcparm));
ba.curvefunc(ba.block,percent,ba.startx,ba.starty,ba.stopx,ba.stopy,ba.funcparm);

if(percent>=100){

loom_release_id(ba.id);




ba.oparent.appendChild(ba.block);


g_block_animations.splice(ax,1);

if(TRACE_ANIMATION)console.log(str.conv("..animation {int} finished, after delete, len={int}",ax,g_block_animations.length));
}else{

ax+=1;
}
}


if(g_block_animations.length>0){
if(TRACE_ANIMATION)console.log("..end animations, still running");
return;
}else{
if(TRACE_ANIMATION)console.log("..all animations finished");
}

}





ax=0;
while(ax<g_num_animations.length){
if(TRACE_ANIMATION)console.log(str.conv("val animation loop ax={}, now={n3}",ax,currtime));
va=g_num_animations[ax];

if(va.paused){
ax+=1;
continue;
}


va_elapsed=currtime-va.starttime;
if(va_elapsed>=va.duration){

path_setv(0,WHERE_LOOM,va.busypath,N);
path_setv(0,WHERE_LOOM,va.valpath,va.endval);


loom_release_id(va.id);


g_num_animations.splice(ax,1);
if(TRACE_ANIMATION)console.log(str.conv("..num_animation {int} finished, after delete, len={int}",ax,g_num_animations.length));
}else{

if(va.bez_x1===U){

newval=interpolate(va_elapsed,0,va.duration,va.startval,va.endval,{clamp:Y});
}else{



progress=solve_unit_bezier(va_elapsed/va.duration,0.001,va.bez_x1,va.bez_y1,va.bez_x2,va.bez_y2);
if(TRACE_ANIMATION)console.log(str.conv("..bez, X={n,3}, Y={n,3}",va_elapsed/va.duration,progress));
newval=interpolate(progress,0,1,va.startval,va.endval,{});
}


if(TRACE_ANIMATION)console.log(str.conv("  setval, va_elapsed={}, newval={n,1}",va_elapsed,newval));
path_setv(0,WHERE_LOOM,va.valpath,newval);


ax+=1;
}
}






lx=0;
while(lx<g_loom.length){
clearflag=false;


elem=g_loom[lx];


if(elem.is_dilated)
currtime=now;
else
currtime=now_raw;

if(TRACE_SPRITE){
console.log(str.conv("loom_process_events[{int}], currtime={n3}, id={n}, pre={n}, elem.time={n3}",
lx,currtime,elem.id,elem.prereq,elem.time));

}


if(elem.prereq!==U){

if(TRACE_LOOM)console.log("  loom: waiting for a prereq");
lx+=1;

continue;
}

if(currtime<elem.time){

if(TRACE_LOOM)console.log(str.conv("  loom: waiting for time, elem.time={n3}, currtime={n3}",elem.time,currtime));
lx+=1;

continue;
}


switch(elem.evkind){

case EV_TIMER:

elem.countx+=1;
if(TRACE_LOOM)console.log("  loom: calling deferred function");
call_deferred_func(elem);


if(elem.interval_mon!=U&&getn(runtime,F_monitor_active)==Y){

elem.time=currtime+elem.interval_mon;
}else{

elem.time=currtime+elem.interval;
}
elem.is_relative=true;
break;





case EV_ANIM_CURVE:

clearflag=do_anim_curve(elem,currtime);
break;

case EV_ANIM_BLOCK:
throw new Error("not yet");
break;

case EV_ANIM_VAL:
throw new Error("not yet");
break;

case EV_NOP:

clearflag=true;
break;

default:
throw new Error("unexpected event kind");

break;

}


elem.last_seen=currtime;

if(TRACE_LOOM)console.log(str.conv("  loom: event was fired, count={n}, nreps={n}",elem.countx,elem.nreps));

if(clearflag||elem.countx>=elem.nreps){


if(TRACE_LOOM)console.log("  loom: event used up");
loom_clearx(lx);
}else{

lx+=1;
}


if(TRACE_LOOM)console.log("loom: about to call trickle");
k.trickle(0.0);
did_trickle=true;
}







if(!did_trickle){

k.trickle(0.0);
}










if(getn(runtime,F_monitor_active)==Y){

debugger;
}

}






function do_anim_curve(elem,currtime){
let anim_elapsed;
let clearflag=false;
let bez=elem.extra;
let t1;

switch(bez.phase){
case 0:


anim_elapsed=currtime-elem.time;
t1=anim_elapsed/elem.interval;
if(t1>1)
t1=1;
if(TRACE_CURVE)console.log(str.conv("curve drawing, now={}, t1={n3}, elapsed={}",currtime,t1,anim_elapsed));



bez.shape.graphics.clear();

debugger;




if(t1>=1){

bez.draw_end_time=now;
bez.phase=1;
if(TRACE_CURVE)console.log("  --advancing to hold phase");


if(elem.hold_duration==0){

bez.hold_end_time=currtime;
bez.phase=2;

}
}
break;

case 1:



if(elem.hold_duration==INFINITY){

clearflag=true;
if(TRACE_CURVE)console.log("curve holding forever, remove from loom");
}else{

anim_elapsed=currtime-bez.draw_end_time;
if(TRACE_CURVE)console.log(str.conv("curve holding, duration={n1}, elapsed={}",elem.hold_duration,anim_elapsed));
if(anim_elapsed>=elem.hold_duration){

bez.hold_end_time=currtime;
bez.phase=2;
if(TRACE_CURVE)console.log("--advancing to fadeout phase");

}
}
break;

case 2:


anim_elapsed=currtime-bez.hold_end_time;
var opacity=1-(elapsed/elem.fadeout_duration);
if(TRACE_CURVE)console.log(str.conv("curve fadeout, elapsed={}, opacity={n3}",anim_elapsed,opacity));
if(opacity<0.05){

bez.shape.parent.removeChild(bez.shape);
clearflag=true;
if(TRACE_CURVE)console.log("  --fadeout finished, removing from screen");
}else{

bez.shape.alpha=opacity;
if(TRACE_CURVE)console.log("  --fadeout updating opacity");
}
break;

default:
throw new Error("bad phase");
}

return clearflag;
}







export function rtl_init(){
console.log("---- std_init a");

zap_clock();


add_family(Y_Angle,"angle^1");
add_family(Y_Area,"len^2");
add_family(Y_Energy,"len^2,mass^1,time^-2");
add_family(Y_Force,"len^1,mass^1,time^-2");
add_family(Y_Frequency,"time^-1");
add_family(Y_Length,"len^1");
add_family(Y_Mass,"mass^1");
add_family(Y_Power,"len^2,mass^1,time^-3");
add_family(Y_Pressure,"len^2,mass^1,time^-3");
add_family(Y_Scalar,"");
add_family(Y_Speed,"len^1,time^-1");
add_family(Y_Temperature,"temp^1|1");
add_family(Y_Time,"time^1");
add_family(Y_Volume,"len^3");

add_unit(Y_Angle,N_radian,1.0);
add_unit(Y_Angle,N_deg,0.017453292519943295);
add_unit(Y_Angle,N_gradian,0.015707963267948967);
add_unit(Y_Angle,N_rev,6.283185307179586);

add_unit(Y_Area,N_sq_m,1.0);
add_unit(Y_Area,N_acre,4046.8564300507887);
add_unit(Y_Area,N_hectare,10000);
add_unit(Y_Area,N_sq_cm,0.0001);
add_unit(Y_Area,N_sq_ft,0.09290303999749462);
add_unit(Y_Area,N_sq_in,0.0006451600000025807);
add_unit(Y_Area,N_sq_mi,2589988.110285327);
add_unit(Y_Area,N_sq_mm,0.000001);
add_unit(Y_Area,N_sq_yd,0.8361273600007553);

add_unit(Y_Energy,N_joule,1.0);
add_unit(Y_Energy,N_BTU,1055.0558529687669);
add_unit(Y_Energy,N_calorie,4.183999932386561);
add_unit(Y_Energy,N_ev,1.602177330024137e-19);
add_unit(Y_Energy,N_gigajoule,1000000000);
add_unit(Y_Energy,N_hp_hour,2684519.537686219);
add_unit(Y_Energy,N_kw_hr,3599999.9971200004);
add_unit(Y_Energy,N_therm,105480400.00037256);

add_unit(Y_Force,N_newton,1.0);
add_unit(Y_Force,N_lbf,4.448221618990737);

add_unit(Y_Frequency,N_hz,1.0);
add_unit(Y_Frequency,N_rpm,0.016666666666666666);

add_unit(Y_Length,N_m,1.0);
add_unit(Y_Length,N_Å,1e-11);
add_unit(Y_Length,N_angstrom,1e-11);
add_unit(Y_Length,N_cm,0.01);
add_unit(Y_Length,N_dm,0.1);
add_unit(Y_Length,N_foot,0.30479999999999996);
add_unit(Y_Length,N_inch,0.0254);
add_unit(Y_Length,N_km,1000);
add_unit(Y_Length,N_mile,1609.3439999999998);
add_unit(Y_Length,N_mm,0.001);
add_unit(Y_Length,N_nautmile,1852);
add_unit(Y_Length,N_nm,1e-10);
add_unit(Y_Length,N_um,0.000001);
add_unit(Y_Length,N_yard,0.9143999999999999);

add_unit(Y_Mass,N_kg,1.0);
add_unit(Y_Mass,N_grain,0.00006479890999975407);
add_unit(Y_Mass,N_gram,0.001);
add_unit(Y_Mass,N_ounce,0.02834952316484755);
add_unit(Y_Mass,N_pound,0.4535923703803783);
add_unit(Y_Mass,N_slug,14.593903);
add_unit(Y_Mass,N_ton,907.1847407607567);
add_unit(Y_Mass,N_tonne,1000);
add_unit(Y_Mass,N_troy_ounce,0.031103476769649887);
add_unit(Y_Mass,N_troy_pound,0.3732417216026466);

add_unit(Y_Power,N_watt,1.0);
add_unit(Y_Power,N_gigawatt,1000000000);
add_unit(Y_Power,N_hp,745.6998713570781);
add_unit(Y_Power,N_kilowatt,1000);
add_unit(Y_Power,N_megawatt,1000000);
add_unit(Y_Power,N_milliwatt,0.001);

add_unit(Y_Pressure,N_pascal,1.0);
add_unit(Y_Pressure,N_bar,100000);
add_unit(Y_Pressure,N_psi,6894.7572798677575);
add_unit(Y_Pressure,N_torr,133.32236836846923);

add_unit(Y_Scalar,N_each,1.0);
add_unit(Y_Scalar,N_dozen,12);
add_unit(Y_Scalar,N_gross,144);

add_unit(Y_Speed,N_m_per_sec,1.0);
add_unit(Y_Speed,N_ft_per_min,0.0050799999922784);
add_unit(Y_Speed,N_ft_per_sec,0.304799999536704);
add_unit(Y_Speed,N_km_per_hr,0.2777777777777778);
add_unit(Y_Speed,N_m_per_min,0.016666666666666666);
add_unit(Y_Speed,N_mi_per_hr,0.4470400004105615);

add_unit(Y_Temperature,N_degK,1.0);
add_unit(Y_Temperature,N_degC,U,conv_degK_to_degC,conv_degC_to_degK);
add_unit(Y_Temperature,N_degF,U,conv_degK_to_degF,conv_degF_to_degK);

add_unit(Y_Time,N_sec,1.0);
add_unit(Y_Time,N_day,86400);
add_unit(Y_Time,N_hour,3600);
add_unit(Y_Time,N_microsec,0.000001);
add_unit(Y_Time,N_millisec,0.001);
add_unit(Y_Time,N_minute,60);
add_unit(Y_Time,N_month,223200);
add_unit(Y_Time,N_nanosec,1e-9);
add_unit(Y_Time,N_picosec,1e-12);
add_unit(Y_Time,N_week,604800);
add_unit(Y_Time,N_year,2678400);

add_unit(Y_Volume,N_l,1.0);
add_unit(Y_Volume,N_cu_ft,28.316579357213648);
add_unit(Y_Volume,N_cu_yd,764.5552200007645);
add_unit(Y_Volume,N_cup,0.23658823637296003);
add_unit(Y_Volume,N_gal,3.785411789132032);
add_unit(Y_Volume,N_ml,0.001);
add_unit(Y_Volume,N_oz,0.029573529564111873);
add_unit(Y_Volume,N_pint,0.47317647274592006);
add_unit(Y_Volume,N_quart,0.94635294549184);
add_unit(Y_Volume,N_tbsp,0.014786764780962696);
add_unit(Y_Volume,N_tsp,0.004928921598877499);


ERR_TREE=new a_tree("std","ERR_TREE",0);
META=new a_tree("std","META",0);

loom_history=new a_tree("std","$loom_history",NF_STATEFUL);


runtime=new a_tree("std","$runtime",0);

if(IS_NODE){
SCREEN_H=1024;
SCREEN_V=768;
SCREEN_DPI=96;
}else{
let mainscreen=window.screen;
SCREEN_H=mainscreen.availWidth;
SCREEN_V=mainscreen.availHeight;

SCREEN_DPI=96*window.devicePixelRatio;

}






setv(0,0,runtime,F_app_version,"1");


setv(0,0,runtime,F_os_language,js_to_langx(navigator.language));
setv(0,0,runtime,F_os_kind,OS_WEB);


let kind=CPU_INTEL;
if(navigator.userAgent.indexOf("ARM")!=-1)
kind=CPU_ARM;

setv(0,0,runtime,F_cpu_kind,kind);
setv(0,0,runtime,F_full_screen,N);
setv(0,0,runtime,F_screen_dpi,SCREEN_DPI);
setv(0,0,runtime,F_screen_horz,SCREEN_H);
setv(0,0,runtime,F_screen_vert,SCREEN_V);
setv(0,0,runtime,F_hardware_id,g_hardware_id);






setv(0,0,runtime,F_touch_kind,TOUCH_NONE);
setv(0,0,runtime,F_os_modal,0);












if(!IS_NODE){

k.k_init();


window.addEventListener("keydown",js_keydown);


window.addEventListener("mousemove",js_mousemove);



window.addEventListener("click",js_click);



window.addEventListener("contextmenu",js_click);



window.addEventListener("resize",js_resize);
js_resize();


let myid=requestAnimationFrame(on_enter_frame);
}

if(!('indexedDB'in window)){
console.log('This browser doesn\'t support IndexedDB');
}


if(TRACE_INIT)console.log("---- std_init z");

}