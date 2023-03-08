import React, { useState } from 'react';
import './style.css';
import { Stage, Layer, Rect, Text } from 'react-konva';
import { Html } from 'react-konva-utils';
import React, { Component } from 'react';
import {
  Switch,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Button,
  FormLabel,
} from '@mui/material';

function Home() {
  const [prepTime, setPrepTime] = useState(null);
  const [description, setDescription] = useState(null);
  const [cuisine, setCuisine] = useState(null);
  var [dairy, setDairy] = useState(null);
  var [eggs, setEggs] = useState(null);
  var [gluten, setGluten] = useState(null);
  var [peanuts, setPeanuts] = useState(null);
  var [sesame, setSesame] = useState(null);
  var [seafood, setSeafood] = useState(null);
  var [shellfish, setShellfish] = useState(null);
  var [soy, setSoy] = useState(null);
  var [treenuts, setTreenuts] = useState(null);
  var [wheat, setWheat] = useState(null);

  const handleTimeChange = (e) => {
    setPrepTime(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleCuisineChange = (e) => {
    setCuisine(e.target.value);
  };
  const handleDietChange = (e) => {
    setDiet(e.target.value);
  };
  const handleDairyChange = (e) => {
    setDairy((1 + dairy) * -1);
  };
  const handleEggsChange = (e) => {
    setEggs((1 + eggs) * -1);
  };
  const handleGlutenChange = (e) => {
    setGluten((1 + gluten) * -1);
  };
  const handlePeanutsChange = (e) => {
    setPeanuts((1 + peanuts) * -1);
  };
  const handleSesameChange = (e) => {
    setSesame((1 + sesame) * -1);
  };
  const handleSeafoodChange = (e) => {
    setSeafood((1 + seafood) * -1);
  };
  const handleShellfishChange = (e) => {
    setShellfish((1 + shellfish) * -1);
  };
  const handleSoyChange = (e) => {
    setSoy((1 + soy) * -1);
  };
  const handleTreenutsChange = (e) => {
    setTreenuts((1 + treenuts) * -1);
  };
  const handleWheatChange = (e) => {
    setWheat((1 + wheat) * -1);
  };
  return (
    <Stage Stage width={screen.width} height={screen.height}>
      <Layer>
        <Rect
          x={30}
          y={165}
          width={screen.width - 60}
          height={54}
          fill="#A0a0a0"
          cornerRadius={7}
        />

        <Html>
          <div
            style={{
              marginLeft: 30,
              marginTop: 475,
              width: 100,
              height: 40,
              cornerRadius: 7,
            }}
          >
            <Button variant="contained">Search</Button>
          </div>
        </Html>

        <Rect
          x={30}
          y={240}
          width={screen.width - 60}
          height={220}
          fill="#A0a0a0"
          cornerRadius={7}
        />

        <Text
          x={40}
          y={250}
          fontSize={18}
          fontStyle="bold"
          fill="black"
          text="Max Prep Time"
        />

        <Rect
          x={40}
          y={275}
          width={screen.width - 80}
          height={40}
          fill="#77b4ff"
          shadowColor="#585858"
          shadowBlur={10}
          shadowOffset={[10, 10]}
          cornerRadius={7}
        />

        <Text
          x={500}
          y={334}
          align="center"
          fontSize={20}
          fill="black"
          text="Food Intolerances"
        />

        <Html>
          <div style={{ marginLeft: 380, marginTop: 410 }}>
            <FormControlLabel
              value="seafood"
              control={
                <Switch
                  color="primary"
                  size="small"
                  onChange={handleSeafoodChange}
                />
              }
              label="Seafood"
              labelPlacement="top"
            />
            <FormControlLabel
              value="shellfish"
              control={
                <Switch
                  color="primary"
                  size="small"
                  onChange={handleShellfishChange}
                />
              }
              label="Shellfish"
              labelPlacement="top"
            />
            <FormControlLabel
              value="soy"
              control={
                <Switch
                  color="primary"
                  size="small"
                  onChange={handleSoyChange}
                />
              }
              label="Soy"
              labelPlacement="top"
            />
            <FormControlLabel
              value="treenuts"
              control={
                <Switch
                  color="primary"
                  size="small"
                  onChange={handleTreenutsChange}
                />
              }
              label="Treenuts"
              labelPlacement="top"
            />
            <FormControlLabel
              value="wheat"
              control={
                <Switch
                  color="primary"
                  size="small"
                  onChange={handleWheatChange}
                />
              }
              label="Wheat"
              labelPlacement="top"
            />
          </div>
        </Html>
        <Html>
          <div style={{ marginLeft: 380, marginTop: 360 }}>
            <FormControlLabel
              value="dairy"
              control={
                <Switch
                  color="primary"
                  size="small"
                  onChange={handleDairyChange}
                />
              }
              label="Dairy"
              labelPlacement="top"
            />
            <FormControlLabel
              value="eggs"
              control={
                <Switch
                  color="primary"
                  size="small"
                  onChange={handleEggsChange}
                />
              }
              label="Eggs"
              labelPlacement="top"
            />
            <FormControlLabel
              value="gluten"
              control={
                <Switch
                  color="primary"
                  size="small"
                  onChange={handleGlutenChange}
                />
              }
              label="Gluten"
              labelPlacement="top"
            />
            <FormControlLabel
              value="peanuts"
              control={
                <Switch
                  color="primary"
                  size="small"
                  onChange={handlePeanutsChange}
                />
              }
              label="Peanuts"
              labelPlacement="top"
            />
            <FormControlLabel
              value="sesame"
              control={
                <Switch
                  color="primary"
                  size="small"
                  onChange={handleSesameChange}
                />
              }
              label="Sesame"
              labelPlacement="top"
            />
          </div>
        </Html>

        <Html>
          <div
            style={{ marginLeft: 33, marginTop: 330, width: 100, height: 20 }}
          >
            <FormControl
              variant="filled"
              sx={{ m: 1, minWidth: 120 }}
              size="small"
            >
              <InputLabel id="demo-select-small">Cuisine</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                onChange={handleCuisineChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'African'}>African</MenuItem>
                <MenuItem value={'Chinese'}>Chinese</MenuItem>
                <MenuItem value={'Japanese'}>Japanese</MenuItem>
                <MenuItem value={'Korean'}>Korean</MenuItem>
                <MenuItem value={'Vietnamese'}>Vietnamese</MenuItem>
                <MenuItem value={'Thai'}>Thai</MenuItem>
                <MenuItem value={'Indian'}>Indian</MenuItem>
                <MenuItem value={'British'}>British</MenuItem>
                <MenuItem value={'Irish'}>Irish</MenuItem>
                <MenuItem value={'French'}>French</MenuItem>
                <MenuItem value={'Italian'}>Italian</MenuItem>
                <MenuItem value={'Mexican'}>Mexican</MenuItem>
                <MenuItem value={'Spanish'}>Spanish</MenuItem>
                <MenuItem value={'MiddleEastern'}>Middle Eastern</MenuItem>
                <MenuItem value={'Jewish'}>Jewish</MenuItem>
                <MenuItem value={'American'}>American</MenuItem>
                <MenuItem value={'Cajun'}>Cajun</MenuItem>
                <MenuItem value={'Southern'}>Southern</MenuItem>
                <MenuItem value={'Greek'}>Greek</MenuItem>
                <MenuItem value={'German'}>German</MenuItem>
                <MenuItem value={'Nordic'}>Nordic</MenuItem>
                <MenuItem value={'EasternEuropean'}>Eastern European</MenuItem>
                <MenuItem value={'Caribbean'}>Caribbean</MenuItem>
                <MenuItem value={'LatinAmerican'}>Latin American</MenuItem>
              </Select>
            </FormControl>

            <FormControl
              variant="filled"
              sx={{ m: 1, minWidth: 120 }}
              size="small"
            >
              <InputLabel id="demo-select-small">Diet Type</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                onChange={handleDietChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'Pescetarian'}>Pescetarian</MenuItem>
                <MenuItem value={'LactoVegetarian'}>Lacto Vegetarian</MenuItem>
                <MenuItem value={'OvoVegetarian'}>Ovo Vegetarian</MenuItem>
                <MenuItem value={'Vegan'}>Vegan</MenuItem>
                <MenuItem value={'Paleo'}>Paleo</MenuItem>
                <MenuItem value={'Primal'}>Primal</MenuItem>
                <MenuItem value={'Vegetarian'}>Vegetarian</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Html>

        <Html>
          <div style={{ marginLeft: 50, marginTop: 275, width: 800 }}>
            <FormLabel id="maxPrepTime" />
            <RadioGroup
              aria-labelledby="maxPrepTime"
              defaultValue="Infinity"
              name="radio-buttons-group"
            />
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="maxPrepTime"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value={10}
                  control={<Radio />}
                  label="10 mins"
                  onChange={handleTimeChange}
                />
                <FormControlLabel
                  value={20}
                  control={<Radio />}
                  label="20 mins"
                  onChange={handleTimeChange}
                />
                <FormControlLabel
                  value={30}
                  control={<Radio />}
                  label="30 mins"
                  onChange={handleTimeChange}
                />
                <FormControlLabel
                  value={40}
                  control={<Radio />}
                  label="40 mins"
                  onChange={handleTimeChange}
                />
                <FormControlLabel
                  value={50}
                  control={<Radio />}
                  label="50 mins"
                  onChange={handleTimeChange}
                />
                <FormControlLabel
                  value={60}
                  control={<Radio />}
                  label="60 mins"
                  onChange={handleTimeChange}
                />
                <FormControlLabel
                  value={Infinity}
                  control={<Radio />}
                  label="∞ mins"
                  onChange={handleTimeChange}
                />
              </RadioGroup>
            </FormControl>
          </div>
        </Html>

        <Html>
          <div style={{ marginLeft: 30, marginTop: 165 }}>
            <TextField
              variant="outlined"
              label="Description of food"
              onChange={handleDescriptionChange}
            />
          </div>
        </Html>
      </Layer>
    </Stage>
  );
}

export default Home;
