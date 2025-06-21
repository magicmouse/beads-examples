import { a_meas, a_path, a_image, a_tree, a_function, a_sound, a_gradient, ERR, T, F, U } from "./beads_std.js";

import * as std from "./beads_std.js";

const TRACE_SPLIT = !1, TRACE_CONV = !1, TRACE_JSON = !1, TRACE_JSTOR = !1, TRACE_FIND = !1, TRAP_U_SUBSCRIPTS = !0;

export const SUBOP_REG_NOCASE = 1;

export const SUBOP_REG_MULTILINE = 2;

export const SUBOP_REG_GLOBAL = 4;

export const SUBOP_REG_STARTS = 8;

export const SUBOP_REG_ENDS = 16;

export const SUBOP_REG_LOG = 32;

export const ERROR_STRING = "ERR";

export const ascii_lowercase = "abcdefghijklmnopqrstuvwxyz";

export const ascii_uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const ascii_letters = ascii_lowercase + ascii_uppercase;

export const digits = "0123456789";

export const hexdigits = "0123456789abcdefABCDEF";

export const octdigits = "01234567";

export const CR = "\r";

export const LF = "\n";

export const CODE_0 = "0".charCodeAt(0);

export const CODE_9 = "9".charCodeAt(0);

export const CODE_A = "A".charCodeAt(0);

export const CODE_TILDE = "~".charCodeAt(0);

export const CODE_SPACE = " ".charCodeAt(0);

export const CODE_SLASH = "/".charCodeAt(0);

export const CODE_SQUOTE = "'".charCodeAt(0);

export const CODE_DQUOTE = '"'.charCodeAt(0);

export const CODE_CR = "\r".charCodeAt(0);

export const CODE_NL = "\n".charCodeAt(0);

export const CODE_TAB = "\t".charCodeAt(0);

export const CODE_BACKSLASH = "\\".charCodeAt(0);

const DELIM_CR = "\r", DELIM_CRLF = "\r\n", DELIM_LF = "\n";

export const BOM_UTF16_LE = 65279;

export const BOM_UTF16_BE = 65534;

const SS_DATE = 0;

export const PARSE_EOS = "￿";

export let parse_include_white;

let gparse_pos, gparse_ss, gparse_errflag, gparse_errmsg;

var gparse_len;

export const BEADS_JSON_MARKER = '{"$beads01":{';

export const R_a_find = 9007194157790523;

export const F_find_len = 9007192689371859;

export const F_find_start = 9007191603303728;

export const R_a_find_repl = 9007192534696881;

export const F_find_patt = 9007193956346111;

export const F_repl_patt = 9007194250103617;

const _M = 2;

export function str_hash_fnv(ident) {
    let v, cc, i, bh, bl, len = ident.length;
    for (v = 16777619, i = 0; i < len; i++) bh = (v ^= cc = ident.charCodeAt(i)) >>> 16, bl = 65535 & v, v = Math.imul(v, 16777619) >>> 0;
    return v;
};

export function safe_for_html(ss) {
    let i, cc, net = "";
    for (i = 0; i < ss.length; i++) "<" === (cc = ss.charAt(i)) ? cc = "&lt;" : ">" === cc ? cc = "&gt;" : "&" === cc ? cc = "&amp;" : '"' === cc ? cc = "&quot;" : "'" === cc && (cc = "&apos;"), net += cc;
    return net;
};

export function filepath_get_folder(mypath) {
    let fSlash = mypath.lastIndexOf("/"), bSlash = mypath.lastIndexOf("\\"), slashIndex = fSlash > bSlash ? fSlash : bSlash;
    return mypath.substr(0, slashIndex);
};

export function filepath_get_name(mypath) {
    let fSlash = mypath.lastIndexOf("/"), bSlash = mypath.lastIndexOf("\\"), slashIndex = fSlash > bSlash ? fSlash : bSlash;
    return mypath.substr(slashIndex + 1);
};

function weekday_to_short_str(weekday, lang = U) {
    switch (weekday) {
      case 0:
        return std.s(SS_DATE, "Sun", lang);

      case 1:
        return std.s(SS_DATE, "Mon", lang);

      case 2:
        return std.s(SS_DATE, "Tue", lang);

      case 3:
        return std.s(SS_DATE, "Wed", lang);

      case 4:
        return std.s(SS_DATE, "Thu", lang);

      case 5:
        return std.s(SS_DATE, "Fri", lang);

      case 6:
        return std.s(SS_DATE, "Sat", lang);

      default:
        return std.ERR_STR;
    }
}

function weekday_to_long_str(weekday, lang = U) {
    switch (weekday) {
      case 0:
        return std.s(SS_DATE, "Sunday", lang);

      case 1:
        return std.s(SS_DATE, "Monday", lang);

      case 2:
        return std.s(SS_DATE, "Tuesday", lang);

      case 3:
        return std.s(SS_DATE, "Wednesday", lang);

      case 4:
        return std.s(SS_DATE, "Thursday", lang);

      case 5:
        return std.s(SS_DATE, "Friday", lang);

      case 6:
        return std.s(SS_DATE, "Saturday", lang);

      default:
        return std.ERR_STR;
    }
}

function month_to_short_str(month, lang = U) {
    switch (month) {
      case 1:
        return std.s(SS_DATE, "Jan", lang);

      case 2:
        return std.s(SS_DATE, "Feb", lang);

      case 3:
        return std.s(SS_DATE, "Mar", lang);

      case 4:
        return std.s(SS_DATE, "Apr", lang);

      case 5:
        return std.s(SS_DATE, "May", lang);

      case 6:
        return std.s(SS_DATE, "Jun", lang);

      case 7:
        return std.s(SS_DATE, "Jul", lang);

      case 8:
        return std.s(SS_DATE, "Aug", lang);

      case 9:
        return std.s(SS_DATE, "Sep", lang);

      case 10:
        return std.s(SS_DATE, "Oct", lang);

      case 11:
        return std.s(SS_DATE, "Nov", lang);

      case 12:
        return std.s(SS_DATE, "Dec", lang);

      default:
        return std.ERR_STR;
    }
}

function month_to_long_str(month, lang = U) {
    switch (month) {
      case 1:
        return std.s(SS_DATE, "January", lang);

      case 2:
        return std.s(SS_DATE, "February", lang);

      case 3:
        return std.s(SS_DATE, "March", lang);

      case 4:
        return std.s(SS_DATE, "April", lang);

      case 5:
        return std.s(SS_DATE, "May", lang);

      case 6:
        return std.s(SS_DATE, "June", lang);

      case 7:
        return std.s(SS_DATE, "July", lang);

      case 8:
        return std.s(SS_DATE, "August", lang);

      case 9:
        return std.s(SS_DATE, "September", lang);

      case 10:
        return std.s(SS_DATE, "October", lang);

      case 11:
        return std.s(SS_DATE, "November", lang);

      case 12:
        return std.s(SS_DATE, "December", lang);

      default:
        return std.ERR_STR;
    }
}

function adjust_to_city(dateobj, time, city) {
    if (city == std.TIMEZONE_GMT || city == std.TIMEZONE_UTC) {
        let offset = 60 * dateobj.getTimezoneOffset() * 1e3;
        dateobj.setTime(time + offset);
    } else std.argument_err("adjust_to_city: arbitrary time zones not yet implemented");
}

export function time_to_str(format, options = null) {
    var result, token, cc, pos, state, yy, mm, dd, hh, nn, ss, day, patlen, datepath, daterec, time = U, lang = U, city = U;
    for (var property in options) switch (property) {
      case "time":
        time = options.time;
        break;

      case "date":
        options.date instanceof std.a_path ? datepath = options.date : std.argument_err("bad date parm in time_to_str");
        break;

      case "lang":
        lang = options.lang;
        break;

      case "city":
        city = options.city;
        break;

      default:
        std.argument_err("bad option: " + property);
    }
    if (null == datepath) {
        time == U && (time = std.now);
        var dateobj = new Date(1e3 * time);
        city != U && adjust_to_city(dateobj, time, city), daterec = std.seconds_to_date(time, {
            city: city
        }), datepath = std.adr(daterec);
    }
    for (pos = 0, patlen = format.length, state = 0, token = "", result = "", pos = 0; pos < patlen; pos++) switch (cc = format.charAt(pos), state) {
      case 0:
        "[" != cc || 0 != pos && "\\" == format.charAt(pos - 1) ? token += cc : (result += token, token = "[", state = 1);
        break;

      case 1:
        if ("]" == cc) {
            switch (token += "]") {
              case "[sun]":
                token = weekday_to_short_str(dp_to_weekday(datepath));
                break;

              case "[sunday]":
                token = weekday_to_long_str(dp_to_weekday(datepath));
                break;

              case "[jan]":
                token = month_to_short_str(std.getn(datepath, std.F_dt_month));
                break;

              case "[january]":
                token = month_to_long_str(std.getn(datepath, std.F_dt_month));
                break;

              case "[day]":
                token = (day = std.getn(datepath, std.F_dt_day)) >= 1 && day <= 31 ? to_str(day) : std.ERR_STR;
                break;

              case "[day2]":
                token = (day = std.getn(datepath, std.F_dt_day)) >= 1 && day <= 31 ? to_str(day, {
                    min: 2,
                    zero_pad: T
                }) : std.ERR_STR;
                break;

              case "[hour]":
                token = (hh = std.getn(datepath, std.F_dt_hour)) >= 0 && hh <= 23 ? to_str(hh, {
                    min: 2,
                    zero_pad: T
                }) : std.ERR_STR;
                break;

              case "[hour12]":
                token = (hh = std.getn(datepath, std.F_dt_hour)) >= 0 && hh <= 12 ? to_str(hh) : hh > 12 && hh <= 23 ? to_str(hh - 12) : std.ERR_STR;
                break;

              case "[julian]":
                yy = std.getn(datepath, std.F_dt_year), mm = std.getn(datepath, std.F_dt_month), dd = std.getn(datepath, std.F_dt_day), token = (day = std.day_of_year(yy, mm, dd)) >= 1 && day <= 366 ? to_str(day) : std.ERR_STR;
                break;

              case "[month]":
                token = (mm = std.getn(datepath, std.F_dt_month)) >= 1 && mm <= 12 ? to_str(mm) : std.ERR_STR;
                break;

              case "[month2]":
                token = (mm = std.getn(datepath, std.F_dt_month)) >= 1 && mm <= 12 ? to_str(mm, {
                    min: 2,
                    zero_pad: T
                }) : std.ERR_STR;
                break;

              case "[minute]":
                token = (nn = std.getn(datepath, std.F_dt_minute)) >= 0 && nn <= 60 ? to_str(nn, {
                    min: 2,
                    zero_pad: T
                }) : std.ERR_STR;
                break;

              case "[am]":
                token = (hh = std.getn(datepath, std.F_dt_hour)) <= 11 ? std.s(SS_DATE, "AM", lang) : std.s(SS_DATE, "PM", lang);
                break;

              case "[second]":
                token = (ss = std.getn(datepath, std.F_dt_second)) >= 0 && ss <= 61 ? to_str(ss, {
                    min: 2,
                    zero_pad: T,
                    dig: 0
                }) : std.ERR_STR;
                break;

              case "[msec]":
                ss = std.getn(datepath, std.F_dt_second), token = (nn = Math.round(1e3 * std.fract(ss))) >= 0 && nn <= 999 ? to_str(nn, {
                    min: 3,
                    zero_pad: T
                }) : std.ERR_STR;
                break;

              case "[year]":
                token = (yy = std.getn(datepath, std.F_dt_year)) >= 0 && yy <= 9999 ? to_str(yy) : std.ERR_STR;
                break;

              case "[year2]":
                token = (yy = std.getn(datepath, std.F_dt_year)) >= 0 && yy <= 9999 ? to_str(yy % 100) : std.ERR_STR;
                break;

              case "[date]":
                token = time_to_str("[jan] [day], [year]", options);
                break;

              case "[date time]":
                token = time_to_str("[jan] [day], [year] [hour12]:[minute] [am]", options);
                break;

              case "[iso date]":
                token = time_to_str("[year]-[month2]-[day2]", options);
                break;

              case "[iso time]":
                token = time_to_str("[hour]:[minute]:[second]", options);
                break;

              default:
                token = " bad:" + token;
            }
            state = 0, result += token, token = "";
        } else token += cc;
    }
    return result += token;
    function dp_to_weekday(dp) {
        var yy = std.getn(datepath, std.F_dt_year), mm = std.getn(datepath, std.F_dt_month), dd = std.getn(datepath, std.F_dt_day);
        return std.day_of_week(yy, mm, dd, {
            zero: T,
            monday: F
        });
    }
};

export function parse_init(base) {
    gparse_ss = base, gparse_pos = 0, parse_include_white = !1, gparse_errflag = !1, gparse_errmsg = "", gparse_len = base.length;
};

export function parse_get() {
    for (var result; result = gparse_pos < gparse_len ? gparse_ss.charAt(gparse_pos) : PARSE_EOS, gparse_pos++, !(parse_include_white || result > " "); ) ;
    return result;
};

export function parse_unget() {
    gparse_pos -= 1;
};

export function parse_peek() {
    for (var result, pos = gparse_pos; result = pos < gparse_len ? gparse_ss.charAt(pos++) : PARSE_EOS, !(parse_include_white || result > " "); ) ;
    return result;
};

export function parse_err(msg) {
    gparse_errflag = !0, gparse_errmsg = conv("{str} at position {int}", msg, gparse_pos), TRACE_JSON && console.log("json error=" + gparse_errmsg);
};

export function parse_match(targ) {
    let patlen = targ.length;
    if (!parse_include_white) for (;gparse_pos < gparse_ss.length && gparse_ss.charAt(gparse_pos) <= " "; ) gparse_pos += 1;
    return gparse_ss.substr(gparse_pos, patlen) === targ && (gparse_pos += patlen, !0);
};

export function parse_hexdigit() {
    let cc;
    return (cc = parse_get()) >= "0" && cc <= "9" ? cc.charCodeAt(0) - "0".charCodeAt(0) : cc >= "A" && cc <= "F" ? 10 + cc.charCodeAt(0) - "A".charCodeAt(0) : cc >= "a" && cc <= "f" ? 10 + cc.charCodeAt(0) - "a".charCodeAt(0) : (parse_err("Bad hex digit"), 
    0);
};

export function parse_expect(targ) {
    return !!parse_match(targ) || (parse_err(conv("Expected '{str}' but got '{str}'", targ, parse_peek())), !1);
};

function json_hex4() {
    let digit, i, val = 0;
    for (i = 0; i < 4 && (digit = parse_hexdigit(), !gparse_errflag); i++) val = 16 * val + digit;
    return to_char(val);
}

function json_escape() {
    let cc;
    return '"' === (cc = parse_get()) ? '"' : "\\" === cc ? "\\" : "/" === cc ? "/" : "b" === cc ? "\b" : "f" === cc ? "\f" : "n" === cc ? "\n" : "r" === cc ? "\r" : "t" === cc ? "\t" : "u" === cc ? json_hex4() : (parse_err("unexpected character after backslash"), 
    " ");
}

function p_json_string() {
    for (var cc, result = ""; '"' !== (cc = parse_get()); ) {
        if (cc === PARSE_EOS) {
            parse_err("String not terminated, unbalanced double quotes");
            break;
        }
        if ("\\" === cc && (cc = json_escape(), gparse_errflag)) break;
        result += cc;
    }
    return TRACE_JSON && console.log("json string='" + result + "'"), result;
}

function p_json_number(cc) {
    var result, startpos, ndig;
    if (startpos = gparse_pos - 1, "-" === cc && (cc = parse_get()), "0" === cc) cc = parse_get(); else {
        if (!(cc >= "1" && cc <= "9")) return parse_err(conv("bad character '{str}' in number", cc)), parse_include_white = !1, ERR;
        for (;(cc = parse_get()) >= "0" && cc <= "9"; ) ;
    }
    if ("." === cc) for (ndig = 0; (cc = parse_get()) >= "0" && cc <= "9"; ) ndig += 1;
    if ("e" === cc || "E" === cc) {
        for ("+" !== (cc = parse_get()) && "-" !== cc || (cc = parse_get()), ndig = 0; cc >= "0" && cc <= "9"; ) cc = parse_get(), ndig += 1;
        if (0 === ndig) return parse_err("missing exponent after 'e' in number"), parse_include_white = !1, ERR;
    }
    return parse_unget(), result = Number(gparse_ss.substring(startpos, gparse_pos)), TRACE_JSON && console.log("json substr=" + gparse_ss.substring(startpos, gparse_pos) + ", number=" + String(result)), 
    result;
}

function key_to_index(key) {
    let ix;
    return ix = "^" === key.charAt(0) ? to_num(key.substr(1)) : to_num(key), Number.isNaN(ix) && (ix = str_to_enum(key)), ix;
}

function p_beads_node(mod, loc, dest) {
    var keyss, cc, val, val_num, val_str, val_meas, dtype = 0, eflags = 0;
    function do_emit() {
        var destx;
        if (0 !== dtype) {
            switch (TRACE_JSON && console.log(conv("storing value of dtype={} at path={path}", dtype, dest)), dtype) {
              case std.TYPE_NUM:
                std.setv(mod, loc, dest, val_num);
                break;

              case std.TYPE_STR:
                std.setv(mod, loc, dest, val_str);
                break;

              case std.TYPE_MEAS:
                std.setv(mod, loc, dest, val_meas);
                break;

              case std.TYPE_FUNC:
              case std.TYPE_IMAGE:
                break;

              default:
                std.internal_err("not yet imp");
            }
            0 !== eflags && ((destx = std.path_to_pathx(dest)).lev[destx.lev.length - 1].node.eflags |= eflags), dtype = 0;
        } else TRACE_JSON && console.log(conv("no value to store at path={path}", dest));
    }
    for (TRACE_JSON && console.log(conv("p_beads_node, gparse_pos={int}", gparse_pos)); !gparse_errflag; ) {
        if (parse_match(PARSE_EOS)) return void parse_err("Unbalanced braces, missing right braces(or too many left braces)");
        if (parse_match("}")) {
            do_emit();
            break;
        }
        if (!parse_match(",")) {
            if (!parse_expect('"')) break;
            if (keyss = p_json_string(), gparse_errflag) break;
            if (!parse_expect(":")) break;
            switch (keyss) {
              case "e":
                if (val = p_json_number(cc = parse_get()), gparse_errflag) break;
                switch (val) {
                  case 1:
                    val_num = std.ERR;
                    break;

                  case 2:
                    val_num = std.INFINITY;
                    break;

                  case 3:
                    val_num = std.NEG_INFINITY;
                    break;

                  default:
                    return void parse_err("bad e: value");
                }
                dtype = std.TYPE_NUM;
                break;

              case "n":
                cc = parse_get(), val_num = p_json_number(cc), dtype = std.TYPE_NUM;
                break;

              case "s":
                if (!parse_expect('"')) break;
                val_str = p_json_string(), dtype = std.TYPE_STR;
                break;

              case "c":
                if (do_emit(), !parse_expect("{")) return;
                p_beads_termlist(mod, loc, dest);
                break;

              case "g":
                eflags = val >>> 0;
                break;

              case "m":
                var temp = val.split("~");
                val_meas = std.meas(val_num, Number(temp[0]), Number(temp[1])), dtype = std.TYPE_MEAS;
                break;

              case "i":
                dtype = std.TYPE_IMAGE, std.internal_err("not yet");
                break;

              case "f":
                dtype = std.TYPE_FUNC, std.internal_err("not yet");
                break;

              case "p":
                dtype = std.TYPE_PTR, std.internal_err("not yet");
                break;

              default:
                parse_err(conv("Unexpected field {str}", keyss));
            }
        }
    }
}

function p_beads_termlist(dest) {
    let keyss, keyx;
    for (;;) {
        if (TRACE_JSON && console.log(conv("top of beads termlist, pos={int}, ss={str}", gparse_pos, gparse_ss.substr(0, 100))), parse_match(PARSE_EOS)) {
            parse_err("Unbalanced braces, missing right braces(or too many left braces)");
            break;
        }
        if (parse_match("}")) break;
        if (parse_match(",")) continue;
        if (!parse_expect('"')) break;
        if (keyss = p_json_string(), gparse_errflag) break;
        if (!parse_expect(":")) break;
        keyx = key_to_index(keyss);
        let deeper = std.addr_append(dest, keyx);
        if (!parse_expect("{")) break;
        if (p_beads_node(deeper), gparse_errflag) break;
    }
}

function p_json_termlist(dest) {
    let cc, val_str, val_num, keyss, keyx;
    for (;;) {
        if (TRACE_JSON && console.log(conv("top of json termlist, pos={int}, ss={str}", gparse_pos, gparse_ss.substr(0, 100))), parse_match(PARSE_EOS)) {
            parse_err("Unbalanced braces, missing right braces(or too many left braces)");
            break;
        }
        if (parse_match("}")) break;
        if (parse_match(",")) continue;
        if (!parse_expect('"')) break;
        if (keyss = p_json_string(), gparse_errflag) break;
        if (!parse_expect(":")) break;
        keyx = key_to_index(keyss);
        let deeper = std.addr_append(dest, keyx);
        if ('"' == (cc = parse_get())) {
            if (val_str = p_json_string(), gparse_errflag) break;
            std.setv(0, 0, deeper, val_str);
        } else if ("{" == cc) p_json_termlist(deeper); else if ("[" === cc) std.internal_err("p_json_termlist: array not yet imp"); else {
            if (val_num = p_json_number(cc), gparse_errflag) break;
            std.setv(0, 0, deeper, val_num);
        }
    }
}

export function json_to_tree(mod, loc, input, destpath) {
    var version, dest = destpath.clone();
    if (parse_init(input), parse_include_white = !0, parse_match(BEADS_JSON_MARKER)) return 1 === (version = p_json_number(parse_get())) ? p_beads_termlist(mod, loc, destpath) : parse_err(conv("Version error, we don't know how to convert Beads style JSON of version {int}", version)), 
    gparse_errmsg;
    const OBJECT = 3, ARRAY = 4, TOK_NUM = 1, TOK_STR = 2, TOK_OP = 3;
    var arrayx, token, objkey, state = 1, state_stack = [], arrayx_stack = [];
    TRACE_JSON && console.log(conv("=== JSON decode, buffer len={}", input.length));
    outer: for (;token = get_token(), TRACE_JSON && console.log(conv("top of loop, arrayx={}, adepth={}, token={}, dest={}", arrayx, arrayx_stack.length, token.tval, dest)), !gparse_errflag; ) switch (state) {
      case 1:
        if (state = 2, token.tkind == TOK_OP) switch (token.tval) {
          case "[":
            push_state(ARRAY);
            continue outer;

          case "{":
            push_state(OBJECT);
            continue outer;

          case PARSE_EOS:
            break outer;

          default:
            parse_err("Invalid starting character for JSON");
            break outer;
        } else TRACE_JSON && console.log(conv(">> storing {} at {}", dest, token.tval)), std.setv(mod, loc, dest, token.tval);
        break;

      case 2:
        token.tkind == TOK_OP && token.tval == PARSE_EOS || parse_err(conv("Expected end of file, got {}", token.tval));
        break outer;

      case ARRAY:
        if (dest.key[dest.key.length - 1] = arrayx, token.tkind == TOK_OP) switch (token.tval) {
          case "[":
            push_state(ARRAY);
            continue outer;

          case "{":
            push_state(OBJECT);
            continue outer;

          case "]":
            pop_state();
            continue outer;

          case ",":
            continue outer;

          case PARSE_EOS:
            parse_err("Expected ] before end");
            break outer;

          default:
            parse_err(conv("Unexpected token {} in array", token.tval));
            break outer;
        } else TRACE_JSTOR && console.log(conv(">> storing at {}, val=[{}]", dest, token.tval)), std.setv(mod, loc, dest, token.tval), arrayx++;
        break;

      case OBJECT:
        if (token.tkind != TOK_STR) {
            if (token.tkind == TOK_OP) {
                switch (token.tval) {
                  case ",":
                    continue outer;

                  case "}":
                    pop_state();
                    continue outer;

                  case PARSE_EOS:
                    parse_err("Expected } before end");
                    break outer;
                }
                parse_err(conv("Unexpected token {} in object", token.tval));
                break outer;
            }
            parse_err(conv("Not expecting the number {} as a key in an object", token.tval));
            break outer;
        }
        if (objkey = token.tval, dest.key[dest.key.length - 1] = objkey, (token = get_token()).tkind != TOK_OP || ":" != token.tval) {
            parse_err(conv("Expected a ':' but got {}", token.tval));
            break outer;
        }
        if ((token = get_token()).tkind == TOK_OP) switch (token.tval) {
          case "[":
            push_state(ARRAY);
            continue outer;

          case "{":
            push_state(OBJECT);
            continue outer;

          case "}":
            pop_state();
            continue outer;

          case ",":
            continue outer;

          case PARSE_EOS:
            parse_err("Expected value before end");
            break outer;

          default:
            parse_err(conv("Unexpected token {} in array", token.tval));
            break outer;
        } else TRACE_JSTOR && console.log(conv(">> storing at {}, val=[{}]", dest, token.tval)), std.setv(mod, loc, dest, token.tval);
    }
    return gparse_errmsg;
    function push_state(newstate) {
        state_stack.push(state), arrayx_stack.push(arrayx), state = newstate, arrayx = 1, newstate != ARRAY && newstate != OBJECT || dest.key.push(0);
    }
    function pop_state() {
        state != ARRAY && state != OBJECT || dest.key.pop(), state = state_stack.pop(), arrayx = arrayx_stack.pop(), state == ARRAY && arrayx++;
    }
    function get_token() {
        for (var cc, c2, c3, c4, c5, pos, num; pos = gparse_pos, " " == (cc = parse_get()) || "\n" == cc || "\r" == cc || "\t" == cc; ) ;
        switch (cc) {
          case ",":
          case ":":
          case "[":
          case "]":
          case "{":
          case "}":
          case PARSE_EOS:
            return {
                tkind: TOK_OP,
                tpos: pos,
                tval: cc
            };

          case '"':
            return cc = p_json_string(), {
                tkind: TOK_STR,
                tpos: pos,
                tval: cc
            };

          case "-":
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
            return num = p_json_number(cc), {
                tkind: TOK_NUM,
                tpos: pos,
                tval: num
            };

          case "n":
            if (c2 = parse_get(), c3 = parse_get(), c4 = parse_get(), "u" == c2 && "l" == c3 && "l" == c4) return {
                tkind: TOK_NUM,
                tpos: pos,
                tval: U
            };
            parse_err("Was expecting null");
            break;

          case "t":
            if (c2 = parse_get(), c3 = parse_get(), c4 = parse_get(), "r" == c2 && "u" == c3 && "e" == c4) return {
                tkind: TOK_NUM,
                tpos: pos,
                tval: T
            };
            parse_err("Was expecting true");
            break;

          case "f":
            if (c2 = parse_get(), c3 = parse_get(), c4 = parse_get(), c5 = parse_get(), "a" == c2 && "l" == c3 && "s" == c4 && "e" == c5) return {
                tkind: TOK_NUM,
                tpos: pos,
                tval: F
            };
            parse_err("Was expecting false");
            break;

          default:
            parse_err(conv("Unexpected character {}", cc));
        }
        return {
            tkind: TOK_OP,
            tpos: pos,
            tval: PARSE_EOS
        };
    }
};

export function tree_to_json(base, options = null) {
    let base_node, count, pval, fval, imag, ss = "", limit = std.INFINITY;
    function numval(val, forcess) {
        return Number.isNaN(val) ? '"@ERR"' : val === U ? "null" : val === T ? "true" : val === F ? "false" : val === std.INFINITY ? '"@INFINITY"' : val === std.NEG_INFINITY ? '"@NEG_INFINITY"' : std.is_enum_b(val) ? '"@' + enum_to_str(val) + '"' : forcess ? '"' + String(val) + '"' : String(val);
    }
    if (base instanceof std.a_tree) base_node = base; else if (base instanceof std.a_path) {
        if (null === base) return null;
        base_node = std.path_to_node(base);
    } else std.argument_err("expected path or tree");
    for (let property in options) switch (property) {
      case "limit":
        limit = options.limit;
        break;

      default:
        std.argument_err("bad option: " + property);
    }
    return count = 0, ss = BEADS_JSON_MARKER, function do_node(mynode, depth) {
        let elem, meas, first;
        if (!((count += 1) >= limit)) if (count % 8 == 7 && (ss += "\n"), ss += numval(mynode.sub, !0) + ":", first = !0, null != mynode.children) {
            var firstchild = !0;
            for (var ixx in ss += "{", mynode.children) firstchild ? firstchild = !1 : ss += ",", do_node(elem = mynode.children[ixx], depth + 1);
            ss += "}";
        } else depth > 0 && (mynode.eflags & std.EF_VAL_IS_NUM ? ss += numval(mynode.val, !1) : mynode.eflags & std.EF_VAL_IS_STR ? ss += escape_to_json(mynode.val) : mynode.eflags & std.EF_VAL_IS_ERR ? ss += "@ERR" : mynode.eflags & std.EF_VAL_IS_IMAGE ? (imag = mynode.val, 
        ss += '"^i|' + String(imag.naturalWidth) + "|" + String(imag.naturalHeight) + '|"') : mynode.eflags & std.EF_VAL_IS_MEAS ? (meas = mynode.val, ss += '"^m|' + numval(meas.mag, !1) + "|" + numval(meas.unit) + "|" + numval(meas.family) + '"') : mynode.eflags & std.EF_VAL_IS_FUNC ? (fval = mynode.val, 
        ss += '"^f|' + fval.name + '"') : mynode.eflags & std.EF_VAL_IS_PATH ? (pval = mynode.val, ss += '"^p|', ss += "|") : ss += "@ERR");
    }(base_node, 0), ss += "}}";
};

export function str_to_enum(ident) {
    return str_hash_fnv(ident) + std.FIRST_ENUM;
};

export function enum_to_str(val, use_stringtable = !1) {
    let ss;
    return std.CHECKS && !is_enumb(val) && std.halt(), ss = void 0 === std.ENUMS[val] ? "ENUM:" + to_str(val -= std.FIRST_ENUM, {
        min: 10,
        zero_pad: T
    }) : std.ENUMS[val];
};

export function from_char(char) {
    return null === char || "" === char ? ERR : char.charCodeAt(0);
};

export function to_char(n) {
    return Number.isNaN(n) || n === U || n <= 0 ? "" : String.fromCodePoint(n);
};

function hexdig_to_num(char) {
    switch (char) {
      case "0":
        return 0;

      case "1":
        return 1;

      case "2":
        return 2;

      case "3":
        return 3;

      case "4":
        return 4;

      case "5":
        return 5;

      case "6":
        return 6;

      case "7":
        return 7;

      case "8":
        return 8;

      case "9":
        return 9;

      case "A":
      case "a":
        return 10;

      case "B":
      case "b":
        return 11;

      case "C":
      case "c":
        return 12;

      case "D":
      case "d":
        return 13;

      case "E":
      case "e":
        return 14;

      case "F":
      case "f":
        return 15;

      default:
        return ERR;
    }
}

export function color_to_hex(c) {
    return "#" + to_str(c, {
        base: 16,
        min: 6,
        zero_pad: T
    });
};

export function hex_to_color(ss) {
    if (null == ss) return ERR;
    var pos = 0;
    if (7 == ss.length) {
        if ("#" != ss.charAt(0)) return ERR;
        pos = 1;
    }
    for (var color = 0, i = 0; i < 6; i++) color = 16 * color + hexdig_to_num(ss.charAt(pos + i));
    return color;
};

export function num_to_hex(n) {
    let buf = new ArrayBuffer(8), bytes = new Uint8Array(buf);
    new Float64Array(buf)[0] = n;
    for (var ss = "", i = 0; i < 8; i++) ss += ("00" + bytes[i].toString(16)).slice(-2);
    return ss;
};

export function hex_to_num(ss) {
    if (16 != ss.length) return ERR;
    let buf = new ArrayBuffer(8), bytes = new Uint8Array(buf), bx = 0;
    for (var spos = 0; spos < 16; spos += 2) {
        var digit = parseInt(ss.substring(spos, spos + 2), 16);
        bytes[bx] = digit, bx += 1;
    }
    return new Float64Array(buf)[0];
};

export function real64_to_str(val, precision = U, minwidth = 1, decimal_cc = ".", thou_cc = ",", negparen = !1, posplus = !1) {
    let ss, cc, pattern, pos, state, nd;
    if (precision === U ? (ss = val.toString()).indexOf(".") < 0 && (precision = 0) : ss = val.toFixed(precision), "." !== decimal_cc && (pattern = /\./, ss = ss.replace(pattern, decimal_cc)), "" !== thou_cc) for (TRACE_CONV && console.log("real64, before comma insertion, ss=" + ss), 
    pos = ss.length - 1, state = 0 === precision ? 2 : 1, nd = 0; !(pos < 0); ) {
        switch (cc = ss.charAt(pos), TRACE_CONV && console.log("at top of loop, nd=" + nd + ", state=" + String(state) + ", pos=" + String(pos) + ", cc=" + cc), state) {
          case 1:
            "." === cc && (state = 2, nd = 0);
            break;

          case 2:
            cc >= "0" && cc <= "9" && 4 === (nd += 1) && (ss = ss.substr(0, pos + 1) + thou_cc + ss.substr(pos + 1), nd = 1);
        }
        pos -= 1;
    }
    for (val > 0 && posplus && (ss = "+" + ss), negparen && val < 0 && (ss = "(" + ss.substr(1) + ")"); ss.length < minwidth; ) ss = " " + ss;
    return ss;
};

function strip_trailing_zeros(ss, decimal_cc) {
    let dpos, pos, ndrop, lastchar = ss.length - 1;
    if (ndrop = 0, (dpos = ss.indexOf(decimal_cc)) >= 0) for (pos = lastchar; ;) {
        if ("0" !== ss.charAt(pos)) {
            ss.charAt(pos) === decimal_cc && (ndrop += 1);
            break;
        }
        ndrop += 1, pos -= 1;
    }
    return 0 === ndrop ? ss : ss.slice(0, -ndrop);
}

export function to_num(ss) {
    if (0 == ss.length) return 0;
    let result;
    return ss === std.U_STR ? U : ss === std.ERR_STR ? ERR : (result = Number(ss), Number.isNaN(result) ? ERR : result);
};

export function is_enumb(n) {
    return n >= std.FIRST_ENUM && n <= std.LAST_ENUM;
};

export function angle_to_str(val) {
    return to_str(std.to_unit(val, std.N_deg), {
        dig: 1
    });
};

export function xy_to_str(val) {
    var x = std.getn(val, std.F_x), y = std.getn(val, std.F_y);
    return "[" + to_str(x, {
        dig: 1
    }) + ", " + to_str(y, {
        dig: 1
    }) + "]";
};

export function rect_to_str(val) {
    var left = std.getn(val, std.F_left), top = std.getn(val, std.F_top), width = std.getn(val, std.F_width), height = std.getn(val, std.F_height);
    return "[" + to_str(left, {
        dig: 1
    }) + "," + to_str(top, {
        dig: 1
    }) + " " + to_str(width, {
        dig: 1
    }) + "x" + to_str(height, {
        dig: 1
    }) + "]";
};

export function to_str(val, options = null) {
    let nshort, old_digits, ss, base = 10, currency_cc = "$ ", decimal_cc = ".", digits = U, is_autodec = !1, is_autoinc = !1, is_currency = !1, is_human = !1, is_kflag = !1, is_negparen = !1, is_percent = !1, is_posplus = !1, is_thou = !1, is_zerodrop = !0, is_zeropad = !1, language = "ENG", maxlen = 999, minlen = 0, suffix = null, u_cc = "U", thou_cc = ",", units = U;
    !std.CHECKS || null === options || options instanceof Object || std.argument_err("bad syntax, 2nd parm must be object");
    for (let property in options) switch (property) {
      case "increase":
        is_autoinc = options.increase == T;
        break;

      case "decrease":
        is_autodec = options.decrease == T;
        break;

      case "base":
        2 !== (base = options.base) && 8 !== base && 10 !== base && 16 !== base && std.argument_err(`to_str:base ${base} not yet implemented`);
        break;

      case "currency":
        is_currency = options.currency == T;
        break;

      case "currency_cc":
        currency_cc = options.currency_cc;
        break;

      case "decimal_cc":
        decimal_cc = options.decimal_cc;
        break;

      case "human":
        is_human = options.human == T;
        break;

      case "k":
        is_kflag = options.k == T;
        break;

      case "lang":
        language = options.lang;
        break;

      case "max":
        maxlen = options.max;
        break;

      case "min":
        minlen = options.min;
        break;

      case "neg_paren":
        is_negparen = options.neg_paren == T;
        break;

      case "pos_plus":
        is_posplus = options.pos_plus == T;
        break;

      case "percent":
        is_percent = options.percent == T;
        break;

      case "dig":
        digits = options.dig;
        break;

      case "u_cc":
        u_cc = options.u_cc;
        break;

      case "thou":
        is_thou = options.thou == T;
        break;

      case "thou_cc":
        thou_cc = options.thou_cc;
        break;

      case "units":
        units = options.units;
        break;

      case "zero_pad":
        is_zeropad = options.zero_pad == T;
        break;

      case "zero_drop":
        is_zerodrop = options.zero_drop == T;
        break;

      default:
        std.argument_err("bad option: " + property);
    }
    if (std.CHECKS && (is_autoinc || is_autodec) && digits === U && std.argument_err("conflicting parms, increase/decrease must have digits specified"), is_currency && (minlen -= currency_cc.length), is_posplus && val > 0 && (minlen -= 1), 
    val === U || null == val) ss = u_cc, is_zeropad = !1; else if ("string" == typeof val) ss = val; else if (val instanceof std.a_meas) {
        let usuffix, mymeas = val;
        Number.isNaN(units) || Number.isNaN(mymeas.mag) ? (ss = "ERR", is_zeropad = !1) : units === U ? (usuffix = mymeas.family === U ? null == mymeas.unitss ? "" : " " + mymeas.unitss.split(",").join("⋅") : " " + enum_to_str(units = std.getn(std.families, mymeas.family, std.F_fam_base)), 
        ss = to_str(mymeas.mag, options) + usuffix) : ss = to_str(std.to_unit(mymeas, units), options) + " " + enum_to_str(units);
    } else if (val instanceof std.a_path) ss = conv_path(val); else if (val instanceof std.a_image) {
        let myimage = val;
        ss = myimage.url + " " + String(myimage.bits.width) + " x " + String(myimage.bits.height);
    } else if (val instanceof std.a_function) {
        let myfunc = val;
        ss = std.MODULES[myfunc.modnum] + ":" + myfunc.name;
    } else if (val instanceof RegExp) ss = val.toString(); else if (val instanceof std.a_sound) {
        ss = to_str(val.id, options);
    } else if (val instanceof std.a_sys_gradient) {
        ss = "gradient:" + val.grad_kind;
    } else if (val === std.INFINITY) ss = "INFINITY", is_zeropad = !1; else if (val === std.NEG_INFINITY) ss = "-INFINITY", is_zeropad = !1; else if (val === T) ss = "Y", is_zeropad = !1; else if (val === F) ss = "N", 
    is_zeropad = !1; else if (is_enumb(val)) ss = enum_to_str(val), is_zeropad = !1; else if (Number.isNaN(val)) ss = "ERR", is_zeropad = !1; else {
        if (is_kflag && (Math.abs(val) >= 1e9 ? (digits = Math.abs(val) >= 1e10 ? 0 : 1, val = std.round(val / 1e9, -1), suffix = "B") : Math.abs(val) >= 1e6 ? (digits = Math.abs(val) >= 1e7 ? 0 : 1, val = std.round(val / 1e6, -1), 
        suffix = "M") : Math.abs(val) >= 1e3 && (val = std.round(val / 1e3), suffix = "K")), is_autodec && Math.abs(val) >= 1e3 && (digits = 0), is_thou || (thou_cc = ""), 10 === base) is_percent && (val *= 100, 
        suffix = "%"), ss = real64_to_str(val, digits, 1, decimal_cc, thou_cc, is_negparen); else if (16 === base) for (ss = val.toString(16).toUpperCase(); ss.length < minlen - 2; ) ss = is_zeropad ? "0" + ss : " " + ss; else ss = (val >>> 0).toString(8 === base ? 8 : 2);
        if (is_autoinc && /^0\.0+$/.test(ss) && digits < 4) return old_digits = digits, options.digits = digits + 1, ss = to_str(val, options), options.digits = old_digits, ss;
        "." === ss.charAt(0) && (ss = "0" + ss), is_autodec && (ss = strip_trailing_zeros(ss, decimal_cc)), is_zerodrop && (ss = strip_trailing_zeros(ss, decimal_cc)), null !== suffix && (ss += suffix);
    }
    return (nshort = minlen - ss.length) > 0 && (ss = is_zeropad ? str_repeat("0", nshort) + ss : str_repeat(" ", nshort) + ss), is_currency && (ss = currency_cc + ss), is_posplus && val > 0 && (ss = "+" + ss), 
    ss.length > maxlen && (ss = str_repeat("#", maxlen)), ss;
};

function strip_module(ss) {
    return ss.substring(0, ss.indexOf(":"));
}

export function color_to_rgb_str(color) {
    return color === std.U_COLOR ? "rgb(U)" : "rgb(" + String(std.r255(color)) + "," + String(std.g255(color)) + "," + String(std.b255(color)) + ")";
};

export function node_to_str(elem, show_u) {
    let elem_ss, nodetype, nodeval;
    if (null !== elem) if (elem.eflags & std.EF_VAL_IS_U) {
        if (!show_u) return "";
        nodetype = ":U", nodeval = "";
    } else if (elem.eflags & std.EF_VAL_IS_ERR) nodetype = ":ERR", nodeval = ""; else if (elem.eflags & std.EF_VAL_IS_NUM) nodetype = ":num", nodeval = to_str(elem.val); else if (elem.eflags & std.EF_VAL_IS_STR) nodetype = ":str", 
    nodeval = '"' + elem.val + '"'; else if (elem.eflags & std.EF_VAL_IS_IMAGE) nodetype = ":image", nodeval = "IMAGE"; else if (elem.eflags & std.EF_VAL_IS_FUNC) {
        nodetype = ":func", nodeval = elem.val.name;
    } else if (elem.eflags & std.EF_VAL_IS_PATH) nodetype = ":path", nodeval = conv_path(elem.val); else if (elem.eflags & std.EF_VAL_IS_MEAS) nodetype = ":meas", nodeval = "MEAS"; else if (elem.eflags & std.EF_VAL_IS_SOUND) nodetype = ":sound", 
    nodeval = "SOUND"; else if (elem.eflags & std.EF_VAL_IS_GRAD) nodetype = ":grad", nodeval = "GRAD"; else if (elem.eflags & std.EF_VAL_IS_BYTES) nodetype = ":bytes", nodeval = "BYTES"; else if (elem.eflags & std.EF_VAL_IS_COLOR) {
        nodetype = ":color", nodeval = color_to_rgb_str(elem.val);
    } else if (elem.eflags & std.EF_VAL_IS_DATE) {
        nodetype = ":date";
        elem.val;
        nodeval = "DATE";
    } else elem.eflags & std.EF_VAL_IS_VIDEO ? (nodetype = ":video", nodeval = "VIDEO") : elem.eflags & std.EF_VAL_IS_OBJECT ? (nodetype = ":object", nodeval = "OBJECT") : std.argument_err("bad node"); else nodetype = "<NULL>", 
    nodeval = "";
    return elem_ss = "", "" !== nodeval && (elem_ss += "=" + nodeval), elem_ss;
};

export function tree_to_str(input, options = null) {
    let count, base_node, ss = "", showu = !0, first = !0, limit = std.INFINITY;
    for (let property in options) switch (property) {
      case "prompt":
        ss = options.prompt;
        break;

      case "showu":
        options.showu === T && (showu = !0);
        break;

      case "limit":
        limit = options.limit;
        break;

      default:
        std.argument_err("bad option: " + property);
    }
    return ss += "{", input instanceof std.a_tree ? base_node = input : input instanceof std.a_path ? base_node = std.path_to_node(input) : std.argument_err("bad input type, must be tree or path"), function walk_nodes(node, prev_subscript) {
        let son_ss, son, curr_subscript;
        if (null !== node) for (var ix in node.children) {
            if (son_ss = node_to_str(son = node.children[ix], showu), "" !== (curr_subscript = prev_subscript) && (curr_subscript += ","), curr_subscript += to_str(son.sub), "" !== son_ss && (first ? first = !1 : ss += ", ", 
            ss += "[" + curr_subscript + "]", ss += son_ss), (count += 1) >= limit) {
                ss += "...";
                break;
            }
            null !== son.children && walk_nodes(son, curr_subscript);
        }
    }(base_node, ""), ss += "}";
};

export function str_len(ss) {
    return ss === std.U_STR ? U : ss === std.ERR_STR ? ERR : ss.length;
};

export function to_upper(ss) {
    return ss === std.U_STR || ss === std.ERR_STR ? ss : ss.toUpperCase();
};

export function to_lower(ss) {
    return ss === std.U_STR || ss === std.ERR_STR ? ss : ss.toLowerCase();
};

export function str_repeat(ss, n) {
    let nn;
    return ss === std.U_STR || ss === std.ERR_STR ? ss : std.is_numeric(n) !== T ? std.ERR_STR : (nn = Math.round(n)) <= 0 ? "" : 1 === nn ? ss : ss.repeat(nn);
};

export function str_reverse(ss) {
    if (ss === std.U_STR || ss === std.ERR_STR) return ss;
    if ("" === ss) return "";
    let list = ss.split("");
    return list.reverse(), list.join("");
};

export function str_begins(ss, pattern) {
    if (null === ss || null === pattern) return U;
    let str_len = ss.length, pat_len = pattern.length;
    return pat_len > str_len ? F : ss.substr(0, pat_len) === pattern ? T : F;
};

export function str_ends(ss, pattern) {
    if (null === ss || null === pattern) return U;
    let str_len = ss.length, pat_len = pattern.length;
    return pat_len > str_len ? F : ss.substr(str_len - pat_len, pat_len) === pattern ? T : F;
};

export function str_strip_quotes(ss) {
    let startpos, netlen, some, code;
    return ss === std.U_STR || ss === std.ERR_STR ? ss : (some = !1, netlen = ss.length, (code = ss.charCodeAt(netlen - 1)) !== CODE_SQUOTE && code !== CODE_DQUOTE || (netlen -= 1, some = !0), startpos = 0, 
    (code = ss.charCodeAt(0)) !== CODE_SQUOTE && code !== CODE_DQUOTE || (startpos = 1, netlen -= 1, some = !0), some ? ss.substr(startpos, netlen) : ss);
};

export function str_trim(ss) {
    return null == ss ? null : ss.trim();
};

export function pad_left(ss, targ_len, options) {
    if (ss === std.U_STR || ss === std.ERR_STR) return ss;
    let pad_cc = " ";
    for (let property in options) switch (property) {
      case "pad":
        pad_cc = options.pad.charAt(0);
        break;

      default:
        std.argument_err("bad option: " + property);
    }
    let nshort = targ_len - ss.length;
    for (;nshort > 0; ) ss = pad_cc + ss, nshort -= 1;
    return ss;
};

export function pad_right(ss, targ_len, options) {
    if (ss === std.U_STR || ss === std.ERR_STR) return ss;
    let pad_cc = " ";
    for (let property in options) switch (property) {
      case "pad":
        pad_cc = options.pad.charAt(0);
        break;

      default:
        std.argument_err("bad option: " + property);
    }
    let nshort = targ_len - ss.length;
    for (;nshort > 0; ) ss += pad_cc, nshort -= 1;
    return ss;
};

export function subset(ss, options) {
    var rev_flag = !1, start = 1, len = U, end = U;
    if (ss === std.U_STR || ss === std.ERR_STR) return ss;
    for (var property in options) switch (property) {
      case "rev":
        rev_flag = options.rev === T;
        break;

      case "from":
        (start = options.from) < 1 && (start = 1);
        break;

      case "to":
        end = options.to;
        break;

      case "len":
        len = options.len;
        break;

      default:
        std.argument_err("bad option: " + property);
    }
    if (std.is_err_enum(start) === T || std.is_err(len) === T || std.is_err(end) === T) return ERROR_STRING;
    var net_len = std.INFINITY;
    return len != U ? net_len = len : end != U && (net_len = end - start + 1), rev_flag ? net_len == std.INFINITY ? ss.substr(-start) : ss.substr(-(start + net_len - 1), net_len) : ss.substr(start - 1, net_len);
};

export function str_digit(ss, options) {
    let cc, digit, rev_flag = F, from = 1;
    if (ss === std.U_STR) return U;
    if (ss === std.ERR_STR) return ERR;
    for (let property in options) switch (property) {
      case "from":
        from = options.from;
        break;

      case "rev":
        rev_flag = options.rev;
        break;

      default:
        std.argument_err("bad option: " + property);
    }
    return (digit = from_char(cc = subset(ss, {
        from: from,
        rev: rev_flag,
        len: 1
    }))) >= CODE_0 && digit <= CODE_9 ? digit - CODE_0 : ERR;
};

export function str_ins(ss, ins, options) {
    if (ss === std.U_STR || ins == std.U_STR) return std.U_STR;
    if (ss === std.ERR_STR || ins == std.ERR_STR) return std.ERR_STR;
    let to = U, reverse = !1, del = 0, last = ss.length;
    for (let property in options) switch (property) {
      case "del":
        if (del = options.del, std.is_numeric(del) != T) return std.ERR_STR;
        del < 0 && (del = 0);
        break;

      case "to":
        if (to = options.to, std.is_numeric(to) != T) return std.ERR_STR;
        to < 1 && (to = 1);
        break;

      case "rev":
        reverse = options.rev == T;
        break;

      default:
        std.argument_err("bad option: " + property);
    }
    return reverse && (to = last + 1 - to), ss.slice(0, to - 1) + ins + ss.slice(to - 1 + del);
};

export function str_del(ss, options) {
    if (ss === std.U_STR) return std.U_STR;
    if (ss === std.ERR_STR) return std.ERR_STR;
    let from = 1, to = U, len = U, reverse = !1, last = ss.length;
    for (let property in options) switch (property) {
      case "from":
        if (from = options.from, std.is_numeric(from) != T) return std.ERR_STR;
        from < 1 && (from = 1);
        break;

      case "to":
        if (to = options.to, std.is_numeric(to) != T) return std.ERR_STR;
        to < 1 && (to = 1);
        break;

      case "len":
        if (len = options.len, std.is_numeric(len) != T) return std.ERR_STR;
        if (len <= 0) return "";
        break;

      case "rev":
        reverse = options.rev == T;
        break;

      default:
        std.argument_err("bad option: " + property);
    }
    if (to != U) {
        if (to < from) return ss;
    } else len != U ? to = from + len - 1 : std.argument_err("must specify either to: or len:");
    if (reverse) {
        let old_to = to;
        to = last + 1 - from, from = last + 1 - old_to;
    }
    return ss.slice(0, from - 1) + ss.slice(to);
};

export function escape_for_regexp(input) {
    return input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

export function str_to_regexp(input, options) {
    var ignore = !0, global = !1, multiline = !1;
    for (var property in options) switch (property) {
      case "ignore_case":
        ignore = options.ignore_case == T;
        break;

      case "global":
        global = options.global == T;
        break;

      case "multiline":
        multiline = options.multiline == T;
        break;

      default:
        std.argument_err("bad option: " + property);
    }
    var flags = "";
    return ignore && (flags += "i"), global && (flags += "g"), multiline && (flags += "m"), new RegExp(input, flags);
};

export function str_find(module, loc, haystack, needle, list, options) {
    let wrap = !1, start = 0, reps = 1;
    var ignore = T;
    let stop_pos, did_wrap, result, m_start, m_end, m_len, pattern, nfound = 0;
    if (std.trunc_tree(module, loc, list), null !== haystack && "" !== haystack && haystack !== std.ERR_STR && null !== needle && "" !== needle && needle !== std.ERR_STR) {
        for (let property in options) switch (property) {
          case "start":
            start = options.start - 1;
            break;

          case "reps":
            reps = std.numeric_arg(options.reps);
            break;

          case "wrap":
            options.wrap === T && (wrap = !0);
            break;

          case "ignore_case":
            ignore = options.ignore_case;
            break;

          default:
            std.argument_err("bad option: " + property);
        }
        if ("string" == typeof needle) pattern = str_to_regexp(escape_for_regexp(needle), {
            ignore_case: ignore,
            global: T
        }); else {
            if (!(needle instanceof RegExp)) return void (std.CHECKS && std.argument_err("bad pattern"));
            pattern = needle;
        }
        for (did_wrap = !wrap, stop_pos = haystack.length, pattern.lastIndex = start; nfound < reps; ) {
            if (null !== (result = pattern.exec(haystack))) {
                if (m_start = result.index, m_end = pattern.lastIndex, TRACE_FIND && console.log(conv("  MATCH, m_start={}, m_end={}", m_start, m_end)), nfound += 1, std.setv(module, loc, list, nfound, F_find_start, m_start + 1), 
                m_len = m_end - m_start, std.setv(module, loc, list, nfound, F_find_len, m_len), nfound >= reps) break;
            } else TRACE_FIND && console.log("--not found"), pattern.lastIndex = stop_pos;
            if (pattern.lastIndex >= stop_pos) {
                if (did_wrap) break;
                TRACE_FIND && console.log(" doing wrap, starting at top"), did_wrap = !0, pattern.lastIndex = 0, stop_pos = start;
            }
        }
    }
};

export function str_pos(haystack, needle, options) {
    var start = 1, ignore = T, list = new a_tree(_M, "str_pos");
    if (haystack === std.ERR_STR || needle === std.ERR_STR) return ERR;
    if (null === haystack || "" === haystack || null === needle || "" === needle) return U;
    for (var property in options) switch (property) {
      case "start":
        start = options.start;
        break;

      case "ignore_case":
        ignore = options.ignore_case;
        break;

      default:
        std.argument_err("bad option: " + property);
    }
    return str_find(_M, 0, haystack, needle, std.adr(list), {
        start: start,
        ignore_case: ignore
    }), std.getn(list, 1, F_find_start);
};

export function str_replace(haystack, needle, replace) {
    return haystack.replace(needle, replace);
};

export function str_replace_multiple(haystack, changes, options) {
    let patx, curr_patt, curr_repl, recptr, result, replacement, m_start, m_end, buf = haystack, ndone = 0, traceflag = !1;
    if (null === haystack || "" === haystack) return haystack;
    for (let property in options) switch (property) {
      case "trace":
        options.trace === T && (traceflag = !0);
        break;

      default:
        std.argument_err("bad option: " + property);
    }
    let loop1 = new std.a_loop({
        across: changes
    });
    for (;loop1.next(); ) for (recptr = loop1.path, patx = loop1.index, curr_patt = std.get_generic(recptr, F_find_patt), curr_repl = std.gets(recptr, F_repl_patt), curr_patt.lastIndex = 0; null !== (result = curr_patt.exec(buf)); ) {
        m_start = result.index, m_end = curr_patt.lastIndex;
        for (var pos, chunks = [], startpos = 0; ;) {
            if (!((pos = curr_repl.indexOf("$", startpos)) >= 0 && (cc = curr_repl.charAt(pos + 1), cc >= "0" && cc <= "9")) || 0 != pos && "\\" == curr_repl.charAt(pos - 1)) {
                add_fragment(startpos, curr_repl.length);
                break;
            }
            add_fragment(startpos, pos), chunks.push(Number(curr_repl.charAt(pos + 1))), startpos = pos + 2;
        }
        replacement = calc_replacement(chunks, result), traceflag && (ndone += 1, log_context(String(patx), buf, m_start, m_end, replacement)), buf = buf.substring(0, m_start) + replacement + buf.substring(m_end), 
        curr_patt.lastIndex += m_start + replacement.length;
    }
    var cc;
    return traceflag && console.log("--- did " + String(ndone) + " replacements"), buf;
    function add_fragment(startpos, endpos) {
        if (endpos > startpos) {
            let ss = curr_repl.substring(startpos, endpos);
            chunks.push(ss);
        }
    }
};

function calc_replacement(target, groups) {
    let element, groupx, result = "";
    for (element of target) "string" == typeof element ? result += element : "number" == typeof element ? (groupx = element) >= 0 && groupx < groups.length && (result += groups[groupx]) : std.argument_err("bad target");
    return result;
}

function log_context(patname, buf, m_start, m_end, replacement) {
    let prefix, suffix, pos, nprefix, nsuffix, cc, buflen = buf.length;
    for (pos = m_start, nprefix = 0, prefix = "《"; !((pos -= 1) < 0); ) {
        if ("\n" === (cc = buf.charAt(pos)) || "\r" === cc) {
            prefix = "¬" + prefix;
            break;
        }
        if (prefix = (cc = net_log_cc(cc)) + prefix, (nprefix += 1) > 17) {
            prefix = "..." + prefix;
            break;
        }
    }
    for (pos = m_end, suffix = "》", nsuffix = 0; !(pos >= buflen); ) {
        if ("\n" === (cc = buf.charAt(pos)) || "\r" === cc) {
            suffix += "¬";
            break;
        }
        if (suffix += cc = net_log_cc(cc), (nsuffix += 1) > 40) {
            suffix += "...";
            break;
        }
        pos += 1;
    }
    console.log("\npattern " + patname + ", start=" + String(m_start)), console.log("   " + prefix + net_log_ss(buf.substring(m_start, m_end)) + suffix), console.log("   " + prefix + net_log_ss(replacement) + suffix);
}

function net_log_ss(ss) {
    let i, net = "", n = ss.length;
    for (i = 0; i < n; i++) net += net_log_cc(ss.charAt(i));
    return net;
}

function net_log_cc(cc) {
    return "\t" === cc ? "▲" : "\n" === cc || "\r" === cc ? "¬" : cc < " " ? "✪" : cc;
}

export function str_inject(input, ...parms) {
    let pattern, result = input;
    for (let parm of parms) pattern = "$" + String(1), result = result.replaceAll(pattern, parm);
    return result;
};

export function join_words(list, delim) {
    for (var result = "", first = !0, loop1 = new std.a_loop({
        across: list
    }); loop1.next(); ) "string" == typeof loop1.val && (first ? first = !1 : result += delim, result += loop1.val);
    return result;
};

export function split_words(module, loc, buf, dest, options) {
    var delim = "\t";
    for (var property in options) switch (property) {
      case "delim":
        delim = options.delim;
        break;

      default:
        std.argument_err("bad option: " + property);
    }
    if (std.trunc_tree(module, loc, dest), null != buf && buf != std.ERR_STR) {
        var word, list = buf.split(delim), wordx = 1;
        for (word of list) std.setv(module, loc, dest, wordx, word), wordx++;
    }
};

export function split_lines(module, loc, buf, dest) {
    let startpos, len, linex, i, code;
    function emit_fragment(spos, epos) {
        let fragment;
        linex += 1, fragment = epos > spos ? buf.substring(spos, epos) : "", TRACE_SPLIT && console.log(conv(" adding line {int} with ss={str}", linex, fragment)), std.setv(module, loc, dest, linex, fragment);
    }
    if (std.trunc_tree(module, loc, dest), null != buf && buf != std.ERR_STR && 0 !== (len = buf.length)) for (linex = 0, i = 0, (code = buf.charCodeAt(0)) !== BOM_UTF16_LE && code !== BOM_UTF16_BE || (i += 1), 
    startpos = i; ;) {
        if (i >= len) {
            i > startpos && emit_fragment(startpos, i);
            break;
        }
        code = buf.charCodeAt(i), i += 1, code === CODE_CR ? (emit_fragment(startpos, i - 1), i < len && buf.charCodeAt(i) === CODE_NL && (i += 1), startpos = i) : code === CODE_NL && (emit_fragment(startpos, i - 1), 
        startpos = i);
    }
};

export function split_lines_words(module, loc, buf, dest, _options) {
    const STRIP_TRAILING_SP = !0;
    let token, cc, len, rowx, colx, pos, unicode, fresh_word, inside_quotes, delimiter = "\t", handle_quotes = !0;
    function emit_token() {
        if (token.length > 0) {
            if (STRIP_TRAILING_SP) {
                let ntrailing = 0, lastpos = token.length - 1;
                for (;lastpos >= 0 && " " === token.charAt(lastpos); ) lastpos -= 1, ntrailing += 1;
                ntrailing > 0 && (token = token.substring(0, lastpos + 1));
            }
            TRACE_SPLIT && console.log(conv(" adding cell[{int},{int}] with ss=[{str}]", rowx, colx, token)), std.setv(module, loc, dest, rowx, colx, token);
        }
        token = "", fresh_word = !0, inside_quotes = !1;
    }
    if (std.trunc_tree(module, loc, dest), null != buf && buf != std.ERR_STR && 0 !== (len = buf.length)) {
        for (let property in _options) switch (property) {
          case "quotes":
            handle_quotes = _options.quotes === T;
            break;

          case "delim":
            delimiter = _options.delim;
            break;

          default:
            std.argument_err("bad option: " + property);
        }
        for (rowx = 1, colx = 1, pos = 0, inside_quotes = !1, fresh_word = !0, token = "", (unicode = buf.charCodeAt(0)) !== BOM_UTF16_LE && unicode !== BOM_UTF16_BE || (pos += 1); ;) {
            if (pos >= len) {
                emit_token();
                break;
            }
            if (cc = buf.charAt(pos), pos += 1, '"' === cc && handle_quotes) {
                if (fresh_word) {
                    fresh_word = !1, inside_quotes = !0;
                    continue;
                }
                if (pos < len && '"' === buf.charAt(pos)) {
                    token += '"', pos += 1;
                    continue;
                }
                inside_quotes = !1;
            } else if (" " !== cc || 0 !== token.length) {
                if (inside_quotes) {
                    if (cc === CR) {
                        pos < len && buf.charAt(pos) === LF && (pos += 1), token += LF, fresh_word = !1;
                        continue;
                    }
                    if (cc === LF) {
                        token += LF, fresh_word = !1;
                        continue;
                    }
                } else {
                    if (cc === CR) {
                        pos < len && buf.charAt(pos) === LF && (pos += 1), emit_token(), rowx += 1, colx = 1;
                        continue;
                    }
                    if (cc === LF) {
                        emit_token(), rowx += 1, colx = 1;
                        continue;
                    }
                    if (cc === delimiter) {
                        emit_token(), colx += 1;
                        continue;
                    }
                }
                token += cc, fresh_word = !1;
            } else fresh_word = !1;
        }
    }
};

export function escape_to_json(base) {
    let ch, s = "", len = base.length;
    for (let i = 0; i < len; i++) switch (ch = base.charAt(i)) {
      case '"':
        s += '\\"';
        break;

      case "\\":
        s += "\\\\";
        break;

      case "\b":
        s += "\\b";
        break;

      case "\f":
        s += "\\f";
        break;

      case "\n":
        s += "\\n";
        break;

      case "\r":
        s += "\\r";
        break;

      case "\t":
        s += "\\t";
        break;

      default:
        if (ch < " ") {
            let hexCode = ch.charCodeAt(0).toString(16);
            s += "\\u" + (2 === hexCode.length ? "00" : "000") + hexCode;
        } else s += ch;
    }
    return '"' + s + '"';
};

export function str_range(base, start, stop = 99999999999999) {
    return 0 === base.length || std.is_numeric(start) !== T || std.is_numeric(stop) !== T ? "" : (start < 0 && (start = 0), stop > base.length && (stop = base.length), base.slice(start, stop));
};

export function rgb_str(pixel) {
    return "R:" + String(std.r255(pixel)) + " G:" + String(std.g255(pixel)) + " B:" + String(std.b255(pixel));
};

export function rgb_hex_str(pixel) {
    return "0x" + to_str(pixel, {
        base: 16,
        min: 6,
        zero_pad: T
    });
};

export function rgb_html_str(pixel) {
    return "#" + to_str(pixel, {
        base: 16,
        min: 6,
        zero_pad: T
    });
};

export function conv(pat, ...parms) {
    let result, token, cc, pos, state, patlen, parmx, digits, parm;
    for (pos = 0, parmx = 0, patlen = pat.length, state = 0, token = "", result = "", pos = 0; pos < patlen; pos++) switch (cc = pat.charAt(pos), state) {
      case 0:
        "{" !== cc || 0 !== pos && "\\" === pat.charAt(pos - 1) ? token += cc : (result += token, token = cc, state = 1);
        break;

      case 1:
        if ("}" === cc) {
            switch (token += "}") {
              case "{}":
                if (null === (parm = parms[parmx]) || void 0 == parm) token = "U"; else if ("number" == typeof parm || "number" == typeof parm) token = to_str(parm, {
                    dig: 3,
                    decrease: T
                }); else if ("string" == typeof parm) token = parm; else if ("boolean" == typeof parm) token = conv_bool(parm); else if (parm instanceof std.Rectangle) token = conv_rect(parm); else if (parm instanceof std.a_tree) {
                    token = parm.sub;
                } else if (parm instanceof std.a_path) token = conv_path(parm); else if (parm instanceof std.a_pathx) token = conv_pathx(parm); else if (parm instanceof std.a_meas) {
                    token = to_str(parm.mag, {
                        dig: 3,
                        decrease: T
                    });
                } else if (parm instanceof std.a_image) token = "image:" + parm.alt; else if (parm instanceof std.Bitmap) {
                    let bits = parm;
                    token = conv("bitmap[{} x {}]", bits.width, bits.height);
                } else if (parm instanceof Function) token = "<function>"; else if (parm instanceof std.a_function) {
                    let func = parm;
                    token = std.MODULES[func.modnum] + ":" + func.name;
                } else token = parm instanceof RegExp ? parm.toString() : "<object>";
                break;

              case "{a_xy}":
                (parm = parms[parmx]) instanceof std.a_tree || parm instanceof std.a_path ? token = "[" + to_str(std.getn(parm, std.F_x)) + " " + to_str(std.getn(parm, std.F_y)) + "]" : std.argument_err("expecting a tree or path type");
                break;

              case "{array}":
                (parm = parms[parmx]) instanceof Array ? token = conv_array(parm) : std.argument_err("expecting a Array type");
                break;

              case "{bool}":
                "boolean" == typeof (parm = parms[parmx]) ? token = conv_bool(parm) : std.argument_err("expecting a Boolean type");
                break;

              case "{uri}":
                "string" == typeof (parm = parms[parmx]) ? token = conv_uri(parm) : std.argument_err("expecting a String type");
                break;

              case "{e}":
                token = to_str(std.elapsed, {
                    dig: 3
                }), parmx -= 1;
                break;

              case "{hex}":
                "number" == typeof (parm = parms[parmx]) ? token = conv_num_to_hex(parm) : std.argument_err("expecting a number type");
                break;

              case "{int}":
                token = String(parms[parmx]);
                break;

              case "{key}":
                parms[parmx] instanceof Array ? token = conv_vector_num(parms[parmx]) : std.argument_err("expecting a path key");
                break;

              case "{meas}":
                parms[parmx] instanceof std.a_meas ? token = to_str(parms[parmx], {
                    dig: 3,
                    decrease: T
                }) : std.argument_err("expecting a meas type");
                break;

              case "{num}":
                "number" == typeof parms[parmx] ? token = real64_to_str(parms[parmx], 0, 1, "", "") : std.argument_err("expecting a num type");
                break;

              case "{n}":
              case "{n0}":
              case "{n,0}":
                "number" == typeof parms[parmx] ? token = to_str(parms[parmx]) : std.argument_err("expecting a num type");
                break;

              case "{n1}":
              case "{n2}":
              case "{n3}":
              case "{n4}":
              case "{n5}":
              case "{n6}":
              case "{n7}":
              case "{n8}":
              case "{n9}":
                "number" == typeof parms[parmx] ? (digits = parseInt(token.charAt(2), 10), token = to_str(parms[parmx], {
                    dig: digits,
                    zero_drop: F
                })) : std.argument_err("expecting a num type");
                break;

              case "{n,1}":
              case "{n,2}":
              case "{n,3}":
              case "{n,4}":
              case "{n,5}":
              case "{n,6}":
              case "{n,7}":
              case "{n,8}":
              case "{n,9}":
                "number" == typeof parms[parmx] ? (digits = parseInt(token.charAt(3), 10), token = to_str(parms[parmx], {
                    dig: digits
                })) : std.argument_err("expecting a num type");
                break;

              case "{hpath}":
                null === parms[parmx] ? token = "null" : parms[parmx] instanceof std.a_pathh ? token = conv_pathh(parms[parmx]) : std.argument_err("expecting a pathh type");
                break;

              case "{path}":
                null === parms[parmx] ? token = "null" : parms[parmx] instanceof std.a_path ? token = conv_path(parms[parmx]) : std.argument_err("expecting a path type");
                break;

              case "{pathx}":
                null === parms[parmx] ? token = "null" : parms[parmx] instanceof std.a_pathx ? token = conv_pathx(parms[parmx]) : std.argument_err("expecting a pathx type");
                break;

              case "{rect}":
                null === parms[parmx] ? token = "null" : parms[parmx] instanceof std.Rectangle ? token = conv_rect(parms[parmx]) : parms[parmx] instanceof std.a_tree || parms[parmx] instanceof std.a_path ? token = conv_tree_rect(parms[parmx]) : std.argument_err("expecting a Rectangle type");
                break;

              case "{rgb}":
                "number" == typeof parms[parmx] ? token = rgb_str(parms[parmx]) : std.argument_err("expecting a rgb color as uint type");
                break;

              case "{rgb_hex}":
                "number" == typeof parms[parmx] || "number" == typeof parms[parmx] ? token = rgb_hex_str(parms[parmx]) : std.argument_err("expecting a rgb color as uint type");
                break;

              case "{rgb_html}":
                "number" == typeof parms[parmx] || "number" == typeof parms[parmx] ? token = rgb_html_str(parms[parmx]) : std.argument_err("expecting a rgb color as numeric type");
                break;

              case "{str}":
                "string" == typeof parms[parmx] ? token = parms[parmx] : std.argument_err("expecting a string type");
                break;

              case "{tree}":
                parms[parmx] instanceof std.a_path || parms[parmx] instanceof std.a_tree ? token = tree_to_str(parms[parmx]) : std.argument_err("expecting a tree type");
                break;

              default:
                std.argument_err("unknown conversion type");
            }
            state = 0, parmx += 1, result += token, token = "";
        } else token += cc;
    }
    return parmx !== parms.length && std.argument_err("conv: parameter number mismatch"), result += token;
};

export function conv_pathx(px) {
    var ss, child;
    if (null === px) return "[null pathx]";
    ss = px.basepath.base instanceof std.a_tree ? px.basepath.base.label : "Ⓢ" + std.TREES[px.basepath.base].label, ss += "[";
    for (var lastx = px.lev.length - 1, ix = 1; ix <= lastx; ix++) {
        child = px.lev[ix], ix > 1 && (ss += ", ");
        var sub = child.sub;
        ss += "string" == typeof sub ? sub : to_str(sub, {
            u_cc: "?"
        });
    }
    return ss += "]";
};

export function conv_path(path) {
    let ss, sub, first = !0;
    if (null === path) return "[null path]";
    for (sub of (ss = path.base instanceof std.a_tree ? path.base.label : "Ⓢ" + std.TREES[path.base].label, ss += "[", path.key)) first ? first = !1 : ss += ", ", ss += "string" == typeof sub ? sub : to_str(sub, {
        u_cc: "U"
    });
    return ss += "]";
};

export function conv_pathh(path) {
    let ss, sub, first = !0;
    if (null === path) return "[null pathh]";
    for (sub of (ss = path.base.label + "[", path.key)) first ? first = !1 : ss += ", ", ss += "string" == typeof sub ? sub : to_str(sub);
    return ss += "]";
};

export function conv_bool(val) {
    return val ? "T" : "F";
};

export function conv_num_to_hex(id) {
    let digit, pos, code, ss = "", buf = std.new_bytes(8, std.BIG_ENDIAN);
    for (std.bytes_put_num(buf, id), buf.position = 0, pos = 0; pos < 8; pos++) ss += digit = conv_hex_byte(code = std.bytes_get_u8(buf));
    return ss;
};

export function conv_hex_byte(code) {
    let ss;
    return (code < 0 || code > 255) && std.argument_err("above ascii characters not yet implemented"), 1 === (ss = code.toString(16)).length && (ss = "0" + ss), ss;
};

export function conv_unicode_to_bytes(ss) {
    let code, i, nbytes, buf = std.new_bytes(10, std.BIG_ENDIAN), result = "";
    for (std.bytes_put_str(ss), nbytes = buf.position - 1, buf.position = 1, i = 0; i < nbytes; i++) result += "%" + conv_hex_byte(code = std.bytes_get_u8(buf));
    return ss;
};

export function conv_uri(ss) {
    let i, cc, code, net = "", len = ss.length;
    for (i = 0; i < len; i++) net += (cc = ss.charAt(i)) >= "A" && cc <= "Z" || cc >= "a" && cc <= "z" || cc >= "0" && cc <= "9" || "*" === cc || "-" === cc || "." === cc || "/" === cc || "_" === cc ? cc : cc <= "~" ? "%" + conv_hex_byte(code = from_char(cc)) : conv_unicode_to_bytes(cc);
    return net;
};

export function conv_dict(dict) {
    let v, ss = "[";
    for (v in dict) ss += conv_num(v) + " ";
    return ss += "]";
};

export function conv_vector_num(val) {
    let v, result = "[", first = !0;
    for (v of val) first ? first = !1 : result += ", ", result += to_str(v);
    return result += "]";
};

export function conv_array(list) {
    let i, result = "[", first = !0;
    for (i = 0; i < list.length; i++) first ? first = !1 : result += ", ", "number" == typeof list[i] ? result += to_str(list[i]) : result += String(list[i]);
    return result += "]";
};

export function conv_num(val) {
    return to_str(val);
};

export function conv_n(val) {
    return to_str(val);
};

export function conv_tree_rect(val) {
    return conv("[{n1},{n1} {n1}x{n1}]", std.getn(val, std.F_left), std.getn(val, std.F_top), std.getn(val, std.F_width), std.getn(val, std.F_height));
};

export function conv_rect(val) {
    return conv("[{n1},{n1} {n1}x{n1}]", val.left, val.top, val.width, val.height);
};

const g_base64_encode = [ 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47 ], g_base64_decode = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];

export function bytes_to_base64(data) {
    let c, outlen = 4 * (2 + data.length - (data.length + 2) % 3) / 3, out = std.new_bytes(outlen), i = 0, r = data.length % 3, len = data.length - r, outPos = 0;
    for (;i < len; ) c = data[i++] << 16 | data[i++] << 8 | data[i++], out[outPos++] = g_base64_encode[c >>> 18], out[outPos++] = g_base64_encode[c >>> 12 & 63], out[outPos++] = g_base64_encode[c >>> 6 & 63], 
    out[outPos++] = g_base64_encode[63 & c];
    return 1 === r ? (c = data[i], out[outPos++] = g_base64_encode[c >>> 2], out[outPos++] = g_base64_encode[(3 & c) << 4], out[outPos++] = 61, out[outPos++] = 61) : 2 === r && (c = data[i++] << 8 | data[i], 
    out[outPos++] = g_base64_encode[c >>> 10], out[outPos++] = g_base64_encode[c >>> 4 & 63], out[outPos++] = g_base64_encode[(15 & c) << 2], out[outPos++] = 61), out.readUTFBytes(out.length);
};

export function base64_to_bytes(raw) {
    let c1, c2, c3, c4, i = 0, len = raw.length, buflen = Math.ceil(3 * len / 4) + 2, byteString = std.new_bytes(buflen);
    byteString.writeUTFBytes(raw);
    let outPos = 0;
    for (;i < len && -1 !== (c1 = g_base64_decode[byteString[i++]]) && -1 !== (c2 = g_base64_decode[byteString[i++]]) && (byteString[outPos++] = c1 << 2 | (48 & c2) >> 4, 61 !== (c3 = byteString[i++])) && -1 !== (c3 = g_base64_decode[c3]) && (byteString[outPos++] = (15 & c2) << 4 | (60 & c3) >> 2, 
    61 !== (c4 = byteString[i++])) && -1 !== (c4 = g_base64_decode[c4]); ) byteString[outPos++] = (3 & c3) << 6 | c4;
    return byteString.length = outPos, byteString.position = 0, byteString;
};

export function http_encodeURIComponent(ss, _options) {
    var plusflag = !1;
    for (let property in _options) switch (property) {
      case "plus":
        plusflag = _options.plus == T;
        break;

      default:
        std.argument_err("bad option: " + property);
    }
    var tt = encodeURIComponent(ss);
    return plusflag && (tt = tt.replace(/%20/g, "+")), tt;
};

export function http_decodeURIComponent(ss, _options) {
    var plusflag = !1;
    for (let property in _options) switch (property) {
      case "plus":
        plusflag = _options.plus == T;
        break;

      default:
        std.argument_err("bad option: " + property);
    }
    return plusflag && (ss = ss.replace(/\+/g, " ")), decodeURIComponent(ss);
};

const http_encodeURI = encodeURI, http_decodeURI = decodeURI;

export function str_add_meta() {
    const VAL = std.VAL, POP = std.POP;
    std.merge_lit(_M, 0, std.META, "str", std.F_mod_const, "BOM_UTF16_BE", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, "BOM_UTF16_LE", std.F_vv_typek, 1, VAL, std.TYPE_NUM), std.merge_lit(_M, 0, std.META, "str", std.F_mod_funcs, "base64_to_bytes", std.F_vv_cat, VAL, "String conversions|Basic|convert a base64 string into bytes", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 21, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "s|string to convert", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_BYTES, POP, POP, "bytes_to_base64", std.F_vv_cat, VAL, "String conversions|Basic|convert from byte array to base64 string", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 44, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "buf|array of bytes to convert", std.F_vv_typek, 1, VAL, std.TYPE_BYTES, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, "color_to_hex", std.F_vv_cat, VAL, 'String conversions|Basic|convert a color into a hex string: "#AABBCC"|HTML hex form: #AABBCC', std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 33, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "c|input color", std.F_vv_typek, 1, VAL, std.TYPE_COLOR, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, "escape_for_regexp", std.F_vv_cat, VAL, "String ops|Basic|put backslashes in front of RegExp special chars", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 9, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "input|input string", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, "from_char", std.F_vv_cat, VAL, "String conversions|Basic|convert a character to its numeric value|numeric value (null string returns 0)", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 42, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "char|first character in string is used", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, "hex_to_color", std.F_vv_cat, VAL, 'String conversions|Basic|convert a hex string "AABBCC" or "#AABBCC" into a color|resulting color value, ERR on invalid input', std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 3, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "ss|6 or 7 character hex string", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_COLOR, POP, POP, "hex_to_num", std.F_vv_cat, VAL, "String conversions|Basic|convert a 16 character hex string into a num|resulting num value, ERR on invalid input", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 30, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "ss|16 character string", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, "http_decodeURI", std.F_vv_cat, VAL, "URL encoding|Basic|", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 14, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "input", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, "http_decodeURIComponent", std.F_vv_cat, VAL, "URL encoding|Basic|decode a URI component|resulting decoded string,", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 31, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "input|string to decode.", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, 2, std.F_vv_default, VAL, "F", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "plus|if T, then convert + to %20 in first pass", std.F_vv_typek, 1, VAL, std.TYPE_BOOL, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, "http_encodeURI", std.F_vv_cat, VAL, "URL encoding|Basic|", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 6, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "input", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, "http_encodeURIComponent", std.F_vv_cat, VAL, "URL encoding|Basic|encode a URI component|resulting encoded string, converted to UTF8 with %xx notation", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 4, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "input|string to encode.", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, 2, std.F_vv_default, VAL, "F", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "plus|if T, then convert %20 to + in second pass", std.F_vv_typek, 1, VAL, std.TYPE_BOOL, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, "join_words", std.F_vv_cat, VAL, "String ops|Basic|join an array of words|list of words joined together, with delimiter between", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 43, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "list", std.F_vv_typek, 1, VAL, std.TYPE_ARRAY, 2, VAL, std.TYPE_STR, POP, POP, 2, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "delim", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, "json_to_tree", std.F_vv_cat, VAL, "String conversions|Basic|convert a JSON string back into a tree", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 23, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "json|JSON string to convert", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, 2, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "t|where to store resulting tree", std.F_vv_typek, 1, VAL, std.TYPE_TREE, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, "markdown_to_html", std.F_vv_cat, VAL, "String conversions|Basic|decode a markdown block into plain HTML|plain HTML string", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 13, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "input|markdown text to convert", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, "num_to_hex", std.F_vv_cat, VAL, 'String conversions|Basic|convert a double precision floating point number into 16 character hex string|16 char hex string, e.g.: "ff332211ff332211"', std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 12, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "n|input number", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, "pad_left", std.F_vv_cat, VAL, "String ops|Basic|pad a string on the left to a specified length|resulting string", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 38, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "ss|starting string", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, 2, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "len|target length", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, 3, std.F_vv_default, VAL, " ", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "pad|character to pad with", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, "pad_right", std.F_vv_cat, VAL, "String ops|Basic|pad a string on the right to a specified length|resulting string", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 28, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "ss|starting string", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, 2, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "len|target length", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, 3, std.F_vv_default, VAL, " ", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "pad|character to pad with", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, "safe_for_html", std.F_vv_cat, VAL, "String conversions|Basic|replace various metacharacters used in HTML|fixed up string", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 32, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "input", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, "split_lines", std.F_vv_cat, VAL, "String ops|Basic|split a string into lines on each line break (\\r, \\n, \\r\\n)", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 41, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "buf|starting string", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, 2, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "result|(OUT) array of lines", std.F_vv_typek, 1, VAL, std.TYPE_ARRAY, 2, VAL, std.TYPE_STR, POP, POP, POP, POP, "split_lines_words", std.F_vv_cat, VAL, "String ops|Basic|split a string into 2D array of strings, indexed [lines, words]", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 5, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "buf|starting string", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, 2, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "result|(OUT) array of lines and words", std.F_vv_typek, 1, VAL, std.TYPE_ARRAY, 2, VAL, std.TYPE_ARRAY, 3, VAL, std.TYPE_STR, POP, POP, 3, std.F_vv_default, VAL, "\t", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "delim|single word break character like tab or comma", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, 4, std.F_vv_default, VAL, "T", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "quotes|if true, then consider double quotes to allow embedding of LF, strip them", std.F_vv_typek, 1, VAL, std.TYPE_BOOL, POP, POP, POP, POP, "split_words", std.F_vv_cat, VAL, "String ops|Basic|split a line into words", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 46, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "buf|starting string", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, 2, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "result|(OUT) array of words", std.F_vv_typek, 1, VAL, std.TYPE_ARRAY, 2, VAL, std.TYPE_STR, POP, POP, 3, std.F_vv_default, VAL, "\t", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "delim|word break character like tab or comma", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, POP, POP, "str_begins", std.F_vv_cat, VAL, "String ops|Basic|see if string begins with a pattern|T, F, U", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 18, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "haystack|big string to check against", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, 2, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "needle|string to look for", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_BOOL, POP, POP, "str_del", std.F_vv_cat, VAL, "String ops|Basic|remove characters from a string|modified string", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 34, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "ss|string to manipulate", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, 2, std.F_vv_default, VAL, "1", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "from|starting position to delete, 1=first", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, 3, std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "to|ending position (inclusive) to delete", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, 4, std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "len|number of characters to delete", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, 5, std.F_vv_default, VAL, "F", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "rev|count from end?", std.F_vv_typek, 1, VAL, std.TYPE_BOOL, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, "str_digit", std.F_vv_cat, VAL, "String ops|Basic|get a numeric digit out of a string|character converted to a number 0-9, E if non-numeric", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 25, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "ss|string to extract from", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, 2, std.F_vv_default, VAL, "1", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "from|position of character, 1=first", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, 3, std.F_vv_default, VAL, "F", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "rev|count from end?", std.F_vv_typek, 1, VAL, std.TYPE_BOOL, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, "str_ends", std.F_vv_cat, VAL, "String ops|Basic|see if string ends with a pattern|T, F, U", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 20, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "haystack|big string to check against", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, 2, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "needle|string to look for", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_BOOL, POP, POP, "str_find", std.F_vv_cat, VAL, "String ops|Basic|find a pattern in a string", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 39, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "haystack|haystack to search", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, 2, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "needle|either regular expression or plain string to find", std.F_vv_typek, 1, VAL, std.TYPE_ANY, POP, POP, 3, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "list|(OUT) array of a_find, position/len of the matched string 1..F", std.F_vv_typek, 1, VAL, std.TYPE_ARRAY, 2, VAL, std.TYPE_RECORD, 3, VAL, R_a_find, POP, POP, 4, std.F_vv_default, VAL, "1", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "start|starting position, 1=first", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, 5, std.F_vv_default, VAL, "1", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "reps|max repetitions", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, 6, std.F_vv_default, VAL, "F", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "wrap|wrap around search", std.F_vv_typek, 1, VAL, std.TYPE_BOOL, POP, POP, 7, std.F_vv_default, VAL, "T", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "ignore_case|only used when needle is a plain string", std.F_vv_typek, 1, VAL, std.TYPE_BOOL, POP, POP, POP, POP, "str_hash_fnv", std.F_vv_cat, VAL, "String ops|Basic|utility to hash strings|hashed string as unsigned 32 bit number", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 16, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "input|string to hash", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, "str_inject", std.F_vv_cat, VAL, "String ops|Basic|inject substrings into another, use $1, $2,.. $9 etc. for markers|new string", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 27, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "input", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, 2, std.F_vv_parmk, VAL, std.PK_REST, std.F_vv_parmn, VAL, "parms", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, "str_ins", std.F_vv_cat, VAL, "String ops|Basic|insert characters into a string just once|modified string", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 36, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "ss|starting string", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, 2, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "ins|string to insert", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, 3, std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "to|position to insert in front of 1=first", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, 4, std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "del|number of characters to delete while doing the insert", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, 5, std.F_vv_default, VAL, "F", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "rev|count from end?", std.F_vv_typek, 1, VAL, std.TYPE_BOOL, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, "str_len", std.F_vv_cat, VAL, "String ops|Basic|string length|length of string", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 7, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "ss|string to count length of", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, "str_pos", std.F_vv_cat, VAL, "String ops|Basic|find the first occurance of a pattern in a string|if found, the starting position, otherwise U", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 35, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "haystack|haystack to search", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, 2, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "needle|either regular expression or plain string to find", std.F_vv_typek, 1, VAL, std.TYPE_ANY, POP, POP, 3, std.F_vv_default, VAL, "1", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "start|starting position, 1=first char", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, 4, std.F_vv_default, VAL, "T", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "ignore_case|only used when needle is a plain string", std.F_vv_typek, 1, VAL, std.TYPE_BOOL, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, "str_repeat", std.F_vv_cat, VAL, "String ops|Basic|repeat a string|repeated version", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 45, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "ss|string to repeat", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, 2, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "ntimes|number of times to repeat", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, "str_replace", std.F_vv_cat, VAL, "String ops|Basic|find and replace in a string|new string with replacements done", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 37, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "haystack|haystack to search", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, 2, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "needle|either regular expression or plain string to find", std.F_vv_typek, 1, VAL, std.TYPE_ANY, POP, POP, 3, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "replace|replacement string ($1, $2, etc. refer to matched groups)", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, 4, std.F_vv_default, VAL, "1", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "start|starting position, 1=first char", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, "str_replace_multiple", std.F_vv_cat, VAL, "String ops|Basic|apply a series of changes to a string|new string with replacements done", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 19, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "haystack|haystack to search", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, 2, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "changes|array of find/replace operations to perform", std.F_vv_typek, 1, VAL, std.TYPE_ARRAY, 2, VAL, std.TYPE_RECORD, 3, VAL, R_a_find_repl, POP, POP, 3, std.F_vv_default, VAL, "F", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "trace|write progress to log", std.F_vv_typek, 1, VAL, std.TYPE_BOOL, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, "str_reverse", std.F_vv_cat, VAL, "String ops|Basic|reverse a string|reversed version", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 29, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "ss|string to reverse", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, "str_strip_quotes", std.F_vv_cat, VAL, "String ops|Basic|strip quotes around a string|stripped version", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 24, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "ss|string to process", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, "str_to_enum", std.F_vv_cat, VAL, "String conversions|Basic|convert a string of an enum into its internal value|internal representation of that enum", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 8, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "s|enum string", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, "str_to_regexp", std.F_vv_cat, VAL, "String ops|Basic|convert a string to a regular expression|result", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 48, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, 's|regexp string like "[a-z]"', std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, 2, std.F_vv_default, VAL, "T", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "ignore_case", std.F_vv_typek, 1, VAL, std.TYPE_BOOL, POP, POP, 3, std.F_vv_default, VAL, "F", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "global", std.F_vv_typek, 1, VAL, std.TYPE_BOOL, POP, POP, 4, std.F_vv_default, VAL, "F", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "multiline", std.F_vv_typek, 1, VAL, std.TYPE_BOOL, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_REGEXP, POP, POP, "str_trim", std.F_vv_cat, VAL, "String ops|Basic|trim whitespace on either side of a string|resulting string", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 1, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "ss|starting string", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, "subset", std.F_vv_cat, VAL, "String ops|Basic|string subset|extracted string, might be empty", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 47, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "ss|starting string", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, 2, std.F_vv_default, VAL, "1", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "from|starting position to take from, 1=first", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, 3, std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "to|ending position (inclusive)", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, 4, std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "len|number of characters to extract", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, 5, std.F_vv_default, VAL, "F", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "rev|count from end?", std.F_vv_typek, 1, VAL, std.TYPE_BOOL, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, "time_to_str", std.F_vv_cat, VAL, "String conversions|Basic|convert a date/time to a string|output string", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 40, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "format|formatting string", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, 2, std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "time|unix epoch time in seconds to convert, U uses now()", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, 3, std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "date|date input", std.F_vv_typek, 1, VAL, std.TYPE_RECORD, 2, VAL, std.R_a_date, 3, VAL, "std", POP, POP, 4, std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "city|enum TIMEZONE_PARIS, TIMEZONE_GMT", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, 5, std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "lang|language", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, "to_char", std.F_vv_cat, VAL, "String conversions|Basic|convert a number into its character value|unicode character, null string if out of range", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 10, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "code|unicode code point", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, "to_lower", std.F_vv_cat, VAL, "String conversions|Basic|convert to lowercase|lower case version", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 17, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "ss|string to convert", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, "to_num", std.F_vv_cat, VAL, 'String conversions|Basic|convert a string like "12.34" into a number, empty is 0|number form (ERR if bad string)', std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 26, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "s|string to convert", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, "to_str", std.F_vv_cat, VAL, "String conversions|Basic|convert a value into string form|string form of the input value", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 15, std.F_vv_parms, 10, std.F_vv_default, VAL, "F", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "pos_plus|draw plus in front of positive quantities", std.F_vv_typek, 1, VAL, std.TYPE_BOOL, POP, POP, 11, std.F_vv_default, VAL, "F", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "percent|if T, add % as suffix, mult by 100", std.F_vv_typek, 1, VAL, std.TYPE_BOOL, POP, POP, 12, std.F_vv_default, VAL, "F", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "zero_pad|if T, pad with leading zeros to make min. width", std.F_vv_typek, 1, VAL, std.TYPE_BOOL, POP, POP, 13, std.F_vv_default, VAL, "T", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "zero_drop|if T, drop trailing zeros after decimal point 3.00 -> 3", std.F_vv_typek, 1, VAL, std.TYPE_BOOL, POP, POP, 14, std.F_vv_default, VAL, "$", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "currency_cc|override default currency of $", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, 15, std.F_vv_default, VAL, ".", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "decimal_cc|override default decimal point of .", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, 16, std.F_vv_default, VAL, ",", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "thou_cc|override default thousands symbol", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, 17, std.F_vv_default, VAL, "U", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "u_cc|what to use when value is U", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "val|value to convert, usually a num type", std.F_vv_typek, 1, VAL, std.TYPE_ANY, POP, POP, 2, std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "dig|U: automatic number of digits after decimal", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, 3, std.F_vv_default, VAL, "999", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "max|max number of characters in length", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, 4, std.F_vv_default, VAL, "0", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "min|pad on left to this min. length", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, 5, std.F_vv_default, VAL, "10", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "base|we support bases 2/8/10/16", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, 6, std.F_vv_default, VAL, "F", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "currency|if T, then show currency character", std.F_vv_typek, 1, VAL, std.TYPE_BOOL, POP, POP, 7, std.F_vv_default, VAL, "F", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "thou|if T, then insert thousands marks", std.F_vv_typek, 1, VAL, std.TYPE_BOOL, POP, POP, 8, std.F_vv_default, VAL, "F", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "k|if T, then round to K (1000), M (million), B (billion)", std.F_vv_typek, 1, VAL, std.TYPE_BOOL, POP, POP, 9, std.F_vv_default, VAL, "F", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "neg_paren|draw parenthesis for negative values", std.F_vv_typek, 1, VAL, std.TYPE_BOOL, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, "to_upper", std.F_vv_cat, VAL, "String conversions|Basic|convert to uppercase|upper case version", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 11, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "ss|string to convert", std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, "tree_to_json", std.F_vv_cat, VAL, "String conversions|Basic|convert a tree into a JSON-compatible string|output JSON string", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 2, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "t|tree to convert", std.F_vv_typek, 1, VAL, std.TYPE_TREE, POP, POP, 2, std.F_vv_default, VAL, "INFINITY", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "limit|number of items to stop after", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_STR, POP, POP, "tree_to_str", std.F_vv_cat, VAL, "String conversions|Basic|convert a tree into a string|output BSON string", std.F_vv_funck, VAL, std.FK_CALC, std.F_vv_funcx, VAL, 22, std.F_vv_parms, 1, std.F_vv_parmk, VAL, std.PK_POS, std.F_vv_parmn, VAL, "t|tree to convert", std.F_vv_typek, 1, VAL, std.TYPE_TREE, POP, POP, 2, std.F_vv_default, VAL, "INFINITY", std.F_vv_parmk, VAL, std.PK_NAMED, std.F_vv_parmn, VAL, "limit|number of items to stop after", std.F_vv_typek, 1, VAL, std.TYPE_NUM, POP, POP, POP, std.F_vv_typek, 1, VAL, std.TYPE_STR), 
    std.merge_lit(_M, 0, std.META, "str", std.F_mod_recs, R_a_find_repl, F_find_patt, 1, VAL, std.TYPE_REGEXP, POP, F_repl_patt, 1, VAL, std.TYPE_STR, POP, std.F_vv_cat, VAL, "String ops|Basic|", POP, R_a_find, F_find_len, 1, VAL, std.TYPE_NUM, POP, F_find_start, 1, VAL, std.TYPE_NUM, POP, std.F_vv_cat, VAL, "String ops|Basic|");
};