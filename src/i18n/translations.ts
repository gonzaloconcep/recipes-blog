export const languages = ['en', 'es'];

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.recipes': 'Recipes',
    'nav.about': 'About',
    'search.placeholder': 'Search recipes or ingredients...',
    'search.button': 'Search',
    'search.results': 'Showing results for',
    'hero.title': 'Welcome to Delicious Recipe Blog',
    'hero.subtitle': 'Discover mouthwatering recipes and culinary inspiration!',
    'featured.title': 'Featured Recipes',
    'categories.title': 'Recipe Categories',
    'category.appetizers': 'Appetizers',
    'category.mainCourses': 'Main Courses',
    'category.desserts': 'Desserts',
    'ingredients': 'Ingredients',
    'instructions': 'Instructions',
    'step': 'Step',
    'no.results': 'No recipes found. Try a different search term.',
    'back.home': 'Back to Home',
    'about.description': 'Welcome to Delicious Recipe Blog, your go-to source for mouthwatering recipes and culinary inspiration. Our passion is to share delicious, easy-to-follow recipes that will bring joy to your kitchen and dining table.'
  },
  es: {
    'nav.home': 'Inicio',
    'nav.recipes': 'Recetas',
    'nav.about': 'Acerca de',
    'search.placeholder': 'Buscar recetas o ingredientes...',
    'search.button': 'Buscar',
    'search.results': 'Mostrando resultados para',
    'hero.title': 'Bienvenido al Blog de Recetas Deliciosas',
    'hero.subtitle': '¡Descubre recetas deliciosas e inspiración culinaria!',
    'featured.title': 'Recetas Destacadas',
    'categories.title': 'Categorías de Recetas',
    'category.appetizers': 'Entrantes',
    'category.mainCourses': 'Platos Principales',
    'category.desserts': 'Postres',
    'ingredients': 'Ingredientes',
    'instructions': 'Instrucciones',
    'step': 'Paso',
    'no.results': 'No se encontraron recetas. Intenta con un término de búsqueda diferente.',
    'back.home': 'Volver al Inicio',
    'about.description': 'Bienvenido al Blog de Recetas Deliciosas, tu fuente de inspiración para recetas deliciosas y culinarias. Nuestra pasión es compartir recetas deliciosas y fáciles de seguir que traerán alegría a tu cocina y mesa.'
  },
} as const;

// Export recipes separately
export { default as recipes } from '../data/recipes.json';