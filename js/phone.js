const loadphone = async (searchText, isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  displayPhones(phones, isShowAll);
};

const displayPhones = (phones, isShowAll) => {
  //   console.log(phones);
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.textContent = "";
  // display show all button there are more then 12 phones
  const showAllContainer = document.getElementById("show-all-container");
  if (phones.length > 12 && !isShowAll) {
    showAllContainer.classList.remove("hidden");
  } else {
    showAllContainer.classList.add("hidden");
  }
  console.log("show all", isShowAll);
  // display only first 12
  if (!isShowAll) {
    phones = phones.slice(0, 12);
  }

  phones.forEach((phone) => {
    // console.log(phone);
    // 1 creat a div
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-gray-100 w-96 shadow-xl`;
    // 3 innerhtml
    phoneCard.innerHTML = `
     <figure>
            <img
              src="${phone.image}"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
    `;
    // append child
    phoneContainer.appendChild(phoneCard);
  });
  // hide loadding  spinner
  toggleLoddingSpinner(false);
};

// handler search
const handelSearch = (isShowAll) => {
  toggleLoddingSpinner(true);
  const SearchField = document.getElementById("search-field");
  const searchText = SearchField.value;
  // console.log(searchText);
  loadphone(searchText, isShowAll);
};

// another search field
const handelSearch2 = () => {
  toggleLoddingSpinner(true);
  const searchField = document.getElementById("search-field2");
  const searchText = searchField.value;
  console.log(searchText);
  loadphone(searchText);
};

const toggleLoddingSpinner = (isLoadding) => {
  const loaddingSpinner = document.getElementById("loading-spinner");

  if (isLoadding) {
    loaddingSpinner.classList.remove("hidden");
  } else {
    loaddingSpinner.classList.add("hidden");
  }
};
const handelShowAll = () => {
  handelSearch(true);
};
// loadphone();
