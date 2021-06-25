import React from "react";
import { render, screen, getByText } from "@testing-library/react";
import { def } from "bdd-lazy-var/global";
import { Elevator } from "../Elevator";

describe("Elevator", () => {
  it("", () => {
    expect(Elevator()).toEqual("Elevator");
    //console.log(Elevator);
  });

  describe("goToFirstFloor", () => {
    describe("when elevator is moving ", () => {
        // should que destination
        // isMoving should be true
        // isDooropen should be false
    });

    describe("When elevator is not moving", () => {
      describe("When door open", () => {
        // should que destination
        // close door
        // Move to destination
        // set isMoving to true
      });

      describe("When door closed", () => {
        // que destination
        // move to destination
        // set isMoving to true
      });

      descibe("arrived at destination", () => {
        // is level = "lobby" shouldBe true
        // ismoving should be false
        // isDoorOpen should be true
      });

      descibe("hasnt arrived at destination", () => {
        // is level = "lobby" shouldBe false
        // ismoving should be true
        // isDooropen should be false
      });
    });

  });
});
