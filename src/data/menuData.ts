export interface MenuItem {
  id: string;
  name: string;
  price: number | string;
  description?: string;
  image: string;
  category: string;
}

export const menuData: MenuItem[] = [
  // --- APPETIZERS ---
  { id: 'a1', name: 'French Fry', price: 120, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80', description: 'Crispy golden potato fries', category: 'Appetizers' },
  { id: 'a2', name: 'Spring Roll', price: 250, image: 'https://images.unsplash.com/photo-1544025162-817ab4db3f6b?auto=format&fit=crop&w=800&q=80', description: 'Crispy rolls filled with seasoned vegetables', category: 'Appetizers' },
  { id: 'a3', name: 'Chicken Nachos', price: 300, image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=800&q=80', description: 'Tortilla chips loaded with cheese and chicken', category: 'Appetizers' },
  { id: 'a4', name: 'Special Wonthon (6ps)', price: 230, image: 'https://images.unsplash.com/photo-1568227493940-a549aaf0dd5d?auto=format&fit=crop&w=800&q=80', description: 'Crispy deep-fried premium wontons', category: 'Appetizers' },
  { id: 'a5', name: 'Buffalo Wings (6ps)', price: 240, image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=800&q=80', description: 'Spicy coated chicken wings with dip', category: 'Appetizers' },
  { id: 'a6', name: 'B.B.Q Wings (6ps)', price: 200, image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80', description: 'Sweet and smoky BBQ glazed wings', category: 'Appetizers' },
  { id: 'a7', name: 'Fish Finger (6ps)', price: 250, image: 'https://images.unsplash.com/photo-1626244675713-3eb3818eade5?auto=format&fit=crop&w=800&q=80', description: 'Crispy fish fingers served with tartar sauce', category: 'Appetizers' },

  // --- PIZZA ---
  { id: 'p1', name: 'Margherita Pizza', price: '380 - 750', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80', description: 'Classic cheese, tomatoes, and fresh basil', category: 'Pizza' },
  { id: 'p2', name: 'Beef Pepperoni Pizza', price: '360 - 750', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80', description: 'Loaded with premium sliced beef pepperoni', category: 'Pizza' },
  { id: 'p3', name: 'Naga Chicken Pizza', price: '350 - 750', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80', description: 'Spicy Naga chili infused chicken pizza', category: 'Pizza' },
  { id: 'p4', name: 'Supreme Meat Pizza', price: '420 - 850', image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80', description: 'The ultimate fully loaded meat and veggie pizza', category: 'Pizza' },
  { id: 'p5', name: 'B.B.Q Chicken Pizza', price: '420 - 1250', image: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&w=800&q=80', description: 'Smoky BBQ sauce base with pulled chicken', category: 'Pizza' },

  // --- BURGERS ---
  { id: 'b1', name: 'Beef Cheese Burger', price: 150, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80', description: 'Juicy beef patty with thick melted cheese', category: 'Burgers' },
  { id: 'b2', name: 'Chicken Cheese Burger', price: 140, image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80', description: 'Grilled chicken breast with melted cheese slice', category: 'Burgers' },
  { id: 'b3', name: 'Naga Cheese Burger', price: 170, image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&w=800&q=80', description: 'Extremely spicy with melted cheese', category: 'Burgers' },
  { id: 'b4', name: 'Crispy Chicken Burger', price: 160, image: 'https://images.unsplash.com/photo-1615719413546-198b25453f85?auto=format&fit=crop&w=800&q=80', description: 'Ultra crispy fried chicken patty with mayo', category: 'Burgers' },
  { id: 'b5', name: 'Sub Sandwich', price: 200, image: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&w=800&q=80', description: 'Classic footlong style sub', category: 'Burgers' },
  { id: 'b6', name: 'Chicken Shawarma', price: 150, image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80', description: 'Middle-eastern style wrapped spiced chicken', category: 'Burgers' },

  // --- NOODLES & PASTA ---
  { id: 'n1', name: 'Oven Baked Pasta', price: 250, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80', description: 'Cheesy, golden brown baked penne pasta', category: 'Noodles & Pasta' },
  { id: 'n2', name: 'Chicken Chowmein', price: 140, image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80', description: 'Classic stir-fried noodles with chicken & veggies', category: 'Noodles & Pasta' },
  { id: 'n3', name: 'Chef Special Noodles', price: 450, image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=800&q=80', description: 'Signature large portion mixed noodles', category: 'Noodles & Pasta' },
  { id: 'n4', name: 'White Sauce Pasta', price: 200, image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80', description: 'Creamy and rich homemade white sauce pasta', category: 'Noodles & Pasta' },

  // --- FRIED CHICKEN ---
  { id: 'c1', name: 'Thai Fried Chicken (6ps)', price: 450, image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80', description: 'Authentic Thai style marinated chicken', category: 'Fried Chicken' },
  { id: 'c2', name: 'Crispy Fried Chicken (3ps)', price: 250, image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=800&q=80', description: 'Golden, crunchy outside and juicy inside', category: 'Fried Chicken' },
  { id: 'c3', name: 'Bangkok Fried Chicken (8ps)', price: 400, image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', description: 'Sweet and spicy sticky dip chicken', category: 'Fried Chicken' },

  // --- RICE ITEMS ---
  { id: 'r1', name: 'Chef Special Fried Rice', price: 450, image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', description: 'Mixed meat and vegatables wok fried rice', category: 'Rice Items' },
  { id: 'r2', name: 'Chicken Masala Curry', price: 400, image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80', description: 'Rich, spicy, and hearty chicken curry', category: 'Rice Items' },

  // --- SET MENU ---
  { id: 'sm1', name: 'Set Menu 1', price: 250, image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', description: 'Fried Rice + Fried Chicken + Salad', category: 'Set Menu' },
  { id: 'sm3', name: 'Set Menu 3', price: 280, image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80', description: 'Fried Rice + Thai Fried Chicken + Chicken Masala + Salad', category: 'Set Menu' },
  { id: 'sm4', name: 'Set Menu 4', price: 400, image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80', description: 'Fried Rice + Beef Masala + Fried Chicken + Veg', category: 'Set Menu' },

  // --- SOUP & SALAD ---
  { id: 's1', name: 'Thai Clear Soup', price: 150, image: 'https://images.unsplash.com/photo-1511910849309-0dffb8785146?auto=format&fit=crop&w=800&q=80', description: 'Zesty lemongrass, mushroom and shrimp broth', category: 'Soup & Salad' },
  { id: 's2', name: 'Chicken Corn Soup', price: 120, image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80', description: 'Thick, comforting classic chicken corn soup', category: 'Soup & Salad' },
  { id: 's3', name: 'Chicken Cashew nut Salad', price: 400, image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80', description: 'Crunchy veggies and nuts with tender chicken', category: 'Soup & Salad' },

  // --- JUICE & SHAKE ---
  { id: 'j1', name: 'Mango Milk Shake', price: 140, image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=800&q=80', description: 'Thick and creamy fresh mango shake', category: 'Juice & Shake' },
  { id: 'j2', name: 'Oreo Milk Shake', price: 170, image: 'https://images.unsplash.com/photo-1553177595-4de2bb0842b9?auto=format&fit=crop&w=800&q=80', description: 'Crushed Oreo cookies blended with vanilla', category: 'Juice & Shake' },
  { id: 'j3', name: 'Cold Coffee', price: 140, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80', description: 'Chilled, frothy iced coffee', category: 'Juice & Shake' },

  // --- ICE CREAM ---
  { id: 'i1', name: 'Vanilla Ice Cream', price: 120, image: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=800&q=80', description: 'Classic creamy vanilla scoops', category: 'Ice Cream' },
  { id: 'i2', name: 'Chocolate Ice Cream', price: 140, image: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&w=800&q=80', description: 'Rich, dark chocolate ice cream scoops', category: 'Ice Cream' },
  { id: 'i3', name: 'Special Faluda', price: 200, image: 'https://images.unsplash.com/photo-1555507036-ab1f40388cb8?auto=format&fit=crop&w=800&q=80', description: 'Traditional dessert layered with fruits and ice cream', category: 'Ice Cream' },
  { id: 'i4', name: 'Strawberry Parfait', price: 220, image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=800&q=80', description: 'Premium layered strawberry sundae with jelly and ice cream', category: 'Ice Cream' }
];

export const categories = Array.from(new Set(menuData.map(item => item.category)));
