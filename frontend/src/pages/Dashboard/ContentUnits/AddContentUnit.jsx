import "./AddContentUnit.css";
import React, { useState } from "react";

import ReactPlayer from "react-player";
import { useEffect } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { Box, Button, Step, StepLabel, Stepper, Typography } from "@mui/material";

const steps = ["Choose Player", "Video Content", "Get Embed"];

export default function AddContentUnit() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="addPlayer">
      <Navbar />
      <div className="addPlayer-main">
        <Sidebar />
        <div className="addContentUnit-main-container">
          <span className="title">CREATE SIMPLE CONTENT UNIT</span>

          <Box sx={{ width: "80%", marginTop: "30px", alignItems: "center" }}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};

                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
              <div className="stepperContainer">
                <div className="stepperMain">
                  {activeStep === 0 && (
                    <div className="stepperMain-step">
                      <Typography sx={{ mt: 2, mb: 1 }}>Select Player</Typography>
                      <select className="playerSelect">
                        <option value="Player 1">Player 1</option>
                        <option value="Player 2">Player 2</option>
                        <option value="Player 3">Player 3</option>
                      </select>
                    </div>
                  )}
                  {activeStep === 1 && (
                    <div className="stepperMain-step">
                      <Typography sx={{ mt: 2, mb: 1 }}>Select Playlist</Typography>
                      <select className="playerSelect">
                        <option value="Playlist 1">Playlist 1</option>
                        <option value="Playlist 2">Playlist 2</option>
                        <option value="Playlist 3">Playlist 3</option>
                      </select>
                    </div>
                  )}
                  {activeStep === 2 && (
                    <div className="stepperMain-step">
                      <Typography sx={{ mt: 2, mb: 1 }}>Embed Code</Typography>
                      <div className="embedCode">
                        <pre className="embedCodePre" id="bridWidgetEmbedCode">
                          <span className="tag">&lt;script</span>
                          <span className="pln"> </span>

                          <span className="atn">type</span>
                          <span className="pun">=</span>
                          <span className="atv">"text/javascript"</span>
                          <span className="pln"> </span>
                          <span className="atn">src</span>
                          <span className="pun">=</span>
                          <span className="atv">"https://services.brid.tv/player/build/brid.min.js"</span>
                          <span className="tag">&gt;&lt;/script&gt;</span>
                          <span className="pln"></span>
                          <span className="tag">&lt;div</span>
                          <span className="pln"> </span>
                          <span className="atn">id</span>
                          <span className="pun">=</span>
                          <span className="atv">"Brid_82451139"</span>
                          <span className="pln"> </span>
                          <span className="atn">class</span>
                          <span className="pun">=</span>
                          <span className="atv">"brid"</span>
                          <span className="pln"> </span>
                          <span className="atn">style</span>
                          <span className="pun">=</span>
                          <span className="atv">"</span>
                          <span className="pln">width</span>
                          <span className="pun">:</span>
                          <span className="lit">480</span>
                          <span className="pun">;</span>
                          <span className="pln">height</span>
                          <span className="pun">:</span>
                          <span className="lit">270</span>
                          <span className="pun">;</span>
                          <span className="atv">"</span>
                          <span className="pln"> </span>
                          <span className="tag">&gt;</span>
                          <span className="pln"></span>
                          <span className="tag">&lt;/div&gt;</span>
                          <span className="pln"></span>
                          <span className="tag">&lt;script</span>
                          <span className="pln"> </span>
                          <span className="atn">type</span>
                          <span className="pun">=</span>
                          <span className="atv">"text/javascript"</span>
                          <span className="tag">&gt;</span>
                          <span className="pln">$bp</span>
                          <span className="pun"></span>
                          <span className="str">"Brid_82451139"</span>
                          <span className="pun">,</span>
                          <span className="pln"> </span>
                          <span className="pun"></span>
                          <span className="str">"id"</span>
                          <span className="pun">:</span>
                          <span className="str">"39806"</span>
                          <span className="pun">,</span>
                          <span className="str">"width"</span>
                          <span className="pun">:</span>
                          <span className="lit">480</span>
                          <span className="pun">,</span>
                          <span className="str">"height"</span>
                          <span className="pun">:</span>
                          <span className="lit">270</span>
                          <span className="pun">,</span>
                          <span className="str">"shuffle"</span>
                          <span className="pun">:</span>
                          <span className="lit">0</span>
                          <span className="pun">,</span>
                          <span className="str">"playlist"</span>
                          <span className="pun">:</span>
                          <span className="str">"mode"</span>
                          <span className="pun">:</span>
                          <span className="str">"widget"</span>
                          <span className="pun">,</span>
                          <span className="str">"id"</span>
                          <span className="pun">:</span>
                          <span className="str">"788"</span>
                          <span className="pun">,</span>
                          <span className="str">"widget_type"</span>
                          <span className="pun">:</span>
                          <span className="str">"simple_widget"</span>
                          <span className="pun">;</span>
                          <span className="pln"></span>
                          <span className="tag">&lt;/script&gt;</span>
                        </pre>
                      </div>
                    </div>
                  )}
                </div>

                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                    Back
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />

                  <Button onClick={handleNext}>{activeStep <= steps.length - 2 && "Next"}</Button>

                  <Button onClick={handleNext}>{activeStep === steps.length - 1 && "Finish"}</Button>
                </Box>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}
