package {
  import flash.display.Sprite;
  import flash.display.StageAlign;
  import flash.display.StageScaleMode;
  import flash.events.Event;
  public class clock extends Sprite {
    private function on_addedToStage(event:Event):void {
      removeEventListener(Event.ADDED_TO_STAGE, on_addedToStage);
      SysStage.stage_init (stage);
  main_init();
  std.aaaa.draw_func = main_draw;
  k.rebuild_all();
}

public static const CODE_HASH:uint = 0xaf3dff7d;
public static const M_clock:Number = 9007190278347323;  std.g_inverse_enum[9007190278347323] = "clock";
private static const M:Number = M_clock;
//-----------
//-----------
private static const do_tick_F : a_function = new a_function(do_tick, "do_tick");
private static var g:a_tree = new a_tree("g", std.NF_STATEFUL);
private static const V_g:Number = 9007191720509413;  std.g_inverse_enum[9007191720509413] = "g";
std.setv(0,0, std.VARS, M, V_g, std.VAL, std.addr(g));
std.setv(0,0, std.VARS, M, V_g, std.TYPE_TREE);
std.setv(0,0, std.VARS, M, V_g, std.F_v_rec, std.R_a_date);
std.setv(0,0, std.VARS, M, V_g, std.F_v_fields, std.F_date_year, std.TYPE_NUM);
std.setv(0,0, std.VARS, M, V_g, std.F_v_fields, std.F_date_month, std.TYPE_NUM);
std.setv(0,0, std.VARS, M, V_g, std.F_v_fields, std.F_date_day, std.TYPE_NUM);
std.setv(0,0, std.VARS, M, V_g, std.F_v_fields, std.F_date_hour, std.TYPE_NUM);
std.setv(0,0, std.VARS, M, V_g, std.F_v_fields, std.F_date_minute, std.TYPE_NUM);
std.setv(0,0, std.VARS, M, V_g, std.F_v_fields, std.F_date_second, std.TYPE_NUM);

//====================
//   do_tick
//====================
private static function do_tick():void {
  std.copy_tree(M, 19, std.seconds_to_date(), std.addr(g));
}


//====================
//   main_draw
//====================
public static function main_draw(b:a_block):void {
k.k_enter(b);
  std.draw_rect(b, std.addr(b.extra, std.F_box), { color:std.BEIGE });
  var diameter:Number = std.mul(0.8, std.min(b.bounds.width, b.bounds.height));
  var area:a_tree = new a_tree("area", 0); std.merge_tree(M, 31, std.solve_rect({ basis:std.addr(b.extra, std.F_box), pin:5, width:diameter, height:diameter, round:std.Y }), 
  std.addr(area));
  var b2:a_block = k.k_create_layer(b,{ area:area, pin:5 });
  k.k_enter(b2);
    std.draw_circle(b2, { x:0, y:0, diam:diameter, color:std.GREEN, stroke:std.DARK_GREEN, width:std.pt_to_dots(b2, 4), pos:0 });
    std.draw_line(b2, { x1:0, y1:0, angle:std.meas(std.sub(std.mul(std.add(std.getn(g, std.F_date_hour), std.div(std.getn(g, std.F_date_minute), 60)), 30), 90), std.N_deg, std.Y_Angle
    ), len:std.mul(diameter, 0.3), color:std.BROWN, width:std.pt_to_dots(b2, 8) });
    std.draw_line(b2, { x1:0, y1:0, angle:std.meas(std.sub(std.mul(std.getn(g, std.F_date_minute), 6), 90), std.N_deg, std.Y_Angle), len:std.mul(diameter, 0.4), color:std.ORANGE
    , width:std.pt_to_dots(b2, 6) });
    std.draw_line(b2, { x1:0, y1:0, angle:std.meas(std.sub(std.mul(std.getn(g, std.F_date_second), 6), 90), std.N_deg, std.Y_Angle), len:std.mul(diameter, 0.45), color:std.BLUE
    , width:std.pt_to_dots(b2, 4) });
  k.k_leave(b2);
k.k_leave(b);
}


//====================
//   main_init
//====================
public static function main_init():void {
  std.path_setv(M, 10, std.addr(std.runtime, std.F_time_scale), 30);
  std.loom_callback(do_tick_F, { delay:0, interval:1, reps:std.INFINITY });
}

//==================
public function clock() {
  super();
  stage.align = StageAlign.TOP_LEFT;
  stage.scaleMode = StageScaleMode.NO_SCALE;
  addEventListener(Event.ADDED_TO_STAGE, on_addedToStage, false, 0, true);
}
//==================
}}
