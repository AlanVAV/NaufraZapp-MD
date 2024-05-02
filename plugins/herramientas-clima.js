import axios from 'axios';
const handler = async (m, {args}) => {
  if (!args[0]) throw '*『✦』Defina el nombre de su pais o ciudad.*';
  try {
    const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`);
    const res = await response;
    const name = res.data.name;
    const Country = res.data.sys.country;
    const Weather = res.data.weather[0].description;
    const Temperature = res.data.main.temp + '°C';
    const Minimum_Temperature = res.data.main.temp_min + '°C';
    const Maximum_Temperature = res.data.main.temp_max + '°C';
    const Humidity = res.data.main.humidity + '%';
    const Wind = res.data.wind.speed + 'km/h';
    const wea = `LUGAR: ${name}\nPAIS: ${Country}\nTIEMPO: ${Weather}\nTEMPERATURA: ${Temperature}\nTEMPERATURA MINIMA: ${Minimum_Temperature}\nTEMPERATURA MAXIMA: ${Maximum_Temperature}\nHUMEDAD: ${Humidity}\nVIENTO: ${Wind}`;
    m.reply(wea);
  } catch {
    return '*『✦』No se ha encontrado el lugar solicitado, intentelo de nuevo pero especifique bien.*';
  }
};
handler.help = ['clima *<ciudad/país>*'];
handler.tags = ['herramientas'];
handler.command = /^(clima|tiempo)$/i;
export default handler;
