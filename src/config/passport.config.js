import passport from 'passport';
import jwt from 'passport-jwt';
import UsuarioModel from '../models/usuarios.model.js';

const JWTStrategy = jwt.Strategy;
const ExtractJWT = jwt.ExtractJwt;

const initializePassport = () => {
  passport.use('jwt', new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
    secretOrKey: 'aguanteriver'
  }, async (jwt_payload, done) => {
    try {
      const user = await UsuarioModel.findById(jwt_payload.sub);
      if (!user) {
        return done(null, false);
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }));
};

const cookieExtractor = req => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['coderCookieToken'];
  }
  return token;
};

export default initializePassport;