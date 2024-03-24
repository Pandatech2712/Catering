function justFood(cateringFor) {
    let price = cateringFor * 50; // Předpokládaná cena pro Just Food
    return `Catering od Just Food pro ${cateringFor} lidí za ${price} Kč`;
  }

  function yourMama(cateringFor) {
    let price = cateringFor * 100; // Předpokládaná cena pro Your Mama
    return `Catering od Your Mama pro ${cateringFor} lidí za ${price} Kč`;
  }

  function flavourHaven(cateringFor) {
    let price = cateringFor * 300; // Předpokládaná cena pro Flavour Haven
    return `Catering od Flavour Haven pro ${cateringFor} lidí za ${price} Kč`;
  }

  function createEvent(eventName, peopleCount, cateringFunction) {
    return `Událost ${eventName} s ${cateringFunction(peopleCount)}`;
  }

  // Vyzkoušení funkcí
  console.log(justFood(10));
  console.log(yourMama(100));
  console.log(flavourHaven(200));

  // Vytvoření události s cateringem od Your Mama pro 200 lidí
  console.log(createEvent("Inaugurace prezidenta", 200, yourMama));