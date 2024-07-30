import { 
  createUser as createUserService, 
  loginUser as loginUserService, 
  getUserProfile as getUserProfileService, 
  updateUserProfile as updateUserProfileService 
} from '../services/userService.js'

export async function createUser(req, res) {
  let response = {}

  try {
    const responseFromService = await createUserService(req.body)
    response.status = 200
    response.message = 'User successfully created'
    response.body = responseFromService
  } catch (error) {
    console.error('Something went wrong in userController.js', error)
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}

export async function loginUser(req, res) {
  let response = {}

  try {
    const responseFromService = await loginUserService(req.body)
    response.status = 200
    response.message = 'User successfully logged in'
    response.body = responseFromService
  } catch (error) {
    console.error('Error in loginUser (userController.js)')
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}

export async function getUserProfile(req, res) {
  let response = {}

  try {
    const responseFromService = await getUserProfileService(req)
    response.status = 200
    response.message = 'Successfully got user profile data'
    response.body = responseFromService
  } catch (error) {
    console.log('Error in userController.js')
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}

export async function updateUserProfile(req, res) {
  let response = {}

  try {
    const responseFromService = await updateUserProfileService(req)
    response.status = 200
    response.message = 'Successfully updated user profile data'
    response.body = responseFromService
  } catch (error) {
    console.log('Error in updateUserProfile - userController.js')
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}
