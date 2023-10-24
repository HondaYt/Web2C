const mS = document.createElement("div");
document.body.append(mS);

mS.style.position = "absolute";
mS.style.top = 0;
mS.style.left = 0;
mS.style.width = "32px";
mS.style.height = mS.style.width;

// mS.style.borderRadius = "50%";
mS.style.background = "tomato";
mS.style.opacity = 0.8;
mS.style.zIndex = 1000;
mS.style.transition = "transform 0.1s linear";

let flg = false;


mS.addEventListener("mousedown", () => (flg = true));
mS.addEventListener("mouseup", () => (flg = false));

document.addEventListener("mousemove", (e) => {
    if (!flg) return;
    const stalkerX = e.clientX - parseInt(mS.style.width) / 2;
    const stalkerY = e.clientY - parseInt(mS.style.height) / 2;
    mS.style.transform = "translate(" + stalkerX + "px," + stalkerY + "px)";
});
