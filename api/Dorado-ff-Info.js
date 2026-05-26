module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  try {
    const { uid, region } = req.query;

    if (!uid || !region) {
      return res.status(400).json({
        status: false,
        message: "uid and region required",
        powered_by: "@DORADO"
      });
    }

    const url = `https://flexdevloper-bot-ff-info-api.vercel.app/player-info?region=${region}&uid=${uid}`;

    const response = await fetch(url);
    const data = await response.json();

    return res.status(200).json({
      ...data,
      powered_by: "@DORADO"
    });

  } catch (e) {
    return res.status(500).json({
      status: false,
      error: e.message,
      powered_by: "@DORADO"
    });
  }
};
