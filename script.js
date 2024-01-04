class Minheap{
	constructor(){
	this.heap[]	
	}
	

insert(value){
	this.heap.push(value)
	this.bubbleUp()
}

extractMin(){
  if (this.heap.length === 0) return null;
  if (this.heap.length === 1)	return this.heap.pop()

	const min=this.heap[0]
	this.heap[0]=this.heap.pop()
	this.heapify(0)
	return min
}

bubbleUp(){
	let index=this.heap.length-1
	while (index>0) {
		const parentInd=Math.floor((ibdex-1)/2)

		if (this.heap[index] > this.heap[parentInd]) break
			this.swap(index,parentInd)
		    index=parentInd
		
	}
}

heapify(){
	let leftchild=2*index+1;
	let rightchild=2*index+2
	let smallest=index

	if (leftchild < this.heap.length && this.heap[leftchild] < this.heap[smallest]) {
		smallest=leftchild
	}
	if (rightchild < this.heap.length && this.heap[rightchild] < this.heap[smallest]) {
		smallest=rightchild
	}

	if (smallest != index) {
		this.swap(index,ele)
		this.heapify(smallest)
	}
}

swap(i,j){
	[this.heap[i],this.heap[j]] =[this.heap[j],this.heap[i]]
  }
}



function mincost(arr)
{ 
//write your code here
// return the min cost
	const minHeap=new Minheap()
	arr.forEach(rope => minHeap.insert(rope))
	let totalcost=0

while (minHeap.heap.length >1) {
	const firstRope=minHeap.extractMin()
	const secondRope=minHeap.extractMin()

    const currentCost=firstRope+secondRope
	minHeap.insert(currentCost)
	totalcost +=currentCost
}
return totalcost

}
console.log(mincost([4,3,2,6]))

module.exports=mincost;
