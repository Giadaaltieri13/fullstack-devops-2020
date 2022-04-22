import colorConverter from 'color-convert'
import {TtfHex,TtfCmyk} from '../controller/HttpController'


export function convert(color: TtfHex): TtfCmyk {
    var convert = require('color-convert');
    
    return convert.hex.cmyk(color.hex) as TtfCmyk;
}

export function convert(color: TtfCmyk) {
    return colorConverter.hex.cmyk(color.magenta, color.yellow, color.cyan, color.key)
   }

    
   