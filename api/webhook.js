export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  console.log("Sự kiện webhook:", req.body);

  return res.status(200).json({ status: "received" });
}
