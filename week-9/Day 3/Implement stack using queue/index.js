/*
Queue {
  push()
  front()
  pop()
  isEmpty()
}
*/
class Stack {
    constructor()
    {
        this.Q1 = new Queue()
        this.Q2 = new Queue()
    }
    push(value) {
    	//write your code here..
    	this.Q2.push(value);
    	while(!this.Q1.isEmpty()){
    	    this.Q2.push(this.Q1.front());
    	    this.Q1.pop();
    	}
    	
    	[this.Q1, this.Q2] = [this.Q2, this.Q1];
    }
    pop() {
    	//write your code here..
    	if(!this.Q1.isEmpty()){
    	    this.Q1.pop();
    	}
    }
    top() {
        //write your code here..
        if(!this.Q1.isEmpty()){
           return this.Q1.front()
        }
    }
    isEmpty() {
    	//write your code here..
    	return this.Q1.isEmpty()
    }
}
