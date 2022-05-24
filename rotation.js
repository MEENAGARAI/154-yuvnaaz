AFRAME.registerComponent("diver-rotation-reader", {
    schema: {
        speedOfRotation: { type: "number", default: 0 },
        speedOfPosition: { type: "number", default: 0 }
    },

    init: function() {
        window.addEventListener("keydown", (e) => {
            this.data.speedOfRotation = this.el.getAttribute("rotation")
            var pRotate = this.data.speedOfRotation
            this.data.speedOfPosition = this.el.getAttribute("position")
            var pos = this.data.speedOfPosition

            if (e.key === "ArrowRight") {
                if (pRotate.x < 10) {
                    pRotate.x += 0.5
                    this.el.setAttribute("rotation", pRotate)
                }
            }
            if (e.key === "ArrowLeft") {
                if (pRotate.x > -10) {
                    pRotate.x -= 0.5
                    this.el.setAttribute("rotation", pRotate)
                }
            }
            if (e.key === "ArrowUp") {
                if (pRotate.z < 20) {
                    pRotate.z += 0.5
                    this.el.setAttribute("rotation", pRotate)
                }
                if (pos.y < 2) {
                    pos.y += 0.01
                    this.el.setAttribute("position", pos)
                }
            }
            if (e.key === "ArrowDown") {
                if (pRotate.z > -20) {
                    pRotate.z -= 0.5
                    this.el.setAttribute("rotation", pRotate)
                }
                if (pos.y > -2) {
                    pos.y -= 0.01
                    this.el.setAttribute("position", pos)
                }
            }
        })
    }

})