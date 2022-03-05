//  JS module devpicker
// beads ver 0.51 compiled Fri Mar 4 22:03:15 GMT-0800 2022
import { U, Y, N, POP, VAL, VNP, setv, gets, getn, adr, lgp, log } from '../../runtime_051/beads_std.js';
import * as std from '../../runtime_051/beads_std.js';
import * as str from '../../runtime_051/beads_str.js';
export const CODE_HASH = 0x0;
const _M = std.MODULES.push("devpicker")-1;
//------- enums
const R_a_device=9007192287416554; std.ENUMS[9007192287416554]="a_device";
const R_a_intf=9007191126565589; std.ENUMS[9007191126565589]="a_intf";
const F_markA=9007191814820240; std.ENUMS[9007191814820240]="markA";
std.FIELDS[F_markA] = true;
const F_dev_v=9007190153298922; std.ENUMS[9007190153298922]="dev_v";
std.FIELDS[F_dev_v] = true;
const F_run_id=9007193977752563; std.ENUMS[9007193977752563]="run_id";
std.FIELDS[F_run_id] = true;
const F_is_frozen=9007193501864035; std.ENUMS[9007193501864035]="is_frozen";
std.FIELDS[F_is_frozen] = true;
const F_frozen_thumb_pct=9007190643423133; std.ENUMS[9007190643423133]="frozen_thumb_pct";
std.FIELDS[F_frozen_thumb_pct] = true;
const F_dev_name=9007192145472315; std.ENUMS[9007192145472315]="dev_name";
std.FIELDS[F_dev_name] = true;
const F_ide_active=9007191210486575; std.ENUMS[9007191210486575]="ide_active";
std.FIELDS[F_ide_active] = true;
const F_is_sped=9007192493111639; std.ENUMS[9007192493111639]="is_sped";
std.FIELDS[F_is_sped] = true;
const F_dev_zoom=9007192788502483; std.ENUMS[9007192788502483]="dev_zoom";
std.FIELDS[F_dev_zoom] = true;
const F_scale_actual=9007190379591069; std.ENUMS[9007190379591069]="scale_actual";
std.FIELDS[F_scale_actual] = true;
const F_devx=9007193397095485; std.ENUMS[9007193397095485]="devx";
std.FIELDS[F_devx] = true;
const F_portrait=9007190251475747; std.ENUMS[9007190251475747]="portrait";
std.FIELDS[F_portrait] = true;
const F_dev_ppi=9007193402083683; std.ENUMS[9007193402083683]="dev_ppi";
std.FIELDS[F_dev_ppi] = true;
const F_dev_h=9007190186854160; std.ENUMS[9007190186854160]="dev_h";
std.FIELDS[F_dev_h] = true;
const F_major_last=9007192269895282; std.ENUMS[9007192269895282]="major_last";
std.FIELDS[F_major_last] = true;
//-------  func const for devpicker
const d_scale_actual_F = new std.a_function(_M, "d_scale_actual", d_scale_actual, track_d_scale_actual);
std.FUNCS[d_scale_actual_F.hash]=d_scale_actual_F;
const d_orient_port_F = new std.a_function(_M, "d_orient_port", d_orient_port, track_d_orient_port);
std.FUNCS[d_orient_port_F.hash]=d_orient_port_F;
const d_orient_land_F = new std.a_function(_M, "d_orient_land", d_orient_land, track_d_orient_land);
std.FUNCS[d_orient_land_F.hash]=d_orient_land_F;
export const d_preview_area_F = new std.a_function(_M, "d_preview_area", d_preview_area);
std.FUNCS[d_preview_area_F.hash]=d_preview_area_F;
const do_stop_cycling_F = new std.a_function(_M, "do_stop_cycling", do_stop_cycling);
std.FUNCS[do_stop_cycling_F.hash]=do_stop_cycling_F;
const d_oneshot_F = new std.a_function(_M, "d_oneshot", d_oneshot, track_d_oneshot);
std.FUNCS[d_oneshot_F.hash]=d_oneshot_F;
const d_dev_picker_215_F = new std.a_function(_M, "d_dev_picker_215", d_dev_picker_215);
std.FUNCS[d_dev_picker_215_F.hash]=d_dev_picker_215_F;
const d_scale_butts_F = new std.a_function(_M, "d_scale_butts", d_scale_butts);
std.FUNCS[d_scale_butts_F.hash]=d_scale_butts_F;
const d_dev_picker_206_F = new std.a_function(_M, "d_dev_picker_206", d_dev_picker_206);
std.FUNCS[d_dev_picker_206_F.hash]=d_dev_picker_206_F;
const d_orient_butts_F = new std.a_function(_M, "d_orient_butts", d_orient_butts);
std.FUNCS[d_orient_butts_F.hash]=d_orient_butts_F;
const d_dev_grid_F = new std.a_function(_M, "d_dev_grid", d_dev_grid, track_d_dev_grid);
std.FUNCS[d_dev_grid_F.hash]=d_dev_grid_F;
export const d_dev_picker_F = new std.a_function(_M, "d_dev_picker", d_dev_picker);
std.FUNCS[d_dev_picker_F.hash]=d_dev_picker_F;
const do_start_cycling_F = new std.a_function(_M, "do_start_cycling", do_start_cycling);
std.FUNCS[do_start_cycling_F.hash]=do_start_cycling_F;
const d_scale_zoom_F = new std.a_function(_M, "d_scale_zoom", d_scale_zoom, track_d_scale_zoom);
std.FUNCS[d_scale_zoom_F.hash]=d_scale_zoom_F;
const d_run_butts_F = new std.a_function(_M, "d_run_butts", d_run_butts);
std.FUNCS[d_run_butts_F.hash]=d_run_butts_F;
const d_dev_picker_213_F = new std.a_function(_M, "d_dev_picker_213", d_dev_picker_213);
std.FUNCS[d_dev_picker_213_F.hash]=d_dev_picker_213_F;
const d_dev_picker_208_F = new std.a_function(_M, "d_dev_picker_208", d_dev_picker_208);
std.FUNCS[d_dev_picker_208_F.hash]=d_dev_picker_208_F;
//-------  top nodes
const SHOW_ORIENT = Y;
const DEVICES = new std.a_tree(_M,"DEVICES", std.NF_TOPLEVEL|std.NF_LOGGED, std.table_lit(F_dev_name, F_dev_h, F_dev_v, F_dev_ppi, VAL, "Full window", 600, 800, 100, VAL, 
  "Laptop - Small", 760, 1280, 126, VAL, "Laptop - Big", 1040, 1920, 146, VAL, "Apple iPad Mini", 1536, 2048, 326, VAL, "Apple iPad Air", 1536, 2048, 264, VAL, "Apple iPad Pro 10.5 inch"
  , 1668, 2224, 264, VAL, "Apple iPad Pro 11 inch", 1668, 2388, 264, VAL, "Apple iPad Pro 12.9 inch", 2048, 2732, 264, VAL, "Apple iPhone Xr", 828, 1792, 326, VAL, "Apple iPhone X/Xs"
  , 1125, 2436, 458, VAL, "Apple iPhone Xs Max", 1242, 2688, 458, VAL, "Kindle Fire 7 inch", 600, 1024, 151, VAL, "Samsung Galaxy S20", 1440, 3200, 563));
const BROWN_GRAD = new std.a_tree(_M,"BROWN_GRAD", std.NF_TOPLEVEL|std.NF_LOGGED, std.tree_lit(_M, 44, std.F_grad_shape, VAL, std.LINEAR_GRADIENT, std.F_grad_angle, VAL, std.GRAD_TO_BOTTOM
, std.F_grad_stops, 1, std.F_stop_pos, VAL, 0, std.F_stop_color, VAL, 0x402C23, POP, 2, std.F_stop_pos, VAL, 19.175871549185796, std.F_stop_color, VAL, 0x714C3C, POP, 3, std.F_stop_pos
, VAL, 82.75902458069659, std.F_stop_color, VAL, 0x815745, POP, 4, std.F_stop_pos, VAL, 100, std.F_stop_color, VAL, 0x4F362B, POP, POP));
const SCROLLBAR_GRAD = new std.a_tree(_M,"SCROLLBAR_GRAD", std.NF_TOPLEVEL|std.NF_LOGGED, std.tree_lit(_M, 51, std.F_grad_shape, VAL, std.LINEAR_GRADIENT, std.F_grad_angle
, VAL, std.GRAD_TO_BOTTOM, std.F_grad_stops, 1, std.F_stop_pos, VAL, 0, std.F_stop_color, VAL, std.CHOCOLATE, POP, 2, std.F_stop_pos, VAL, 48, std.F_stop_color, VAL, std.BEIGE
, POP, 3, std.F_stop_pos, VAL, 52, std.F_stop_color, VAL, std.BEIGE, POP, 4, std.F_stop_pos, VAL, 100, std.F_stop_color, VAL, std.CHOCOLATE, POP, POP));
const NDEV = std.tree_count(std.adr(DEVICES));
const LINEV = 20;
const C_TOOLBAR_BACK = 0x2E2330;
const PREVIEW_BACK = 0x2B212D;
const PREVIEW_FORE = 0xEFE1F1;
const TAB_LO_BACK = 0x7F6B6B;
const TAB_LO_BORD = 0x54056;
const TAB_LO_TEXT = 0xF0F0EA;
const TAB_HI_BACK = 0xF6F7CA;
const TAB_HI_BORD = 0x54056;
const TAB_HI_TEXT = 0x2B2927;
const C_ORIENT_B_LO = 0xC3CFE5;
const C_ORIENT_B_HI = 0xE53959;
const C_ORIENT_ICON = std.GRAY7;
const C_FOOTER_TEXT = PREVIEW_FORE;
const C_THUMB_BACK = 0x17527F;
const C_THUMB_BORD = 0x27B39E;
const BUTT_LO_BACK = std.SLATE_BLUE;
const BUTT_LO_BORD = 0x54056;
const BUTT_LO_TEXT = std.IVORY;
const BUTT_HI_BACK = 0x962A67;
const BUTT_HI_BORD = 0x54056;
const BUTT_HI_TEXT = std.IVORY;
let devintf = new std.a_tree(_M,"devintf", std.NF_TOPLEVEL|std.NF_STATEFUL, std.tree_lit(_M, 106, F_devx, VAL, 1, F_portrait, VAL, N, F_scale_actual, VAL, Y));

//====================
//   d_dev_grid
//====================
function d_dev_grid(b) {
std.k_enter(b);
std.div_begin(b, new std.a_function(_M, "d_dev_grid_cell", d_dev_grid_cell, null), false, false, false);
  std.div_add(b, U, 0, 10, std.al, null, 0);
  var loop16 = new std.a_loop({ across:std.adr(DEVICES) });
  while (loop16.next()) {
    std.div_add(b, U, 1, 10, std.al, null, 0);
  }
  std.div_end(b);
  std.draw_grid(b);
std.k_leave(b);
}


//====================
//   d_dev_grid_cell
//====================
function d_dev_grid_cell(b) {
  std.k_enter(b);
  std.draw_rect(b, { grad:std.adr(BROWN_GRAD) });
  if (std.eq2(getn(b.extra, std.F_cell_seq), getn(devintf, F_devx))) {
    std.draw_str(b, "✅", { just:std.LEFT, indent:std.pt_to_dots(b, 3), size:0.5, color:std.CORAL });
  }
  std.draw_str(b, gets(DEVICES, getn(b.extra, std.F_cell_seq), F_dev_name), { just:std.LEFT, indent:std.pt_to_dots(b, 20), size:0.6, color:std.WHITE });
  std.k_leave(b);
}

//====================
//   track_d_dev_grid
//====================
function track_d_dev_grid(b, e) {
  //---------------
  //   on EV_TAP
  //---------------
  if (std.getn(e, std.F_evkind) == std.EV_TAP) {
    std.path_setv(_M, 329, std.adr(devintf, F_devx), getn(b.extra, std.F_cell_seq));
  return Y;
  }
  return N;
}

//====================
//   d_dev_picker
//====================
export function d_dev_picker(b) {
std.k_enter(b);
std.div_begin(b, null, false, false, false);
  std.div_spa(b, 1, 18, std.pt);
  std.div_add(b, U, 1, std.mul(LINEV, NDEV), std.pt, d_dev_grid_F, 0, std.ne4(getn(devintf, F_is_frozen), Y));
  if (std.ne2(getn(devintf, F_devx), 1)) {
    if (SHOW_ORIENT === Y) {
      std.div_spa(b, 1, 10, std.pt);
      std.div_add(b, U, 1, 24, std.pt, d_orient_butts_F, 0);
    }
    std.div_spa(b, 1, 10, std.pt);
    std.div_add(b, U, 1, 24, std.pt, d_scale_butts_F, 0);
    std.div_spa(b, 1, 18, std.pt);
    std.div_add(b, U, 1, 18, std.pt, d_dev_picker_206_F, 0);
    std.div_add(b, U, 1, 18, std.pt, d_dev_picker_208_F, 0);
    std.div_add(b, U, 1, 18, std.pt, d_dev_picker_213_F, 0);
    std.div_add(b, U, 1, 18, std.pt, d_dev_picker_215_F, 0);
    std.div_spa(b, 1, 18, std.pt);
    std.div_add(b, U, 1, 24, std.pt, d_run_butts_F, 0);
    std.div_spa(b, 1, 10, std.al);
  }
  std.div_end(b);
  //--under
  std.draw_rect(b, { fill:C_TOOLBAR_BACK });
  std.draw_slices(b);
std.k_leave(b);
}


//====================
//   d_oneshot
//====================
function d_oneshot(b, prompt, action) {
std.k_enter(b);
  std.draw_rect(b, { corner:std.div(b.bounds.height, 4), fill:BUTT_LO_BACK, color:BUTT_LO_BORD, thick:std.pt_to_dots(b, 3) });
  std.draw_str(b, prompt, { size:0.6, indent:std.pt_to_dots(b, 1.5), color:BUTT_LO_TEXT });
std.k_leave(b);
}


//====================
//   track_d_oneshot
//====================
function track_d_oneshot(b, e, prompt, action) {
  //---------------
  //   on EV_TAP
  //---------------
  if (std.getn(e, std.F_evkind) == std.EV_TAP) {
    action.code();
  return Y;
  }
  return N;
}

//====================
//   d_orient_butts
//====================
function d_orient_butts(b) {
std.k_enter(b);
std.div_begin(b, null, false, false, false);
  std.div_spa(b, 0, 1, std.al);
  std.div_add(b, U, 0, 10, std.al, d_orient_port_F, 0);
  std.div_add(b, U, 0, 10, std.al, d_orient_land_F, 0);
  std.div_spa(b, 0, 1, std.al);
  std.div_end(b);
  std.draw_slices(b);
std.k_leave(b);
}


//====================
//   d_orient_land
//====================
function d_orient_land(b) {
std.k_enter(b);
  let color = U;
  if (getn(devintf, F_portrait) === Y) {
    color = C_ORIENT_B_LO;
  } else {
    color = C_ORIENT_B_HI;
  }
  std.draw_rect(b, { fill:color, corner:std.pt_to_dots(b, 2) });
  let r = new std.a_tree(_M,"r", 0, std.solve_rect({ basis:adr(b.extra, std.F_box), pin:5, height:std.mul(b.bounds.height, 0.4), width:std.mul(b.bounds.height, 0.8) }));
  std.draw_rect(b, { box:std.adr(r), fill:std.GRAY7, corner:std.pt_to_dots(b, 2) });
std.k_leave(b);
}


//====================
//   track_d_orient_land
//====================
function track_d_orient_land(b, e) {
  //---------------
  //   on EV_TAP
  //---------------
  if (std.getn(e, std.F_evkind) == std.EV_TAP) {
    std.path_setv(_M, 301, std.adr(devintf, F_portrait), N);
  return Y;
  }
  return N;
}

//====================
//   d_orient_port
//====================
function d_orient_port(b) {
std.k_enter(b);
  let color = U;
  if (getn(devintf, F_portrait) === Y) {
    color = C_ORIENT_B_HI;
  } else {
    color = C_ORIENT_B_LO;
  }
  std.draw_rect(b, { fill:color, corner:std.pt_to_dots(b, 2) });
  let r = new std.a_tree(_M,"r", 0, std.solve_rect({ basis:adr(b.extra, std.F_box), pin:5, height:std.mul(b.bounds.height, 0.8), width:std.mul(b.bounds.height, 0.38) }));
  std.draw_rect(b, { box:std.adr(r), fill:std.GRAY7, corner:std.pt_to_dots(b, 2) });
std.k_leave(b);
}


//====================
//   track_d_orient_port
//====================
function track_d_orient_port(b, e) {
  //---------------
  //   on EV_TAP
  //---------------
  if (std.getn(e, std.F_evkind) == std.EV_TAP) {
    std.path_setv(_M, 284, std.adr(devintf, F_portrait), Y);
  return Y;
  }
  return N;
}

//====================
//   d_preview_area
//====================
export function d_preview_area(b, user_drawfunc) {
std.k_enter(b);
  std.k_back(b, {fill:std.GRAY5});
  if (std.eq2(getn(devintf, F_devx), 1)) {
    user_drawfunc.code(b);
    std.k_leave(b);
    return;
  }
  const FRACT_USABLE = 0.95;
  let net_dpi = U;
  let aspect = U;
  let net_ratio = U;
  let r = new std.a_tree(_M,"r", 0);
  let dh = getn(DEVICES, getn(devintf, F_devx), F_dev_h);
  let dv = getn(DEVICES, getn(devintf, F_devx), F_dev_v);
  if (getn(devintf, F_portrait) === N) {
    var temp_17 = dh;
    dh = dv;
    dv = temp_17;
  }
  if (getn(devintf, F_scale_actual) === Y) {
    let dev_pts_h = std.div(std.mul(72, dh), getn(DEVICES, getn(devintf, F_devx), F_dev_ppi));
    let dev_pts_v = std.div(std.mul(72, dv), getn(DEVICES, getn(devintf, F_devx), F_dev_ppi));
    let need_h = std.pt_to_dots(b, dev_pts_h);
    let need_v = std.pt_to_dots(b, dev_pts_v);
    let ratio_h = std.div(std.mul(b.bounds.width, FRACT_USABLE), need_h);
    let ratio_v = std.div(std.mul(b.bounds.height, FRACT_USABLE), need_v);
    if ((std.ge2(ratio_h, 1) && std.ge2(ratio_v, 1))) {
      net_ratio = 1;
    } else if (std.lt2(ratio_h, ratio_v)) {
      net_ratio = ratio_h;
    } else {
      net_ratio = ratio_v;
    }
    let net_h = std.round(std.mul(need_h, net_ratio), {});
    let net_v = std.round(std.mul(need_v, net_ratio), {});
    std.copy_tree(_M, 149, std.solve_rect({ basis:std.adr(b.extra, std.F_box), pin:5, width:net_h, height:net_v }), std.adr(r));
    net_dpi = std.div(net_h, std.div(dh, getn(DEVICES, getn(devintf, F_devx), F_dev_ppi)));
  } else {
    aspect = std.div(dh, dv);
    std.copy_tree(_M, 162, std.solve_rect({ basis:adr(b.extra, std.F_box), pin:5, aspect:aspect, inset:std.pt_to_dots(b, 6), round:Y }), std.adr(r));
    std.path_setv(_M, 163, std.adr(devintf, F_dev_zoom), std.div(getn(r, std.F_width), dh));
    if (std.gt2(getn(devintf, F_dev_zoom), 1)) {
      std.copy_tree(_M, 168, std.solve_rect({ basis:std.adr(b.extra, std.F_box), pin:5, width:dh, height:dv, round:Y }), std.adr(r));
      std.path_setv(_M, 169, std.adr(devintf, F_dev_zoom), 1);
    }
    net_dpi = std.mul(getn(DEVICES, getn(devintf, F_devx), F_dev_ppi), getn(devintf, F_dev_zoom));
  }
  var b12=std.k_layer(b, user_drawfunc, { area:r, dpi:net_dpi });
  user_drawfunc.code(b12);
std.k_leave(b);
}


//====================
//   d_run_butts
//====================
function d_run_butts(b) {
std.k_enter(b);
std.div_begin(b, null, false, false, false);
  std.div_spa(b, 0, 5, std.al);
  std.div_add(b, U, 0, 40, std.al, std.freeze(d_oneshot_F, ["Stop", do_stop_cycling_F]), 0, std.ne4(getn(devintf, F_run_id), U));
  if (getn(devintf, F_run_id) !== U) {
    std.div_spa(b, 0, 40, std.al);
  } else {
    std.div_add(b, U, 0, 40, std.al, std.freeze(d_oneshot_F, ["Cycle", do_start_cycling_F]), 0, std.ne4(getn(devintf, F_is_frozen), Y));
  }
  std.div_spa(b, 0, 5, std.al);
  std.div_end(b);
  std.draw_slices(b);
std.k_leave(b);
}


//====================
//   d_scale_actual
//====================
function d_scale_actual(b) {
std.k_enter(b);
  let color = U;
  if (getn(devintf, F_scale_actual) === Y) {
    color = C_ORIENT_B_HI;
  } else {
    color = C_ORIENT_B_LO;
  }
  std.draw_rect(b, { fill:color, corner:std.pt_to_dots(b, 2) });
  std.draw_str(b, "Actual", { size:0.6, color:std.GRAY7 });
std.k_leave(b);
}


//====================
//   track_d_scale_actual
//====================
function track_d_scale_actual(b, e) {
  //---------------
  //   on EV_TAP
  //---------------
  if (std.getn(e, std.F_evkind) == std.EV_TAP) {
    std.path_setv(_M, 260, std.adr(devintf, F_scale_actual), Y);
  return Y;
  }
  return N;
}

//====================
//   d_scale_butts
//====================
function d_scale_butts(b) {
std.k_enter(b);
std.div_begin(b, null, false, false, false);
  std.div_spa(b, 0, 1, std.al);
  std.div_add(b, U, 0, 10, std.al, d_scale_zoom_F, 0);
  std.div_add(b, U, 0, 10, std.al, d_scale_actual_F, 0);
  std.div_spa(b, 0, 1, std.al);
  std.div_end(b);
  std.draw_slices(b);
std.k_leave(b);
}


//====================
//   d_scale_zoom
//====================
function d_scale_zoom(b) {
std.k_enter(b);
  let color = U;
  if (getn(devintf, F_scale_actual) === Y) {
    color = C_ORIENT_B_LO;
  } else {
    color = C_ORIENT_B_HI;
  }
  std.draw_rect(b, { fill:color, corner:std.pt_to_dots(b, 2) });
  std.draw_str(b, "Zoomed", { size:0.6, color:std.GRAY7 });
std.k_leave(b);
}


//====================
//   track_d_scale_zoom
//====================
function track_d_scale_zoom(b, e) {
  //---------------
  //   on EV_TAP
  //---------------
  if (std.getn(e, std.F_evkind) == std.EV_TAP) {
    std.path_setv(_M, 244, std.adr(devintf, F_scale_actual), N);
  return Y;
  }
  return N;
}

//====================
//   do_start_cycling
//====================
function do_start_cycling() {
  log(lgp("start cycling"));
}


//====================
//   do_stop_cycling
//====================
function do_stop_cycling() {
  if (getn(devintf, F_run_id) !== U) {
    std.loom_clear({ id:getn(devintf, F_run_id) });
  }
  std.path_setv(_M, 336, std.adr(devintf, F_run_id), U);
}


//====================
//   d_dev_picker_206
//====================
function d_dev_picker_206(b) {
std.k_enter(b);
  std.draw_str(b, gets(DEVICES, getn(devintf, F_devx), F_dev_name), { just:std.LEFT, indent:std.pt_to_dots(b, 10), size:0.8, color:std.WHITE });
std.k_leave(b);
}


//====================
//   d_dev_picker_208
//====================
function d_dev_picker_208(b) {
std.k_enter(b);
  if (getn(devintf, F_portrait) === Y) {
    std.draw_str(b, std.cat("dev: ", str.to_str(getn(DEVICES, getn(devintf, F_devx), F_dev_h), {dig:2}), " x ", str.to_str(getn(DEVICES, getn(devintf, F_devx), F_dev_v), {dig:2})
    ), { just:std.LEFT, indent:std.pt_to_dots(b, 10), size:0.8, color:std.WHITE });
  } else {
    std.draw_str(b, std.cat("dev: ", str.to_str(getn(DEVICES, getn(devintf, F_devx), F_dev_v), {dig:2}), " x ", str.to_str(getn(DEVICES, getn(devintf, F_devx), F_dev_h), {dig:2})
    ), { just:std.LEFT, indent:std.pt_to_dots(b, 10), size:0.8, color:std.WHITE });
  }
std.k_leave(b);
}


//====================
//   d_dev_picker_213
//====================
function d_dev_picker_213(b) {
std.k_enter(b);
  std.draw_str(b, std.cat("", str.to_str(getn(DEVICES, getn(devintf, F_devx), F_dev_ppi), {dig:2}), " dpi"), { just:std.LEFT, indent:std.pt_to_dots(b, 10), size:0.8, color:std.WHITE
   });
std.k_leave(b);
}


//====================
//   d_dev_picker_215
//====================
function d_dev_picker_215(b) {
std.k_enter(b);
  if (getn(devintf, F_scale_actual) === Y) {
  } else {
    std.draw_str(b, std.cat("drawn at ", str.to_str(std.mul(getn(devintf, F_dev_zoom), 100), { dig:0 }), "%"), { just:std.LEFT, indent:std.pt_to_dots(b, 10), size:0.8, color:std.WHITE
     });
  }
std.k_leave(b);
}

