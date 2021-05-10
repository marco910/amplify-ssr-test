export default async (req, res) => {
  if (req.method === "POST") {
    res.status(200).json(req.body);
  } else {
    res.status(405).json({ error: "method not allowed" });
  }
};
