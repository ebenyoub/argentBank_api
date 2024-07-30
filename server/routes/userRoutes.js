import { Router } from 'express'
const router = Router()
import { createUser, loginUser, getUserProfile, updateUserProfile } from '../controllers/userController.js'
import { validateToken } from '../middleware/tokenValidation.js'

router.post('/signup', createUser)

router.post('/login', loginUser)

router.post(
  '/profile',
  validateToken,
  getUserProfile
)

router.put(
  '/profile',
  validateToken,
  updateUserProfile
)

export default router
