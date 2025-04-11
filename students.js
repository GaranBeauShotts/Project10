// Universal set
const U = new SetClass(["Beau", "Bob", "Charlie", "David", "Eva", "Fiona", "George"]);

// Course groups
const A = new SetClass(["Beau", "Bob", "Charlie"]); // Discrete Math
const B = new SetClass(["Bob", "David", "Eva"]);     // Data Structures
const C = new SetClass(["Beau", "Eva", "George"]);  // Algorithms

console.log("A ∪ B (Discrete Math or Data Structures):", A.union(B).toString());
console.log("A ∩ C (Discrete Math and Algorithms):", A.intersection(C).toString());
console.log("A - B (Discrete Math but not Data Structures):", A.difference(B).toString());
console.log("Complement of A (not taking Discrete Math):", A.complement(U).toString());

// Power Set of A
console.log("Power Set of A:");
A.powerSet().forEach(subset => console.log(subset));
