import {convert} from '../service/Service';
import {Express} from 'express';



export interface TtfCmyk {
    readonly cyan: number;
    readonly magenta: number;
    readonly yellow: number;
    readonly black: number;
}


export interface TtfHex {
    readonly hex: string;
}


class HttpController {
    constructor(server: Express) {
        server.get('/', (req, res) => {
            const color = JSON.parse(req.query.color as string) as TtfHex;
            const convertedColor: TtfCmyk = convert(color);

            res.send(convertedColor);
        });
    }
}

export default HttpController;
