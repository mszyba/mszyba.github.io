import React from 'react';
import { useNavigate } from "react-router-dom";

function LinkPersonalPage() {
  const navigate = useNavigate();
  navigate("/personal-page");
}

function LinkHome() {
  const navigate = useNavigate();
  navigate("/home");
}

function LinkAbout() {
  const navigate = useNavigate();
  navigate("/about");
}
