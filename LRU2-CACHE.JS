/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    //initialize new map
    this.map=new Map();
    this.capacity=capacity;

};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.map.has(key)){
        return -1; //key not found
    }

    const value=this.map.get(key);

    this.map.delete(key); //remove the old position
    this.map.set(key,value); //re-insert to update position 
    return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    //check if the map has a key,to insert a new one 
    if(this.map.has(key)){
        this.map.delete(key);
    }

    //insert new or update key-value
    this.map.set(key,value);


    if(this.map.size>this.capacity){
        //if the map size is greater than the capacity size
        //remove the least recently used(first item)
         const firstKey=this.map.keys().next().value;
         this.map.delete(firstKey);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */