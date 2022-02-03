
/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v2
 */
var ZigzagIterator = function ZigzagIterator(v1, v2) {
    this.vectors = [v1, v2];
    this.indexes = new Array(this.vectors.length).fill(0);
    this.indexVectors = 0;
    this.endedVectors = 0;
};

/**
 * @this ZigzagIterator
 * @returns {integer}
 */
ZigzagIterator.prototype.next = function next() {
    if (!this.hasNext()) {
        throw `${indexes[indexVectors]} of vector ${indexVectors} is out of bounds!"`;
    }

    let next = this.vectors[this.indexVectors][this.indexes[this.indexVectors]];
    this.indexes[this.indexVectors]++;
    this.getNextIndexAmongLists();

    return next;
};


/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
    this.moveForward();
    return this.endedVectors < this.vectors.length;
};

ZigzagIterator.prototype.moveForward = function () {
    this.endedVectors = 0;
    while (this.indexes[this.indexVectors] === this.vectors[this.indexVectors].length && this.endedVectors < this.vectors.length) {
        this.endedVectors++;
        this.getNextIndexAmongLists();
    }
};

ZigzagIterator.prototype.getNextIndexAmongLists = function () {
    this.indexVectors = (this.indexVectors + 1) % this.vectors.length;
};
