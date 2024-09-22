enum Animal {
    CAPYBARA = "Capybara",
    CAT = "Cat",
    DOG = "Dog",
    HORSE = "Horse",
    CHICKEN = "Chicken"
}

type Pet = {
    species: Animal;
    gender: string;
    lifespan: string;
    color: string;
    breed: string;
    print(): void;
}