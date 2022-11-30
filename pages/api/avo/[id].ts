import { NextApiRequest, NextApiResponse } from "next";
import Database from '@database';


const IdAvos = async (request: NextApiRequest, response: NextApiResponse ) => {
    const db = new Database();

    const id = request.query.id;

    const allEntries = await db.getById(id.toString());
    const length = allEntries.length;

    response.writeHead(200, {'Content-type': 'application/json'});
    response.end(JSON.stringify({data: allEntries, length}));

}

export default IdAvos;