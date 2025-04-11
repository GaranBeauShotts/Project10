class SetClass {
    constructor(elements) {
      this.elements = new Set(elements);
    }
  
    union(otherSet) {
      return new SetClass([...this.elements, ...otherSet.elements]);
    }
  
    intersection(otherSet) {
      return new SetClass([...this.elements].filter(el => otherSet.elements.has(el)));
    }
  
    difference(otherSet) {
      return new SetClass([...this.elements].filter(el => !otherSet.elements.has(el)));
    }
  
    complement(universalSet) {
      return new SetClass([...universalSet.elements].filter(el => !this.elements.has(el)));
    }
  
    isSubset(otherSet) {
      return [...this.elements].every(el => otherSet.elements.has(el));
    }
  
    powerSet() {
      const arr = [...this.elements];
      const result = [];
  
      const total = 1 << arr.length; // 2^n
      for (let i = 0; i < total; i++) {
        const subset = [];
        for (let j = 0; j < arr.length; j++) {
          if (i & (1 << j)) {
            subset.push(arr[j]);
          }
        }
        result.push(subset);
      }
      return result;
    }
  
    toString() {
      return `{${[...this.elements].join(", ")}}`;
    }
  }
  