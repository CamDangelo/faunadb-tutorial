import { query as q } from 'faunadb'
import { client } from './utils/fauna-auth';

export default async (req, res) => {
    try {
        const customers = await client.query(
            q.Map(q.Paginate(q.Match(q.Index('all_customers'))), (ref) => q.Get(ref))
        )
        res.status(200).json(customers.data)
    
    } catch(error){
        res.status(500).json({ error: error.message })
    }
}