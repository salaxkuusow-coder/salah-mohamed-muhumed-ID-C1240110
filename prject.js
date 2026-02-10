// Buugaagta (Object)
let books = {
  english: { name: "English Book", price: 5 },
  math: { name: "Math Book", price: 3 },
  science: { name: "Science Book", price: 4 }
};

// Diiwaan gelinta amaahda (Array)
let borrowList = [];

// Button event
document.getElementById("borrowBtn").addEventListener("click", borrowBook);

function borrowBook() {
  let name = document.getElementById("name").value;
  let bookKey = document.getElementById("book").value;
  let days = document.getElementById("days").value;
  let result = document.getElementById("result");

  // Hubinta xogta
  if (name === "" || bookKey === "" || days === "") {
    alert("Fadlan buuxi dhammaan xogta!");
    return;
  }

  // Hubinta magaca 
  let namePattern = /^[A-Za-z\s]+$/;
  if (!namePattern.test(name)) {
    alert("Magaca waa inuu ka kooban yahay xarfo kaliya!");
    return;
  }

  // Hubinta number
  if (isNaN(days) || days <= 0) {
    alert("Maalmaha waa inay noqdaan number sax ah!");
    return;
  }

  days = parseInt(days);

  if (days > 7) {
    alert("Buug lama amaahan karo wax ka badan 7 maalmood!");
    return;
  }

  // Xogta buugga
  let book = books[bookKey];
  let total = book.price * days;

  // Keydinta amaahda (array)
  borrowList.push({
    borrower: name,
    book: book.name,
    days: days,
    total: total
  });

  // Natiijada
  result.innerText = `${name}, waxaad amaahatay "${book.name}" muddo ${days} maalmood ah. Qiimaha: $${total}`;

  console.log("Borrow List:", borrowList);
}