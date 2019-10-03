


import{
a_meas,
a_path,
a_image,
a_tree,
a_function,
a_sound,
a_gradient
}from'./beads_std.js';
import*as std from'./beads_std.js';


const TRACE_SPLIT=false;
const TRACE_CONV=false;
const TRACE_JSON=true;
const TRACE_FIND=true;
const TRAP_U_SUBSCRIPTS=true;

console.log("--- INIT A of str");


export const SUBOP_REG_NOCASE=0x0001;
export const SUBOP_REG_MULTILINE=0x0002;
export const SUBOP_REG_GLOBAL=0x0004;
export const SUBOP_REG_STARTS=0x0008;
export const SUBOP_REG_ENDS=0x0010;
export const SUBOP_REG_LOG=0x0020;

export const ERROR_STRING="ERR";

export const ascii_lowercase='abcdefghijklmnopqrstuvwxyz';
export const ascii_uppercase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const ascii_letters=ascii_lowercase+ascii_uppercase;
export const digits='0123456789';
export const hexdigits='0123456789abcdefABCDEF';
export const octdigits='01234567';

export const CR='\r';
export const LF='\n';

export const CODE_0='0'.charCodeAt(0);
export const CODE_9='9'.charCodeAt(0);
export const CODE_A='A'.charCodeAt(0);
export const CODE_TILDE='~'.charCodeAt(0);
export const CODE_SPACE=' '.charCodeAt(0);
export const CODE_SLASH='/'.charCodeAt(0);
export const CODE_SQUOTE="'".charCodeAt(0);
export const CODE_DQUOTE='"'.charCodeAt(0);
export const CODE_CR='\r'.charCodeAt(0);
export const CODE_NL='\n'.charCodeAt(0);
export const CODE_TAB='\t'.charCodeAt(0);
export const CODE_BACKSLASH='\\'.charCodeAt(0);




const DELIM_CR='\r';
const DELIM_CRLF='\r\n';
const DELIM_LF='\n';
let g_delimiter;


export const BOM_UTF16_LE=0xFEFF;
export const BOM_UTF16_BE=0xFFFE;


const SS_DATE=0;





export const PARSE_EOS="\uffff";
export let parse_include_white;
let gparse_pos;
let gparse_ss;
let gparse_errflag;
let gparse_errmsg;








export const BEADS_JSON_MARKER='{"!beads":';






export const F_find_len=9007192689371859;
export const R_a_find=9007194157790523;
export const F_find_start=9007191603303728;
export const M_str=9007191556776230;








export function str_hash_fnv(ident){
const TRACE_FNV=false;
const FNV_32_PRIME=0x01000193;
const FNV_32_H=0x0100;
const FNV_32_L=0x0193;
let v;
let cc;
let i;
let len=ident.length;
let bh;
let bl;

v=FNV_32_PRIME;
if(TRACE_FNV)console.log("at start, v=",v.toString(16));

for(i=0;i<len;i++){
cc=ident.charCodeAt(i);
v^=cc;
if(TRACE_FNV)console.log("step 1 c=",cc.toString(10),", v=",v.toString(16));








bh=v>>>16;
bl=v&0xFFFF;







v=Math.imul(v,FNV_32_PRIME)>>>0;


if(TRACE_FNV)console.log("step 2 c=",cc.toString(10),", v=",v.toString(16));
}

if(TRACE_FNV)console.log("result for string ",ident,", v=",v.toString(16));
return v;
}







export function safe_for_html(ss){
let net="";
let i;
let cc;


for(i=0;i<ss.length;i++){
cc=ss.charAt(i);
if(cc==='<')
cc="&lt;";
else if(cc==='>')
cc="&gt;";
else if(cc==='&')
cc="&amp;";
else if(cc==='"')
cc="&quot;";
else if(cc==="'")
cc="&apos;";
net+=cc;
}

return net;
}







export function filepath_get_folder(mypath){

let fSlash=mypath.lastIndexOf("/");
let bSlash=mypath.lastIndexOf("\\");
let slashIndex=fSlash>bSlash?fSlash:bSlash;
return mypath.substr(0,slashIndex);

}





export function filepath_get_name(mypath){

let fSlash=mypath.lastIndexOf("/");
let bSlash=mypath.lastIndexOf("\\");
let slashIndex=fSlash>bSlash?fSlash:bSlash;
return mypath.substr(slashIndex+1);

}





function weekday_to_short_str(weekday,lang=std.U){
switch(weekday){
case 0:
return std.s(SS_DATE,"Sun",lang);
case 1:
return std.s(SS_DATE,"Mon",lang);
case 2:
return std.s(SS_DATE,"Tue",lang);
case 3:
return std.s(SS_DATE,"Wed",lang);
case 4:
return std.s(SS_DATE,"Thu",lang);
case 5:
return std.s(SS_DATE,"Fri",lang);
case 6:
return std.s(SS_DATE,"Sat",lang);
default:
return std.ERR_STR;
}
}





function weekday_to_long_str(weekday,lang=std.U){
switch(weekday){
case 0:
return std.s(SS_DATE,"Sunday",lang);
case 1:
return std.s(SS_DATE,"Monday",lang);
case 2:
return std.s(SS_DATE,"Tuesday",lang);
case 3:
return std.s(SS_DATE,"Wednesday",lang);
case 4:
return std.s(SS_DATE,"Thursday",lang);
case 5:
return std.s(SS_DATE,"Friday",lang);
case 6:
return std.s(SS_DATE,"Saturday",lang);
default:
return std.ERR_STR;
}
}





function month_to_short_str(month,lang=std.U){
switch(month){
case 1:
return std.s(SS_DATE,"Jan",lang);
case 2:
return std.s(SS_DATE,"Feb",lang);
case 3:
return std.s(SS_DATE,"Mar",lang);
case 4:
return std.s(SS_DATE,"Apr",lang);
case 5:
return std.s(SS_DATE,"May",lang);
case 6:
return std.s(SS_DATE,"Jun",lang);
case 7:
return std.s(SS_DATE,"Jul",lang);
case 8:
return std.s(SS_DATE,"Aug",lang);
case 9:
return std.s(SS_DATE,"Sep",lang);
case 10:
return std.s(SS_DATE,"Oct",lang);
case 11:
return std.s(SS_DATE,"Nov",lang);
case 12:
return std.s(SS_DATE,"Dec",lang);
default:
return std.ERR_STR;
}
}





function month_to_long_str(month,lang=std.U){
switch(month){
case 1:
return std.s(SS_DATE,"January",lang);
case 2:
return std.s(SS_DATE,"February",lang);
case 3:
return std.s(SS_DATE,"March",lang);
case 4:
return std.s(SS_DATE,"April",lang);
case 5:
return std.s(SS_DATE,"May",lang);
case 6:
return std.s(SS_DATE,"June",lang);
case 7:
return std.s(SS_DATE,"July",lang);
case 8:
return std.s(SS_DATE,"August",lang);
case 9:
return std.s(SS_DATE,"September",lang);
case 10:
return std.s(SS_DATE,"October",lang);
case 11:
return std.s(SS_DATE,"November",lang);
case 12:
return std.s(SS_DATE,"December",lang);
default:
return std.ERR_STR;
}
}






function adjust_to_city(dateobj,time,city){

if(city==std.TIMEZONE_GMT||city==std.TIMEZONE_UTC){

let offset=dateobj.getTimezoneOffset()*60*1000;

dateobj.setTime(time+offset);
}else{

std.argument_err("arbitrary time zones not yet implemented");
}
}







































export function time_to_str(format,options){

const STATE_PLAIN=0;
const STATE_BRACE=1;
const L_MARK="[";
const R_MARK="]";

let result;
let token;
let cc;
let pos;
let state;
let patlen;
let nn;
let time=std.U;
let lang=std.U;
let city=std.U;


for(let property in options){
switch(property){

case'time':
time=options.time;
break;

case'lang':
lang=options.lang;
break;

case'city':
city=options.city;
break;

default:

std.argument_err("bad option: "+property);

}
}

if(time==std.U)
time=std.now;


time*=1000;


let dateobj=new Date(time);

if(city!=std.U){
adjust_to_city(dateobj,time,city);
}

pos=0;
patlen=format.length;
state=STATE_PLAIN;
token="";
result="";
for(pos=0;pos<patlen;pos++){

cc=format.charAt(pos);
switch(state){
case STATE_PLAIN:
if((cc==L_MARK)&&((pos==0)||(format.charAt(pos-1)!='\\'))){

result+=token;
token='[';
state=STATE_BRACE;
}else{

token+=cc;
}
break;

case STATE_BRACE:
if(cc==R_MARK){

token+=']';


switch(token){
case"[sun]":

token=weekday_to_short_str(dateobj.getDay());
break;

case"[sunday]":
token=weekday_to_long_str(dateobj.getDay());
break;

case"[jan]":
token=month_to_short_str(dateobj.getMonth());
break;

case"[january]":
token=month_to_long_str(dateobj.getMonth());
break;

case"[day]":

nn=dateobj.getDate();
if(nn>=1&&nn<=31)
token=to_str(nn);
else
token=std.ERR_STR;
break;

case"[day2]":

nn=dateobj.getDate();
if(nn>=1&&nn<=31)
token=to_str(nn,{min:2,zero_pad:std.Y});
else
token=std.ERR_STR;
break;

case"[hour]":

nn=dateobj.getHours();
if(nn>=0&&nn<=23)
token=to_str(nn,{min:2,zero_pad:std.Y});
else
token=std.ERR_STR;
break;

case"[hour12]":

nn=dateobj.getHours();
if(nn>=0&&nn<=11)

token=to_str(nn,{min:2,zero_pad:std.Y});
else if(nn>=12&&nn<=23)
token=to_str(nn-12,{min:2,zero_pad:std.Y});
else
token=std.ERR_STR;
break;

case"[julian]":

nn=std.day_of_year(dateobj);
if(nn>=1&&nn<=366)
token=to_str(nn);
else
token=std.ERR_STR;
break;

case"[month]":

nn=dateobj.getMonth()+1;
if(nn>=1&&nn<=12)
token=to_str(nn);
else
token=std.ERR_STR;
break;

case"[month2]":

nn=dateobj.getMonth()+1;
if(nn>=1&&nn<=12)
token=to_str(nn,{min:2,zero_pad:std.Y});
else
token=std.ERR_STR;
break;

case"[minute]":

nn=dateobj.getMinutes();
if(nn>=0&&nn<=59)
token=to_str(nn,{min:2,zero_pad:std.Y});
else
token=std.ERR_STR;
break;

case"[am]":

if(dateobj.getHours()<=11)
token=std.s(SS_DATE,"AM",lang);
else
token=std.s(SS_DATE,"PM",lang);
break;

case"[second]":

nn=dateobj.getSeconds();
if(nn>=0&&nn<=61)
token=to_str(nn,{min:2,zero_pad:std.Y});
else
token=std.ERR_STR;
break;

case"[msec]":

nn=dateobj.getMilliseconds();
if(nn>=0&&nn<=999)
token=to_str(nn,{min:3,zero_pad:std.Y});
else
token=std.ERR_STR;
break;

case"[week_sun]":

token=to_str(std.week_of_year_sunday(dateobj));
break;

case"[week_mon]":

token=to_str(std.day_of_week_monday(dateobj));
break;

case"[year]":

nn=dateobj.getFullYear();
if(nn>=0&&nn<=9999)
token=to_str(nn);
else
token=std.ERR_STR;
break;

case"[year2]":

nn=dateobj.fullYear;
if(nn>=0&&nn<=9999)
token=to_str(nn%100);
else
token=std.ERR_STR;
break;

case"[date]":

token=time_to_str("[jan] [day], [year]",options);
break;

case"[date_time]":

token=time_to_str("[jan] [day], [year] [hour12]:[minute] [am]",options);
break;

case"[iso_date]":

token=time_to_str("[year]-[month2]-[day2]",options);
break;

case"[iso_time]":

token=time_to_str("[hour]:[minute]:[second]",options);
break;

default:

if(std.CHECKS)
std.argument_err("### internal error, unknown conversion: "+token);
else
token=std.ERR_STR;
}
state=STATE_PLAIN;
result+=token;
token="";

}else{

token+=cc;
}
break;
}
}


result+=token;

return result;
}




export function parse_init(base){
gparse_ss=base;
gparse_pos=0;
parse_include_white=false;
gparse_errflag=false;
gparse_errmsg="";
}





export function parse_get(){
let result;

while(1){
if(gparse_pos<gparse_ss.length){
result=gparse_ss.charAt(gparse_pos);
gparse_pos+=1;


if((result>' ')||parse_include_white)
break;
}else{

result=PARSE_EOS;
break;
}

}

return result;
}





export function parse_unget(){
gparse_pos-=1;
}





export function parse_peek(){
let result;

while(1){
if(gparse_pos<gparse_ss.length){
result=gparse_ss.charAt(gparse_pos);


if(result>' ')

break;


gparse_pos+=1;

if(parse_include_white)
break;

}else{

result=PARSE_EOS;
break;
}

}

return result;
}





export function parse_err(msg){
gparse_errflag=true;
gparse_errmsg=conv("{str} at position {int}",msg,gparse_pos);
if(TRACE_JSON)
console.log("json error "+gparse_errmsg);
}





export function parse_match(targ){
let patlen=targ.length;


if(!parse_include_white){

while((gparse_pos<gparse_ss.length)&&(gparse_ss.charAt(gparse_pos)<=' '))
gparse_pos+=1;
}

if(gparse_ss.substr(gparse_pos,patlen)===targ){

gparse_pos+=patlen;
return true;
}else{

return false;
}
}





export function parse_hexdigit(){
let cc;

cc=parse_get();

if((cc>='0')&&(cc<='9')){

return cc.charCodeAt(0)-'0'.charCodeAt(0);

}else if((cc>='A')&&(cc<='F')){

return 10+cc.charCodeAt(0)-'A'.charCodeAt(0);

}else if((cc>='a')&&(cc<='f')){

return 10+cc.charCodeAt(0)-'a'.charCodeAt(0);

}else{

parse_err("Bad hex digit");
return 0;
}
}





export function parse_expect(targ){
if(parse_match(targ)){

return true;
}


parse_err(conv("Expected '{str}' but got '{str}'",targ,parse_peek()));
return false;
}





function json_hex4(){
let cc;
let val=0;
let digit;
let i;

for(i=0;i<4;i++){
digit=parse_hexdigit();
if(gparse_errflag)
break;
val=(val*16)+digit;
}
return to_char(val);
}





function json_escape(){
let cc;


cc=parse_get();
if(cc==='"'){
return'"';
}else if(cc==='\\'){
return'\\';
}else if(cc==='/'){
return'/';
}else if(cc==='b'){
return'\u0008';
}else if(cc==='f'){
return'\u000c';
}else if(cc==='n'){
return'\n';
}else if(cc==='r'){
return'\r';
}else if(cc==='t'){
return'\t';
}else if(cc==='u'){
return json_hex4();
}else{
parse_err("unexpected character after backslash");
return' ';
}
}






function p_json_string(){
let result="";
let cc;


parse_include_white=true;

while(1){
cc=parse_get();

if(cc==='"'){

break;
}

if(cc===PARSE_EOS){

parse_err("String not terminated, unbalanced double quotes");
break;
}

if(cc<' '){

parse_err("Control characters not allowed inside a JSON string");
break;
}

if(cc==='\\'){

cc=json_escape();
if(gparse_errflag)
break;
}


result+=cc;
}

parse_include_white=false;
if(TRACE_JSON){
console.log("json string='"+result+"'");
}
return result;
}





function p_json_number(cc){
let result=std.ERR;
let startpos;
let ndig;

startpos=gparse_pos-1;
parse_include_white=true;


if(cc==='-'){
cc=parse_get();
}


if(cc==='0'){

cc=parse_get();
}else if((cc>='1')&&(cc<='9')){
while(1){
cc=parse_get();
if(!((cc>='0')&&(cc<='9'))){

break;
}
}
}else{

parse_err(conv("bad character '{str}' in number",cc));
parse_include_white=false;
return std.ERR;
}


if(cc==='.'){

ndig=0;
while(1){
cc=parse_get();
if(!((cc>='0')&&(cc<='9'))){

break;
}
ndig+=1;
}



}


if((cc==='e')||(cc==='E')){

if((cc==='+')||(cc==='-')){
cc=parse_get();
}


ndig=0;
while(1){
cc=parse_get();
if(!((cc>='0')&&(cc<='9'))){

break;
}
ndig+=1;
}

if(ndig===0){
parse_err("missing exponent after 'e' in number");
parse_include_white=false;
return std.ERR;
}
}


parse_unget();


result=Number(gparse_ss.substring(startpos,gparse_pos));
if(TRACE_JSON){
console.log("json substr="+gparse_ss.substring(startpos,gparse_pos)+", number="+String(result));
}

parse_include_white=false;
return result;
}




function key_to_index(key){
let ix;




if(key.charAt(0)==='^'){
ix=to_num(key.substr(1));
}else{
ix=to_num(key);
}

if(Number.isNaN(ix)){

ix=str_to_enum(key);
}

return ix;
}







function p_beads_node(dest){
let ix;
let keyss;
let cc;
let val;
let val_num;
let val_str;
let val_meas;
let dtype=0;
let eflags=0;



function do_emit(){
let destx;
let leaf;

if(dtype!==0){
if(TRACE_JSON)
console.log(conv("storing value of dtype={} at path={path}",dtype,dest));
switch(dtype){
case std.TYPE_NUM:
std.setv(0,0,dest,val_num);
break;
case std.TYPE_STR:
std.setv(0,0,dest,val_str);
break;
case std.TYPE_MEAS:
std.setv(0,0,dest,val_meas);
break;
case std.TYPE_FUNC:
break;
case std.TYPE_IMAGE:
break;
default:
std.internal_err("not yet imp");
}


if(eflags!==0){

destx=std.path_to_pathx(dest);

leaf=destx.lev[destx.lastx].node;
leaf.eflags|=eflags;
}


dtype=0;
}else{
if(TRACE_JSON)
console.log(conv("no value to store at path={path}",dest));

}
}



if(TRACE_JSON)
console.log(conv("p_beads_node, gparse_pos={int}",gparse_pos));

while(!gparse_errflag){

if(parse_match(PARSE_EOS)){

parse_err("Unbalanced braces, missing right braces(or too many left braces)");
return;
}


if(parse_match('}')){

do_emit();
break;
}


if(parse_match(',')){
continue;
}


if(!parse_expect('"'))
break;


keyss=p_json_string();
if(gparse_errflag)
break;

if(!parse_expect(':'))
break;



switch(keyss){
case"e":


cc=parse_get();
val=p_json_number(cc);
if(gparse_errflag)
break;

switch(val){
case 1:
val_num=std.ERR;
break;
case 2:
val_num=std.INFINITY;
break;
case 3:
val_num=std.NEG_INFINITY;
break;



default:

parse_err("bad e: value");
return;
}
dtype=std.TYPE_NUM;
break;

case"n":

cc=parse_get();
val_num=p_json_number(cc);
dtype=std.TYPE_NUM;
break;

case"s":

if(!parse_expect('"')){
break;
}
val_str=p_json_string();
dtype=std.TYPE_STR;
break;

case"c":

do_emit();
if(!parse_expect('{')){
return;
}
p_beads_termlist(dest);
break;

case"g":

eflags=val>>>0;
break;

case"m":


var temp=val.split("~");
val_meas=std.meas(val_num,Number(temp[0]),Number(temp[1]));
dtype=std.TYPE_MEAS;
break;

case"i":

dtype=std.TYPE_IMAGE;
std.internal_err("not yet");
break;

case"f":

dtype=std.TYPE_FUNC;
std.internal_err("not yet");
break;

case"p":

dtype=std.TYPE_PATH;
std.internal_err("not yet");
break;

default:

parse_err(conv("Unexpected field {str}",keyss));
break;
}

}

return;
}






function p_beads_termlist(dest){
let term;
let cc;
let val_str;
let val_num;
let keyss;
let keyx;

while(1){
if(TRACE_JSON)
console.log(conv("top of beads termlist, pos={int}, ss={str}",gparse_pos,gparse_ss.substr(0,100)));


if(parse_match(PARSE_EOS)){

parse_err("Unbalanced braces, missing right braces(or too many left braces)");
break;
}


if(parse_match('}')){

break;
}


if(parse_match(',')){
continue;
}

if(!parse_expect('"'))
break;


keyss=p_json_string();
if(gparse_errflag)
break;

if(!parse_expect(':'))
break;


keyx=key_to_index(keyss);
let deeper=std.addr_append(dest,keyx);


if(!parse_expect('{'))
break;


p_beads_node(deeper);
if(gparse_errflag)
break;

}
}







function p_json_termlist(dest){
let term;
let cc;
let val_str;
let val_num;
let keyss;
let keyx;

while(1){
if(TRACE_JSON)
console.log(conv("top of json termlist, pos={int}, ss={str}",gparse_pos,gparse_ss.substr(0,100)));


if(parse_match(PARSE_EOS)){

parse_err("Unbalanced braces, missing right braces(or too many left braces)");
break;
}


if(parse_match('}')){

break;
}


if(parse_match(',')){
continue;
}

if(!parse_expect('"'))
break;


keyss=p_json_string();
if(gparse_errflag)
break;

if(!parse_expect(':'))
break;


keyx=key_to_index(keyss);
let deeper=std.addr_append(dest,keyx);



cc=parse_get();

if(cc=='"'){

val_str=p_json_string();
if(gparse_errflag)
break;
std.setv(0,0,deeper,val_str);

}else if(cc=='{'){


p_json_termlist(deeper);

}else if(cc==='['){

std.internal_err("array not yet imp");

}else{

val_num=p_json_number(cc);
if(gparse_errflag)
break;
std.setv(0,0,deeper,val_num);
}

}
}








export function json_to_tree(json,destpath){
let label="";
let is_global;

let version;
let cc;


parse_init(json);


if(parse_match(BEADS_JSON_MARKER)){

cc=parse_get();
version=p_json_number(cc);


if(version===1){

p_beads_termlist(destpath);

}else{

parse_err(conv("Version error, we don't know how to convert Beads style JSON of version {int}",version));
}

}else if(parse_match('{')){

p_json_termlist(destpath);

}else if(parse_match(PARSE_EOS)){

if(TRACE_JSON){
console.log("ignoring empty JSON decode string");
}

}else{

parse_err("JSON must start with '{'");
}

if(TRACE_JSON){
if(gparse_errflag){
console.log("JSON decode error="+gparse_errmsg);
}else{
console.log("JSON decode okay");
}
}

}








export function tree_to_json(base,options=null){
let ss="";
let sub;
let nodeval;
let base_node;
let curpath;

let nkind;
let val;
let limit=std.INFINITY;
let count;
let ix;
let firstnode;





function do_node(mynode,depth){
let i;

let elem;
let meas;
let first;





function emit_comma(){
if(first){
first=false;
}else{
ss+=',';
}
}





function emit_numval(val){

if(val===std.U){


}else if(Number.isNaN(val)){
emit_comma();
ss+='"e":1';
}else if(val===std.INFINITY){
emit_comma();
ss+='"e":2';
}else if(val===std.NEG_INFINITY){
emit_comma();
ss+='"e":3';

}else{

emit_comma();
ss+='"n":'+String(val);
}

}



firstnode=(depth!==0);




for(elem of mynode.children){


if(firstnode)
firstnode=false;
else
ss+=',';

if((count%8)===7)
ss+='\n';

count+=1;
if(count>=limit)

break;





ss+='"^'+String(elem.sub)+'":{';
first=true;





if((elem.eflags&std.EF_DIRTY_OR_DERIVED)!==0){
ss+='g:'+String(elem.eflags);
first=false;
}


if((elem.eflags&std.EF_VAL_IS_NUM)!==0){

emit_numval(elem.val);

}else if((elem.eflags&std.EF_VAL_IS_STR)!==0){

emit_comma();
ss+='"s":'+escape_to_json(elem.val);

}else if((elem.eflags&std.EF_VAL_IS_MEAS)!==0){

meas=elem.val;

emit_numval(meas.mag);
ss+=',"m":"'+String(meas.unit)+'~'+String(meas.family)+'~'+meas.unitss+'"';

}else if((elem.eflags&std.EF_VAL_IS_IMAGE)!==0){

emit_comma();
ss+='"i":0';

}else if((elem.eflags&std.EF_VAL_IS_FUNC)!==0){

emit_comma();
ss+='"f":0';

}else if((elem.eflags&std.EF_VAL_IS_PATH)!==0){

emit_comma();
ss+='"p":0';

}else{

std.internal_err("bad element kind");
}


if(elem.markf!==null){

emit_comma();
ss+='"m":ZZZ';
}


if(elem.children!==null){
emit_comma();
ss+='"c":{';
do_node(elem,depth+1);
ss+='}';
}

ss+='}';

}


}



if(base instanceof std.a_tree){

base_node=base;
}else if(base instanceof std.a_path){
if(base===null)
return null;
base_node=std.path_to_node(base);
}else{

std.argument_err("expected path or tree");
}


for(let property in options){
switch(property){

case'limit':
limit=options.limit;
break;

default:

std.argument_err("bad option: "+property);

}
}


count=0;

ss=BEADS_JSON_MARKER+'1';
do_node(base_node,0);
ss+='}';

return ss;
}






export function str_to_enum(ident){




return str_hash_fnv(ident)+std.FIRST_ENUM;
}






export function enum_to_str(val,use_stringtable=false){
let ss;

if(std.CHECKS&&!is_enumb(val))
std.halt();







if(std.g_enum_ss[val]===undefined){


val=val-std.FIRST_ENUM;

ss="ENUM:"+to_str(val,{min:10,zero_pad:std.Y});
}else{

ss=std.g_enum_ss[val];


if(ss.substr(0,5)==="$MOD_")
ss=ss.substr(5);
}

return ss;
}




export function from_char(char){
if((char===null)||(char===""))
return std.ERR;

return char.charCodeAt(0);
}




export function to_char(n){
if(Number.isNaN(n)||(n===std.U)||(n<=0))
return"";

return String.fromCharCode(n);
}






export function real64_to_str(val,
precision=std.U,
minwidth=1,
decimal_cc='.',
thou_cc=',',
negparen=false,
posplus=false)
{
const IN_FRACTION=1;
const IN_WHOLE=2;

let ss;
let cc;
let pattern;
let pos;
let state;
let nd;


if(precision===std.U){

ss=val.toString();
if(ss.indexOf('.')<0)

precision=0;
}else

ss=val.toFixed(precision);


if(decimal_cc!=="."){
pattern=/\./;
ss=ss.replace(pattern,decimal_cc);
}




if(thou_cc!==""){
if(TRACE_CONV)console.log("real64, before comma insertion, ss="+ss);
pos=ss.length-1;
if(precision===0)
state=IN_WHOLE;
else
state=IN_FRACTION;
nd=0;
while(1){
if(pos<0)
break;
cc=ss.charAt(pos);
if(TRACE_CONV)console.log("at top of loop, nd="+nd+", state="+String(state)+", pos="+String(pos)+", cc="+cc);
switch(state){
case IN_FRACTION:
if(cc==="."){
state=IN_WHOLE;
nd=0;
}
break;

case IN_WHOLE:
if(cc>='0'&&cc<='9'){
nd+=1;
if(nd===4){

ss=ss.substr(0,pos+1)+thou_cc+ss.substr(pos+1);
nd=1;
}
}
break;

}
pos-=1;
}
}


if((val>0)&&posplus){
ss='+'+ss;
}


if(negparen&&(val<0)){
ss='('+ss.substr(1)+')';
}


while(ss.length<minwidth){
ss=' '+ss;
}

return ss;
}




function strip_trailing_zeros(ss,decimal_cc){
let dpos;
let pos;
let ndrop;
let allzeros;
let lastchar=ss.length-1;


ndrop=0;
dpos=ss.indexOf(decimal_cc);
if(dpos>=0){


pos=lastchar;
while(1){
if(ss.charAt(pos)!=='0'){

if(ss.charAt(pos)===decimal_cc)
ndrop+=1;
break;
}


ndrop+=1;
pos-=1;
}


}


if(ndrop===0)
return ss;
else
return ss.slice(0,-ndrop);
}






export function to_num(ss){
let result;


if(ss===std.U_STR)
return std.U;
else if(ss===std.ERR_STR)
return std.ERR;


result=Number(ss);
if(Number.isNaN(result))
return std.ERR;
else
return result;
}








export function is_enumb(n){
return((n>=std.FIRST_ENUM)&&(n<=std.LAST_ENUM));
}





























export function to_str(val,options=null){
let len;
let ss;
let nshort;
let old_digits;

let autoincrease=std.U;
let autodecrease=std.U;
let base=10;
let currency=std.U;
let currency_cc="$ ";
let decimal_cc=".";
let human=std.U;
let kflag=std.U;
let language="ENG";
let maxlen=999;
let minlen=1;
let negparen=std.U;
let posplus=std.U;
let percent=std.U;
let digits=std.U;
let showu=std.U;
let suffix=null;
let thou=std.U;
let thou_cc=',';
let units=std.U;
let zeropad=std.U;

if(std.CHECKS&&(options!==null)&&(!(options instanceof Object)))
std.argument_err("bad syntax, 2nd parm must be object");


for(let property in options){
switch(property){

case'increase':

autoincrease=options.increase;
break;

case'decrease':

autodecrease=options.decrease;
break;

case'base':
base=options.base;
if((base!==2)&&(base!==8)&&(base!==10)&&(base!==16))
std.argument_err("internal error, base option not yet implemented");
break;

case'currency':

currency=options.currency;
break;

case'currency_cc':
currency_cc=options.currency_cc;
break;

case'decimal_cc':
decimal_cc=options.decimal_cc;
break;

case'human':

human=options.human;
break;

case'k':

kflag=options.k;
break;

case'lang':
language=options.lang;
break;

case'max':
maxlen=options.max;
break;

case'min':
minlen=options.min;
break;

case'neg_paren':

negparen=options.neg_paren;
break;

case'pos_plus':

posplus=options.pos_plus;
break;

case'percent':

percent=options.percent;
break;

case'digits':
digits=options.digits;
break;

case'show_u':

showu=options.show_u;
break;

case'thou':
thou=options.thou;
break;

case'thou_cc':
thou_cc=options.thou_cc;
break;

case'units':
units=options.units;
break;

case'zero_pad':

zeropad=options.zero_pad;
break;

default:

std.argument_err("bad option: "+property);

}
}


if(std.CHECKS&&(autoincrease===std.Y||autoincrease===std.Y)&&(digits===std.U))
std.argument_err("conflicting parms, increase/decrease must have digits specified");


if(currency===std.Y)
minlen-=currency_cc.length;

if(val===std.U){



if(showu)
ss="U";
else
ss="";
zeropad=std.N;

}else if(typeof val==='string'){



ss='"'+val+'"';

}else if(val instanceof std.a_meas){



let mymeas=val;
let usuffix;


if(units===std.U){



if(mymeas.family===std.U){

usuffix=" "+mymeas.unitss.split(",").join("\u22c5");
}else{

units=std.getn(std.families,mymeas.family,std.F_fam_base);
usuffix=" "+enum_to_str(units);
}

ss=to_str(mymeas.mag,options)+usuffix;
}else{

ss=to_str(std.to_unit(mymeas,units),options)+" "+enum_to_str(units);
}

}else if(val instanceof std.a_path){



ss=path_to_str(val);

}else if(val instanceof std.a_image){




let myimage=val;
ss=myimage.url+" "+String(myimage.bits.width)+" x "+String(myimage.bits.height);

}else if(val instanceof std.a_function){



let myfunc=val;
ss=myfunc.modname+"."+myfunc.name;

}else if(val instanceof std.a_sound){



let mysound=val;
ss=to_str(mysound.id,options);

}else if(val instanceof std.a_sys_gradient){



let mygrad=val;
ss="gradient:"+mygrad.grad_kind;








}else if(val===std.INFINITY){



ss="INFINITY";
zeropad=std.N;

}else if(val===std.NEG_INFINITY){



ss="-INFINITY";
zeropad=std.N;

}else if(val===std.Y){



ss="Y";
zeropad=std.N;

}else if(val===std.N){



ss="N";
zeropad=std.N;

}else if(is_enumb(val)){



ss=enum_to_str(val);
zeropad=std.N;



}else if(Number.isNaN(val)){



ss="ERR";
zeropad=std.N;

}else{



if(kflag===std.Y){
if(Math.abs(val)>=1000000000){

if(Math.abs(val)>=10000000000)

digits=0;
else

digits=1;
val=std.round(val/1000000000,-1);
suffix='B';
}else if(Math.abs(val)>=1000000){

if(Math.abs(val)>=10000000)

digits=0;
else

digits=1;
val=std.round(val/1000000,-1);
suffix='M';
}else if(Math.abs(val)>=1000){
val=std.round(val/1000);
suffix='K';
}
}


if(autodecrease===std.Y&&(Math.abs(val)>=1000))
digits=0;

if(thou!==std.Y)

thou_cc="";


if(base===10){

if(percent===std.Y){
val*=100;
suffix='%';
}
ss=real64_to_str(val,digits,1,decimal_cc,thou_cc,negparen==std.Y);
}else if(base===16){

ss=val.toString(16).toUpperCase();
while(ss.length<minlen-2){
if(zeropad)
ss='0'+ss;
else
ss=' '+ss;
}
}else if(base===8){

ss=(val>>>0).toString(8);

}else{

ss=(val>>>0).toString(2);

}



const pattern=/^0\.0+$/;


if(autoincrease===std.Y&&pattern.test(ss)&&(digits<4)){


old_digits=digits;
options.digits=digits+1;
ss=to_str(val,options);
options.digits=old_digits;
return ss;

}else{


if(ss.charAt(0)==='.')
ss='0'+ss;


if(autodecrease===std.Y){
ss=strip_trailing_zeros(ss,decimal_cc);
}
}

if(suffix!==null)
ss+=suffix;

}


nshort=minlen-ss.length;
if(nshort>0){
if(zeropad===std.Y)
ss=str_repeat('0',nshort)+ss;
else
ss=str_repeat(' ',nshort)+ss;
}


if(currency===std.Y)
ss=currency_cc+ss;


if(ss.length>maxlen){
ss=str_repeat('#',maxlen);
}

return ss;

}








export function path_to_str(path){
let i;
let subscript;
let nsubscript=0;
let ss=path.base.val;

for(i=0;i<path.key.length;i++){

subscript=path.key[i];
if(std.is_field_b(subscript)){

if(nsubscript>0)

ss+="\u2006]";
nsubscript=0;
ss+='\u2006.\u2006';
}else{

nsubscript+=1;
if(nsubscript>1)
ss+=', ';
else
ss+='\u2006[\u2006';
}

ss+=to_str(subscript);
}


if(nsubscript>0)
ss+="\u2006]";

return ss;
}






export function pathx_to_str(pathx){
let i;
let subscript;
let nsubscript=0;
let ss=pathx.lev[0].node.val;

for(i=1;i<=pathx.lastx;i++){

subscript=pathx.lev[i].sub;
if(std.is_field_b(subscript)){

if(nsubscript>0)

ss+="\u2006]";
nsubscript=0;
ss+='\u2006.\u2006';
}else{

nsubscript+=1;
if(nsubscript>1)
ss+=', ';
else
ss+='\u2006[\u2006';
}

ss+=to_str(subscript);
}


if(nsubscript>0)
ss+="\u2006]";

return ss;
}





export function color_to_rgb_str(color){
if(color===std.U_COLOR)
return"rgb(U)";

return"rgb("+String(std.color_r(color))+","+String(std.color_g(color))+","+String(std.color_b(color))+")";
}





export function node_to_str(elem,show_u){
let elem_ss;
let nodetype;
let nodeval;


















if(elem!==null){
if(elem.eflags&std.EF_VAL_IS_U){
if(show_u){
nodetype=":U";
nodeval="";
}else
return"";

}else if(elem.eflags&std.EF_VAL_IS_ERR){
nodetype=":ERR";
nodeval="";

}else if(elem.eflags&std.EF_VAL_IS_NUM){
nodetype=":num";
nodeval=to_str(elem.val);

}else if(elem.eflags&std.EF_VAL_IS_STR){
nodetype=":str";
nodeval='"'+elem.val+'"';

}else if(elem.eflags&std.EF_VAL_IS_IMAGE){
nodetype=":image";
nodeval='IMAGE';

}else if(elem.eflags&std.EF_VAL_IS_FUNC){
nodetype=":func";
let f=elem.val;
nodeval=f.name;

}else if(elem.eflags&std.EF_VAL_IS_PATH){
nodetype=":path";
nodeval=path_to_str(elem.val);

}else if(elem.eflags&std.EF_VAL_IS_MEAS){
nodetype=":meas";
nodeval='MEAS';

}else if(elem.eflags&std.EF_VAL_IS_SOUND){
nodetype=":sound";
nodeval='SOUND';

}else if(elem.eflags&std.EF_VAL_IS_GRAD){
nodetype=":grad";
nodeval='GRAD';

}else if(elem.eflags&std.EF_VAL_IS_BYTES){
nodetype=":bytes";
nodeval='BYTES';

}else if(elem.eflags&std.EF_VAL_IS_COLOR){
nodetype=":color";
let color=elem.val;
nodeval=color_to_rgb_str(color);

}else if(elem.eflags&std.EF_VAL_IS_DATE){
nodetype=":date";
let daten=elem.val;
nodeval='DATE';

}else if(elem.eflags&std.EF_VAL_IS_VIDEO){
nodetype=":video";
nodeval='VIDEO';

}else if(elem.eflags&std.EF_VAL_IS_OBJECT){
nodetype=":object";
nodeval='OBJECT';

}else{
std.argument_err("bad node");
}
}else{

nodetype="<NULL>";
nodeval="";
}


elem_ss="";
if(nodeval!=='')
elem_ss+='='+nodeval;
return elem_ss;
}








export function tree_to_str(base,options=null){
let ss="";
let base_path;
let nkind;
let showu=true;
let first=true;
let limit=std.INFINITY;
let count;
let curpath;
let base_node;


function walk_nodes(node,prev_subscript){
let son_ss;
let son;
let curr_subscript;

if(node===null)
return;



for(son of node.children){
son_ss=node_to_str(son,showu);


curr_subscript=prev_subscript;
if(curr_subscript!=="")
curr_subscript+=",";
curr_subscript+=to_str(son.sub);

if(son_ss!==""){
if(first)
first=false;
else
ss+=', ';


ss+='['+curr_subscript+']';
ss+=son_ss;
}


count+=1;
if(count>=limit){
ss+="...";
break;
}


if(son.children!==null){
walk_nodes(son,curr_subscript);
}
}
}




if(base instanceof std.a_tree){

base_path=std.addr(base);
}else if(base instanceof std.a_path){
if(base===null)
return null;
base_path=base;
}else{

std.argument_err("expected path or tree");
}


for(let property in options){
switch(property){

case'prompt':
ss=options.prompt;
break;

case'showu':
if(options.showu===std.Y)
showu=true;
break;

case'limit':
limit=options.limit;
break;

default:

std.argument_err("bad option: "+property);

}
}


ss+='{';

if(base instanceof std.a_tree)
base_node=base;
else if(base instanceof std.a_path)
base_node=std.path_to_node(base);
else
std.argument_err("bad input type, must be tree or path");

walk_nodes(base_node,"");

ss+='}';
return ss;
}










export function str_len(ss){
if(ss===std.U_STR)
return std.U;
else if(ss===std.ERR_STR)
return std.ERR;
else
return ss.length;
}




export function str_upper(ss){
if((ss===std.U_STR)||(ss===std.ERR_STR))
return ss;
else
return ss.toUpperCase();
}




export function str_lower(ss){
if((ss===std.U_STR)||(ss===std.ERR_STR))
return ss;
else
return ss.toLowerCase();
}




export function str_repeat(ss,n){
let result;
let nn;
let i;

if((ss===std.U_STR)||(ss===std.ERR_STR))
return ss;

if(std.is_numeric(n)!==std.Y)

return std.ERR_STR;

nn=Math.round(n);

if(nn<=0)
return"";

if(nn===1)
return ss;





return ss.repeat(nn);

}





export function str_reverse(ss){


if((ss===std.U_STR)||(ss===std.ERR_STR))
return ss;

if(ss==="")
return"";


let list=ss.split("");
list.reverse();

return list.join("");
}






export function str_begins(ss,pattern){
if((ss===null)||(pattern===null))
return std.U;

let str_len=ss.length;
let pat_len=pattern.length;

if(pat_len>str_len)
return std.N;

if(ss.substr(0,pat_len)===pattern)
return std.Y;
else
return std.N;

}





export function str_ends(ss,pattern){
if((ss===null)||(pattern===null))
return std.U;

let str_len=ss.length;
let pat_len=pattern.length;

if(pat_len>str_len)
return std.N;

if(ss.substr(str_len-pat_len,pat_len)===pattern)
return std.Y;
else
return std.N;
}





export function str_strip_quotes(ss){
let startpos;
let netlen;
let some;
let code;

if((ss===std.U_STR)||(ss===std.ERR_STR))
return ss;

some=false;

netlen=ss.length;


code=ss.charCodeAt(netlen-1);
if((code===CODE_SQUOTE)||(code===CODE_DQUOTE)){
netlen-=1;
some=true;
}

startpos=0;
code=ss.charCodeAt(0);
if((code===CODE_SQUOTE)||(code===CODE_DQUOTE)){
startpos=1;
netlen-=1;
some=true;
}

if(some)
return ss.substr(startpos,netlen);
else
return ss;
}










export function str_pad(ss,targ_len,options){
if((ss===std.U_STR)||(ss===std.ERR_STR))
return ss;

let pad_cc=' ';
let rev_flag=false;


for(let property in options){
switch(property){
case'rev':
rev_flag=options.rev===std.Y;
break;

case'pad':
pad_cc=options.pad.charAt(0);
break;

default:

std.argument_err("bad option: "+property);

}
}


let nchars=targ_len-ss.length;
if(nchars>=0){

let pad_ss=str_repeat(pad_cc,nchars);

if(rev_flag){
return ss+pad_ss;
}else{
return pad_ss+ss;
}
}else{

return ss;
}
}










export function str_subset(ss,options){
let rev_flag;
let start=1;
let len=std.U;
let end=std.U;
let ss_len;
let net_start;
let net_end;

if((ss===std.U_STR)||(ss===std.ERR_STR))
return ss;


for(let property in options){
switch(property){
case'rev':
rev_flag=options.rev===std.Y;
break;

case'from':
start=options.from;
break;

case'to_':
end=options.to_;
break;

case'len':
len=options.len;
break;

default:

std.argument_err("bad option: "+property);

}
}


if((std.is_err_enum(start)===std.Y)||(std.is_err(len)===std.Y)||(std.is_err(end)===std.Y))

return ERROR_STRING;


if((len===std.U)&&(end===std.U))
len=999999999;

if(len<=0)
return"";


if(start<std.FIRST){
if(std.CHECKS)
std.argument_err("strings start at 1");
start=std.FIRST;
}

ss_len=ss.length;
if(start>ss_len)
return"";

if(rev_flag){

if(len!==std.U){

net_start=ss_len-start-(len-1);
return ss.substr(net_start,len);
}else{

net_start=ss_len-end;
net_end=ss_len-start+1;

return ss.substring(net_start,net_end);
}
}else{

net_start=start-1;
if(len!==std.U){

return ss.substr(net_start,len);
}else{


return ss.substring(net_start,end);
}
}

return null;
}






export function str_digit(ss,from,options){
let rev_flag=std.N;
let cc;
let digit;

if(ss===std.U_STR)
return std.U;

if(ss===std.ERR_STR)
return std.ERR;


for(let property in options){
switch(property){
case'rev':
rev_flag=options.rev;
break;

default:

std.argument_err("bad option: "+property);

}
}


cc=str_subset(ss,{start:from,rev:rev_flag,len:1});
digit=from_char(cc);
if((digit>=CODE_0)&&(digit<=CODE_9))
return digit-CODE_0;
else
return std.ERR;
}













export function str_ins(ss,ins,_options){
std.halt();
return null;
}











export function str_del(ss,_options){
std.halt();
return null;
}





export function str_to_regexp(input,ignore_case){

var net=input.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');

if(ignore_case)
return new RegExp(net,"gi");
else
return new RegExp(net,"g")
}













export function str_find(
module,loc,
haystack,
needle,
list,
options){
let wrap=false;
let start=0;
let reps=1;
let ignore_case=false;
let pos;
let stop_pos;
let find_pos;
let nfound=0;
let did_wrap;
let subset;
let found;
let result;
let m_start;
let m_end;
let m_len;
let pattern;


std.trunc_tree(module,loc,list);

if((haystack===null)||(haystack==="")||(haystack===std.ERR_STR)||
(needle===null)||(needle==="")||(needle===std.ERR_STR)){
return;
}

for(let property in options){
switch(property){
case'start':
start=options.start-1;
break;

case'reps':

reps=options.reps;
break;

case'wrap':
if(options.wrap===std.Y)
wrap=true;
break;

case'ignore_case':

ignore_case=options.ignore_case=="Y";
break;

default:

std.argument_err("bad option: "+property);

}
}

if(typeof needle==='string'){

pattern=str_to_regexp(needle,ignore_case);
}else if(needle instanceof RegExp){
pattern=needle;
}else{

if(std.CHECKS)std.argument_err("bad pattern");
return;
}

did_wrap=!wrap;
stop_pos=haystack.length;




pattern.lastIndex=start;


while(nfound<reps){





result=pattern.exec(haystack);


if(result!==null){
m_start=result.index;
m_end=pattern.lastIndex;
if(TRACE_FIND)console.log(conv("  MATCH, m_start={}, m_end={}",m_start,m_end));

nfound+=1;


std.setv(module,loc,list,nfound,F_find_start,m_start);
m_len=m_end-m_start;
std.setv(module,loc,list,nfound,F_find_len,m_len);



if(nfound>=reps)
break;

}else{
if(TRACE_FIND)console.log("--not found");

pattern.lastIndex=stop_pos;
}


if(pattern.lastIndex>=stop_pos){
if(!did_wrap){

if(TRACE_FIND)console.log(" doing wrap, starting at top");
did_wrap=true;
pattern.lastIndex=0;
stop_pos=start;
}else{

break;
}
}
}
}









export function str_replace(
haystack,
needle,
replace){

return haystack.replace(needle,replace);
}









export function str_changelist(
haystack,
changes,
options){

let flags;
let find;
let repl;
let ix;
let npatterns;
let patx;
let curr_patt;
let curr_repl;
let buf=haystack;
let result;
let replacement;
let m_start;
let m_end;
let traceflag=false;
let ndone=0;

if((haystack===null)||(haystack===""))
return haystack;

for(let property in options){
switch(property){
case'trace':
if(options.trace===std.Y)
traceflag=true;
break;

default:

std.argument_err("bad option: "+property);

}
}


flags=changes.flags;
traceflag=traceflag||((flags&SUBOP_REG_LOG)!==0);
find=changes.find;
repl=changes.repl;
npatterns=find.length;



for(patx=0;patx<npatterns;patx++){

curr_patt=find[patx];
curr_repl=repl[patx];
curr_patt.lastIndex=0;
while(1){

result=curr_patt.exec(buf);
if(result===null)

break;

m_start=result.index;
m_end=curr_patt.lastIndex;




replacement=calc_replacement(curr_repl,result);


if(traceflag){
ndone+=1;
log_context(String(patx+1),buf,m_start,m_end,replacement);
}


buf=buf.substring(0,m_start)+replacement+buf.substring(m_end);



curr_patt.lastIndex+=replacement.length-(m_end-m_start);

}
}

if(traceflag)
console.log("--- did "+String(ndone)+" replacements");


return buf;
}





function calc_replacement(
target,
groups)
{
let result="";
let element;
let groupx;

for(element of target){
if(typeof element==='string'){
result+=element;
}else if(typeof element==='number'){
groupx=element;
if((groupx>=0)&&(groupx<groups.length))
result+=groups[groupx];

}else
std.argument_err("bad target");
}

return result;
}





function log_context(
patname,
buf,
m_start,
m_end,
replacement
){

const NBEFORE=17;
const NAFTER=40;
let prefix;
let suffix;
let pos;
let buflen=buf.length;
let nprefix;
let nsuffix;
let cc;

pos=m_start;
nprefix=0;
prefix="\u300A";
while(1){
pos-=1;
if(pos<0)
break;

cc=buf.charAt(pos);
if((cc==='\n')||(cc==='\r')){
prefix='\u00ac'+prefix;
break;
}

cc=net_log_cc(cc);


prefix=cc+prefix;
nprefix+=1;
if(nprefix>NBEFORE){
prefix="..."+prefix;
break;
}
}

pos=m_end;
suffix="\u300B";
nsuffix=0;
while(1){
if(pos>=buflen)
break;
cc=buf.charAt(pos);
if((cc==='\n')||(cc==='\r')){
suffix+="\u00ac";
break;
}

cc=net_log_cc(cc);


suffix+=cc;
nsuffix+=1;
if(nsuffix>NAFTER){
suffix+="...";
break;
}
pos+=1;
}


console.log("\npattern "+patname+", start="+String(m_start));
console.log("   "+prefix+net_log_ss(buf.substring(m_start,m_end))+suffix);
console.log("   "+prefix+net_log_ss(replacement)+suffix);
}





function net_log_ss(ss){
let net="";
let i;
let n=ss.length;
for(i=0;i<n;i++){
net+=net_log_cc(ss.charAt(i));
}
return net;
}





function net_log_cc(cc){
if(cc==='\t')
return'\u25b2';

if((cc==='\n')||(cc==='\r'))
return"\u00ac";

if(cc<' ')
return'\u272a';

return cc;
}









export function split_words(
module,
loc,
buf,
dest,
delimiter)
{
let startpos;
let len;
let wordx;
let i;
let code;
let wordd=delimiter.charCodeAt(0);






function emit_fragment(spos,epos){
let fragment;


wordx+=1;
if(epos>spos){

fragment=buf.substring(spos,epos);
}else{

fragment="";
}

if(TRACE_SPLIT)console.log(conv(" splitting word[{int}], ss={str}",wordx,fragment));
std.setv(module,loc,dest,wordx,fragment);
}


std.trunc_tree(module,loc,dest);

len=buf.length;

if(len===0)
return;

wordx=0;
i=0;
startpos=0;

while(1){
if(i>=len){

if(i>startpos)
emit_fragment(startpos,i);
break;
}

code=buf.charCodeAt(i);
i+=1;


if(code===wordd){
emit_fragment(startpos,i-1);
startpos=i;
}

}
}







export function split_lines(
module,loc,
buf,
dest)
{
let startpos;
let len;
let linex;
let i;
let code;






function emit_fragment(spos,epos){
let fragment;


linex+=1;
if(epos>spos){

fragment=buf.substring(spos,epos);
}else{

fragment="";
}

if(TRACE_SPLIT)console.log(conv(" adding line {int} with ss={str}",linex,fragment));
std.setv(module,loc,dest,linex,fragment);
}



std.trunc_tree(module,loc,dest);


len=buf.length;

if(len===0)
return;

linex=0;
i=0;


code=buf.charCodeAt(0);
if((code===BOM_UTF16_LE)||(code===BOM_UTF16_BE))
i+=1;


startpos=i;

while(1){
if(i>=len){

if(i>startpos)
emit_fragment(startpos,i);
break;
}

code=buf.charCodeAt(i);
i+=1;

if(code===CODE_CR){
g_delimiter=DELIM_CR;
emit_fragment(startpos,i-1);
if((i<len)&&(buf.charCodeAt(i)===CODE_NL)){
i+=1;
g_delimiter=DELIM_CRLF;
}
startpos=i;
}else if(code===CODE_NL){
emit_fragment(startpos,i-1);
startpos=i;
g_delimiter=DELIM_LF;
}

}

}









export function split_lines_words(
module,
loc,
buf,
dest,
delimiter,
_options)
{
const STRIP_LEADING_SP=true;
const STRIP_TRAILING_SP=true;
const DQUOTE='"';

let token;
let cc;
let len;
let rowx;
let colx;
let pos;
let unicode;
let handle_quotes=true;
let fresh_word;
let inside_quotes;


function emit_token(){
if(token.length>0){



if(STRIP_TRAILING_SP){
let ntrailing=0;
let lastpos=token.length-1;
while((lastpos>=0)&&(token.charAt(lastpos)===' ')){
lastpos-=1;
ntrailing+=1;
}


if(ntrailing>0){
token=token.substring(0,lastpos+1);
}
}

if(TRACE_SPLIT)console.log(conv(" adding cell[{int},{int}] with ss=[{str}]",rowx,colx,token));
std.setv(module,loc,dest,rowx,colx,token);
}

token="";
fresh_word=true;
inside_quotes=false;
}



std.trunc_tree(module,loc,dest);


len=buf.length;


if(len===0)
return;


for(let property in _options){
switch(property){
case'quotes':
handle_quotes=_options.quotes===std.Y;
break;

default:

std.argument_err("bad option: "+property);

}
}

rowx=1;
colx=1;
pos=0;
inside_quotes=false;
fresh_word=true;
token="";


unicode=buf.charCodeAt(0);
if((unicode===BOM_UTF16_LE)||(unicode===BOM_UTF16_BE))
pos+=1;

while(1){
if(pos>=len){

emit_token();
break;
}

cc=buf.charAt(pos);
pos+=1;

if((cc===DQUOTE)&&handle_quotes){
if(fresh_word){

fresh_word=false;
inside_quotes=true;
continue;
}else if((pos<len)&&(buf.charAt(pos)===DQUOTE)){

token+=DQUOTE;
pos+=1;
continue;
}else{

inside_quotes=false;
continue;
}
}

if((cc===' ')&&(token.length===0)&&STRIP_LEADING_SP){

fresh_word=false;
continue;
}


if(inside_quotes){

if(cc===CR){
if((pos<len)&&(buf.charAt(pos)===LF))
pos+=1;
token+=LF;
fresh_word=false;
continue;
}

if(cc===LF){
token+=LF;
fresh_word=false;
continue;
}



}else{

if(cc===CR){
if((pos<len)&&(buf.charAt(pos)===LF))
pos+=1;
emit_token();
rowx+=1;
colx=1;
continue;
}

if(cc===LF){
emit_token();
rowx+=1;
colx=1;
continue;
}

if(cc===delimiter){

emit_token();
colx+=1;
continue;
}
}


token+=cc;
fresh_word=false;
}

}






export function escape_to_json(base)
{

let s="";

let ch;

let len=base.length;


for(let i=0;i<len;i++)
{

ch=base.charAt(i);
switch(ch)
{
case'"':
s+="\\\"";
break;





case'\\':
s+="\\\\";
break;

case'\b':
s+="\\b";
break;

case'\f':
s+="\\f";
break;

case'\n':
s+="\\n";
break;

case'\r':
s+="\\r";
break;

case'\t':
s+="\\t";
break;

default:


if(ch<' ')
{

let hexCode=ch.charCodeAt(0).toString(16);



let zeroPad=hexCode.length===2?"00":"000";


s+="\\u"+zeroPad+hexCode;
}
else
{


s+=ch;

}
}

}


return"\""+s+"\"";
}








export function str_range(base,start,stop=99999999999999){
if((base.length===0)||(std.is_numeric(start)!==std.Y)||(std.is_numeric(stop)!==std.Y))
return"";

if(start<0)
start=0;
if(stop>base.length)
stop=base.length;
return base.slice(start,stop);
}







export function rgb_str(pixel){
return'R:'+String(std.color_r(pixel))+' G:'+String(std.color_g(pixel))+' B:'+String(std.color_b(pixel));
}





export function rgb_hex_str(pixel){
return'0x'+to_str(pixel,{base:16,min:6,zero_pad:std.Y});
}





export function rgb_html_str(pixel){
return'#'+to_str(pixel,{base:16,min:6,zero_pad:std.Y});
}






export function conv(pat,...parms){
const STATE_PLAIN=0;
const STATE_BRACE=1;

let result;
let token;
let cc;
let pos;
let state;
let patlen;
let parmx;
let digits;


pos=0;
parmx=0;
patlen=pat.length;
state=STATE_PLAIN;
token="";
result="";

for(pos=0;pos<patlen;pos++){

cc=pat.charAt(pos);
switch(state){
case STATE_PLAIN:
if((cc==='{')&&((pos===0)||(pat.charAt(pos-1)!=='\\'))){

result+=token;
token=cc;
state=STATE_BRACE;
}else{

token+=cc;
}
break;

case STATE_BRACE:
if(cc==='}'){

token+='}';


switch(token){
case"{}":

if(parms[parmx]===null){
token="null";
}else if((typeof parms[parmx]==='number')||(typeof parms[parmx]==='number')){

token=to_str(parms[parmx],{digits:3,decrease:std.Y});
}else if(typeof parms[parmx]==='string'){
token=parms[parmx];
}else if(typeof parms[parmx]==='boolean'){
token=conv_bool(parms[parmx]);
}else if(parms[parmx]instanceof std.Rectangle){
token=conv_rect(parms[parmx]);
}else if(parms[parmx]instanceof std.a_tree){
let mytree=parms[parmx];
token=mytree.val;
}else if(parms[parmx]instanceof std.a_path){
token=conv_path(parms[parmx]);
}else if(parms[parmx]instanceof std.a_pathh){
token=conv_pathh(parms[parmx]);
}else if(parms[parmx]instanceof std.a_pathx){
token=conv_pathx(parms[parmx]);
}else if(parms[parmx]instanceof std.a_meas){
token=to_str(parms[parmx],{digits:3,decrease:std.Y,show_u:std.Y});
}else if(parms[parmx]instanceof std.Bitmap){
let bits=parms[parmx];
token=conv("bitmap[{} x {}]",bits.width,bits.height);
}else if(parms[parmx]instanceof Function){
token="<function>";
}else if(parms[parmx]instanceof std.a_function){
let func=parms[parmx];
token=func.modname+"."+func.name;
}else

std.argument_err("bad type");
break;

case"{a_xy}":
if((parms[parmx]instanceof std.a_tree)||(parms[parmx]instanceof std.a_path))
token="["+to_str(std.getn(parms[parmx],std.F_x))+" "+to_str(std.getn(parms[parmx],std.F_y))+"]";
else
std.argument_err("expecting a tree or path type");
break;

case"{array}":
if(parms[parmx]instanceof Array)
token=conv_array(parms[parmx]);
else
std.argument_err("expecting a Array type");
break;

case"{bool}":
if(typeof parms[parmx]==='boolean'){
token=conv_bool(parms[parmx]);
}else
std.argument_err("expecting a Boolean type");
break;

case"{uri}":

if(typeof parms[parmx]==='string')
token=conv_uri(parms[parmx]);
else
std.argument_err("expecting a String type");
break;

case"{e}":
token=to_str(std.elapsed,{digits:3});
parmx-=1;
break;

case"{hex}":

if(typeof parms[parmx]==='number')
token=conv_num_to_hex(parms[parmx]);
else
std.argument_err("expecting a number type");
break;

case"{int}":
token=String(parms[parmx]);
break;



case"{key}":
if(parms[parmx]instanceof Array)
token=conv_vector_num(parms[parmx]);
else
std.argument_err("expecting a path key");
break;

case"{meas}":
if(parms[parmx]instanceof std.a_meas)
token=to_str(parms[parmx],{digits:3,decrease:std.Y,show_u:std.Y});
else
std.argument_err("expecting a meas type");
break;

case"{num}":

if(typeof parms[parmx]==='number')
token=real64_to_str(parms[parmx],0,1,'','');
else
std.argument_err("expecting a num type");
break;

case"{n}":
case"{n0}":
case"{n,0}":

if(typeof parms[parmx]==='number')
token=to_str(parms[parmx]);
else
std.argument_err("expecting a num type");
break;

case"{n1}":
case"{n2}":
case"{n3}":
case"{n4}":
case"{n5}":
case"{n6}":
case"{n7}":
case"{n8}":
case"{n9}":

if(typeof parms[parmx]==='number'){
digits=parseInt(token.charAt(2),10);
token=to_str(parms[parmx],{digits:digits});
}else
std.argument_err("expecting a num type");
break;

case"{n,1}":
case"{n,2}":
case"{n,3}":
case"{n,4}":
case"{n,5}":
case"{n,6}":
case"{n,7}":
case"{n,8}":
case"{n,9}":

if(typeof parms[parmx]==='number'){
digits=parseInt(token.charAt(3),10);
token=to_str(parms[parmx],{digits:digits});
}else
std.argument_err("expecting a num type");
break;

case"{hpath}":
if(parms[parmx]===null){
token="null";
}else if(parms[parmx]instanceof std.a_pathh){
token=conv_pathh(parms[parmx]);
}else
std.argument_err("expecting a pathh type");
break;

case"{path}":
if(parms[parmx]===null){
token="null";
}else if(parms[parmx]instanceof std.a_path){
token=conv_path(parms[parmx]);
}else
std.argument_err("expecting a path type");
break;

case"{pathx}":
if(parms[parmx]===null){
token="null";
}else if(parms[parmx]instanceof std.a_pathx){
token=conv_pathx(parms[parmx]);
}else
std.argument_err("expecting a pathx type");
break;

case"{rect}":
if(parms[parmx]===null)
token="null";
else if(parms[parmx]instanceof std.Rectangle)
token=conv_rect(parms[parmx]);
else if((parms[parmx]instanceof std.a_tree)||(parms[parmx]instanceof std.a_path))
token=conv_tree_rect(parms[parmx]);
else
std.argument_err("expecting a Rectangle type");
break;

case"{rgb}":
if(typeof parms[parmx]==='number')
token=rgb_str(parms[parmx]);
else
std.argument_err("expecting a rgb color as uint type");
break;

case"{rgb_hex}":
if(typeof parms[parmx]==='number'||typeof parms[parmx]==='number')
token=rgb_hex_str(parms[parmx]);
else
std.argument_err("expecting a rgb color as uint type");
break;

case"{rgb_html}":
if(typeof parms[parmx]==='number'||typeof parms[parmx]==='number')
token=rgb_html_str(parms[parmx]);
else
std.argument_err("expecting a rgb color as numeric type");
break;

case"{str}":
if(typeof parms[parmx]==='string')
token=parms[parmx];
else
std.argument_err("expecting a string type");
break;

case"{tree}":
if((parms[parmx]instanceof std.a_path)||(parms[parmx]instanceof std.a_tree))
token=tree_to_str(parms[parmx]);
else
std.argument_err("expecting a tree type");
break;



default:

std.argument_err("unknown conversion type");
}
state=STATE_PLAIN;
parmx+=1;
result+=token;
token="";

}else{

token+=cc;
}
break;
}
}



if(parmx!==parms.length){

std.argument_err("parameter number mismatch");
}

result+=token;


return result;
}





function conv_pathx(px){
if(px===null)
return"[null pathx]";

let ss;


ss=px.lev[0].node.val;
ss+='[';

let i;
for(i=1;i<=px.lastx;i++){
if(i>1)
ss+=', ';
if(TRAP_U_SUBSCRIPTS&&(px.lev[i].sub===std.U))std.internal_err("bad subscript detected");
let sub=px.lev[i].sub;
ss+=to_str(sub);
}
ss+=']';
return ss;
}






export function conv_path(path){
let ss;
let i;
let digit;
let first=true;

if(path===null)
return"[null path]";

ss="anon[";
if(path.base.val!==null)
ss=path.base.val+'[';
for(digit of path.key){
if(first)
first=false;
else
ss+=', ';
if(TRAP_U_SUBSCRIPTS&&(digit===std.U))std.internal_err("bad subscript detected");
ss+=to_str(digit);
}
ss+=']';

return ss;
}






export function conv_pathh(path){
let ss;
let i;
let digit;
let first=true;

if(path===null)
return"[null pathh]";

ss=String(path.base_hash)+'[';
for(digit of path.key){
if(first)
first=false;
else
ss+=', ';
ss+=to_str(digit);
}
ss+=']';

return ss;
}





export function conv_bool(val){
if(val)
return"T";
else
return"F";
}







export function conv_num_to_hex(id){
let ss="";
let digit;
let pos;
let code;


let buf=std.new_bytes(8,std.BIG_END);
std.bytes_put_num(buf,id);
buf.position=0;

for(pos=0;pos<8;pos++){
code=std.bytes_get_card8(buf);
digit=conv_hex_byte(code);
ss+=digit;
}

return ss;
}





export function conv_hex_byte(code){
let ss;

if(code<0||code>255)std.argument_err("above ascii characters not yet implemented");

ss=code.toString(16);
if(ss.length===1)

ss='0'+ss;

return ss;
}






export function conv_unicode_to_bytes(ss){
let code;
let i;
let len;
let buf=std.new_bytes(10,std.BIG_END);
let result="";

std.bytes_put_str(buf,ss);


len=buf.position-2;
buf.position=2;


for(i=0;i<len;i++){
code=std.bytes_get_card8(buf);
result+='%'+conv_hex_byte(code);
}

return ss;
}















export function conv_uri(ss){
let net="";
let i;
let len=ss.length;
let cc;
let code;




for(i=0;i<len;i++){
cc=ss.charAt(i);
if(((cc>='A')&&(cc<='Z'))||
((cc>='a')&&(cc<='z'))||
((cc>='0')&&(cc<='9'))||
(cc==='*')||
(cc==='-')||
(cc==='.')||
(cc==='/')||
(cc==='_')){

net+=cc;




}else if(cc<='~'){


code=from_char(cc);

net+='%'+conv_hex_byte(code);
}else{

net+=conv_unicode_to_bytes(cc);
}
}
return net;
}






export function conv_dict(dict){
let ss="[";
let v;



for(v in dict){
ss+=conv_num(v)+" ";
}
ss+=']';
return ss;
}







export function conv_vector_num(val){
let v;
let result="[";
let first=true;

for(v of val){
if(first){
first=false;
}else{
result+=", ";
}
result+=to_str(v);
}
result+="]";
return result;
}





export function conv_array(list){
let i;
let result="[";
let first=true;

for(i=0;i<list.length;i++){
if(first){
first=false;
}else{
result+=", ";
}

if(typeof list[i]==='number')
result+=to_str(list[i]);
else
result+=String(list[i]);
}
result+="]";
return result;
}





export function conv_num(val){
return to_str(val);
}





export function conv_n(val){
return to_str(val);
}





export function conv_tree_rect(val){
let x=std.getn(val,std.F_left);
let y=std.getn(val,std.F_top);
let w=std.getn(val,std.F_width);
let h=std.getn(val,std.F_height);
return conv("[{n1},{n1} {n1}x{n1}]",x,y,w,h);
}





export function conv_rect(val){
return conv("[{n1},{n1} {n1}x{n1}]",val.left,val.top,val.width,val.height);
}





const g_base64_encode=[

65,66,67,68,69,70,71,72,73,74,75,76,77,


78,79,80,81,82,83,84,85,86,87,88,89,90,


97,98,99,100,101,102,103,104,105,106,107,108,109,


110,111,112,113,114,115,116,117,118,119,120,121,122,


48,49,50,51,52,53,54,55,56,57,43,47];

const g_base64_decode=[
-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,
52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,
-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,
15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,
-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,
41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1,
-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];







export function bytes_to_base64(data){

let outlen=(2+data.length-((data.length+2)%3))*4/3;
let out=std.new_bytes(outlen);

let i=0;
let r=data.length%3;
let len=data.length-r;
let c;
let outPos=0;


while(i<len){

c=data[i++]<<16|data[i++]<<8|data[i++];

out[outPos++]=g_base64_encode[(c>>>18)];
out[outPos++]=g_base64_encode[(c>>>12&0x3f)];
out[outPos++]=g_base64_encode[(c>>>6&0x3f)];
out[outPos++]=g_base64_encode[(c&0x3f)];
}


if(r===1){

c=data[i];

out[outPos++]=g_base64_encode[(c>>>2)];
out[outPos++]=g_base64_encode[((c&0x03)<<4)];
out[outPos++]=61;
out[outPos++]=61;
}


else if(r===2){
c=data[i++]<<8|data[i];

out[outPos++]=g_base64_encode[(c>>>10)];
out[outPos++]=g_base64_encode[(c>>>4&0x3f)];
out[outPos++]=g_base64_encode[((c&0x0f)<<2)];
out[outPos++]=61;
}

return out.readUTFBytes(out.length);
}





export function base64_to_bytes(raw){
let c1;
let c2;
let c3;
let c4;
let i=0;
let len=raw.length;

let buflen=Math.ceil(len*3/4)+2;
let byteString=std.new_bytes(buflen);
byteString.writeUTFBytes(raw);
let outPos=0;
while(i<len){

c1=g_base64_decode[(byteString[i++])];
if(c1===-1)
break;


c2=g_base64_decode[(byteString[i++])];
if(c2===-1)
break;

byteString[outPos++]=(c1<<2)|((c2&0x30)>>4);


c3=byteString[i++];
if(c3===61)
break;

c3=g_base64_decode[(c3)];
if(c3===-1)
break;

byteString[outPos++]=((c2&0x0f)<<4)|((c3&0x3c)>>2);


c4=byteString[i++];
if(c4===61)
break;

c4=g_base64_decode[(c4)];
if(c4===-1)
break;

byteString[outPos++]=((c3&0x03)<<6)|c4;
}
byteString.length=outPos;
byteString.position=0;
return byteString;
}
