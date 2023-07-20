import {Router} from "express";
const router = Router()
import {getAll, create, remove} from '../controllers/servers.js'

router.get('/api/servers', getAll)

router.post('/api/servers', create)

router.delete('/api/servers/:id', remove)

export default router