Function SetOfStacks(limit) => {
	This.limit = limit
	this.stackArr = []

	This.push = function (obj) {
		if (this.stackArr[stackArr.length-1].length <= this.limit){
			this.stackArr[stackArr.length-1].push(obj)
		} else {
			Let newStack = [obj]
			this.stackArr.push(newStack)
		}

		Return this.stackArr[stackArr.length -1]
	}

This.pop = function () {
		Return this.stackArr[stackArr.length-1].pop
	}

	this.popAt = function (ind){
		if(stackArr[ind].length != 0){
			Return stackArr[ind].pop()
		} else {
			Return “No such index”
		}
	}
}
