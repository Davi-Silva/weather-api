import { Router } from 'express'
import { currentWeather } from '../../controllers/location/weather'

const router = Router()

router.get('', currentWeather)

export default router