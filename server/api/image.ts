import { IncomingMessage,  ServerResponse } from "http";
import fs from 'fs';

export default(req: IncomingMessage, res: ServerResponse) => {
    const files = fs.readdirSync('../..', { withFileTypes: true });
    return files;

}

