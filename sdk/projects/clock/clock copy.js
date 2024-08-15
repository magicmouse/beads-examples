//  JS module clock
// beads ver 0.53 compiled Mon Sep 5 16:30:20 GMT-0700 2022
import { U, Y, N, POP, VAL, VNP, setv, gets, getn, adr, lgp, log } from '../../runtime_053/beads_std.js';
import * as std from '../../runtime_053/beads_std.js';
import * as str from '../../runtime_053/beads_str.js';
export const CODE_HASH = 0x6a7b7375;
const _M = std.MODULES.push("clock")-1;
std.rtl_init();
std.aaaa.main_init = main_init;
std.aaaa.main_drawer = new std.a_function(_M, "main_draw", main_draw);
//------- enums
const F_id=9007194054819565; std.ENUMS[9007194054819565]="id"; std.FIELDS[F_id]=!0;
const R_record_21=9007193998792859; std.ENUMS[9007193998792859]="record_21";
const F_nseconds=9007191173019919; std.ENUMS[9007191173019919]="nseconds"; std.FIELDS[F_nseconds]=!0;
const BLACKBOX_ID=9007193535846421; std.ENUMS[9007193535846421]="BLACKBOX_ID";
//[reflAAA]

std.merge_lit(_M,0,std.META,"clock",std.F_mod_const, "BLACKBOX_PORT", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, "ENABLE_DUMP", std.F_vv_typek, 1, VAL, std.TYPE_YESNO
, POP, POP, "GRAD1", std.F_vv_typek, 1, VAL, std.TYPE_RECORD, 2, VAL, std.R_a_gradient, 3, VAL, "std");

std.merge_lit(_M,0,std.META,"clock",std.F_mod_vars, "g", std.F_vv_typek, 1, VAL, std.TYPE_RECORD, 2, VAL, std.R_a_date, 3, VAL, "std", POP, POP, "g_alarm", std.F_vv_typek, 
1, VAL, std.TYPE_RECORD, 2, VAL, R_record_21, POP, POP, "is_paused", std.F_vv_typek, 1, VAL, std.TYPE_YESNO);

std.merge_lit(_M,0,std.META,"clock",std.F_mod_funcs, "d_clock", std.F_vv_cat, VAL, "String conversions|Basic|", std.F_vv_code, VAL, "draw d_clock(\n	diameter\n	) -----\n	//log \"draw clock sec={g.dt_second}, first={runtime.major_firstx}, step={runtime.major_stepx}\"\n	draw_circle( x:0, y:0, fill:GREEN, diam:diameter, color:DARK_GREEN, thick:diameter /. 40, pos:0)\n\n	//  sweep hour hand\n	draw_line( x1:0, y1:0, color:BROWN, angle:(g.dt_hour + g.dt_minute/60)*30 - 90 deg, len:diameter*0.30, thick:diameter/.20)\n\n	//  sweep minute hand\n	draw_line( x1:0, y1:0, color:ORANGE, angle:(g.dt_minute + g.dt_second/60)*6 - 90 deg, len:diameter*0.40, thick:diameter/.24)\n\n	//  second hand (will jump because we only update once per second)\n	draw_line( x1:0, y1:0, color:BLUE, angle:g.dt_second*6 - 90 deg, len:diameter*0.45, thick:diameter/.30)\n----------------------\ntrack EV_KEYBOARD\n	//  spacebar will toggle stopping time\n	if e.keycode == KEYCODE_SPACE\n		if ENABLE_DUMP\n			if e.is_shift\n				//  shift-space sends the bbox file\n				debug_blackbox_send('ws://127.0.0.1', BLACKBOX_PORT, BLACKBOX_ID, \"Clock\")\n			else\n				//  just save locally\n				var datess = time_to_str(\"[year]-[month2]-[day2]@[hour][minute]-[second]\")\n				debug_blackbox_write(\"Clock-{datess}\", kind:\"Dump file\") \n		toggle is_paused\n		if is_paused\n			set_clock_scale(0)\n		else\n			set_clock_scale(1)\n		return Y\n	elif e.unicode == \"a\"\n		//  set alarm\n		g_alarm.nseconds = 4\n		log \"--- starting countdown\"\n		g_alarm.id = loom_timer(do_countdown, delay:1 sec, interval:1 sec, reps:4)\n		return Y\n	return N // we don't use this key, let the debugger have it\n\n===================\n"
, std.F_vv_funck, VAL, std.FK_DRAW, std.F_vv_funcx, VAL, 4, std.F_vv_line1, VAL, 59, std.F_vv_line2, VAL, 100, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn
, VAL, "diameter", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, POP, POP, "do_countdown", std.F_vv_cat, VAL, "String conversions|Basic|", std.F_vv_code, VAL, "calc do_countdown\n	log \"--- countdown {g_alarm.nseconds}\"\n	dec g_alarm.nseconds\n\n\n"
, std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 1, std.F_vv_line1, VAL, 100, std.F_vv_line2, VAL, 105, POP, "do_tick", std.F_vv_cat, VAL, "String conversions|Basic|"
, std.F_vv_code, VAL, "calc do_tick -- is called once a second\n	//  set our state variable g which will cause redraw to happen automatically\n	merge seconds_to_date(now) ===> g  --  take our local clock in epoch seconds and convert to the date/time in our local city\n\n===================\n"
, std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 5, std.F_vv_line1, VAL, 32, std.F_vv_line2, VAL, 37, POP, "main_draw", std.F_vv_cat, VAL, "String conversions|Basic|"
, std.F_vv_code, VAL, "draw main_draw\n	//  fill the screen with a background color\n	draw_rect(grad:GRAD1)\n\n	//  to allow rewind before init, ignore draw if hour is U\n	//if g.dt_hour == U\n	//	return\n\n	//  calculate the size of the clock box, by taking 80% of the smaller of the total width and height\n	var diameter ⇐ 0.8*min(bb.width, bb.height)\n\n	//  calculate a square centered on the screen\n	var area : a_rect <=== solve_rect(basis:bb, pin:MID_CENTER, width:diameter, height:diameter, round:Y)\n	\n	//  indent from the total screen size, set coordinate origin at the middle of the box\n	layer area:area, origin:5 d_clock(diameter)\n\n	if g_alarm.nseconds > 0\n		var foot <=== solve_rect(basis:bb, pin:BOT_CENTER, height:bb.height/14)\n		draw_str(g_alarm.nseconds, box:foot, size:0.6, color:PURPLE)\n\n===================\n"
, std.F_vv_funck, VAL, std.FK_DRAW, std.F_vv_funcx, VAL, 2, std.F_vv_line1, VAL, 37, std.F_vv_line2, VAL, 59, POP, "main_init", std.F_vv_cat, VAL, "String conversions|Basic|"
, std.F_vv_code, VAL, "calc main_init\n\n	//  set up a never ending callback to 'do_tick' every second, starting immediately\n	loom_timer(do_tick, delay:0 sec, interval:1 sec, reps:INFINITY)\n	g_alarm.nseconds = 0\n\n===================\n"
, std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 3, std.F_vv_line1, VAL, 25, std.F_vv_line2, VAL, 32);

std.merge_lit(_M,0,std.META,"clock",std.F_mod_recs, R_record_21, F_id, 1, VAL, std.TYPE_NUM, POP, F_nseconds, 1, VAL, std.TYPE_NUM, POP, std.F_vv_cat, VAL, "String conversions|Basic|"
);
function $eval(p) { return eval(p) }
std.setv(_M,0,std.META,"clock",std.F_mod_eval,$eval);
//[reflZZZ]
//-------  func const for clock
const do_countdown_F = new std.a_function(_M, "do_countdown", do_countdown);
std.FUNCS[do_countdown_F.hash]=do_countdown_F;
const d_clock_F = new std.a_function(_M, "d_clock", d_clock, track_d_clock);
std.FUNCS[d_clock_F.hash]=d_clock_F;
const do_tick_F = new std.a_function(_M, "do_tick", do_tick);
std.FUNCS[do_tick_F.hash]=do_tick_F;
//-------  top nodes
const ENABLE_DUMP = Y;
const BLACKBOX_PORT = 3333;
const GRAD1 = new std.a_tree(_M,"GRAD1", std.NF_TOPLEVEL|std.NF_LOGGED, std.tree_lit(_M, 10, std.F_grad_shape, VAL, std.LINEAR_GRADIENT, std.F_grad_angle, VAL, std.GRAD_TO_BOTTOM
, std.F_grad_stops, 1, std.F_stop_pos, VAL, 0, std.F_stop_color, VAL, std.CHOCOLATE, POP, 2, std.F_stop_pos, VAL, 48, std.F_stop_color, VAL, std.BEIGE, POP, 3, std.F_stop_pos
, VAL, 52, std.F_stop_color, VAL, std.BEIGE, POP, 4, std.F_stop_pos, VAL, 100, std.F_stop_color, VAL, std.CHOCOLATE, POP, POP));
let g = new std.a_tree(_M,"g", std.NF_TOPLEVEL|std.NF_STATEFUL|std.NF_LOGGED);
let is_paused = N;
let g_alarm = new std.a_tree(_M,"g_alarm", std.NF_TOPLEVEL|std.NF_STATEFUL|std.NF_LOGGED);

//====================
//   d_clock
//====================
function d_clock(b, diameter) {
std.k_enter(b);
  std.draw_circle(b, { x:0, y:0, fill:std.GREEN, diam:diameter, color:std.DARK_GREEN, thick:std.idiv(diameter, 40), pos:0 });
  std.draw_line(b, { x1:0, y1:0, color:std.BROWN, angle:std.meas(std.sub(std.mul(std.add(getn(g, std.F_dt_hour), std.div(getn(g, std.F_dt_minute), 60)), 30), 90), std.N_deg, 
  std.Y_Angle), len:std.mul(diameter, 0.3), thick:std.idiv(diameter, 20) });
  std.draw_line(b, { x1:0, y1:0, color:std.ORANGE, angle:std.meas(std.sub(std.mul(std.add(getn(g, std.F_dt_minute), std.div(getn(g, std.F_dt_second), 60)), 6), 90), std.N_deg
  , std.Y_Angle), len:std.mul(diameter, 0.4), thick:std.idiv(diameter, 24) });
  std.draw_line(b, { x1:0, y1:0, color:std.BLUE, angle:std.meas(std.sub(std.mul(getn(g, std.F_dt_second), 6), 90), std.N_deg, std.Y_Angle), len:std.mul(diameter, 0.45), thick
  :std.idiv(diameter, 30) });
std.k_leave(b);
}


//====================
//   track_d_clock
//====================
function track_d_clock(b, e, diameter) {
  //---------------
  //   on EV_KEYBOARD
  //---------------
  if (std.getn(e, std.F_evkind) == std.EV_KEYBOARD) {
    if (std.eq2(getn(e, std.F_keycode), std.KEYCODE_SPACE)) {
      if (ENABLE_DUMP === Y) {
        if (getn(e, std.F_is_shift) === Y) {
          std.debug_blackbox_send("ws://127.0.0.1", BLACKBOX_PORT, BLACKBOX_ID, "Clock", {});
        } else {
          let datess = str.time_to_str("[year]-[month2]-[day2]@[hour][minute]-[second]", {});
          std.debug_blackbox_write(std.cat("Clock-", datess), { kind:"Dump file" });
        }
      }
      is_paused = std.tog(is_paused);
      if (is_paused === Y) {
        std.set_clock_scale(0);
      } else {
        std.set_clock_scale(1);
      }
      std.k_leave(b);
      return Y;
    } else if (std.eq2(gets(e, std.F_unicode), "a")) {
      std.path_setv(_M, 40093, std.adr(g_alarm, F_nseconds), 4);
      log(lgp("--- starting countdown"));
      std.path_setv(_M, 40095, std.adr(g_alarm, F_id), std.loom_timer(do_countdown_F, { delay:std.meas(1, std.N_sec, std.Y_Time), interval:std.meas(1, std.N_sec, std.Y_Time), reps
      :4 }));
      std.k_leave(b);
      return Y;
    }
    std.k_leave(b);
    return N;
  return Y;
  }
  return N;
}

//====================
//   main_draw
//====================
export function main_draw(b) {
std.k_enter(b);
  std.draw_rect(b, { grad:std.adr(GRAD1) });
  let diameter = std.mul(0.8, std.min(b.bounds.width, b.bounds.height));
  let area = new std.a_tree(_M,"area", 0, std.solve_rect({ basis:std.adr(b.extra, std.F_box), pin:std.MID_CENTER, width:diameter, height:diameter, round:Y }));
  var b2=std.k_layer(b, std.freeze(d_clock_F, [diameter]), { area:area, pin:5 });
  d_clock(b2, diameter);
  if (std.gt2(getn(g_alarm, F_nseconds), 0)) {
    let foot = new std.a_tree(_M,"foot", 0, std.solve_rect({ basis:std.adr(b.extra, std.F_box), pin:std.BOT_CENTER, height:std.div(b.bounds.height, 14) }));
    std.draw_str(b, getn(g_alarm, F_nseconds), { box:std.adr(foot), size:0.6, color:std.PURPLE });
  }
std.k_leave(b);
}


//====================
//   do_countdown
//====================
function do_countdown() {
  log(lgp(std.cat("--- countdown ", str.to_str(getn(g_alarm, F_nseconds), {dig:2}))));
  std.tree_sub(_M, 10102, 1, std.adr(g_alarm, F_nseconds));
}


//====================
//   do_tick
//====================
function do_tick() {
  std.merge_tree(_M, 50034, std.seconds_to_date(std.now, {}), std.adr(g));
}


//====================
//   main_init
//====================
export function main_init() {
  std.loom_timer(do_tick_F, { delay:std.meas(0, std.N_sec, std.Y_Time), interval:std.meas(1, std.N_sec, std.Y_Time), reps:std.INFINITY });
  std.path_setv(_M, 30029, std.adr(g_alarm, F_nseconds), 0);
}

std.setv(_M, 0, std.runtime, std.F_app_name, "clock");
main_init();
