import jwt from "jsonwebtoken";

export const createJWT = (user) => {
  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    process.env.JWT_SECRET
  );
  return token;
};

export const protect = (req, res, next) => {
  const bearer = req.headers.authorization;
  if (!bearer) {
    res.status(401).json({
      message: "not authorized",
    });
    return;
  }
  const [, token] = bearer.split(" ");

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({
      message: "not valid token",
    });
    return;
  }
};
