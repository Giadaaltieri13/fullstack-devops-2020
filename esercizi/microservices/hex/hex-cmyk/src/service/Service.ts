import colorConverter from 'color-convert'
import {TtfHex,TtfCmyk} from '../controller/HttpController'


export function convert(color: TtfHex): TtfCmyk {
    var convert = require('color-convert');
    
    return convert.hex.cmyk(color.hex) as TtfCmyk;
}

    
   