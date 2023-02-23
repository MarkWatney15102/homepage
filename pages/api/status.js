export default function handler(req, res) {
  const body = req.body;

  let message = "";
  let status = 400;
  let running = false;
  if (body.token) {
    if (body.token === 'jfkg5d8b79h3d4') {
      message = "Running";
      status = 200;
      running = true;
    } else {
      message = "Token is wrong";
    }
  } else {
    message = "Token is wrong";
  }

  res.status(status).json(
    {
      message,
      running
    }
  )
}