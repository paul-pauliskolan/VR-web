// Register a custom component named "x-button-listener"
AFRAME.registerComponent("x-button-listener", {
  // Initialize the component.
  init: function () {
    // Store the entity (the element the component is attached to) as a variable.
    var el = this.el;
    // Add an event listener for the "xbuttondown" event (which is emitted when the X button is pressed on the Oculus Touch controllers).
    el.addEventListener("xbuttondown", function (evt) {
      // When the event is emitted, toggle the "visible" attribute of the entity. This will make the entity visible if it was previously hidden, or invisible if it was previously visible.
      el.setAttribute("visible", !el.getAttribute("visible"));
      console.log("x button down");
      console.log("visible", el.getAttribute("visible"));
    });
  },
});
