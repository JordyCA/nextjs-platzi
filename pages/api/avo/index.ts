import { IncomingMessage, ServerResponse } from "http";
import Database from '@database';


const AllAvos = async (request: IncomingMessage, response: ServerResponse ) => {

    const db = new Database();
    const allEntries = await db.getAll();
    const length = allEntries.length;

    response.writeHead(200, {'Content-type': 'application/json'});
    response.end(JSON.stringify({data: allEntries, length}));

}

export default AllAvos;