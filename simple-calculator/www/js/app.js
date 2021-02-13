let button = document.querySelectorAll('button') //button
	let detail = document.querySelector('#detail') //detail
	let operand = document.querySelector('#operand') //operator
	let result = document.querySelector('#result') //result / preview
	let _results = ''
	let _operands = ''
	let negative = false
	let clicked = function(e) { //function when click
		let _c = e.target.innerHTML

		// Al clear (AC)
		if(_c == 'AC') {
			detail.innerHTML = ''
			result.innerHTML = ''
			operand.innerHTML = ''
			_results = ''
			_operands = ''
			_c = ''
		}

		// Negative
		if(_c == '+/-') {
			if(negative){
				let _r = result.innerHTML
				if(_r.substring(0,1) == '-') {
					result.innerHTML = _r.substring(1,_r.length)
				}
				negative = false
			}else{
				result.innerHTML = '-'+result.innerHTML
				negative = true
			}
			_c = ''
		}

		// Hanya boleh awalan angka
		if(result.innerHTML.length == 0 && _c.match(/[0-9.]/g) == null) {
			_c = ''	
		}		

		// gak boleh operator lebih dari satu misal 2++3 atau 4*+5
		if(_operands != '' && _c.match(/\+|-|×|\/|=|%/g) != null) {
			operand.innerHTML = _c
			let r = result.innerHTML
			let d = detail.innerHTML
			r = r.substring(0,r.length-1) + _c
			d = d.substring(0,d.length-1) + _c
			result.innerHTML = r
			detail.innerHTML = d
			_operands = _c
			_c = ''
		}


		// detail menampilkan jumlah
		if(_operands == '=') {
			detail.innerHTML = eval(detail.innerHTML.replace('×','*')).toString()
		}

		// menulis angka
		if(_c.match(/[0-9.]/g) != null) {	
			_results += _c
			_operands = ''
		}else{
		// menulis operator
			if(_c.match(/\+|-|×|\/|=|%/g) != null) {
				_operands = _c
				operand.innerHTML = _c
			}
		}

		// biar gak kepanjangan
		if(result.innerHTML.length > 6){
			result.classList.remove('text-6xl')
			result.classList.add('text-4xl')
		}else if(result.innerHTML.length <= 6){
			result.classList.remove('text-4xl')
			result.classList.add('text-6xl')
		}
		if(result.innerHTML.length > 12) {
			let x = result.innerHTML
			result.innerHTML = x.substring(x.length-12,x.length)
		}

		// biar gak kepanjangan
		if(detail.innerHTML.length > 22) {
			let x = detail.innerHTML
			detail.innerHTML = x.substring(x.length-22,x.length)
		}

		// biar x jadi *
		if(_c == '=') {
			_results = eval(detail.innerHTML.replace('×','*')).toString()
			result.innerHTML = _results
			_operands = _c
		}else{			
			detail.innerHTML += _c
			result.innerHTML += _c
		}
	}
	// ini gakke pake njir
	function formatNumber(num) {
	    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
	}
	// panggil click event addEventListener
	button.forEach(e=>e.addEventListener('click', clicked))