import React from "react";
import ChartBox from "../components/chartBox";
import SkillBox from "../components/skillsBox";
import PercentageBox from "../components/percentageArea";
import Welcome from "../components/welcome";
import Profile from "../components/profile";
import Tasks from "../components/tasksBox";
import SearcBar from "../components/searchBar";
import LinkHeader from "../components/linkHeader";
import { Sidebar } from "../components/Sidebar/sidebar";
import Header from "../components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="dashboardContent">
      <Welcome name="João Nahid" profession="Web developer at Webtagger" />

      <div className="threeBoxes">
        <SkillBox skill="Javascript" />
        <SkillBox skill="PHP" />
        <SkillBox skill="React" />
      </div>

      <div className="twoBoxes">
        <ChartBox title="Web Development" />
        <PercentageBox title="Web Development" />
      </div>
    </div>
  );
}
