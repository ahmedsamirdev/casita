// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const url = "https://nominatim.openstreetmap.org/search?q=";

  // Get message as query in request
  const text = req.query.q;

  // Check city spelling as dictionary (hard coded for now)
  const citySpellChecker = (txt) => {
    const dict = { Jeddh: "Jeddah" };
    const city = dict[txt] ? dict[txt] : txt;
    return city; // Jeddh => Jeddah
  };

  // Get city from message by regular expressions
  const regexp = /, ([A-Z].*?)(,|$)/g;
  const matches = regexp.exec(text);

  const city = citySpellChecker(matches[1]);

  // API req openstreetmap to fetch our coords from provided city
  const resp = await fetch(
    `${url}=${city}&format=json&polygon=1&addressdetails=1`
  );

  // Send (coords) Longitude, latitude as response
  const data = await resp.json();
  const { lon, lat } = data[0];

  res.status(200).json({ lon, lat });
}
