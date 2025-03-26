const express = require('express');
const { register, login, logout, verifiyEmail, sendVerificationOtp, isAuthenticated, sendResetOtp, resetPassword } = require('../controllers/authController');
const userAuth = require('../middleware/userAuth');

const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);
authRouter.post('/send-verify-otp', userAuth, sendVerificationOtp);
authRouter.post('/verify-account', userAuth, verifiyEmail);
authRouter.get('/is-auth', userAuth, isAuthenticated);
authRouter.post('/send-reset-otp', sendResetOtp);
authRouter.post('/reset-password', resetPassword);

module.exports = authRouter;