let rand_block = document.getElementById("random");
rand_block.innerHTML = "Кто.";

let nums = new Array(64);
for (let i = 1; i < 63; i++) {
	nums[i-1] = i;
}
nums[62] = "Натяжечка.";
nums[63] = "Вы отчислены.";

let i = 0;
let index;
let last_index;

rand_block.onclick = () => {
	let timer = setInterval(function() {
  		if (i == 100) 
  			clearInterval(timer);
  		else {
  			if (typeof last_index === 'undefined') {
  				index = Math.floor(Math.random() * 64);
  			}
  			else {
  				index = Math.floor(Math.random() * 64);
  				while (index == last_index) {
  					index = Math.floor(Math.random() * 64);
  				}
  			}
  			console.log(nums[index]);
  			rand_block.innerHTML = nums[index];
  			i++;
  			last_index = index;
  		}
	}, 40);
}
