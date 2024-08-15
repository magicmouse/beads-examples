//  JS module calculator
// beads ver 0.53 compiled Tue Sep 6 11:57:37 GMT-0700 2022
import { U, Y, N, POP, VAL, VNP, setv, gets, getn, adr, lgp, log } from '../../runtime_053/beads_std.js';
import * as std from '../../runtime_053/beads_std.js';
import * as str from '../../runtime_053/beads_str.js';
export const CODE_HASH = 0xd33a59e6;
const _M = std.MODULES.push("calculator")-1;
std.rtl_init();
std.aaaa.main_init = main_init;
std.aaaa.main_drawer = new std.a_function(_M, "main_draw", main_draw);
//------- enums
const F_ss=9007193665285566; std.ENUMS[9007193665285566]="ss"; std.FIELDS[F_ss]=!0;
const R_a_term=9007193840001586; std.ENUMS[9007193840001586]="a_term";
const R_a_state=9007192953576597; std.ENUMS[9007192953576597]="a_state";
const F_fresh=9007192114719380; std.ENUMS[9007192114719380]="fresh"; std.FIELDS[F_fresh]=!0;
const F_chain_val=9007192097512801; std.ENUMS[9007192097512801]="chain_val"; std.FIELDS[F_chain_val]=!0;
const F_terms=9007192892604483; std.ENUMS[9007192892604483]="terms"; std.FIELDS[F_terms]=!0;
const F_op=9007193787363399; std.ENUMS[9007193787363399]="op"; std.FIELDS[F_op]=!0;
const F_termx=9007193043603054; std.ENUMS[9007193043603054]="termx"; std.FIELDS[F_termx]=!0;
const F_chain_op=9007190437095029; std.ENUMS[9007190437095029]="chain_op"; std.FIELDS[F_chain_op]=!0;
//[reflAAA]

std.merge_lit(_M,0,std.META,"calculator",std.F_mod_const, "C_ARITH", std.F_vv_typek, 1, VAL, std.TYPE_COLOR, POP, POP, "C_DIGIT", std.F_vv_typek, 1, VAL, std.TYPE_COLOR, POP
, POP, "C_OP", std.F_vv_typek, 1, VAL, std.TYPE_COLOR, POP, POP, "HAIR", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, "KEYCAPS", std.F_vv_typek, 1, VAL, std.TYPE_ARRAY, 
2, VAL, std.TYPE_ANY, POP, POP, "KEYCOLORS", std.F_vv_typek, 1, VAL, std.TYPE_ARRAY, 2, VAL, std.TYPE_ANY, POP, POP, "SPACING", std.F_vv_typek, 1, VAL, std.TYPE_NUM);

std.merge_lit(_M,0,std.META,"calculator",std.F_mod_vars, "cellsize", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, "g", std.F_vv_typek, 1, VAL, std.TYPE_RECORD, 2, VAL, 
R_a_state, POP, POP, "keys_h", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, "keys_v", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, "result_v", std.F_vv_typek, 1, VAL, 
std.TYPE_NUM);

std.merge_lit(_M,0,std.META,"calculator",std.F_mod_funcs, "add_digit", std.F_vv_code, VAL, "calc add_digit(\n	digit : str // digit to append to current term\n	)\n	//  if we are starting fresh, then erase what was there before\n	//  we also replace the previous string if it was a leading zero\n	if g.fresh or g.terms[g.termx].ss == \"0\"\n		g.terms[g.termx].ss = \"\" // clear whatever was there\n	digit &=> g.terms[g.termx].ss\n	g.fresh = N\n\n"
, std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 7, std.F_vv_line1, VAL, 225, std.F_vv_line2, VAL, 235, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn
, VAL, "digit", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, POP, POP, "arithmetic", std.F_vv_code, VAL, "calc arithmetic(\n	operand : str  -- operation like \"+\", must match keycap\n	term1   : num\n	term2   : num\n	) : num -- resulting value\n	var result\n	case operand //  note: these operators must match the keycaps\n	| '+'\n		term1 + term2 => result\n	| '−'\n		term1 - term2 => result\n	| 'x'\n		term1 * term2 => result\n	| '÷'\n		term1 / term2 => result\n	else\n		result = ERR\n	return result\n	\n"
, std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 4, std.F_vv_line1, VAL, 206, std.F_vv_line2, VAL, 225, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn
, VAL, "operand", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, 2, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "term1", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP
, POP, 3, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "term2", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP
, "d_keygrid", std.F_vv_code, VAL, "grid d_keygrid\n	horz slice\n		skip SPACING al\n		loop reps:4\n			add 60 al\n			skip SPACING al\n	vert slice\n		skip SPACING al\n		loop reps:5\n			add 60 al\n			skip SPACING al\n\n	//  inside grid cell draw function, b has properties b.box, cell_seq, cell:a_xy, nrows, ncols\n	cell\n		draw_rect(fill:KEYCOLORS[b.cell_seq], corner:6 pt)\n		draw_str(KEYCAPS[b.cell_seq], size:b.box.height, color:WHITE)\n"
, std.F_vv_funck, VAL, std.FK_DRAW, std.F_vv_funcx, VAL, 6, std.F_vv_line1, VAL, 88, std.F_vv_line2, VAL, 104, POP, "d_keygrid_track", std.F_vv_code, VAL, "track EV_TAP\n	//  respond to the command\n	case b.cell_seq\n	| 1  //  clear\n		do_clear\n\n	| 2  //  plusminus - change the sign of the current term\n		sign_change(g.termx)\n\n	| 3  // percent - divide the current term by 100\n		do_percent\n\n	| 4, 8, 12, 16   //  arithmetic operations\n		do_arith(KEYCAPS[b.cell_seq])\n	\n	| 17  // future feature - backspace\n		nop // do_backspace\n\n	| 19  // period\n		do_period\n\n	| 20  //  equals\n		do_equals\n\n	else\n		//  must be a digit\n		add_digit(KEYCAPS[b.cell_seq])	\n\n// calc do_backspace\n// 	log \"backspace\"\n//  reserved for future undo functionality\n//  this will test ability to read code and extend it\n	\n"
, std.F_vv_funck, VAL, std.FK_DRAW, std.F_vv_funcx, VAL, 2, std.F_vv_line1, VAL, 104, std.F_vv_line2, VAL, 137, POP, "d_result", std.F_vv_code, VAL, "draw d_result\n	draw_rect(fill:#0D161F)\n\n	//  build the string out of the active terms\n	var s : str = \"\"\n	loop across:g.terms index:i\n		g.terms[i].ss &=> s\n		if g.terms[i].op <> U\n			HAIR & g.terms[i].op & HAIR &=> s  // append the operator\n\n	if (s == \"\")\n		s = \"0\"  //  when nothing is entered into our expression, call it zero\n\n	draw_str(s, size:0.5, just:RIGHT, indent:20 pt, color:WHITE)\n\n"
, std.F_vv_funck, VAL, std.FK_DRAW, std.F_vv_funcx, VAL, 3, std.F_vv_line1, VAL, 71, std.F_vv_line2, VAL, 86, POP, "do_arith", std.F_vv_code, VAL, "calc do_arith(\n	operand : str  // '+', etc\n	)\n	if g.terms[g.termx].ss == \"\"\n		//  we have no term, so treat that as replacing the previously entered operation\n		//  and if this is the very beginning and we have no prior operation, ignore it\n		if g.termx == 1\n			// starting with a plus on an empty term is ignored\n			return\n	\n		//  multiple operators in a row, rewrite the previous operator\n		g.terms[g.termx-1].op = operand\n	else\n		//  we did have a term, advance to the next term \n		g.terms[g.termx].op = operand\n		inc g.termx\n		g.terms[g.termx].ss = \"\" // empty term\n\n"
, std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 8, std.F_vv_line1, VAL, 235, std.F_vv_line2, VAL, 253, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn
, VAL, "operand", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, POP, POP, "do_clear", std.F_vv_code, VAL, "calc do_clear // clear the current term to blank.\n	//  if the user has entered 123+, there is an empty current term will do nothing\n	g.terms[g.termx].ss = \"\"\n\n"
, std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 9, std.F_vv_line1, VAL, 157, std.F_vv_line2, VAL, 161, POP, "do_equals", std.F_vv_code, VAL, "calc do_equals\n	var val = eval(1)  // start with the first term by itself\n	var val2\n\n	//  if there is no second or later term use the chain operator and value\n	if tree_count(g.terms) < 2\n		//  use repeat if we have one\n		if g.chain_op <> U\n			val = arithmetic(g.chain_op, val, g.chain_val)\n	else\n		// two or more terms to process\n		loop from:1 index:tx while:g.terms[tx+1].ss <> \"\" and g.terms[tx].op <> U\n			val2 = eval(tx+1)\n			//  remember the last operator we used as our chaining value\n			g.chain_op = g.terms[tx].op\n			g.chain_val = val2\n			val = arithmetic(g.chain_op, val, val2)\n\n	//  calculation done, convert the value back as if we entered it\n	trunc g.terms // zap the array\n	g.terms[1].ss = to_str(val)  //  replace our value\n	g.termx = 1\n	g.fresh = Y\n\n"
, std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 1, std.F_vv_line1, VAL, 182, std.F_vv_line2, VAL, 206, POP, "do_percent", std.F_vv_code, VAL, "calc do_percent\n	//  if the current term is empty do nothing\n	//  apple's calculator takes the sequence 900+% and makes it 900^2 which is nutty\n	if g.terms[g.termx].ss <> \"\"\n		if g.termx > 1\n			//  when we have two terms, like 300 + 20% we take 20% of the first term and replace\n			g.terms[g.termx].ss = to_str(eval(g.termx)*eval(g.termx-1)/100)\n		else\n			//  we only have 1 term, so just divide it by 100\n			g.terms[g.termx].ss = to_str(eval(g.termx)/100)\n		g.fresh = Y\n\n"
, std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 14, std.F_vv_line1, VAL, 137, std.F_vv_line2, VAL, 149, POP, "do_period", std.F_vv_code, VAL, "calc do_period\n	//  ignore attempts to add more than one period\n	var list : array of num\n	if str_pos(g.terms[g.termx].ss, \".\") == U\n		add_digit(\".\")  //  no period yet, so append one\n\n"
, std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 15, std.F_vv_line1, VAL, 176, std.F_vv_line2, VAL, 182, POP, "eval", std.F_vv_code, VAL, "calc eval (\n	termx  -- term index to evaluate\n	) : num  //  convert a term to a floating point number\n	var ss : str = g.terms[termx].ss\n	if ss == \"\"\n		return 0\n	return to_num(ss)\n\n"
, std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 12, std.F_vv_line1, VAL, 149, std.F_vv_line2, VAL, 157, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn
, VAL, "termx", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, "main_draw", std.F_vv_code, VAL, "horz slice main_draw\n	under\n		draw_rect(fill:#121F30)  // dead space color\n\n	cellsize = (b.box.height-10 pt)/7 if b.box.width > b.box.height else b.box.width/4\n	result_v = cellsize*2  //  need to enhance compiler so that expressions don't get converted	\n	keys_v = cellsize*5\n	keys_h = min(b.box.width, cellsize*8)  // don't go wider than 8 squares wide (double)\n\n	skip 10 al\n	add keys_h px main_draw2\n	skip 10 al\n\n"
, std.F_vv_funck, VAL, std.FK_DRAW, std.F_vv_funcx, VAL, 10, std.F_vv_line1, VAL, 52, std.F_vv_line2, VAL, 65, POP, "main_draw2", std.F_vv_code, VAL, "vert slice main_draw2\n	skip 10 al\n	add result_v px d_result\n	add keys_v px d_keygrid\n	skip 10 al\n\n"
, std.F_vv_funck, VAL, std.FK_DRAW, std.F_vv_funcx, VAL, 13, std.F_vv_line1, VAL, 65, std.F_vv_line2, VAL, 71, POP, "main_init", std.F_vv_code, VAL, "calc main_init\n	g.terms[1].ss = \"\"\n	g.termx = 1\n	g.fresh = Y\n\n"
, std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 5, std.F_vv_line1, VAL, 47, std.F_vv_line2, VAL, 52, POP, "sign_change", std.F_vv_code, VAL, "calc sign_change(\n	tx  -- term index\n	)\n	var old : str = g.terms[tx].ss\n	if old == \"\"\n		//  we have no operand yet in the current term, so\n		//  either ignore it or change previous operand's sign\n		//  this is what apple's calculator does\n		if tx > 1\n			sign_change(tx-1)  // change previous operand's sign. kinda weird really.\n	elif str_begins(old, \"-\")\n		g.terms[tx].ss = subset(old, from:2)  // strip the minus\n	else\n		g.terms[tx].ss = '-' & old  //  prepend a minus\n\n"
, std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 11, std.F_vv_line1, VAL, 161, std.F_vv_line2, VAL, 176, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn
, VAL, "tx", std.F_vv_typek, 1, VAL, std.TYPE_NUM);

std.merge_lit(_M,0,std.META,"calculator",std.F_mod_recs, R_a_state, F_chain_op, 1, VAL, std.TYPE_STR, POP, F_chain_val, 1, VAL, std.TYPE_NUM, POP, F_fresh, 1, VAL, std.TYPE_YESNO
, POP, F_terms, 1, VAL, std.TYPE_ARRAY, 2, VAL, std.TYPE_RECORD, 3, VAL, R_a_term, POP, F_termx, 1, VAL, std.TYPE_NUM, POP, POP, R_a_term, F_op, 1, VAL, std.TYPE_STR, POP, 
F_ss, 1, VAL, std.TYPE_STR);
function $eval(p) { return eval(p) }
std.setv(_M,0,std.META,"calculator",std.F_mod_eval,$eval);
//[reflZZZ]
//-------  func const for calculator
const do_equals_F = new std.a_function(_M, "do_equals", do_equals);
std.FUNCS[do_equals_F.hash]=do_equals_F;
const d_result_F = new std.a_function(_M, "d_result", d_result);
std.FUNCS[d_result_F.hash]=d_result_F;
const d_keygrid_F = new std.a_function(_M, "d_keygrid", d_keygrid, d_keygrid_track);
std.FUNCS[d_keygrid_F.hash]=d_keygrid_F;
const do_clear_F = new std.a_function(_M, "do_clear", do_clear);
std.FUNCS[do_clear_F.hash]=do_clear_F;
const main_draw2_F = new std.a_function(_M, "main_draw2", main_draw2);
std.FUNCS[main_draw2_F.hash]=main_draw2_F;
const do_percent_F = new std.a_function(_M, "do_percent", do_percent);
std.FUNCS[do_percent_F.hash]=do_percent_F;
const do_period_F = new std.a_function(_M, "do_period", do_period);
std.FUNCS[do_period_F.hash]=do_period_F;
//-------  top nodes
const C_OP = 0x3E424D;
const C_DIGIT = 0x6E6E6E;
const C_ARITH = 0x1A4C6E;
const KEYCAPS = new std.a_tree(_M,"KEYCAPS", std.NF_TOPLEVEL|std.NF_LOGGED, std.tree_lit(_M, 14, 1, VAL, "C", 2, VAL, "±", 3, VAL, "%", 4, VAL, "÷", 5, VAL, "1", 6, VAL, "2"
, 7, VAL, "3", 8, VAL, "x", 9, VAL, "4", 10, VAL, "5", 11, VAL, "6", 12, VAL, "−", 13, VAL, "7", 14, VAL, "8", 15, VAL, "9", 16, VAL, "+", 17, VAL, "", 18, VAL, "0", 19, VAL, 
".", 20, VAL, "="));
const KEYCOLORS = new std.a_tree(_M,"KEYCOLORS", std.NF_TOPLEVEL|std.NF_LOGGED, std.tree_lit(_M, 20, 1, VAL, C_OP, 2, VAL, C_OP, 3, VAL, C_OP, 4, VAL, C_ARITH, 5, VAL, C_DIGIT
, 6, VAL, C_DIGIT, 7, VAL, C_DIGIT, 8, VAL, C_ARITH, 9, VAL, C_DIGIT, 10, VAL, C_DIGIT, 11, VAL, C_DIGIT, 12, VAL, C_ARITH, 13, VAL, C_DIGIT, 14, VAL, C_DIGIT, 15, VAL, C_DIGIT
, 16, VAL, C_ARITH, 17, VAL, C_OP, 18, VAL, C_DIGIT, 19, VAL, C_OP, 20, VAL, C_ARITH));
const HAIR = " ";
const SPACING = 4;
let g = new std.a_tree(_M,"g", std.NF_TOPLEVEL|std.NF_STATEFUL|std.NF_LOGGED);
let cellsize = U;
let result_v = U;
let keys_v = U;
let keys_h = U;

//====================
//   d_keygrid
//====================
function d_keygrid(b) {
std.k_enter(b);
std.div_begin(b, new std.a_function(_M, "d_keygrid_cell", d_keygrid_cell, null), false, false, false);
  std.div_spa(b, 0, SPACING, std.al);
  var loop146 = new std.a_loop({ reps:4 });
  while (loop146.next()) {
    std.div_add(b, U, 0, 60, std.al, null, 0);
    std.div_spa(b, 0, SPACING, std.al);
  }
  std.div_spa(b, 1, SPACING, std.al);
  var loop147 = new std.a_loop({ reps:5 });
  while (loop147.next()) {
    std.div_add(b, U, 1, 60, std.al, null, 0);
    std.div_spa(b, 1, SPACING, std.al);
  }
  std.div_end(b);
  std.draw_grid(b);
std.k_leave(b);
}


//====================
//   d_keygrid_cell
//====================
function d_keygrid_cell(b) {
  std.k_enter(b);
  std.draw_rect(b, { fill:std.get_generic(KEYCOLORS, getn(b.extra, std.F_cell_seq)), corner:std.pt_to_dots(b, 6) });
  std.draw_str(b, std.get_generic(KEYCAPS, getn(b.extra, std.F_cell_seq)), { size:b.bounds.height, color:std.WHITE });
  std.k_leave(b);
}

//====================
//   d_keygrid_track
//====================
function d_keygrid_track(b, e) {
  //---------------
  //   on EV_TAP
  //---------------
  if (std.getn(e, std.F_evkind) == std.EV_TAP) {
    var case148 = getn(b.extra, std.F_cell_seq);
    if (case148 === 1) {
      do_clear();
    } else if (case148 === 2) {
      sign_change(getn(g, F_termx));
    } else if (case148 === 3) {
      do_percent();
    } else if (case148 === 4 || case148 === 8 || case148 === 12 || case148 === 16) {
      do_arith(std.get_generic(KEYCAPS, getn(b.extra, std.F_cell_seq)));
    } else if (case148 === 17) {
    } else if (case148 === 19) {
      do_period();
    } else if (case148 === 20) {
      do_equals();
    } else {
      add_digit(std.get_generic(KEYCAPS, getn(b.extra, std.F_cell_seq)));
    }
  return Y;
  }
  return N;
}

//====================
//   d_result
//====================
function d_result(b) {
std.k_enter(b);
  std.draw_rect(b, { fill:0xD161F });
  let s = "";
  var loop149 = new std.a_loop({ across:std.adr(g, F_terms) });
  while (loop149.next()) {
  var i = loop149.index;
    s = std.cat(s, gets(g, F_terms, i, F_ss));
    if (gets(g, F_terms, i, F_op) !== null) {
      s = std.cat(s, HAIR, gets(g, F_terms, i, F_op), HAIR);
    }
  }
  if (std.eq2(s, "")) {
    s = "0";
  }
  std.draw_str(b, s, { size:0.5, just:std.RIGHT, indent:std.pt_to_dots(b, 20), color:std.WHITE });
std.k_leave(b);
}


//====================
//   main_draw
//====================
export function main_draw(b) {
std.k_enter(b);
std.div_begin(b, null, false, false, false);
  cellsize = std.gt2(b.bounds.width, b.bounds.height) ? std.div(std.sub(b.bounds.height, std.pt_to_dots(b, 10)), 7) : std.div(b.bounds.width, 4);
  result_v = std.mul(cellsize, 2);
  keys_v = std.mul(cellsize, 5);
  keys_h = std.min(b.bounds.width, std.mul(cellsize, 8));
  std.div_spa(b, 0, 10, std.al);
  std.div_add(b, U, 0, keys_h, std.px, main_draw2_F, 0);
  std.div_spa(b, 0, 10, std.al);
  std.div_end(b);
  //--under
  std.draw_rect(b, { fill:0x121F30 });
  std.draw_slices(b);
std.k_leave(b);
}


//====================
//   main_draw2
//====================
export function main_draw2(b) {
std.k_enter(b);
std.div_begin(b, null, false, false, false);
  std.div_spa(b, 1, 10, std.al);
  std.div_add(b, U, 1, result_v, std.px, d_result_F, 0);
  std.div_add(b, U, 1, keys_v, std.px, d_keygrid_F, 0);
  std.div_spa(b, 1, 10, std.al);
  std.div_end(b);
  std.draw_slices(b);
std.k_leave(b);
}


//====================
//   add_digit
//====================
function add_digit(digit) {
  if ((getn(g, F_fresh) === Y || std.eq2(gets(g, F_terms, getn(g, F_termx), F_ss), "0"))) {
    std.path_setv(_M, 70231, std.adr(g, F_terms, getn(g, F_termx), F_ss), "");
  }
  std.tree_cat(_M, 70232, digit, std.adr(g, F_terms, getn(g, F_termx), F_ss));
  std.path_setv(_M, 70233, std.adr(g, F_fresh), N);
}


//====================
//   arithmetic
//====================
function arithmetic(operand, term1, term2) {
  let result = U;
  var case150 = operand;
  if (case150 === "+") {
    result = std.add(term1, term2);
  } else if (case150 === "−") {
    result = std.sub(term1, term2);
  } else if (case150 === "x") {
    result = std.mul(term1, term2);
  } else if (case150 === "÷") {
    result = std.div(term1, term2);
  } else {
    result = std.ERR;
  }
  return result;
}


//====================
//   do_arith
//====================
function do_arith(operand) {
  if (std.eq2(gets(g, F_terms, getn(g, F_termx), F_ss), "")) {
    if (std.eq2(getn(g, F_termx), 1)) {
      return;
    }
    std.path_setv(_M, 80246, std.adr(g, F_terms, std.sub(getn(g, F_termx), 1), F_op), operand);
  } else {
    std.path_setv(_M, 80249, std.adr(g, F_terms, getn(g, F_termx), F_op), operand);
    std.tree_add(_M, 80250, 1, std.adr(g, F_termx));
    std.path_setv(_M, 80251, std.adr(g, F_terms, getn(g, F_termx), F_ss), "");
  }
}


//====================
//   do_clear
//====================
function do_clear() {
  std.path_setv(_M, 90159, std.adr(g, F_terms, getn(g, F_termx), F_ss), "");
}


//====================
//   do_equals
//====================
function do_equals() {
  let val = eval_(1);
  let val2 = U;
  if (std.lt2(std.tree_count(std.adr(g, F_terms)), 2)) {
    if (gets(g, F_chain_op) !== null) {
      val = arithmetic(gets(g, F_chain_op), val, getn(g, F_chain_val));
    }
  } else {
    var loop151 = new std.a_loop({ from:1 });
    while (loop151.next()) {
    var tx = loop151.index;
      if (std.and4(std.ne4(gets(g, F_terms, std.add(tx, 1), F_ss), ""), std.ne4(gets(g, F_terms, tx, F_op), null)) !== Y)
        break;
      val2 = eval_(std.add(tx, 1));
      std.path_setv(_M, 10196, std.adr(g, F_chain_op), gets(g, F_terms, tx, F_op));
      std.path_setv(_M, 10197, std.adr(g, F_chain_val), val2);
      val = arithmetic(gets(g, F_chain_op), val, val2);
    }
  }
  std.trunc_tree(_M, 10201, std.adr(g, F_terms));
  std.path_setv(_M, 10202, std.adr(g, F_terms, 1, F_ss), str.to_str(val, {}));
  std.path_setv(_M, 10203, std.adr(g, F_termx), 1);
  std.path_setv(_M, 10204, std.adr(g, F_fresh), Y);
}


//====================
//   do_percent
//====================
function do_percent() {
  if (std.ne2(gets(g, F_terms, getn(g, F_termx), F_ss), "")) {
    if (std.gt2(getn(g, F_termx), 1)) {
      std.path_setv(_M, 140143, std.adr(g, F_terms, getn(g, F_termx), F_ss), str.to_str(std.div(std.mul(eval_(getn(g, F_termx)), eval_(std.sub(getn(g, F_termx), 1))), 100), {}))
      ;
    } else {
      std.path_setv(_M, 140146, std.adr(g, F_terms, getn(g, F_termx), F_ss), str.to_str(std.div(eval_(getn(g, F_termx)), 100), {}));
    }
    std.path_setv(_M, 140147, std.adr(g, F_fresh), Y);
  }
}


//====================
//   do_period
//====================
function do_period() {
  let list = new std.a_tree(_M,"list", 0);
  if (str.str_pos(gets(g, F_terms, getn(g, F_termx), F_ss), ".", {}) === U) {
    add_digit(".");
  }
}


//====================
//   eval
//====================
function eval_(termx) {
  let ss = gets(g, F_terms, termx, F_ss);
  if (std.eq2(ss, "")) {
    return 0;
  }
  return str.to_num(ss);
}


//====================
//   main_init
//====================
export function main_init() {
  std.path_setv(_M, 50048, std.adr(g, F_terms, 1, F_ss), "");
  std.path_setv(_M, 50049, std.adr(g, F_termx), 1);
  std.path_setv(_M, 50050, std.adr(g, F_fresh), Y);
}


//====================
//   sign_change
//====================
function sign_change(tx) {
  let old = gets(g, F_terms, tx, F_ss);
  if (std.eq2(old, "")) {
    if (std.gt2(tx, 1)) {
      sign_change(std.sub(tx, 1));
    }
  } else if (str.str_begins(old, "-") === Y) {
    std.path_setv(_M, 110172, std.adr(g, F_terms, tx, F_ss), str.subset(old, { from:2 }));
  } else {
    std.path_setv(_M, 110174, std.adr(g, F_terms, tx, F_ss), std.cat("-", old));
  }
}

std.setv(_M, 0, std.runtime, std.F_app_name, "calculator");
main_init();
