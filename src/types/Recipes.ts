export type Recipe = {
      id: 1,
      name: string,
      ingredients: string[],
      instructions: string[],
      difficulty: Difficulty,
      image: string,
      rating: number,
};

type Difficulty = "Easy" | "Medium"