const jwt = require('jsonwebtoken');

const secret = 'thissecret';
const expiration = '2h'

module.exports = {
    signToken: function ({username, email, _id}) {
        const payload = {username, email, _id};

        return jwt.sign({ data: payload }, secret, {expiriesIn: expiration });
    },

    authMiddleware: function ({ req }) {
        //allows token to be send via req.body req.query or headers
        let token = req.body.token || req.query.token || req.headers.authoriazatioin;

        //seperate "Bearer from" <tokenvalue>
        if (req.headers.authorization) {
            token = token
            .split('')
            .pop()
            .trim();
        }

        //if no toekn, return request object as is
        if(!token) {
            return req;
        }

        try {
            //decode and attach user data to request object
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log ('Invalid Token');
        }
        //return updated request object
        return req;
     }
};