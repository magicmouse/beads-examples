
import{
a_function,
a_gradient,
a_image,
a_loom_element,
a_meas,
a_sound,
a_tree,
a_path
}from'./beads_std.js';
import*as std from'./beads_std.js';
import*as str from'./beads_str.js';

console.log("--- INIT A of k");

const TRACE_AUTO=false;
const TRACE_BLOCKS=false;
const TRACE_CAPTURE=false;
const TRACE_DPI=false;
const TRACE_ENTER=false;
const TRACE_EXPLODE=false;
const TRACE_EXTRA=false;
const TRACE_FIND=false;
const TRACE_FINDBX=false;
const TRACE_GRID=false;
const TRACE_K=false;
const TRACE_LOGGING=false;
const TRACE_OBSOLETE=false;
const TRACE_SCROLL=false;
const TRACE_TBL=false;
const TRACE_VISIT=false;
const TRACE_XFORM=false;
const TRACE_XTRA=false;
const TRACE_XY=false;

const MARK_OVERFLOW=false;
export const SKIPBG=false;
export const DUMMY_ROW_CONTENT=false;


export const DIVF_VERT=0x0001;
export const DIVF_FINGER=0x0002;


export const BKIND_ROOT=0;
export const BKIND_PLAIN=1;
export const BKIND_SUBSET=2;
export const BKIND_GRID_BASE=3;
export const BKIND_GRID_CELL=4;
export const BKIND_SLICE=5;
export const BKIND_SCROLL=6;
export const BKIND_TABLE_BASE=7;
export const BKIND_TABLE_ROW=8;
export const BKIND_OVERLAY=9;
export const BKIND_MEASURING=10;
export const BKIND_MENUBAR=11;


export const NODRAW=null;
export const NOTRACK=null;
export const NOCALC=null;
export const NOCELLTRACK=null;

const ROOT_BLABEL="$root";
const LOG_DRAW=false;


let DRAW_EVENT;

export const SCROLL_SMALL_STEP=1/12;
export const SCROLL_BIG_STEP=0.95;


export let g_interface_locked;

export let g_root_block=null;
export let g_root2_block=null;
export let g_menu_block=null;






export let g_capture_bid;
export let g_capture_block;
export let g_last_majorx;



export let g_field_mark_func;
export let g_fields_to_mark;

let g_last_drawn_seq;
export let gg_depth;


let g_first_mon_draw;




export let g_curr_block=null;
export let g_block_stack=[];











let g_print_options=null;


function a_col_measure(arg_width,arg_units){
this.width=arg_width;
this.unit=arg_units;
}

function a_tbl_col(arg_id,arg_start,arg_stop){
this.colid=arg_id;
this.startcol=arg_start;
this.stopcol=arg_stop;
this.startdot=0;
this.stopdot=0;
}

function a_tbl_row(arg_rowkind,arg_rowid,arg_extra){
this.rowkind_ptr=arg_rowkind;
this.rowid=arg_rowid;
this.rowbox=null;
this.rowextra=arg_extra;
}

function a_tbl_rowkind(arg_id,arg_drawf){
this.kindID=arg_id;
this.curcolx=1;
this.curspanx=1;
this.rowdrawf=arg_drawf;
this.fields=[];
}

function a_tbl_spec(){
this.backcolor=std.U;
this.prepped=false;
this.nrows=0;
this.tot_height=0;
this.rawgrid=[];
this.rawdots=[];
this.rowm=[];
this.rows=[];
this.s=[];
}







export function k_root2(b){
g_root2_block=b;
}






function capture_mouse(b){
if(TRACE_CAPTURE)console.log("capture_mouse by "+b.blabel);


if(g_capture_bid!=0)

std.argument_err("nested calls to capture not supported");


if(b.trakfunc==NOTRACK)

std.argument_err("cannot capture without a tracking block");



g_capture_bid=b.bid
g_capture_block=b;

}





function release_mouse(){
if(TRACE_CAPTURE)console.log("release_mouse");


g_capture_bid=0;
g_capture_block=null;
}




















export function k_create_layer(parent,options){
let newb;
let tx=0;
let ty=0;
let skewx=0;
let skewy=0;
let left=0;
let top=0;
let width=parent.bounds.width;
let height=parent.bounds.height;
let pin=std.U;
let dpi=std.U;
let indent;
let in_t;
let in_r;
let in_b;
let in_l;
let opacity=1;




for(let property in options){
switch(property){
case'area':
left=std.getn(options.area,std.F_left);
top=std.getn(options.area,std.F_top);
width=std.getn(options.area,std.F_width);
height=std.getn(options.area,std.F_height);
break;

case'indent':
indent=options.indent;
left=parent.bounds.left+indent;
top=parent.bounds.top+indent;
width=parent.bounds.width-(indent*2);
height=parent.bounds.height-(indent*2);
break;

case'in_t':

in_t=options.in_t;
break;

case'in_r':

in_r=options.in_r;
break;

case'in_b':

in_b=options.in_b;
break;

case'in_l':

in_l=options.in_l;
left=parent.bounds+in_l;
top=parent.bounds+in_t;
width=parent.bounds.width-in_l-in_r;
height=parent.bounds.height-in_t-in_b;
break;

case'opacity':
if(std.is_numeric(options.opacity)!=std.Y)
std.argument_err('bad arg');
opacity=options.opacity;
break;

case'pin':
if(std.is_numeric(options.pin)!=std.Y)
std.argument_err('bad arg');
pin=options.pin;
break;

case'dpi':
if(std.is_numeric(options.dpi)!=std.Y)
std.argument_err('bad arg');
dpi=options.dpi;
break;

case'tx':
if(std.is_numeric(options.tx)!=std.Y)
std.argument_err('bad arg');
left=options.tx;
break;

case'ty':
if(std.is_numeric(options.ty)!=std.Y)
std.argument_err('bad arg');
top=options.ty;
break;

case'skewx':
if(std.is_numeric(options.skewx)!=std.Y)
std.argument_err('bad arg');
skewx=options.skewx;
break;

case'skewy':
if(std.is_numeric(options.skewy)!=std.Y)
std.argument_err('bad arg');
skewy=options.skewy;
break;

default:

std.argument_err("### bad property in options: "+property);

}
}


if(std.CHECKS&&((std.is_numeric(left)!=std.Y)||(std.is_numeric(top)!=std.Y)||(std.is_numeric(width)!=std.Y)||(std.is_numeric(height)!=std.Y)))
std.argument_err("bad bounds");





newb=std.new_block(
parent,
new std.Rectangle(left,top,width,height),
BKIND_SUBSET,
parent.blabel+":layer",

null,
null,
parent.dest);
newb.style.opacity=opacity;
if(dpi!=std.U)
newb.dpi=dpi;


if(pin==5){

tx=width/2;
ty=height/2;










var old_svg=std.js_svg_wrapper(newb,opacity);
var group=document.createElementNS(std.SVG_NS,'g');
group.setAttribute('transform',`translate(${tx} ${ty})`);
old_svg.appendChild(group);

newb.last_svg_ptr=group;










}


newb.bkind=BKIND_SUBSET;
return newb;
}








export function k_set_bounds(b,screenbox){





b.style.left=screenbox.left;
b.style.top=screenbox.top;


b.bounds=new std.Rectangle(0,0,screenbox.width,screenbox.height);
std.setv(0,0,b.extra,std.F_box,std.F_left,0);
std.setv(0,0,b.extra,std.F_box,std.F_top,0);
std.setv(0,0,b.extra,std.F_box,std.F_width,screenbox.width);
std.setv(0,0,b.extra,std.F_box,std.F_height,screenbox.height);
}





function snap_rectangle(box){
let net_left=Math.round(box.left);
let net_top=Math.round(box.top);
let net_right=Math.round(box.left+box.width);
let net_bottom=Math.round(box.top+box.height);
let box2=new std.Rectangle(net_left,net_top,net_right-net_left,net_bottom-net_top);
return box2;
}





export function refresh_all(refresh_menubar=false){

g_last_drawn_seq=0;
g_root_block.bseq=1;
if(refresh_menubar)
g_menu_block.bseq=1;
}





export function in_to_dots(
thisb,
inches,
round=false)
{
let result;
if(thisb.dest==std.FOR_PRINT){
result=inches*std.getn(g_print_options,std.PRINT_RESOLUTION);
return result;
}else{
result=inches*std.SCREEN_DPI;
}

if(round)
return Math.round(result);
else
return result;
}









export function unit_to_pixels(
block,
meas,
unit,
roundf=false)
{

let result;

result=0;

switch(unit){
case std.al:

std.argument_err("asking for phys size of a non-physical unit");
break;

case std.px:
if(roundf)
result=Math.round(meas);
else
result=meas;
break;

case std.pt:
result=std.pt_to_dots(block,meas);
if(roundf)
result=Math.round(result);
break;

case std.pc:
result=std.pt_to_dots(block,meas*12);
if(roundf)
result=Math.round(result);
break;






default:

std.argument_err("unsupported unit type");
}

return result;

}






export function draw_err_box(
container,
arg_id,
arg_box){
std.draw_rect(container,arg_box,{
fill:0xff0000
});
}










export function k_enter(b){

b.nesting+=1;



if(b.nesting==1){

if(b.bkind!=BKIND_SUBSET){
g_block_stack.push(g_curr_block);
g_curr_block=b;
}


b.usesz.length=0;



k_del_all_children(b);




b.div=null;
b.tbl=null;


if(TRACE_ENTER)console.log(str.conv("k_enter, "+b.blabel+", bounds={rect}, scroll={rect}, seq={n}",b.bounds,b.scrollRect,b.bseq));




}else{

if(TRACE_K)console.log("...ignoring nested block "+b.blabel);
}

}






export function k_leave(b){
let content;
let window;

b.nesting-=1;
if(std.CHECKS){
if(b.nesting<0)
std.internal_err("block was left more times than entered "+b.blabel);
if((b.div!=null)&&(b.div.open))
std.internal_err("forgot to call div_end before leaving this block!");
}

if(b.nesting==0){

if(b.bkind!=BKIND_SUBSET){
g_curr_block=g_block_stack.pop();
}


b.bseq=std.g_currseq;
if(TRACE_ENTER)console.log(str.conv("..k_leave, "+b.blabel+", seq={n}",b.bseq));

}
}













export function k_push(b){
std.internal_err("not yet implemented");
}





export function k_pop(b){
std.internal_err("not yet implemented");
}





export function k_inset_to_rect(
b,
new_bounds,
arg_draw_func=null){

let new_child;

new_child=std.new_block(b,new_bounds,BKIND_SUBSET,b.blabel+":inset",arg_draw_func,b.dest);

arg_draw_func(new_child);
}






export function k_inset(b,
arg_meas_n,
arg_meas_s,
arg_meas_e,
arg_meas_w,
arg_unit,
arg_draw_func,
arg_track_func=NOTRACK){

let inset_n;
let inset_s;
let inset_e;
let inset_w;
let new_bounds;
let new_child;

if(TRACE_K)console.log("k_inset on block "+b.blabel);

inset_n=0;
inset_s=0;
inset_e=0;
inset_w=0;

if((std.is_numeric(arg_meas_n)==std.Y)&&(arg_meas_n>=0.))
inset_n=unit_to_pixels(b,arg_meas_n,arg_unit);
else if(std.CHECKS)std.argument_err("invalid inset");

if((std.is_numeric(arg_meas_s)==std.Y)&&(arg_meas_s>=0.))
inset_s=unit_to_pixels(b,arg_meas_s,arg_unit);
else if(std.CHECKS)std.argument_err("invalid inset");

if((std.is_numeric(arg_meas_e)==std.Y)&&(arg_meas_e>=0.))
inset_e=unit_to_pixels(b,arg_meas_e,arg_unit);
else if(std.CHECKS)std.argument_err("invalid inset");

if((std.is_numeric(arg_meas_w)==std.Y)&&(arg_meas_w>=0.))
inset_w=unit_to_pixels(b,arg_meas_w,arg_unit);
else if(std.CHECKS)std.argument_err("invalid inset");


new_bounds=new std.Rectangle(
(b.bounds.left+inset_w),
(b.bounds.top+inset_n),
(b.bounds.width-inset_w-inset_e),
(b.bounds.height-inset_n-inset_s));

if(TRACE_K)console.log(str.conv("after inset of {n1},{n1},{n1},{n1}, bounds {rect}",
inset_n,inset_s,inset_e,inset_w,new_bounds));

k_inset_to_rect(b,new_bounds,arg_draw_func,arg_track_func);

}






export function k_indent_to_net(
block,
targh,
targv,
justh,
justv,
arg_draw_func,
arg_track_func=NOTRACK){
let pixels_h;
let pixels_v;
let excess_h;
let excess_v;
let indent_n;
let indent_s;
let indent_e;
let indent_w;

if(std.CHECKS&&((std.is_numeric(justh)!=std.Y)||(std.is_numeric(justv)!=std.Y)||
(std.is_numeric(targh)!=std.Y)||(std.is_numeric(targv)!=std.Y)))
std.argument_err("non-numeric inputs");


justh=Math.max(0,Math.min(1,justh));
justv=Math.max(0,Math.min(1,justv));

pixels_h=targh;
excess_h=Math.max(0,block.bounds.width-pixels_h);

pixels_v=targv;
excess_v=Math.max(0,block.bounds.height-pixels_v);

indent_w=Math.round(excess_h*justh);
indent_e=Math.max(0,excess_h-indent_w);

indent_n=Math.round(excess_v*justv);
indent_s=Math.max(0,excess_v-indent_n);

if(TRACE_K)console.log(str.conv("indent_to_net, targ {n},{n}, pixels {n},{n}, excess {n},{n}",
targh,targv,pixels_h,pixels_v,excess_h,excess_v));

k_inset(block,indent_n,indent_s,indent_e,indent_w,std.px,arg_draw_func,arg_track_func);
}







export function tbl_begin(block){
let result;

if(TRACE_K)console.log("tbl_begin");

result=new a_tbl_spec();
block.tbl=result;
return result;
}





function calc_physical(
block,
avail,
avail2,
pairs,
tentative
){
let tot_aliquots;
let pixels_per_al;
let i;
let leftover;
let nal;
let pixels;
let per_al;
let pos;
let tot_tentative


tot_tentative=0;
tot_aliquots=0.;
nal=0;
i=0;
while(i<pairs.length){
if((pairs[i].unit==std.al)){
nal+=1;
tot_aliquots=tot_aliquots+pairs[i].width;
tentative[i]=0;
}else{
pixels=unit_to_pixels(block,pairs[i].width,pairs[i].unit);
tentative[i]=pixels;
tot_tentative+=pixels;
}
i+=1;
}



if(nal!=0){
leftover=avail-tot_tentative;
pixels_per_al=leftover/tot_aliquots;


tot_tentative=0;
i=0;
while(i<pairs.length){
if((pairs[i].unit==std.al)){
pixels=pairs[i].width*pixels_per_al;
tentative[i]=pixels;
tot_tentative+=pixels;
}else{
tot_tentative+=tentative[i];
}
i+=1;
}


leftover=avail-tot_tentative;
per_al=Math.floor(leftover/nal);
leftover=avail-tot_tentative-nal*per_al;
i=0;
while(i<pairs.length){
if((pairs[i].unit==std.al)){
tentative[i]+=per_al;
tot_tentative+=per_al;
if(leftover>0){
tentative[i]+=1;
tot_tentative+=1;
leftover-=1;
}
}
i+=1;
}
}

return tot_tentative;
}






export function tbl_begin_rows(b){
let raw_cum;
let pos;
let sx;
let ix;


let rawc=b.tbl.rawgrid;
let rawdots=b.tbl.rawdots;
let mytbl=b.tbl;


if(mytbl.prepped){
std.argument_err("double call of tbl_end!");
}
mytbl.prepped=true;

function aa(){
let sz;
sz=1234;
}

function bb(){
let sz;
sz=234324;
}


mytbl.tot_width=calc_physical(b,b.bounds.width,b.bounds.height,rawc,rawdots);


raw_cum=[];
pos=0;
for(ix in rawc){
raw_cum.push(pos);
pos+=rawdots[ix];
}
raw_cum.push(pos);


for(sx in mytbl.s){


for(ix in mytbl.s[sx].fields){


if(std.CHECKS){

if((mytbl.s[sx].fields[ix].startcol-1>=rawc.length)||
(mytbl.s[sx].fields[ix].startcol>mytbl.s[sx].fields[ix].stopcol)||
(mytbl.s[sx].fields[ix].stopcol-1>=rawc.length)){

std.argument_err("logical columns not reasonable");
}
}



mytbl.s[sx].fields[ix].startdot=raw_cum[mytbl.s[sx].fields[ix].startcol-1];
mytbl.s[sx].fields[ix].stopdot=raw_cum[mytbl.s[sx].fields[ix].stopcol];
}
}

}







export function tbl_end_rows(b){

let row_heights;
let col;
let row;
let tot_height;
let pos;
let r_left;
let r_top;
let r_right;
let r_bottom;


let mytbl=b.tbl;


row_heights=new Array(mytbl.rowm.length);
tot_height=calc_physical(b,b.bounds.height,b.bounds.width,mytbl.rowm,row_heights);



pos=0;
for(row in mytbl.rows){
r_top=pos;
pos=pos+row_heights[row];
r_bottom=pos;
r_left=0;
r_right=Math.min(mytbl.tot_width,b.bounds.width);

mytbl.rows[row].rowbox=new std.Rectangle(r_left,r_top,r_right-r_left,r_bottom-r_top);
if(TRACE_K)console.log(str.conv("  row={}, rowbox={rect}",row,mytbl.rows[row].rowbox));
}


mytbl.tot_height=tot_height;






set_content_size(b,b.bounds.width,b.bounds.height,0,tot_height,0,tot_height-b.bounds.height);

if(TRACE_BLOCKS)console.log("..end tbl_end, nrows="+mytbl.nrows);

}






export function tbl_draw(
b,
startrow){
let shapeID;
let colID;
let rowID;
let rownum;
let colx;
let rowx;
let sectx;
let endrow;
let dx;
let dy;
let net;
let tbl;
let sp;
let first=true;

tbl=b.tbl;


if(std.is_numeric(tbl.backcolor)==std.Y){
if(SKIPBG){

std.draw_rect(b,b.bounds,{
fill:std.WHITE
});
}else{
std.draw_rect(b,b.bounds,{
fill:tbl.backcolor
});
}
}


dx=0;
if((b.dest==std.FOR_SCREEN)){

if(b.horz_scroll_link!=null)
dx=-std.getn(b.horz_scroll_link,std.F_s_position);
}else{


}



dy=0;
if((b.dest==std.FOR_SCREEN)){

if(b.vert_scroll_link)
dy=-std.getn(b.vert_scroll_link,std.F_s_position);
}else{


dy=-tbl.rows[startrow].rowbox.top;
}



if(TRACE_TBL)console.log(str.conv("tbl_draw, bounds={rect}, scroll={rect}, nsect={}, startrow={}, nrows={}, dx={}, dy={}",
b.bounds,b.scrollRect,tbl.s.length,startrow,tbl.nrows,dx,dy));



let row_ptr;

rowx=startrow;
while(rowx<tbl.nrows){





row_ptr=tbl.rows[rowx];

rowID=row_ptr.rowid;
if((rowID!=std.U)){


net=std.solve_rectR({
basis:row_ptr.rowbox,
dx:dx,
dy:dy
});
if(TRACE_TBL)console.log(str.conv("  rowbox after adjustment {rect}, was {rect}",net,row_ptr.rowbox));


if(net.bottom<b.bounds.top){

if(TRACE_TBL)console.log("  ..row not yet visible");
rowx+=1;
continue;
}

if(net.top>b.bounds.bottom){

if(TRACE_TBL)console.log("..row past bottom");
break;
}

if((b.dest==std.FOR_PRINT)&&(net.bottom>b.bounds.bottom)&&(!first)){

if(TRACE_TBL)console.log("..stopping, print row will get truncated");
break;
}

first=false;


if(TRACE_TBL)console.log(str.conv("rowback rowx={}, net={rect}",rowx,net));

if(DUMMY_ROW_CONTENT){

std.draw_rect(b,net,{
fill:std.rgb(std.random_range_int(100,255),std.random_range_int(100,255),
std.random_range_int(100,255)),
opacity:0.5
});

std.draw_str(b,str.to_str(rowx),net,{
size:std.pt_to_dots(b,10)
});
}else{



let drawf=row_ptr.rowkind_ptr.rowdrawf;


std.setv(0,0,b.extra,std.F_cell_id,std.F_y,rowID);
std.setv(0,0,b.extra,std.F_cell,std.F_y,rowx);
std.setv(0,0,b.extra,std.F_box,std.F_left,net.left);
std.setv(0,0,b.extra,std.F_box,std.F_top,net.top);
std.setv(0,0,b.extra,std.F_box,std.F_width,net.width);
std.setv(0,0,b.extra,std.F_box,std.F_height,net.height);



drawf(b,row_ptr);



}

}
rowx+=1;
}

endrow=rowx;

if(TRACE_TBL)console.log(str.conv("..end table draw, startrow={}, endrow={}",
startrow,endrow));

return endrow;
}




export function tbl_rawgrid_add(
spec,
arg_meas,
arg_unit)

{

spec.push(new a_col_measure(arg_meas,arg_unit));
}





export function tbl_begin_rowkind(
spec,
kind_id,
drawfunc)
{

spec.push(new a_tbl_rowkind(kind_id,drawfunc));
}





export function tbl_rowkind_span(
spec,
is_span,
ncols)
{


let curr_section=spec[spec.length-1];
if(is_span){

curr_section.fields.push(new a_tbl_col(curr_section.curspanx,curr_section.curcolx,curr_section.curcolx+ncols-1));
curr_section.curspanx+=1;
}


curr_section.curcolx+=ncols;
}






export function tbl_calc_field(
b,
rowp,
colx)

{



let top=rowp.rowbox.top;
let height=rowp.rowbox.height;
let rowkindp=rowp.rowkind_ptr;
let left=rowkindp.fields[colx-1].startdot;
let width=rowkindp.fields[colx-1].stopdot-left;


std.setv(0,0,b.extra,std.F_box,std.F_left,left);
std.setv(0,0,b.extra,std.F_box,std.F_top,top);
std.setv(0,0,b.extra,std.F_box,std.F_width,width);
std.setv(0,0,b.extra,std.F_box,std.F_height,height);


std.setv(0,0,b.extra,std.F_cell,std.F_x,colx);

}








export function tbl_find_rowkind(
targid,
s)
{
let sx;

for(sx in s){
if(s[sx].kindID==targid){
return s[sx];
}
}

return null;
}





export function tbl_add_spa(
arg_tbl,
arg_meas,
arg_unit){


arg_tbl.rowm.push(new a_col_measure(arg_meas,arg_unit));

arg_tbl.rows.push(new a_tbl_row(null,std.U,null));
arg_tbl.nrows+=1;

}





export function tbl_add_row(
arg_tbl,
arg_meas,
arg_unit,
arg_rowkind,
arg_rowid,
arg_extra=null){

let rowkind_ptr;


rowkind_ptr=tbl_find_rowkind(arg_rowkind,arg_tbl.s);
if(rowkind_ptr==null){

std.argument_err("section id never defined");
}


arg_tbl.rowm.push(new a_col_measure(arg_meas,arg_unit));

arg_tbl.rows.push(new a_tbl_row(rowkind_ptr,arg_rowid,arg_extra));
arg_tbl.nrows+=1;

}






export function div_begin(
block,
is_grid=false,
grid_tblr=false,
arg_scrollh=false,
arg_scrollv=false)
{

if(TRACE_SCROLL)console.log(str.conv("div_begin {str}, bounds={rect}, scroll={rect}",block.blabel,block.bounds,block.scrollRect));






block.div=new std.a_div_spec(is_grid,grid_tblr,arg_scrollh,arg_scrollv);

}





function order_slices(a,b){
if(a.draw_order==b.draw_order){

if(a.box.top<b.box.top)
return-1;
else if(a.box.top>b.box.top)
return+1;
else{

if(a.box.left<b.box.left)
return-1;
else if(a.box.left>b.box.left)
return+1;
else

return 0;
}
}else if(a.draw_order<b.draw_order)
return-1;
else
return+1;
}









export function scroll_block_id(
targid,
posx,
posy)
{
let b;

if(TRACE_SCROLL)console.log(">> scroll_block_id");
b=k_find_block_by_id(g_root_block,targid);
if(b!=null){

if(TRACE_SCROLL)console.log(str.conv("scroll_block_id, blabel={str}, id={n}, x={n}, y={n}, scroll={rect}",b.blabel,b.bid,posx,posy,b.scrollRect));


if(b.div!=null){

if(TRACE_SCROLL)console.log("  scrolling a div block");



b.scrollRect=new std.Rectangle(b.bounds.left+posx,b.bounds.top+posy,b.bounds.width,b.bounds.height);

}else if(b.tbl!=null){
if(TRACE_SCROLL)console.log("  refreshing a tbl");

tbl_draw(b,0);
}else{

std.internal_err("block kind not allowed to have scrollbar");
}
}else{
std.internal_err("content block is missing!");
}
}








export function draw_slice(myslice,myblock){


if(myslice.xtra_parms!=null){


myblock.xtra_parms=myslice.xtra_parms;
if(TRACE_XTRA)console.log(str.conv("@@@ inside draw_slice, b={}, xtra.len={}",myblock.blabel,myblock.xtra_parms.length));

myblock.drawer.code.apply(null,[myblock].concat(myblock.xtra_parms));
}else{

myblock.drawer.code(myblock);
}
}






export function slices_compute(
parent,
is_grid,
arg_flags,
scrolling,
slices,
avail,
avail2)
{

let i;
let nal;
let tot_aliquots;
let pixels_per_al;
let thickness;
let leftover;
let pixels;
let tentative;
let tot_tentative;
let per_al;
let pos;
let spillover_h;
let spillover_v;
let content_h;
let content_v;
let new_child;
let pass_data;
let markbox;
let nslices;
let myslice;

nslices=slices.length;
if(nslices==0)
return;


tot_tentative=0;
tot_aliquots=0.;
nal=0;
tentative=new Array(nslices);

for(i=0;i<nslices;i++){
myslice=slices[i];
if(myslice.unit==std.al){

nal+=1;
tot_aliquots=tot_aliquots+myslice.mag;
tentative[i]=0;

}else{

pixels=unit_to_pixels(parent,myslice.mag,myslice.unit);
tentative[i]=pixels;
tot_tentative+=pixels;
}
}

if(scrolling){
if((arg_flags&DIVF_VERT)==0){
content_h=tot_tentative;
content_v=parent.bounds.height;
}else{
content_h=parent.bounds.width;
content_v=tot_tentative;
}
}else{


leftover=avail-tot_tentative;


spillover_h=0;
spillover_v=0;


if(leftover<0){

let factor=avail/tot_tentative;
for(i=0;i<nslices;i++){
myslice=slices[i];
if(myslice.unit!=std.al){

tentative[i]*=factor;
}
}
}




if(leftover>0){


if(nal!=0){

pixels_per_al=leftover/tot_aliquots;

for(i=0;i<nslices;i++){
myslice=slices[i];
if((myslice.unit==std.al)){
pixels=(myslice.mag*pixels_per_al);
tentative[i]=pixels;
tot_tentative+=pixels;
}else{

tot_tentative+=tentative[i];
}
}

}

}else if(leftover<0){


if((arg_flags&DIVF_VERT)==0){
spillover_h=-leftover;
}else{
spillover_v=-leftover;
}
if(TRACE_K)console.log(str.conv("div slice overflow, avail={n}, scroll_limit={n}",avail,-leftover));
}

content_h=parent.bounds.width+spillover_h;
content_v=parent.bounds.height+spillover_v;
}

set_content_size(parent,parent.bounds.width,parent.bounds.height,content_h,content_v,spillover_h,spillover_v);


if((arg_flags&DIVF_VERT)==0){

pos=parent.bounds.left;
for(i=0;i<nslices;i++){
slices[i].box=new std.Rectangle(pos,parent.bounds.top,tentative[i],parent.bounds.height);
pos+=tentative[i];
}

}else{

pos=parent.bounds.top;
for(i=0;i<nslices;i++){
slices[i].box=new std.Rectangle(parent.bounds.left,pos,parent.bounds.width,tentative[i]);
pos+=tentative[i];
}
}


if(TRACE_K){
var dname;
console.log("..end slices_compute:");
for(i=0;i<nslices;i++){
if(slices[i].drawer!=null)
dname=slices[i].drawer.name;
else
dname="-space-";
console.log(str.conv(" slices[{}] "+dname+", box={rect}, id={}",i,slices[i].box,slices[i].id));
}
}


slices.sort(order_slices);



if(!is_grid){
for(i=0;i<nslices;i++){
myslice=slices[i];
if((myslice.drawer!=null)&&(tentative[i]!=0)){



let label=myslice.drawer.name;
new_child=std.new_block(parent,myslice.box,BKIND_SLICE,label,myslice.drawer);
myslice.actual=new_child;
draw_slice(myslice,new_child);

}
}
}

}






export function draw_grid(b,...args){
let div=b.div;
let rowx;
let colx;
let logrow;
let logcol;
let cumx;
let box;


logcol=1;
for(colx=0;colx<div.horz_slices.length;colx++)
if(div.horz_slices[colx].drawer!=null){
logrow=1;
for(rowx=0;rowx<div.vert_slices.length;rowx++)
if(div.vert_slices[rowx].drawer!=null){


box=snap_rectangle(div.vert_slices[rowx].box.intersection(div.horz_slices[colx].box));
if(TRACE_GRID)console.log(str.conv("horz_box={rect}, vert_boc={rect}, net={rect}",div.horz_slices[colx].box,div.vert_slices[colx].box,box));
if(TRACE_GRID)console.log(str.conv("grid for block {} rowx={}, colx={}, box={rect}",b.blabel,rowx,colx,box));



let label=div.horz_slices[colx].drawer.name+'['+String(logcol)+','+String(logrow)+']';
let myblock=std.new_block(
b,
box,
BKIND_GRID_CELL,
label,

div.horz_slices[colx].drawer,
b.dest);




std.setv(0,0,myblock.extra,std.F_ncells,std.F_x,div.ncols);
std.setv(0,0,myblock.extra,std.F_ncells,std.F_y,div.nrows);


myblock.xtra_parms=b.xtra_parms;


















std.setv(0,0,myblock.extra,std.F_cell,std.F_x,logcol);
std.setv(0,0,myblock.extra,std.F_cell,std.F_y,logrow);
std.setv(0,0,myblock.extra,std.F_cell_id,std.F_x,div.horz_slices[colx].id);
std.setv(0,0,myblock.extra,std.F_cell_id,std.F_y,div.vert_slices[rowx].id);


if(div.grid_tblr)
cumx=(logcol-1)*div.nrows+logrow;
else
cumx=(logrow-1)*div.ncols+logcol;
std.setv(0,0,myblock.extra,std.F_cell_seq,cumx);



std.setv(0,0,myblock.extra,std.F_box,std.F_left,0);
std.setv(0,0,myblock.extra,std.F_box,std.F_top,0);
std.setv(0,0,myblock.extra,std.F_box,std.F_width,box.width);
std.setv(0,0,myblock.extra,std.F_box,std.F_height,box.height);




if(args!=null&&args.length>0){

div.horz_slices[colx].drawer.code.apply(null,[myblock].concat(args));
}else{

div.horz_slices[colx].drawer.code(myblock);
}
logrow++;
}

logcol++;
}

}






export function div_end(
b)

{

let div=b.div;
let avail;
let avail2;




if(TRACE_K)console.log(str.conv("div_end on block {str}, bounds={rect}",b.blabel,b.bounds));



if(!b.div.open){

std.argument_err("this block already been closed up");
}


avail=b.bounds.width;
avail2=b.bounds.height;
slices_compute(b,div.is_grid,0,b.div.scrollh,b.div.horz_slices,avail,avail2);


avail=b.bounds.height;
avail2=b.bounds.width;
slices_compute(b,div.is_grid,DIVF_VERT,b.div.scrollv,b.div.vert_slices,avail,avail2);

let ncols=0;
let nrows=0;


for(let rowx=0;rowx<div.vert_slices.length;rowx++)
if(div.vert_slices[rowx].drawer!=null){
nrows+=1;
}
for(let colx=0;colx<div.horz_slices.length;colx++)
if(div.horz_slices[colx].drawer!=null){
ncols+=1;
}

div.ncols=ncols;
div.nrows=nrows;




div.open=false;


std.setv(0,0,b.extra,std.F_ncells,std.F_x,div.ncols);
std.setv(0,0,b.extra,std.F_ncells,std.F_y,div.nrows);

}






function set_content_size(
b,
window_h,
window_v,
content_h,
content_v,
spillover_h,
spillover_v){
let step;
let bigstep;
let old_content;
let old_window;
let old_pos;
let new_posx;
let new_posy;
let uses_scrollrect;

if(TRACE_SCROLL)console.log(str.conv("  set_content_size, window=[{},{}], content=[{},{}], spillover=[{},{}]",
window_h,window_v,content_h,content_v,spillover_h,spillover_v));

uses_scrollrect=(b.tbl!=null);

new_posx=0;
new_posy=0;


if(b.horz_scroll_link!=null){
uses_scrollrect=(b.div!=null);
if(TRACE_SCROLL)console.log(str.conv("  set_content_size, horz linkage, uses={}",uses_scrollrect));



old_content=std.getn(b.horz_scroll_link,std.F_s_content_size);
old_window=std.getn(b.horz_scroll_link,std.F_s_window_size);
old_pos=std.getn(b.horz_scroll_link,std.F_s_position);
new_posx=old_pos;


std.setv(0,0,b.horz_scroll_link,std.F_s_block_id,b.bid);
std.setv(0,0,b.horz_scroll_link,std.F_s_content_size,content_h);
std.setv(0,0,b.horz_scroll_link,std.F_s_window_size,b.bounds.width);


if(spillover_h>0){

if(old_pos>spillover_h){

new_posx=spillover_h;
}
step=Math.round(b.bounds.width*SCROLL_SMALL_STEP);
std.setv(0,0,b.horz_scroll_link,std.F_s_step_size,step);
bigstep=Math.round(b.bounds.width*SCROLL_BIG_STEP);
std.setv(0,0,b.horz_scroll_link,std.F_s_big_step_size,bigstep);
}else{

new_posx=0;
}

if(TRACE_SCROLL)console.log(str.conv("  H scroll pos, old={n}, new={n}",old_pos,new_posx));
std.setv(0,0,b.horz_scroll_link,std.F_s_position,new_posx);
}

if(b.vert_scroll_link!=null){
uses_scrollrect=(b.div!=null);
if(TRACE_SCROLL)console.log(str.conv("  set_content_size, vert linkage, uses={}",uses_scrollrect));



old_content=std.getn(b.vert_scroll_link,std.F_s_content_size);
old_window=std.getn(b.vert_scroll_link,std.F_s_window_size);
old_pos=std.getn(b.vert_scroll_link,std.F_s_position);
new_posy=old_pos;

std.setv(0,0,b.vert_scroll_link,std.F_s_block_id,b.bid);
std.setv(0,0,b.vert_scroll_link,std.F_s_content_size,content_v);
std.setv(0,0,b.vert_scroll_link,std.F_s_window_size,b.bounds.height);

if(spillover_v>0){

if(old_pos>spillover_v){

new_posy=spillover_v;
}
step=Math.round(b.bounds.height*SCROLL_SMALL_STEP);
std.setv(0,0,b.vert_scroll_link,std.F_s_step_size,step);
bigstep=Math.round(b.bounds.height*SCROLL_BIG_STEP);
std.setv(0,0,b.vert_scroll_link,std.F_s_big_step_size,bigstep);
if(TRACE_SCROLL)console.log(str.conv("in DIV end, content={n}, win={n}, spill={n}, step={n}, bigstep={n}",
content_v,b.bounds.height,spillover_v,step,bigstep));
}else{

new_posy=0;
}

if(TRACE_SCROLL)console.log(str.conv("  V scroll pos, old={n}, new={n}",old_pos,new_posy));
std.setv(0,0,b.vert_scroll_link,std.F_s_position,new_posy);
}







if(b.bid==0){
b.scrollRect=null;
if(TRACE_SCROLL)console.log("  root block with null scrollRect");
}else if(uses_scrollrect){


b.scrollRect=new std.Rectangle(b.bounds.left+new_posx,b.bounds.top+new_posy,b.bounds.width,b.bounds.height);
if(TRACE_SCROLL)console.log(str.conv("  set_content_size, set scrollRect={rect}",b.scrollRect));
}


}















export function div_spa(
block,
arg_flags,
arg_meas,
arg_unit)
{
div_add(block,std.U,arg_flags,arg_meas,arg_unit,null);
}





export function div_add(
parent,
arg_id,
arg_flags,
arg_meas,
arg_unit,
arg_func,
arg_order=0,
arg_extra=null)
{

if(TRACE_K)console.log(str.conv("  div add, meas={n}, unit={n}",arg_meas,arg_unit));

if(arg_meas<=0)
return;




let new_slice=new std.a_div_slice();
new_slice.id=arg_id;
new_slice.drawer=arg_func;
new_slice.xtra_parms=arg_extra;
new_slice.draw_order=arg_order;
new_slice.unit=arg_unit;


if(arg_meas==std.U){


let fake_bounds;
if((arg_flags&DIVF_VERT)==0){

fake_bounds=new std.Rectangle(0,0,std.U,parent.bounds.height);
}else{

fake_bounds=new std.Rectangle(0,0,parent.bounds.width,std.U);
}







let fake_block=std.new_block(parent,fake_bounds,BKIND_MEASURING,"measuring",arg_func,null,parent.dest);


fake_block.is_measuring=true;
fake_block.max_h=0;
fake_block.max_v=0;


draw_slice(new_slice,fake_block);


if((arg_flags&DIVF_VERT)==0){
new_slice.mag=fake_block.max_h;
if(TRACE_AUTO)console.log(str.conv("-- after measurement, block {} width is {}",arg_func.name,fake_block.max_h));
}else{
new_slice.mag=fake_block.max_v;
if(TRACE_AUTO)console.log(str.conv("-- after measurement, block {} height is {}",arg_func.name,fake_block.max_v));
}






parent.removeChild(fake_block);

}else{

new_slice.mag=arg_meas;
}

if((arg_flags&DIVF_VERT)==0)
parent.div.horz_slices.push(new_slice);
else
parent.div.vert_slices.push(new_slice);

}






export function k_overlay(
parentb,
arg_func)
{

let overlay;

let label=arg_func.name+":overlay";
overlay=std.new_block(parentb,parentb.bounds,BKIND_OVERLAY,label,arg_func);
overlay.dest=parentb.dest;
parentb.appendChild(overlay);





arg_func.code(overlay);
}








export function is_block_obsolete(block){

let dependency;
let obsolete=false;
let node_seq;
let drawnseq=block.bseq;





for(dependency of block.usesz){



if(TRACE_OBSOLETE)console.log(str.conv("  testing {path}",dependency.path));


let pathx=std.path_to_pathx(dependency.path);



if(pathx.exists){

node_seq=pathx.lev[pathx.lastx].node.seq;
if(node_seq>drawnseq){
if(TRACE_OBSOLETE)console.log(str.conv("    -- OBSOLETE, node_seq={n}, drawn_seq={n}",node_seq,drawnseq));
return true;
}
}else{





if(dependency.seq==0){


}else{

if(TRACE_OBSOLETE)console.log("   -- OBSOLETE: used to exist, now doesn't exist");
return true;
}
}
}



return false;
}








function find_x_in_section(
x,
sect)
{
let i;

let dist;
let closest_dist=9999999;
let closest_ix=-1;



for(i in sect.fields){
dist=std.int_abs(x-sect.fields[i].startdot);
if(dist<closest_dist){
closest_dist=dist;
closest_ix=i;
}




dist=std.int_abs(x-(sect.fields[i].stopdot-1));
if(dist<closest_dist){
closest_dist=dist;
closest_ix=i;
}
}





return closest_ix;

}





function find_in_rows(
y,
b,
tbl)
{
let rx;
let dy;
let row_top;
let row_bot;


dy=0;
if(b.vert_scroll_link!=null){
dy=-std.getn(b.vert_scroll_link,std.F_s_position);
}

for(rx in tbl.rows){

row_top=tbl.rows[rx].rowbox.top+dy;
row_bot=tbl.rows[rx].rowbox.bottom+dy;
if(TRACE_XY)console.log(str.conv("  find_in_rows, i={}, y={}, top={}, bot={}",
rx,y,row_top,row_bot));
if((y>=row_top)&&(y<row_bot)){

return rx;
}
}


return-1;

}





function check_for_entry_activation(args){
debugger;
}





function find_xy_in_table(
b,
event,
localx,
localy){

let colx;
let rowx;
let colID;
let rowID;
let mytbl;


mytbl=b.tbl;



rowx=find_in_rows(localy,b,mytbl);

if(TRACE_XY)console.log(str.conv("  find_xy_in_table, local=[{n},{n}], rowx={}",localx,localy,rowx));

if(rowx>=0){
rowID=mytbl.rows[rowx].rowid;
if(rowID!=std.U){


let mykind=mytbl.rows[rowx].rowkind_ptr;


colx=find_x_in_section(localx,mykind);






colID=std.U;
if(colx>=0){

if(check_for_entry_activation(b,rowx,colx,event)){
if(TRACE_XY)console.log(str.conv("  absorbed by entry activation colx={}, col={}",colx,colID));
return true;
}

colID=mykind.fields[colx].colid;
}

if(TRACE_XY)console.log(str.conv("  sending to table tracker, colx={}, colID={n}",colx,colID));


if(colID!=std.U){

std.setv(0,0,b.extra,std.F_cell_id,std.F_x,colID);
std.setv(0,0,b.extra,std.F_cell_id,std.F_y,rowID);
std.setv(0,0,b.extra,std.F_cell,std.F_x,colx+1);
std.setv(0,0,b.extra,std.F_cell,std.F_y,rowx+1);
std.setv(0,0,b.extra,std.F_row_kind,mykind.kindID);


let r=mytbl.rows[rowx].rowbox;
std.setv(0,0,b.extra,std.F_box,std.F_left,r.left);
std.setv(0,0,b.extra,std.F_box,std.F_top,r.top);
std.setv(0,0,b.extra,std.F_box,std.F_width,r.width);
std.setv(0,0,b.extra,std.F_box,std.F_height,r.height);





return b.trakfunc(b,event);
}

}
}


return false;
}











export function callback_find_by_label(
b,
data)

{
if(TRACE_XY)console.log("callback_find_by_label, testing "+b.blabel+", against "+data.targ_blabel);

if(b.blabel==data.targ_blabel){

data.go=false;
data.found_block=b;
if(TRACE_XY)console.log("...FOUND");
}
}










export function callback_find_any(
b,
data)
{

let absorbval;

if(TRACE_XY)console.log("callback_find_any, block "+b.blabel);

if(b.tbl!=null){


}else if(b.drawer!=null){

let tracker=b.drawer.tracker;
if(tracker!=null){




if(b.xtra_parms!=null){


absorbval=tracker.apply(null,[b,data.event].concat(b.xtra_parms));
}else{

absorbval=tracker(b,data.event);
}
if(absorbval==std.Y){

data.go=false;
data.absorber=b;

}else{

if(TRACE_XY)console.log("  event was sent to block, but tracker not absorbed");
}
}else{

if(TRACE_XY)console.log("  inside block, no tracking func");
}
}

if(TRACE_XY&&!data.go)console.log("  CONSUMED ");

}





export function find_xy_in_grid(
b,
event,
localx,
localy)
{

let absorbval;
let colx;
let rowx;
let cumx;
let logcol;
let logrow;
let idx;
let idy;
let div=b.div;
let in_dead_space=false;

if(TRACE_XY)console.log(str.conv("  find_xy_in_grid, local=[{num}, {num}]",localx,localy));


let tracker=b.drawer.tracker;
if(tracker==null)
return false;


logcol=1;
for(colx=0;colx<div.horz_slices.length;colx++){
if((localx>=div.horz_slices[colx].box.left)&&(localx<div.horz_slices[colx].box.right)){

if(div.horz_slices[colx].drawer==null)
in_dead_space=true;
break;
}


if(div.horz_slices[colx].drawer!=null)
logcol++;
}


logrow=1;
for(rowx=0;rowx<div.vert_slices.length;rowx++){
if((localy>=div.vert_slices[rowx].box.top)&&(localy<div.vert_slices[rowx].box.bottom)){

if(div.vert_slices[rowx].drawer==null)
in_dead_space=true;
break;
}


if(div.vert_slices[rowx].drawer!=null)
logrow++;
}


if((logcol>div.ncols)||(logrow>div.nrows))
in_dead_space=true;









if(in_dead_space){
logcol=std.U;
logrow=std.U;
cumx=std.U;
idx=std.U;
idy=std.U;
}else{

if(div.grid_tblr)
cumx=(logcol-1)*div.nrows+logrow;
else
cumx=(logrow-1)*div.ncols+logcol;

idx=div.horz_slices[colx].id;
idy=div.vert_slices[rowx].id;
}




std.setv(0,0,b.extra,std.F_cell_seq,cumx);
std.setv(0,0,b.extra,std.F_cell,std.F_x,logcol);
std.setv(0,0,b.extra,std.F_cell,std.F_y,logrow);
std.setv(0,0,b.extra,std.F_cell_id,std.F_x,idx);
std.setv(0,0,b.extra,std.F_cell_id,std.F_y,idy);


if(b.xtra_parms!=null){


absorbval=tracker.apply(null,[b,event].concat(b.xtra_parms));
}else{

absorbval=tracker(b,event);
}

if(absorbval==std.Y){

if(g_last_majorx>0){

std.setv(0,0,std.runtime,std.F_major_steps,g_last_majorx,std.F_hist_cell_cum,cumx);
std.setv(0,0,std.runtime,std.F_major_steps,g_last_majorx,std.F_hist_cell,std.F_x,logcol);
std.setv(0,0,std.runtime,std.F_major_steps,g_last_majorx,std.F_hist_cell,std.F_y,logrow);
std.setv(0,0,std.runtime,std.F_major_steps,g_last_majorx,std.F_hist_cell_id,std.F_x,idx);
std.setv(0,0,std.runtime,std.F_major_steps,g_last_majorx,std.F_hist_cell_id,std.F_y,idy);
std.setv(0,0,std.runtime,std.F_major_steps,g_last_majorx,std.F_hist_absorber,b.blabel);
if(TRACE_LOGGING)console.log(str.conv(" -- updating absorber to {}",b.blabel));
}
return true;
}else{

return false;
}

}







export function do_pointer_event(
evkind,
evtime,
wherex,
wherey,
touch)
{
let globalx;
let globaly;
let capture_block;

if(std.TRACE_EVENTS)console.log(str.conv("do_pointer_event, xy=[{},{}], kind={}",wherex,wherey,evkind));
let event=new a_tree("$do_pointer_event",std.NF_UNSORTED);
std.setv(0,std.WHERE_LOOM,event,std.F_evkind,evkind);
std.setv(0,std.WHERE_LOOM,event,std.F_when,evtime);
std.setv(0,std.WHERE_LOOM,event,std.F_global_x,wherex);
std.setv(0,std.WHERE_LOOM,event,std.F_global_y,wherey);


if(touch.mod_shf)
std.setv(0,std.WHERE_LOOM,event,std.F_is_shift,std.Y);
if(touch.mod_alt)
std.setv(0,std.WHERE_LOOM,event,std.F_is_alt,std.Y);
if(touch.mod_cmd)
std.setv(0,std.WHERE_LOOM,event,std.F_is_cmd,std.Y);
if(touch.mod_ctl)
std.setv(0,std.WHERE_LOOM,event,std.F_is_ctrl,std.Y);






if(g_capture_bid!=0){





try_in_block(g_capture_block,event);


if(std.getn(event,std.F_evkind)==std.EV_DRAG_END)
release_mouse();
return;
}









globalx=std.getn(event,std.F_global_x);
globaly=std.getn(event,std.F_global_y);
if(TRACE_XY)console.log(str.conv("about to call visit_all, mouse=({n},{n})",globalx,globaly));


if(evkind==std.EV_HOVER)
std.setv(0,0,std.runtime,std.F_cursor_changed,std.N);

k_visit_all_containing(g_root_block,globalx,globaly,evkind,event);

if(evkind==std.EV_HOVER&&std.getn(std.runtime,std.F_cursor_changed)!=std.Y){
std.cursor_set(std.CURS_ARROW);

}

}





export function do_key_event(
when,
unicode,
keycode,
is_shift=false,
is_alt=false,
is_cmd=false,
is_ctrl=false
){

let b;

if(g_interface_locked==std.Y){
if(std.TRACE_EVENTS)console.log(str.conv("interface locked / suppressing key event, keycode=",keycode));
return;
}




let event=new a_tree("std","$do_key_event",std.NF_UNSORTED);


std.setv(0,std.WHERE_LOOM,event,std.F_evkind,std.EV_KEYBOARD);
std.setv(0,std.WHERE_LOOM,event,std.F_when,when);
std.setv(0,std.WHERE_LOOM,event,std.F_keycode,keycode);


if(unicode!=0)
std.setv(0,std.WHERE_LOOM,event,std.F_unicode,str.to_char(unicode));

console.log(str.conv(" --do_key_event, key={}, uni={}",keycode,unicode));


if(is_shift)
std.setv(0,std.WHERE_LOOM,event,std.F_is_shift,std.Y);
if(is_alt)
std.setv(0,std.WHERE_LOOM,event,std.F_is_alt,std.Y);
if(is_cmd)
std.setv(0,std.WHERE_LOOM,event,std.F_is_cmd,std.Y);
if(is_ctrl)
std.setv(0,std.WHERE_LOOM,event,std.F_is_ctrl,std.Y);



let sx=std.add_major_event(event,null);
if(TRACE_LOGGING)console.log(str.conv(" -- adding major event for key event at {}",sx));


let data=new Object();
data.go=true;
data.event=event;
data.absorber=null;



k_visit_blocks_bottom_up(g_root_block,callback_find_any,data);




b=data.absorber;
if(b!=null){

if(is_not_ide(b)){

if(TRACE_LOGGING)console.log(str.conv("  keystroke was absorbed by {}",b.blabel));
std.setv(0,0,std.runtime,std.F_major_steps,sx,std.F_hist_absorber,b.blabel);
}else{

if(TRACE_LOGGING)console.log(str.conv("  debugger keystroke, deleting major event {}",sx));
std.clear_tree(0,0,std.addr(std.runtime,std.F_major_steps,sx));
}

}else{


}

}







export function try_in_block(
b,
event)
{

let globalx;
let globaly;
let not_ide;



if(TRACE_XY)console.log(str.conv("  try_in_block {} id={}",b.blabel,b.bid));











let tracker=null;
if(b.drawer!=null)
tracker=b.drawer.tracker;
if(tracker!=null){



globalx=std.getn(event,std.F_global_x);
globaly=std.getn(event,std.F_global_y);


let local=global_to_local(b,globalx,globaly);
std.setv(0,0,event,std.F_x,local.x);
std.setv(0,0,event,std.F_y,local.y);





if(TRACE_XY){
console.log(str.conv("try_in_block, {str}, evkind={n}, global=[{n},{n}], local=[{n},{n}], bounds={rect}",
b.blabel,std.getn(event,std.F_evkind),globalx,globaly,local.x,local.y,b.bounds));
}


if(g_last_majorx<0){

not_ide=is_not_ide(b);
if(not_ide){



if(TRACE_LOGGING)console.log(str.conv(" -- adding major event for ptr event, first is {}",b.blabel));
g_last_majorx=std.add_major_event(event,null);
}else{


if(TRACE_LOGGING)console.log(str.conv(" -- not logging IDE event {}",b.blabel));
g_last_majorx=0;
}
}

if(b.tbl!=null){






if(find_xy_in_table(b,event,local.x,local.y)){
if(TRACE_XY)console.log("  CONSUMED by table");
return true;
}else{
if(TRACE_XY)console.log("  NOT CONSUMED by table");
}

}else if(b.div!=null&&b.div.is_grid){
if(TRACE_XY)console.log("  grid event to "+b.blabel);



if(find_xy_in_grid(b,event,local.x,local.y)){
if(TRACE_XY)console.log("  CONSUMED by grid");
return true;
}else{
if(TRACE_XY)console.log("  NOT CONSUMED by grid");
}

}else{















let absorbed;





if(b.xtra_parms!=null){


absorbed=tracker.apply(null,[b,event].concat(b.xtra_parms));
}else{

absorbed=tracker(b,event);
}

if(absorbed==std.Y){
if(TRACE_XY)console.log("  CONSUMED by block");


if(g_last_majorx>0){
if(TRACE_LOGGING)console.log(str.conv(" -- updating absorber to {}",b.blabel));
std.setv(0,0,std.runtime,std.F_major_steps,g_last_majorx,std.F_hist_absorber,b.blabel);
}

return true;
}else{
if(TRACE_XY)console.log("  NOT CONSUMED by block");
}
}
}



if(b.is_modal){

if(TRACE_XY)console.log("  MODAL: silent absorption of pointer event");









return true;
}

return false;
}









export function k_visit_blocks_bottom_up(
b,
callback,
data){





let children=b.childNodes;
let child;
let n=children.length;
let i;
let bx;


for(i=1;i<=n;i++){
if(!data.go)

break;

bx=n-i;
child=children[bx];
if(child.hasOwnProperty('bid')){

if(TRACE_VISIT)console.log(str.conv("  deeper to {str}",child.blabel));
k_visit_blocks_bottom_up(child,callback,data);
}
}



if(data.go){
if(TRACE_VISIT)console.log(str.conv("k_visit_blocks_bottom_up passed to {str}, seq={n}",b.blabel,b.bseq));
callback(b,data);
}

}







export function k_visit_blocks_top_down(
b,
callback,
data){


if(data.go){
if(TRACE_OBSOLETE)console.log(str.conv("k_visit_blocks_top_down {str}, seq={n}",b.blabel,b.bseq));
callback(b,data);
}





let children=b.childNodes;
let child;
let n=children.length;
let i;


for(i=0;i<n;i++){
if(!data.go)

break;


child=children[i];
if(child.hasOwnProperty('bid')){
gg_depth+=1;
k_visit_blocks_top_down(child,callback,data);
gg_depth-=1;
}
}


}







export function k_find_block_by_label(
b,
label){

let result;





let children=b.childNodes;
let child;
let n=children.length;
let i;


for(i=0;i<n;i++){
child=children[i];
if(child.hasOwnProperty('bid')){

result=k_find_block_by_label(child,label);
if(result!=null)
return result;
}
}




if(TRACE_FIND)console.log(str.conv("k_find_block_by_label, curr={}, targ={}",b.blabel,label));
if(b.blabel==label)
return b;


return null;

}







export function k_find_block_by_locator(
b,
targ_label,
targ_locater){

let result;





let children=b.childNodes;
let child;
let n=children.length;
let i;


for(i=0;i<n;i++){
child=children[i];
if(child.hasOwnProperty('bid')){

result=k_find_block_by_locator(child,targ_label,targ_locater);
if(result!=null)
return result;
}
}


if(TRACE_FINDBX)console.log(str.conv("testing {str} {n}, targ {str} {n}",b.blabel,b.locator,targ_label,targ_locater));



if(b.blabel==targ_label&&b.locator==targ_locater){
if(TRACE_FINDBX)console.log("  FOUND!");
return b;
}


return null;

}






export function k_find_block_by_id(b,targid){
let result;





let children=b.childNodes;
let child;
let n=children.length;
let i;


for(i=0;i<n;i++){
child=children[i];
if(child.hasOwnProperty('bid')){

result=k_find_block_by_id(child,targid);
if(result!=null)
return result;
}
}




if(b.bid==targid)
return b;


return null;
}









export function global_to_local(block,globalx,globaly){



let cornerx=globalx;
let cornery=globaly;
let element=block;
let tx_ss;
let ty_ss;


cornerx-=window.scrollX;
cornery-=window.scrollY;



do{
cornerx-=element.offsetLeft;
cornery-=element.offsetTop;




let ss=element.style.transformOrigin;
if(ss!=""){
let list=ss.split(" ");
if(list[0].length>2)
cornerx-=Number(list[0].substring(0,list[0].length-2));
if(list[1].length>2)
cornery-=Number(list[1].substring(0,list[1].length-2));
}

element=element.offsetParent;
}while(element!=null);

return new std.Point(cornerx,cornery);

}





export function local_to_global_p(block,local=null){



let cornerx=0;
let cornery=0;
let element=block;
let tx_ss;
let ty_ss;

if(local!=null){

cornerx=local.x;
cornery=local.y;
}

let ss=element.style.transformOrigin;
if(ss!=""){
let list=ss.split(" ");

if(list[0].length>2)
cornerx+=Number(list[0].substring(0,list[0].length-2));
if(list[1].length>2)
cornery+=Number(list[1].substring(0,list[1].length-2));
}

let bbounds=block.getBoundingClientRect();



let result=new std.Point(bbounds.left+window.scrollX+cornerx,
bbounds.top+window.scrollY+cornery);
return result;

}





export function local_to_global_r(block,local=null){



let bbounds=block.getBoundingClientRect();
let result;

if(local==null){

result=new std.Rectangle(bbounds.left+window.scrollX,bbounds.top+window.scrollY,bbounds.width,bbounds.height);
}else{

result=new std.Rectangle(bbounds.left+window.scrollX+local.left,
bbounds.top+window.scrollY+local.top,
local.width,local.height);
}
return result;

}





export function k_isolate(
parent,
bounds,
label,


drawer,
args
){

let b=std.new_block(parent,bounds,BKIND_SUBSET,label,drawer);


b.xtra_parms=args;
if(TRACE_XTRA)console.log(str.conv("@@@ inside k_isolate, xtra.len={}",b.xtra_parms.length));


if(args.length>0){

drawer.code.apply(null,[b].concat(args));
}else{

drawer.code(b);
}
}











let g_logged;


export function k_visit_all_containing(
b,
globalx,
globaly,
evkind,
event){

let absorbed;
let gbounds;
let is_inside_block;



gbounds=local_to_global_r(b);
is_inside_block=(b.blabel==ROOT_BLABEL)||std.xy_in_rect(globalx,globaly,gbounds);
if(TRACE_XY)console.log(str.conv(" testing #{}:{str}, xy=[{},{}], bounds={rect}, gbounds={rect}, inside={}",
b.bid,b.blabel,globalx,globaly,b.bounds,gbounds,is_inside_block));

if(is_inside_block){






let children=b.childNodes;
let child;
let n=children.length;
let i;
let bx;


for(i=1;i<=n;i++){
bx=n-i;
child=children[bx];
if(child.hasOwnProperty('bid')){


if(TRACE_XY)console.log(str.conv("  recursive to child {}: {str}",i,child.blabel));
if(k_visit_all_containing(child,globalx,globaly,evkind,event))
return true;

}else{

if(TRACE_XY)console.log("child "+String(i)+" is not a block: "+String(child));
}
}


absorbed=try_in_block(b,event);


if(absorbed){
if(TRACE_XY)console.log("    ...absorbed event");




if(evkind==std.EV_DRAG_BEGIN&&g_capture_bid==0){
capture_mouse(b);
}
}


return absorbed;
}



return false;

}






export function callback_compare_label(
b,
data){

if(TRACE_K)console.log("callback_compare_label, "+b.blabel+" against "+data.label);

if(b.blabel==data.label){

data.result=b;
data.go=false;
}

}








export function callback_dump(
b,
data){

console.log(b.blabel+str.conv(": bounds={rect}, depth={}",b.bounds,gg_depth));



}





export function dump_display_list(){
let data;

console.log("=== ALL BLOCKS ===");
data={
go:true
};
gg_depth=0;
k_visit_blocks_top_down(g_root_block,callback_dump,data);
console.log("=== ..end blocks.. ===");
}




export function k_del_all_children(b){

if(b==null)return;
if(TRACE_OBSOLETE)console.log("  k_del_all_children, starting at "+b.blabel);

































let children=b.childNodes;
let child;
let n=children.length;
let bx;


for(bx=n-1;bx>=0;bx--){
child=children[bx];

if(child.nodeName!="svg"){


if(TRACE_OBSOLETE)console.log(`  -removing node ${child.nodeName}`);
b.removeChild(child);
}


let base=b.last_svg_ptr;
if(base!=undefined){
while(base.firstChild){
base.removeChild(base.firstChild);
}
}
















}



}





export function k_find_by_label(targlabel){
let data;

data={
go:true,
label:targlabel,
result:null
};
k_visit_blocks_bottom_up(g_root_block,callback_compare_label,data);
return data.result;

}










function is_not_ide(b){
if(b==null)
return true;



while(b!=null){
if(b==g_root2_block){

return true;
}
b=b.parent;
}


return false;
}













export function rebuild_affected_blocks(b){
let do_children;
let endrow;

if(TRACE_OBSOLETE)console.log(str.conv("rebuild_affected block={str}, id={n}, seq={n}, ndep={}",b.blabel,b.bid,b.bseq,b.usesz.length));

do_children=true;


if(is_block_obsolete(b)){




if(LOG_DRAW&&g_first_mon_draw&&is_not_ide(b)){
g_first_mon_draw=false;
std.add_major_event(DRAW_EVENT,b);
}









if(b.xtra_parms!=null){

b.drawer.code.apply(null,[b].concat(b.xtra_parms));
}else{

b.drawer.code(b);
}



if(TRACE_OBSOLETE)console.log(str.conv("  ..end rebuild of {str}, seq={n}",b.blabel,b.bseq));


do_children=false;

}


if(do_children){






let children=b.childNodes;
let child;
let n=children.length;
let i;


for(i=0;i<n;i++){
child=children[i];
if(child.hasOwnProperty('bid')){

rebuild_affected_blocks(child);
}
}


}
}






export function rebuild_all(){
if(TRACE_K)console.log("--- rebuild_all");









let maind=std.aaaa.main_drawer;





if(maind!=null){
if(g_root_block==null){




let horz=std.getn(std.runtime,std.F_window_horz);
let vert=std.getn(std.runtime,std.F_window_vert);
let interior=new std.Rectangle(0,0,horz,vert);
g_root_block=std.new_block(null,interior,BKIND_ROOT,ROOT_BLABEL,maind);
std.set_root_block();

}



if(maind.tracker!=null){

let resize_event=new a_tree("std","$resize_event");
std.setv(0,0,resize_event,std.F_evkind,std.EV_RESIZE);
std.setv(0,0,resize_event,std.F_when,0);
if(LOG_DRAW)std.add_major_event(resize_event,g_root_block);
maind.tracker(g_root_block,resize_event);
}


if(LOG_DRAW)std.add_major_event(DRAW_EVENT,g_root_block);


maind.code(g_root_block);

if(TRACE_K)dump_display_list();
}

}





export function window_changed_size(){


if(g_root_block==null){
if(TRACE_K)console.log("window changed size, but haven't drawn yet, ignore");
return;
}


k_set_bounds(g_root_block,std.TOTAL_INTERIOR);

if(TRACE_K)console.log("window_changed_size, root_bounds="+String(g_root_block.bounds));


k_del_all_children(g_root_block);
std.aaaa.main_drawer.code(g_root_block);
}












export function check_tree_for_dirty(node){
let child;
let some_dirty;


some_dirty=false;
for(child of node.children){



if((child.eflags&std.EF_IS_DERIVED)!=0){


if(TRACE_OBSOLETE)console.log(str.conv("  checking child.sub={n}",child.sub));
if(g_fields_to_mark.indexOf(child.sub)>=0){

if(TRACE_OBSOLETE)console.log(str.conv("  marking field as dirty {n}",child.sub));
child.eflags|=std.EF_IS_DIRTY;
some_dirty=true;




}
}


if(some_dirty)
node.seq=std.g_currseq;

if(child.children!=null)

check_tree_for_dirty(child);
}

}












export function trickle(seconds){
let topnode;
let ff;


if(g_root_block==null){
return;
}



if(g_fields_to_mark.length!=0){
if(TRACE_OBSOLETE){
console.log("trickle, checking for marked fields, nmarked="+String(g_fields_to_mark.length)+", marked_fields=");
for(ff of g_fields_to_mark)
console.log(str.conv(" {n}",ff));
}




for(topnode of a_tree.g_toplevel_nodes){

if(TRACE_OBSOLETE){
console.log("trickle, check top node "+topnode.val);
}
check_tree_for_dirty(topnode);
}
g_fields_to_mark.length=0;
}



if(TRACE_OBSOLETE&&(g_last_drawn_seq!=std.g_currseq))console.log(str.conv("trickle, last_drawn={}, currseq={}",g_last_drawn_seq,std.g_currseq));
if(g_last_drawn_seq<std.g_currseq){




g_first_mon_draw=true;
rebuild_affected_blocks(g_root_block);



if(std.aaaa.menubar_func!=null){
g_first_mon_draw=false;
rebuild_affected_blocks(g_menu_block);
}


g_last_drawn_seq=std.g_currseq;
if(TRACE_OBSOLETE)console.log(str.conv("..end trickle, last_drawn={n}",g_last_drawn_seq));
}




}







export function k_init(){
console.log("--- k_init");
DRAW_EVENT=new a_tree("std","$DRAW_EVENT");
std.setv(0,0,DRAW_EVENT,std.F_evkind,std.EV_DRAW);
g_interface_locked=false;
g_capture_bid=0;
g_capture_block=null;

g_field_mark_func={};
g_fields_to_mark=[];
g_last_drawn_seq=1000;
}
