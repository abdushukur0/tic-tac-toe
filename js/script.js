window.onload = function () {
	const reloadBtn = document.querySelector('.reload');
	const boxes = document.querySelectorAll('td');
	let end = false;
	const Turn = document.querySelector("#turn");
	const result = document.querySelector(".turn");
	let turn = "O";
	const winArr = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[4, 2, 6]
	]
	reloadBtn.addEventListener('click', function(){
		window.location.reload();
	})
	function TurnChenge(){
		if (turn === "X") {
			turn = "O";
		}
		else {
			turn = "X";
		}
	}

	function TurnShow(){
		if (turn === "X") {
			return "X";
		}
		else {
			return "O";
		}
	}
	for(let i = 0; i < boxes.length; i++){
		boxes[i].addEventListener("click", function() {
			if (this.innerHTML === "" && end != true) {
				boxes[i].innerHTML = TurnShow();
				boxes[i].classList.add('fill');
				TurnChenge();
				Turn.innerHTML = TurnShow();
			}
			let filledBoxes = document.querySelectorAll(".fill");
			if(filledBoxes.length >= 5){
				for(i = 0; i < winArr.length; i++){
						if (boxes[winArr[i][0]].innerHTML != "" &&
							boxes[winArr[i][0]].innerHTML == boxes[winArr[i][1]].innerHTML
						&& boxes[winArr[i][1]].innerHTML == boxes[winArr[i][2]].innerHTML) {
							console.log("win");
							end = true;
							boxes[winArr[i][0]].classList.add("win");
							boxes[winArr[i][1]].classList.add("win");
							boxes[winArr[i][2]].classList.add("win");
							result.innerHTML = `${boxes[winArr[i][0]].innerHTML} WINS`;
						}
				}
			}
			if(filledBoxes.length == 9 && end == false){
				result.innerHTML = "Draw";
				end = true;
			}
			if (end == true) {
				document.querySelector('body').classList.add("finish");

			}
		})
	}
}
