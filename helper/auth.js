const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.header("token");
        if (!token) return res.status(403).send("Access denied.");
        const decoded = jwt.verify(token, process.env.secret);
        req.user = decoded;
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(400).send("Invalid token");
    }
};


