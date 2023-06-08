var pcData = [
  { brand: "lenovo", model: "Lenovo Legion Pro 7i (Gen8)", price: "999", description: "The best overall The Lenovo Legion Pro is the best gaming laptop from all the new machines", image: "https://cdn.mos.cms.futurecdn.net/tmdMq7otNhTjcZJhc6NUx7-970-80.jpg.webp" },
  { brand: "ACER", model: "Acer Nitro 5", price: "1499", description: "t's no looker, but the Acer Nitro 5 regularly offers some of the best component value on the market.  ", image: "https://cdn.mos.cms.futurecdn.net/EERxnFkesKsawH3yMmmCQo-970-80.jpg.webp" },
  { brand: "Alienware ", model: "Alienware M15 R7", price: "1999", description: "Le nec plus ultra des PC gaming, conçu pour les joueurs professionnels.", image: "https://cdn.mos.cms.futurecdn.net/XPvpBurXdjsX9pm7vE3LRN-970-80.jpg.webp" },
  { brand: "Asus", model: " Asus TUF Dash F15", price: "949", description: "The Asus TUF Dash F15 is a solid bet if you're after 1440p gaming that won't run into dangerous price territory. The slightly weaker processors are saving you cash but performance is still solid. ", image: "https://cdn.mos.cms.futurecdn.net/isRWBhC3KwSvkgx3VLSEWo-970-80.jpg.webp" },
  { brand: "Asus", model: " Asus ROG Zephyrus G14 ", price: "850", description: "The Asus ROG Zephyrus G14 does everything a 14-inch machine should, keeping a compact footprint while working its hardest to keep up with the performance of larger devices.", image: "https://cdn.mos.cms.futurecdn.net/4VabGMNGr93VbzJ8uGpx5f-970-80.jpg.webp" },
  { brand: "Razer ", model: "Razer Blade 15 (2022) ", price: "950", description: "Impressive performance, a sleek slimline chassis, and a stunning display make the Razer Blade 15 the best 15-incher we've tested yet. It's pricey but well worth it if you're after an investment.", image: "https://cdn.mos.cms.futurecdn.net/ApnUsdADCacGxow725uZBi-970-80.jpg.webp" },
  { brand: "Razer ", model: " Razer Blade 17", price: "750", description: "17-inch laptops have a tough job, but the Razer Blade 17 packs some incredible performance while holding onto a slimline form factor. That's rare to find, especially with a screen this good. ", image: "https://cdn.mos.cms.futurecdn.net/DKmhU5xb66B8FZsg3iomPS-970-80.jpg.webp" },
  { brand: "Asus", model: " Asus ROG Zephyrus Duo 16", price: "700", description: "The Asus ROG Zephyrus Duo 16 has overtaken the Strix Scar 16 to be the most powerful gaming laptop we've tested yet. Of course, there's lightning fast performance here, but also two screens running. ", image: "https://cdn.mos.cms.futurecdn.net/Svhxtuu7uknREyRBAu6ukS-970-80.jpg.webp" },
  { brand: "Alienware", model: "  Alienware x14", price: "1500", description: "The Alienware x14 is an impossibly thin machine, and while you're dropping down to weaker components to achieve this portability factor there's still plenty of luxury in everyday use.", image: "https://cdn.mos.cms.futurecdn.net/FWpXfFGxTJUxmLPyLd4cwQ-970-80.jpg.webp" },
  { brand: "Asus", model: "ASUS VIVOBOOK PRO 15 ", price: "550", description: "Ecran 15.6 Dalle IPS Full HD - Processeur AMD Ryzen 7-4800H,  4Go de mémoire dédiée ", image: "https://www.tunisianet.com.tn/309179-home/pc-portable-asus-vivobook-pro-15-ryzen-7-4800h-8-go.jpg" },
];


function displayPCs() {
  var pcList = $('#pcList');
  pcList.empty();

  var searchInput = $('#searchInput').val().toLowerCase();



  for (var i = 0; i < pcData.length; i++) {
    var pc = pcData[i];
    var pcBrand = pc.brand.toLowerCase();
    var pcModel = pc.model.toLowerCase();


    if (pcModel.includes(searchInput) || pcBrand.includes(searchInput) || pc.description.toLowerCase().includes(searchInput)) {



      var pcElement = $('<div class="pc"></div>');
      var modelElement = $('<div class="model"></div>').text(pc.model);
      var priceElement = $('<div class="price"></div>').text('$' + pc.price);
      var descriptionElement = $('<div class="description"></div>').text(pc.description);
      var brandElement = $('<div class="brand"></div>').text(pc.brand);
      var imageElement = $('<img src="' + pc.image + '">');


      pcElement.append(imageElement, modelElement, priceElement, descriptionElement, brandElement);


      pcList.append(pcElement);
    }
  }
}







$('#searchButton').click(displayPCs);

function sortPCsByModel() {
  pcData.sort(function(a, b) {
    var modelA = a.model.toUpperCase();
    var modelB = b.model.toUpperCase();
    if (modelA < modelB) {
      return -1;
    }
    if (modelA > modelB) {
      return 1;
    }
    return 0;
  });
  displayPCs();
}

$('#sortModelButton').click(sortPCsByModel);
displayPCs();



  
 

 


