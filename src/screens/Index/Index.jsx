import React from "react";
import "./style.css";

export const Index = () => {
  return (
    <div className="index">
      <div className="overlap">
        <div className="hero-section">
          <p className="text-wrapper">We’re Still Stitching Our Website.</p>
          <p className="div">We are going to launch our website very soon. Stay tune.</p>
          <img
            className="scissors-cut"
            alt="Scissors cut"
            src="https://cdn.animaapp.com/projects/5f1695355de7e491dab344ab/releases/6559c1891dd4d9a5f56230f8/img/scissors-cut-02.svg"
          />
          <div className="group">
            <div className="overlap-group">
              <div className="text-wrapper-2">Enter your email address</div>
              <div className="frame">
                <div className="text-wrapper-3">Notify me</div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav">
          <img
            className="img"
            alt="Group"
            src="https://cdn.animaapp.com/projects/5f1695355de7e491dab344ab/releases/6559c1891dd4d9a5f56230f8/img/group-16@2x.png"
          />
          <p className="p">Facebook / Instagram / Linkedln</p>
        </div>
      </div>
    </div>
  );
};
