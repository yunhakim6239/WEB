var cnt1 = 0;

function btn_event() {
    const sp1 = document.getElementById("sp1");
    const btn1 = document.getElementById("btn1");
    cnt1 += 1;
    sp1.innerText = `Total number: ${cnt1}`;
    console.log(cnt1);
}

var cnt2 = 0;
function btn_event2() {
    const num = Number(document.getElementById("txt1").value);
    const btn2 = document.getElementById("btn2");
    const div2 = document.getElementById("div2");
    cnt2 += num;
    div2.innerText = `Total number: ${cnt2}`;
    console.log(cnt2);
}