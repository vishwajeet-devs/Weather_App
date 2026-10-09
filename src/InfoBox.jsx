import Card from "@mui/material/Card";
import "./InfoBox.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ info }) {
  // const INIT_URL = "https://wallpapercave.com/wp/wp7991751.jpg";
  const HOT_URL =
    "https://upload.wikimedia.org/wikipedia/en/2/27/Bliss_%28Windows_XP%29.png";
  const COLD_URL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQosIDhlc3K3mCZ5oKmHehtPQt8Zxd4xUOK7pirVsj8H7OItVMIWdiKe5oR&s=10";
  const RAIN_URL =
    "https://img.magnific.com/free-photo/photorealistic-view-tree-nature-with-branches-trunk_23-2151478106.jpg?semt=ais_hybrid&w=740&q=80";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia 
            sx={{ height: 140 }} 
            image={
              info.humidity > 75
                ? RAIN_URL
                : info.temp > 25
                  ? HOT_URL
                  : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {
              info.humidity > 75
                ? <ThunderstormIcon/>
                : info.temp > 25
                  ? <SunnyIcon/>
                  : <AcUnitIcon/>
            }
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels
                like {info.feelsLike}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
