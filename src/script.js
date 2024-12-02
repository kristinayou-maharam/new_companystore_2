document.addEventListener("DOMContentLoaded", function () {

  fetch("./src/stationery.json")
    .then(response => response.json())
    .then(data => {
      window.displayStationery = function (index) {
        const stationery = data.stationery[index];
        const slideHTML = stationery.image.map(imageUrl => `<div><img class="product-image" src="${imageUrl}" alt="${stationery.name}"></div>`).join('');
    
        let stationeryInfoHTML = `
        <div class="slick-carousel">
        ${slideHTML}
        </div>
        <div id="detaildescription">
        <h2>${stationery.name}</h2>
        <p>${stationery.description}</p>
        <p id="quantity-label">Quantity per Order: ${stationery.quantity}</p>
        `;
    
        if (Object.keys(stationery.DON_reference_number).length > 1) {
          stationeryInfoHTML += `
          <label for="variationDropdown"><p style="display:inline-block">Variation:</p></label>
          <select id="variationDropdown">`;
    
          Object.entries(stationery.DON_reference_number).forEach(([variation, value]) => {
            stationeryInfoHTML += `<option value="${value.value}">${value.variation}</option>`;
          });
    
          stationeryInfoHTML += `</select><br><br>`;
        }

        if (!stationery.quantity) {
          stationeryInfoHTML += `<style>#quantity-label { display: none; }</style>`;
        }
    

        stationeryInfoHTML += `
        <p id="don">Item Code: </p><p id="selectedValue"><strong>${Object.values(stationery.DON_reference_number)[0].value}</strong></p>
        <p id="note" style="display: ${stationery.Note ? 'block' : 'none'}">Note: ${stationery.Note}</p>
        </div>
        `;
    
        document.getElementById("product-info").innerHTML = stationeryInfoHTML;
    
        $('.slick-carousel').slick({
          infinite: true,
          arrows: true,
          dots: true
        });
    
        const variationDropdown = document.getElementById('variationDropdown');
        const selectedValueElement = document.getElementById('selectedValue');
    
        if (variationDropdown) {
          variationDropdown.addEventListener('change', function () {
            const selectedOptionValue = variationDropdown.value.trim();
            selectedValueElement.textContent = selectedOptionValue;
          });
        }
      };
    })

    .then(() => fetch("./src/new.json"))
    .then(response => response.json())
    .then(data => {
      window.displayNew = function (index) {
        const neww = data.new[index];
        const slideHTML = neww.image.map(imageUrl => `<div><img class="product-image" src="${imageUrl}" alt="${neww.name}"></div>`).join('');
    
        let newInfoHTML = `
        <div class="slick-carousel">
        ${slideHTML}
        </div>
        <div id="detaildescription">
        <h2>${neww.name}</h2>
        <p>${neww.description}</p>
        <p id="quantity-label">Quantity per Order: ${neww.quantity}</p>
        `;
    
        if (Object.keys(neww.DON_reference_number).length > 1) {
          newInfoHTML += `
          <label for="variationDropdown"><p style="display:inline-block">Variation:</p></label>
          <select id="variationDropdown">`;
    
          Object.entries(neww.DON_reference_number).forEach(([variation, value]) => {
            newInfoHTML += `<option value="${value.value}">${value.variation}</option>`;
          });
    
          newInfoHTML += `</select><br><br>`;
        }

        if (!neww.quantity) {
          newInfoHTML += `<style>#quantity-label { display: none; }</style>`;
        }
    
        newInfoHTML += `
        <p id="don">Item Code: </p><p id="selectedValue"><strong>${Object.values(neww.DON_reference_number)[0].value}</strong></p>
        <p id="note" style="display: ${neww.Note ? 'block' : 'none'}">Note: ${neww.Note}</p>
        </div>
        `;
    
        document.getElementById("product-info").innerHTML = newInfoHTML;
    
        $('.slick-carousel').slick({
          infinite: true,
          arrows: true,
          dots: true
        });
    
        const variationDropdown = document.getElementById('variationDropdown');
        const selectedValueElement = document.getElementById('selectedValue');
    
        if (variationDropdown) {
          variationDropdown.addEventListener('change', function () {
            const selectedOptionValue = variationDropdown.value.trim();
            selectedValueElement.textContent = selectedOptionValue;
          });
        }
      };
    })



    .then(() => fetch("./src/books.json"))
    .then(response => response.json())
    .then(data => {
      window.displayBooks = function (index) {
        const books = data.books[index];
        const slideHTML = books.image.map(imageUrl => `<div><img class="product-image" src="${imageUrl}" alt="${books.name}"></div>`).join('');
    
        let booksInfoHTML = `
        <div class="slick-carousel">
        ${slideHTML}
        </div>
        <div id="detaildescription">
        <h2>${books.name}</h2>
        <p>${books.description}</p>
        <p id="quantity-label">Quantity per Order: ${books.quantity}</p>
        `;
    
        if (Object.keys(books.DON_reference_number).length > 1) {
          booksInfoHTML += `
          <label for="variationDropdown"><p style="display:inline-block">Variation:</p></label>
          <select id="variationDropdown">`;
    
          Object.entries(books.DON_reference_number).forEach(([variation, value]) => {
            booksInfoHTML += `<option value="${value.value}">${value.variation}</option>`;
          });
    
          booksInfoHTML += `</select><br><br>`;
        }


        if (!books.quantity) {
          booksInfoHTML += `<style>#quantity-label { display: none; }</style>`;
        }
    
        booksInfoHTML += `
        <p id="don">Item Code: </p><p id="selectedValue"><strong>${Object.values(books.DON_reference_number)[0].value}</strong></p>
        <p id="note" style="display: ${books.Note ? 'block' : 'none'}">Note: ${books.Note}</p>
        </div>
        `;
    
        document.getElementById("product-info").innerHTML = booksInfoHTML;
    
        $('.slick-carousel').slick({
          infinite: true,
          arrows: true,
          dots: true
        });
    
        const variationDropdown = document.getElementById('variationDropdown');
        const selectedValueElement = document.getElementById('selectedValue');
    
        if (variationDropdown) {
          variationDropdown.addEventListener('change', function () {
            const selectedOptionValue = variationDropdown.value.trim();
            selectedValueElement.textContent = selectedOptionValue;
          });
        }
      };
    })


     
    .then(() => fetch("./src/print.json"))
    .then(response => response.json())
    .then(data => {
      window.displayPrint = function (index) {
        const print = data.print[index];
        const slideHTML = print.image.map(imageUrl => `<div><img class="product-image" src="${imageUrl}" alt="${print.name}"></div>`).join('');
    
        let printInfoHTML = `
        <div class="slick-carousel">
        ${slideHTML}
        </div>
        <div id="detaildescription">
        <h2>${print.name}</h2>
        <p>${print.description}</p>
        <p>Quantity per Order: ${print.quantity}</p>
        `;
    
        if (Object.keys(print.DON_reference_number).length > 1) {
          printInfoHTML += `
          <label for="variationDropdown"><p style="display:inline-block">Variation:</p></label>
          <select id="variationDropdown">`;
    
          Object.entries(print.DON_reference_number).forEach(([variation, value]) => {
            printInfoHTML += `<option value="${value.value}">${value.variation}</option>`;
          });
    
          printInfoHTML += `</select><br><br>`;
        }
    
        printInfoHTML += `
        <p id="don">Item Code: </p><p id="selectedValue"><strong>${Object.values(print.DON_reference_number)[0].value}</strong></p>
        <p id="note" style="display: ${print.Note ? 'block' : 'none'}">Note: ${print.Note}</p>
        </div>
        `;
    
    
        document.getElementById("product-info").innerHTML = printInfoHTML;
    
        $('.slick-carousel').slick({
          infinite: true,
          arrows: true,
          dots: true
        });
    
        const variationDropdown = document.getElementById('variationDropdown');
        const selectedValueElement = document.getElementById('selectedValue');
    
        if (variationDropdown) {
          variationDropdown.addEventListener('change', function () {
            const selectedOptionValue = variationDropdown.value.trim();
            selectedValueElement.textContent = selectedOptionValue;
          });
        }
      };
    })




   
    .then(() => fetch("./src/presentation.json"))
    .then(response => response.json())
    .then(data => {
      window.displayPresentation = function (index) {
        const presentation = data.presentation[index];
        const slideHTML = presentation.image.map(imageUrl => `<div><img class="product-image" src="${imageUrl}" alt="${presentation.name}"></div>`).join('');
    
        let presentationInfoHTML = `
        <div class="slick-carousel">
        ${slideHTML}
        </div>
        <div id="detaildescription">
        <h2>${presentation.name}</h2>
        <p>${presentation.description}</p>
        <p>Quantity per Order: ${presentation.quantity}</p>
        `;
    
        if (Object.keys(presentation.DON_reference_number).length > 1) {
          presentationInfoHTML += `
          <label for="variationDropdown"><p style="display:inline-block">Variation:</p></label>
          <select id="variationDropdown">`;
    
          Object.entries(presentation.DON_reference_number).forEach(([variation, value]) => {
            presentationInfoHTML += `<option value="${value.value}">${value.variation}</option>`;
          });
    
          presentationInfoHTML += `</select><br><br>`;
        }
    
        presentationInfoHTML += `
        <p id="don">Item Code: </p><p id="selectedValue"><strong>${Object.values(presentation.DON_reference_number)[0].value}</strong></p>
        <p id="note" style="display: ${presentation.Note ? 'block' : 'none'}">Note: ${presentation.Note}</p>
        </div>
        `;
    
        document.getElementById("product-info").innerHTML = presentationInfoHTML;
    
        $('.slick-carousel').slick({
          infinite: true,
          arrows: true,
          dots: true
        });
    
        const variationDropdown = document.getElementById('variationDropdown');
        const selectedValueElement = document.getElementById('selectedValue');
    
        if (variationDropdown) {
          variationDropdown.addEventListener('change', function () {
            const selectedOptionValue = variationDropdown.value.trim();
            selectedValueElement.textContent = selectedOptionValue;
          });
        }
      };
    })


    
    .then(() => fetch("./src/sampling.json"))
    .then(response => response.json())
    .then(data => {
      window.displaySampling = function (index) {
        const sampling = data.sampling[index];
        const slideHTML = sampling.image.map(imageUrl => `<div><img class="product-image" src="${imageUrl}" alt="${sampling.name}"></div>`).join('');
    
        let samplingInfoHTML = `
        <div class="slick-carousel">
        ${slideHTML}
        </div>
        <div id="detaildescription">
        <h2>${sampling.name}</h2>
        <p>${sampling.description}</p>
        <p id="quantity-label">Quantity per Order: ${sampling.quantity}</p>
        `;
    
        if (Object.keys(sampling.DON_reference_number).length > 1) {
          samplingInfoHTML += `
          <label for="variationDropdown"><p style="display:inline-block">Variation:</p></label>
          <select id="variationDropdown">`;
    
          Object.entries(sampling.DON_reference_number).forEach(([variation, value]) => {
            samplingInfoHTML += `<option value="${value.value}">${value.variation}</option>`;
          });
    
          samplingInfoHTML += `</select><br><br>`;
        }

        if (!sampling.quantity) {
          samplingInfoHTML += `<style>#quantity-label { display: none; }</style>`;
        }
    
        samplingInfoHTML += `
        <p id="don">Item Code: </p><p id="selectedValue"><strong>${Object.values(sampling.DON_reference_number)[0].value}</strong></p>
        <p id="note" style="display: ${sampling.Note ? 'block' : 'none'}">Note: ${sampling.Note}</p>
        </div>
        `;
    
        document.getElementById("product-info").innerHTML = samplingInfoHTML;
    
        $('.slick-carousel').slick({
          infinite: true,
          arrows: true,
          dots: true
        });
    
        const variationDropdown = document.getElementById('variationDropdown');
        const selectedValueElement = document.getElementById('selectedValue');
    
        if (variationDropdown) {
          variationDropdown.addEventListener('change', function () {
            const selectedOptionValue = variationDropdown.value.trim();
            selectedValueElement.textContent = selectedOptionValue;
          });
        }
      };
    })


    .then(() => fetch("./src/all.json"))
    .then(response => response.json())
    .then(data => {
      window.displayAll = function (index) {
        const all = data.all[index];
        const slideHTML = all.image.map(imageUrl => `<div><img class="product-image" src="${imageUrl}" alt="${all.name}"></div>`).join('');
    
        let allInfoHTML = `
        <div class="slick-carousel">
        ${slideHTML}
        </div>
        <div id="detaildescription">
        <h2>${all.name}</h2>
        <p>${all.description}</p>
        <p id="quantity-label">Quantity per Order: ${all.quantity}</p>
        `;
    
        if (Object.keys(all.DON_reference_number).length > 1) {
          allInfoHTML += `
          <label for="variationDropdown"><p style="display:inline-block">Variation:</p></label>
          <select id="variationDropdown">`;
    
          Object.entries(all.DON_reference_number).forEach(([variation, value]) => {
            allInfoHTML += `<option value="${value.value}">${value.variation}</option>`;
          });
    
          allInfoHTML += `</select><br><br>`;
        }

        if (!all.quantity) {
          allInfoHTML += `<style>#quantity-label { display: none; }</style>`;
        }
    
        allInfoHTML += `
        <p id="don">Item Code: </p><p id="selectedValue"><strong>${Object.values(all.DON_reference_number)[0].value}</strong></p>
        <p id="note" style="display: ${all.Note ? 'block' : 'none'}">Note: ${all.Note}</p>
        </div>
        `;
    
        document.getElementById("product-info").innerHTML = allInfoHTML;
    
        $('.slick-carousel').slick({
          infinite: true,
          arrows: true,
          dots: true
        });
    
        const variationDropdown = document.getElementById('variationDropdown');
        const selectedValueElement = document.getElementById('selectedValue');
    
        if (variationDropdown) {
          variationDropdown.addEventListener('change', function () {
            const selectedOptionValue = variationDropdown.value.trim();
            selectedValueElement.textContent = selectedOptionValue;
            selectedValueElement.style.fontWeight = "strong"; // Add this line
          });
        }
      };
    })    
    

    .then(() => fetch("./src/more.json"))
    .then(response => response.json())
    .then(data => {
      window.displayMore = function (index) {
        const more = data.more[index];
        const slideHTML = more.image.map(imageUrl => `<div><img class="product-image" src="${imageUrl}" alt="${more.name}"></div>`).join('');
    
        let moreInfoHTML = `
        <div class="slick-carousel">
        ${slideHTML}
        </div>
        <div id="detaildescription">
        <h2>${more.name}</h2>
        <p>${more.description}</p>
        <p>Quantity per Order: ${more.quantity}</p>
        `;
    
        if (Object.keys(more.DON_reference_number).length > 1) {
          moreInfoHTML += `
          <label for="variationDropdown"><p style="display:inline-block">Variation:</p></label>
          <select id="variationDropdown">`;
    
          Object.entries(more.DON_reference_number).forEach(([variation, value]) => {
            moreInfoHTML += `<option value="${value.value}">${value.variation}</option>`;
          });

        moreInfoHTML += `</select><br><br>`;
    
        }
    
        moreInfoHTML += `
        <p>Variation: ${Object.values(more.DON_reference_number)[0].variation || ''}</p>
        <p id="don">Item Code: </p><p id="selectedValue"><strong>${Object.values(more.DON_reference_number)[0].value}</strong></p>
        <p id="note" style="display: ${more.Note ? 'block' : 'none'}">Note: ${more.Note}</p>
        </div>
        `;
    
        document.getElementById("product-info").innerHTML = moreInfoHTML;
    
        $('.slick-carousel').slick({
          infinite: true,
          arrows: true,
          dots: true
        });
    
        const variationDropdown = document.getElementById('variationDropdown');
        const selectedValueElement = document.getElementById('selectedValue');
    
        if (variationDropdown) {
          variationDropdown.addEventListener('change', function () {
            const selectedOptionValue = variationDropdown.value.trim();
            selectedValueElement.textContent = selectedOptionValue;
            selectedValueElement.style.fontWeight = "strong"; // Add this line
          });
        }
      };
    });
  });
