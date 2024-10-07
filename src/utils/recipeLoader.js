import fs from 'fs/promises';
import path from 'path';

export async function getRecipes(lang) {
  const recipesDir = path.join(process.cwd(), 'src', 'recipes', lang);
  const recipeFiles = await fs.readdir(recipesDir);
  
  const recipes = {};
  for (const file of recipeFiles) {
    if (file.endsWith('.json')) {
      const content = await fs.readFile(path.join(recipesDir, file), 'utf-8');
      const recipe = JSON.parse(content);
      recipes[path.parse(file).name] = recipe;
    }
  }
  
  return recipes;
}